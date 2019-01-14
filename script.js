$( document ).ready(function() {

	// WELCOME PAGE FUNCTIONALITY:

	$(".welcome-page").fadeIn(2000);

	$("#start").on("click", function() {
		$(".welcome-page").removeClass("active-page");
		$(".name-page").addClass("active-page");
	});


	//set a random photo from an array of photos

	//here is my array of photo srcs
	const startPhotos = [
		"assets/start-photos/cropped/zoltan-tasi-698712-unsplash-c.jpg",
		"assets/start-photos/cropped/dil-689388-unsplash-c.jpg",
		"assets/start-photos/cropped/fancycrave-219668-unsplash-c.jpg",
		"assets/start-photos/cropped/austin-neill-130037-unsplash-c.jpg"
	]

	//this function gets a random item from the array when the array is passed into it
	const randNum  = (array) => {
			const randomNumber = Math.floor(Math.random() * array.length);
			return array[randomNumber];
		}

	//set the src attribute of the img in image-start
	$(".image-start img").attr("src", randNum(startPhotos)); 



	//NAME PAGE FUNCTIONALITY:
	
	//get the user's name and store it as a global variable
	let username = '';

	$(".name-page form").on("submit", function(e){
		e.preventDefault();
		if ($('.name-page form input[type=text]').val() !== ''){
			const name = $('.name-page form input[type=text]').val();
			username = name;	
		};
		$('span.userInput').text(`${username}`);
	//NAVIGATE TO MEDITATION SELECTION PAGE
		$(".name-page").removeClass("active-page");
		$(".meditation-selection-page").addClass("active-page");
	});

	//Set the random photo
	const namePhotos = [
		"assets/name-photos/cropped/ian-stauffer-470013-unsplash-c.jpg",
		"assets/name-photos/cropped/sasha-freemind-186664-unsplash-c.jpg",
		"assets/name-photos/cropped/greg-rakozy-38802-unsplash-c.jpg",
		"assets/name-photos/cropped/jared-rice-388260-unsplash-c.jpg"
	]

	$(".image-name img").attr("src", randNum(namePhotos)); 



	//MEDITATION SELECTION PAGE FUNCTIONALITY:

	//move from meditation-selection-page to different meditation streams
	$("#insomnia").on("click", function() {
		$(".meditation-selection-page").removeClass("active-page");
		$(".inso1").addClass("active-page");
	});

	// Commenting out the one for the mindfulness meditation since I ran out of time for this deadline
	// $("#mindfulness").on("click", function() {
	// 	$(".meditation-selection-page").removeClass("active-page");
	// 	$(".mind1").addClass("active-page");
	// });



	//CYCLING THROUGH MEDITATION CARDS (WITH THE HELP OF MARY THE MENTOR. THANKS MARY!)

	//set up a listener on the body so when it's clicked on find the icon with a class of .nav nested within the element with a class of .active-page
    $("body").on("click", ".active-page .nav", function() {
    	// create a selector using the custom data-slide attribute we've created to target the element with the element with a class of .active-page
		const currentSlideId = `*[data-slide="${$('.active-page').attr('data-slide')}"]`;

		// Because the attribute is returned as a string, we want to turn this into a number so we can increase it by 1
		const nextSlideId = parseInt($('.active-page').attr('data-slide')) + 1;

		// create a selector using the custom data-slide attribute we've created to target the next slide
		const nextSlide = `*[data-slide="${nextSlideId}"]`;

		$(currentSlideId).removeClass("active-page");
		$(nextSlide).addClass("active-page");
	});


    // Fun other stuff

    //Insomnia Meditation Extras
    $(".inso1 .change-fire").on("mouseover", function(){
    	$(".change-fire img").attr("src", "assets/insomnia-photos/cropped/yaoqi-lai-227961-unsplash-c.jpg");
    });

    // Mad libs

    let insoInput1 = '';

    $("form.inso4").on("submit", function(e){
    	e.preventDefault();
    	if ($('.inso4 input[type=text]').val() !== ''){
    		const input = $('.inso4 input[type=text]').val();
    		insoInput1 = input;	
    	};
    	$('span.insoInput1').text(`${insoInput1}`);
    	// DONT FORGET TO ADD CLASS OF NAV TO SUBMIT BUTTON
    });


    let insoInput2 = '';

    $("form.inso7").on("submit", function(e){
    	e.preventDefault();
    	if ($('.inso7 input[type=text]').val() !== ''){
    		const input = $('.inso7 input[type=text]').val();
    		insoInput2 = input;	
    	};
    	$('span.insoInput2').text(`${insoInput2}`);
    	// DONT FORGET TO ADD CLASS OF NAV TO SUBMIT BUTTON
    });
   

	//finish the loop and head back to the first slide. 

	// $(".image-final").on("click", function() {
	// 	$(".inso12").removeClass("active-page");
	// 	$(".welcome-page").addClass("active-page");
	// });

	// I ended up not using this bit of code and instead creating a submit button that cheekily refreshed the page,
	// so that my app could start over and be 'played' again.


//Hey you need this because it closes the document.ready(). Don't accidentally delete it, self!
});




















