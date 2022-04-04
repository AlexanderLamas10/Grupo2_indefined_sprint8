const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const res = require('express/lib/response');
const Avatar=db.Avatar
const avatarController={
    
    create:async(id,avatar)=>{
        try{
            Avatar.create({
                url_name:avatar,
                users_id:id
            })
        }catch(error){
            res.send(error)
        }
    }
}
module.exports = avatarController;