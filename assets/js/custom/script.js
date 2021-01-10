// Preloader page
function loader(){
    $('#preloader').addClass('d-none');
    // document.getElementById('preloader').classList.add('d-none');
}

$(document).ready(function(){
	$('#Menu-icon').click(function(){
		$(this).toggleClass('open');
	});
});