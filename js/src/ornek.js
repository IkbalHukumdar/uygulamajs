let numberss = [10, 20, [30, 40]]
let a, b, c, d;
[a, b, [c, d]] = numberss
console.log(d * 2);
//Kodun çıktısı 80 olur

function someFunction([x], y, z = 10) {
    console.log(y)
}
someFunction([1000, 2000], 3000)
//Kodun çıktısı 3000 olur

let populations = {
    x: 1000,
    y: 2000,
    z: 3000
}
/*
let newX, newY, newZ
({ x: newX, y: newY, z: newZ } = populations)
console.log(newY)
//Kodun çıktısı 2000 olur

let showCategories = function (productId, ...categories, name) {
    console.log(name)
}
showCategories(1, 'computers', 'technology', 'laptop')
*/

/* 
Burda sytax hatası alırız. Çünkü 
Bir rest parametresi
parametre listesinde sonda olmalıdır. 
rest parameter (...categories) sonrasında bir 
parametre daha (name) olmasıdır.
Rest parametreleri, fonksiyona gönderilen 
değişken sayısı değişebileceğinde kullanılır. 
Rest parametresi, son parametre olmalıdır,
çünkü geri kalan tüm değişkenler
rest parametresinde toplanacaktır.
*/
let showCategoriesTrue = function(productId, name, ...categories) {
    console.log(name);
};
showCategoriesTrue(1, 'laptop', 'computers', 'technology');
/*
Burada name parametresi rest parametresinden önce geliyor ve 
geri kalan tüm değişkenler categories rest parametresinde toplanıyor.
*/
let getVatRate=() => 0.18

console.log(getVatRate)
console.log(getVatRate())

/*
52.satırın çıktısı 0,18 olur
4.satırın çıktısı 0,18 olur

 */



