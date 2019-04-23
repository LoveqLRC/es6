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




