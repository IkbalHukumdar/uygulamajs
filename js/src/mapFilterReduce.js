
let cart=[
    {id:1,productName:"Telefon",quantity:3,unitPrice:5000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:2000},
    {id:3,productName:"Kalem",quantity:1,unitPrice:30},
    {id:4,productName:"Sarj Cihazi",quantity:2,unitPrice:50},
    {id:5,productName:"Kitap",quantity:3,unitPrice:20},
    {id:6,productName:"Pot",quantity:5,unitPrice:10}
]



cart.map(product=>{
    console.log(product.productName + " :" + product.unitPrice*product.quantity )
})

let total=cart.reduce((acc,product)=>acc+ product.unitPrice,0)
console.log(total)


let quantityOver2= cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

function addToCart(sepet){
   sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20})
}

addToCart(cart)
console.log (cart)

let sayi =10

function sayiTopla(number){
    number +=1
}
sayiTopla(sayi)
console.log(sayi)

