class Subject {
  final String id;
  final String name;
  final String level;
  final String description;

  Subject({
    required this.id,
    required this.name,
    required this.level,
    required this.description,
  });

  factory Subject.fromMap(Map<String, dynamic> map) {
    return Subject(
      id: map['id'] as String,
      name: map['name'] as String,
      level: map['level'] as String,
      description: map['description'] as String? ?? '',
    );
  }
}

class Topic {
  final String id;
  final String subjectId;
  final String title;
  final String videoUrl;
  final String content;
  final int order;

  Topic({
    required this.id,
    required this.subjectId,
    required this.title,
    required this.videoUrl,
    required this.content,
    required this.order,
  });

  factory Topic.fromMap(Map<String, dynamic> map) {
    return Topic(
      id: map['id'] as String,
      subjectId: map['subjectId'] as String,
      title: map['title'] as String,
      videoUrl: map['videoUrl'] as String? ?? '',
      content: map['content'] as String? ?? '',
      order: map['order'] as int? ?? 0,
    );
  }
}

class SubTopic {
  final String id;
  final String topicId;
  final String name;
  final Map<String, dynamic> importanciaBanca;
  final List<String> blocosSugeridos;
  final String content;

  SubTopic({
    required this.id,
    required this.topicId,
    required this.name,
    required this.importanciaBanca,
    required this.blocosSugeridos,
    required this.content,
  });

  factory SubTopic.fromMap(Map<String, dynamic> map) {
    return SubTopic(
      id: map['id'] as String,
      topicId: map['topicId'] as String,
      name: map['name'] as String,
      importanciaBanca: map['importanciaBanca'] != null ? Map<String, dynamic>.from(map['importanciaBanca'] as Map) : {},
      blocosSugeridos: map['blocosSugeridos'] != null ? List<String>.from(map['blocosSugeridos'] as List) : [],
      content: map['content'] as String? ?? '',
    );
  }
}

class QuizQuestion {
  final String id;
  final String topicId;
  final String banca;
  final String statement;
  final Map<String, String> options;
  final String correctAnswer;
  final String type;
  final String explanation;

  QuizQuestion({
    required this.id,
    required this.topicId,
    required this.banca,
    required this.statement,
    required this.options,
    required this.correctAnswer,
    required this.type,
    required this.explanation,
  });

  factory QuizQuestion.fromMap(Map<String, dynamic> map) {
    Map<String, String> parsedOptions = {};
    if (map['options'] != null) {
      final dynMap = Map<String, dynamic>.from(map['options'] as Map);
      dynMap.forEach((key, value) {
        parsedOptions[key] = value.toString();
      });
    }

    return QuizQuestion(
      id: map['id'] as String,
      topicId: map['topicId'] as String,
      banca: map['banca'] as String? ?? 'Desconhecida',
      statement: map['statement'] as String? ?? '',
      options: parsedOptions,
      correctAnswer: map['correctAnswer'] as String? ?? '',
      type: map['type'] as String? ?? '',
      explanation: map['explanation'] as String? ?? '',
    );
  }
}
