const express = require('express');
const morgan = require('morgan');
const {Election} = require ('Election');
const bodyparser = required ('body-parser');

const app = express();
const port = process.env.PORT || 8080

app

    .use(morgan('dev'))
    .use(express.static('public'))
    .use(bodyparser.urlencoded({extends: false}))
    .use(bodyparser.json())

    post ('/api/user', (req, res) => {
        res.json(req.body)
    })

    .listen(port, () => console.log(`Server listening on port ${port}`));