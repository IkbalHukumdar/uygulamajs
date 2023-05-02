// models componentlerde kullanıcıya gösterdiğimiz veri tiplerinin veya kullanıcıdan 
//alıp apiye gödenrdiğimiz veri tiplerie verdiğimiz isim
export default class User {
    constructor(id, firstName, lastName, city) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
    }
}

