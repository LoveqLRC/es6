'use strict';

let myUserName = 'rc', myPassword = '123';

let login = {
    username: myUserName,
    password: myPassword
};
//输出{username: "rc", password: "123"}
console.log(login);

//如果变量名和属性一样的话可以直接加属性，不用指定值
let myLogin = {
    myUserName,
    myPassword
};
//输出{myUserName: "rc", myPassword: "123"}
console.log(myLogin);


let otherLogin ={
    login:function () {

    }
};

//等价于
// let otherLogin ={
//     login () {
//
//     }
// };