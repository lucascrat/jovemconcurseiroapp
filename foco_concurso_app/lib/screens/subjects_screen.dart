import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/study_provider.dart';
import '../theme/app_theme.dart';
import 'topics_screen.dart';

class SubjectsScreen extends StatelessWidget {
  const SubjectsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final studyProvider = Provider.of<StudyProvider>(context);
    final levels = ['Fundamental', 'Médio', 'Superior'];

    return DefaultTabController(
      length: levels.length,
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Disciplinas'),
          bottom: TabBar(
            isScrollable: false,
            indicatorColor: AppTheme.secondaryColor,
            labelColor: AppTheme.primaryColor,
            unselectedLabelColor: Colors.grey,
            tabs: levels.map((l) => Tab(text: l)).toList(),
          ),
        ),
        body: studyProvider.isLoading
            ? const Center(child: CircularProgressIndicator())
            : TabBarView(
                children: levels.map((level) {
                  final filteredSubjects = studyProvider.subjects
                      .where((s) => s.level == level)
                      .toList();

                  if (filteredSubjects.isEmpty) {
                    return const Center(child: Text("Nenhuma disciplina encontrada para este nível."));
                  }

                  return ListView.builder(
                    padding: const EdgeInsets.all(16),
                    itemCount: filteredSubjects.length,
                    itemBuilder: (context, index) {
                      final subject = filteredSubjects[index];
                      return Card(
                        margin: const EdgeInsets.only(bottom: 16),
                        elevation: 0,
                        color: Colors.white,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12),
                          side: BorderSide(color: Colors.grey[200]!),
                        ),
                        child: ListTile(
                          contentPadding: const EdgeInsets.all(16),
                          leading: Container(
                            padding: const EdgeInsets.all(12),
                            decoration: BoxDecoration(
                              color: AppTheme.primaryColor.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: const Icon(Icons.book, color: AppTheme.primaryColor),
                          ),
                          title: Text(
                            subject.name,
                            style: const TextStyle(fontWeight: FontWeight.bold),
                          ),
                          subtitle: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const SizedBox(height: 8),
                              LinearProgressIndicator(
                                value: 0.1, // Placeholder
                                backgroundColor: Colors.grey[100],
                                color: AppTheme.secondaryColor,
                              ),
                            ],
                          ),
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
                    },
                  );
                }).toList(),
              ),
      ),
    );
  }
}
