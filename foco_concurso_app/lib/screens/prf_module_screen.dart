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
            expandedHeight: 200,
            floating: false,
            pinned: true,
            stretch: true,
            flexibleSpace: FlexibleSpaceBar(
              title: const Text('Módulo Especialista PRF', style: TextStyle(fontWeight: FontWeight.w900, color: Colors.white, fontSize: 16)),
              centerTitle: true,
              background: Container(
                decoration: BoxDecoration(
                  gradient: AppTheme.prfGradient,
                ),
                child: Stack(
                  children: [
                    Positioned(
                      right: -30,
                      top: -30,
                      child: Icon(Icons.security, color: Colors.white.withOpacity(0.1), size: 180),
                    ),
                    const Center(
                      child: Hero(
                        tag: 'prf_hero_icon',
                        child: Icon(Icons.shield, size: 80, color: Colors.white),
                      ),
                    ),
                  ],
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
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.softShadow,
      ),
      child: ListTile(
        contentPadding: const EdgeInsets.all(20),
        leading: Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: enabled ? AppTheme.primaryColor.withOpacity(0.05) : Colors.grey.withOpacity(0.05),
            shape: BoxShape.circle,
          ),
          child: Icon(
            Icons.history_edu_rounded, 
            color: enabled ? AppTheme.primaryColor : Colors.grey,
            size: 24,
          ),
        ),
        title: Text(
          title, 
          style: TextStyle(
            fontWeight: FontWeight.w900, 
            color: enabled ? AppTheme.primaryColor : Colors.grey,
            fontSize: 16,
          )
        ),
        subtitle: Text(
          enabled ? 'Simulado oficial completo' : 'Em breve no banco',
          style: TextStyle(color: Colors.blueGrey[300], fontSize: 13),
        ),
        trailing: Icon(
          Icons.arrow_forward_ios_rounded, 
          size: 14, 
          color: enabled ? AppTheme.primaryColor : Colors.grey[300],
        ),
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
