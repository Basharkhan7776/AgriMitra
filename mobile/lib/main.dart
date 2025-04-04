import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:farmista/login_page.dart';
import 'package:farmista/signup_page.dart';
import 'package:farmista/screens/user_details_screen.dart';
import 'package:farmista/home_page.dart'; // Import HomePage

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Firebase Auth',
      debugShowCheckedModeBanner: false,
      initialRoute: '/', // Define the starting route
      routes: {
        '/': (context) => LoginPage(),
        '/signup': (context) => SignupPage(),
        '/user-details': (context) => UserDetailsScreen(userId: ''), // Temporary empty userId
        '/home': (context) => HomePage(userId: ''),
      },
    );
  }
}
