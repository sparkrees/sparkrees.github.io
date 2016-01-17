//alert($); /*this is a comment. dollar just means jquery. checks that jquery is working*/


	function askQuestions (){



	var firstName = prompt ('what is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + ' ' + lastName;


	if (firstName == 'General' && lastName !='Assembly')

		{console.log ('Greetings, General!');

	}

	var faveColour = prompt ('What is your favourite Colour?');

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'yellow')

	{

		$('h1').css ('color',faveColour); 
	}

	//when page has loaded the below triggers a jquery action
	$(function() {

//when the use clicks the image, ask questions

$('img').on('click', askQuestions); 
		//when user clicks an h3 element - jquery do this. we make the browser listen to an h3 element

		//hide all sections to begin with 

		$('h3').next().hide();

		$('h3').on('click',function() {

			//toggle next element - after any h3. hide and reveal
			$(this).next().slideToggle();

		});




	/*below actions hides next element on page, like text below header*/