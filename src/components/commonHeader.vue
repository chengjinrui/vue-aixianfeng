<template>
<div id="commonHeader">
    <section>
        <img src="../../static/images/home/02.png">
        <span>扫一扫</span>
    </section>
    <section>
        <p>黄平路附近</p>
    </section>
    <section>
        <img src="../../static/images/home/01.png">
        <span>搜索</span>
    </section>
</div>
</template>

<script>
    export default{

    }
</script>

<style lang="less">
#commonHeader{
    height: 1.43rem;
    background-color: #ffd600;
    display:flex;
    justify-content: space-between;
    section{
        display: flex;
        flex-direction:column;
        text-align:center;
        img{
            width:.61rem;
            height: .6rem;
            margin-left: .03rem;
        }
        span{
            margin-top:.07rem;
        }
        &:nth-of-type(1){
            padding: .23rem 0 0 .2rem;
        }
        &:nth-of-type(2){
            line-height: 1.43rem;
            background:url('../../static/images/home/03.png') no-repeat right center;
            background-size: .27rem .25rem;
            padding-right:.27rem;
            font-size:.4rem;
            font-weight:bolder;
        }
        &:nth-of-type(3){
            padding: .23rem .23rem 0 0;
        }
    }
}
</style>
