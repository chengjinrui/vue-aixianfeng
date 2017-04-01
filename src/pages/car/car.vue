<template>
    <div id="car">
        <div class="car_header">购物车</div>
        <div class="receiverAddress">
            <table class="table table-condensed">
                <tbody>
                    <tr>
                        <td>收货人</td>
                        <td><span>程晋瑞</span><span>先生</span></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>电话</td>
                        <td>18435137159</td>
                        <td><span class="modify">修改</span></td>
                    </tr>
                    <tr>
                        <td>收货地址</td>
                        <td>北京政府北京政府北京政府</td>
                        <td>1楼5层</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="receiverDetails">
            <section class="row">
                <div class="col-xs-3">
                    <span class="smallIcon"></span>闪送超市
                </div>
                <div class="col-xs-3 col-xs-offset-5">
                    <button class="section_OneButton">凑单专区</button>
                </div>
                <div class="col-xs-10 lastNotice">￥0元起送，22:00前满￥30免运费</div>
            </section>
            <section class="row">
                <div class="col-xs-3">
                    <span>收货时间</span>
                </div>
                <div class="col-xs-4">
                    <span>一小时送达</span>
                </div>
                <div class="col-xs-3 col-xs-offset-2">
                    <span class="modify">可预定</span>
                </div>
            </section>
            <section class="row">
                <div class="col-xs-3">
                    <span>收货备注</span>
                </div>
                <div class="col-xs-9">
                    <input type="text" placeholder="可输入100字以内特殊要求内容">
                </div>
            </section>
        </div>
    </div>
</template>


<script>
    export default{

    }
</script>

<style lang="less">

#car{
    font-family: '微软雅黑';
    .modify{
        padding-right: .33rem;
        background:url('../../../static/images/mine/10.png') no-repeat right center;
        background-size: .16rem .31rem;
    }
    .car_header{
        height: 1.43rem;
        border-bottom: 1px solid #e0e0e0;
        font-size: .4rem;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .receiverAddress{
        height: 2.6rem;
        background: url('../../../static/images/car/01.png') repeat;
        background-size: contain;
        padding: 0 .43rem;
        .table{
            font-size:.4rem;
        }
        .table > tbody > tr > td{
            border-top:none;
            &:nth-of-type(1){
                text-align: left;
            }
            text-align: left;
            &:nth-of-type(3){
                text-align: right;
            }
        }
    }
    .receiverDetails{
        width: 100%;
        height: 5.16rem;
        border-top: .31rem solid #efefef;
        section{
            height: 1.57rem;
            border-bottom: 1px solid #e0e0e0;
            padding: 0 .43rem;
            &:nth-of-type(1){
                height: 1.73rem;
                color: #999999;
                padding-top: .13rem;
            }
            &:nth-of-type(2){
                div{
                    line-height: 1.57rem;
                    font-size: .4rem;
                    &:nth-of-type(2){
                        color: red;
                    }
                }
            }
            &:nth-of-type(3){
                div{
                    line-height: 1.57rem;
                    font-size: .4rem;
                    input{
                        width: 100%;
                        height: 1.05rem;
                        border-radius: .27rem;
                        outline: none;
                        border: 1px solid #cecece;
                        color: #a9a9a9;
                        text-indent: .13rem;
                    }
                }
            }
        }
        .smallIcon{
            display: inline-block;
            width: .12rem;
            height: .39rem;
            background-color: #ffd600;
            border-radius: .13rem;
            vertical-align: middle;
            margin-right: .13rem;
            margin-bottom: .07rem;
        }
        .section_OneButton{
            height: .8rem;
            color: #e64f1a;
            border: 1px solid #ff3800;
            background-color: #fff;
            border-radius: .33rem;
        }
        .lastNotice{
            margin-top: .27rem;
        }
    }
}
</style>
