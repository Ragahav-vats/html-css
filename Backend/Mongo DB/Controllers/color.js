const { Code } = require('mongodb');
const database = require('../config/database.js');
const mongodb = require('mongodb');



exports.create = async(request , response) => {

    // console.log(request.query);
     
    try {
        const db = await database();
        db.collection('colors').insertOne({
            name : request.query.color_name,
            Code : request.query.color_code
        })
        .then((result) =>{
            const data = {
                _status : true,
                _message : 'Record Found Sucessfully !!',
                _data : result
            }

            response.send(data);
        })
        .catch(() =>{
            const data = {
                _status : false,
                _message : 'something went wrong !!',
                _data : null
            }

            response.send(data);
        })
    } catch (error) {
                 const data = {
                _status : false,
                _message : 'something went wrong !!',
                _data : []
            }

            response.send(data);
    }
}

exports.view = async(request , response) => {
     try {
        const db = await database();
        db.collection('colors').find().toArray()
        .then((result) => {
            if(result.length > 0){
                const data = {
                _status : true,
                _message : 'Record found sucessfully !!',
                _data : result
            }

            response.send(data);
            }else{
                    const data = {
                _status : false,
                _message : 'No record found !!',
                _data : []
            }

            response.send(data);
            }
        })

        .catch(() => {
                const data = {
                _status : false,
                _message : 'something went wrong !!',
                _data : []
            }

            response.send(data);
        })
     } catch (error) {
        const data = {
        _status : false,
        _message : 'something went wrong !!',
        _data : []
    }

    response.send(data);
   }
}

exports.details = async(request , response) => {
    // console.log(request.params.id);
     try {
        const db = await database();
        db.collection('colors').findOne({
            _id : new mongodb.ObjectId(request.params.id)
        })
        .then((result) => {
            if(result){
                const data = {
                _status : true,
                _message : 'Record found sucessfully !!',
                _data : result
            }

            response.send(data);
            }else{
                    const data = {
                _status : false,
                _message : 'No record found !!',
                _data : null
            }

            response.send(data);
            }
        })

        .catch(() => {
                const data = {
                _status : false,
                _message : 'something went wrong !!',
                _data : null
            }

            response.send(data);
        })
     } catch (error) {
        const data = {
        _status : false,
        _message : 'something went wrong !!',
        _data : null
    }

    response.send(data);
   }
}

exports.update = async(request , response) => {
    // console.log(request.params.id);
     try {
        const db = await database();
        db.collection('colors').updateOne({
            _id : new mongodb.ObjectId(request.params.id)
        },{
            $set : {
                name : request.query.color_name,
                Code : request.query.color_code
            }
        })
     
        .then((result) => {
            if(result){
                const data = {
                _status : true,
                _message : 'Record update sucessfully !!',
                _data : result
            }

            response.send(data);
            }else{
                    const data = {
                _status : false,
                _message : 'No record found !!',
                _data : null
            }

            response.send(data);
            }
        })

        .catch(() => {
                const data = {
                _status : false,
                _message : 'something went wrong !!',
                _data : null
            }

            response.send(data);
        })
     } catch (error) {
        const data = {
        _status : false,
        _message : 'something went wrong !!',
        _data : null
    }

    response.send(data);
   }
}

exports.destroy = async(request , response) => {
    // console.log(request.params.id);
     try {
        const db = await database();
        db.collection('colors').deleteOne({
            _id : new mongodb.ObjectId(request.params.id)
        })
        .then((result) => {
            if(result){
                const data = {
                _status : true,
                _message : 'Record delete sucessfully !!',
                _data : result
            }

            response.send(data);
            }else{
                    const data = {
                _status : false,
                _message : 'No record found !!',
                _data : null
            }

            response.send(data);
            }
        })

        .catch(() => {
                const data = {
                _status : false,
                _message : 'something went wrong !!',
                _data : null
            }

            response.send(data);
        })
     } catch (error) {
        const data = {
        _status : false,
        _message : 'something went wrong !!',
        _data : null
    }

    response.send(data);
   }
}