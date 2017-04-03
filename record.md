
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

    - 如何获得服务器中的数据 然后判断有无(是否是空) 有的话就显示到页面 没有就不显示
    - map和forEach的区别 用法都是一样的 但是map可以修改数组中的值然后再返回回去
    - 左边和右边的高度把握有问题
    - boostrap 框架怎么引入
    - 页面结构需要采用来自服务器的数据 删掉重复的结构的时候注意一定要留一个自己原先写的 切记 上线的时候再清掉
    - 闪送超市的加减号有问题<br>

>6.看看购物车能写多少<br>

>7.boostrap 最low的改法 融合vue<br>

npm install boostrap
然后查看下载下来的bootstrap包里面的font文件的位置
然后去找bootstrap的css ctrl+f 查找url 有五个url和font有关 把之前的路径改到这里面来 就ok了
<!-- 最后在main.js 里面 import '这里写bootstrap.css的路径' -->
之前写的引入方法有问题 bootstrap有他定义的样式 在main.js引入之后 会影响我的页面 解决办法在当前组件的script标签下面
直接写import '../../../lib/bootstrap.css'

>8.发现一个重大的弊端 我咋market_showGood 页面要显示category对应的商品详情 而且要实现点击加号的时候显示对应的某一个商品的减号

-1. 我原先的思路  :goodArr="currentGoodArr" 根据接口的变化影响 market_showGood.vue 组件的页面渲染 然后相应的parent component的页面就会发生变化<br>
点击 加号的时候 改变了数组里面的flag_shouldShow的值 这样 通过改变了 子组件的数组 同时改变了父组件的数组  vue会给一个警告 <br>
我注意到 这个办法行不通啊 因为我的currentGoodArr 只有一个 每次都根据category的值不同 从allGoodsArr里面取值 这样我一切换我的category 数组里面的flag_shouldShow 又恢复到初始化的false了  <br>

__解决方案__<br>

-2. 为了解决上面的问题 我想到angularJs里面的服务 应该用一个全局的变量来做中间量 这个全局变量 肯定是在我的main.js里面的那个vm实例 初步打算将这个全局变量搞成数组的形式 里面存取原先allGoodsArr存的东西 并且应该以(key, value)的形式 方便取值和修改 <br>

-3.嘿嘿 成功! 机智如我 美中不足就是通过修改子组件影响到了父组件中的东西 vue还会给警告 我暂时还没有很好的思路 要想一想<br>  但是页面出现减号以后已经不会再消失了 <br>
-4.我也是够笨 我直接去修改全局变量里面的属性不就行了吗 费那劲去搞什么子组件父组件的 尴尬 vue警告已经解决 而且我把当前商品所在数组的id一并传过去了 省了n多麻烦 哈哈哈哈哈 成功 <br>
-5.一波三折啊 新的bug出现了 我切换到主页或者其他页面再回来的时候 闪送超市的减号又消失了 不难发现是因为重新初始化的缘故 所以要在这判断全局的是不是空 如果为空 就初始化 不为空就不初始化 直接用值
