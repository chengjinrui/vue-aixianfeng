<template>
    <div id="oSwiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in imgArr">
                    <img :src="item.activity.img">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from '../../lib/swiper'
    export default{
        data(){
            return {
                imgArr : []
            }
        },
        components: {
            Swiper
        },
        methods:{
            loadData(){
                this.$http.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php').then((res)=>{
                    this.imgArr = res.body.data.slide;
                })
            },
            loadSwiper(){
                var mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    pagination: '.swiper-pagination',
                    autoplay: 2000,
                    autoplayDisableOnInteraction : false,
                })
            }
        },
        created(){
            // 在mouted写就不用写window.onload 直接调用方法就ok
            // var self = this;
            // window.onload = function(){
            //     self.loadSwiper();
            // }

        },
        mounted(){
            this.loadData();
            // 注意这里不要写this.loadSwiper();
            // 不然会出现滑动图片过不去或者过去有bug的情况
        },
        updated(){
            this.loadSwiper();
        }
    }
</script>

<style lang="less" scoped="true">
@import url('../../lib/swiper-3.3.1.min.css');
#oSwiper{
    border-bottom: .32rem solid #efefef;
    .swiper-container{
        height: 3.72rem;
        .swiper-slide img {
            width: 100%;
        }
    }
}
</style>
