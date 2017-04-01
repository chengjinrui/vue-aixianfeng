
# 项目记录

>1.轮播图<br>

注意点:
    - 组件\ 引swiper的位置--直接在这个组件里面引<br>
    - swiper不仅仅有js 还有css 两个都要引 \ css在style里面@import url('swiper.css')<br>
    - Vue的生命周期很重要<br>
    - 先写了死数据 验证是否成功 如果是死数据的话 直接在mounted(){} 里面写之前写的那些js代码就o了
        以后写的时候在created(){}和mounted里面来回试试<br>
    - 写活数据的时候 只要在mounted(){}里面loadDate() 并且在 updated(){}里面写那段js代码->var swiper = new Swiper的那段<br>
    - 千万不要在mouted(){}里面写了loadData()之后写loadSwiper() 然后在updated里面又写loadSwiper() 只需要在updated里面写一次就行了 不然会出现鼠标滑动轮播图 滑动半截的情况<br>


>2.底部动态变化<br>
    方法: watch 监听路由的变化 vm.$router.currentRoute.path
    - 注意在页面拼接字符串的时候有坑 自己要会写
    ```
    <span><img :src="'../static/images/footer/mine'+index_mine+'.png'" alt=""></span>
    ```

>3.主页框架完成<br>
    晚上的1个小时左右完成


>4.主页面part部分请求数据的问题 <br>

    -拿到了新的数据 行内样式表怎么写? 用的是请求来的数据

>5.闪送超市全部

    - 如何获得服务器中的数据 然后判断有无 有的话就显示到页面
    - map和forEach的区别 用法都是一样的 但是map可以修改数组中的值然后再返回回去
    - 左边和右边的高度把握有问题
    - boostrap 框架怎么引入
    - 页面结构需要采用来自服务器的数据 删掉重复的结构的时候注意一定要留一个自己原先写的 切记 上线的时候再清掉
