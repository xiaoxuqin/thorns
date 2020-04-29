#### 封装DOM查询

```js
function Elem(id){
    this.elem = document.querySelector(id);
}

Elem.prototype.html = function(val){
    var elem = this.elem;
    if(val){
        elem.innerHTML = val;
        return this; // 链式操作
    } else {
        return elem.innerHTML;
    }
}

Elem.prototype.on = function(type,fn){
	var elem = this.elem;
    elem.addEventListener(type,fn);
    return this;
}

var div1 = new Elem('#div1');
// console.log(div1.html());
div1.html('<p>hello immoc</p>');
div1.on('click',function(){
    alert('clicked');
});
// 链式操作
div1.html('<p>hello immoc</p>').on('click',function(){
    alert('clicked');
})；
```

