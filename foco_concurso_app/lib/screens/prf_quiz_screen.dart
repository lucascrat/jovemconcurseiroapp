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
  List<QuizQuestion>? _loadedQuestions;
  int _currentIndex = 0;
  String? _selectedOption;
  bool _isAnswerRevealed = false;
  bool _isReviewMode = false;
  
  // Scoring & History
  int _corrects = 0;
  int _wrongs = 0;
  final Map<int, String> _userAnswers = {};

  @override
  void initState() {
    super.initState();
    _questionsFuture = Provider.of<StudyProvider>(context, listen: false)
        .getQuestionsByExam('PRF', ano: widget.year);
  }

  void _submitAnswer(QuizQuestion question) {
    if (_selectedOption == null) return;
    
    _userAnswers[_currentIndex] = _selectedOption!;
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
        title: const Text('Resultado Final'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                const Icon(Icons.check_circle, color: Colors.green),
                const SizedBox(width: 8),
                Text('Acertos: $_corrects', style: const TextStyle(color: Colors.green, fontWeight: FontWeight.bold, fontSize: 18)),
              ],
            ),
            const SizedBox(height: 8),
            Row(
              children: [
                const Icon(Icons.cancel, color: Colors.red),
                const SizedBox(width: 8),
                Text('Erros: $_wrongs', style: const TextStyle(color: Colors.red, fontWeight: FontWeight.bold, fontSize: 18)),
              ],
            ),
            const Divider(height: 32),
            Center(
              child: Column(
                children: [
                  const Text('Nota Líquida (Cebraspe)', style: TextStyle(color: Colors.grey)),
                  Text('$totalScore', style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: Colors.blue)),
                ],
              ),
            ),
            const SizedBox(height: 16),
            const Text('*Cada erro anula uma questão certa.', style: TextStyle(fontSize: 11, fontStyle: FontStyle.italic, color: Colors.grey)),
          ],
        ),
        actionsAlignment: MainAxisAlignment.spaceBetween,
        actions: [
          TextButton(
            onPressed: () {
              Navigator.pop(context); // Close dialog
              setState(() => _isReviewMode = true);
            },
            child: const Text('REVISAR QUESTÕES', style: TextStyle(fontWeight: FontWeight.bold)),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context); // Close dialog
              Navigator.pop(context); // Back to module
            },
            style: ElevatedButton.styleFrom(backgroundColor: Colors.blue[800], foregroundColor: Colors.white),
            child: const Text('FINALIZAR'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_isReviewMode ? 'Revisão do Simulado' : 'Simulado PRF ${widget.year}'),
        backgroundColor: Colors.blue[800],
        foregroundColor: Colors.white,
        actions: _isReviewMode ? [
          IconButton(
            icon: const Icon(Icons.close),
            onPressed: () => Navigator.pop(context),
          )
        ] : null,
      ),
      body: FutureBuilder<List<QuizQuestion>>(
        future: _questionsFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting && _loadedQuestions == null) {
             return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
             return Center(child: Text('Erro: ${snapshot.error}'));
          }

          _loadedQuestions ??= snapshot.data;
          final questions = _loadedQuestions ?? [];
          
          if (questions.isEmpty) {
            return const Center(child: Text('Nenhuma questão encontrada para este ano.'));
          }

          if (_isReviewMode) {
            return _buildReviewList(questions);
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
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Questão ${_currentIndex + 1} de ${questions.length}',
                            style: const TextStyle(color: Colors.grey, fontWeight: FontWeight.bold),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: Colors.grey[200],
                              borderRadius: BorderRadius.circular(4),
                            ),
                            child: Text(
                              '${currentQuestion.banca} • ${currentQuestion.ano}',
                              style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: Colors.blue[50],
                          borderRadius: BorderRadius.circular(8),
                          border: Border.all(color: Colors.blue[100]!),
                        ),
                        child: Text(
                          _getTopicName(currentQuestion.topicId),
                          style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.blue, fontSize: 13),
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
                          elevation: 2,
                        ),
                        child: Text(_isAnswerRevealed ? 'PRÓXIMA' : 'CONFIRMAR RESPOSTA', style: const TextStyle(letterSpacing: 1.2, fontWeight: FontWeight.bold)),
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

  String _getTopicName(String id) {
     // Improvement: Try to cleanup the UUID if it's there
     if (id.length > 20) {
        return "Tópico Específico da Prova";
     }
     return id.replaceAll('_', ' ').toUpperCase();
  }

  Widget _buildReviewList(List<QuizQuestion> questions) {
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: questions.length,
      itemBuilder: (context, index) {
        final q = questions[index];
        final userAns = _userAnswers[index];
        final isCorrect = userAns == q.correctAnswer;

        return Card(
          margin: const EdgeInsets.only(bottom: 16),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
          child: ExpansionTile(
            title: Row(
              children: [
                CircleAvatar(
                  backgroundColor: isCorrect ? Colors.green : Colors.red,
                  radius: 12,
                  child: Icon(isCorrect ? Icons.check : Icons.close, color: Colors.white, size: 16),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    'Questão ${index + 1}',
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
                if (!isCorrect && userAns == null)
                  const Text('Não Respondida', style: TextStyle(color: Colors.grey, fontSize: 12)),
              ],
            ),
            subtitle: Text(q.statement, maxLines: 1, overflow: TextOverflow.ellipsis),
            children: [
              Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(q.statement, style: const TextStyle(fontWeight: FontWeight.w500)),
                    const SizedBox(height: 16),
                    ...q.options.entries.map((e) {
                       bool isUserChoice = e.key == userAns;
                       bool isCorrectChoice = e.key == q.correctAnswer;
                       Color textColor = Colors.black;
                       IconData? icon;
                       
                       if (isCorrectChoice) {
                         textColor = Colors.green;
                         icon = Icons.check_circle;
                       } else if (isUserChoice) {
                         textColor = Colors.red;
                         icon = Icons.cancel;
                       }

                       return Container(
                         margin: const EdgeInsets.only(bottom: 4),
                         padding: const EdgeInsets.all(8),
                         decoration: BoxDecoration(
                           color: isCorrectChoice ? Colors.green[50] : (isUserChoice ? Colors.red[50] : null),
                           borderRadius: BorderRadius.circular(4),
                         ),
                         child: Row(
                           children: [
                             Text('${e.key.toUpperCase()}: ', style: TextStyle(fontWeight: FontWeight.bold, color: textColor)),
                             Expanded(child: Text(e.value, style: TextStyle(color: textColor))),
                             if (icon != null) Icon(icon, color: textColor, size: 16),
                           ],
                         ),
                       );
                    }).toList(),
                    const Divider(height: 32),
                    _buildExplanation(q.explanation),
                  ],
                ),
              )
            ],
          ),
        );
      },
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
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            border: Border.all(color: color, width: 2),
            borderRadius: BorderRadius.circular(12),
            color: isSelected ? color.withOpacity(0.05) : Colors.white,
            boxShadow: isSelected && !_isAnswerRevealed ? [
              BoxShadow(color: Colors.blue.withOpacity(0.1), blurRadius: 4, offset: const Offset(0, 2))
            ] : null,
          ),
          child: Row(
            children: [
              Container(
                width: 32,
                height: 32,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: isSelected ? color : Colors.transparent,
                  border: Border.all(color: isSelected ? color : Colors.grey[400]!),
                ),
                child: Center(
                  child: Text(
                    key.toUpperCase(), 
                    style: TextStyle(
                      fontWeight: FontWeight.bold, 
                      color: isSelected ? Colors.white : Colors.grey[600]
                    )
                  ),
                ),
              ),
              const SizedBox(width: 16),
              Expanded(child: Text(text, style: TextStyle(fontSize: 16, color: Colors.grey[800]))),
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
        color: Colors.blueGrey[50],
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.blueGrey[100]!),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.lightbulb, color: Colors.amber[700], size: 20),
              const SizedBox(width: 8),
              Text('EXPLICAÇÃO TÉCNICA', style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blueGrey[800], fontSize: 12)),
            ],
          ),
          const Divider(),
          const SizedBox(height: 8),
          Text(explanation, style: TextStyle(color: Colors.blueGrey[900], height: 1.4)),
        ],
      ),
    );
  }
}
