$(function(){

	//load more button
	var modules =  $(document).find('.modules'),
		displayed;

	// handle prev state
	$(modules).each(function(){
		if($(this).css('display') === "block") {
			displayed = '#'+ $(this)[0].id;

			process_prev_btn_state(displayed);
			return;
		}
	});

	// paginate modules based on button clicked
	paginate_modules(displayed, modules);

});

//change state of btn when 
function paginate_modules(displayed, modules) {
	var btns = $(".paginate ul li a"), btn;

	$(btns).click(function(e) {
		e.preventDefault();

		btn = $(this)[0].id;

		//hide all modules
		$(".modules").hide();

		//remove active state
		$(btns).removeClass();

		//add active state
		$(this).attr("class","active");

		$("#module"+btn).show();

		//scroll to the loaded module
		//$('html body').scrollTop($(btn));

		process_prev_btn_state("#module"+btn);
		process_next_btn_state("#module"+btn);
	});


}

function process_btn() {

}

//hide/show prev button
function process_prev_btn_state(displayed) {

	var prev = document.getElementById("prev");

	//hide previous button if the first module is on display
	if (displayed === "#module1") {
		$(prev).hide();
		return;
	}

	//show if the first module is not on display
	$(prev).show();
}

//hide/show next button
function process_next_btn_state(displayed) {
	
	var next = document.getElementById("next");

	//hide next button if the last module is on display
	if (displayed === "#module10") {
		$(next).hide();
		return;
	}

	//show if the last module is not on display
	$(next).show();
}
