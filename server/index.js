const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
const { Twilio } = require('twilio');
const { ApplicationPage } = require('twilio/lib/rest/api/v2010/account/application');
 
//twilio requirements --texting API
 
const accountSid = 'ACf48d3a178ca4d88b3eba0450f5e92266';
const authToken = 'e96616335220ea14e16abc7b1d3744de';
const client = new twilio(accountSid, authToken);
 
const app = express(); //alias
 
app.use(cors()); //block browser from restricting any data
 
//Welcome page for the server
app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
})
 
//twilio text
 
app.get('/send-text', (req, res) => {
    res.send('Hello Twilio Server');
 
    //GET Varaibles, passed via query string
    const {recipient, textmessage } = req.query;
 
    //Send text
    client.messages.create({
        body: textmessage,
        to: recipient,
        from: '+12516640441' //from twilio
    }).then((message) => console.log(message.body));
})
 
//must have nodemon installed http://localhost:4000
 
app.listen(4000, () => console.log('Running on port 4000'));
