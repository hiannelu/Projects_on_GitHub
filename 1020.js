

$(document).ready(function() {
	$(window).scroll(function() {
		let y = window.scrollY;
		$('#bg').css({top: y * 0.5 + 'px'});
		$('#moon').css({left: -y * 0.5 + 'px'});
		$('#road').css({top: y * 0.15 + 'px'});
		$('#title').css({top: 200 + y + 'px'});
	})
	
	$.ajax({
		async: false,
		type: 'GET',
		url: 'https://api.github.com/users/hiannelu/repos',
		success: function(data) {
			let output;
			$.each(data, function(i, item) {
				title = item.name;
				description = item.description;
				url = item.html_url;
				
				output = 
				`<div class="display">
				  <a href="${url}"><input type="image" width="320" height="180" src="${title}.jpg" herf="${url}"></a>
				  <div class="title">${title}</div>
				  ${description}
				  ${url}
				</div>`
				
				$('#projects').append(output);
			})
		}
	})	
})