<template>
  <header class="header">
    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-between">
          <h1 class="header__title">Trading platform</h1>
          <v-select :options="langs" label="title" class="header__select">
            <template #open-indicator="{ attributes }">
              <span v-bind="attributes">
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L0 0H12L6 6Z" fill="white"/>
                </svg>
              </span>
            </template>
            <template v-slot:option="option">
              <img :src="'@/assets/en.png'" />
              {{ option.title }}
            </template>
          </v-select>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'AppHeader',
    data () {
      return {
        options: [
          {
            icon: '1',
            title: 'Eng'
          }
        ]
      }
    },
    computed: {
      ...mapState([
        'langs'
      ])
    }
  }
</script>
<style lang="scss">
  .header{
    padding: 30px 10px 25px;
    &__title{
      color: #fff;
      font-weight: 700;
      font-size: (18rem / 16);
      line-height: (21rem / 16);
    }
  }
  .header__select{
    .vs__clear{
      display: none;
    }
    .vs__dropdown-toggle{
      width: 100px;
      border: none;
      background: transparent;
      &[aria-expanded="true"]{
          background: rgba(255,255,255,.2);
      }
    }
    .vs__selected{
      color: #fff;
    }
    .vs__dropdown-menu{
      background: #FFFFFF;
      box-shadow: 0px 10px 20px rgba(22, 23, 28, 0.08);
      border-radius: 6px;
    }
  }
</style>
