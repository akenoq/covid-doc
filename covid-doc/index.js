"use strict";

// send page function
function sendPage(request, response) {
    const page = request.query["page"] + "";
    if(page === "patient") return response.sendFile(__dirname + "/static/patientPage.html");
    if(page === "questions") return response.sendFile(__dirname + "/static/questionsCode.js");
    if(page === "code") return response.sendFile(__dirname + "/static/mainCode.js");
    if(page === "diagnosis") return response.sendFile(__dirname + "/static/diagnosisCode.js");
    if(page === "message") return response.sendFile(__dirname + "/static/messageCode.js");
    return response.end("<h1>Page not found</h1>");
}

// run server on port
const express = require("express");
const app = express();
const port = 5003;
app.listen(port);
console.log("Port: " + port);

// send page to client
app.get("/page", sendPage);

