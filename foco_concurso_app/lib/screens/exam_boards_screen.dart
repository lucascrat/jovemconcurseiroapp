import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/study_provider.dart';
import '../theme/app_theme.dart';
import '../models/models.dart';
import 'exam_board_detail_screen.dart';

class ExamBoardsScreen extends StatelessWidget {
  const ExamBoardsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final studyProvider = Provider.of<StudyProvider>(context);

    return Scaffold(
      backgroundColor: AppTheme.surfaceColor,
      appBar: AppBar(
        title: const Text('Perfis de Bancas'),
      ),
      body: studyProvider.isLoading
          ? const Center(child: CircularProgressIndicator())
          : ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: studyProvider.boards.length,
              itemBuilder: (context, index) {
                final board = studyProvider.boards[index];
                return _buildBoardCard(context, board);
              },
            ),
    );
  }

  Widget _buildBoardCard(BuildContext context, ExamBoard board) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      elevation: 2,
      child: ListTile(
        contentPadding: const EdgeInsets.all(16),
        title: Text(
          board.name,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(height: 8),
            Row(
              children: [
                _buildBadge(board.difficulty, _getDifficultyColor(board.difficulty)),
                const SizedBox(width: 8),
                Text(board.style, style: TextStyle(color: Colors.grey[600], fontSize: 12)),
              ],
            ),
            const SizedBox(height: 12),
            Text(
              board.mainFeature,
              style: const TextStyle(fontWeight: FontWeight.w500, color: AppTheme.primaryColor),
            ),
          ],
        ),
        trailing: const Icon(Icons.chevron_right, color: AppTheme.primaryColor),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => ExamBoardDetailScreen(board: board),
            ),
          );
        },
      ),
    );
  }

  Widget _buildBadge(String text, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: color.withOpacity(0.5)),
      ),
      child: Text(
        text,
        style: TextStyle(color: color, fontSize: 10, fontWeight: FontWeight.bold),
      ),
    );
  }

  Color _getDifficultyColor(String difficulty) {
    if (difficulty.contains('Altíssimo')) return Colors.red;
    if (difficulty.contains('Alto')) return Colors.orange;
    return Colors.green;
  }
}
