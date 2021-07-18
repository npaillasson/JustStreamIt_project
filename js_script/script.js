var bestMovies = {
	genre: "",
	mainUrls: [],
	moviesIds: [],
	img_selector: document.getElementsByClassName("best_film_img")
};

var firstCategory = {
	genre: "Action",
	mainUrls: [],
	moviesIds: [],
	img_selector: document.getElementsByClassName("first_category_img")
};

var secondeCategory = {
	genre: "Mystery",
	mainUrls: [],
	moviesIds: [],
	img_selector: document.getElementsByClassName("seconde_category_img")
};

var thirdCategory = {
	genre: "Fantasy",
	mainUrls: [],
	moviesIds: [],
	img_selector: document.getElementsByClassName("third_category_img")
};

var categoriesArray = [bestMovies, firstCategory, secondeCategory, thirdCategory];

function getMainUrl(moviesObject) {
let genre = moviesObject.genre;
let urlFirstPage = `http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=${genre}&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=`;
let urlSecondePage = urlFirstPage + "&page=2";
let returnArray = [urlFirstPage, urlSecondePage];
moviesObject.mainUrls = returnArray;
}

for (let category of categoriesArray) {
	getMainUrl(category);
}

fetch(bestMovies.mainUrls[0]).then(reponse => reponse.json().then((data) => {
	let bestFilmId = data["results"][0]["id"];
	fetch(`http://localhost:8000/api/v1/titles/${bestFilmId}`).then(secondResponse => secondResponse.json().then((filmData) => {
		let top_film_img = document.getElementById("top_img");
		top_film_img.src = filmData["image_url"];
		top_film_img.dataset.id = filmData["id"];
		document.getElementById("top_title").innerText = filmData["title"];
		document.getElementById("top_description").innerText = filmData["description"];
		let button = document.getElementById("more_information");
		button.dataset.id = filmData["id"]
	}))
}))

for (let category of categoriesArray) {

fetch(category["mainUrls"][0]).then(response => response.json().then((data) => {

	if (category.genre == "") {
		data["results"].shift()
	}
	for (let index in data["results"]){
		category["img_selector"][index].dataset.id = data["results"][index]["id"];
		category["img_selector"][index].src = data["results"][index]["image_url"];
	}
}))

fetch(category["mainUrls"][1]).then(response => response.json().then((data) => {

	if (category.genre == "") {
		data["results"].splice(3, 2)
	} else {
		data["results"].splice(2, 3)
	}

	for (let index in data["results"]) {
		let shifted_index;
		if (category.genre == "") {
			shifted_index = (Number(index) + 4);
		} else {
			shifted_index = (Number(index) + 5);
		}
		category["img_selector"][(shifted_index)].dataset.id = data["results"][index]["id"];
		category["img_selector"][(shifted_index)].src = data["results"][index]["image_url"];
	}
}))
}