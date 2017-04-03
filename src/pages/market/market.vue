<template>
    <div id="market">
        <CommonHeader></CommonHeader>
        <!-- 负责撑开margin 远离commonHeader -->
        <div class="box"></div>
        <div id="market_main">
            <div class="left_content">
                <ul class="left_tab">
                    <li v-for="item in categoriesArr" @click="changeFlagSelected(item)">
                        <span class="selected" v-if="item.flag_selected"></span>
                        <p>{{ item.name }}</p>
                    </li>
                </ul>
            </div>
            <div class="right_content">
                <div class="rightTop_tab">
                    <section>
                        <p>全部分类</p>
                    </section>
                    <section>
                        <p>综合排序</p>
                    </section>
                </div>
                <div class="rightBottom">
                    <Market_showGood :goodsArr="currentGoodsArr" :idForGoodsArr="currentIdForGoodsArr"></Market_showGood>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonHeader from '../../components/commonHeader';
import Market_showGood from '../../components/market_showGood'
    export default{
        components: {
            CommonHeader,
            Market_showGood
        },
        data(){
            return{
                categoriesArr : [],
                allGoodsArr : [],
                currentIdForGoodsArr : 104749,
                currentGoodsArr : this.$root.allGoodsObj[104749]
            }
        },
        methods: {
            loadData(){
                // 请求market.json中的数据 得到的是左侧tab菜单的目录
                this.$http.get('/static/data/market.json').then((res)=>{
                    // console.log(res.body.categories);
                    var categoriesArr = res.body.categories;
                    this.categoriesArr = categoriesArr.map(function(item){
                        // 初始化flag_selected的时候都给false 即默认都没有左边的那个竖杠 但是给热销榜true 默认他有
                        item.flag_selected = false;
                        categoriesArr[0].flag_selected = true;
                        return item;
                    })
                });

                // // // // 原先的写法
                // //                    详情见record >8.
                // //
                // // 请求market.json中的数据 得到的是所有的goods数据
                // this.$http.get('/static/data/market.json').then((res)=>{
                //     // console.log(res.body);
                //     this.allGoodsArr = res.body.products;
                //
                //     // 在这里初始化一下currentGoodsArr的值 默认是热销榜 104749是热销榜的id
                //     let currentGoodsArr = this.allGoodsArr[104749];
                //     this.currentGoodsArr = currentGoodsArr.map(function(item){
                //         item.flag_shouldShow = false;
                //         return item;
                //     })
                // })
            },
            // 改进的写法  我把请求商品的部分从上面移动出来 封装为另一个方法 功能分离要不太乱
            //                     详情见详情见record >8.
            loadAllGoodsData(){
                // 判断全局变量里面的allGoodsObj是不是空
                if (this.$root.allGoodsObj.isEmpt) {
                // 请求market.json中的数据 得到的是所有的goods数据 然后赋值给全局变量
                this.$http.get('/static/data/market.json').then((res)=>{
                    // console.log(res.body);
                    // this.$root.allGoodsArr = res.body.products;

                    let allGoodsObj = res.body.products;
                    // console.log(allGoodsObj);
                    for(var i in allGoodsObj){
                        // console.log(i);
                        // console.log(allGoodsObj[i]);
                        allGoodsObj[i].map(function(item){
                            // console.log(item);
                            item.flag_shouldShow = false;
                            item.origin_count = 0;
                            return item;
                        })
                    }
                    // console.log(allGoodsObj);
                    this.$root.allGoodsObj = allGoodsObj;
                    // console.log(this.$root.allGoodsObj);

                    // 改进 把这里的初始化 放到上面 data(){} 里面
                    // // 在这里初始化一下currentGoodsArr的值 默认是热销榜 104749是热销榜的id
                    this.currentIdForGoodsArr = 104749;
                    this.currentGoodsArr = this.$root.allGoodsObj[this.currentIdForGoodsArr];

                    this.$root.allGoodsObj.isEmpt = false;
                })
                }
            },
            changeFlagSelected(item){
                this.categoriesArr.forEach(function(tempObj){
                    tempObj.flag_selected = false;
                })
                item.flag_selected = !item.flag_selected;
                // console.log(item.id);

                // // 原先的写法
                //                    详情见record >8.
                //
                // //每次点击某个category的时候  把该id 传过来 然后给currentGoodsArr赋值
                // let currentGoodsArr = this.allGoodsArr[item.id];
                // this.currentGoodsArr = currentGoodsArr.map(function(item){
                //     item.flag_shouldShow = false;
                //     return item;
                // })
                // // console.log(this.currentGoodsArr);

                // 改进的写法
                //                   详情见record >8.改进方案
                //每次点击某个category的时候  把该id 传过来 然后给currentGoodsArr赋值
                this.currentIdForGoodsArr = item.id;
                this.currentGoodsArr = this.$root.allGoodsObj[this.currentIdForGoodsArr];
                // console.log(this.currentGoodsArr);
            }
        },
        created(){
            this.loadData();
            this.loadAllGoodsData();
        }
    }
</script>

<style lang="less">
#market{
    #market_main{
        display: flex;
        justify-content: space-between;
        .left_content{
            width: 2.37rem;
            overflow-y: scroll;
            .left_tab{
                width: 2.37rem;
                background-color: #f8f8f8;
                li{
                    width: 2.37rem;
                    text-align: center;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    border-bottom: 1px solid #e0e0e0;
                    position: relative;
                    .selected{
                        width: .15rem;
                        height: 1.11rem;
                        background-color: #ffd600;
                        display: block;
                        position: absolute;
                        left: 0;
                        top: .07rem;
                    }
                    p{
                        font-size: .33rem;
                        color: #6d6d6d;
                    }
                }
            }
        }
        .right_content{
            width: 7.49rem;
            .rightTop_tab{
                width: 100%;
                height: 1.28rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom:2px solid #e0e0e0;
                section{
                    width:50%;
                    height: .57rem;
                    text-align:center;
                    font-size: .35rem;
                    color: #777777;
                    &:nth-of-type(1){
                        border-right: 2px solid #dddddd;
                    }
                    p{
                        background: url('../../../static/images/market/01.png') no-repeat 2.67rem center;
                        background-size: .35rem .19rem;
                    }
                }
            }
        }
        .rightBottom{
            height:13.33rem;
            overflow-y: scroll;
        }
    }
}
</style>
