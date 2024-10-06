let watchlist = [];
let sortDescending = true; // Start with descending order (5 to 1)

// Function to add a movie to the watchlist
function addMovie() {
  let movieTitle = document.getElementById('movie-name').value;
  let movieRating = document.getElementById('movie-rating').value;
  let movieCategory = document.getElementById('movie-category').value;

  // Check if all inputs are filled
  if (movieTitle && movieRating && movieCategory) {
    // Add the movie object to the array
    watchlist.push({
      title: movieTitle,
      rating: parseInt(movieRating), // Ensure rating is an integer
      category: movieCategory
    });

    // Clear input fields
    document.getElementById('movie-name').value = '';
    document.getElementById('movie-rating').value = '';
    document.getElementById('movie-category').selectedIndex = 0;

    displayWatchlist(); // Update the displayed watchlist
  } else {
    alert('Please fill in all fields');
  }
}

// Function to display the filtered and sorted movie list dynamically
function displayWatchlist() {
  let movieList = document.getElementById('movie-list');
  movieList.innerHTML = ''; // Clear current list

  // Get the selected filter category
  let filterCategory = document.getElementById('filter-category').value;

  // Filter movies by selected category (or show all if 'All' is selected)
  let filteredMovies = watchlist.filter(movie => {
    return filterCategory === 'All' || movie.category === filterCategory;
  });

  // Sort the filtered movies by rating (toggle between descending and ascending)
  if (sortDescending) {
    filteredMovies.sort((a, b) => b.rating - a.rating); // Descending (5 to 1)
  } else {
    filteredMovies.sort((a, b) => a.rating - b.rating); // Ascending (1 to 5)
  }

  // Loop through the filtered and sorted movies and display them
  filteredMovies.forEach((movie, index) => {
    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');

    // Movie details with rating and category
    listItem.innerHTML = `<span><strong>${movie.title}</strong> (Rating: ${movie.rating}/5, Category: ${movie.category})</span>
                          <button class="btn-small red" onclick="removeMovie(${index})">Watched</button>`;
    
    movieList.appendChild(listItem);
  });
}

// Function to remove a movie from the watchlist
function removeMovie(index) {
  watchlist.splice(index, 1); // Remove movie by index
  displayWatchlist(); // Update the displayed watchlist
}

// Function to toggle sorting order and update display
function toggleSortOrder() {
  sortDescending = !sortDescending; // Toggle the sorting order
  displayWatchlist(); // Re-display the list with the new order
}

// Add event listener for the "Add Movie" button
document.getElementById('add-movie-btn').addEventListener('click', addMovie);

// Add event listener for the filter dropdown (Update list when category changes)
document.getElementById('filter-category').addEventListener('change', displayWatchlist);

// Add event listener for the sort button (Toggle sorting order)
document.getElementById('sort-rating').addEventListener('click', toggleSortOrder);
