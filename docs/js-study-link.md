# js基础

## js入门

### 变量命名规则

1. 使用大小写，下划线，数字，$

2. 不能以数字开头，大小写表示不同的含义

3. 若只定义变量而没赋值，会返回undefined

   ```javascript
   var num,num_x,userAge;
   ```

   

### let，var区别

> - let不能被重新定义，但是var是可以的
>
> - 变量提升 (var有一个变量提升的过程，当整个函数作用域被创建的时候，实际上var定义的变量都会被创建，并且如果此时没有初始化的话，则默认为初始化一个undefined)
>
> - var是函数作用域，let是块作用域
>
>   ```js
>   console.log(myName)//undefined
>   var myName = 'xiaoming'
>   
>   //转换
>   var myName    
>   console.log(myName)//undefined
>   myName = 'xiaoming'     
>   
>   //全局变量
>   globalContext: {
>       myName: undefined//首先
>   }
>   ```
>
>   

### const

> - let和var用来声明变量，const用来声明常量。
> - 常量就是赋值后就不能改变它的值。
> - const不允许只声明不赋值，一旦声明就必须赋值

### 转义字符

| 转义字符  | 解释说明               |
| :-------- | :--------------------- |
| \n        | 换行，n是newline的意思 |
| \\        | 斜杆\                  |
| \\'，\\'' | '单引号,"双引号        |
| \t        | tab缩进                |
| \b        | 空格，b是blank的意思   |
| \r        | 回车                   |
| \f        | 换页符                 |

### 数据类型

> 基础数据类型:布尔型(Boolean),数值型(Number),string,null,undefined
>
> 引用数据类型:Object类型；Function类型；Array类型；RegExp类型；Date类型
>
> 数字进制
>
> ```js
> // 二进制 八进制、十进制、十六进制
> var a = 0b111 // 二进制
> var b = 0xa; //0x表示十六进制，但是js会强制转换为十进制来运算,0xa == 10
> var c = 010; //0开头表示八进制，同样强制转换为十进制来运算 010 = 8
> // 0.1+0.2 精度问题
> 
> ```
>
> String
>
> ```js
> var a = '你好'; // 定义
> //  注意：字符串 + 任何类型 =拼接之后的新字符串
> var b = '吗'
> a + b // '你好吗'
> var c = 666
> a + c // '你好666'
> var d = 1
> c + d // 667
> undefined + a // 'undefined你好'
> 
> ```
>
> Boolean
>
> ```js
> true+1//2
> false+1//1
> //false可表示0，true可表示1
> ```
>
> undefined
>
> 1. 一个声明后没有被赋值的变量会有一个默认值 undefined
> 2. undefined 和 字符串 相加，会拼接字符串
> 3. undefined 和 数字相加，最后结果是NaN
>
> null
>
> ```js
> //一个声明变量给 null 值，里面存的值为空
> var space = null;
> console.log(space + 'pink'); //nullpink
> console.log(space + 1); // 1 
> 
> ```
>
> Number
>
> ```js
> //既可以赋值整型也可以是浮点型
> var n1=10
> var n1=10.10
> ```
>
> typeof(检测数据类型)
>
> ```js
> typeof '字符'	'string'
> typeof 18	'number'
> typeof true	'boolean'
> typeof undefined	'undefined'
> typeof null	'object'
> 
> ```
>
> 

### 数据类型转换

> 转字符串(string)
>
> ```js
> var a='字符'
> a.toString()
> String(12)//'12'
> 1+''//'1'
> //String()是一个全局的方法,而toString()是object原型的一种方法
> //String()可以把null undefined这两种类型转换成字符型,toString不行
> ```
>
> 转换为数字型(number)
>
> ```js
> //转换为整型数值
> parseInt('12.11')//12
> parseInt(12.11)//12
> parseInt('12.aa')//12
> parseInt('aa.12')//NaN
> 
> //转换为浮点数值
> parseFloat('12.12')//12.12
> parseFloat(12)//12
> parseFloat('12.aa')//12
> parseFloat('aa.12')//NaN
> 
> //强制转换
> Number('12')//12
> Number('12.12')//12.12
> 
> //-*/
> '12'*1//12
> 
> //四舍五入
> 12.12.toFixed(1)//'12.1',返回字符串
> ```
>
> 转布尔型(Boolean)
>
> ```js
> console.log(Boolean('')); //false
> console.log(Boolean(0));  //false
> console.log(Boolean(NaN)); //false
> console.log(Boolean(null)); //false
> console.log(Boolean(undefined)); //false
> console.log(Boolean('aa')); //true
> console.log(Boolean(12));   //true
> //代表空，否定的值会被转换为false，例："",null,undefined,NaN,0
> ```
>
> 

## 运算符

### 自增,自减(++,--)

```js
// 自增
// 前置：先增加再赋值
// 后置：先赋值再增加（针对表达式要赋值的变量）
var a = 2,
    b = 2,
    sum1 = ++a,
    sum2 = b++;
console.log(sum1, sum2); //sum1=3,sum2=2
console.log(a, b); //a=3,b=3

var a = 10;
++a;
var b = ++a + 2//12+2
console.log(b)//14

var c = 10
c++
var d = c++ + 2//11+2
console.log(d);//13

var e = 10
var f = e++ + ++e//11+11
console.log(f);//22
//++,--和其他二元运算符一起时优先运算，++，--是一元运算符
//如果单独一个的话，++a先加再用，a++先用再加
```

### 幂运算

```js
console.log(3 ** 4); //81,3^4
```

### 算术运算符

| 运算符 | 说明 | 案例                           | 结果            |
| ------ | ---- | ------------------------------ | --------------- |
| +      | 加   | 10+10(var a=0.1;var b=0.1,a+b) | 20(0.2000***04) |
| -      | 减   | 10-2                           | 8               |
| *      | 乘   | 2*2                            | 4               |
| /      | 除   | 4/2                            | 2               |
| %      | 取余 | 12%13,3%2                      | 12,1            |



### 关系运算符

| 运算符  | 解释说明                   | 案例    | 结果  |
| ------- | -------------------------- | ------- | ----- |
| <       | 小于                       | 1<2     | true  |
| >       | 大于                       | 2>1     | true  |
| >=      | 大于等于                   | 2>=2    | true  |
| <=      | 小于等于                   | 1<=1    | true  |
| ==      | 模糊等号(会自动转型判断)   | 2=='2'  | true  |
| !=      | 不等号                     | 2!=2    | false |
| ===,!== | 全等(值和数据类型必须相等) | 2==='2' | false |

```js
console.log(undefined == null); //true
console.log('' == false); //false
console.log('1' == true);//true
console.log('0' == false);//true
```



### 逻辑运算符

```js
//逻辑与：两边都是 true才返回 true，否则返回 false
(1==1)&&(2==2)//true

//逻辑或：两边都为 false 才返回 false，否则都为true
(1==2)||(1==1)//true

//!取反符，用来取一个布尔值相反的值
!true//false
```

> 短路运算
>
> 逻辑与：
>
> 1. 表达式1 && 表达式2
>
> 2. 如果表达式1为真 则运算并且返回表达式2
>
> 3. 如果表达式1为假 则运算并且返回表达式1
>
>    ```js
>    let a = 100
>    console.log(58 && a++)//100
>    console.log(a)//101
>    ```
>
>    
>
> 逻辑或:
>
> 1. 表达式1 || 表达式2
>
> 2. 如果表达式1为真 则运算并且返回表达式1
>
> 3. 如果表达式1为假 则运算并且返回表达式2
>
>    ```js
>    let a = 100
>    console.log(58 || a++)//58
>    console.log(a)//100
>    
>    ```
>
>    

### 三元运算

```js
var day = '周二';
var day1 = '周六';
console.log((day == '周天' ? '休息' : '学习')); //学习
console.log((day1 == '周天' ? '休息' : (day1 == '周六' ? '待定' : '学习'))); //待定
//三元运算,先判断条件表达式，为真返回结果1，否则返回结果2
// 条件表达式？结果1：结果2
```

## 流程语句

流程控制主要有三种结构，分别是顺序结构、分支结构、循环结构，这三种结构代表三种代码执行的顺序

### if语句

```js
 var age = 18;
 //单分支（单个条件判断）
 if (age >= 18) {
    console.log('成年');
  }

  age = 16;
 if (age >= 18) {
     console.log('成年');
  } else {
     console.log('未成年');
  }

//多分支
if(条件表达式1)
{
  语句1;
}
else if(条件表达式2)
{
   语句2;
}
else if(条件表达式3)
{
  语句3;
}
else
{
   //上述条件都不成立执行此处代码
}

```

### switch语句

```js
switch(表达式){
  case value1:
     // 表达式等于 value1 时要执行的代码
     break; // 退出
  case value2:
     //表达式等于value2 时要执行的代码
     break;
  default:
     // 表达式不等于任何一个value时要执行的代码，默认值
}

```

### for循环

```js
for(初始化变量;条件表达式;操作表达式)
// 初始化变量 声明的一个普通变量，通常用于计数器使用
// 条件表达式 用来决定每一次循环是否继续执行，作为终止的条件
// 操作表达式 每次循环后执行的代码，用于我们计数器 变量进行更新
// for(var i = 0; a < 100; i++)
{
   // 循环体
}

for(1声明变量;2判断条件;4进行下一步操作){
    3循环体
}
```

### while循环

```js
while(条件表达式){
  // 循环代码
}
// 案例
let i = 1
while(i<10){
   console.log('hello')
   i++
}

```

### do while循环

```js
do {
  //循环体代码
}while(条件表达式);

```

### break,continue

> - continue 关键字用于立即跳出本次循环，继续下一次循环（本次循环体中 continue 之后的代码就会少执行一次）。
> - break 关键字用于立即跳出整个循环

## 获取元素

<u>基于document的函数或属性</u>

### getElement系列

| 函数名                                  | 解释说明                                               |
| --------------------------------------- | ------------------------------------------------------ |
| document.getElementById('box')          | 通过id获取元素，返回单个对象，可直接使用               |
| document.getElementsByName('box')       | 通过name名获取元素，返回伪数组，需选择[0]              |
| document.getElementsByTagName('li')     | 通过标签名获取元素，返回伪数组，需选择[0]              |
| document.getElementsByClassName('item') | 通过类名获取元素，返回伪数组，需选择[0]（不兼容ie6-8） |

```js
 var box = document.getElementById('box');
 console.log(box, typeof box);

 // 通过名字获取
 var study = document.getElementsByName('study');
 console.log(study, typeof sstudy);

 //通过标签名获取元素,可通过类似数组下标的方式去获取到单个元素
 //如果内容为空返回的是空的伪数组，没有li
 var liArr = document.getElementsByTagName('li')
 console.log(liArr[0]);

 //通过样式名去获取，不兼容ie6-8 (重要)
 var liArr = document.getElementsByClassName('item');
 console.log(liArr, liArr[1]);

```



### 个别元素获取

| 函数名(属性)             | 解释说明                                   |
| ------------------------ | ------------------------------------------ |
| document.body            | 获取body这个元素，返回单个对象，可直接使用 |
| document.documentElement | 获取html这个元素，返回单个对象，可直接使用 |
| document.forms           | 获取所有表单，需结合[0]使用                |
| document.images          | 获取所有图片标签，需结合[0]使用            |

```js
 // 获取body
 console.log(document.body, typeof document.body);
 console.log(document.getElementsByTagName('body')[0]);

 //获取html
 console.log(document.documentElement);

 //获取表单，图片
 console.log(document.forms);
 console.log(document.images);
```

### querySelector系列

<u>()里的选择方法和css一致</u>

<u>h5新增，存在不兼容ie旧版问题</u>

| 函数名                                      | 解释说明                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| document.querySelector('div')               | 获取选择到的第一个div,返回单个对象,可直接操作                |
| document.querySelector('#box')              | 获取选择到的id=box的元素,返回单个对象,可直接操作             |
| document.querySelector('div[name="study"]') | 获取选择到的第一个div并且name=study的元素,返回单个对象,可直接操作 |
| document.querySelectorAll('div')[1]         | 获取所有div,返回伪数组,需结合[0]...使用                      |

```js
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div')[1]);
console.log(document.querySelector('#box'));
console.log(document.querySelector('.boxName'));
console.log(document.querySelector('div[name="study"]'));
```

### 拼接方法

```js
//获取ul下的li
var ulList = document.getElementById('ulList');
 console.log(ulList.getElementsByTagName('li'));

//children:属性，获取指定元素的子集
console.log(document.getElementById('ulList').children)
//id不能用拼接的方式（重要）
```

### children属性

```js
//children:属性，获取指定元素的子集
console.log(document.getElementById('ulList').children)
```

### innerHTML,innerText,textContent属性

> innerHtml
>
> ```js
>  //innerHtml：获取设置指定元素的html内容
>  console.log(document.getElementById('box').innerHTML);
>  document.getElementById('box').innerHTML = '<div>设置</div>';
> ```
>
> innerText
>
> ```js
> // innerText：获取设置指定元素的内容，无法渲染html,会识别为字符串
>  console.log(document.getElementById('ulList').innerText);
>  document.getElementById('box2').innerText = '<div>设置</div>';
>  document.getElementById('box2').innerText = '设置';
> ```
>
> textContent
>
> ```js
> // textContent：获取设置指定元素的文本内容，无法渲染html，会识别字符串，且会保留文本格式
>  console.log(document.getElementById('box1').textContent);
>  document.getElementById('box2').textContent = '文本123';
> ```
>
> 

### write,writeln

```js
document.write('<pre>');
document.writeln('哈哈哈哈哈');
document.writeln('哈哈哈哈哈');
document.write('</pre>');
//writeln会换行，但是要结合<pre></pre>使用保留格式
```

## 元素样式修改

### 设置样式

```js
var box = document.getElementById('box');
box.style.width = '100px';
box.style.height = '100px'
box.style.backgroundColor = 'pink';

//css样式中-改成驼峰命名法
```

### 元素属性操作

> attributes
>
> ```js
> var link = document.getElementById('linkBox');
> console.log(link.attributes);
> //attributes:获取标签上的所有属性,返回数组
> ```
>
> setAttribute
>
> ```js
> var link = document.getElementById('linkBox');
> link.setAttribute('class', 'link1');
> //setAttribute:设置标签上的指定属性
> ```
>
> getAttribute
>
> ```js
> var link = document.getElementById('linkBox');
> console.log(link.getAttribute('href'));
> //getAttribute:获取标签上指定属性的值
> ```
>
> removeAttribute
>
> ```js
> var link = document.getElementById('linkBox');
> link.removeAttribute('href');
> //removeAttrbute:移出标签上的指定属性
> ```
>
> dataset.属性名
>
> ```js
> //data-xxx,自定属性，data固定，xxx可变 
> //一般用data-xxx，方便后面dataset属性使用
> //也可用其他的自定义属性
> //<a href="www.baidu.com" id="linkBox" data-type="1"></a>
> 
> var link = document.getElementById('linkBox');
> console.log(link.dataset.type);
> //dataset:针对自定义属性值，可以用dataset.属性名的方式获取对应的属性值
> ```
>
> console.dir()
>
> ```js
> var link = document.getElementById('linkBox');
> console.dir(link);
> //dir:可以用来查看元素的属性，可在前期调试的时候使用
> ```
>
> 

## 元素class类名操作

<u>对象.classList.相关函数</u>

> add()
>
> ```js
> var box1 = document.getElementById('box');
> box1.classList.add('box2');
> box1.classList.add('box3', 'boss');
> //add():添加指定类名，能添加多个，用,隔开
> ```
>
> remove()
>
> ```js
> var box1 = document.getElementById('box');
> box1.classList.remove('nav');
> //remove()：移除指定样式
> ```
>
> toggle()
>
> ```js
> var box1 = document.getElementById('box');
> box1.classList.toggle('box3');
> //toggle():切换指定样式，有则删除，无则添加
> ```
>
> item()
>
> ```js
> var box1 = document.getElementById('box');
> console.log(box1.classList.item(0));
> console.log(box1.classList.item(1));
> //item():返回索引对应的类名
> ```
>
> contains()
>
> ```js
> var box1 = document.getElementById('box');
> console.log(box1.classList.contains('nav'));
> //contains():判断是否含有指定类名，有则返回true,无则返回false
> ```
>
> length
>
> ```js
> var box1 = document.getElementById('box');
> console.log(box1.classList.length);
> //length:返回元素包含的class的个数
> ```
>
> 

## 获取节点

> ```js
> var ulBox = document.getElementById('ulBox');
> var item1 = document.getElementById('item');
> //节点包括\n,空格之类的符号
> 
> //firstChild:返回第一个子节点
> //firstElementChild:返回第一个子元素（子标签）
> console.log(ulBox.firstChild);
> console.log(ulBox.firstElementChild);
> 
> //lastChild:返回最后一个子节点
> //lastElementChild:返回最后一个子元素（子标签）
> console.log(ulBox.lastChild);
> console.log(ulBox.lastElementChild);
> 
> //childNodes:返回所有子节点
> //children:返回所有子元素（子标签）tCount
> //childElemenCount:获取子元素的数量
> console.log(ulBox.childNodes);
> console.log(ulBox.children);
> console.log(ulBox.childElementCount);
> 
> //previousSibling:返回前一个兄弟节点
> //previousElementSibling:返回前一个兄弟元素（标签）
> console.log(item1.previousSibling);
> console.log(item1.previousElementSibling);
> 
> //nextSibling:返回后一个兄弟节点
> //nextElementSibling:返回后一个兄弟元素（标签）
> console.log(item1.nextSibling);
> console.log(item1.nextElementSibling);
> ```

### 元素创建添加，删除，替换

> createElement()
>
> ```js
> var newLi = document.createElement('li');
> console.log(newLi);
> //createElement():创建元素（标签）
> //也可以通过.classList.add('')添加类名
> ```
>
> appendChild()
>
> ```js
> var newLi = document.createElement('li');
> newLi.innerHTML = `<span>追加新元素<span>`;
> ulBox.appendChild(newLi);
> //appendChild():添加子级元素（标签，在最后面进行添加）
> ```
>
> removeChild()
>
> ```js
> var ulBox = document.getElementById('ulBox');
> var removeItem = ulBox.removeChild(ulBox.firstElementChild);
> //removeChild():移除指定元素，返回删除的元素
> ```
>
> remove()
>
> ```js
> var ulBox = document.getElementById('ulBox');
> ulBox.remove();
> //remove():移除整个元素，包括子元素
> ```
>
> replaceChild(1,2)
>
> ```js
> var ulBox = document.getElementById('ulBox');
> var newLi = document.createElement('li');
> newLi.innerHTML = `<span>追加新元素<span>`;
> ulBox.replaceChild(newli, ulBox.firstElementChild);
> //replaceChild(1,2):1替换2，1是新的内容，2是被替换的内容
> ```
>
> <u>**如果替换的新元素(1)是已存在的元素，那么只是先删除原来的元素，再把1移动位置**</u>
>
> <u>**替换的新元素不能和添加的元素一样，可以再创建一个新的**</u>
>
> 

## BOM对象(基本)

<u>window.函数(属性),window可省略</u>

| 相关属性                             | 解释说明                                       |
| ------------------------------------ | ---------------------------------------------- |
| window.closed                        | 判断窗口是否关闭，返回Boolean值                |
| confirm('是否删除?')                 | 消息确实框，返回Boolean值                      |
| prompt('请输入内容', '默认值'),      | 弹窗输入，返回字符串,+prompt()可以变number类型 |
| open('./xxx.html');open();           | 打开新窗口;打开本页面                          |
| close();                             | 关闭窗口                                       |
| window.screenLeft, window.screenX    | 相对于屏幕（x轴）左侧的距离                    |
| window.screenTop, window.screenY     | 相对于屏幕（Y轴）头部的距离                    |
| window.innerHeight,window.innerWidth | 文档区域高度,宽度                              |
| window.outerHeight,window.outerWidth | 文档区域及外部工具栏高度，高度                 |
| alert('弹窗')                        | 提示框、警示框                                 |

```js
var str = '字符串';
console.log(str);
console.log(window.str);

//console.log(newStr);报错
//console.log(window.newStr);undefined

console.log(closed);
console.log(window.closed);

var sure = confirm('是否删除?');
console.log(sure, typeof sure);

var con = prompt('请输入内容', '默认值');
console.log(con, typeof con);

//打开新窗口
//open();默认打开本页面
// open();
// open('./99乘法表.html');


//关闭窗口
// window.close();
// close();


console.log('X', window.screenLeft, window.screenX);
console.log('Y', window.screenTop, window.screenY);

console.log('高度', window.innerHeight);
console.log('外部高度', window.outerHeight);

console.log('宽度', window.innerWidth);
console.log('外部宽度', window.outerWidth);
```

## location对象

<u>location.xxx</u>

| 相关属性                             | 解释说明                         |
| ------------------------------------ | -------------------------------- |
| location.assign('./99乘法表.html');  | 加载新的页面，参数是新页面的路径 |
| location.reload()                    | 重新加载当前页面，相对于刷新     |
| location.replace('./99乘法表.html'); | 新页面替换旧页面                 |
| location.hash                        | 获取网页的锚点                   |
| location.href(location.href='xxx')   | 获取网页的url(设置)              |
| location.pathname                    | 路径名                           |
| location.protocol                    | 协议                             |
| location.port                        | 端口号                           |
| location.host                        | 返回URL的主机名和端口号          |
| location.hostname                    | 返回URL的主机名                  |

> http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name
>
> 协议部分：该URL的协议部分为http
>
> 主机名(域名)：www.aspxfans.com
>
> 端口号：8080
>
> 锚点：name
>
> 参数：boardID=5&ID=24618&page=1

## 定时器

> setTimeout()
>
> ```js
> //setTimeout：单次定时器（延迟操作）
> //参数一：需要执行具体功能的函数
> // 参数二：延迟时间单位ms，1000ms=1s
> //延迟3s才执行timer
> setTimeout(timer, 3000);
> 
> //定义函数
> function timer() {
>     console.log('单次定时器');
> }
> ```
>
> setInterval()
>
> ```js
> //setInterval：循环定时器
> // 参数一：需要执行的具体功能函数
> // 参数二：间隔时间，单位ms
> // clearInterval：清除循环定时器，清除之前，循环定时器要赋给变量
> 
> 
> var timer1 = setInterval(timerFun, 1000);
> var count = 0;
> 
> function timerFun() {
>     count++;
>     console.log('循环定时器', count);
>     if (count >= 5) {
>         clearInterval(timer1);
>     }
> }
> 
> 
> ```
>
> 

## history对象

| 函数名            | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| history.length    | 返回历史记录列表的长度                                       |
| history.forward() | 进入下一级页面（前提：已有历史记录）                         |
| history.back()    | 返回上级（前提：已有历史记录）                               |
| history.go()      | 前往指定历史记录页面<u>**go(-1)等同back(),go(1)等同forward()**</u> |

## navigator对象(浏览器信息)

| 属性                  | 说明               |
| --------------------- | ------------------ |
| navigator.appCodeName | 浏览器内部名称     |
| navigator.appName     | 浏览器名称         |
| navigator.appVersion  | 平台和版本信息     |
| navigator.userAgent   | user-Agent头部的值 |
| navigator.platform    | 操作系统平台       |

## screen对象(电脑屏幕)

| 属性               | 说明                         |
| ------------------ | ---------------------------- |
| screen.height      | 屏幕高度，返回number类型     |
| screen.width       | 屏幕宽度，返回number类型     |
| screen.availHeight | 屏幕可用高度，返回number类型 |
| screen.availWidth  | 屏幕可用宽度，返回number类型 |

## 事件

### 事件入门

> 行内绑定事件
>
> ```html
> <div onclick="alert(111)">点击</div>
> <div onclick="clickFun()">点击</div>
> <script>
> function clickFun(){
>     
> }
> </script>
> //on+事件名称
> ```
>
> 动态绑定事件
>
> ```js
> document.getElementById('btn').onclick = function() { //on+事件名称
>    // 动态绑定式this指向事件触发元素
>    alert(222);
>    console.log(this)
> }
> // 若给同一个元素绑定相同的多个事件，后面的会覆盖前面的
> ```
>
> 监听式
>
> ```js
> document.getElementById('btn1').addEventListener('click', function(event) {
>      alert(444);
>      // e/event:事件对象,包含事件相关的一些信息
>      // 包括发生事件的domm元素、事件类型以及其他特定事件的相关信息
>      console.log(event);
>      console.log('触发事件的元素', event.target);
> })
> // addEventListener:监听事件，可以给同一元素（标签）绑定多个事件
> // 参数一：事件类型，字符串，不要on前缀
> // 参数二：具体执行的函数（可以式匿名函数也可以是有名函数）
> // attachEvent:处理低版本ie的事件监听
> ```
>
> 移除事件监听
>
> ```js
> document.getElementById('btn1').removeEventListener('click', clickFun2);
> // removeEventListener:移除监听事件（主流浏览器）
> // detachEvent：移除监听事件（针对ie6-8)
> ```
>
> e/event的重要函数/属性
>
> | 函数/属性            | 说明                                                         |
> | -------------------- | ------------------------------------------------------------ |
> | e.target             | 事件的触发者（元素节点）                                     |
> | e.type               | 获得当前触发事件的类型                                       |
> | e.preventDefault()   | 阻止默认事件                                                 |
> | e.stopPropagation()  | 阻止事件冒泡                                                 |
> | e.pageX, e.pageY     | 获取鼠标(具体事件)位置，这个位置事相对于页面（文档）的相对坐标 |
> | e.clientX, e.clientY | 获取鼠标(具体事件)位置，相对于视图位置(浏览器整个页面)       |
> | e.screenX, e.screenY | 获取鼠标(具体事件)位置，相对于整个屏幕的位置                 |
> | e.offsetX, e.offsetY | 获取鼠标(具体事件)位置，相对于当前元素                       |
>
> 事件冒泡
>
> 由内到外一层一层的往外找(同类型的事件)，并执行

### 鼠标事件

> click（单击）
>
> ```js
> document.getElementById('box').addEventListener('click',function(){
>  //执行代码
> })
> ```
>
> dblclick（双击）
>
> ```js
> document.getElementById('box').addEventListener('dblclick',function(){
>  //执行代码
> })
> ```
>
> mouseover（鼠标移入）
>
> ```js
> document.getElementById('box').addEventListener('mouseover',function(){
>  //执行代码
> })
> ```
>
> mouseout（鼠标移出）
>
> ```js
> document.getElementById('box').addEventListener('mouseout',function(){
>  //执行代码
> })
> ```
>
> mousedown（鼠标按下）
>
> ```js
> document.getElementById('box').addEventListener('mousedown',function(){
>  //执行代码
> })
> ```
>
> mouseup（鼠标松开）
>
> ```js
> document.getElementById('box').addEventListener('mouseup',function(){
>  //执行代码
> })
> ```
>
> mousemove（鼠标移动）
>
> ```js
> document.addEventListener('mousemove',function(){
>  //执行代码
> })
> ```
>
> mousewheel（鼠标滚轮移动）
>
> ```js
> document.addEventListener('mousewheel',function(){
>  //执行代码
> })
> ```
>
> selectstart（鼠标选择）
>
> ```js
> document.addEventListener('selectstart',function(){
>  //执行代码
>  console.log('禁止选择');
>  e.preventDefault();
> })
> ```
>
> | 函数/属性            | 说明                                                         |
> | -------------------- | ------------------------------------------------------------ |
> | e.pageX, e.pageY     | 获取鼠标(具体事件)位置，这个位置事相对于页面（文档）的相对坐标 |
> | e.clientX, e.clientY | 获取鼠标(具体事件)位置，相对于视图位置(浏览器整个页面)       |
> | e.screenX, e.screenY | 获取鼠标(具体事件)位置，相对于整个屏幕的位置                 |
> | e.offsetX, e.offsetY | 获取鼠标(具体事件)位置，相对于当前元素                       |
>
> 偏移量offset
>
> <u>**元素盒子上的属性**</u>
>
> | 属性             | 说明                                                        |
> | ---------------- | ----------------------------------------------------------- |
> | box.offsetTop    | 相对于有定位的最近的父级的头部偏移量                        |
> | box.offsetLeft   | 相对于有定位的最近的父级的左侧偏移量                        |
> | box.offsetWidth  | 获取元素宽度，包括width+padding+border(只读)                |
> | box.offsetHeight | 获取元素高度，包括height+padding+border(只读)               |
> | box.style.width  | 只能获取内联样式的宽度,宽度不包括padding,border(可读，可写) |
> | box.offsetParent | 获取当前盒子的父级元素                                      |
>
> 

### 表单事件

> change
>
> ```js
> document.getElementById('inpBox').addEventListener('change',function(){
> //执行代码
> })
> //change:当内容改变并且失焦的时候触发，跟前一次一样也不会触发
> //也可以用在下拉框上(select)
> ```
>
> focus
>
> ```js
> document.getElementById('inpBox').addEventListener('focus',function(){
> //执行代码
> })
> //focus:获得焦点，点击input
> ```
>
> blur
>
> ```js
> document.getElementById('inpBox').addEventListener('blur',function(){
> //执行代码
> })
> //blur:失去焦点就触发(点击input以外的地方)，要先聚焦
> ```
>
> reset
>
> ```js
> document.getElementById('formmBox').addEventListener('reset', function(e) {
>     console.log('重置事件');
>      var is = confirm('确定要清楚吗');
>      if (!is) {
>          // 阻止表单的默认重置
>          e.preventDefault();
>       }
> })
> //reset:针对form表单这个对象，要设置在form上
> //或者对按钮(type=reset)设置click
> ```
>
> submit
>
> ```js
> document.getElementById('formmBox').addEventListener('submit', function(e) {
>     console.log('提交事件');
>      var is = confirm('确定要清楚吗');
>      if (!is) {
>          // 阻止表单的默认重置
>          e.preventDefault();
>       }
> })
> //submit:针对form表单这个对象，要设置在form上
> //或者对按钮(type=submit)设置click
> ```
>
> 

### 键盘事件

> | 键盘事件  | 说明                                                         |
> | --------- | ------------------------------------------------------------ |
> | keypress  | 按下键盘，功能键无法监听(shift,上下左右等)区分大小写         |
> | keydown   | 按下，能监听所有按键的按下动作，但是对于大小写字母只能返回大写字母的ASCII值 |
> | keyup     | 弹起，能监听所有按键的按下动作，但是对于大小写字母只能返回大写字母的ASCII值 |
> | e.keyCode | 事件对象的keyCode能返回普通按键的大小写对应的ASCII值         |
>
> 案例
>
> ```js
> document.getElementById('inpBox').addEventListener('keypress', function(e) {
>         console.log('press 按下', e.keyCode);
> });
> ```
>
> **<u>一般用keyup监听</u>**

## 内置对象

### String对象

> | 函数/属性                                                    | 说明                                                         |
> | ------------------------------------------------------------ | ------------------------------------------------------------ |
> | str.charAt(index)                                            | 根据索引值返回对应的字符(从0计算)                            |
> | str.indexOf('abc')                                           | 返回字符串(字符)首次出现的位置(索引值),若找不到返回-1        |
> | str.lastIndexOf('abc')                                       | 返回字符串(字符)最后一次出现的位置(索引值),若找不到返回-1    |
> | str.substring(start,end)                                     | 返回索引值之间的字符(包括左边不包括右边)==>[),不改变原字符串 |
> | str.substr(start, length)                                    | 返回索引值到规定长度之间的字符(第二个参数是长度),不改变原字符串 |
> | str.toLocaleUpperCase(),str.toUpperCase()                    | 将字符串转为大写,不改变原字符串                              |
> | str.toLocaleLowerCase(),str.toLowerCase()                    | 将字符串转为小写,不改变原字符串                              |
> | var str2 = '今\|天\|周\|四';             str2.split('\|', length); | 使用分割符将字符串分成数组,参数2表示限制长度(可无)           |
> | str2.repeat(count)                                           | 重复,不改变原字符串                                          |
> | str.trim()                                                   | 去除首尾空格,不改变原字符串                                  |
> | str.replace(str1, str2)                                      | 使用str2替换str1，返回替换结果,不改变原字符串                |
> | str.length                                                   | 返回字符串长度                                               |

### Number对象

> | 函数/属性        | 说明                                                         |
> | ---------------- | ------------------------------------------------------------ |
> | Number.MAX_VALUE | js中的最大值                                                 |
> | Number.MIN_VALUE | js中的最小值                                                 |
> | num.toFixed(n)   | 1.确定小数点后保留几位（四舍五入） 2.  不给参数直接四舍五入取整3. 若参数值大于小数点后的位数，自动补0 |

### Math对象

> | 函数/属性                | 说明              |
> | ------------------------ | ----------------- |
> | Math.PI                  | 圆周率            |
> | Math.abs(num)            | 绝对值            |
> | Math.max(n1, n2, n3, n4) | 返回最大值        |
> | Math.min(n1, n2, n3, n4) | 返回最小值        |
> | Math.ceil(num)           | 向上取整,往大值取 |
> | Math.floor(num)          | 向下取整,往小值取 |
> | Math.round(num)          | 四舍五入取整      |
> | Math.random()            | 随机数[0,1)       |
>
> random说明
>
> ```js
> // Math.random()*(n-m)+m:表示[m,n)的随机数
> //Math.floor(Math.random() * (n-m+1) + m)生成[m,n]的随机整数
> 
> //[1,100]的整数
> Math.floor(Math.random()*100+1)
> ```

### Date对象

> var date=newDate();
>
> | 函数                   | 说明                                        |
> | ---------------------- | ------------------------------------------- |
> | date.toString()        | 转变为字符串                                |
> | date.getFullYear()     | 获取当前年份                                |
> | date.getMonth()        | 获取当前月份,从0开始计算，0表示一月         |
> | date.getDate()         | 获取当前天                                  |
> | date.getDay()          | 返回周几，注意：周天的数字是0，周六:6       |
> | date.getHours()        | 获取当前几点                                |
> | date.getMinutes()      | 获取当前几分                                |
> | date.getSeconds()      | 获取当前几秒                                |
> | date.getMilliseconds() | 获取当前毫秒                                |
> | date.getTime()         | 获取事件戳(),返回自 1970/01/01 以来的毫秒数 |
>
> 设置时间的具体方式
>
> ```js
> //传多个参数,月份记得减1
> //年,月,日,时,分,秒
> var date1 = new Date(2022, 10, 25, 10, 28, 50);
> 
> //传字符串,月份正常不减1
> var date2 = new Date('2022-11-9 10:48:50');
> 
> //传时间戳
> var time = new Date(1669344677913);
> ```

### Array数组

> 数组创建
>
> ```js
> var arr=[1,2,3];
> var arr=[];
> var arr=new Array();
> var arr=new Array(1,2);
> ```
>
> 几种遍历方式
>
> ```js
> var arr=[1,2,3];
> 
> //普通的for循环
> for(var i=0;i<arr.length;i++){
>     //主体代码
> }
> 
> //for...in循环
> //key表示索引值，如果arr是对象，key表示属性名
> //key是字符类型
> for(var key in arr){
>     console.log(arr[key]);
> }
> 
> //forEach(回调函数)
> //参数一：元素值，参数二：索引
> arr.forEach(function(value,idx){
>     console.log('值',value);
>     console.log('索引',idx);
> })
> 
> //for...of:
> //item表示元素值
> for(var item of arr){
>     console.log('值',item);
> }
> ```
>
> 相关函数
>
> | 函数/属性                                    | 方法                                                         |
> | -------------------------------------------- | ------------------------------------------------------------ |
> | arr.length                                   | 返回数组长度                                                 |
> | arr.push(value)                              | 在数组尾部添加元素，并返回新数组的长度，**<u>会改变原数组</u>** |
> | arr.unshift(value)                           | 在数组头部添加元素，并返回新数组的长度，**<u>会改变原数组</u>** |
> | arr.shift()                                  | 移除数组头部元素，并返回被移除的元素，**<u>会改变原数组</u>** |
> | arr.pop()                                    | 移除数组尾部元素，并返回被移除的元素，**<u>会改变原数组</u>** |
> | arr.toString()                               | 将数组转为字符串,不会影响原数组                              |
> | arr.join(chars)                              | 里面的参数可以是任意字符(参数可为空)，字符会将转换后的字符串连接在一起,不会影响原数组 |
> | arr.sort()                                   | 升序排序，**<u>会改变原数组</u>**,有bug,超过两位数不能排(<u>**改进方法看下面**</u>) |
> | arr.reverse()                                | 数组反序，**<u>会改变原数组</u>**                            |
> | arr.splice(start,length,addstr1,...,addstr2) | 1.删除，添加数组元素,**<u>会改变原数组</u>** 2.返回的内容是删除后的(不包括添加的),原数组是剩下添加后的内容 3.参数一：开始位置的索引值（下标） 参数二：删除的数量（个数）4.参数三....:添加的元素，可以是多个，添加位置从参数一的位置开始放 |
> | arr1.concat(arr2)                            | 将数组结合在一起，不会影响原数组                             |
> | arr.indexOf(value)                           | 查询元素，有就返回首次出现的下标，没有就返回-1               |
> | arr.lastIndexOf(value)                       | 查询元素，有就返回最后一次出现的下标，没有就返回-1           |
> | arr.find()                                   | 查询元素,**<u>详见下面</u>**                                 |
> | Array.from(Elements)                         | 把伪数组转为数组,**<u>详见下面</u>**                         |
>
> sort方法改进
>
> ```js
> // 超过两位数的排序
> var arr = [15, 3, 8, 2, 7];
> console.log(arr.sort(sortFun), arr);
> 
> function sortFun(a, b) {
>   // return a - b; //升序
>   return b - a; //降序
> }
> ```
>
> find函数详解
>
> ```js
> // find():查询元素，内含隐式循环(如果数组中的元素满足测试条件，就会被返回)
> // 参数一：元素值，参数二：下标,参数三：原数组
> //无法返回index,只能返回val
> var res = arr6.find(function(val, index, arr) {
>     console.log('find val', val);
>     console.log('find index', index);
>     console.log('find arr', arr);
>     //返回一个元素，找到一个后就会立即停止
>     return val == 'html';
> })
> ```
>
> Array.from()函数详解
>
> ```js
> // 把伪数组转为数组
> //参数是元素节点(多个)
> var uls = document.querySelectorAll('ul');
> console.log('uls', uls);//NodeList
> 
> uls = Array.from(uls);
> console.log('uls', uls);//Array
> ```
>
> 

## 页面加载

```js
//window.onload: 当页面加载完后再执行
//动态绑定事件也是后面的会覆盖前面的
window.onload = function() {
	document.getElementById('box').onclick = function() {
    console.log('点击');
  }
}

window.addEventListener('load', function() {
    alert('223');
})
```

## 监听窗口变化

```js
window.onresize = function(e) {
   console.log('e', e);
   console.log('width', window.innerWidth);
}
window.addEventListener('resize', function(e) {
    //主体
})
```

## 解决问题

### js-tab切换

方法一

```js
//将事件绑定在父级元素
//并给切换的子级data-index='0'属性
//设置currentIndex放置上一个tab的序号
//将上一个点击的tab样式清空，再给当前tab设置样式
var parent=document.getElementById('parent');
var childItems=parent.childeren;
let currentIndex=0;//初始状态(上一个)
parent.addEventListener('click',function(e){
    let index=e.target.dataset.index;
    if(index){
        let idx=parseInt(index);
        childrenItems[currentIndex].className='';
        childrenItem(idx).classList.add('current');
        //e.target.classList.add('current');
        currentIndex=idx;
    }
})
```

方法二

```js
//将事件绑定在父级元素
//并给切换的子级data-index='0'属性(主要为了确保不是parent)
//先将含有.current的样式移除或置空，在设置当前样式
var parent=document.getElementById('parent');
var childItems=parent.childeren;
parent.addEventListener('click',function(e){
    let index=e.target.dataset.index;
    if(index){
        parent.getElementsByClassName('current').className='';
        e.target.classList.add('current');
    }
})
```

方法三

```js
//for循环方式给每一个子级tab添加事件(var)
//并给切换的子级节点加上index属性(从0开始编号)
//设置currentIndex放置上一个点击的tab的序号
//将上一个点击的tab样式清空，再给当前tab设置样式
var parent=document.getElementById('parent');
var childItems=parent.childeren;
let currentIndex=0;//初始状态(上一个)
for(var i=0;i<childrenItems.length;i++){
    var childItems[i].index=i;
    childItems[i].onclick=function(e){
        childrenItems[currentIndex].className='';
        this.classList.add('current');
        currentIndex=this.index;
    }
}

```

方法四

```js
//for循环方式给每一个子级tab添加事件(let)
//并给切换的子级节点加上index属性(从0开始编号)
//设置currentIndex放置上一个点击的tab的序号
//将上一个点击的tab样式清空，再给当前tab设置样式
var parent=document.getElementById('parent');
var childItems=parent.childeren;
let currentIndex=0;//初始状态(上一个)
for(let i=0;i<childrenItems.length;i++){
    childItems[i].onclick=function(e){
        childrenItems[currentIndex].className='';
        this.classList.add('current');
        currentIndex=i;
    }
}
```

### 倒计时

```js
//1.获取当前时间戳
var currentTime = date.getTime();
//2.获取截止时间戳
var endTimeStr='2022.11.30 20:00:00'
var endTime = new Date(endTimeStr).date.getTime();
//3.计算时间差,并转换为秒
var timeDiff=(endTime-currentTime)/1000;
//开启定时器
var timer=setInterval(function(){
    //4.终止条件
    if(timeDiff<=0){
        clearInterval(timer);
        box.innerHTML='计时结束';
        return;
    }
    //5.时间转换
     var hours = 0,
         minute = 0,
         second = 0;
     if (timeDiff > 0) {
         hours = Math.floor(timeDiff / 60 / 60);
         minute = Math.floor(timeDiff / 60 % 60);
         second = Math.floor(timeDiff % 60);
       }
    //6时间渲染
    box.innerHTML=`${hours}:${minute}:${second}`;
    timeDiff--;
})
```

### 图片拖拽

```js
//dropbox:触发的盒子
//box:移动的盒子
//基于document页面文档的可直接用e.pageX
//要基于某个元素的可用e.offsetX

//1.按下鼠标
dropbox.addEventListener('mousedown',function(e){
    //2.获取鼠标在盒子的位置=鼠标在文档上上的位置-盒子的初始偏移量
     var mouseX=e.pageX-box.offsetLeft,
         mouseY=e.pageY-box.offsetTop;
    //3.鼠标移动
    document.addEventListener('mousemove',moveFun)
    function moveFun(){
        box.style.left = e.pageX - mouseX + 'px';
        box.style.top = e.pageY - mouseY + 'px';
    }
    //4.鼠标松开
    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', moveFun)
    })
})

```

### 数组去重

```js
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'c'];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    // 用新数组跟旧数组做匹配，新数组没有就添加
    if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
     }
}
```

