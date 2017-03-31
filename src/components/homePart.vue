<template>
    <div id="homePart">
        <div class="top_part">
            <p class="top_left_part"><span></span><span>优选水果</span></p>
            <p class="top_right_part">更多</p>
        </div>
        <div class="center_banner_part">
            <img src="../../static/images/home/13.jpg" alt="">
        </div>
        <div class="bottom_content_part">
            <figure v-for="item in partArr">
                <a href=""><img :src="item.img" alt=""></a>
                <figcaption>
                    <section class="itemName_part">{{ item.name }}</section>
                    <section class="itemDesc_part">
                        <span>{{ item.pm_desc }}</span>
                        <!-- <span>{{ item.pm_desc }}</span> -->
                    </section>
                    <section class="itemSpecifics_part">{{ item.specifics }}/盒</section>
                    <section class="itemPrice_part">
                        <span>￥{{ item.price }}</span><s>￥{{ item.market_price }}</s>
                    </section>
                    <b class="myAdd"><img src="../../static/images/home/myadd.png" alt=""></b>
                </figcaption>
            </figure>
            <!-- <figure>
                <a href=""><img src="../../static/images/home/14.jpg" alt=""></a>
                <figcaption>
                    <section class="itemName_part">爱鲜蜂·海南千玺好吃桃子</section>
                    <section class="itemDesc_part">
                        <span>精选</span><span>限时特惠</span>
                    </section>
                    <section class="itemSpecifics_part">400-450g/盒</section>
                    <section class="itemPrice_part">
                        <span>￥9.9</span><s>￥13.8</s>
                    </section>
                    <b class="myAdd"><img src="../../static/images/home/myadd.png" alt=""></b>
                </figcaption>
            </figure>
            <figure>
                <a href=""><img src="../../static/images/home/14.jpg" alt=""></a>
                <figcaption>
                    <section class="itemName_part">爱鲜蜂·海南千玺好吃桃子</section>
                    <section class="itemDesc_part">
                        <span>精选</span>
                        <span>限时特惠</span>
                    </section>
                    <section class="itemSpecifics_part">400-450g/盒</section>
                    <section class="itemPrice_part">
                        <span>￥9.9</span><s>￥13.8</s>
                    </section>
                    <p class="myAdd"><img src="../../static/images/home/myadd.png" alt=""></p>
                </figcaption>
            </figure> -->
        </div>
    </div>
</template>

<script>
    export default{
        props: ['partArr']
    }
</script>

<style lang="less">
#homePart{
    height: 10.01rem;
    border-top: .31rem solid #efefef;
    padding-top:.41rem;
    .top_part{
        width: 95%;
        margin: 0 auto;
        height: .49rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: .35rem;
        .top_left_part{
            span{
                &:nth-of-type(1){
                    display: inline-block;
                    width: .11rem;
                    height: .49rem;
                    background-color: orange;
                    margin-right: .11rem;
                    vertical-align: bottom;
                }
                &:nth-of-type(2){
                    color: orange;
                    font-size: .4rem;
                    font-weight: bold;
                }
            }
        }
        .top_right_part{
            padding-right: .27rem;
            background: url('../../static/images/home/09.png') no-repeat right center;
            background-size: .16rem .31rem;
            color: #999999;
            font-size: .35rem;
        }
    }
    .center_banner_part{
        width: 95%;
        margin:0 auto;
        margin-bottom: .33rem;
        img{
            width: 100%;
        }
    }
    .bottom_content_part{
        width: 95%;
        margin: 0 auto;
        height: 5.45rem;
        display: flex;
        justify-content: space-between;
        figure{
            width:32%;
            display: flex;
            flex-direction: column;
            &:nth-of-type(2){
                width: 36%;
                border-left:1px solid #e0e0e0;
                border-right:1px solid #e0e0e0;
            }
            a{
                height: 3rem;
                img{
                    width: 100%;
                }
            }
            figcaption{
                margin-top: .13rem;
                position: relative;
                padding-left: .13rem;
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
                        padding:0 .13rem;
                        margin: 0 .13rem 0 0;
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
                }
                .itemPrice_part{
                    span{
                        color:red;
                    }
                    s{
                        color:#999999;
                    }
                }
                .myAdd{
                    position: absolute;
                    right: .47rem; //35px;
                    bottom: 0;
                    border: 1px solid #e5e3e2;
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
}
</style>
