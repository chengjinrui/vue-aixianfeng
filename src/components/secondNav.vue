<template>
    <div id="secondNav">
        <section v-for="item in navArr">
            <span><img :src="item.cicons_detail.img" alt=""></span>
            <span>{{ item.cicons_detail.name }}</span>
        </section>
    </div>
</template>

<script>
    export default{
        props: ['navArr']
        // data(){
        //     return {
        //         navArr: []
        //     }
        // },
        // methods:{
        //     loadData(){
        //         this.$http.get('http://www.vrserver.applinzi.com/aixianfeng/apihome.php').then((res)=>{
        //             this.navArr = res.body.data.menu;
        //             this.navArr.splice(4)
        //         })
        //     }
        // },
        // created(){
        //     this.loadData();
        // },
        // mounted(){
        //
        // },
    }
</script>

<style lang="less">
#secondNav{
    width: 10rem;
    height: 3.11rem;
    border-bottom: .03rem solid #e0e0e0;
    display:flex;
    justify-content: space-between;
    section{
        width:25%;
        display: flex;
        text-align:center;
        flex-direction: column;
        justify-content: center;
        img{
            width: 1.89rem;
            height: 1.35rem;
        }
    }
}
</style>
