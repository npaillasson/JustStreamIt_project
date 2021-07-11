var bestMovies = {
	genre: "",
	moviesIds: [],
	bestMoviesArray: []
};

var bestActionMovies = {
	genre: "Action",
	moviesIds: [],
	bestActionMoviesArray: []
};

var bestMysteryMovies = {
	genre: "Mystery",
	moviesIds: [],
	bestMysteryMoviesArray: []
};

var bestFantasyMovies = {
	genre: "Fantasy",
	moviesIds: [],
	bestFantasyMoviesArray: []
};

const endPoint = "http://localhost:8000/"
let startFilterUrl = "api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre="
let endFilterUrl = "&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains="
let nextPage = "&page=2"



function getUrl(moviesObject) {
	let url_page_1 = endPoint + startFilterUrl + moviesObject.genre + endFilterUrl;
	let url_page_2 = endPoint + startFilterUrl + moviesObject.genre + endFilterUrl + nextPage;
	return [url_page_1, url_page_2];
}

function getRequest(url) {
	newArray = [];
	fetch(url)
		.then(res => {
			if (res.ok) {
				return res.json().then(data => {
					newArray = data["results"]
					console.log("premierArray:", newArray )
				})
			} else {
			console.log("erreur");
			}
		})
}


function getIDlist(moviesObject) {
	let urlArray = getUrl(moviesObject);
	let idList = [];
	let newObject = [];
	for (url of urlArray){
	fetch(url)
	  .then(function(res) {
	    if (res.ok) {
	      return res.json();
	    }
	  })
	  .then(function(value) {
	    newObject = (value["results"]);
	    for (id of newObject) {
	    	idList.push(id)
	    }
	  return idList
	  })
	  .catch(function(err) {
	    // Une erreur est survenue
	  });
	  console.log(idList)

	}
	console.log(idList)
	return idList
}

bestMovies["moviesIds"] = getIDlist(bestMovies);
let test = bestMovies.moviesIds[0]
console.log("test", test)
console.log(bestMovies["moviesIds"])


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

