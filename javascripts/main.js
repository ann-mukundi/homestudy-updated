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
	var btns = $(".paginate ul li a"), btn, current = "1";

	$(btns).click(function(e) {
		e.preventDefault();

		btn = $(this)[0].id;

		if (btn !== "prev" && btn !== "next") {
			current = btn;
		}

		//hide all modules
		$(".modules").hide();

		//remove active state
		$(btns).removeClass();

		//display appropriate module
		current = process_btn(current, btn);
		
		//scroll to the loaded module
		//$('html body').scrollTop($(btn));

		process_prev_btn_state("#module"+current);
		process_next_btn_state("#module"+current);

	});

	return;
}

function process_btn(current, btn) {
	if(btn === "prev") {
		$("#module"+current).prev().show();
		//add active state
		$("#"+(current - 1)).attr("class","active");
		//process prev
		return current - 1;
	}

	if(btn === "next") {
		$("#module"+current).next().show();
		current = parseInt(current, 10);
		//add active state
		$("#"+(current + 1)).attr("class","active");
		
		return current + 1;
	}

	$("#module"+btn).show();
		
	//add active state
	$("#"+btn).attr("class","active");

	return btn;
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
