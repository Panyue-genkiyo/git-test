//立即执行函数 输出结果”John love u !!!“
(function(){
    //局部变量 避免全局污染与typescript中的name冲突
   let name: string = 'John';  
   let a = () => (
     function(){
        console.log(name + ' love u !!!');
     }
   )
})();
