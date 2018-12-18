$(document).ready(function(){
	$('.tab-content').hide()
	$('#tabnames').find('a').on('click', function(e){
		e.preventDefault()
		$('#tabnames').find('.current').removeClass('current')
		$(this).addClass('current')
		$(this.hash).show().siblings().hide()
	}).first().click()

	var extraStuff = ['<i class="fab fa-hotjar"></i>', '<i class="fas fa-exclamation-circle"></i>', '<i class="fas fa-carrot"></i>']

	var appTemplate = ''
	$.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
		data.appetizers.forEach(function(item){
			appTemplate += `
				<ul id="appetizertext">
					<li id="appetizername">${item.name}</li>
					<li id="appetizerprice">${item.price}</li>
					<li id="appetizerdesc">${item.description}</li>
					<li id="appetizerextra">${item.extra.hasOwnProperty('spicy') && item.extra.spicy ? extraStuff[0] : ''}
					${item.extra.hasOwnProperty('glutenfree') && item.extra.glutenfree ? extraStuff[1] : ''}
					${item.extra.hasOwnProperty('vegetarian') && item.extra.vegetarian ? extraStuff[2] : ''}</li>
					<li id="appetizerwarn"></li>
				</ul>
			`
		})
		var appContent = document.getElementById('tizerput')
		appContent.innerHTML = appTemplate
	})

	$(".fab.fa-hotjar").on('hover', function() {
		$('#appetizerwarn').innerHTML = "yes"
	})

	var entTemplate = ''
	$.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
		data.entrees.forEach(function(item){
			entTemplate += `
				<ul id="entreetext">
					<li id="entreename">${item.name}</li>
					<li id="entreeprice">${item.price}</li>
					<li id="entreedesc">${item.description}</li>
					<li id="entree-extra">${item.extra.hasOwnProperty('spicy') && item.extra.spicy ? extraStuff[0] : ''}
					${item.extra.hasOwnProperty('glutenfree') && item.extra.glutenfree ? extraStuff[1] : ''}
					${item.extra.hasOwnProperty('vegetarian') && item.extra.vegetarian ? extraStuff[2] : ''}</li>
				</ul>
			`
		})
		var entContent = document.getElementById('entreeput')
		entContent.innerHTML = entTemplate
	})

	var desTemplate = ''
	$.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
		data.desserts.forEach(function(item){
			desTemplate += `
				<ul id="desserttext">
					<li id="dessertname">${item.name}</li>
					<li id="dessertprice">${item.price}</li>
					<li id="dessertdesc">${item.description}</li>
					<li id="dessertextra">${item.extra.hasOwnProperty('spicy') && item.extra.spicy ? extraStuff[0] : ''}
					${item.extra.hasOwnProperty('glutenfree') && item.extra.glutenfree ? extraStuff[1] : ''}
					${item.extra.hasOwnProperty('vegetarian') && item.extra.vegetarian ? extraStuff[2] : ''}</li>
				</ul>
			`
		})
		var desContent = document.getElementById('dessertput')
		desContent.innerHTML = desTemplate
	})
})