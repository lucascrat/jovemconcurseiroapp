import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/models.dart';
import '../services/database_service.dart';

class StudyProvider with ChangeNotifier {
  DatabaseService? _dbService;
  List<Subject> _subjects = [];
  bool _isLoading = false;

  List<Subject> get subjects => _subjects;
  bool get isLoading => _isLoading;

  Future<void> initialize() async {
    _isLoading = true;
    notifyListeners();
    
    try {
      _dbService = await DatabaseService.connect();
      _subjects = await _dbService!.getSubjects();
    } catch (e) {
      print("Connection error: $e");
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<List<Topic>> getTopics(String subjectId) async {
    if (_dbService == null) return [];
    return await _dbService!.getTopicsForSubject(subjectId);
  }

  Future<List<SubTopic>> getSubTopics(String topicId) async {
    if (_dbService == null) return [];
    return await _dbService!.getSubTopicsForTopic(topicId);
  }

  Future<List<QuizQuestion>> getQuestions(String topicId) async {
    if (_dbService == null) return [];
    return await _dbService!.getQuestionsForTopic(topicId);
  }

  @override
  void dispose() {
    _dbService?.close();
    super.dispose();
  }
}
