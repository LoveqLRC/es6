'use strict';


let username = {
    getUserName() {
        return 'rc';
    }
};

let user ={
  __proto__:username,
  getUserName(){
      return super.getUserName()+"123";
  }
};
//rc123
console.log(user.getUserName());
