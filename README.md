![](https://media.discordapp.net/attachments/1339090268263157770/1367899479168122900/banner.png?ex=6816432a&is=6814f1aa&hm=61bea94dd7975435efd6e895f24f90375683b571b88a0b47fac2c7d1d5d33749&=&format=webp&quality=lossless&width=1100&height=200)

------------

**Weatherscan Local XL** is a simulated recreation of "Weatherscan Local" by The Weather Channel in HTML/CSS/JS, by ***mist weather media***

Online demo: [local.weatherscan.net](https://local.weatherscan.net)

© Mist Weather Media 2025.

------------

**Special thanks to these talented minds who made this project possible!**

**Joe Molinelli (TheGoldDiamond9)** - Lead Developer  
**COLSTER** - Lead Designer / Developer  
**PicelBoi** - Developer  
**JensonWx** - Developer  
**zachNet** - Audio Engineer  

and the rest of the Mist Creative Team for their support!

------------

Need support beyond the scope of this README? Have any questions? Feel free to join our Discord for support!

[***mist weather media*** on Discord](https://discord.gg/hV2w5sZQxz)

# Initial Setup (Releases)

![](https://img.shields.io/github/release/MistWeatherMedia/weatherscan-local.svg)

There is no setup required to run the packaged releases. Simply click on the .exe and go! 

However, if you are looking for extra customization beyond the in-app settings menu, you'll want to stick to the source code.

# Initial Setup (Source code)

1. Install [node.js LTS](https://nodejs.org/en/).
2. Acquire *weather.com* and *mapbox.com* API keys. These are required for weather data and radar frames respectively.
(Please note that you will have to install the Mapbox API key in two places.)
3. Go to `/webroot/js` and open `config.js`.
4. Line 1 is where your *weather.com*  API key goes. Replace `"YOUR_API_KEY"` with your *weather.com* API key.
5. Line 2 is where your *mapbox.com*  API key goes. Replace `"YOUR_API_KEY"` with your *mapbox.com* API key.
6. Save your changes to `config.js` and close out of it.
7. Save your changes to `radar.js` and close out of it.
8. In terminal / command prompt within the webroot directory, run `npm install --production`. This will install all dependencies required to run.
9. In terminal / command prompt within the webroot directory, run `npm start`. This will start a local web server, which is required to run the sim.

------------

Enjoy the nostalgia! You're all set.

Many thanks for using our simulator! We hope you like it.
