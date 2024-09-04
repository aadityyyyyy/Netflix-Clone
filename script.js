const movies = [
    { id: 1, title: "MUNJYA", imgSrc: "https://media-cache.cinematerial.com/p/500x/l10vihsd/munjya-indian-movie-poster.jpg?v=1717601388", description: "Munjya is a multifaceted entity in Indian folklore, particularly in Hindu and Jain traditions. It refers to a boy who has undergone the upanayana ceremony, marking his entry into formal education, and has been tied with a sacred thread around his torso and a girdle made of munja grass around his waist, typically at the age of seven. This ritual marks the beginning of his formal education and spiritual journey." },
    { id: 2, title: "SULTAN", imgSrc: "https://cdn.traileraddict.com/content/yash-raj-films/sultan-poster.jpg", description: "Sultan is a 2016 Indian Hindi-language sports drama film written and directed by Ali Abbas Zafar and produced by Aditya Chopra under Yash Raj Films. The film stars Salman Khan in the titular role and Anushka Sharma, along with Amit Sadh and Randeep Hooda" },
    { id: 3, title: "STRANGER THINGS", imgSrc: "https://imgs.search.brave.com/_0PTI8zq6NfTEenMZRv0AusUwTcg6WULzRmoxu1P5ns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXVyb3Bvc3RlcnMu/ZXUvaW1hZ2UvMzUw/L3Bvc3RlcnMvc3Ry/YW5nZXItdGhpbmdz/LW9uZS1zaGVldC1p/NjMzMjkuanBn", description: "Stranger Things is a popular Netflix original series that pays homage to the sci-fi and horror classics of the 1980s. The show is set in the fictional town of Hawkins, Indiana, in the midst of the Cold War era." },
    { id: 4, title: "GANGS OF WASEEYPUR", imgSrc: "https://imgs.search.brave.com/UhJCrOeANX3q4GdrHvTDsxb0fTA1c2J63BzxW3g86m8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFsbGVuZ2VzdG9y/ZS5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/R2FuZ3NfT2ZfV2Fz/c2V5cHVyXy1fQm9s/bHl3b29kX0N1bHRf/Q2xhc3NpY19IaW5k/aV9Nb3ZpZV9Qb3N0/ZXJfOGE2MzIzZTYt/MDE5OS00ZDFlLTlk/OGYtODVhMGIyMzY5/NDMwX2xhcmdlLmpw/Zz92PTE1NzAyNDU5/NjA", description: "Gangs of Wasseypur is a 2012 Indian two-part epic black comedy crime film directed by Anurag Kashyap. The film is set in the coal mining town of Dhanbad, Jharkhand, and revolves around the coal mafia and the power struggles, politics, and vengeance between three crime families." },
    // Add more movie objects
];

function displayMovies() {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = movies.map(movie => `
        <div class="movie" onclick="viewDetails(${movie.id})">
            <img src="${movie.imgSrc}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        </div>
    `).join('');
}

function viewDetails(id) {
    const movie = movies.find(m => m.id === id);
    if (movie) {
        alert(`${movie.title}: ${movie.description}`); // Simulating detailed view
    }
}

window.onload = displayMovies;
