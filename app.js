const express = require("express");
const cors = require("cors");

let { getResponseFromDialogflow } = require("./dialogflow.js");
let app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./static"))


app.listen(3000, () => {
    console.log("listening at 3000");
})


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/chatbox.html");
    //can require path also instead
})


app.post("/get-response", async (req, res) => {
    // let body = req.body;
    console.log('_______________________')

    let responses = await getResponseFromDialogflow(req.body.data);
    //console.log(responses[1][0]);
    console.log(JSON.stringify(responses));
    res.send(JSON.stringify(responses));
})