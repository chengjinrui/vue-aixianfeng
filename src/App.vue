<template>
    <div id="app">
        <div id="footer">
            <section>
                <router-link to='/home'>
                    <!-- <span><img src="../static/images/footer/home0.png" alt=""></span> -->
                    <!-- <div v-class="{true: 'selected', false: 'noraml'}"></div> -->
                    <span><img :src="'../static/images/footer/home'+index_home+'.png'" alt=""></span>
                    <span>主页</span>
                </router-link>
            </section>
            <section>
                <router-link to='/market'>
                    <!-- <span><img src="../static/images/footer/market0.png" alt=""></span> -->
                    <span><img :src="'../static/images/footer/market'+index_market+'.png'" alt=""></span>
                    <span>闪送超市</span>
                </router-link>
            </section>
            <section>
                <router-link to='/car'>
                    <!-- <span><img src="../static/images/footer/car0.png" alt=""></span> -->
                    <span><img :src="'../static/images/footer/car'+index_car+'.png'" alt=""></span>
                    <span>购物车</span>
                </router-link>
            </section>
            <section>
                <router-link to='/mine'>
                    <!-- <span><img src="../static/images/footer/mine0.png" alt=""></span> -->
                    <span><img :src="'../static/images/footer/mine'+index_mine+'.png'" alt=""></span>
                    <span>我的</span>
                </router-link>
            </section>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentUrl: '/home',
            index_home: '1',
            index_market: '0',
            index_car: '0',
            index_mine: '0',
        }
    },
    methods: {
        // judge(standard, newValue){
        //     // standard.test(newValue)?this.
        // }
    },
    created(){

    },
    mounted(){

    },
    updated(){
        // console.log(this.$router.currentRoute.path),
        // this.judge();
        this.currentUrl = this.$router.currentRoute.path
        // console.log(this.currentUrl);
    },
    watch: {
        'currentUrl':{
            handler(newValue, oldValue){
                // console.log(newValue)
                var reg_home =  new RegExp('home');
                var reg_market = new RegExp('market');
                var reg_car = new RegExp('car');
                var reg_mine = new RegExp('mine');
                // console.log(reg_home.test(newValue));
                reg_home.test(newValue)?this.index_home='1':this.index_home='0';
                reg_market.test(newValue)?this.index_market='1':this.index_market='0';
                reg_car.test(newValue)?this.index_car='1':this.index_car='0';
                reg_mine.test(newValue)?this.index_mine='1':this.index_mine='0';
                // console.log(this.index_home);
                // console.log(str1.toString().split('/').splice(1,1).join(''))
            },
        }
    }
}
</script>

<style lang="less">
@import url('../lib/reset.css');
@import url('../lib/swiper-3.3.1.min.css');
#app {
    font-family: '微软雅黑';
    #footer{
        height: 1.56rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: #f3f6f7;
        section{
            a{
                text-decoration: none;
                color: #777777;
                display: flex;
                text-align: center;
                flex-direction: column;
                img{
                    width: .67rem;
                    height: .67rem;
                }
            }
        }
    }
}


/*#app a.selected {

}
#app a.normal {

}*/
</style>
