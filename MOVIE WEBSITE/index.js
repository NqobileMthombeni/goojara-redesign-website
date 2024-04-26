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

function changBg(bg, title) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');
  banner.style.backgroundImage = `url("../images/movies/${bg}")`;
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';


  contents.forEach(content => { 
      content.classList.remove('active');
      if (content.classList.contains(title)) {
          content.classList.add('active');
      }
  });
}

const concealedBox = document.querySelector('.concealed-box');
const backgroundImage = document.querySelector('.background-image');

concealedBox.addEventListener('click', () => {
  backgroundImage.style.backgroundImage = 'url("MOVIE WEBSITE/bg-little-mermaid.jpg")';  /* Replace with your new image URL */
});
