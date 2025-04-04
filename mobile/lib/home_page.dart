import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:farmista/weather_service.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class HomePage extends StatefulWidget {
  final String userId;

  HomePage({required this.userId});
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String? userAddress;
  Map<String, dynamic>? currentWeather;
  //List<Map<String, dynamic>> forecastData = [];
  int _selectedIndex = 0;
  bool isLoading = true;
  String? errorMessage;

  @override
  void initState() {
    super.initState();
    _fetchUserDataAndWeather();
  }

  Future<void> _fetchUserDataAndWeather() async {
    try {
      // 1. Fetch user data from Firestore
      DocumentSnapshot userDoc = await FirebaseFirestore.instance
          .collection('users')
          .doc(widget.userId)
          .get();

      if (userDoc.exists) {
        setState(() {
          userAddress = userDoc.get('address');
        });

        // 2. If address exists, fetch weather
        if (userAddress != null && userAddress!.isNotEmpty) {
          await _fetchWeatherData(userAddress!);
        } else {
          setState(() {
            errorMessage = "No address found for weather data";
            isLoading = false;
          });
        }
      }
    } catch (e) {
      setState(() {
        errorMessage = "Error loading data: ${e.toString()}";
        isLoading = false;
      });
      print("Error fetching data: $e");
    }
  }

  Future<void> _fetchWeatherData(String address) async {
    try {
      setState(() => isLoading = true);

      // 1. Convert address to coordinates
      final coords = await WeatherService.getCoordinatesFromAddress(address);
      print('Returned coordinates: $coords');
      print('Latitude: ${coords['lat']}, Longitude: ${coords['lon']}');

      // 2. Fetch current weather
      final weather = await WeatherService.fetchWeather(coords['lat']!, coords['lon']!);

      // 3. Update UI
      setState(() {
        currentWeather = {
          'temp': weather['main']['temp'].round(),
          'condition': weather['weather'][0]['main'],
          'icon': _mapWeatherIcon(weather['weather'][0]['main']),
          'city': weather['name'],
        };
        isLoading = false;
      });

      // 4. Optional: Fetch forecast data here if needed
    } catch (e) {
      setState(() {
        errorMessage = "Couldn't fetch weather: ${e.toString()}";
        isLoading = false;
      });
    }
  }

  IconData _mapWeatherIcon(String condition) {
    condition = condition.toLowerCase();
    if (condition.contains('sunny') || condition.contains('clear')) {
      return Icons.wb_sunny;
    } else if (condition.contains('cloud')) {
      return Icons.cloud;
    } else if (condition.contains('rain')) {
      return Icons.umbrella;
    } else if (condition.contains('snow')) {
      return Icons.ac_unit;
    } else if (condition.contains('thunder')) {
      return Icons.flash_on;
    } else {
      return Icons.wb_sunny;
    }
  }

  void _onItemTapped(int index) {
    setState(() => _selectedIndex = index);
  }

  Widget _buildWeatherSection() {
    if (isLoading) {
      return Center(child: CircularProgressIndicator());
    }

    if (errorMessage != null) {
      return Center(child: Text(errorMessage!));
    }

    if (currentWeather == null) {
      return Center(child: Text("No weather data available"));
    }

    return Column(
      children: [
        // Current Weather Card
        Card(
          margin: EdgeInsets.all(16),
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Column(
              children: [
                Text(
                  "Current Weather in ${currentWeather!['city'] ?? userAddress}",
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 16),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(currentWeather!['icon'], size: 48),
                    SizedBox(width: 16),
                    Text(
                      "${currentWeather!['temp']}°C",
                      style: TextStyle(fontSize: 36),
                    ),
                  ],
                ),
                SizedBox(height: 8),
                Text(
                  currentWeather!['condition'],
                  style: TextStyle(fontSize: 18),
                ),
              ],
            ),
          ),
        ),

        // Forecast Section
        // Padding(
        //   padding: EdgeInsets.symmetric(horizontal: 16),
        //   child: Align(
        //     alignment: Alignment.centerLeft,
        //     child: Text(
        //       "3-Day Forecast",
        //       style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
        //     ),
        //   ),
        // ),
        // SizedBox(height: 8),
        // Container(
        //   height: 120,
        //   child: ListView.builder(
        //     scrollDirection: Axis.horizontal,
        //     itemCount: forecastData.length,
        //     itemBuilder: (context, index) {
        //       return WeatherCard(
        //         day: forecastData[index]["day"],
        //         temp: forecastData[index]["temp"],
        //         icon: forecastData[index]["icon"],
        //       );
        //     },
        //   ),
        // ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.white,
          elevation: 2,
          title: Row(
            children: [
              CircleAvatar(backgroundImage: AssetImage("assets/logo.png"), radius: 16),
              SizedBox(width: 8),
              Text("AgriMitra", style: TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.bold)),
            ],
          ),
          actions: [
            IconButton(
              icon: Icon(Icons.refresh),
              onPressed: _fetchUserDataAndWeather,
            ),
      IconButton(
      icon: Icon(Icons.person, color: Colors.black),
      onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (context) => ProfilePage())),
    ),],
    ),
    body: Column(
    children: [
    SizedBox(height: 16),
    _buildWeatherSection(),
    Expanded(
    child: Center(child: Text("Content for page $_selectedIndex")),
    ),
    ],
    ),
    bottomNavigationBar: BottomNavigationBar(
    items: const [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
    BottomNavigationBarItem(icon: Icon(FontAwesomeIcons.chartLine), label: 'Analytics'),
    BottomNavigationBarItem(icon: Icon(FontAwesomeIcons.camera), label: 'Scan'),
    BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
    ],
    currentIndex: _selectedIndex,
    selectedItemColor: Colors.green,
    unselectedItemColor: Colors.grey,
    onTap: _onItemTapped,
    ),
    );
  }
}

class WeatherCard extends StatelessWidget {
  final String day;
  final String temp;
  final IconData icon;

  const WeatherCard({required this.day, required this.temp, required this.icon});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 8),
      child: Container(
        width: 80,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10),
          boxShadow: [BoxShadow(color: Colors.grey.shade300, blurRadius: 5)],
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 30),
            SizedBox(height: 8),
            Text(day, style: TextStyle(fontWeight: FontWeight.bold)),
            Text(temp),
          ],
        ),
      ),
    );
  }
}

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Profile")),
      body: Center(child: Text("Profile Page")),
    );
  }
}