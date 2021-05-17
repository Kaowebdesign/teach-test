<template>
  <div class="home">
    <app-header />
    <b-container>
      <b-row>
        <b-col>
          <chart/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import Chart from '@/components/Chart';
import {GET_KLINES} from '@/store/modules/trade';

export default {
  name: 'Home',
  components: {
    Chart,
    AppHeader
  },
  created () {
    this.$store.dispatch(GET_KLINES);
  }
}
</script>
