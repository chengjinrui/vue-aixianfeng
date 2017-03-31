<template>
    <div id="oSwiper">
        <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgArr"><img :src="item.activity.img"></div>
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
            // window.onload = function(){
            //     self.loadData();
            // }

        },
        mounted(){
            this.loadData();
            this.loadSwiper();
        },
        updated(){
            this.loadSwiper();
        },
        destroyed(){

        }
    }
</script>

<style lang="less">
#oSwiper{
    width:100%;
    height: 6.67rem;
    .swiper-container{
        width:100%;
        height: 3.72rem;
        .swiper-slide{
            with:100%;
            height: 3.72rem;
            img{
                with:100%;
                height: 3.72rem;
            }
        }
    }
}
</style>
