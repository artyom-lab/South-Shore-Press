$(document).ready(function () {

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.page-navbar').addClass("sticky");
    } else {
      $('.page-navbar').removeClass("sticky");
    }
  };

  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

	$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
		e.stopPropagation();
	});

	$('.search').on('click', function() {
	  $(this).parent().toggleClass('open');
	});

});