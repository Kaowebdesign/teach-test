import axios from "axios";
import {instance} from '@/utils/axios';
import {BASE_EXCHANGE, EXCHANGES} from '@/constants/api';

// actions
export const GET_SYMBOLS = 'GET_SYMBOLS';
export const GET_KLINES = 'GET_KLINES';
// mutations
export const SET_SYMBOLS = 'SET_SYMBOLS';
export const SET_KLINES = 'SET_KLINES';

export default {
    state:{
        symbols:[
            {
                name: 'BTC/USD',
                code: 'BTCUSDT'
            },
            {
                name: 'ETH/USD',
                code: 'ETHUSD'
            }
        ],
        interval: [
            {
                name: '1m',
                code: '1m'
            },
            {
                name: '1h',
                code: '1h'
            },
            {
                name: '1d',
                code: '1d'
            },
            {
                name: '1w',
                code: '1w'
            },
            {
                name: '1M',
                code: '1M'
            }
        ],
        chartData: {
            ohlcv: []
        },
        langs: [
            {
                icon: '../assets/en.png',
                title: 'Eng'
            },
            {
                icon: '@/assets/deu.png',
                title: 'Deu'
            },
            {
                icon: '@/assets/ita.png',
                title: 'Ita'
            },
            {
                icon: '@/assets/fra.png',
                title: 'Fra'
            }
        ]
    },
    mutations:{
        [SET_SYMBOLS] (state, payload) {
            state.symbols = payload
        },
        [SET_KLINES] (state, payload) {
            state.chartData.ohlcv = payload
        },
    },
    actions:{
        async [GET_SYMBOLS] ({commit}) {

            try {
                const response = await instance.get(EXCHANGES[BASE_EXCHANGE].REQUEST_EXCHANGE_INFO)
              
                if( response.status == 200 ) {
                    const {data} = response;
                    const symbols = data['symbols'];

                    commit(SET_SYMBOLS, symbols);
                }
            } catch (error) {
                console.log('error', error);
            }
        },
        async [GET_KLINES] ({commit, state}, payload) {
            try {
                const params = {
                    'symbol': state.symbols[0].code || payload.symbol,
                    'interval': state.interval[0].code || payload.interval
                }

                const response = await instance.get(EXCHANGES[BASE_EXCHANGE].REQUEST_KLINES, {params})
              
                if( response.status == 200 ) {
                    const {data} = response;
                    const chartData = [];

                    data.length && data.forEach(function(item) {
                        chartData.push([item[0], +item[1], +item[2], +item[3], +item[4]])
                    });

                    commit(SET_KLINES, chartData);
                }
            } catch (error) {
                console.log('error', error);
            }
        }
    },
    getters:{

    }
}