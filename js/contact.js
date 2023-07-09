/** 
 * ===================================================================
 * main js for contact.html
 *
 * ------------------------------------------------------------------- 
 */

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
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */
		submitHandler: function (form) {

			var sLoader = $('#submit-loader');

			$.ajax({

				type: "POST",
				url: "/php/email_sender.php",
				data: $(form).serialize(),
				beforeSend: function () {

					sLoader.fadeIn();

				},
				success: function (msg) {

					// Message was sent
					if (msg == 'OK') {
						sLoader.fadeOut();
						$('#message-warning').hide();
						$('#contactForm').fadeOut();
						$('#message-success').fadeIn();
					}
					// There was an error
					else {
						sLoader.fadeOut();
						$('#message-warning').html(msg);
						$('#message-warning').fadeIn();
					}

				},
				error: function () {

					sLoader.fadeOut();
					$('#message-warning').html("Something went wrong. Please try again.");
					$('#message-warning').fadeIn();

				}

			});
		}

	});


})(jQuery);