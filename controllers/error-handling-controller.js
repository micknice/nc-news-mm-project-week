const app = require('../app');


const handleServerErrors = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'Internal Server Error'})
}

const handlePSQL400Error = (err, req, res, next) => {
    if (err.code === '22P02' ) {
        res.status(400).send({msg: 'bad request'})
    } else if( err.code === '23502') {
        res.status(400).send({msg: 'request missing required field'})
    } else {
        next(err);
    }
}

const handleCustomErrors = (err, req, res, next) => {
    if(err.msg === 'no article found' && err.status === 404) {
        res.status(404).send({msg: 'no article matching that id'})
    } else if (err.msg === 'no comments found' && err.status === 404) {
        res.status(404).send({msg: 'no comments matching that id'})
    } else {
        next(err);
    }
}



module.exports = { handleServerErrors, handlePSQL400Error, handleCustomErrors}