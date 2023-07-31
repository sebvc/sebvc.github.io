/** 
 * ===================================================================
 * main js for contact.html
 *
 * ------------------------------------------------------------------- 
 */

// $('#gform').on('submit', function (e) {
//     $('#gform *').fadeOut(2000);
//     $('#gform').prepend('Your submission has been processed...');
// });

////////////////////////////////////////////////
// const contactForm = document.getElementById('contactForm'); // <form>
// const googleModal = document.getElementById('googleModal'); // modal
// const modalLauncher = document.getElementById('modalLauncher'); // modal launch button
document.getElementById('contactForm').addEventListener('submit', function (event) {
	event.preventDefault();

	// const contactForm = document.getElementById('contactForm'); // <form>
	const hidden_iframe = document.getElementById('hidden_iframe'); // google form iframe inside modal
	// const googleModal = document.getElementById('googleModal'); // modal
	// const modalLauncher = document.getElementById('modalLauncher'); // modal launch button

	const emailValue = document.getElementById('entry.354116389').value; // E-Mail
	const nameValue = document.getElementById('entry.1109242279').value; // Name
	const subjectValue = document.getElementById('entry.751595604').value; // Subject
	const messageValue = document.getElementById('entry.2024228114').value; // message body

	// Construct the Google Form URL with the custom query parameters
	const baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdjPnpfabaYdgm5YULcs4navaA4Y4eRkccHktEZHE8X30YuNg/formResponse'; // Replace with your target URL
	const queryParams = `?usp=pp_url&entry.354116389=${encodeURIComponent(emailValue)}&entry.1109242279=${encodeURIComponent(nameValue)}&entry.751595604=${encodeURIComponent(subjectValue)}&entry.2024228114=${encodeURIComponent(messageValue)}`;
	const targetURL = baseURL + queryParams;

	// Navigate to the generated URL
	// window.location.href = targetURL; // opens a new tab
	hidden_iframe.src = targetURL; // renders in <iframe id="hidden_iframe">
	// googleModal.show(modalLauncher);
	$('#modalLauncher').fadeIn(750);
	$('#contactForm').fadeOut(750);
	// contactForm.style = "display:none;";

});

////////////////////////////////////////////////


(function ($) {

	"use strict";


	/*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()

	/*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('textarea').autoResize();

	/*---------------------------------------------------- */
	/*	modal form
	------------------------------------------------------ */

	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/*---------------------------------------------------- */
	/*	local validation 
	/*---------------------------------------------------- */
	// var submitted=false;
	// $('#contactForm').on('submit', function(e) {
	// $('#contactForm *').fadeOut(2000);
	// $('#contactForm').prepend('Your message was sent, thank you!');
	// });




	// $('#contactForm').validate({

	// 	/* submit via ajax */
	// 	submitHandler: function (form) {

	// 		var sLoader = $('#submit-loader');

	// 		$.ajax({

	// 			type: "POST",
	// 			url: "/style/php/email_sender.php",
	// 			data: $(form).serialize(),
	// 			beforeSend: function () {

	// 				sLoader.fadeIn();

	// 			},
	// 			success: function (msg) {

	// 				// Message was sent
	// 				if (msg == 'OK') {
	// 					sLoader.fadeOut();
	// 					$('#message-warning').hide();
	// 					$('#contactForm').fadeOut();
	// 					$('#message-success').fadeIn();
	// 				}
	// 				// There was an error
	// 				else {
	// 					sLoader.fadeOut();
	// 					$('#message-warning').html(msg);
	// 					$('#message-warning').fadeIn();
	// 				}

	// 			},
	// 			error: function () {

	// 				sLoader.fadeOut();
	// 				$('#message-warning').html("Something went wrong. Please try again.");
	// 				$('#message-warning').fadeIn();

	// 			}

	// 		});
	// 	}

	// });


})(jQuery);