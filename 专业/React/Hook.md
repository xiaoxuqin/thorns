## Hook（字节）

钩子函数，在系统没有调用该函数之前，钩子程序先捕获该消息，钩子函数先得到控制权，这时钩子函数既可以加工处理（改变）该函数的执行行为，还可以强制结束消息的传递。简单来说。就是把系统的程序拉出来变成我们自己执行代码片段。

要实现钩子函数，有两个步骤：

1. 利用系统内部提供的接口，通过实现该接口，然后注入进系统（特定场景下使用）
2. 动态代理（使用所有场景）

##### React中内置的Hook API

*Hook* 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性,

##### 基础Hook：

- [`useState`](https://react.docschina.org/docs/hooks-reference.html#usestate)
- [`useEffect`](https://react.docschina.org/docs/hooks-reference.html#useeffect)
- [`useContext`](https://react.docschina.org/docs/hooks-reference.html#usecontext)

##### 额外8的Hook

- [`useReducer`](https://react.docschina.org/docs/hooks-reference.html#usereducer)
- [`useCallback`](https://react.docschina.org/docs/hooks-reference.html#usecallback)
- [`useMemo`](https://react.docschina.org/docs/hooks-reference.html#usememo)
- [`useRef`](https://react.docschina.org/docs/hooks-reference.html#useref)
- [`useImperativeHandle`](https://react.docschina.org/docs/hooks-reference.html#useimperativehandle)
- [`useLayoutEffect`](https://react.docschina.org/docs/hooks-reference.html#uselayouteffect)
- [`useDebugValue`](