//sepete ekleme işlemi
function addToCart(productName,quantity) {
    
    console.log("Sepete eklendi  :"+productName+ "  adet :"+ quantity)
    
    
}

addToCart("Yesil Elma",2)

let sayHello=()=>{

    console.log("Hello world")
}
sayHello()

   
let sayHello2=function(){
    console.log("Hello world")
}
sayHello2()


function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",3,20)
addToCart2("Limon",3.15)


//Bunları da obje.js olarak kaydedebilirsin
 
//Bu bir obje ve objenin attribute ve değerlerini objenin içinde.
//product1 i product fonksiyonuna  gönderiyor.
let product1={productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product) {
   console.log("Urun :"+product.productName)
   console.log("Adet :"+product.unitPrice) 
   console.log("Fiyat :"+product.quantity) 

}
console.log("**********************")
addToCart3(product1)

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)
 //çıktısı Karpuz olur
 console.log("**********************")
let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)
//çıktısı 20 olur
console.log("**********************")

///Dizi 
function addToCart4(products) {
    console.log(products)
}
products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Cilek",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5}    
]
 
console.log("**********************")
addToCart4(products)

function add(...numbers){ // rest 
    let total=0;
   for (let i=0;i<numbers.length;i++){
        total=total+numbers[i]
        console.log(total)
   }
}
add(20,30)
add(20,30,40)
add(20,30,40,50) 

//Sayıları otomatik olarak bir diziye atar
//en büyüğünü ekrana getirir.
console.log(Math.max(30,10,500,600,120))


console.log("**********************")

//sayıları numbers dizisine atar
let numbers=[30,10,500,600,120]
console.log(...numbers)//sayıları ekrana getirir.
console.log(Math.max(...numbers))//en büyüğünü getirir

console.log("**********************")

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]= [
                  {name:"Ic Anadolu",population:"20M"},//obje ataması.
                  {name:"Marmara",population:"30M"},
                  {name:"Karadeniz",population:"10M"},
                    [
                        ["Ankara","Konya"],
                        ["İstanbul","Bursa"],
                        ["Ankara","Konya"],

                    ]
                ]
//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
//console.log(marmara)
//console.log(karadeniz)

console.log("**********************")


let newProductName,newUnitPrice,newQuantity
({productName:newproductName,unitPrice=newUnitPrice,quant,quantity:newQuantity}={productName:"Elma",unitPrice:10,quantity:5}
={productName:"Elma",unitPrice:10,quantity:5})
console.log(newProductName)

console.log("**********************")

