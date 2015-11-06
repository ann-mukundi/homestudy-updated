$(function(){

	//load more button
	var loadMoreBtn =  document.getElementById('loadmore');

	$(loadMoreBtn).on('click', function(){

		var modules =  $(document).find('.modules'),
			displayed;

		$(modules).each(function(){
			if($(this).css('display') === "block") {
				displayed = '#'+ $(this)[0].id
			}

		});

		//display the next module
		$(displayed).next().show();

		//scroll to the loaded module
		$('html body').scrollTop($(displayed).offset().bottom);

		//approaching the last module hide button
		if (displayed === "#module9") {
			$(loadMoreBtn).hide();
		}

	});

});