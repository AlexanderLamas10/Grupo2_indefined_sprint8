const DB=require("../../database/models");
const Op = DB.Sequelize.Op;
const Product=DB.Product
module.exports = {
    products:(req,res)=>{
        Product
            .findAll()
            .then(prod=>{
                let categoriesCount={};
                let prodArray=[];
                let cate1=0
                let cate2=0
                let cate3=0
                let cate4=0

                for(let i=0; i<prod.length;i++){
                    if(prod[i].categories_id==1){
                        cate1++;
                    }else if(prod[i].categories_id==2){
                        cate2++;
                    }else if(prod[i].categories_id==3){
                        cate3++; 
                    }else{cate4++}
                    let objeto={
                        id:prod[i].id,
                        name:prod[i].name,
                        description:prod[i].description,
                        detail:"http://localhost:3000/api/products/"+prod[i].id
                    }
                    prodArray.push(objeto)
                    
                }
                categoriesCount.remeras=cate1,
                    categoriesCount.pantalones=cate2,
                    categoriesCount.abrigos=cate3,
                    categoriesCount.accesorios=cate4
            return res.status(200).json({
                count:prod.length,
                categoriesCount:categoriesCount,
                detail:prodArray
                
                
            })
        })

    },
    detail:async(req,res)=>{
        try{
            let id=req.params.id;
            Product
            .findByPk(id, 
                {include:["discounts","categories","images","sizes","colors"]})
            .then(prod=>{
                
                let  array=[
                    {category:prod.categories.name},
                    {size:prod.sizes.name},
                    {color:prod.colors.name},
                    {discount:prod.discounts.name}
                ]
                res.status(200).json({
                    productDetail:{
                        id:prod.id,
                        name:prod.name,
                        price:prod.price,
                        description:prod.description,
                        stock:prod.stock,
                        stock_min:prod.stock_min,
                        stock_max:prod.stock_max
                    },
                    arrayRelational:array,
                    urlImage:`http://localhost:3000/images/product_image/`+ prod.images[0].url_name
                    
                    
                })
                
                
            })}
            catch(err){console.log(err)}
        
        

    }
}