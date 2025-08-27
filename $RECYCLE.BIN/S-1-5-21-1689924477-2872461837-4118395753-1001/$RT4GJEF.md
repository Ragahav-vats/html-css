# Movie Search App 🎬

A beautiful and modern movie search application built with HTML, CSS, and JavaScript. Search for movies, view details, and discover new films with an attractive and responsive user interface.

## ✨ Features

- **🔍 Real-time Movie Search**: Search for movies using The Movie Database (TMDB) API
- **🎨 Beautiful UI**: Modern gradient design with smooth animations and hover effects
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎯 Advanced Filtering**: Filter movies by year and genre
- **📊 Movie Details**: Click on any movie to view detailed information in a modal
- **⭐ Ratings Display**: See movie ratings and release dates
- **🔄 View Toggle**: Switch between grid and list view modes
- **⚡ Fast Loading**: Optimized performance with lazy loading images
- **🎭 Genre Information**: View movie genres and categories
- **🔧 Error Handling**: Graceful error handling with retry functionality

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls)

### Installation

1. **Clone or Download** the project files to your local machine
2. **Open** `index.html` in your web browser
3. **Start Searching** for movies!

### File Structure

```
Movie Search/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and animations
├── js/
│   └── app.js          # JavaScript functionality
└── README.md           # This file
```

## 🎯 How to Use

### Basic Search
1. Type a movie title in the search box
2. Press Enter or click the search button
3. Browse through the results

### Advanced Features
- **Year Filter**: Select a specific year to filter results
- **Genre Filter**: Choose a genre to narrow down results
- **View Toggle**: Switch between grid and list view using the toggle buttons
- **Movie Details**: Click on any movie card to see detailed information

### Movie Information Displayed
- **Movie Title**: The name of the movie
- **Poster Image**: High-quality movie poster
- **Release Year**: When the movie was released
- **Rating**: User rating with star display
- **Genre**: Primary genre of the movie
- **Overview**: Brief description of the movie plot

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **TMDB API**: The Movie Database API for movie data
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Poppins font family

### API Integration
The app uses The Movie Database (TMDB) API to fetch movie data:
- **Base URL**: `https://api.themoviedb.org/3`
- **Endpoints Used**:
  - `/movie/popular` - Get popular movies
  - `/search/movie` - Search for movies
  - `/movie/{id}` - Get detailed movie information

### Key Features Implementation
- **Responsive Grid Layout**: CSS Grid for adaptive movie card layout
- **Modal System**: Custom modal for movie details
- **Error Handling**: Comprehensive error states and retry functionality
- **Loading States**: Smooth loading animations
- **Search Debouncing**: Optimized search performance
- **Image Lazy Loading**: Better performance with lazy-loaded images

## 🎨 Design Features

### Visual Design
- **Gradient Background**: Beautiful purple-blue gradient
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Smooth Animations**: CSS animations for enhanced user experience
- **Hover Effects**: Interactive hover states on cards and buttons
- **Modern Typography**: Clean, readable Poppins font

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Accent**: Gold (#ffd700) for ratings
- **Background**: White with transparency
- **Text**: Dark gray (#333) for readability

## 📱 Responsive Design

The app is fully responsive and works on all device sizes:
- **Desktop**: Full grid layout with hover effects
- **Tablet**: Adjusted grid columns and spacing
- **Mobile**: Single column layout with optimized touch targets

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent colors */
--accent-color: #ffd700;
--primary-color: #667eea;
```

### Adding New Features
The modular JavaScript structure makes it easy to add new features:
- Add new filter options in the HTML
- Extend the `MovieSearchApp` class with new methods
- Modify the CSS for new UI elements

## 🐛 Troubleshooting

### Common Issues
1. **No movies loading**: Check your internet connection
2. **Search not working**: Ensure you have a stable internet connection
3. **Images not displaying**: Some movies may not have poster images

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the browser console for error messages
3. Ensure all files are in the correct directory structure

---

**Enjoy discovering amazing movies! 🎬✨**
