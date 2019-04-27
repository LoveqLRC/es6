# es6语法

## 块级作用域 let

```angular2html
'use strict';

if (true) {
    var animal = "cat"
    let fruit = "apple"
}
//animal可以输出，但是fruit不可以输出，因为变量定义为let，是块级作用域
console.log(animal);
console.log(fruit);

```
## 恒量 const

```
'use strict';

const animal = "cat";
console.log(animal);

//错误：这里重复声明了
const animal = 'dong';
console.log(animal);

// const 限制的是赋值的动作
const fruit = [];
fruit.push("apple");
fruit.push("lemon");
//这样是可以的
console.log(fruit);
//这里会报错因为fruit是常量
fruit =[];
console.log(fruit);
```
## 解构数组
```
'use strict';

function animals() {
    return ["cat", "dog", "mouse"]
}

var tmp = animals(), cat = tmp[0], dog = tmp[1], mouse = tmp[2];

console.log(cat, dog, mouse);

//结构数组
let [animal1, animal2, animal3] = animals();
console.log(animal1, animal2, animal3);
```
## 解构对象
```
'use strict';


function login() {
    return {username: 'rc', userpassword: '123456'}
}

//解构对象，前面的是对象的key
let {username: name, userpassword: passowrd} = login();

console.log(name, passowrd);
```

## 模版字符串

```
'use strict';


let day = '星期一';

let str = `今天是${day}`;

console.log(str);
```

## 带标签的模板字符串

```
'use strict';


let username = "rc", password = "123";

let loginInfo = login `用户名是${username} 密码是${password}`;

function login(string, ...values) {
    // ["用户名是", " 密码是", "", raw: Array(3)]
    // 0: "用户名是"
    // 1: " 密码是"
    // 2: ""
    console.log(string);
    //["rc", "123"]
    console.log(values);
}

console.log(loginInfo);
```
## 判断字符串里是否包含其他字符串

```
'use strict';


let username = "rc", password = "123";

let loginInfo = `用户名是${username} 密码是${password}`;


//判断字符串以什么开头 ,这里返回true
console.log(loginInfo.startsWith("用户名"));

//判断字符串以什么结尾 ,这里返回true
console.log(loginInfo.endsWith(password));

//判断字符串包含什么字符，这里返回false
console.log(loginInfo.includes("1234"));
```

## 函数默认参数
```
'use strict';

function login(username = 'rc', password = '123') {
    return `用户名是${username} 密码是${password}`
}

//不传入函数值，就会使用默认的值
console.log(login());

```

## 展开操作符
```
'use strict';

let username = ['张三', '李四'];

//输出 ['张三', '李四']
console.log(username);
//输出张三 李四(这里将数组的每一个元素输出)
console.log(...username);

// 输出["王五", "张三", "李四"]
let otheruser =['王五',...username];
console.log(otheruser);

```

## 剩余操作符



```
'use strict';

//...在参数里面代表剩余操作符
function username(firstUser, secondUser, ...otherUser) {
    //console中的otherUser表示将...otherUser放大otherUser数组中
    console.log(firstUser, secondUser, otherUser);
    // console.log(firstUser, secondUser, ...otherUser); 这里表示的就是展开操作符
}

// 输出 aaa bbbb  ["cccc", "ddddd"]
username("aaa", 'bbbb', 'cccc', 'ddddd');
```

## 结构参数
```
'use strict';

function meeting(when, where, {person, activity} = {}) {
    console.log(when, where, person, activity);
}

//输出：12点 广州 rc movie
meeting('12点', '广州', {person: 'rc', activity: 'movie'});
```

## 函数的名字--name属性

```
'use strict';

let login = function () {

};

//输出login
console.log(login.name);


let logout = function MyLogout() {

};

//输出MyLogout
console.log(logout.name);
```

## 箭头函数

```
'use strict';

// let login = (username, password) => username + password;


//如果有其他操作，可以在外面包裹{}
// let login = (username, password) => {
//     return username + password;
// };

// 等价于
// let login = function login(username, password) {
//     return username + password;
// };

//输出rc123
console.log(login('rc', '123'));
```

## 对象表达式

```
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
```

## 对象属性名

```
'use strict';

let fruit = {};

fruit.apple ='苹果';

//如果属性名有空格，可以这样[`green apple`]添加属性
fruit[`green apple`] ='青苹果';

let otherApple ='other apple';

//也可以通过定义一个变量来添加属性
fruit[otherApple]='其他苹果';

//输出{apple: "苹果", green apple: "青苹果", other apple: "其他苹果"}
console.log(fruit);


```

## 对比两个值是否相等
```
'use strict';

//true
console.log(+0==-0);

//true
console.log(+0===-0);


//false
console.log(NaN == NaN);

//false
console.log(NaN === NaN);

//false
console.log(Object.is(+0,-0));

//true
console.log(Object.is(NaN,NaN));
```

## 把对象的属性复制到另外一个对象里

```
'use strict';

let userInfo={};

Object.assign(userInfo,{userName:'rc',password:'123'});

//{userName: "rc", password: "123"}
console.log(userInfo);
```