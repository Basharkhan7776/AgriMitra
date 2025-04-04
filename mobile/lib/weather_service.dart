// weather_service.dart
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:geocoding/geocoding.dart';

class WeatherService {
  static const String apiKey = 'YOUR_API_KEY';

  // Convert address to coordinates
  static Future<Map<String, double>> getCoordinatesFromAddress(String address) async {
    try {
      List<Location> locations = await locationFromAddress(address);
      if (locations.isNotEmpty) {
        return {
          'lat': locations.first.latitude,
          'lon': locations.first.longitude,
        };
      }
      throw Exception("No location found for this address");
    } catch (e) {
      throw Exception("Geocoding failed: $e");
    }
  }

  // Fetch weather by coordinates
  static Future<Map<String, dynamic>> fetchWeather(double lat, double lon) async {
    final url = Uri.parse(
      'https://api.openweathermap.org/data/2.5/weather?lat=$lat&lon=$lon&appid=$apiKey&units=metric',
    );

    final response = await http.get(url);
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load weather: ${response.statusCode}');
    }
  }
}