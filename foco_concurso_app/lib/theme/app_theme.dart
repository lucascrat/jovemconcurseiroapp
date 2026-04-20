import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  static const Color primaryColor = Color(0xFF002B57);
  static const Color secondaryColor = Color(0xFF006C50);
  static const Color surfaceColor = Color(0xFFF8F9FF);
  static const Color onSurfaceColor = Color(0xFF171C22);
  static const Color primaryContainer = Color(0xFF1A4173);
  static const Color accentColor = Color(0xFF00D1FF);
  static const Color cardShadow = Color(0x1A000000);
  
  static LinearGradient get primaryGradient => const LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [primaryColor, primaryContainer],
  );

  static LinearGradient get prfGradient => const LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFF1E3A8A), Color(0xFF10B981)],
  );

  static List<BoxShadow> get softShadow => [
    BoxShadow(
      color: Colors.black.withOpacity(0.04),
      blurRadius: 12,
      spreadRadius: 0,
      offset: const Offset(0, 4),
    ),
  ];

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: primaryColor,
        primary: primaryColor,
        secondary: secondaryColor,
        surface: surfaceColor,
        onSurface: onSurfaceColor,
        primaryContainer: primaryContainer,
        secondaryContainer: secondaryContainer,
        tertiary: accentColor,
      ),
      textTheme: GoogleFonts.interTextTheme().copyWith(
        displayLarge: GoogleFonts.manrope(
          fontWeight: FontWeight.w800,
          color: primaryColor,
          letterSpacing: -0.5,
        ),
        headlineMedium: GoogleFonts.manrope(
          fontWeight: FontWeight.bold,
          color: primaryColor,
          letterSpacing: -0.5,
        ),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: false,
        iconTheme: IconThemeData(color: primaryColor),
        titleTextStyle: TextStyle(
          color: primaryColor,
          fontSize: 22,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}

