const express = require('express');
const path = require('path')
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'webroot')));

app.listen(port, '0.0.0.0', () => {
    console.log("Weatherscan XL by Mist Weather Media")
    console.log(`Webroot serving on http://127.0.0.1:${port}`);
  });

app.get('/airports', async (req, res) => {
    try {
        const response = await fetch('https://nasstatus.faa.gov/api/airport-events');
        const airportData = await response.json();
        res.json(airportData);
        console.log("Client requested airport data.")
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch airport data' });
    }
})