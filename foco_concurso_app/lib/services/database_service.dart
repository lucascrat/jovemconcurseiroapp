import 'package:postgres/postgres.dart';
import '../models/models.dart';

class DatabaseService {
  final Pool _connection;

  DatabaseService(this._connection);

  static Future<DatabaseService> connect() async {
    final pool = Pool.withEndpoints(
      [
        Endpoint(
          host: '187.77.230.251',
          database: 'postgres',
          username: 'postgres',
          password: 'km3nWyqka6tb1HloQdxJFp8ahIkkdPyRS0CN4gje6XSFAaSAdGlgO3hvOk4t2DQI',
          port: 5437,
        )
      ],
      settings: PoolSettings(
        sslMode: SslMode.disable,
      ),
    );
    return DatabaseService(pool);
  }

  Future<List<Subject>> getSubjects() async {
    final results = await _connection.execute('SELECT id, name, level, description FROM "Subject"');
    return results.map((row) => Subject.fromMap(row.toColumnMap())).toList();
  }

  Future<List<Topic>> getTopicsForSubject(String subjectId) async {
    final results = await _connection.execute(
      Sql.named('SELECT id, "subjectId", title, "videoUrl", content, "order" FROM "Topic" WHERE "subjectId" = @id ORDER BY "order"'),
      parameters: {'id': subjectId},
    );
    return results.map((row) => Topic.fromMap(row.toColumnMap())).toList();
  }

  Future<List<SubTopic>> getSubTopicsForTopic(String topicId) async {
    final results = await _connection.execute(
      Sql.named('SELECT id, "topicId", name, "importanciaBanca", "blocosSugeridos", content FROM "SubTopic" WHERE "topicId" = @id'),
      parameters: {'id': topicId},
    );
    return results.map((row) => SubTopic.fromMap(row.toColumnMap())).toList();
  }

  Future<List<QuizQuestion>> getQuestionsForTopic(String topicId) async {
    final results = await _connection.execute(
      Sql.named('SELECT id, "topicId", banca, statement, options, "correctAnswer", type, explanation FROM "Question" WHERE "topicId" = @id'),
      parameters: {'id': topicId},
    );
    return results.map((row) => QuizQuestion.fromMap(row.toColumnMap())).toList();
  }

  Future<void> close() async {
    await _connection.close();
  }
}
