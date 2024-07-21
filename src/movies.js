// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const movieDirectors = moviesArray.map((movie) => movie.director);
    let uniqueDirectors = [];
    movieDirectors.forEach((director) => {
        if (!uniqueDirectors.includes(director)) {
            uniqueDirectors.push(director);
        }
    });
    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length===0) return 0;
    let movieCount=0;
    moviesArray.forEach(movie => {
        if(movie.director==='Steven Spielberg' && movie.genre.includes('Drama')){
            movieCount++;
        }
         
    });
    return movieCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length == 0) return 0;

    const result = moviesArray.reduce((total, movie) => {
        if (!movie.score) movie.score = 0;
        return total + movie.score;
    },0)

    return parseFloat((result/moviesArray.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let result=0;
    let totalObjects=0;
    moviesArray.forEach(movie => {
        if(movie.genre.includes('Drama')){
            result+=movie.score;
            totalObjects++;
        }
    });
    if(totalObjects===0) return 0;

    return parseFloat((result / totalObjects).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesCopy=[...moviesArray]
    return moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(movie => movie.title);
    titles.sort((a, b) => a.localeCompare(b));
    return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
