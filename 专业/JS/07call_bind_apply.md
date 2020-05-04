## bind、call、apply

##### bind、call、apply

都是用来修改函数中的this，

传参时，**call一个个传参；apply数组形式传参；**

call和apply立即执行并且返回值是调用的方法的返回值，若没有，则返回undefined

bind改变this后返回一个新的函数，不会立即执行

###### call

第一个参数是绑定给this的值，后面传入一个参数列表，当第一个参数为null,undefined时，默认指向window

```js
obj1.fn() 
obj1.fn.call(obj1);

fn1()
fn1.call(null)

f1(f2)
f1.call(null,f2)
```

###### apply

第一个参数是绑定给this的值，第二个参数是一个参数数组，当第一个参数为null、undefined的时候，默认指向window。

```js
obj1.fn() 
obj1.fn.apply(obj1);

fn1()
fn1.apply(null)

f1(f2)
f1.apply(null,f2)
```

apply 和 call用法几乎相同，唯一的差别在于：当函数需要传递多个变量时，apply可以接受一个数组作为参数输入，call则接受一系列的单独变量。

###### bind

第一个参数是this的指向，第二个参数开始是接受的参数列表。

区别在于bind方法返回值是函数以及bind接收的参数列表的使用。**它的返回值是函数。**

bind方法不会立即执行，而是**返回一个改变上下文this后的函数，而原函数的this并没有被改变，依旧指向全局对象window**

```js
/**
 * call
 * 1. 给函数附加一个属性
 * 2. 执行这个属性
 * 3. 删除属性
 */
// a.call(obj, 1,2,3);
function myCall(context) {  
    var context = context || window;
    context.lxh = this;
    var args = [];
    for(var i=1; i<arguments.length; i++){
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.lxh(' + args + ')');
    delete context.lxh;
    return result;
}


/**
 * apply
 * 1. 把函数作为对象的属性
 * 2. 执行函数
 * 3. 删除函数
 */
function myApply(context,arr) {  
    var context = context ||window;
    context.lxh = this;
    var result;
    if(!arr){
        result = context.lxh();
    }else{
        var args = [];
        for(var i=0; i<arr.length; i++){
            args.push('arr[' + i + ']');
        }
        result = eval('context.lxh(' + args + ')');
    }
    delete context.lxh;
    return result;
}

/**
 * bind
 * 返回一个函数，传入多个参数
 */
A = Animal.bind(Cat,name)
a = new A(age);

function myBind1(context) {  
    if(typeof this !== 'function') throw new Error('not function');
    var self = this;
    var args1 = Array.prototype.slice.call(arguments,1);
    var Fn = function () {  
        var args1 = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof context?this:context,args1.concat(args2))
    }
    var Fmiddle = function () {  }
    Fmiddle.prototype = this.prototype;
    Fn.prototype = new Fmiddle();
    return Fn;
}

// ES6
function myBind2(context, ...args1) {  
    var self = this;
    var Fn = function (...args2) {  
        return self.apply(this instanceof context?this:context,args1.concat(args2));
    }
    var Fmiddle = function () {  }
    Fmiddle.prototype = this.prototype;
    Fn.prototype = new Fmiddle();
    return Fn;
}
```



