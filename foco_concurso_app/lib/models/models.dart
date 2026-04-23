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
  final String audioUrl;
  final String mindMapUrl;

  Topic({
    required this.id,
    required this.subjectId,
    required this.title,
    required this.videoUrl,
    required this.content,
    required this.order,
    this.audioUrl = '',
    this.mindMapUrl = '',
  });

  factory Topic.fromMap(Map<String, dynamic> map) {
    return Topic(
      id: map['id'] as String,
      subjectId: map['subjectId'] as String,
      title: map['title'] as String,
      videoUrl: map['videoUrl'] as String? ?? '',
      content: map['content'] as String? ?? '',
      order: map['order'] as int? ?? 0,
      audioUrl: map['audioUrl'] as String? ?? '',
      mindMapUrl: map['mindMapUrl'] as String? ?? '',
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
  final String videoUrl;
  final String audioUrl;
  final String mindMapUrl;

  SubTopic({
    required this.id,
    required this.topicId,
    required this.name,
    required this.importanciaBanca,
    required this.blocosSugeridos,
    required this.content,
    this.videoUrl = '',
    this.audioUrl = '',
    this.mindMapUrl = '',
  });

  factory SubTopic.fromMap(Map<String, dynamic> map) {
    return SubTopic(
      id: map['id'] as String,
      topicId: map['topicId'] as String,
      name: map['name'] as String,
      importanciaBanca: map['importanciaBanca'] != null ? Map<String, dynamic>.from(map['importanciaBanca'] as Map) : {},
      blocosSugeridos: map['blocosSugeridos'] != null ? List<String>.from(map['blocosSugeridos'] as List) : [],
      content: map['content'] as String? ?? '',
      videoUrl: map['videoUrl'] as String? ?? '',
      audioUrl: map['audioUrl'] as String? ?? '',
      mindMapUrl: map['mindMapUrl'] as String? ?? '',
    );
  }
}

class QuizQuestion {
  final String id;
  final String topicId;
  final String banca;
  final String textBase;
  final String statement;
  final Map<String, String> options;
  final String correctAnswer;
  final String type;
  final String explanation;
  final String? concurso;
  final int? ano;

  QuizQuestion({
    required this.id,
    required this.topicId,
    required this.banca,
    this.textBase = '',
    required this.statement,
    required this.options,
    required this.correctAnswer,
    required this.type,
    required this.explanation,
    this.concurso,
    this.ano,
  });

  factory QuizQuestion.fromMap(Map<String, dynamic> map) {
    Map<String, String> parsedOptions = {};
    if (map['options'] != null) {
      if (map['options'] is Map) {
        final dynMap = Map<String, dynamic>.from(map['options'] as Map);
        dynMap.forEach((key, value) {
          parsedOptions[key] = value.toString();
        });
      } else if (map['options'] is List) {
        final dynList = map['options'] as List;
        final keys = ['a', 'b', 'c', 'd', 'e'];
        for (var i = 0; i < dynList.length && i < keys.length; i++) {
          parsedOptions[keys[i]] = dynList[i].toString();
        }
      }
    }

    return QuizQuestion(
      id: map['id'] as String,
      topicId: map['topicId'] as String,
      banca: map['banca'] as String? ?? 'Desconhecida',
      textBase: map['textBase'] as String? ?? '',
      statement: map['statement'] as String? ?? '',
      options: parsedOptions,
      correctAnswer: map['correctAnswer'] as String? ?? '',
      type: map['type'] as String? ?? '',
      explanation: map['explanation'] as String? ?? '',
      concurso: map['concurso'] as String?,
      ano: map['ano'] as int?,
    );
  }
}

class ExamBoard {
  final String id;
  final String name;
  final String difficulty;
  final String style;
  final String lawFocus;
  final String mainFeature;
  final String description;
  final String tips;

  ExamBoard({
    required this.id,
    required this.name,
    required this.difficulty,
    required this.style,
    required this.lawFocus,
    required this.mainFeature,
    required this.description,
    required this.tips,
  });

  factory ExamBoard.fromMap(Map<String, dynamic> map) {
    return ExamBoard(
      id: map['id'] as String,
      name: map['name'] as String,
      difficulty: map['difficulty'] as String? ?? '',
      style: map['style'] as String? ?? '',
      lawFocus: map['lawFocus'] as String? ?? '',
      mainFeature: map['mainFeature'] as String? ?? '',
      description: map['description'] as String? ?? '',
      tips: map['tips'] as String? ?? '',
    );
  }
}
