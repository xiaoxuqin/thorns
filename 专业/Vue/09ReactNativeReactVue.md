#### 1. React-Native与一般的网页（HTML，CSS，JS）有什么区别？

1. 标签不同

   容器    div——View

   图片    img——Image

​       文字    所有双标签——Text

​       背景    background——ImageBackground

react native中所有的标签首字母必须大写，而html标签标准都是小写

react native中所有需要输出的文字必须使用`<Text></Text>`包裹,而HTML里面的双标签都可以包裹文字

HTML中的图片:`<img src="a.jpg"/>`,react native中的图片必须指定宽高:`<Image source={require(“a.png”)} style={{width:100,height:100}}/>`

2. 布局样式不同

react native中不存在float，也不支持position:fixed，而是采用的flex布局

react native中的absolute默认相对于父级，就算父级没有定位，而css中的absolute是向上寻找的相对点，如果父级没有定位，一直往上找定位参考点

react native中的flex的flexDirection默认值是:column， 而css中的默认值是row

react native中的高度等于父级高度使用flex:1 ，而web的css中使用height:100%，react native中没有百分比的概念

3. 结构不同

html加载的时候是自上而下的阻塞式加载，而react native根据生命周期来渲染，跟写的位置无关，

4. 页面跳转不同

html中使用a标签或者window.location.href来跳转页面，react native的路由跳转有多种方案,可以根据自身选择，官方推荐react-navigation，还有react-native-router-flux,navigator等

5. js运行环境不同

web中的js运行在浏览器，最上级是window，而react native里没有window的概念,组件化最上级是global,挂在global下面是跨组件的，例如global.a=1，那么在所有组件都能使用a，所以一般登录成功后把token挂在global上面，在其他任何页面请求数据的时候可以直接使用token，注销登录就清除token

##### 基本概念解释：

https://blog.csdn.net/xiangzhihong8/article/details/54425807

react-native是一个可以使用JavaScript来开发iOS和Android原生应用（ app）的框架。

##### React-native的工作原理

在页面渲染上，它是使用JavaScript抽象原生的UI组件来进行渲染的。

在通讯上，React Native运行在主线程之外，在另一个专门的后台线程里运行JavaScript引擎，两个线程之间通过异步消息协议来通信。

在UI方面，React Native提供了一个跨平台、类似Flexbox的布局系统，并且还支持CSS子集。 它支持用JSX、JavaScript、CoffeeScript和TypeScript来开发。



#### 2. vue和React-Native的相同和不同之处？









#### 3. Vue和React的相同和不同点

相同：

支持服务器端渲染；

都有虚拟DOM，组件化开发，用JS模拟DOM结构

提供了响应式(Reactive)和组件化（Composable）的视图组件。



不同：

React严格上只针对MVC的view层，Vue则是MVVM模式（模型-视图-视图模型）

virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需shouldComponentUpdate 这个生命周期函数方法来进行控制

数据绑定：vue实现了数据的双向绑定,react数据流动是单向的





#### 4. Vue-Router的传递？

分为两大类

1. 编程式导航： router.push

 直接传递路由地址，但是不能传递参数`this.$router.push("home")`

命名路由：this.$router.push({name:"news",params:{userId:123})（目标页面刷新会报错）

查询参数： this.$router.push({path:"/news',query:{uersId:123}) 



2. 声明式的导航： `<router-link>`

​            字符串` <router-link to:"news"></router-link>`

​            命名路由 `<router-link :to:"{name:'news',params:{userid:1111}}"></route-link>`

​            查询参数 ` <router-link :to="{path:'/news',query:{userId:1111}}"></router-link>`

















