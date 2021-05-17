<template>
    <b-container>
      <b-row>
        <b-col>
          <tabs :data="symbols"/>
          <chart :data="chartData"/>
          <!-- <chart-info :data={}/> -->
        </b-col>
      </b-row>
    </b-container>
</template>
<script>
    // core
    import {mapState} from 'vuex';
    // components
    import Tabs from '@/components/Tabs';
    import Chart from '@/components/Chart';
    import ChartInfo from '@/components/ChartInfo'
import ChartInfo from './ChartInfo.vue';
  
    export default {
        name: 'Home Chart',
        components: {
            Chart,
            Tabs,
            ChartInfo
        },
        computed: {
            ...mapState([
                'symbols',
                'chartData'
            ])
        }, 
    }
</script>