export  class BaseLogger{
    log(data){
        console.log("Default logger :"+data)
    }
} 
//class oluştu o  default class  
// içi boş bizim için şablon
//baslogger içindek loglara extend ile ulaşılıyor

export  class ElascticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic"+ data)
    }
}



export  class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo "+ data)
    }
}

