// jshint devel:true
console.log('\'Allo \'Allo!');

$('#radio-button-down1').change(function(){
	if(this.checked) {
		$('#input-downloads').attr('disabled', false);
		$('#button-downloads').removeClass('disabled');
	}
});

$('#radio-button-down2').change(function(){
	if(this.checked) {
		$('#input-downloads').attr('disabled', true);
		$('#button-downloads').addClass('disabled');
	}
});

$('#check-box-sec2').change(function(){
	if(!$(this).is(':checked')) {
		$('#check-box-sec3').prop('checked', false);
		$('#check-box-sec4').prop('checked', false);
	}
});

$('#check-box-sec3, #check-box-sec4').change(function(){
	if($(this).is(':checked')) {
		$('#check-box-sec2').prop('checked', true);
	}
});

$('#radio-button-up2, #radio-button-up3').change(function(){
	$('#check-box-up1').attr('disabled', true);
	$('#check-box-up1').next().addClass('disabled');
	$('#check-box-up1').parent().next().addClass('disabled');
});

$('#radio-button-up1').change(function(){
	if($(this).is(':checked')) {
		$('#check-box-up1').attr('disabled', false);
		$('#check-box-up1').next().removeClass('disabled');
		$('#check-box-up1').parent().next().removeClass('disabled');
	}
});

$('#check-box-re1').change(function(){
	if(!$(this).is(':checked')) {
		$('#check-box-re2').prop('checked', false);
		$('#check-box-re2').attr('disabled', true);
		$('#check-box-re2').next().addClass('disabled');
		$('#check-box-re2').parent().next().addClass('disabled');
		$('#check-box-re2').parent().next().next().next().addClass('disabled');
	} else {
		$('#check-box-re2').attr('disabled', false);
		$('#check-box-re2').next().removeClass('disabled');
		$('#check-box-re2').parent().next().removeClass('disabled');
		$('#check-box-re2').parent().next().next().next().removeClass('disabled');
	}
});

$('#check-box-re2').change(function(){
	if($(this).is(':checked')) {
		$('#check-box-re1').prop('checked', true);
	}
});


//buttons
$('#check-box-clear2').change(function(){
	if($(this).is(':checked')) {
		$('#dropdown-clear2 select').attr('disabled', false);
	}
	else {
		$('#dropdown-clear2 select').attr('disabled', true);
	}
});

$('#check-box-clear3').change(function(){
	var $button = $(this).parent().next().next();
	if($(this).is(':checked')) {
		$button.removeClass('disabled');
	}
	else {
		$button.addClass('disabled');
	}
});

$('#check-box-form3').change(function(){
	var $button = $(this).parent().next().next();
	if($(this).is(':checked')) {
		$button.removeClass('disabled');
	}
	else {
		$button.addClass('disabled');
	}
});

$('#check-box-pop').change(function(){
	var $button = $(this).parent().next().next();
	if($(this).is(':checked')) {
		$button.removeClass('disabled');
	}
	else {
		$button.addClass('disabled');
	}
});

