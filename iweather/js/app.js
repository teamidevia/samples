(function($){
	var time = new Date();
	var htmlTime = '';
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
	  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];
	var dateString = '';
	htmlTime += (time.getHours() % 12) + ':' + ((time.getMinutes().toString().length < 2) ? ('0' + time.getMinutes().toString()) : time.getMinutes()) + ((time.getHours() / 12 > 0) ? ' pm' : ' am');
	$('.time').html(htmlTime);
	$('.loader').hide();
	// geolocation
	if("geolocation" in navigator) {
		$('.location-btn').show();
	} else {
		$('.location-btn').hide();
		$('.message-container').hide();
		$('.message').text('Your device does not support Geolocation API');
	}

	$('.location-btn').on('click', function() {
		$('.loader').show();
		$('.message').text('Getting your weather information');
		navigator.geolocation.getCurrentPosition(function(position) {
			loadWeather(position.coords.latitude + ',' +position.coords.longitude);
		});
	});
	// weather function
	function loadWeather(location, woeid) {
		$.simpleWeather({
			location: location,
			woeid: '',
			unit: 'c',
			success: function(weather) {
				// Today's weather
				$('.city').text(weather.city + ',' + weather.region);
				$('.temp').text(weather.temp);
				$('.pressure').text(weather.pressure + ' ' + weather.units.pressure)
				$('.humidity').text(weather.humidity + '%');
				$('.wind-speed').text(weather.wind.speed + ' ' + weather.units.speed);
				$('.date').text(weather.forecast[0].day +', '+ monthNames[time.getMonth()] + ' ' + time.getDate());
				// weather forecast
				var forecastHtml = '';
				for(i = 1; i < 4; i++) {
					var day = weather.forecast[i];
					forecastHtml += '<tr>' +
						'<td>' + day.day + '</td>' +
						'<td><img src="img/icons/'+ day.code +'.svg" alt="rain" class="img"></td>' +
						'<td><span><span class="max">' + day.high + '</span>° / <span class="min">' + day.low + '</span>°</span></td>' +
					'</tr>';
				}
				$('.upcoming-days').html(forecastHtml);

				$('.loader').hide();
				$('.message').text('');

			},
			error: function(error) {
				console.log(error);
			}
		});
	}
})(jQuery)