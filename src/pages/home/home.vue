<template>
    <div id="home">
        <CommonHeader></CommonHeader>
        <!-- 负责撑开margin 远离commonHeader -->
        <div class="box"></div>
        <OSwiper></OSwiper>
        <CommonNav :navArr="firstNavArr"></CommonNav>
        <div class="someItem">
            <a href=""><img src="../../../static/images/home/05.jpg" alt=""></a>
            <a href=""><img src="../../../static/images/home/06.jpg" alt=""></a>
            <a href=""><img src="../../../static/images/home/07.jpg" alt=""></a>
        </div>
        <div class="someBanner">
            <div class="top_someBanner">
                <a href=""><img src="../../../static/images/home/08.png" alt=""></a>
            </div>
            <div class="center_someBanner">
                <a href=""><img src="../../../static/images/home/09.jpg" alt=""></a>
                <a href=""><img src="../../../static/images/home/10.jpg" alt=""></a>
            </div>
        </div>
        <SecondNav :navArr="secondNavArr"></SecondNav>
        <div class="someTitle">
            <a href=""><img src="../../../static/images/home/11.jpg" alt=""></a>
            <a href=""><img src="../../../static/images/home/12.jpg" alt=""></a>
        </div>

        <div id="allParts">
            <HomePart  v-for="item in allPartsArr" :partArr="item"></HomePart>
        </div>
    </div>
</template>

<script>
import CommonHeader from '../../components/commonHeader';
import OSwiper from '../../components/oSwiper';
import CommonNav from '../../components/commonNav';
import SecondNav from '../../components/secondNav';
import HomePart from '../../components/homePart'
export default{
    components: {
        CommonHeader,
        OSwiper,
        CommonNav,
        SecondNav,
        HomePart
    },
    data(){
        return {
            firstNavArr: [],
            secondNavArr: [],
            allPartsArr: [],
            // fruitPartArr: [],
            // category: '优选水果'

        }
    },
    methods: {
        loadData(){
            this.$http.get('/static/data/home.json').then((res) => {
                // console.log(res.body.data.act_info[4].act_rows[2].act_rows);
                this.firstNavArr = res.body.data.act_info[1].act_rows;
                this.secondNavArr = res.body.data.act_info[4].act_rows[2].act_rows;
            })
        },
        loadPartData(){
            this.$http.get('/static/data/home.json').then((res) => {
                console.log(res.body.data.act_info[5].act_rows);
                this.allPartsArr = res.body.data.act_info[5].act_rows;
            })
        }
    },
    created(){
        this.loadData();
        this.loadPartData();
    },
    mounted(){

    },
    updated(){

    }
}
</script>

<style lang="less">
#home{
    width: 100%;
    height: 16.24rem;
    overflow-y: scroll;
    #commonHeader{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 998;
    }
    .box{
        margin-top: 1.43rem;
    }
    #commonNav{
        width: 100%;
    }
    .someItem{
        width: 100%;
        height: 3.21rem;
        border-top:.31rem solid #efefef;
        display: flex;
        justify-content: space-between;
        a{
            width: 33.3%;
            img{
                width: 100%;
            }
        }
    }
    .someBanner{
        width: 100%;
        .top_someBanner{
            a{
                img{
                    width: 100%;
                }
            }
        }
        .center_someBanner{
            width: 92%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            a{
                img{
                    width: 100%;
                }
                &:nth-of-type(1){
                    margin-right: .4rem;
                }
            }
        }
    }
    .someTitle{
        height: 2rem;
        display: flex;
        justify-content: space-between;
        a{
            img{
                width: 100%;
            }
            &:nth-of-type(1){
                border-right: .03rem solid #e0e0e0;
            }
        }
    }
}
</style>
