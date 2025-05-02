
var slideDivs = {
	"dopplerRadar":".radar-doppler",
	"currentConditions":".current-conditions",
	"extendedForecast":".extended-forecast",
	"almanac":".almanac-slide",
	"nearbyCities":".nearby-cities",
	"introSlide":".intro-slide",
	"providerSlide":".provider-slide",
	"upNext":".upnext-slide",
	"dayDesc":".daydesc-forecast",
	"regionalSat":".regional-sat",
	"regionalRadar":".regional-radar",
};
var slideLength = 10000;
var currentProgram;
var currentDiv;
function slideKickOff() {
	idx = 0;
	nidx = 1;
	showSlides();
	function showSlides() {
		var slidePrograms = {
		dopplerRadar() {
			try {
				$('.radar-doppler').fadeIn(0);
				startRadar(locradar)
				setTimeout(function() {
					stopRadar()
					slideCallBack();
					$('.radar-doppler').fadeOut(0);
					// setTimeout(() => {
					// 	$('.radar-doppler').fadeOut(0);
					// }, 1000);
				}, (slideLength*2)-1000);
			} catch (error) {
				$('.radar-doppler').fadeIn(0);
				$('.radar-doppler .tempunavailable').fadeIn(0);
				console.error(error)
				setTimeout(function() {
					slideCallBack();
					setTimeout(() => {
						$('.radar-doppler').fadeOut(0);
						$('.radar-doppler .tempunavailable').fadeOut(0);
					}, 1000);
				}, (slideLength*2)-1000);
			}
		},
		regionalSat() {
			try {
				$('.regional-sat').fadeIn(0);
				startRadar(satradar)
				setTimeout(function() {
					stopRadar()
					slideCallBack();
					$('.regional-sat').fadeOut(0);
				}, (slideLength*2)-1000);
			} catch (error) {
				$('.regional-sat').fadeIn(0);
				$('.regional-sat .tempunavailable').fadeIn(0);
				setTimeout(function() {
					slideCallBack();
					$('.regional-sat').fadeOut(0);
					$('.regional-sat .tempunavailable').fadeOut(0);
				}, slideLength*2);
			}
		},
		regionalRadar() {
			try {
				$('.regional-radar').fadeIn(0);
				startRadar(regradar)
				setTimeout(function() {
					stopRadar()
					slideCallBack();
					$('.regional-radar').fadeOut(0);
				}, (slideLength*2)-1000);
			} catch (error) {
				$('.regional-radar').fadeIn(0);
				$('.regional-radar .tempunavailable').fadeIn(0);
				setTimeout(function() {
					slideCallBack();
					$('.regional-radar').fadeOut(0);
					$('.regional-radar .tempunavailable').fadeOut(0);
				}, slideLength*2);
			}
		},
		currentConditions() {
			try {
				$('.current-conditions .slide-data .cityname').text(weatherData.currentConditions.cityname);
				$('.current-conditions .slide-data .humidity').text(weatherData.currentConditions.humidity);
				$('.current-conditions .slide-data .pressure').text(weatherData.currentConditions.pressure);
				$('.current-conditions .slide-data .wind').text(weatherData.currentConditions.wind);
				$('.current-conditions .slide-data .gusts').text(weatherData.currentConditions.gusts);
				$('.current-conditions .slide-data .condition').text(weatherData.currentConditions.cond);
				$('.current-conditions .slide-data .temperature').text(weatherData.currentConditions.temp);
				getIcon($('.current-conditions .slide-data .icon'), weatherData.currentConditions.icon, weatherData.currentConditions.windspeed)

				$('.current-conditions').fadeIn(0);
				$('.current-conditions .slide-data').fadeIn(0);
				if (audioSettings.narrations) { audioPlayer.playCC(); }
				setTimeout(function() {
					$('.current-conditions').fadeOut(1000);
					$('.current-conditions .slide-data').fadeOut(1000);
					slideCallBack();
				}, slideLength);
			} catch (error) {
				$('.current-conditions .slide-data .cityname').text(locationConfig.mainCity.displayname);
				$('.current-conditions .slide-data .humidity').text("");
				$('.current-conditions .slide-data .pressure').text("");
				$('.current-conditions .slide-data .wind').text("");
				$('.current-conditions .slide-data .gusts').text("");
				$('.current-conditions .slide-data .condition').text("");
				$('.current-conditions .slide-data .temperature').text("");
				getIcon($('.current-conditions .slide-data .icon'), 44, 0)

				$('.current-conditions').fadeIn(0);
				$('.current-conditions .slide-data').fadeIn(0);
				if (audioSettings.narrations) { audioPlayer.playCC(); }
				setTimeout(function() {weatherAudio.playCurrentConditions();},1000)
				setTimeout(function() {
					$('.current-conditions').fadeOut(1000);
					$('.current-conditions .slide-data').fadeOut(1000);
					slideCallBack();
				}, slideLength);
			}
		},
		extendedForecast() {
			var daysDivs = ['one', "two", "three", "four", "five"]
			try {
				$('.extended-forecast .slide-data .cityname').text(weatherData.extendedForecast.cityname)
				for (var i = 0; i < 5; i++) {
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .dayname').text(weatherData.extendedForecast.days[i].dayname)
					getIcon($('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .icon'), weatherData.extendedForecast.days[i].icon, weatherData.extendedForecast.days[i].windspeed)
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .condition').text(weatherData.extendedForecast.days[i].cond)
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .high').text(weatherData.extendedForecast.days[i].high)
					if (weatherData.extendedForecast.noReport == true) {
						$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .divider').text("")
					} else {
						$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .divider').text("/")
					}
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .low').text(weatherData.extendedForecast.days[i].low)
				}
				$('.extended-forecast').fadeIn(0);
				$('.extended-forecast .slide-data').fadeIn(1000);
				setTimeout(function() {
					$('.extended-forecast').fadeOut(1000);
					$('.extended-forecast .slide-data').fadeOut(1000);
					slideCallBack();
				}, slideLength);
			} catch (error) {
				$('.extended-forecast .slide-data .cityname').text(locationConfig.mainCity.displayname)
				for (var i = 0; i < 5; i++) {
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .dayname').text("")
					getIcon($('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .icon'), 44, 0)
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .condition').text("")
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .high').text("")
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .divider').text("")
					$('.extended-forecast .slide-data .day.' + daysDivs[i] + ' .low').text("")
				}
				$('.extended-forecast').fadeIn(0);
				$('.extended-forecast .slide-data').fadeIn(1000);
				setTimeout(function() {
					$('.extended-forecast').fadeOut(1000);
					$('.extended-forecast .slide-data').fadeOut(1000);
					slideCallBack();
				}, slideLength);
			}
		},
		almanac() {
			try {
				$('.almanac-slide .slide-data .dayname-today').text(weatherData.almanac.today)
				$('.almanac-slide .slide-data .dayname-tomorrow').text(weatherData.almanac.tomorrow)
				$('.almanac-slide .slide-data .sunrise-today').text(weatherData.almanac.sunrisetoday)
				$('.almanac-slide .slide-data .sunset-today').text(weatherData.almanac.sunsettoday)
				$('.almanac-slide .slide-data .sunrise-tomorrow').text(weatherData.almanac.sunrisetomorow)
				$('.almanac-slide .slide-data .sunset-tomorrow').text(weatherData.almanac.sunsettomorrow)
				$('.almanac-slide .slide-data .moonphase.one').css('background-image', 'url("images/moonphases/' + weatherData.almanac.moonphases[0].moon + '.png")')
				$('.almanac-slide .slide-data .moonphase.two').css('background-image', 'url("images/moonphases/' + weatherData.almanac.moonphases[1].moon + '.png")')
				$('.almanac-slide .slide-data .moonphase.three').css('background-image', 'url("images/moonphases/' + weatherData.almanac.moonphases[2].moon + '.png")')
				$('.almanac-slide .slide-data .moonphase.four').css('background-image', 'url("images/moonphases/' + weatherData.almanac.moonphases[3].moon + '.png")')
				$('.almanac-slide .slide-data .phasetext.one').text(weatherData.almanac.moonphases[0].moon)
				$('.almanac-slide .slide-data .phasetext.two').text(weatherData.almanac.moonphases[1].moon)
				$('.almanac-slide .slide-data .phasetext.three').text(weatherData.almanac.moonphases[2].moon)
				$('.almanac-slide .slide-data .phasetext.four').text(weatherData.almanac.moonphases[3].moon)
				$('.almanac-slide .slide-data .phasedate.one').text(weatherData.almanac.moonphases[0].date)
				$('.almanac-slide .slide-data .phasedate.two').text(weatherData.almanac.moonphases[1].date)
				$('.almanac-slide .slide-data .phasedate.three').text(weatherData.almanac.moonphases[2].date)
				$('.almanac-slide .slide-data .phasedate.four').text(weatherData.almanac.moonphases[3].date)
				$('.almanac-slide').fadeIn(0);
				$('.almanac-slide .slide-data').fadeIn(1000);
				setTimeout(function() {
					$('.almanac-slide').fadeOut(1000);
					$('.almanac-slide .slide-data').fadeOut(1000);
					slideCallBack();
				}, slideLength);
			} catch (error) {
				$('.almanac-slide .slide-data .dayname-today').text("")
				$('.almanac-slide .slide-data .dayname-tomorrow').text("")
				$('.almanac-slide .slide-data .sunrise-today').text("")
				$('.almanac-slide .slide-data .sunset-today').text("")
				$('.almanac-slide .slide-data .sunrise-tomorrow').text("")
				$('.almanac-slide .slide-data .sunset-tomorrow').text("")
				$('.almanac-slide .slide-data .moonphase.one').css('background-image', 'url("images/moonphases/blank.png")')
				$('.almanac-slide .slide-data .moonphase.two').css('background-image', 'url("images/moonphases/blank.png")')
				$('.almanac-slide .slide-data .moonphase.three').css('background-image', 'url("images/moonphases/blank.png")')
				$('.almanac-slide .slide-data .moonphase.four').css('background-image', 'url("images/moonphases/blank.png")')
				$('.almanac-slide .slide-data .phasetext.one').text("")
				$('.almanac-slide .slide-data .phasetext.two').text("")
				$('.almanac-slide .slide-data .phasetext.three').text("")
				$('.almanac-slide .slide-data .phasetext.four').text("")
				$('.almanac-slide .slide-data .phasedate.one').text("")
				$('.almanac-slide .slide-data .phasedate.two').text("")
				$('.almanac-slide .slide-data .phasedate.three').text("")
				$('.almanac-slide .slide-data .phasedate.four').text("")
				$('.almanac-slide').fadeIn(0);
				$('.almanac-slide .slide-data').fadeIn(1000);
				setTimeout(function() {
					$('.almanac-slide').fadeOut(1000);
					$('.almanac-slide .slide-data').fadeOut(1000);
					slideCallBack();
				}, slideLength);
			}
		},
		dayDesc() {
			try {
			$('.daydesc-forecast .cityname').text(weatherData.dayDesc.cityname)
			$('.daydesc-forecast .slide-data.first .daytitle').text(weatherData.dayDesc.times[0].timetitle)
			$('.daydesc-forecast .slide-data.first .daydesc').text(weatherData.dayDesc.times[0].forecast)
			$('.daydesc-forecast .slide-data.second .daytitle').text(weatherData.dayDesc.times[1].timetitle)
			$('.daydesc-forecast .slide-data.second .daydesc').text(weatherData.dayDesc.times[1].forecast)
			$('.daydesc-forecast .slide-data.third .daytitle').text(weatherData.dayDesc.times[2].timetitle)
			$('.daydesc-forecast .slide-data.third .daydesc').text(weatherData.dayDesc.times[2].forecast)

			$('.daydesc-forecast').fadeIn(0);
			$('.daydesc-forecast .slide-data.first').fadeIn(0);
			if (audioSettings.narrations) { audioPlayer.playLF(); }
			setTimeout(() => {
				$('.daydesc-forecast .slide-data.first').fadeOut(1000);
				$('.daydesc-forecast .slide-data.second').fadeIn(1000);
			}, slideLength);
			setTimeout(() => {
				$('.daydesc-forecast .slide-data.second').fadeOut(1000);
				$('.daydesc-forecast .slide-data.third').fadeIn(1000);
			}, slideLength*2);
			setTimeout(function() {
				$('.daydesc-forecast').fadeOut(1000);
				$('.daydesc-forecast .slide-data.third').fadeOut(1000);
				slideCallBack();
			}, slideLength*3);
			} catch (error) {
			$('.daydesc-forecast .cityname').text(locationConfig.mainCity.displayname)
			$('.daydesc-forecast .slide-data.first .daytitle').text("")
			$('.daydesc-forecast .slide-data.first .daydesc').text("")
			$('.daydesc-forecast .slide-data.second .daytitle').text("")
			$('.daydesc-forecast .slide-data.second .daydesc').text("")
			$('.daydesc-forecast .slide-data.third .daytitle').text("")
			$('.daydesc-forecast .slide-data.third .daydesc').text("")

			$('.daydesc-forecast').fadeIn(0);
			$('.daydesc-forecast .slide-data.first').fadeIn(0);
			if (audioSettings.narrations) { audioPlayer.playLF(); }
			setTimeout(() => {
				$('.daydesc-forecast .slide-data.first').fadeOut(1000);
				$('.daydesc-forecast .slide-data.second').fadeIn(1000);
			}, slideLength);
			setTimeout(() => {
				$('.daydesc-forecast .slide-data.second').fadeOut(1000);
				$('.daydesc-forecast .slide-data.third').fadeIn(1000);
			}, slideLength*2);
			setTimeout(function() {
				$('.daydesc-forecast').fadeOut(1000);
				$('.daydesc-forecast .slide-data.third').fadeOut(1000);
				slideCallBack();
			}, slideLength*3);
			}
		},
		nearbyCities() {
			var citiesDivs = ["one", "two", "three", "four"];
			try {
				for (var i = 0; i < 4; i++) {
					try {
						$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .cityname').text(weatherData.nearbyCities.cities[i].cityname)
						$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .temperature').text(weatherData.nearbyCities.cities[i].temp)
						getIcon($('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .icon'), weatherData.nearbyCities.cities[i].icon, weatherData.nearbyCities.cities[i].windspeed)
						$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .wind').text(weatherData.nearbyCities.cities[i].wind)
					} catch (error) {
						$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .cityname').text("")
						$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .temperature').text("")
						getIcon($('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .icon'), "blank", 0)
						$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .wind').text("")
					}
					try {
						$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .cityname').text(weatherData.nearbyCities.cities[i+4].cityname)
						$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .temperature').text(weatherData.nearbyCities.cities[i+4].temp)
						getIcon($('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .icon'), weatherData.nearbyCities.cities[i+4].icon, weatherData.nearbyCities.cities[i+4].windspeed)
						$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .wind').text(weatherData.nearbyCities.cities[i+4].wind)
					} catch (error) {
						$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .cityname').text("")
						$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .temperature').text("")
						getIcon($('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .icon'), "blank", 0)
						$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .wind').text("")
					}
				}
				
				$('.nearby-cities').fadeIn(0);
				$('.nearby-cities .slide-data.first').fadeIn(1000);
				setTimeout(() => {
					$('.nearby-cities .slide-data.first').fadeOut(1000);
					$('.nearby-cities .slide-data.second').fadeIn(1000);
				}, slideLength);
				setTimeout(function() {
					$('.nearby-cities .slide-data.second').fadeOut(1000);
					$('.nearby-cities').fadeOut(1000);
					slideCallBack();
				}, slideLength*2);
			} catch (error) {
				for (var i = 0; i < 4; i++) {
					try {
						$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .cityname').text(locationConfig.eightCities.cities[i].displayname)
						getIcon($('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .icon'), 44, 0)
					} catch (error) {
						$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .cityname').text("")
						getIcon($('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .icon'), "blank", 0)
					}
					$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .temperature').text("")
					$('.nearby-cities .slide-data.first .city.' + citiesDivs[i] + ' .wind').text("")
					try {
						$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .cityname').text(locationConfig.eightCities.cities[i+4].displayname)
						getIcon($('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .icon'), 44, 0)
					} catch (error) {
						$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .cityname').text("")
						getIcon($('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .icon'), "blank", 0)
					}
					$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .temperature').text("")
					$('.nearby-cities .slide-data.second .city.' + citiesDivs[i] + ' .wind').text("")
				}
				
				$('.nearby-cities').fadeIn(0);
				$('.nearby-cities .slide-data.first').fadeIn(1000);
				setTimeout(() => {
					$('.nearby-cities .slide-data.first').fadeOut(1000);
					$('.nearby-cities .slide-data.second').fadeIn(1000);
				}, slideLength);
				setTimeout(function() {
					$('.nearby-cities .slide-data.second').fadeOut(1000);
					$('.nearby-cities').fadeOut(1000);
					slideCallBack();
				}, slideLength*2);
			}
		},
		introSlide() {
			$('#date-time').fadeOut(0);
			$('.intro-slide').fadeIn(0);
			setTimeout(function() {
				$('.intro-slide').fadeOut(1000);
				$('#date-time').fadeIn(1000);
				slideCallBack();
			}, slideLength);
		},
		providerSlide() {
			$('.provider-slide .provider-text').text(apperanceSettings.providerName + "\n" + "Your Source for Weatherscan Local")
			$('.provider-slide').fadeIn(0);
			$('.provider-text').fadeIn(1000);
			setTimeout(function() {
				$('.provider-text').fadeOut(0);
				$('.provider-slide').fadeOut(0);
				slideCallBack();
			}, slideLength);
		},
		upNext() {
			$('#date-time').fadeOut(0);
			$('.upnext-slide').fadeIn(0);
			setTimeout(function() {
				$('.upnext-slide').fadeOut(0);
				$('#date-time').fadeIn(0);
				slideCallBack();
			}, slideLength);
		},
		}
		if (idx>=slideSettings.order[0].slideLineup.length) {
			idx = 0
			//grabData();
			setTimeout(() => {
				crawlCheck()
			}, 1000);
		}
		if (nidx>=slideSettings.order[0].slideLineup.length) {
			nidx = 0
		}
		currentProgram = slidePrograms[slideSettings.order[0].slideLineup[idx].function]
		currentDiv = slideDivs[slideSettings.order[0].slideLineup[idx].function]
		nextProgram = slidePrograms[slideSettings.order[0].slideLineup[nidx].function]
		nextDiv = slideDivs[slideSettings.order[0].slideLineup[nidx].function]
		currentProgram();

		function slideCallBack(){
			idx++;
			nidx++;
			showSlides();
		};
	}//END OF showSlides() FUNCTION
}//end of slideKickOff() function
