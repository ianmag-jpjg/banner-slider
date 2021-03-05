document.addEventListener("DOMContentLoaded", function() {
	var numberOfSlides = 5;
	var currentId = 1;
	initializeActiveSlide = function() {
		changeSlide(1);
	}
	changeSlide = function (id) {
		let carouselHrefs = document.getElementById("carousel-container").querySelectorAll("#carousel-container a"); 
		for(let i = 1; i <= numberOfSlides; i++){
			if(i === id){
				document.getElementById('carousel-href-' + id).style.backgroundColor = "black";
			}
			else {
				console.log(i, id);
				document.getElementById('carousel-href-' + i).style.backgroundColor = "gray";
			}
		}
		location.href = "#carousel-" + id;
	}
	autoSlideShow = function() {
		
		if(currentId >= numberOfSlides){
			currentId = 1;
		}
		else {
			currentId = currentId + 1;
		}
		changeSlide(currentId);

	}

	initializeActiveSlide();
	setInterval(function(){ 
		autoSlideShow(); 
	}, 1000);	
});
