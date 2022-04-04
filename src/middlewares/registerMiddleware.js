
const {body}=require('express-validator')

const validator=[
    body('name').notEmpty().withMessage('Ingrese un nombre'),
    body('email').isEmail().withMessage('Ingrese un mail valido'),
    body('password').notEmpty().withMessage('Ingrese una contraseña')
    .isLength(8).withMessage('Debe contener al menos 8 caracteres')
]
module.exports =validator;