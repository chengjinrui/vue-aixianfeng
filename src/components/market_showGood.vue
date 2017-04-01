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
                    <b class="myJian" v-if="item.flag_shouldShow"><img src="../../static/images/home/myJian.png" alt=""></b>
                    <span class="itemCount_part"></span>
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
        props: ['goodsArr'],
        data(){
            return {

            }
        },
        methods:{
            changeFlagShouldShow(item, index){
                // console.log(index);
                // 传进来index 根据index 把和父组件共有的goodsArr里面对应的flag_shouldShow值改掉 再返回该数组
                var self = this;
                self.goodsArr = self.goodsArr.map(function(tempObj){
                    self.goodsArr[index].flag_shouldShow = true;
                    return tempObj;
                })
                console.log(this.goodsArr);
            }
        },
        created(){

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
        }
    }
}
</style>
