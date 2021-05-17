<template>
    <div id="chart-info" class="chart-info">
       <div class="chart-info__left">
           <h2>{{data.symbol}}</h2>
           <span>{{data.symbolName}}</span>
       </div>
       <div class="chart-info__right">
           <div class="chart-info__values">
               <p class=""></p>
               <p class=""></p>
           </div>
           <div class="chart-info__values">
               <p class="chart-info__values-label">24h change</p>
               <p class="chart-info__values-numb"></p>
           </div>
           <div class="chart-info__values">
               <p class="chart-info__values-label">24h high</p>
               <p class="chart-info__values-numb"></p>
           </div>
            <div class="chart-info__values">
               <p class="chart-info__values-label">24h low</p>
               <p class="chart-info__values-numb"></p>
           </div>
           <div class="chart-info__values">
               <p class="chart-info__values-label">24h volume</p>
               <p class="chart-info__values-numb"></p>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'ChartInfo',
        props: {
            data: {
                symbol: String,
                symbolName: String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>