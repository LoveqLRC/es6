'use strict';

class User {
    constructor(userName) {
        this.userName = userName;
    }

    getUserName() {
        console.log(this.userName);
    }
}

let userInfo = new User("rc");
//rc
userInfo.getUserName();