'use strict';

function login(username = 'rc', password = '123') {
    return `用户名是${username} 密码是${password}`
}

//不传入函数值，就会使用默认的值
console.log(login());


