const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const app = express();

app.use(cors());

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });

const apidataSchema = new mongoose.Schema({
    name: { type: String },
    last: { type: String },
    buy: { type: String },
    sell: { type: String },
    vlm: { type: String },
    base_unit: { type: String }
});

const apidataModel = mongoose.model('apidata', apidataSchema);

app.post("/fetchdata", async (req, res) => {
    try {
        const response = await fetch("https://api.wazirx.com/api/v2/tickers");
        const data = await response.json();

        // Assuming the API response is an object with ticker symbols as keys
        const tickers = Object.values(data);
        const top10Results = tickers.slice(0, 10);

        const savedData = [];

        for (let dat of top10Results) {
            const onedat = new apidataModel({
                name: dat.name,
                last: dat.last,
                buy: dat.buy,
                sell: dat.sell,
                vlm: dat.volume,
                base_unit: dat.base_unit
            });

            const result = await onedat.save();
            savedData.push(result);
        }
        res.json(savedData);
    } catch (error) {
        console.error("Error fetching or saving data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
