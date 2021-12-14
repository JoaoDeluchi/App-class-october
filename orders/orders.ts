import { ClientIO, OrdersIO } from '../interfaces/user'

export class Users {
    userList: ClientIO[] = []
    
    addUser(newUser: ClientIO ){
        this.userList.push(newUser)
    }

    getAdmins(): ClientIO[] {
        return this.userList.filter((user) => user.admin)
    }
}

