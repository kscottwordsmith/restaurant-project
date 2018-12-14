$(document).ready(function(){
	$('.tab-content').css('visibility', 'visible')
	$('#tab1 > .tab-content > .tab-text .tab-img').addClass('active')

	$('.tab-title').on('click', function(){
		var tab = $(this).find('+.tab-content')
		$('.tab-content').removeClass('active')
		tab.addClass('active')
	})
})