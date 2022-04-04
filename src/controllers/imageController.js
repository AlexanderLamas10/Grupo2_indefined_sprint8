const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const res = require('express/lib/response');
const Image=db.Image
const imageController={
    
    create:async(id,images)=>{
        try{
            Image.create({
                url_name:images,
                products_id:id
            })
        }catch(error){
            res.send(error)
        }
    }
}
module.exports = imageController;