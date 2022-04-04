let nombre = document.querySelector(".nombre");
let description = document.querySelector(".description");
let categories = document.querySelector(".categories");
let sizes = document.querySelector(".sizes");
let stock=document.querySelector(".stock");
let stockMin=document.querySelector(".stock-min");
let stockMax=document.querySelector(".stock-max");
let colorId=document.querySelector(".color-id");
let price=document.querySelector(".price");
let discountId=document.querySelector(".discount-id");
let visibility=document.querySelector(".visibility");
let recommended=document.querySelector(".recommended");

let formulario = document.querySelector("form.registerjs");

// errores
let eNombre = document.querySelector("#eNombre");
let eDescription = document.querySelector("#eDescription");
let eCategories = document.querySelector("#eCategories");
let eSizes= document.querySelector("#eSizes");
let eStock= document.querySelector("#eStock");
let eStockMin= document.querySelector("#eStockMin");
let eStockMax=document.querySelector("#eStockMax");
let eColorId=document.querySelector("#eColorId");
let ePrice=document.querySelector("#ePrice");
let eDiscountId=document.querySelector("#eDiscountId");
let eVisibility=document.querySelector("#eVisibility");
let eRecommended=document.querySelector("#eRecommended");



nombre.addEventListener("blur", nombreValidator)
description.addEventListener("blur",descValidator)
categories.addEventListener("blur",categoryValidator)
sizes.addEventListener("blur",sizesValidator)
stock.addEventListener("blur",stockValidator)
stockMin.addEventListener("blur",stockMinValidator)
stockMax.addEventListener("blur",stockMaxValidator)
colorId.addEventListener("blur",colorValidator)
price.addEventListener("blur",priceValidator)
discountId.addEventListener("blur",discountValidator)
visibility.addEventListener("blur",visibilityValidator)
recommended.addEventListener("blur",recommendedValidator)

console.log(stock.value)
console.log(stockMin.value)
let errores = {};

function nombreValidator()
    {
        if(nombre.value.length == 0)
        {
            let error = "El nombre no puede quedar vacio"
            eNombre.innerHTML = error;
            errores.nombre = error

        }else if(nombre.value.length < 2)
            {
                let error = "El nombre debe ser mayor a 2 caracteres"
                eNombre.innerHTML = error;
                errores.nombre = error
            }
            else{
                eNombre.innerHTML = "";
                errores.nombre = "";
            };
        
        console.log(errores);
    }

    function descValidator()
    {
        if(description.value.length == 0)
        {
            let error = "La descripción no puede quedar vacía"
            eDescription.innerHTML = error;
            errores.description = error

        }else if(description.value.length < 20)
            {
                let error = "La descripción debe ser mayor a 20 caracteres"
                eDescription.innerHTML = error;
                errores.description = error
            }
            else{
                eDescription.innerHTML = "";
                errores.description = "";
            };
        
        console.log(errores);
    }

function categoryValidator()
    {
        if (categories.value == ""){
            let error = "Escoja una categoría";
            eCategories.innerHTML = error;
            errores.categories = error;
        } 
        else {
            eCategories.innerHTML = "";
                    errores.categories = "";
                };
    };

function sizesValidator()
    {
        if (sizes.value == ""){
            let error = "Escoja una talle";
            eSizes.innerHTML = error;
            errores.sizes = error;
        } 
        else {
            eSizes.innerHTML = "";
                    errores.sizes = "";
                };
    };

function stockValidator()
    {
            if (stock.value == "" && stock.value<=0){
                let error = "ingrese una cantidad numérica de stock mayor a cero";
                eStock.innerHTML = error
                errores.stock = error;
            }
            else{
                eStock.innerHTML = "";
                errores.stock = "";
            };
    };
function stockMinValidator()
    {
        if (stockMin.value == "" && stockMin.value<=0){
            let error = "ingrese una cantidad numérica de stock mínima mayor a cero";
            eStockMin.innerHTML = error
            errores.stockMin = error;
        }else if(stock.value<stockMin.value ){
            let error = "ingrese un numero  menor a Stock";
            eStockMin.innerHTML = error
            errores.stockMin = error;
        }
        else{
            eStockMin.innerHTML = "";
            errores.stockMin = "";
        };
    }
function stockMaxValidator()
    {
        if (stockMax.value == "" && stockMin.value<=0){
                let error = "ingrese una cantidad numérica de stock máxima mayor a cero";
                eStockMax.innerHTML = error
                errores.stockMax = error;
            
        }else if( stock.value>stockMax.value && stockMax.value<stockMin.value){
            let error = "ingrese un numero  mayor a Stock y a StockMin";
            eStockMax.innerHTML = error
            errores.stockMin = error;
        }
            else{
                eStockMax.innerHTML = "";
                errores.stockMax = "";
            };
    }
function colorValidator()
    {
        if (colorId.value == ""){
            let error = "Escoja un color";
            eColorId.innerHTML = error;
            errores.colorId = error;
        } 
        else {
            eColorId.innerHTML = "";
                    errores.colorId = "";
                };
    };
function priceValidator()
    {
        if (price.value == "" && price.value<=0){
            let error = "ingrese una cantidad numérica mayor a cero";
            ePrice.innerHTML = error
            errores.price = error;
        }
        else{
            ePrice.innerHTML = "";
            errores.price = "";
        };
    };
function discountValidator()
    {
        if (discountId.value == ""){
            let error = "Escoja un porcentaje";
            eDiscountId.innerHTML = error;
            errores.discountId = error;
        } 
        else {
            eDiscountId.innerHTML = "";
                    errores.discountId = "";
                };
    };
function visibilityValidator()
    {
        if (visibility.value == ""){
            let error = "Escoja si desea hacer visible el producto";
            eVisibility.innerHTML = error;
            errores.visibility = error;
        } 
        else {
            eVisibility.innerHTML = "";
                    errores.visibility = "";
                };
    };
function recommendedValidator()
    {
        if (recommended.value == ""){
            let error = "Escoja si quiere destacar el producto en el inicio";
            eRecommended.innerHTML = error;
            errores.recommended = error;
        } 
        else {
            eRecommended.innerHTML = "";
                    errores.recommended = "";
                };
    };

formulario.addEventListener("submit",function(event)
    {
        if (errores.length > 0)
        {
            event.preventDefault();
            let ulErrores = document.querySelector(".errores");
                ulErrores.innerHTML = "Revisa los campos por corregir";
                console.log(ulErrores);
        }
        
    })