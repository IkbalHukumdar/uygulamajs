import { BaseLogger, ElascticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

//service classındaki user service kullanacağını söylüyor
let logger1=new MongoLogger()
let userService=new UserService(logger1)
let user1=new User(1,"Ikbal","Hukumdar","Malatya")
let user2=new User(2,"Yagmur","Dundar","Malatya")


userService.add(user1)//kulalnıcı olarak sisteme kayıt olduğu sayfa
userService.add(user2)
//console.log(userService.list() )//sistemdeki kullanicilari sistemde listeledigi sayfa
 

//console.log(userService.getByID(2))//kullanici bilgilerinin detayina gidildigi sayfa



//userService.list()



let customer = {id:1,firstName:"Ikbal"}
//prototyping
customer.lastName="Hukumdar"
console.log(customer.lastName)


console.log("-----------------------------")
userService.load()

let customerToAdd= new customer(1,"Seda","Darine","Malatya",23)
customerToAdd.type="customer"



userService.add(customerToAdd) 
console.log(userService.customer)
console.log(userService.employee)
console.log(userService.errors)
console.log(userService.getCustomersSorted()) 
