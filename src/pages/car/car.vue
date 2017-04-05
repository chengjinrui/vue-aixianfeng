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
                <div class="col-xs-3 col-xs-offset-6">
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
        <div class="car_content" v-for="(item, index) in currentCarsArr" v-if="item.flag_shouldShow">
            <input type="checkbox" name="" :value="(item.partner_price*item.origin_count).toFixed(2)" checked='item.isSelected' @click="abc(item)" ref="oInput">
            <figure>
                <p><img :src="item.img" alt=""></p>
                <figcaption>
                    <p>{{ item.name }}</p>
                    <p>￥{{ item.partner_price }}</p>
                    <b class="myJian" @click=countMinus(item)><img src="../../../static/images/home/myJian.png" alt=""></b>
                    <span class="itemCount_part" >{{ item.origin_count }}</span>
                    <b class="myAdd" @click="countAdd(item)"><img src="../../../static/images/home/myadd.png" alt=""></b>
                </figcaption>
            </figure>
        </div>
        <div class="car_shopResult">
            <div class="selectAll">
                <div class="left_selectAll">
                    <input type="checkbox" name="" value="" checked="true" @click="selectAll($event)">
                    <span>全选</span>
                </div>
                <b>共: <i>￥{{ totalPrice }}</i></b>
            </div>
            <input type="button" name="" value="选好了">
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return {
                currentCarsArr : [],
                sum : 0
            }
        },
        methods:{
            loadData(){
                // console.log(this.$root.allGoodsObj);
                var self = this;
                for(let i in self.$root.allGoodsObj){
                    if (i != 'isEmpt') {
                        // console.log(self.$root.allGoodsObj[i]);
                        self.$root.allGoodsObj[i].map((item)=>{
                            // console.log(item.origin_count);
                            // console.log(item.brand_id);
                            if (item.origin_count > 0) {
                                // console.log(item);
                                item.isSelected = true;
                                self.currentCarsArr.push(item);
                            }
                        })
                    }
                }
                // console.log(this.currentCarsArr);
            },
            countAdd(item){
                item.origin_count ++;
                // 购物车旁边的数字要同步进行修改
                this.$root.numberBesideCar ++;
            },
            countMinus(item){
                item.origin_count --;
                // 购物车旁边的数字要同步进行修改
                this.$root.numberBesideCar --;
                if (item.origin_count == 0) {
                    item.flag_shouldShow = false;
                }
            },
            abc(item){
            //
            //     this.totalPrice = 0;
            //     console.log(this.totalPrice);
                item.isSelected = !item.isSelected;
            //     // // console.log(this.$refs.oInput);
            //     // this.$refs.oInput.forEach((item)=>{
            //     //     console.log(item);
            //     //     this.sum += Number(item.value);
            //     //     console.log(this.sum);
            //     // })
            },
            selectAll($event){
                // let car = $event.path[5].children[1];
                //
                // console.log(car);
                // console.log($('.car_content').children(0));
                console.log(123);
                // $('.car_content').attr('checked', 'true')
            }
        },
        computed: {
            totalPrice(){
                this.sum = 0;
                this.currentCarsArr.forEach((item)=>{
                    this.sum += item.origin_count * item.partner_price;
                })
                // console.log(this.$refs.oInput);

                // try{
                //     for(var i in this.$refs.oInput){
                //         if (this.$refs.oInput[i].isSelected) {
                //             console.log(123);
                //         }else{
                //             this.sum - Number($refs.oInput[i].value);
                //         }
                //     }
                // }catch(err){
                //     console.log(err);
                // }
                return this.sum.toFixed(2);
            }
        },
        mounted(){
            this.loadData();
        }
    }
</script>

<style lang="less">

#car{
    width: 100%;
    height: 16rem;
    overflow-y: scroll;
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
            text-align: right;
        }
        .lastNotice{
            margin-top: .27rem;
        }
    }
    .car_content{
        height: 2.48rem;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 .43rem;
        input[type="checkbox"]{
            width: 10%;
        }
        figure{
            width: 90%;
            height: 2.48rem;
            display: flex;
            justify-content: space-between;
            p{
                width: 30%;
                display: flex;
                align-items: center;
                img{
                    width: 80%;
                }
            }
            figcaption{
                width: 70%;
                position: relative;
                p{
                    margin: .13rem 0;
                    padding-top: .27rem;
                    font-size: .40rem;
                    &:nth-of-type(1){
                        display: block;
                        color: #000;
                        width: 2.77rem;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
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
    .car_shopResult{
        height: 1.55rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0 0 .43rem;
        font-size: .4rem;
        .selectAll{
            width: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: .27rem;
            .left_selectAll{
                span{
                    margin-left: .27rem;
                }
            }
        }
        b{
            font-weight: normal;
            i{
                color: red;
                font-style: normal;
            }
        }
        input[type="button"]{
            width: 3.12rem;
            height: 100%;
            background-color: #ffd600;
            color: #000;
        }
    }
}
</style>
