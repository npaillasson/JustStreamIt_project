const numberOfPagesToView = 1; //number of pages that must be consulted to obtain seven films (5 films per page)

let bestMovies = {
	genre: "",
	bestMoviesArray: []
};

let bestActionMovies = {
	genre: "Action",
	bestActionMoviesArray: []
};

let bestMysteryMovies = {
	genre: "Mystery",
	bestMysteryMoviesArray: []
};

let bestFantasyMovies = {
	genre: "Fantasy",
	bestFantasyMoviesArray: []
};

const endPoint = "http://localhost:8000/"
let startFilterUrl = "api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre="
let endFilterUrl = "&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="



function getUrl(moviesObject) {
	let url = endPoint + startFilterUrl + moviesObject.genre + endFilterUrl;
	return url;
}

function putResultsInArray(results) {
	for (result of results) {

	}
}

function getIDlist(moviesObject) {
	let url = getUrl(moviesObject);
	let idList = [];
	let numberOfPageViewed = 0;
	moviesObject.genre = []
		fetch(url)
			.then(res => {
				if (res.ok) {
					res.json().then(data => {
						idList = idList.concat(data["results"]);
						console.log(idList)
						numberOfPageViewed += 1;
					})
				} else {
				console.log("erreur");
		}
	})
}

getIDlist(bestMovies);

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

