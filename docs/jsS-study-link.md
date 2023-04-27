

# js高级

## 面向对象

### 创建对象的方式

> ```js
> // 1、简单方式
> var person=new Object()
> // 给对象添加属性和方法
> person.name='Bob'
> person.age=20
> person.sayName=function(){
>     console.log(this.name)
> }
> ```
>
> ```js
> // 2.对象字面量
>     var person1={
>         myName:'Bob',
>         age:20,
>         sayName:function(){
>             console.log(this.myName)
>         }
>     }
> ```
>
> ```js
>  // 3.工厂函数
>     function createPerson(name,age){
>         var person=new Object()
>         person.myName=name
>         person.age=age
>         person.sayName=function(){
>             console.log(this.myName)
>         }
>         return person
>     }
> ```
>
> ```js
> // 4.构造函数
>     function Person(name,age){
>         this.name=name
>         this.age=age
>         this.sayName=function(){
>             console.log(this.name)
>         }
>     }
> ```
>
> 

### 构造函数

> 构造函数是根据具体事物的抽象的模板
>
>  实例对象是根据构造函数得到的具体的实例对象
>
> ```js
>     // 1、自定义构造函数
>     function Person(name,age){
>         this.name=name
>         this.age=age
>         this.sayName=function(){
>             console.log(this.name)
>         }
>     }
>     var person1=new Person('Mike',20)
> ```
>
> 

### 静态成员和实例成员

> 静态成员：
>
> ​      属于构造函数自身的成员，只能使用构造函数调用
>
> 实例成员：
>
> ​      属于对象的成员，也就是在构造函数内部添加给this的属性，在创建对象后有对象调用
>
> ```js
> // 自定义构造函数
>     function Person(name,age){
>         // 实例成员：属于对象的成员，也就是在构造函数内部添加给this的属性
>         this.name=name
>         this.age=age
>         this.sayName=function(){
>             console.log(this.name)
>         }
>     }
>     // 静态成员
>     Person.version='1.0'
> ```
>
> 

### 构造函数公共方法的提取于封装

> 在构造函数中存在一个不足：在构造函数中存在的方法他会在每次
>
> 创建实例对象的时候，复制一份，这样会浪费内存
>
> 解决方法：
>
> ​      1.把公共的方法提取到构造函数之外
>
> ​      2.把多个公共函数封装到一个对象中
>
> ```js
> // 2.解决方案1：把公共的方法提取到构造函数之外
>     function sayName(){
>         console.log(this.myName)
>     }
>     function sayAge(){
>         console.log(this.age)
>     }
>     function Person(name,age){
>         this.myName=name
>         this.age=age
>         this.sayName=sayName
>         this.sayAge=sayAge
>     }
> 
>     // 2.解决方案2：把多个公共函数封装到一个对象中
>     var fns={
>         sayName:function(){
>             console.log(this.myName)
>         },
>         sayAge:function(){
>             console.log(this.age)
>         }
>     }
>     function Person(name,age){
>         this.myName=name
>         this.age=age
>         this.sayName=fns.sayName
>         this.sayAge=fns.sayAge
>     }
> ```
>
> 

### 原型(对象):prototype

> ```js
> Person.prototype.sayName=function(){
>         console.log("sayName")
>     }
> var p=new Person('Bob',11)
>     // 所有的对象都有一个__proto__属性，他也指向创建该对象的构造函数的原型
>     console.log(p.__proto__)
>     console.log(p.__proto__===Person.prototype)//true
> 
> // 实例对象跳过__proto__,直接调用原型对象中的方法
>     p.sayName()
> 
> // 通过实例对象调用constructor可以得到创建该对象的构造函数
> console.log(p.constructor)
> ```
>
> 

### 原型链

> -原型对象所向上溯源得到的一系列原型对象构成的链条
>
> -js对象访问属性或者方法的方式：沿着原型链的节点寻找，知道找到null为止，如果
>
> 在某一个节点找到了，就输出，没有的话就输出undefined

### 实例对象读取原型对象上的属性和方法

> 读取属性和方法
>
> ```js
> console.log(person1.myName)
> console.log(person1.age)
> console.log(person1.address)
> person1.sayName()
> ```
>
> 通过实例对象添加新的成员,只会直接添加自己
>
> ```js
> person1.sex='male'
> person1.sayAge=function(){
>     console.log(this.age)
> }
> console.dir(person1)
> ```
>
> 如果通过实例对象想修改原型对象上的属性或者方法，那么还是会把属性或者方法添加到实例对象自身
>
> 这时如果通过实例对象再去访问属性和方法，那么实际访问的就是实例对象自己添加的属性和方法
>
> ```js
> person1.type='person'
> console.dir(person1)
> console.log(person1.type)
> ```
>
> 通过实例对象修改原型对象上的复杂类型(对象)的数据中的值，
>
> 那么还是会沿原型链寻找，而不会给实例对象自身添加属性，并且修改相应的值
>
> ```js
> person1.address.city='上海'
> console.dir(person1)
> console.log(Person.prototype)//上海
> ```
>
> 

### 简化版原型语法

> ```js
> // 简化版
>     // 注意：{}是新对象
>     Person.prototype={
>         constructor:Person,//在这里要加上constructor属性，并且把他指向实例对象真正的构造函数
>         type:'human',
>         sayName:function(){
>             console.log(this.myName);
>         }
>     }
> ```
>
> 

### 原生构造函数的扩展

> ```js
>     Array.prototype.getEvenSum = function () {
>             var sum = 0;
>             for (var i = 0; i < this.length; i++) {
>                 if (i % 2 === 0) {
>                     var item = this[i]
>                     sum += item
>                 }
>             }
> 
>             return sum
>         }
>     
>     arr.getEvenSum()
> ```

## 函数进阶

### 函数定义

> ```js
> // 1、函数定义的方式：函数声明
>     function fun(){
>         console.log(1)
>     }
>     fun()
>     // 2、函数定义的方式二:函数表达式
>     var fn=function(){
>         console.log(2)
>     }
>     fn()
> 
>     // 3、函数声明的提升
>     fun1()
>     function fun1(){
>         console.log(3)
>     }
> 
>     // 4、函数表达式不可以提升
>     fn1()//错误
>     var fn1=function(){
>         console.log(fn1)
>     }
> ```
>
> 

### 函数调用和this

> ```js
> // 判断函数内部的this是指向谁？函数被谁调用
>     // 1、普通函数的调用,通过给函数名称(标识符)或者变量名添加()执行
>     // 内部有个this对象，默认指向window
>     // function fun(){
>     //     console.log(1)
>     //     console.log(this)
>     // }
>     // fun()
> 
>     // 2、构造函数
>     // 通过new关键字进行调用构造函数内部的this指向的是创建的实例对象
>     // 如果通过普通函数的方式调用，内部的this指向window
>     function Person(name){
>         this.myName=name
>         console.log(this)//p1
>     }
>     var p1=new Person('zs')//P1
> 
>     Person('zs')//window
> 
>     // 3、对象中的方法
>     // 对象中的方法中的this默认指向的是调用这个方法的对象
>     function fun(){
>         console.log(1)
>         console.log(this)
>     }
>     var obj={
>         sayHi:function(){
>             console.log(this)
>             console.log('hahaha')
>         },
>         fn:fun
>     }
>     // obj.sayHi()//sayHi所在的对象
> 
>     // 判断一个函数内部指向的时候，要联系执行上下文
>     // 在调用的时候，分析他们之间的关系，看按照什么方式调用
>     obj.fn()//fn所在的对象
> 
>     // 4、事件出来函数,在事件被触法后，会自动执行函数
>     // 事件函数内部this指向的是 事件源
>     // 需求：点击网页，产生一个事件，输出一句话
>     document.onclick=function(){
>         console.log(this)
>     }
> 
>     // 5、回调函数中this
>     // 定时器和延时器中的回调函数的this
>     window.setTimeout(function(){
>         console.log(this)//window
>     },1000)
> 
>     // window.setTimeout(handler,timeout){
>     //     xxx
>     //     // this.handler()
>     //     window.handler
>     //     xxx
>     // }
> ```
>
> 

### call,apply,bind方法

> ```js
> // 1、call方法
>     // 1.1功能：第一个可以改变函数内部的this指向，第二个可以执行函数并传参
>     // 1.2参数：第一个参数，this要指向的对象，第二个参数就是要传递给调用call方法的函数的参数
>     // 1.3返回值:就是调用call方法的函数的返回值
>      var obj={
>          myName:'zs'
>      }
>      var res=fun.call(obj,3,5)
>      console.log('res',res)
> 
>     // 2、apply方法
>     // 2.1功能：第一可以改变函数内部的this指向，第二个可以执行函数并传参
>     // 2.2参数：第一个参数，this要指向的对象，第二个参数就是要传递给调用call方法的函数的参数，但是一个参数组成的数组
>      2.3返回值：就是调用call方法的函数的返回值
>      var obj={
>          myName:'zs'
>      }
>      var res=fun.apply(obj,[2,3])
>      console.log('res',res)
> 
>     // 3、bind方法
>     // 3.1功能：第一可以改变函数内部的this指向，注意：他不能执行函数！！！！！！
>     // 3.2参数：第一个参数，this要指向的对象，第二个参数就是要传递给调用call方法的函数的参数
>     // 3.3返回值：返回一个新的函数，这个函数的this就指向了参数指向的对象
>     var obj={
>         myName:'zs'
>     }
>     function fun(a,b,c,d){
>         console.log(this)
>         console.log(a+b+c+d)
>         return a+b+c+d
>     }
>     var fn=fun.bind(obj,1,2,3,4)
>     var res=fn()
>     console.log('res',res)
> ```
>
> 

### 函数的其他成员

> ```js
>     function fn(a,b){
>         // arguments获取函数实参的所有值
>         console.log(arguments)
> 
>         // 获取实参个数
>         console.log(fn.length)
> 
>         // 获取函数名字
>         console.log(fn.name)
>     }
>     fn(1,2,3,4,5,6,7,8)
> ```
>
> 

### 高阶函数

> ```js
> // 高阶函数
>     // 1、函数作为另一个函数的参数
>     function eat(fn){
>         fn()
>     }
>     eat(function(){
>         console.log('aaa')
>     })
> 
>     // 2、函数作为一个函数的返回值
>     // 实现一个函数可以输出m+任意数
>     function outer(n){
>         return function inner(m){
>             console.log(m+n)
>         }
>     }
>     var fun=outer(1)
>     console.log(fun)
>     fun(7)
>     fun(9)
> ```
>
> 

### 闭包

> 在一个父函数(外部函数)内部定义内部函数，在内部函数中
> 调用了外部函数定义的变量，并且在外部函数中返回
>
> ```js
> // 闭包
>     /*  在一个父函数(外部函数)内部定义内部函数，在内部函数中
>      调用了外部函数定义的变量，并且在外部函数中返回 */
>     function outer(){
>         var a=10
>         function inner(){
>             // console.log(a)
>             return a
>         }
>         // 注意：返回的是函数，不是函数的调用
>         return inner
>     }
>     // 由于函数作用域的原因，在函数外部是无法访问到的
>     // console.log(a)//a is no defined
>     var fun=outer()
>     var res=fun()
>     console.log(res)
> ```
>
> 

### 闭包的作用

> 类似缓存的作用
>
> ```js
>  // 1、类似缓存的作用
>     /*  在一个父函数(外部函数)内部定义内部函数，在内部函数中
>      调用了外部函数定义的变量，并且在外部函数中返回 */
>     function outer(){
>         var a=10
>         function inner(){
>             // console.log(a)
>             a++
>             return a
>         }
>         // 注意：返回的是函数，不是函数的调用
>         return inner
>     }
>     // 由于函数作用域的原因，在函数外部是无法访问到的
>     // console.log(a)//a is no defined
>     var fun=outer()
>     var res=fun()
>     console.log(res)//11
> 
>     var res1=fun()
>     console.log(res1)//12,类似缓存
> ```
>
> 

## 继承

### 普通继承

```js
 // 父级的对象
    var parent = {
        myName: 'parent',
        money: 100000,
        house: ['商铺', '住宅'],
        tech: function () {
            console.log('买房子')
        }
    }

    var son = {
        myName: 'son'
    }
    for (const pKey in parent) {
        console.log(pKey, '------', parent[pKey])
        if (son[pKey]) {
            continue
        }
        son[pKey] = parent[pKey]

    }
    console.log(son)

    // 封装为一个函数，来实现对象之间的继承
    function extend(parent, child) {
        for (const pKey in parent) {
            if (child[pKey]) {
                continue
            }
            child[pKey] = parent[pKey]

        }
    }
    extend(parent,son)
    console.log(son)
```

### 原形继承

```js
    // 学生类、教师类
    function Person(name,age,sex){
        this.myName=name
        this.age=age
        this.sex=sex
    }
    function Student(score){
        this.score=score
    }
    function Teacher(salary){
        this.salary=salary
    }

    // 实现继承的第一种方式，原型继承
    Student.prototype=new Person("zs",20,"女")
    Student.prototype.constructor=Student//注意！！！！

    var s1=new Student(90)
```

### 构造函数继承

```js
     function Person(name,age,sex){
        this.myName=name
        this.age=age
        this.sex=sex
     }
   //   Person.prototype.say=function(){
   //    console.log(1)
   //   }
     function Student(name,age,sex,score){
        Person.call(this,name,age,sex)
        this.score=score
     }

     var s1=new Student('zs',20,"女",90)
     console.dir(s1)
```

### 组合式继承(原型继承和构造函数继承)

```js
 function Person(name,age,sex){
        this.myName=name
        this.age=age
        this.sex=sex
        this.sayName=function(){

        }
    }
    // 父类型的原型对象中的方法也要继承
    Person.prototype.sayHi=function(){
        console.log('hello')
    }

    function Student(name,age,sex,score){
        Person.call(this,name,age,sex)
        this.score=score
    }

    Student.prototype=new Person()
    Student.prototype.constructor=Student
    var s1=new Student('zs',20,'女',90)
    console.dir(s1)
```

## es6新特性

### 变量关键字

let-let定义的变量所在的范围会形成作用域

```js
 for(let i=0;i<3;i++){
         arr[i]=function(){
             console.log(i)
         }
     }
```

const-常量

```js
//使用const声明的变量不能修改
const a=10
a=1//err

//使用const声明变量的同时需要初始化
const age//err

//使用const声明的变量如果指的是对象，那么修改对象中的属性是允许的
const myObj={
        age:18
    }
myObj.age=20//success
myObj={ //err,不能只想新对象，地址已经发生改变
    age:11
}
```

### 数组解构

数据准备

```js
const arr=[100,200,300]
```

1、根据数组的下标获取数据

```js
const foo=arr[0]
```

2、基本的解构方式

```js
const [foo,bar,baz]=arr
console.log(foo,bar,baz)//100,200,300
```

3、提取数组中的最后一个元素

```js
const [,,last]=arr
console.log(last)//300
```

4、剩余运算符:...

**注意：剩余运算符声明的变量只能放在最后！！！**

```js
// 需求：第一个元素单独提取，剩下的元素打包提取
// 注意：剩余运算符声明的变量只能放在最后！！！
 const [foo,...rest]=arr
 console.log(foo,rest)
```

5、只提取一个，按顺序

```js
const [foo]=arr
console.log(foo)//100
```

6、默认解构,有值就赋值，没有用默认的

```js
const [foo,bar,baz=456,more=123]=arr
console.log(more)//123
```

练习：获取一个路径中的最后一个目录

```js
const path="foo/bar/baz"
let pathArr=path.split('/')

const [,,baz]=pathArr
const [first,...last]=pathArr
console.log(baz,last)//baz,baz
```

### 对象解构

准备数据

```js
const obj={
    myName:'zs',
    age:18,
    getAge:function(){
        return this.age
    }
}
```

1、数组解构基本形式

```js
const {myName:myNameVal}=obj
console.log(myNameVal)//'zs'
```

2、解构默认值

```js
const {myName:myNameVal='jack'}=obj
console.log(myNameVal)//'zs'
```

3、解构函数

```js
const {getAge:getAgeFunc} = obj
const age=getAgeFunc()
```

### 模板字符串``

```js
//1、允许换行
const str=`学习es6,
            很强大`;//按照定义的方式输出

//2、使用插值表达式
const lang='js'
const str=`学习${lang},很强大`
```

### 模板字符串标签函数

```js
// strings根据插值分割
function myTagFunc(strings,myName,gender){
    console.log(strings)
    console.log(myName)
    console.log(gender)

	const sex=gender==='female'?'女':'男'
	const newStr=strings[0]+myName+strings[1]+sex+strings[2]

    return newStr
}
    // 模板字符串标签函数
    const myName='zs'
    const gender='female'//转换
    const str=myTagFunc`hi,${myName} is ${gender}`
    console.log(str)
```

### 字符串:startsWith\endWidth\includes

数据准备

```js
const str='Error:foo is not defined.'
```

startsWith

```js
// 需求：判断str是否以Error开头
console.log(str.startsWith("Error"))//true
```

endWidth

```js
// 需求：判断str是否以.结尾
console.log(str.endsWith("."))//true
```

includes

```js
// 需求：判断str是否包含foo
console.log(str.endsWith("foo"))//true
```

### 函数参数默认值

**注意：含默认值的参数只能放最后**

```js
// 函数参数默认值
// 注意：含默认值的参数只能放最后
function foo(bar,enable=""){
    console.log(bar,enable);
    // 第一种防止函数内部出错的方式，也叫增强函数的健壮性
    // let str
    // if(enable){
    //     // 把字符串全部转成大写
    //     str=enable.toUpperCase()
    // }
   const str=enable.toUpperCase()
   console.log('foo函数执行了')
 }
foo("bar")
```

### 函数剩余参数

**注意：剩余参数只能放在参数列表的最后一个位置**

```js
function fun(n,...args){
    console.log(n)
    console.log(args)//后面的所有打包数组,数组形式打包
}
fun(1,2,3)
fun(2,3,5,6,8)
```

### 展开/延展操作符...

```js
const arr=['foo','bar','baz']
// console.log.apply(console,arr)

console.log(...arr)//'foo','bar','baz'
const newArr=[...arr]
console.log(newArr)//['foo','bar','baz']
```

### 箭头函数

1、基本定义方式

```js
const plus=(a)=>{
    console.log(this)//window
    return a+1
}
```

2、箭头函数中没有this

上示代码this指向window,因为箭头函数会往外找

3、箭头函数的简写

```js
// 3.1只有一个参数的时候才能神略括号
 const plus=a=>{
     console.log(this)
     return a+1
 }
 
// 3.2函数体中的代码之后一行的时候，可以吧{}和return 去掉
 const plus=a=>a+1
```

### 对象字面量的增强

```js
const bar='bar'
const sex="sex"
const obj={
    myName:'zs',
    // 1、当对象中的键和值的名称一样的时候，可以为一个,函数同理
    // bar:bar
    bar,
    // 2、计算属性名[表达式]
    [1+1]:2,

}

// 2、新增的可以用变量代替
// obj["sex"]="female"
obj[sex]="female"
console.log(obj)
```

### Object.assign()对象拷贝

> 浅拷贝：拷贝对象和被拷贝对象是同一个地址
>
> 深拷贝：拷贝对象和被拷贝对象补是同一个地址

```js
const source1={
    a:123,
    b:123
}
const source2={
    b:223,
    d:313
}
const target={
    a:113,
    c:333
}

//解释：
//1、从souce2往前加属性，对前一个对象来说，二者都有覆盖值添加，前一个没有就添加
//2、函数最终的值是存放target,并且返回target对象
//3、浅拷贝newObj和target是同一个对象
const newObj = Object.assign(target,source1,source2)
console.log(newObj===target);//true

//实现深拷贝
//newObj和obj的地址不同
const obj={
    myName:'zs',
    age:18
}
const newObj=Object.assign({},obj)
```

### Object.is(a,b)

```js
// 判断值是否相等
console.log(0==false)//true
console.log(0===false)//false
console.log(+0===-0)//true
console.log(NaN===NaN)//false

// object.is
console.log(Object.is(+0,-0))//false
console.log(Object.is(NaN,NaN))//true
```

### clsss定义类

```js
// class关键字定义类
class Person{
    constructor(name,age){
        this.myName=name
        this.age=age
    }
    sayHi=function(){
        console.log(`hi,${this.myName}`)
    }

    // 静态成员/方法
    static create(name,age){
        return new Person(name,age)
    }
}

//实例化
const p1=new Person('zs',18)
p1.sayHi()

//静态成员调用
const p1=Person.create('li',20)
p1.sayHi()
```

类继承extends

```js
// 继承
class Person{
    constructor(name,age){
        this.myName=name
        this.age=age
    }
    sayHi=function(){
        console.log(`hi,${this.myName}`)
    }
}
class Student extends Person{
     constructor(name,age,number){
     	uper(name,age)//super可以理解为父类构造函数
     	this.number=number
   }
}

const s1=new Student("tom",20,1010)
console.log(s1)
```

### Set数据结构

[JavaScript Set 对象 (w3school.com.cn)](https://www.w3school.com.cn/js/js_object_sets.asp)

**注意：重复的值会被覆盖**

初始化

```js
const s=new Set([1,2])
//也可以
const s=new Set()
```

1、添加数据

```js
const res=s.add(1)
//res返回Set类型

//链式调用
s.add(1).add(2).add(3)
```

2、获取数据 

```js
// 2.1、forEach()
 s.forEach(i=>console.log(i))

 //2.2、for..of
 for(let i of s){
     console.log(i)
 }
```

3、获取Set中存储的数据的个数

```js
console.log(s.size)
```

4、判断指定的数是否在Set数据结构中

```js
console.log(s.has(3))
```

5、删除指定的数

```js
console.log(s.delete(5));//返回值表示删除是否成功
```

6、清空Set数据

```js
s.clear()
```

使用

```js
const arr=[1,2,3]
const newArr=[...new Set(arr)]
console.log(newArr)
```

### Map数据结构

[JavaScript Map 对象 (w3school.com.cn)](https://www.w3school.com.cn/js/js_object_maps.asp)

初始化

```js
const map=new Map()
```

1、新增数据

```js
map.set("myName","zs")
```

2、获取数据

```js
console.log(map.get("myName"))
```

3、根据key判断是否存在

```js
console.log(map.has("myName"));
```

4、删除

```js
console.log(map.delete("myName"))//true
```

5、清空

```js
map.clear()
```

遍历map中的数据

```js
map.forEach((value,key)=>{
    console.log(value,key)
})
```

### for...of遍历

1、遍历数组

```js
const arr=[100,200,300]
for(let item of arr){
    console.log(item);
}
```

2、遍历set

```js
const s=new Set([1,2,3])
for(let i of s){
    console.log(i)
}
```

3、遍历Map

```js
const m=new Map()
m.set("foo",1)
m.set("bar",2)
for(let item of m){
    console.log(item)
}

for(let [key,value] of m){
    console.log(key,value)
}
```

4、for...of不能遍历对象

5、Object.keys() 获取对象中的所有key

```js
for(let item of Object.keys(obj)){
     console.log(item)
}
```

6、Object.values() 获取对象中的所有values

```js
for(let item of Object.values(obj)){
     console.log(item)
}
```

7、Object.entries() 获取对象中的所有键值对

```js
for(let item of Object.entries(obj)){
     console.log(item)
}
```

### es7 2016新特性

```js
const arr=[1,true,NaN,23]
// indexOf 判断某个元素是否在数组中，返回这个元素在数组中的索引,如果不在数组中返回-1
console.log(arr.indexOf(true))
console.log(arr.indexOf(11))
console.log(arr.indexOf(NaN))//陷阱，-1

// includes 判断数组是否包含指定的元素
console.log(arr.includes(1));
console.log(arr.includes(NaN));//true

// 指数运算符 **
// 需求：计算2的3次方
console.log(Math.pow(2,3))
console.log(2**3)
```

