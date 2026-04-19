import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  static const Color primaryColor = Color(0xFF002B57);
  static const Color secondaryColor = Color(0xFF006C50);
  static const Color surfaceColor = Color(0xFFF8F9FF);
  static const Color onSurfaceColor = Color(0xFF171C22);
  static const Color primaryContainer = Color(0xFF1A4173);
  static const Color secondaryContainer = Color(0xFF93F6CE);
  
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
      ),
      textTheme: GoogleFonts.interTextTheme().copyWith(
        displayLarge: GoogleFonts.manrope(
          fontWeight: FontWeight.w800,
          color: primaryColor,
        ),
        headlineMedium: GoogleFonts.manrope(
          fontWeight: FontWeight.bold,
          color: primaryColor,
        ),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: false,
        titleTextStyle: TextStyle(
          color: primaryColor,
          fontSize: 20,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
