
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
-5.一波三折啊 新的bug出现了 我切换到主页或者其他页面再回来的时候 闪送超市的减号又消失了 不难发现是因为重新初始化的缘故 所以要在这判断全局的是不是空 如果为空 就初始化 不为空就不初始化 直接用值<br>

>9.今天的主要任务 完善购物车功能 以及实现登录验证功能 加上懒加载

-1.小记一下我感觉之前的购物车的缺点  虽然在闪送超市点击加减以及数量变化都能反应到我的购物车中 但由于我直接操纵的是$root中的数据 是需要从头到尾遍历的 这种方式在目前为止有两个显著的不足之处: 1.就是从头到尾遍历对性能的消耗比较大 2.新加入购物车的商品按照他在$root中的位置相应显示到购物车一栏中 与现实我们体验的购物车功能不太符合   ----所以我决定 重现定义一个变量来接收要放到购物车的商品 这个变量应该是一个对象 key值是对应的分类id value值是一个数组 用来存储商品 Go
-2.小记一下我的灵感 是否可以通过公用组件的信息 这样是不是方便很多? ---浅尝辄止
-3.购物车完结小记<br>  
__尝试决定成败__

本来就是单纯的想试试是否能够通过currentCarsArr的改变看看页面的变化 抱着肯定不会成功的心态 但是成功了 因为数组是引用 understand? 购物车就这么实现了..  还有就是购物车的数量为零的时候 给父元素加个v-if就ok了

-4.购物车还没有完结 那个复选框没搞出来 购物车右上角的数字弄好了

>10.购物车动画   

-1.加入jquery jquery.fly.js 其中加入jquery的方法和jquery.fly的相关方法放笔记里面了 然后在搞动画的时候把$event 传参进去 找到对应的图片的src 复制一个图片出来 用来做动画 动画完成之后要进行销毁<br>
```
let img = $($event.path[4].children[0].children[0]).attr('src'); //获得src的内容 下面要创建一个新的用来实现动画效果
let offsetOfCar = $("#icon-cart").offset();  //因为是点击添加按钮触发的 要的不是按钮的位置 是图片所在的位置和购物车所在的位置
let offsetOfImg = $($event.path[4].children[0].children[0]).offset();//这个是图片所在的位置
let flyer = $('<img class="flyer-img" src="' + img + '">'); //抛物体对象 即创建的新的图片对象用来实现动画效果
//我给初始的刚创建的图片对象一个css样式 让图片显得不是太大
flyer.css({
    width: '20%',
    height: '10%',
    borderRadius: '50%'
})
//然后就是实现动画效果的代码了 简单易懂 最后要销毁这个对象 destroy
flyer.fly({
    start: {
        top: offsetOfImg.top,
        left: offsetOfImg.left,
    },
    end: {
        top: offsetOfCar.top,
        left: offsetOfCar.left,
        width: 20,
        height: 20
    },
    onEnd: function() {
        // console.log('END');
        this.destroy();
    }
});
// console.log($event);
```


-2.之前没解决的问题  行内样式表字符串的拼接<br>

```
<span :style="'background-color:#' + partArr.category_detail.category_color"></span>
```
-3.实现懒加载 用的是jquery.lazyload插件 容器内的图片懒加载要给容器高和overflow 不然会报错
在mouted的时候加载一次 然后在updated的时候再进行加载 这样每次goodsArr变化的时候都会进行懒加载 所以我每次点击加入购物车的时候页面都要闪一下 是因为页面生成了我新创建的图片;解决思路是 不用updated了 改用watch mounted进行一次以后 就用watch监听 然后做出改变<br>
-4.懒加载遗留问题 F5刷新之后 页面显示空白 别的都没问题
