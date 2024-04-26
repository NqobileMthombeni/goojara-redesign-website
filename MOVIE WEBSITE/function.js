// function searchMovies() {
//     var query = encodeURIComponent(document.getElementById('movieInput').value);
//     var apiKey = '2dfd6b7c'; // Replace 'your_api_key_here' with your actual API key
//     var url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=movie`;

//     // Display loading indicator
//     var movieResults = document.getElementById('movieResults');
//     movieResults.innerHTML = '<p>Loading...</p>';

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (data['Response'] === 'True') {
//                 var movies = data['Search'];
//                 movieResults.innerHTML = '';

//                 movies.forEach(movie => {
//                     var movieDiv = document.createElement('div');
//                     movieDiv.classList.add('movie');

//                     var title = document.createElement('h3');
//                     title.textContent = movie['Title'];

//                     var posterLink = document.createElement('a');
//                     posterLink.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(movie['Title'])}`;
//                     posterLink.target = '_blank';

//                     var poster = document.createElement('img');
//                     poster.src = movie['Poster'];
//                     poster.alt = movie['Title'];

//                     poster.addEventListener('mouseenter', function() {
//                         document.body.style.backgroundImage = `url(${movie['Poster']})`;
//                     });

//                     poster.addEventListener('mouseleave', function() {
//                         document.body.style.backgroundImage = '';
//                     });

//                     posterLink.appendChild(poster);

//                     movieDiv.appendChild(title);
//                     movieDiv.appendChild(posterLink);
//                     movieResults.appendChild(movieDiv);
//                 });
//             } else {
//                 movieResults.innerHTML = 'No movies found with the query: ' + query;
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             movieResults.innerHTML = 'An error occurred. Please try again later.';
//         });
// }

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
    
    // Get references to the content title and the banner element
    const contentTitle = document.querySelector('.content h4');
    const banner = document.querySelector('.banner');
  });
  
  function changbg(imagePath) {
    // Update background image
    banner.style.backgroundImage = `url(${imagePath})`;
    
    // Extract title from image path (assuming title is part of the filename)
    const title = imagePath.split('.')[0].split('-').slice(-1)[0];
    contentTitle.textContent = title; // Update content title
  }
  

  const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
  item.addEventListener('click', () => {
    changbg(item);
  });
});
