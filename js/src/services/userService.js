import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.employee = []
        this.customer = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        //forof array in dönmesini sağlar
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customer.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employee.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }

        }
    }
    //formik- yup
    checkCustomerValidityForErrors(user) {// her boşuğu array içine atayacak 
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem.${field} is required`
                        , user))
            }

        }
        //kullanicin yasini sayiya çevirmek istediğimde eğer bu bir 
        //sayi degilse hata ver dedigimiz kod parcasi
        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem.${user.age} is not a number`, user))
        }

        return hasErrors
    }
    checkEmployeeValidityForErrors(user) {// her boşuğu array içine atayacak 
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem.${field} is required`
                        , user))
            }

        }
        return hasErrors
    }


    add(user) {
        switch (user.type) {
            case "customer":
                this.customer.push(user)
                break;
            case "employee":
                this.employee.push(user)
                break;
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type", user))

                break;
        }        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }
    //verdiğin sarta göre data tanimladi
    getCustomerByID(id) {
        return this.customers.find(u => u.id === id)
    }

    get CustomersSorted() {
       return this.customers.sort((customer1, customer2))
        if (customer1.firstName < customer2.firstName) {
            return -1;
        } else if (customer1.firstName === customer2.firstName) {
            return 0;
        }else{
            return 1;
        }
    }


}


