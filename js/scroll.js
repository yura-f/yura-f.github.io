$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		if(target.indexOf("#lang-en") == -1)
		{
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 700, 'swing', function () {
				window.location.hash = target;
			});
		}
	});
	
	if(location.hash)
	{
		$('html, body').animate({ scrollTop: $(location.hash).offset().top}, 700);
	}
});