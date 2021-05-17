<template>
    <ul class="tabs">
        <li class="tabs__item" v-for="item in data" :key="item.id">
            <button :class="`tabs__button ${selectedTab === item.id ? 'active' : ''}`" @click="selectTab(item.id)">{{item.name}}</button>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'Tabs',
        props: {
            data: {
                id: String,
                name: String
            }
        },
        data () {
            return {
                selectedTab: ''
            }
        },
        methods: {
            selectTab (key) {
                this.selectedTab = key;
            }
        }
    }
</script>
<style lang="scss">
    .tabs{
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
        &__button{
            padding: 8px 65px;
            border-radius: 4px;
            font-size: (12rem / 16);
            line-height: (14rem / 16);
            font-weight: 700;
            color: #9B938B;
            background: transparent;
            outline: none;
            border: none;
            &:hover{
                color: #FFA901;
            }
            &.active{
                background: rgba(#FFA901,.24);
                color: #FFA901;
            }
        }
    }
</style>