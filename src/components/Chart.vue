<template>
    <div id="chart">
        <trading-vue :data="data" colorBack="#1A1714" :width="1140"></trading-vue>
    </div>
</template>

<script>
// libs
import TradingVue from 'trading-vue-js';

export default {
    name: 'Chart',
    props: {
        data: {
            ohlcv: Array
        }
    },
    components: {
        TradingVue
    },
}
</script>

<style lang="scss" scoped>

</style>