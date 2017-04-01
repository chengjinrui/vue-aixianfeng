<template>
    <div id="mine">
        <div class="mine_header">
            <section>
                <img src="../../../static/images/mine/01.png" alt="">
            </section>
            <section>
                <p>18435137159</p>
                <p><img src="../../../static/images/mine/02.png" alt=""></p>
            </section>
            <section>
                <img src="../../../static/images/mine/03.png" alt="">
            </section>
        </div>
        <ul class="mine_nav">
            <li>
                <p>商品收藏</p>
            </li>
            <li>
                <p>店铺收藏</p>
            </li>
        </ul>
        <div class="mine_order">
            <ul class="top_mineOrder">
                <li>
                    <p>我的订单</p>
                </li>
                <li>
                    <p class="lookAllOrders">查看全部订单</p>
                </li>
            </ul>
            <ul class="bottom_mineOrder">
                <li><img src="../../../static/images/mine/06.png" alt=""><span>待付款</span></li>
                <li><img src="../../../static/images/mine/07.png" alt=""><span>待收货</span></li>
                <li><img src="../../../static/images/mine/08.png" alt=""><span>待评价</span></li>
                <li><img src="../../../static/images/mine/09.png" alt=""><span>退款/售后</span></li>
            </ul>
        </div>
        <div class="mine_modules">
            <ul class="top_mineModules">
                <li><img src="../../../static/images/mine/积分商城.png" alt=""><span>积分商城</span></li>
                <li><img src="../../../static/images/mine/优惠券.png" alt=""><span>优惠券</span></li>
                <li><img src="../../../static/images/mine/收货地址.png" alt=""><span>收货地址</span></li>
                <li><img src="../../../static/images/mine/客服反馈.png" alt=""><span>客服/反馈</span></li>
            </ul>
            <ul class="bottom_mineModules">
                <li><img src="../../../static/images/mine/关于我们.png" alt=""><span>关于我们</span></li>
            </ul>
        </div>
        <div class="logOut"><a href="">退出当前账号</a></div>
    </div>
</template>

<script>
    export default{
    }
</script>

<style lang="less">

#mine{
    .mine_header{
        width: 100%;
        height: 3.12rem;
        background-color: #ffd600;
        display: flex;
        align-items: center;
        section{
            &:nth-of-type(1){
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 .47rem;
                img{
                    width: 1.77rem;
                    height: 1.77rem;
                }
            }
            &:nth-of-type(2){
                width: 6.23rem;
                p{
                    color: #fff;
                    font-size: .53rem;
                    font-weight: bold;
                    &:nth-of-type(1){
                        margin-bottom: .13rem;
                    }
                    img{
                        width: 2.23rem;
                        height: .75rem;
                    }
                }
            }
            &:nth-of-type(3){
                img{
                    width: .28rem;
                    height: .49rem;
                }
            }
        }
    }
    .mine_nav{
        width:100%;
        height: 1.09rem;
        background-color: #f3c800;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:0;
        li{
            width: 50%;
            text-align: center;
            height: .65rem;
            line-height: .65rem;
            font-size: .33rem;
            color: #fff;
            &:nth-of-type(1){
                border-right: 1px solid #fff;
                p{
                    background: url('../../../static/images/mine/04.png') no-repeat 1.2rem center;
                    background-size: .48rem .48rem;
                }
            }
            &:nth-of-type(2){
                p{
                    background: url('../../../static/images/mine/05.png') no-repeat 1.2rem center;
                    background-size: .48rem .48rem;
                }
            }
        }
    }
    .mine_order{
        width: 100%;
        height: 4.09rem;
        border-top: .32rem solid #efefef;
        .top_mineOrder{
            height: 1.53rem;
            line-height: 1.53rem;
            border-bottom: 1px solid #e0e0e0;
            display: flex;
            justify-content: space-between;
            padding: 0 .53rem;
            .lookAllOrders{
                background: url('../../../static/images/mine/10.png') no-repeat right center;
                background-size: .16rem .31rem;
                padding-right: .27rem;
                color: #999999;
            }
            p{
                font-size: .4rem;
            }
        }
        .bottom_mineOrder{
            width: 100%;
            height:2.24rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width:.85rem;
                    height: .83rem;
                }
                span{
                    margin-top: .37rem;
                }
            }
        }
    }
    .mine_modules{
        height: 6.56rem;
        border-top: .31rem solid #efefef;
        .top_mineModules,.bottom_mineModules{
            height: 3.15rem;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #e0e0e0;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                img{
                    width: 1.2rem;
                    height: 1rem;
                }
            }
        }
        .top_mineModules{
            justify-content: space-around;
        }
        .bottom_mineModules{
            padding:0 0 0 .53rem;
            border-bottom: .96rem solid #e0e0e0;
        }
    }
    .logOut{
        height: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .43rem;
    }
}
</style>
