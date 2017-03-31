<template>
    <div id="app">
        <div id="footer">
            <section>
                <router-link to='/home'>主页</router-link>
            </section>
            <section>
                <router-link to='/market'>闪送超市</router-link>
            </section>
            <section>
                <router-link to='/car'>购物车</router-link>
            </section>
            <section>
                <router-link to='/mine'>我的</router-link>
            </section>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
}
</script>

<style lang="less">
@import url('../lib/reset.css');
@import url('../lib/swiper-3.3.1.min.css');   
#app {
    #footer{
        display: flex;
        justify-content: space-around;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(0, 0, 0, 0.5);
        section{
            padding: .27rem 0;
            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }
}
</style>
