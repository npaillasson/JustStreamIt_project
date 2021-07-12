var bestMovies = {
	genre: "",
	mainUrls: [],
	moviesIds: [],
};

var firstCategory = {
	genre: "Action",
	mainUrls: [],
	moviesIds: [],
};

var secondeCategory = {
	genre: "Mystery",
	mainUrls: [],
	moviesIds: [],
};

var thirdCategory = {
	genre: "Fantasy",
	mainUrls: [],
	moviesIds: [],
};

var categoriesArray = [bestMovies, firstCategory, secondeCategory, thirdCategory]
console.log(categoriesArray)

const endPoint = "http://localhost:8000/"
let startFilterUrl = "api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre="
let endFilterUrl = "&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
let nextPage = "&page=2"



function getMainUrl(moviesObject) {
let genre = moviesObject.genre
let urlFirstPage = endPoint + startFilterUrl + moviesObject.genre + endFilterUrl
let urlSecondePage = urlFirstPage + nextPage;
let returnArray = [urlFirstPage, urlSecondePage];
moviesObject.mainUrls = returnArray
}

for (let category of categoriesArray) {
	getMainUrl(category);
}


console.log(bestMovies, firstCategory, secondeCategory, thirdCategory)


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

