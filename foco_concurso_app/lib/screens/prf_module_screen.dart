import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/study_provider.dart';
import '../models/models.dart';
import '../theme/app_theme.dart';
import './topics_screen.dart';
import './prf_quiz_screen.dart';

class PrfModuleScreen extends StatelessWidget {
  const PrfModuleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final studyProvider = Provider.of<StudyProvider>(context);
    
    // Filter PRF subjects
    final prfSubjects = studyProvider.subjects.where((s) => s.name.contains('PRF')).toList();

    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            expandedHeight: 180,
            floating: false,
            pinned: true,
            flexibleSpace: FlexibleSpaceBar(
              title: const Text('Foco: PRF', style: TextStyle(fontWeight: FontWeight.bold)),
              background: Container(
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Colors.blue, Colors.green],
                  ),
                ),
                child: const Center(
                  child: Icon(Icons.security, size: 80, color: Colors.white24),
                ),
              ),
            ),
          ),
          
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Simulados por Ano',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
                  ),
                  const SizedBox(height: 12),
                  _buildExamCard(context, 'PRF 2015', 2015),
                  _buildExamCard(context, 'PRF 2014', 2014),
                  _buildExamCard(context, 'PRF 2013 (Disponível em breve)', 2013, enabled: false),
                  
                  const SizedBox(height: 32),
                  const Text(
                    'Matérias Específicas',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
                  ),
                  const SizedBox(height: 12),
                  ...prfSubjects.map((subject) => _buildSubjectCard(context, subject)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildExamCard(BuildContext context, String title, int year, {bool enabled = true}) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      elevation: 2,
      child: ListTile(
        contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
        leading: Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: enabled ? Colors.orange.withOpacity(0.1) : Colors.grey.withOpacity(0.1),
            shape: BoxShape.circle,
          ),
          child: Icon(Icons.assignment, color: enabled ? Colors.orange : Colors.grey),
        ),
        title: Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text(enabled ? 'Simulado oficial Cebraspe' : 'Em processamento'),
        trailing: const Icon(Icons.arrow_forward_ios, size: 16),
        onTap: !enabled ? null : () {
           Navigator.push(
             context,
             MaterialPageRoute(
               builder: (context) => PrfQuizScreen(year: year),
             ),
           );
        },
      ),
    );
  }

  Widget _buildSubjectCard(BuildContext context, Subject subject) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      child: ListTile(
        title: Text(subject.name),
        subtitle: Text(subject.description),
        trailing: const Icon(Icons.chevron_right),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => TopicsScreen(subject: subject),
            ),
          );
        },
      ),
    );
  }
}
