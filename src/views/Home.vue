<template>
  <div class="home">
    <app-header />
    <home-chart />
  </div>
</template>

<script>
  // components
  import AppHeader from '@/components/AppHeader';
  import HomeChart from '@/components/HomeChart';
    // store
  import {GET_KLINES} from '@/store/modules/trade';

  export default {
    name: 'Home',
    components: {
      AppHeader,
      HomeChart
    },
    created () {
      this.$store.dispatch(GET_KLINES);
    }
  }
</script>
