import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/models.dart';
import 'package:flutter/foundation.dart' show kIsWeb;

class DatabaseService {
  final String baseUrl;

  DatabaseService(this.baseUrl);

  static Future<DatabaseService> connect() async {
    // No Coolify/Produção, a API roda na mesma porta que o App estático.
    // Usamos a URL base vazia ou definimos dinamicamente.
    String url = "";
    if (!kIsWeb) {
      // Se fosse rodar em mobile/desktop localmente, precisaria do IP do servidor.
      url = "http://187.77.230.251"; 
    }
    return DatabaseService(url);
  }

  Future<List<Subject>> getSubjects() async {
    final response = await http.get(Uri.parse('$baseUrl/api/subjects'));
    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);
      return data.map((json) => Subject.fromMap(json)).toList();
    }
    throw Exception('Failed to load subjects');
  }

  Future<List<Topic>> getTopicsForSubject(String subjectId) async {
    final response = await http.get(Uri.parse('$baseUrl/api/topics/$subjectId'));
    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);
      return data.map((json) => Topic.fromMap(json)).toList();
    }
    throw Exception('Failed to load topics');
  }

  Future<List<SubTopic>> getSubTopicsForTopic(String topicId) async {
    final response = await http.get(Uri.parse('$baseUrl/api/subtopics/$topicId'));
    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);
      return data.map((json) => SubTopic.fromMap(json)).toList();
    }
    throw Exception('Failed to load subtopics');
  }

  Future<List<QuizQuestion>> getQuestionsForTopic(String topicId) async {
    final response = await http.get(Uri.parse('$baseUrl/api/questions/$topicId'));
    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);
      return data.map((json) => QuizQuestion.fromMap(json)).toList();
    }
    throw Exception('Failed to load questions');
  }

  Future<List<QuizQuestion>> getQuestionsByExam(String concurso, {int? ano}) async {
    String url = '$baseUrl/api/questions/filter/$concurso';
    if (ano != null) {
      url += '?ano=$ano';
    }
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);
      return data.map((json) => QuizQuestion.fromMap(json)).toList();
    }
    throw Exception('Failed to load questions for $concurso');
  }

  Future<List<ExamBoard>> getExamBoards() async {
    final response = await http.get(Uri.parse('$baseUrl/api/boards'));
    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);
      return data.map((json) => ExamBoard.fromMap(json)).toList();
    }
    throw Exception('Failed to load exam boards');
  }

  Future<void> close() async {
    // Nothing to close for HTTP
  }
}
