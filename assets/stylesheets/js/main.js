// Alert function
function noAccess() {
	alert('You do not have access to this project.');
}

// animate.css' shake function
function animateShake() {
	const element =  document.querySelector('#project-2');
	element.classList.add('animated', 'shake');
	setTimeout(function() {
       $( "#project-2" ).removeClass( "animated" );
       $( "#project-2" ).removeClass( "shake" );
   }, 500);
}

// animate.css' flash function
function animateFlash() {
	const element =  document.querySelector('#project-3');
	element.classList.add('animated', 'flash');
}
