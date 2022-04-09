const DB=require("../../database/models");
const Op = DB.Sequelize.Op;

module.exports = {
    users:(req,res)=>{
        DB.User
            .findAll()
            .then(user=>{
                let userArray=[];
                for(let i=0; i<user.length;i++){
                    let objeto={
                        id:user[i].id,
                        name:user[i].name,
                        email:user[i].email,
                        detail:"http://localhost:3000/api/users/"+user[i].id
                    }
                    userArray.push(objeto);
                }
            return res.status(200).json({
                count:user.length,
                users:userArray
            })
        })

    },
    detail:(req,res)=>{
        DB.User
            .findByPk(req.params.id)
            .then(user=>{
                let propiedad={
                    userInformation:{
                        id:user.id,
                        name:user.name,
                        email:user.email,
                        date:user.date,
                        urlUserAvatar: "chiru"
                    
                }}
            return res.status(200).json({
                user:propiedad
            })
        })

    }
}