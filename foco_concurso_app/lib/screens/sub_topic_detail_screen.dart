import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:audioplayers/audioplayers.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:photo_view/photo_view.dart';
import '../models/models.dart';
import '../theme/app_theme.dart';
import 'quiz_screen.dart';
import 'flashcard_screen.dart';

class SubTopicDetailScreen extends StatefulWidget {
  final SubTopic subTopic;

  const SubTopicDetailScreen({super.key, required this.subTopic});

  @override
  State<SubTopicDetailScreen> createState() => _SubTopicDetailScreenState();
}

class _SubTopicDetailScreenState extends State<SubTopicDetailScreen> {
  late AudioPlayer _audioPlayer;
  bool _isAudioPlaying = false;
  Duration _duration = Duration.zero;
  Duration _position = Duration.zero;

  @override
  void initState() {
    super.initState();
    _audioPlayer = AudioPlayer();
    
    _audioPlayer.onPlayerStateChanged.listen((state) {
      if (mounted) {
        setState(() {
          _isAudioPlaying = state == PlayerState.playing;
        });
      }
    });

    _audioPlayer.onDurationChanged.listen((newDuration) {
      if (mounted) {
        setState(() {
          _duration = newDuration;
        });
      }
    });

    _audioPlayer.onPositionChanged.listen((newPosition) {
      if (mounted) {
        setState(() {
          _position = newPosition;
        });
      }
    });
  }

  @override
  void dispose() {
    _audioPlayer.dispose();
    super.initState();
  }

  Future<void> _launchVideo() async {
    final url = widget.subTopic.videoUrl.isNotEmpty 
        ? widget.subTopic.videoUrl 
        : ''; // No future expansion needed here as per request
    
    if (url.isNotEmpty) {
      final uri = Uri.parse(url);
      if (await canLaunchUrl(uri)) {
        await launchUrl(uri, mode: LaunchMode.externalApplication);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.subTopic.name),
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.bookmark_border)),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (widget.subTopic.videoUrl.isNotEmpty)
              _buildVideoPlayer()
            else
              _buildVideoPlaceholder(),
            
            const SizedBox(height: 24),
            
            if (widget.subTopic.audioUrl.isNotEmpty) ...[
              _buildAudioPlayer(),
              const SizedBox(height: 24),
            ],

            _buildImportanceHeader(),
            const SizedBox(height: 24),

            if (widget.subTopic.content != null && widget.subTopic.content.isNotEmpty) ...[
              const Text(
                "Teoria da Aula",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
              ),
              const SizedBox(height: 16),
              MarkdownBody(
                data: widget.subTopic.content,
                selectable: true,
                styleSheet: MarkdownStyleSheet(
                  p: const TextStyle(fontSize: 16, height: 1.5),
                  h1: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
                  h2: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
                ),
              ),
              const SizedBox(height: 30),
            ],

            if (widget.subTopic.mindMapUrl.isNotEmpty) ...[
              const Text(
                "Mapa Mental do Tópico",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: AppTheme.primaryColor),
              ),
              const SizedBox(height: 16),
              _buildMindMap(),
              const SizedBox(height: 30),
            ],

            const Text(
              "Tópicos Sugeridos",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.grey),
            ),
            const SizedBox(height: 16),
            ...widget.subTopic.blocosSugeridos.map((bloco) => _buildBlocoItem(bloco)).toList(),
            const SizedBox(height: 30),
            _buildActionButtons(),
          ],
        ),
      ),
    );
  }

  Widget _buildVideoPlayer() {
    return GestureDetector(
      onTap: _launchVideo,
      child: Container(
        height: 200,
        width: double.infinity,
        decoration: BoxDecoration(
          color: Colors.black,
          borderRadius: BorderRadius.circular(12),
          image: const DecorationImage(
            image: NetworkImage('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80'),
            fit: BoxFit.cover,
            opacity: 0.5,
          ),
        ),
        child: const Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.play_circle_fill, color: Colors.white, size: 60),
              SizedBox(height: 8),
              Text("Clique para Assistir Videoaula", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildVideoPlaceholder() {
    return Container(
      height: 200,
      width: double.infinity,
      decoration: BoxDecoration(
        color: Colors.grey[900],
        borderRadius: BorderRadius.circular(12),
      ),
      child: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.video_library_outlined, color: Colors.white54, size: 40),
            SizedBox(height: 8),
            Text("Sem videoaula disponível", style: TextStyle(color: Colors.white54)),
          ],
        ),
      ),
    );
  }

  Widget _buildAudioPlayer() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        color: AppTheme.primaryColor.withOpacity(0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: AppTheme.primaryColor.withOpacity(0.2)),
      ),
      child: Row(
        children: [
          IconButton(
            icon: Icon(_isAudioPlaying ? Icons.pause_circle_filled : Icons.play_circle_filled),
            iconSize: 48,
            color: AppTheme.primaryColor,
            onPressed: () async {
              if (_isAudioPlaying) {
                await _audioPlayer.pause();
              } else {
                await _audioPlayer.play(UrlSource(widget.subTopic.audioUrl));
              }
            },
          ),
          Expanded(
            child: Column(
              children: [
                Slider(
                  min: 0,
                  max: _duration.inSeconds.toDouble() > 0 ? _duration.inSeconds.toDouble() : 1.0,
                  value: _position.inSeconds.toDouble(),
                  onChanged: (value) async {
                    final position = Duration(seconds: value.toInt());
                    await _audioPlayer.seek(position);
                  },
                  activeColor: AppTheme.primaryColor,
                  inactiveColor: AppTheme.primaryColor.withOpacity(0.2),
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(_formatDuration(_position), style: const TextStyle(fontSize: 12)),
                      Text(_formatDuration(_duration), style: const TextStyle(fontSize: 12)),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  String _formatDuration(Duration duration) {
    String twoDigits(int n) => n.toString().padLeft(2, "0");
    String twoDigitMinutes = twoDigits(duration.inMinutes.remainder(60));
    String twoDigitSeconds = twoDigits(duration.inSeconds.remainder(60));
    return "$twoDigitMinutes:$twoDigitSeconds";
  }

  Widget _buildMindMap() {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => Scaffold(
              appBar: AppBar(backgroundColor: Colors.black, iconTheme: const IconThemeData(color: Colors.white)),
              backgroundColor: Colors.black,
              body: PhotoView(
                imageProvider: CachedNetworkImageProvider(widget.subTopic.mindMapUrl),
                minScale: PhotoViewComputedScale.contained,
                maxScale: PhotoViewComputedScale.covered * 2,
              ),
            ),
          ),
        );
      },
      child: ClipRRect(
        borderRadius: BorderRadius.circular(12),
        child: Stack(
          alignment: Alignment.center,
          children: [
            CachedNetworkImage(
              imageUrl: widget.subTopic.mindMapUrl,
              height: 250,
              width: double.infinity,
              fit: BoxFit.cover,
              placeholder: (context, url) => Container(
                height: 250,
                color: Colors.grey[200],
                child: const Center(child: CircularProgressIndicator()),
              ),
              errorWidget: (context, url, error) => const Icon(Icons.error),
            ),
            Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.black54,
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(Icons.zoom_in, color: Colors.white, size: 20),
                  SizedBox(width: 4),
                  Text("Clique para ampliar mapa mental", style: TextStyle(color: Colors.white, fontSize: 12)),
                ],
              ),
            ),
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
            children: widget.subTopic.importanciaBanca.entries.map((e) => Chip(
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
          child: ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => QuizScreen(subTopic: widget.subTopic),
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
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: OutlinedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => FlashcardScreen(subTopic: widget.subTopic),
                ),
              );
            },
            style: OutlinedButton.styleFrom(
              padding: const EdgeInsets.symmetric(vertical: 16),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
            ),
            child: const Text("Flashcards"),
          ),
        ),
      ],
    );
  }
}
