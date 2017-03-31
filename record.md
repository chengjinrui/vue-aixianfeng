
# 项目记录

>1.轮播图<br>

注意点:
    - 组件\ 引swiper的位置--直接在这个组件里面引
    - swiper不仅仅有js 还有css 两个都要引 \ css在style里面@import url('swiper.css')
    - Vue的生命周期很重要
    - 先写了死数据 验证是否成功 如果是死数据的话 直接在mounted(){} 里面写之前写的那些js代码就o了
        以后写的时候在created(){}和mounted里面来回试试
    - 写活数据的时候 只要在mounted(){}里面loadDate() 并且在 updated(){}里面写那段js代码->var swiper = new Swiper的那段
    - 千万不要在mouted(){}里面写了loadData()之后写loadSwiper() 然后在updated里面又写loadSwiper() 只需要在updated里面写一次就行了 不然会出现鼠标滑动轮播图 滑动半截的情况


>2.底部动态变化<br>
    方法: watch 监听路由的变化 vm.$router.currentRoute.path
    - 注意在页面拼接字符串的时候有坑 自己要会写
    ```
    <span><img :src="'../static/images/footer/mine'+index_mine+'.png'" alt=""></span>
    ```

>3.主页框架完成<br>
    晚上的1个小时左右完成
