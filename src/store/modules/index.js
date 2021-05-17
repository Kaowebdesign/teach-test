import main from './main'
import trade from './trade';


const state = {
    ...main.state,
    ...trade.state,
}

const actions = {
    ...main.actions,
    ...trade.actions,
}

const mutations = {
    ...main.mutations,
    ...trade.mutations,
}

const getters = {
    ...main.getters,
    ...trade.getters,
}

export default {state, actions, mutations, getters}
