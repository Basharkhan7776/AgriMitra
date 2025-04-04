import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:farmista/home_page.dart';

import '../weather_service.dart';

class UserDetailsScreen extends StatefulWidget {
  final String userId;

  UserDetailsScreen({required this.userId});

  @override
  _UserDetailsScreenState createState() => _UserDetailsScreenState();
}

class _UserDetailsScreenState extends State<UserDetailsScreen> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController phoneController = TextEditingController();
  final TextEditingController addressController = TextEditingController();
  final TextEditingController farmSizeController = TextEditingController();
  final TextEditingController farmTypeController = TextEditingController();
  final TextEditingController cropTypeController = TextEditingController();
  final TextEditingController soilTypeController = TextEditingController();
  final TextEditingController waterSourceController = TextEditingController();

  // Add this method to your _UserDetailsScreenState class
  Future<void> _fetchAndSaveWeather() async {
    try {
      // 1. Get coordinates from address
      final coords = await WeatherService.getCoordinatesFromAddress(addressController.text);

      // 2. Fetch weather
      final weather = await WeatherService.fetchWeather(coords['lat']!, coords['lon']!);

      // 3. Save weather data to Firestore
      await FirebaseFirestore.instance
          .collection('users')
          .doc(widget.userId)
          .update({
        'weather': {
          'temp': weather['main']['temp'],
          'conditions': weather['weather'][0]['description'],
          'last_updated': FieldValue.serverTimestamp(),
        },
        'location_coords': GeoPoint(coords['lat']!, coords['lon']!),
      });
    } catch (e) {
      print("Weather fetch error: $e");
      // You might want to show this to the user
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Couldn't fetch weather: ${e.toString()}")),
      );
    }
  }

// Modify your _saveUserData method:
  Future<void> _saveUserData() async {
    if (_formKey.currentState!.validate()) {
      try {
        // Save basic user data first
        await FirebaseFirestore.instance.collection('users').doc(widget.userId).set({
          'phone': phoneController.text,
          'address': addressController.text,
          'farm_size': int.tryParse(farmSizeController.text) ?? 0,
          'farm_type': farmTypeController.text,
          'crop_type': cropTypeController.text,
          'soil_type': soilTypeController.text.isEmpty ? null : soilTypeController.text,
          'water_source': waterSourceController.text.isEmpty ? null : waterSourceController.text,
        }, SetOptions(merge: true));

        // Then fetch and save weather
        await _fetchAndSaveWeather();

        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => HomePage(userId: widget.userId)),
        );
      } catch (e) {
        print("Error saving data: $e");
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Error: $e")));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Enter Your Details')),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: SingleChildScrollView(
            child: Column(
              children: [
                TextFormField(
                  controller: phoneController,
                  keyboardType: TextInputType.phone,
                  decoration: InputDecoration(labelText: 'Phone Number'),
                  validator: (value) => value!.isEmpty ? 'Enter a phone number' : null,
                ),
                TextFormField(
                  controller: addressController,
                  decoration: InputDecoration(labelText: 'Address'),
                  validator: (value) => value!.isEmpty ? 'Enter an address' : null,
                ),
                TextFormField(
                  controller: farmSizeController,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(labelText: 'Farm Size (acres)'),
                  validator: (value) => value!.isEmpty ? 'Enter farm size' : null,
                ),
                TextFormField(
                  controller: farmTypeController,
                  decoration: InputDecoration(labelText: 'Farm Type'),
                  validator: (value) => value!.isEmpty ? 'Enter farm type' : null,
                ),
                TextFormField(
                  controller: cropTypeController,
                  decoration: InputDecoration(labelText: 'Crop Type'),
                  validator: (value) => value!.isEmpty ? 'Enter crop type' : null,
                ),
                TextFormField(
                  controller: soilTypeController,
                  decoration: InputDecoration(labelText: 'Soil Type (optional)'),
                ),
                TextFormField(
                  controller: waterSourceController,
                  decoration: InputDecoration(labelText: 'Water Source (optional)'),
                ),
                SizedBox(height: 20),
                ElevatedButton(
                  onPressed: _saveUserData,
                  child: Text('Submit'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
