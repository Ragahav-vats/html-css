# 🔧 Weather App Setup Guide

## Getting Real Weather Data

The weather app currently runs in demo mode. To get real weather data, follow these steps:

### Step 1: Get an API Key
1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Sign up for a free account
3. Go to your profile and get your API key
4. The API key will be activated within 2 hours

### Step 2: Configure the API Key
1. Open `js/app.js` in a text editor
2. Find line 3: `this.apiKey = 'YOUR_API_KEY';`
3. Replace `'YOUR_API_KEY'` with your actual API key
4. Save the file

Example:
```javascript
this.apiKey = 'abc123def456ghi789'; // Your actual API key here
```

### Step 3: Test the App
1. Open `index.html` in your browser
2. Enter a city name (e.g., "London", "New York", "Tokyo")
3. Click search or press Enter
4. You should now see real weather data!

## Troubleshooting

### "API key not configured" Error
- Make sure you've replaced `'YOUR_API_KEY'` with your actual API key
- Check that the API key is correct and active

### "City not found" Error
- Check the spelling of the city name
- Try using the city name in English
- Some cities might need the country code (e.g., "London, UK")

### "Invalid API key" Error
- Verify your API key is correct
- Make sure your API key is activated (takes up to 2 hours)
- Check if you've exceeded the free tier limits

### "Rate limit exceeded" Error
- The free API has a limit of 60 calls per minute
- Wait a minute and try again
- Consider upgrading to a paid plan for higher limits

## Demo Mode

If you don't want to set up an API key, the app will run in demo mode showing sample weather data for New York.

## Support

If you're still having issues:
1. Check the browser console for error messages
2. Verify your internet connection
3. Make sure you're using a modern browser
4. Try refreshing the page

---

**Happy weather checking! 🌤️**
