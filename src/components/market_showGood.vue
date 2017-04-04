<template>
    <div id="market_showGood">
        <figure v-for="(item, index) in goodsArr">
            <a href=""><img :src="item.img" alt=""></a>
            <figcaption>
                <section class="itemName_part">{{ item.name }}</section>
                <section class="itemDesc_part">
                    <span>精选</span>
                    <span>买一赠一</span>
                    <!-- <span>{{ pm_desc }}</span> -->
                </section>
                <section class="itemSpecifics_part">{{ item.specifics }}</section>
                <section class="itemPrice_part">
                    <span>￥{{ item.partner_price }}</span><s>￥{{ item.market_price }}</s>
                </section>
                <div class="jiaOrjian">
                    <b class="myJian" v-if="item.flag_shouldShow" @click="countMinus(index)"><img src="../../static/images/home/myJian.png" alt=""></b>
                    <span class="itemCount_part" v-if="item.flag_shouldShow">{{ item.origin_count }}</span>
                    <b class="myAdd" @click="changeFlagShouldShow(item, index)"><img src="../../static/images/home/myadd.png" alt=""></b>
                </div>
            </figcaption>
        </figure>
        <!-- <figure>
            <a href=""><img src="../../static/images/home/14.jpg" alt=""></a>
            <figcaption>
                <section class="itemName_part">好吃好吃</section>
                <section class="itemDesc_part">
                    <span>精选</span>
                    <span>买一赠一</span>
                </section>
                <section class="itemSpecifics_part">200串/盒</section>
                <section class="itemPrice_part">
                    <span>￥100</span><s>￥30</s>
                </section>
                <div class="jiaOrjian">
                    <b class="myJian"><img src="../../static/images/home/myJian.png" alt=""></b>
                    <span class="itemCount_part"></span>
                    <b class="myAdd"><img src="../../static/images/home/myadd.png" alt=""></b>
                </div>
            </figcaption>
        </figure> -->
    </div>
</template>

<script>
    export default{
        props: ['goodsArr', 'idForGoodsArr'],
        data(){
            return {

            }
        },
        methods:{
            // // // // // 原先的写法 这里我要改进让vue不给我警告 直接改变全局变量的值 而不是通过改变子组件的值影响到父组件的值
            // // //                    详情见record >8.
            // // //
            // changeFlagShouldShow(item, index){
            //     // console.log(index);
            //     // 传进来index 根据index 把和父组件共有的goodsArr里面对应的flag_shouldShow值改掉 再返回该数组
            //     var self = this;
            //     this.goodsArr = this.goodsArr.map(function(tempObj){
            //         self.goodsArr[index].flag_shouldShow = true;
            //         return tempObj;
            //     })
            //     console.log(this.goodsArr);
            // }


            // 改进的写法
            //                   详情见record >8.改进方案
            changeFlagShouldShow(item, index){
                // 我传过来了 当前某一个商品所在数组的id以及当前某一个商品的下标 直接操纵 真tm简单
                this.$root.allGoodsObj[this.idForGoodsArr][index].flag_shouldShow = true;
                this.countAdd(item, index);
            },
            countAdd(item, index){
                this.$root.allGoodsObj[this.idForGoodsArr][index].origin_count ++;
                // 购物车旁边的数字要同步进行修改
                this.$root.numberBesideCar ++;
            },
            countMinus(index){
                this.$root.allGoodsObj[this.idForGoodsArr][index].origin_count --;
                // 购物车旁边的数字要同步进行修改
                this.$root.numberBesideCar --;
                if (this.$root.allGoodsObj[this.idForGoodsArr][index].origin_count == 0) {
                    this.$root.allGoodsObj[this.idForGoodsArr][index].flag_shouldShow = false;
                }

            }
        },
        created(){
            // // 测试 是否能修改全局变量 a 证明是可以的
            // this.$root.a = 10;
            // // 测试 是否能访问到全局变量 a
            // console.log(this.$root.a);
            console.log(this.$root.allGoodsObj);
        },
        mounted(){

        }
    }
</script>

<style lang="less">
#market_showGood{
    figure{
        width:100%;
        height: 2.81rem;
        border-bottom: 1px solid #e0e0e0;
        display: flex;

        a{
            width: 40%;
            height: 2.8rem;
            img{
                width: 90%;
            }
        }
        figcaption{
            width: 60%;
            position: relative;
            padding-top: .13rem;
            section{
                margin-top:.13rem;
            }
            .itemName_part{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: .33rem;
            }
            .itemDesc_part{
                span{
                    width: .26rem;
                    margin: 0 .13rem 0 0;
                    padding:0 .13rem;
                    &:nth-of-type(1){
                        color:red;
                        border: 1px solid red;
                        border-radius: .13rem;
                    }
                    &:nth-of-type(2){
                        color:#fff;
                        background-color: red;
                        border: 1px solid red;
                        border-radius: .13rem;
                    }
                }
            }
            .itemSpecifics_part{
                color:#999999;
                font-size: .33rem;
            }
            .itemPrice_part{
                span{
                    color:red;
                    margin-right: .13rem;
                }
                s{
                    color:#999999;
                }
            }
            .myAdd{
                position: absolute;
                /*right: .47rem; //35px;*/
                right: 0;
                bottom: .33rem;
                border: 1px solid #ffbe89;
                border-radius: 100%;
                width: .88rem;
                height: .88rem;
                text-align: center;
                line-height: .88rem;
                img{
                    width:.4rem;
                    height: .4rem;
                    vertical-align: middle;
                    margin-bottom: .07rem;
                }
            }
            .myJian{
                position: absolute;
                /*right: .47rem; //35px;*/
                right: 1.6rem;
                bottom: .33rem;
                border: 1px solid #ffbe89;
                border-radius: 100%;
                width: .88rem;
                height: .88rem;
                text-align: center;
                line-height: .88rem;
                img{
                    width:.4rem;
                    height: .4rem;
                    vertical-align: middle;
                    margin-bottom: .07rem;
                }
            }
            .itemCount_part{
                position: absolute;
                right: 1.2rem;
                bottom: .47rem;
            }
        }
    }
}
</style>
