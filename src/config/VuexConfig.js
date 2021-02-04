/** import */
import * as Vuex from 'vuex';

/** Vuex 配置 */
const mutationNames = {
    changeTabComponentName: 'changeTabComponentName'

};
const store = Vuex.createStore({
    state:() => ({
        currentTabComponentName: 'Welcome',
        tabComponentChangeTrigger: false,
    }),
    mutations: {
        [mutationNames.changeTabComponentName](state, menuName) {
            state.currentTabComponentName = menuName;
            state.tabComponentChangeTrigger = !state.tabComponentChangeTrigger;
        }
    }
});

/** export */
export { mutationNames, store};
