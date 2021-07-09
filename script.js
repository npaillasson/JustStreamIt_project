let bestMovies = {
	specURI: "";
	bestMoviesArray: [];
}

let bestActionMovies = {
	specURI: "Action";
	bestActionMoviesArray: [];
}

let bestMysteryMovies = {
	specURI: "Mystery";
	bestMysteryMoviesArray: [];
}

let bestFantasyMovies = {
	specURI: "Fantasy";
	bestFantasyMoviesArray: [];
}

function getIDlist(moviesObject) {
}

class Film {
	constructor (image_url, title, genres, date_published, rated, imdb_score, directors, actors, duration, countries, worldwide_gross_income, description) {
	this.image_url = image_url
	this.title
	this.genres
	this.date_published
	this.rated
	this.imdb_score
	this.directors
	this.actors
	this.duration
	this.countries
	this.worldwide_gross_income
	this.description	
	}
}


let requestType = "/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${specURI}&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
