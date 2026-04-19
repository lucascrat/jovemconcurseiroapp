import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/models.dart';
import '../providers/study_provider.dart';
import '../theme/app_theme.dart';

class PrfQuizScreen extends StatefulWidget {
  final int year;

  const PrfQuizScreen({super.key, required this.year});

  @override
  State<PrfQuizScreen> createState() => _PrfQuizScreenState();
}

class _PrfQuizScreenState extends State<PrfQuizScreen> {
  late Future<List<QuizQuestion>> _questionsFuture;
  int _currentIndex = 0;
  String? _selectedOption;
  bool _isAnswerRevealed = false;
  
  // Scoring
  int _corrects = 0;
  int _wrongs = 0;

  @override
  void initState() {
    super.initState();
    _questionsFuture = Provider.of<StudyProvider>(context, listen: false)
        .getQuestionsByExam('PRF', ano: widget.year);
  }

  void _submitAnswer(QuizQuestion question) {
    if (_selectedOption == null) return;
    
    bool isCorrect = _selectedOption == question.correctAnswer;
    setState(() {
      _isAnswerRevealed = true;
      if (isCorrect) {
        _corrects++;
      } else {
        _wrongs++;
      }
    });
  }

  void _nextQuestion(int total) {
    if (_currentIndex < total - 1) {
      setState(() {
        _currentIndex++;
        _selectedOption = null;
        _isAnswerRevealed = false;
      });
    } else {
      _showResults();
    }
  }

  void _showResults() {
    int totalScore = _corrects - _wrongs;
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        title: const Text('Resultado - Padrão Cebraspe'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Acertos: $_corrects', style: const TextStyle(color: Colors.green, fontWeight: FontWeight.bold)),
            Text('Erros: $_wrongs', style: const TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
            const Divider(),
            Text('Nota Líquida: $totalScore', style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            const Text('*No padrão Cebraspe, uma questão errada anula uma certa.', style: TextStyle(fontSize: 12, fontStyle: FontStyle.italic)),
          ],
        ),
        actions: [
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context); // Close dialog
              Navigator.pop(context); // Back to module
            },
            child: const Text('Finalizar'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Simulado PRF ${widget.year}'),
        backgroundColor: Colors.blue[800],
        foregroundColor: Colors.white,
      ),
      body: FutureBuilder<List<QuizQuestion>>(
        future: _questionsFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
             return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
             return Center(child: Text('Erro: ${snapshot.error}'));
          }

          final questions = snapshot.data ?? [];
          if (questions.isEmpty) {
            return const Center(child: Text('Nenhuma questão encontrada para este ano.'));
          }

          final currentQuestion = questions[_currentIndex];

          return Column(
            children: [
              LinearProgressIndicator(
                value: (_currentIndex + 1) / questions.length,
                backgroundColor: Colors.grey[200],
                color: Colors.blue,
              ),
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Text(
                        'Questão ${_currentIndex + 1} de ${questions.length}',
                        style: const TextStyle(color: Colors.grey, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(height: 12),
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: Colors.blue[50],
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Text(
                          currentQuestion.topicId.split('/').last, // Simple topic display
                          style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.blue),
                        ),
                      ),
                      const SizedBox(height: 20),
                      Text(
                        currentQuestion.statement,
                        style: const TextStyle(fontSize: 18, height: 1.5, fontWeight: FontWeight.w500),
                      ),
                      const SizedBox(height: 32),
                      
                      ...currentQuestion.options.entries.map((entry) {
                        final key = entry.key;
                        final text = entry.value;
                        bool isSelected = _selectedOption == key;
                        bool isCorrect = key == currentQuestion.correctAnswer;
                        
                        return _buildOption(key, text, isSelected, isCorrect);
                      }).toList(),

                      if (_isAnswerRevealed) ...[
                        const SizedBox(height: 20),
                        _buildExplanation(currentQuestion.explanation),
                      ],
                      
                      const SizedBox(height: 40),
                      ElevatedButton(
                        onPressed: _selectedOption == null 
                            ? null 
                            : () {
                                if (!_isAnswerRevealed) {
                                  _submitAnswer(currentQuestion);
                                } else {
                                  _nextQuestion(questions.length);
                                }
                              },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.blue[800],
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                        child: Text(_isAnswerRevealed ? 'Próxima' : 'Confirmar'),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildOption(String key, String text, bool isSelected, bool isCorrect) {
    Color color = Colors.grey[300]!;
    if (_isAnswerRevealed) {
      if (isCorrect) color = Colors.green;
      else if (isSelected) color = Colors.red;
    } else if (isSelected) {
      color = Colors.blue;
    }

    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: InkWell(
        onTap: _isAnswerRevealed ? null : () => setState(() => _selectedOption = key),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            border: Border.all(color: color, width: 2),
            borderRadius: BorderRadius.circular(12),
            color: isSelected ? color.withOpacity(0.05) : Colors.white,
          ),
          child: Row(
            children: [
              Text(key.toUpperCase(), style: TextStyle(fontWeight: FontWeight.bold, color: color)),
              const SizedBox(width: 16),
              Expanded(child: Text(text)),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildExplanation(String explanation) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.orange[50],
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.orange[200]!),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('Por que?', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.orange)),
          const SizedBox(height: 8),
          Text(explanation),
        ],
      ),
    );
  }
}
