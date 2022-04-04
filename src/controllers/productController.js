const path = require('path');
let db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const imageController = require('./imageController');


const Product=db.Product
const Category = db.Category;
const Color = db.Color;
const Size = db.Size;
const Discount = db.Discount;
const Image = db.Image;


const productController = {
    index : async(req, res) =>{
        try{
            let products=await Product.findAll({
                include:["discounts","images","categories"],
                where: {visibility:1}
                
            })
            return res.render('products/products',{products})
            
            }
            catch(error){
                console.log(error)
            }
    },
    detail : async(req, res)=>{
        try{
            let productDetail=await Product.findByPk(req.params.id,{
                include:["discounts","images","sizes","colors"],
                where: {visibility:1}
            })
                return res.render('products/productDetail',{productDetail})
        }
        catch(error){
            console.log(error)
        }
    },
    search:async(req,res)=>{
        try{
            let buscar= req.query.keyword;
            let encontrado=false;
            let products= await Product.findAll({
                where: {
                    name:{[Op.like]:`%${buscar}%`},
                    visibility:1
                },
                include:["categories","colors","images","sizes","discounts"]
            })

            if(products.length!=0){
                encontrado=true;
            }
            //console.log('estoy buscando '+ buscar +' se encontro? '+ encontrado)
            res.render('products/productSearch',{products,encontrado})
        }catch(error){
            res.send(error)
        }
    },
    
    
    create :(req, res) =>{
        let promCategories = Category.findAll();
        let promColors = Color.findAll();
        let promSizes = Size.findAll();
        let promDiscounts = Discount.findAll();
        Promise
            .all([promCategories, promColors, promSizes, promDiscounts ])
            .then(([allCategories, allColors, allSizes, allDiscounts ]) => {
                res.render('products/productCreate', {allCategories, allColors, allSizes, allDiscounts})})
            
    },
    store : (req, res)=>{
        Product.create({
            name:req.body.name,
            description: req.body.description,
            categories_id: req.body.categories_id,
            sizes_id: req.body.sizes_id,
            stock:req.body.stock,
            stock_min:req.body.stock_min,
            stock_max:req.body.stock_max,
            colors_id: req.body.colors_id,
            price: req.body.price,
            discounts_id: req.body.discounts_id,
            visibility:req.body.visibility,
            recommended:req.body.recommended
        })
            .then(product=>{
                imageController.create(product.id,req.file.filename)
                console.log(req.file.filename)
                
            })
            .then(e=>{
                res.redirect('/products')
            })
            
        }
        
    ,
    edit : (req, res)=>{
        //se busca el producto a editar con el id
        let id=req.params.id;
        let promProducts=Product.findByPk(id,{
            include:["images","categories","colors","sizes","discounts"]
        })
        let promCategories = Category.findAll();
        let promColors = Color.findAll();
        let promSizes = Size.findAll();
        let promDiscounts = Discount.findAll();
        let promImages=Image.findAll()
        
        Promise
            .all([promProducts,promCategories,promColors,promSizes,promDiscounts,promImages])
            .then(([productToEdit,allCategories, allColors, allSizes, allDiscounts,Images])=>{
                return res.render('products/productEdit',{productToEdit,allCategories, allColors, allSizes, allDiscounts,Images})
        })
    }, 
    postEdit : (req, res)=>{
        let id=req.params.id
        const productToEdit =Product.update({
			name:req.body.name,
            description: req.body.description,
            categories_id: req.body.categories_id,
            sizes_id: req.body.sizes_id,
            stock: req.body.stock,
            stock_min: req.body.stock_min,
            stock_max: req.body.stock_max,
            colors_id: req.body.colors_id,
			price: req.body.price,
			discounts_id: req.body.discounts_id,
            visibility: req.body.visibility,
            recommended: req.body.recommended,
        },
        {
            where:{id:id}
        })
        .then(producteditado=>{
            res.redirect('/productsAdmin')})
    },

    delete:(req, res)=>{
        let image= Image.destroy({
            where: {products_id:req.params.id}
        }).then(
            eliminaded=>{
                let eliminado= Product.destroy({
            where: {id:req.params.id}
                })
            }
        ).then(hechos=>{
            res.redirect('/productsAdmin')
        })
    
    },
    /*
    category:(req,res)=>{
        Product.findAll(
            include:["images","discounts"],{
            where:
            {
                categories_id:req.params.id, 
                visibility:1
            }})

    },*/
    productCart : (req, res)=>{
        res.render('products/productCart');
    }
}

module.exports = productController;