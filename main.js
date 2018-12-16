$(document).ready(function(){
	$('.tab-content').hide()
	$('#tabnames').find('a').on('click', function(e){
		e.preventDefault()
		$('#tabnames').find('.current').removeClass('current')
		$(this).addClass('current')
		$(this.hash).show().siblings().hide()
	}).first().click()

	var appTemplate = ''
	$.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
		data.appetizers.forEach(function(item){
			appTemplate += `
				<ul id="appetizertext">
					<li id="appetizername">${item.name}</li>
					<li id="appetizerprice">${item.price}</li>
					<li id="appetizerdesc">${item.description}</li>
					<li id="appetizerextra">intentionally blank</li>
				</ul>
			`
		})
		var appContent = document.getElementById('tizerput')
		appContent.innerHTML = appTemplate
	})

	var entTemplate = ''
	$.get('https://obscure-tundra-54269.herokuapp.com/bar-food', function(data){
		data.entrees.forEach(function(item){
			entTemplate += `
				<ul id="entreetext">
					<li id="entreename">${item.name}</li>
					<li id="entreeprice">${item.price}</li>
					<li id="entreedesc">${item.description}</li>
					<li id="entree-extra">intentionally blank</li>
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
					<li id="dessertextra">intentionally blank</li>
				</ul>
			`
		})
		var desContent = document.getElementById('dessertput')
		desContent.innerHTML = desTemplate
	})
})