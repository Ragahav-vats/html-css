# 🌤️ Weather App

A beautiful, modern weather application built with HTML, CSS, and JavaScript. Get real-time weather information for any city around the world with a stunning user interface.

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **5-Day Forecast**: View weather predictions for the next 5 days
- **Location-based Weather**: Use your current location to get local weather
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations
- **Interactive Elements**: Hover effects and smooth transitions
- **Error Handling**: User-friendly error messages
- **Local Storage**: Remembers your last searched city

## 🎨 Design Features

- **Gradient Background**: Beautiful purple-blue gradient
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: Floating weather icons and hover effects
- **Modern Typography**: Poppins font family for clean readability
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Weather Icons**: Font Awesome icons for different weather conditions

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for weather data
- Optional: OpenWeatherMap API key for real weather data

### Installation

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Start using** the weather app!

### Using with Real Weather Data

To get real weather data instead of demo data:

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. Open `js/app.js`
3. Replace `'YOUR_API_KEY'` with your actual API key
4. Save the file and refresh the browser

```javascript
// In js/app.js, line 3
this.apiKey = 'your_actual_api_key_here';
```

## 📱 How to Use

### Search by City
1. Enter a city name in the search box
2. Click the search button or press Enter
3. View current weather and 5-day forecast

### Use Current Location
1. Click "Use My Location" button
2. Allow location access when prompted
3. Get weather for your current location

### Features Available
- **Current Weather**: Temperature, feels like, humidity, wind speed
- **Weather Description**: Detailed weather conditions
- **5-Day Forecast**: Daily weather predictions
- **Additional Info**: Visibility, pressure, UV index

## 🛠️ Technical Details

### File Structure
```
Weather App/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styling and animations
├── js/
│   └── app.js         # JavaScript functionality
└── README.md          # This file
```

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript ES6+**: Modern JavaScript with async/await
- **Font Awesome**: Weather and UI icons
- **Google Fonts**: Poppins font family

### API Integration
- **OpenWeatherMap API**: For weather data
- **Geolocation API**: For current location
- **Local Storage API**: For saving user preferences

## 🎯 Key Features Explained

### Responsive Design
The app uses CSS Grid and Flexbox for a responsive layout that adapts to different screen sizes. Mobile-first approach ensures great experience on all devices.

### Weather Icons
Dynamic weather icons that change based on weather conditions:
- ☀️ Clear sky
- ⛅ Partly cloudy
- ☁️ Cloudy
- 🌧️ Rain
- ⚡ Thunderstorm
- ❄️ Snow
- 🌫️ Fog/Mist

### Animations
- **Floating Weather Icon**: Gentle up-down animation
- **Loading Spinner**: Smooth rotation animation
- **Hover Effects**: Cards lift on hover
- **Smooth Transitions**: All state changes are animated

### Error Handling
- Invalid city names
- Network errors
- Geolocation permission denied
- API rate limits

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent color */
color: #667eea;
```

### Adding New Features
The modular JavaScript structure makes it easy to add new features:
- New weather data fields
- Additional forecast periods
- Weather alerts
- Historical weather data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on the project repository.

---

**Enjoy your beautiful weather app! 🌤️**
