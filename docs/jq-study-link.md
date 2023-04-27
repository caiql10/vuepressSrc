

# jq笔记

## 选择器

### 属性选择器

| Selector [name\|="value"\]                                   | **选择指定属性值等于给定字符串或以该字符串为前缀（该字符串后跟一个连字符“-” ）的元素。** |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Selector [name*="value"\]                                    | 选择指定属性具有包含一个给定的子字符串的元素。（选择给定的属性是以包含某些值的元素） |
| Selector [name~="value"\]                                    | 选择指定属性用空格分隔的值中包含一个给定值的元素。           |
| Selector [name$="value"\]                                    | 选择指定属性是以给定值结尾的元素。这个比较是区分大小写的。   |
| Selector [name!="value"\]                                    | 选择不存在指定属性，或者指定的属性值不等于给定值的元素。     |
| https://www.jquery123.com/category/selectors/attribute-selectors/ | 其余可在该网址查看                                           |

### 基础选择器

| ('*')                   | 选择所有元素.                              |
| ----------------------- | ------------------------------------------ |
| ('.class')              | 选择给定样式类名的所有元素。               |
| ('element')             | 根据给定（html）标记名称选择所有的元素。   |
| ('#id')                 | 选择一个具有给定id属性的单个元素。         |
| ('selector1,selecyor2') | 将每一个选择器匹配到的元素合并后一起返回。 |

### 基础过滤

| :animated                                                    | 选择所有正在执行动画效果的元素.                         |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| :eq()                                                        | 在匹配的集合中选择索引值为index的元素。                 |
| :even()                                                      | 选择所引值为偶数的元素，从 0 开始计数。 也可以查看 odd. |
| :first                                                       | 选择第一个匹配的元素。                                  |
| :focus                                                       | 选择当前获取焦点的元素。                                |
| :gt()                                                        | 选择匹配集合中所有大于给定index（索引值）的元素。       |
| :header                                                      | 选择所有标题元素，像h1, h2, h3 等.                      |
| :last                                                        | 选择最后一个匹配的元素。                                |
| :lt()                                                        | 选择匹配集合中所有索引值小于给定index参数的元素。       |
| :not()                                                       | 选择所有元素去除不匹配给定的选择器的元素。              |
| https://www.jquery123.com/category/selectors/basic-filter-selectors/ | 可在此网址查看更多                                      |

### 子元素过滤

| :first-child                                                 | 选择所有父级元素下的第一个子元素。                          |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| :first-of-type                                               | 选择所有相同的元素名称的第一个兄弟元素。                    |
| :nth-child()                                                 | 选择的他们所有父元素的第n个子元素。                         |
| :nth-of-type()                                               | 选择同属于一个父元素之下，并且标签名相同的子元素中的第n个。 |
| https://www.jquery123.com/category/selectors/child-filter-selectors/ | 可在此网址查看更多                                          |

### 内容过滤

| :contains() | 选择所有包含指定文本的元素。                     |
| ----------- | ------------------------------------------------ |
| :empty      | 选择所有没有子元素的元素（包括文本节点）。       |
| :has()      | 选择元素其中至少包含指定选择器匹配的一个种元素。 |
| :parent     | 选择所有含有子元素或者文本的父级元素。           |

### 表单

| :button                                                      | 选择所有按钮元素和类型为按钮的元素。 |
| ------------------------------------------------------------ | ------------------------------------ |
| :checkbox                                                    | 选择所有类型为复选框的元素。         |
| :checked                                                     | 匹配所有勾选的元素。                 |
| https://www.jquery123.com/category/selectors/form-selectors/ | 可在此网址查看更多                   |

## 元素操作

### class属性

> .addClass()
>
> ```js
> $("p").addClass("myClass yourClass");
> ```
>
> .hasClass()===>返回Boolean值
>
> ```js
> $("p").hasClass("foo");
> ```
>
> .removeClass()
>
> ```js
> $("p").removeClass("myClass");
> ```
>
> .toggleClass()
>
> ```js
> $("p").toggleClass("yourClass");
> ```
>
> 

### 节点操作

#### js对象和jq对象转换

```js
//转为js对象
var $doc = $(document);
 console.log($doc[0]);
 console.log($doc.get(0));
```



#### 插入元素(子级)

> .append(content)===>添加到前面的指定元素的子级的尾部
>
> content:String,Element,jq
>
> ```js
> //1.现有元素移动
> $('.box').append($('h1'))
> //2.创建元素
> $('.box').append($('<h1>aa</h1>'))
> $('.box').append('<h1>aa</h1>')
> ```
>
> appendTo(target)===>添加到后面的指定元素的子级的尾部
>
> target:selector,Element,jq
>
> ```js
> //1.现有元素移动
> $('h1').appendTo('.box')
> //2.创建元素
> $('<h1>aa</h1>').appendTo($('.box'))
> ```
>
> .prepend()和prependTo()和append(),appendTo()类似
>
> ------
>
> html()===>获取集合中第一个匹配元素的HTML内容 设置每一个匹配元素的html内容(会覆盖全部子级) 
>
> ```js
> $('div.demo-container').html();
> $('div.demo-container').html('<p>All new content. <em>You bet!</em></p>');
> ```
>
> text()===>得到匹配元素集合中每个元素的合并文本，包括他们的后代设置匹配元素集合中每个元素的文本内容为指定的文本内容。 			
>
> ```js
> <p><b>Test</b> Paragraph.</p>
> $("p:first").text();
> //Test Paragraph.
> ```
>
> 

#### 插入元素(兄弟级)

> before(content)===>根据参数设定，在匹配元素的前面插入内容
>
> content:String,Element,jq
>
> ```js
> $('.inner').before('<p>Test</p>');
> $('.inner').before($('<p>Test</p>'));
> $('.container').before($('h2'));
> ```
>
> insetBefore(target)===>在目标元素后面插入集合中每个匹配的元素
>
> target:Selector,Element,jq
>
> ```js
> $('h2').insertBefore($('.container'));
> $('<p>Test</p>').insertBefore('.inner');
> ```
>
> after和innerAfter()和上面类似

#### 移出元素(子级)

```js
$('ul').empty();
$('ul').html('');
```

#### 移出元素(包括本身)

```js
$('ul').remove();
$('ul li').remove('.item');
```

#### 替换

> replaceWith(content)===>将所有匹配到的元素(box1),替换成指定的元素（h1),原本的h1 不存在了
>
> content:String,Element,jq
>
> ```js
> $('div.second').replaceWith('<h2>New heading</h2>');
> $('div.second').replaceWith($('<h2>New heading</h2>'));
> $('div.third').replaceWith($('.first'));
> ```
>
> replaceAll(target)===>用集合的匹配元素替换每个目标元素。
>
> target:selector 			
>
> ```js
> $('.first').replaceAll('.third');
> $('<h2>New heading</h2>').replaceAll('.inner');
> ```
>
> 

## 遍历(查找)

### 树遍历

> children([selector])
>
> ```js
> $('ul.level-2').children().css('background-color', 'red');
> ```
>
> .find( selector )
>
> 通过一个选择器，jQuery对象，或元素过滤，得到当前匹配的元素集合中每个元素的后代。
>
> ```js
> $('li.item-ii').find('li').css('background-color', 'red');
> 
> var $allListElements = $('li');
> $('li.item-ii').find( $allListElements );
> 
> var item1 = $('li.item-1')[0];
> $('li.item-ii').find( item1 ).css('background-color', 'red');
> ```
>
> next([selector])
>
> 取得匹配的元素集合中每一个元素**紧邻**(后面一个)的后面同辈元素的元素集合。如果提供一个选择器，那么只有紧跟着的兄弟元素满足选择器时，才会返回此元素。
>
> ```js
> $('li.third-item').next().css('background-color', 'red');
> $("p").next(".selected").css("background", "yellow")
> ```
>
> nextAll([selector])
>
> 获得每个匹配元素集合中所有下面的同辈元素，选择性筛选的选择器。
>
> ```js
> //如果我们从第三个项目开始，我们可以找到它之后的元素
> $('li.third-item').nextAll().css('background-color', 'red');
> ```
>
> prev([selector])
>
> 取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合。选择性筛选的选择器。
>
> prevAll([selector])
>
> 获得集合中每个匹配元素的所有前面的兄弟元素，选择性筛选的选择器。
>
> parent([selector])
>
> 取得匹配元素集合中，每个元素的父元素，可以提供一个可选的选择器。 	
>
> parents([selector])
>
> 获得集合中每个匹配元素的祖先元素，可以提供一个可选的选择器作为参数。		 	
>
> .siblings([selector])
>
> 获得匹配元素集合中每个元素的兄弟元素,可以提供一个可选的选择器。
>
> .offsetParent()	
>
> 取得离指定元素最近的含有定位信息的祖先元素。含有定位信息的元素指的是，CSS 的 position 属性是 relative, absolute, 或 fixed 的元素。

### 过滤

> .eq(index)
>
> 匹配元素的集合为指定的索引的那一个元素。
>
> .filtetr()
>
> 筛选元素集合中匹配表达式 或 通过传递函数测试的 那些元素集合。
>
> ```js
> $('li').filter(':even').css('background-color', 'red');
> 
> $('li').filter(function(index) {
>   return index % 3 == 2;
> }).css('background-color', 'red');
> ```
>
> .first()
>
> 获取匹配元素集合中第一个元素。
>
> .has( selector )
>
> 筛选匹配元素集合中的那些有相匹配的选择器或DOM元素的后代元素。
>
> ```js
> $('li').has('ul').css('background-color', 'red');
> $("ul").append("<li>" + ($("ul").has("li").length ? "Yes" : "No") + "</li>");
> ```
>
> .is( selector )
>
> 判断当前匹配的元素集合中的元素，是否为一个选择器，DOM元素，或者jQuery对象，如果这些元素至少一个匹配给定的参数，那么返回`true`。
>
> ```js
> $("ul").click(function(event) {
>   var $target = $(event.target);
>   if ( $target.is("li") ) {
>     $target.css("background-color", "red");
>   }
> });
> ```
>
> .last()
>
> 获取匹配元素集合中最后一个元素。 
>
> .map(callback(index, domElement) )		
>
> 通过一个函数匹配当前集合中的每个元素,产生一个包含新的jQuery对象。
>
> .not(selector)
>
> 从匹配的元素集合中移除指定的元素。	

