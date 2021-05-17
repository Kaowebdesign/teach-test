<template>
    <div id="chart">
        <trading-vue :data="chartData" colorBack="#1A1714" :width="1140"></trading-vue>
    </div>
</template>

<script>
    import TradingVue from 'trading-vue-js';
    import { mapState } from 'vuex';

    export default {
        name: 'Chart',
        components: {
            TradingVue
        },
        computed: {
            ...mapState([
                'chartData'
            ])
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>