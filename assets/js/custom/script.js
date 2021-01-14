// Preloader page
function loader() {
	$('#preloader').addClass('d-none');
}


// Menu toggle button
$(document).ready(function () {
	$('#Menu-icon').click(function () {
		$(this).toggleClass('open');
	});
});


// Back to top button
$(document).ready(function () {
	var progressPath = document.querySelector('.progress-wrap path');
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}
	updateProgress();
	$(window).scroll(updateProgress);
	var offset = 50;
	var duration = 1500;
	jQuery(window).on('scroll', function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.progress-wrap').addClass('active-progress');
		} else {
			jQuery('.progress-wrap').removeClass('active-progress');
		}
	});
	jQuery('.progress-wrap').on('click', function (event) {
		event.preventDefault();
		jQuery('html, body').animate({ scrollTop: 0 }, duration);
		return false;
	})

});


// Modal for reply comments
$('#ReplyModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget); // Button that triggered the modal
	var id = button.data('id'); // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this);
	modal.find('.modal-title').text(id);
})