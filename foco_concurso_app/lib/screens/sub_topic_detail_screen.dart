import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import '../models/models.dart';
import '../theme/app_theme.dart';
import 'quiz_screen.dart';
import 'flashcard_screen.dart';

class SubTopicDetailScreen extends StatelessWidget {
  final SubTopic subTopic;

  const SubTopicDetailScreen({super.key, required this.subTopic});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(subTopic.name),
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.bookmark_border)),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildVideoPlaceholder(),
            const SizedBox(height: 24),
            _buildImportanceHeader(),
            const SizedBox(height: 24),
            if (subTopic.content != null && subTopic.content!.isNotEmpty) ...[
              const Text(
                "Teoria da Aula",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
              ),
              const SizedBox(height: 16),
              MarkdownBody(
                data: subTopic.content!,
                selectable: true,
                styleSheet: MarkdownStyleSheet(
                  p: const TextStyle(fontSize: 16, height: 1.5),
                  h1: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
                  h2: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
                ),
              ),
              const SizedBox(height: 30),
            ],
            const Text(
              "Tópicos Sugeridos",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.grey),
            ),
            const SizedBox(height: 16),
            ...subTopic.blocosSugeridos.map((bloco) => _buildBlocoItem(bloco)).toList(),
            const SizedBox(height: 30),
            _buildActionButtons(),
          ],
        ),
      ),
    );
  }

  Widget _buildVideoPlaceholder() {
    return Container(
      height: 200,
      width: double.infinity,
      decoration: BoxDecoration(
        color: Colors.black,
        borderRadius: BorderRadius.circular(12),
      ),
      child: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.play_circle_fill, color: Colors.white, size: 60),
            SizedBox(height: 8),
            Text("Assistir Videoaula", style: TextStyle(color: Colors.white)),
          ],
        ),
      ),
    );
  }

  Widget _buildImportanceHeader() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.secondaryContainer.withOpacity(0.3),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            children: [
              Icon(Icons.trending_up, color: AppTheme.secondaryColor),
              SizedBox(width: 8),
              Text(
                "Incidência em Provas",
                style: TextStyle(fontWeight: FontWeight.bold, color: AppTheme.secondaryColor),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Wrap(
            spacing: 8,
            children: subTopic.importanciaBanca.entries.map((e) => Chip(
              label: Text("${e.key}: ${e.value}"),
              labelStyle: const TextStyle(fontSize: 10),
            )).toList(),
          ),
        ],
      ),
    );
  }

  Widget _buildBlocoItem(String title) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: Colors.grey[200]!),
      ),
      child: Row(
        children: [
          const Icon(Icons.check_circle_outline, color: Colors.green),
          const SizedBox(width: 16),
          Text(
            title,
            style: const TextStyle(fontWeight: FontWeight.w500),
          ),
        ],
      ),
    );
  }

  Widget _buildActionButtons() {
    return Row(
      children: [
        Expanded(
          child: Builder(
            builder: (context) {
              return ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => QuizScreen(subTopic: subTopic),
                    ),
                  );
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primaryColor,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                child: const Text("Resolver Questões"),
              );
            }
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Builder(
            builder: (context) {
              return OutlinedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => FlashcardScreen(subTopic: subTopic),
                    ),
                  );
                },
                style: OutlinedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                child: const Text("Flashcards"),
              );
            }
          ),
        ),
      ],
    );
  }
}
