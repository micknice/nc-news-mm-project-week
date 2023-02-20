const express = require('express');
const { handleServerErrors } = require('./controllers/error-handling-controller');
const app = express();
const { getApi } = require('./controllers/api-controller');
const { getTopics } = require('./controllers/topics-controller')


app.get('/api', getApi);

app.get('/api/topics', getTopics);





app.use('/*', (req, res)=> {
    res.status(404).send({msg: 'not found'});
})
app.use(handleServerErrors);

module.exports = app;