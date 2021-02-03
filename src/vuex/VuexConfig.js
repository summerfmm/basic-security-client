/** import */
import * as Vuex from 'vuex';

/** Vuex 配置 */
const mutationNames = {
    changeTabComponentName: 'changeTabComponentName'

};
const store = Vuex.createStore({
    state:() => ({
        currentTabComponentName: 'Welcome'
    }),
    mutations: {
        [mutationNames.changeTabComponentName](state, menuName) {
            state.currentTabComponentName = menuName;
        }
    }
});

/** export */
console.log(mutationNames);
export { mutationNames, store};
