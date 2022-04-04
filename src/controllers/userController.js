const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const avatarController = require('./avatarController');

const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

const User=db.User
const Avatar=db.Avatar

const userController = {

    
    login : (req, res)=>{
        res.render('user/login');
    },
    loginProcess:async (req, res) => {
        try{
            let userToLogin=await User.findOne({where: {email: req.body.email}})
        
            if(userToLogin) {
                
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                
                console.log('contraseña verificada = '+ isOkThePassword)

                if (isOkThePassword) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    let user=userToLogin
                    console.log('user.id es '+ user.id)

                    if(req.body.remember) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }
                    return res.redirect('/profile/'+user.id);
                } 
                return res.render('user/login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                });
                
            }
            return res.render('user/login', {
                errors: {
                    email: {
                        msg: 'No se encuentra este email en nuestra base de datos'
                    }
                }
            });
            
        }catch(eror){
            console.log(eror)
        }
        // busca el usuario x email si lo encuentra compara contraseña
        
    },
    profile: (req, res) => {
        let avatars
        let av=Avatar.findOne({
            where:{users_id:req.session.userLogged.id}
        })
        .then(image=>{
            avatars=image.url_name
            return res.render('user/profile', {
                user: req.session.userLogged,
                avatars
            });
        })
    },
    editProfile: async (req, res)=>{
        try{
            let user
            let encontrado=  await User.findOne({where: {id: req.params.id}})
            user=encontrado;
        
            let avatars
            let av=Avatar.findOne({
                where:{users_id:user.id}
            })
                .then(image=>{
                    avatars=image.url_name
                    return res.render('user/userEdit', {
                        user,
                        avatars
                    });
            })
        }catch(error){console.log(error)}
        
    },
    processEditProfile: async(req, res)=>{
        let idP=req.params.id
        console.log('el usuario a editar es: '+idP)
        console.log(req.body)
        let passwordForm;
        let file;
        let cambio;
        console.log(req.file)

        if(req.file!=undefined){
            
            file=req.file.filename 
            cambio=1 
            }else{
            file=req.body.oldAvatar
            cambio=0
        }
        if(req.body.password==''){
            passwordForm=req.body.oldpassword;
            }else{
            passwordForm= bcryptjs.hashSync(req.body.password, 10)}
        //console.log(passwordForm)
        //console.log(file)
        try{
            let userToEdit= await User.update({
                name:req.body.name,
                email:req.body.email,
                date:null,
                password:passwordForm
            },
            {
                where:{id:idP}
            }).then(editado=>{
                Avatar.update({
                    url_name:file
                },{where:{users_id:idP}})
            })
            .then(hechos=>{
                console.log(hechos)
                res.redirect('/logout')
            })


        }catch(error){console.log(error)}
        
        


    },
    register : (req, res)=>{
        res.render('user/register')
    },
    processRegister: async(req, res) => {

        const resultValidation=validationResult(req)
        if(resultValidation.errors.length>0){
            return res.render('user/register',{
                errors:resultValidation.mapped(),
                oldData:req.body,
            })
        }
        let duda;//para aginar el valor de la promesa 
        let exist=  await User.findOne({where:{email:req.body.email}})
        .then(exist=>{
            duda=exist
            return exist
        })
        console.log(duda)//verificando que dentro de la promesa se asigne el valor y lo muestre fuera de ella
        
        try{
            //pregunta si la duda es diferente de null, osea si la promesa está devolviendo un registro
            if(duda!=null){
                return res.render('user/register',{
                errors:{
                    email:{
                        msg:'este mail ya está registrado, ingrese otro por favor'
                    },
                    oldData:req.body
                }
                })
            }else{
            let mailParaVerificar=req.body.email
            let verif=mailParaVerificar.search("@indefined.com")
            var rol;
            if(verif!=-1){
                rol=1
            }else{rol=2}
            //console.log(rol) verficando el rol
            User.create({
                    name:req.body.name,
                    email:req.body.email,
                    roles_id:rol,
                    password: bcryptjs.hashSync(req.body.password, 10),

                }).then(avatar=>{
                    if(!req.file){
                        avatarController.create(avatar.id,'default-user.png')
                    }else{
                        avatarController.create(avatar.id,req.file.filename)
                    }
                    
                    //console.log(req.file.filename)
                                            
                    }).then(e=>{
                        res.redirect('/login')
                    })

        }
        }catch(err){}
        
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}
module.exports = userController;