import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/study_provider.dart';
import '../theme/app_theme.dart';
import './exam_boards_screen.dart';
import './exam_board_detail_screen.dart';
import '../models/models.dart';
import './prf_module_screen.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final studyProvider = Provider.of<StudyProvider>(context);

    return Scaffold(
      backgroundColor: AppTheme.surfaceColor,
      appBar: AppBar(
        title: Text(
          'Foco no Concurso',
          style: Theme.of(context).textTheme.displayLarge?.copyWith(fontSize: 24),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16.0),
            child: CircleAvatar(
              backgroundColor: AppTheme.primaryContainer,
              child: const Icon(Icons.person, color: Colors.white),
            ),
          ),
        ],
      ),
      body: studyProvider.isLoading
          ? const Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildHeader(context),
                  const SizedBox(height: 30),
                  _buildResumeSearch(context),
                  const SizedBox(height: 30),
                  _buildPrfBanner(context),
                  const SizedBox(height: 30),
                  _buildExamBoardsSection(context, studyProvider),
                  const SizedBox(height: 30),
                  _buildSubjectsTitle(context),
                  const SizedBox(height: 20),
                  _buildSubjectsGrid(studyProvider),
                ],
              ),
            ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        backgroundColor: AppTheme.primaryColor,
        child: const Icon(Icons.timer, color: Colors.white),
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(28),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            AppTheme.primaryColor.withOpacity(0.02),
            AppTheme.primaryColor.withOpacity(0.08),
          ],
        ),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: AppTheme.primaryColor.withOpacity(0.05)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                   const Text(
                    'Bom dia, Estudante!',
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight.w900,
                      color: AppTheme.primaryColor,
                      letterSpacing: -0.5,
                    ),
                  ),
                  Text(
                    'Sua jornada continua hoje.',
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.blueGrey[400],
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  shape: BoxShape.circle,
                  boxShadow: AppTheme.softShadow,
                ),
                child: const Icon(Icons.rocket_launch, color: AppTheme.secondaryColor),
              ),
            ],
          ),
          const SizedBox(height: 24),
          _buildProgressStats(),
        ],
      ),
    );
  }

  Widget _buildProgressStats() {
    return Row(
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('Progresso Geral', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppTheme.primaryColor)),
                  Text('75%', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: AppTheme.primaryColor)),
                ],
              ),
              const SizedBox(height: 8),
              ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: LinearProgressIndicator(
                  value: 0.75,
                  backgroundColor: AppTheme.primaryColor.withOpacity(0.1),
                  color: AppTheme.primaryColor,
                  minHeight: 10,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildResumeSearch(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Continue de onde parou',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: AppTheme.primaryColor,
              ),
            ),
            TextButton(
              onPressed: () {},
              child: const Text('Ver cronograma'),
            ),
          ],
        ),
        const SizedBox(height: 12),
        Container(
          height: 180,
          width: double.infinity,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            image: const DecorationImage(
              image: NetworkImage('https://lh3.googleusercontent.com/aida-public/AB6AXuDS4tQSty9Ib8bxX0LOdQEGxgcVOYCSdIG0Xm2rIqmb1GUgTpp5mWLngEn2QsVuL7R52qy4re-vDLyK4Ew3UQjp1m0DDl6ea-Kiftb36T9mMr3yLJOIEC7P34ATUP7ObgQwN_8WkwBNs--yJVAN0eCMmcMEKxDI22g_GlOZEzvOVwUZ77qRdHk0UTOfbTQ8oRi_Qm-E7zfzC3RRmuDewRJxPMmIHvjwgAdIi98Be518jKReYc2ipDQtia_DAL3k59aR_cAgytRGNJg'),
              fit: BoxFit.cover,
            ),
          ),
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  AppTheme.primaryColor.withOpacity(0.1),
                  AppTheme.primaryColor.withOpacity(0.8),
                ],
              ),
            ),
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: AppTheme.secondaryContainer,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Text(
                    'MÓDULO 4: LICITAÇÕES',
                    style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: AppTheme.secondaryColor),
                  ),
                ),
                const SizedBox(height: 8),
                const Text(
                  'Direito Administrativo',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Colors.white),
                ),
                const Text(
                  'Aula 12: Inexigibilidade e Dispensa',
                  style: TextStyle(fontSize: 14, color: Colors.white70),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildSubjectsTitle(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const Text(
          'Suas Matérias',
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: AppTheme.primaryColor,
          ),
        ),
        Row(
          children: [
            IconButton(onPressed: () {}, icon: const Icon(Icons.grid_view)),
            IconButton(onPressed: () {}, icon: const Icon(Icons.list, color: Colors.grey)),
          ],
        ),
      ],
    );
  }

  Widget _buildSubjectsGrid(StudyProvider studyProvider) {
    if (studyProvider.subjects.isEmpty) {
      return const Center(child: Text("Nenhuma matéria encontrada no banco."));
    }
    
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        crossAxisSpacing: 16,
        mainAxisSpacing: 16,
        childAspectRatio: 0.85,
      ),
      itemCount: studyProvider.subjects.length + 1,
      itemBuilder: (context, index) {
        if (index == studyProvider.subjects.length) {
          return _buildAddCard();
        }
        final subject = studyProvider.subjects[index];
        return _buildSubjectCard(subject);
      },
    );
  }

  Widget _buildSubjectCard(dynamic subject) {
    return TweenAnimationBuilder<double>(
      tween: Tween(begin: 0.0, end: 1.0),
      duration: const Duration(milliseconds: 600),
      builder: (context, value, child) {
        return Opacity(
          opacity: value,
          child: Transform.translate(
            offset: Offset(0, 20 * (1 - value)),
            child: child,
          ),
        );
      },
      child: Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: AppTheme.softShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Hero(
                  tag: 'icon_${subject.id}',
                  child: Container(
                    padding: const EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: AppTheme.primaryColor.withOpacity(0.05),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: const Icon(Icons.bookmark_outline, color: AppTheme.primaryColor, size: 20),
                  ),
                ),
                Text(
                  "45%",
                  style: TextStyle(
                    fontWeight: FontWeight.w900,
                    color: AppTheme.primaryColor.withOpacity(0.4),
                    fontSize: 12,
                  ),
                ),
              ],
            ),
            const Spacer(),
            Text(
              subject.name,
              style: const TextStyle(
                fontWeight: FontWeight.bold, 
                fontSize: 15,
                color: AppTheme.primaryColor,
                letterSpacing: -0.2,
              ),
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 4),
            Text(
              subject.level.toUpperCase(),
              style: TextStyle(
                fontSize: 10, 
                color: Colors.blueGrey[300],
                fontWeight: FontWeight.w800,
                letterSpacing: 0.5,
              ),
            ),
            const SizedBox(height: 14),
            ClipRRect(
              borderRadius: BorderRadius.circular(4),
              child: LinearProgressIndicator(
                value: 0.45,
                backgroundColor: AppTheme.primaryColor.withOpacity(0.05),
                color: AppTheme.primaryColor,
                minHeight: 6,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildAddCard() {
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [AppTheme.primaryColor, AppTheme.primaryContainer],
        ),
        borderRadius: BorderRadius.circular(16),
      ),
      child: const Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.add_circle_outline, color: Colors.white, size: 40),
          SizedBox(height: 8),
          Text(
            'Nova Disciplina',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
          ),
        ],
      ),
    );
  }

  Widget _buildExamBoardsSection(BuildContext context, StudyProvider studyProvider) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Perfis de Bancas',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: AppTheme.primaryColor,
              ),
            ),
            TextButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const ExamBoardsScreen()),
                );
              },
              child: const Text('Ver todas'),
            ),
          ],
        ),
        const SizedBox(height: 12),
        SizedBox(
          height: 120,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: studyProvider.boards.length,
            itemBuilder: (context, index) {
              final board = studyProvider.boards[index];
              return _buildBoardCardSmall(context, board);
            },
          ),
        ),
      ],
    );
  }

  Widget _buildPrfBanner(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const PrfModuleScreen()),
        );
      },
      child: Container(
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          gradient: AppTheme.prfGradient,
          borderRadius: BorderRadius.circular(24),
          boxShadow: [
            BoxShadow(
              color: const Color(0xFF1E3A8A).withOpacity(0.3),
              blurRadius: 20,
              offset: const Offset(0, 10),
            ),
          ],
        ),
        child: Stack(
          children: [
            Positioned(
              right: -20,
              top: -20,
              child: Icon(Icons.security, color: Colors.white.withOpacity(0.1), size: 100),
            ),
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.2),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.shield, color: Colors.white, size: 28),
                ),
                const SizedBox(width: 20),
                const Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'MODO ESPECIALISTA: PRF',
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 0.5),
                      ),
                      SizedBox(height: 4),
                      Text(
                        'Simulados históricos e legislação focada.',
                        style: TextStyle(color: Colors.white70, fontSize: 13, fontWeight: FontWeight.w500),
                      ),
                    ],
                  ),
                ),
                const Icon(Icons.arrow_forward_rounded, color: Colors.white, size: 24),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildBoardCardSmall(BuildContext context, ExamBoard board) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ExamBoardDetailScreen(board: board),
          ),
        );
      },
      child: Container(
        width: 160,
        margin: const EdgeInsets.only(right: 16),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: Colors.grey.withOpacity(0.1)),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.02),
              blurRadius: 5,
              offset: const Offset(0, 2),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              board.name,
              style: const TextStyle(fontWeight: FontWeight.bold, color: AppTheme.primaryColor, fontSize: 13),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 4),
            Text(
              board.difficulty,
              style: TextStyle(
                fontSize: 11,
                color: board.difficulty.contains('Alt') ? Colors.red : Colors.green,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              board.style,
              style: TextStyle(fontSize: 10, color: Colors.grey[600]),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
          ],
        ),
      ),
    );
  }
}
