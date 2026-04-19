import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/models.dart';
import '../providers/study_provider.dart';
import '../theme/app_theme.dart';

class QuizScreen extends StatefulWidget {
  final SubTopic subTopic;

  const QuizScreen({super.key, required this.subTopic});

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  late Future<List<QuizQuestion>> _questionsFuture;
  int _currentIndex = 0;
  String? _selectedOption;
  bool _isAnswerRevealed = false;

  @override
  void initState() {
    super.initState();
    // Fetch questions for this topic
    _questionsFuture = Provider.of<StudyProvider>(context, listen: false).getQuestions(widget.subTopic.topicId);
  }

  void _submitAnswer(String correctAnswer) {
    if (_selectedOption == null) return;
    setState(() {
      _isAnswerRevealed = true;
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
      // Quiz finished
      Navigator.pop(context);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Questões'),
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
            return const Center(
              child: Padding(
                padding: EdgeInsets.all(20.0),
                child: Text(
                  'Ainda não há questões cadastradas para esta matéria no banco de dados. Volte mais tarde!',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 16),
                ),
              ),
            );
          }

          final currentQuestion = questions[_currentIndex];

          return SingleChildScrollView(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                // Header (Progress)
                Text(
                  'Questão ${_currentIndex + 1} de ${questions.length}',
                  style: const TextStyle(color: Colors.grey, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Chip(
                      label: Text(currentQuestion.banca, style: const TextStyle(fontSize: 12)),
                      backgroundColor: Colors.grey[200],
                    ),
                  ],
                ),
                const SizedBox(height: 20),
                
                // Question Statement
                Text(
                  currentQuestion.statement,
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w600, height: 1.5),
                ),
                const SizedBox(height: 32),

                // Options
                ...currentQuestion.options.entries.map((entry) {
                  final key = entry.key; // 'A', 'B', etc
                  final text = entry.value;
                  
                  bool isSelected = _selectedOption == key;
                  bool isCorrect = key == currentQuestion.correctAnswer;
                  
                  Color borderColor = Colors.grey[300]!;
                  Color bgColor = Colors.white;
                  Color textColor = Colors.black87;

                  if (_isAnswerRevealed) {
                    if (isCorrect) {
                      borderColor = Colors.green;
                      bgColor = Colors.green.withOpacity(0.1);
                    } else if (isSelected && !isCorrect) {
                      borderColor = Colors.red;
                      bgColor = Colors.red.withOpacity(0.1);
                    }
                  } else if (isSelected) {
                    borderColor = AppTheme.primaryColor;
                    bgColor = AppTheme.primaryColor.withOpacity(0.05);
                  }

                  return Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: InkWell(
                      onTap: _isAnswerRevealed ? null : () {
                        setState(() { _selectedOption = key; });
                      },
                      borderRadius: BorderRadius.circular(12),
                      child: Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: bgColor,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: borderColor, width: 2),
                        ),
                        child: Row(
                          children: [
                            CircleAvatar(
                              radius: 16,
                              backgroundColor: _isAnswerRevealed && isCorrect 
                                  ? Colors.green 
                                  : (_isAnswerRevealed && isSelected && !isCorrect) ? Colors.red : AppTheme.primaryColor,
                              foregroundColor: Colors.white,
                              child: Text(key, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold)),
                            ),
                            const SizedBox(width: 16),
                            Expanded(child: Text(text, style: TextStyle(color: textColor, fontSize: 15))),
                            if (_isAnswerRevealed && isCorrect)
                              const Icon(Icons.check_circle, color: Colors.green),
                            if (_isAnswerRevealed && isSelected && !isCorrect)
                              const Icon(Icons.cancel, color: Colors.red),
                          ],
                        ),
                      ),
                    ),
                  );
                }).toList(),

                const SizedBox(height: 32),

                // Explanation
                if (_isAnswerRevealed && currentQuestion.explanation.isNotEmpty)
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: Colors.blue[50],
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: Colors.blue[200]!),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Row(
                          children: [
                            Icon(Icons.lightbulb_outline, color: Colors.blue),
                            SizedBox(width: 8),
                            Text("Comentário do Professor", style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue)),
                          ],
                        ),
                        const SizedBox(height: 8),
                        Text(currentQuestion.explanation, style: const TextStyle(color: Colors.black87, height: 1.4)),
                      ],
                    ),
                  ),

                const SizedBox(height: 32),

                // Submit / Next button
                ElevatedButton(
                  onPressed: _selectedOption == null 
                      ? null 
                      : () {
                          if (!_isAnswerRevealed) {
                            _submitAnswer(currentQuestion.correctAnswer);
                          } else {
                            _nextQuestion(questions.length);
                          }
                        },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primaryColor,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  ),
                  child: Text(
                    !_isAnswerRevealed 
                       ? "Confirmar Resposta" 
                       : (_currentIndex < questions.length - 1 ? "Próxima Questão" : "Finalizar Quiz"),
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
