import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../models/models.dart';
import '../providers/study_provider.dart';
import '../theme/app_theme.dart';
import 'sub_topic_detail_screen.dart';

class TopicsScreen extends StatefulWidget {
  final Subject subject;

  const TopicsScreen({super.key, required this.subject});

  @override
  State<TopicsScreen> createState() => _TopicsScreenState();
}

class _TopicsScreenState extends State<TopicsScreen> {
  late Future<List<Topic>> _topicsFuture;

  @override
  void initState() {
    super.initState();
    _topicsFuture = Provider.of<StudyProvider>(context, listen: false).getTopics(widget.subject.id);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.subject.name),
      ),
      body: FutureBuilder<List<Topic>>(
        future: _topicsFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text('Erro: ${snapshot.error}'));
          }
          final topics = snapshot.data ?? [];
          if (topics.isEmpty) {
            return const Center(child: Text('Nenhum tópico encontrado.'));
          }

          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: topics.length,
            itemBuilder: (context, index) {
              final topic = topics[index];
              return ExpansionTile(
                title: Text(
                  topic.title,
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                subtitle: const Text('Toque para ver sub-tópicos'),
                children: [
                   _SubTopicList(topic: topic),
                ],
              );
            },
          );
        },
      ),
    );
  }
}

class _SubTopicList extends StatelessWidget {
  final Topic topic;

  const _SubTopicList({required this.topic});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<SubTopic>>(
      future: Provider.of<StudyProvider>(context, listen: false).getSubTopics(topic.id),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Padding(
            padding: EdgeInsets.all(8.0),
            child: LinearProgressIndicator(),
          );
        }
        if (snapshot.hasError) {
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text('Erro: ${snapshot.error}', style: const TextStyle(color: Colors.red)),
          );
        }
        final subtopics = snapshot.data ?? [];
        if (subtopics.isEmpty) {
          return const Padding(
            padding: EdgeInsets.all(8.0),
            child: Text('Nenhuma sub-matéria encontrada.'),
          );
        }
        return Column(
          children: subtopics.map((st) => ListTile(
            title: Text(st.name),
            leading: const Icon(Icons.play_circle_outline, color: AppTheme.secondaryColor),
            trailing: st.importanciaBanca.isNotEmpty 
              ? Chip(
                  label: Text(
                    st.importanciaBanca.values.first.toString(),
                    style: const TextStyle(fontSize: 10, color: Colors.white),
                  ),
                  backgroundColor: AppTheme.primaryColor,
                  padding: EdgeInsets.zero,
                )
              : null,
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => SubTopicDetailScreen(subTopic: st),
                ),
              );
            },
          )).toList(),
        );
      },
    );
  }
}
