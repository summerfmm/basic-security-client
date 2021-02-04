<template>
    <el-tabs v-model="editableTabsName" type="border-card" closable @tab-remove="removeTab" style="height: 100%;">
        <el-tab-pane style="height: 100%;"
                v-for="(item, index) in editableTabs"
                :label="item.label"
                :name="item.label">
            <component :is="item.tabComponentName"></component>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import * as Vue from 'vue';
    import * as Vuex from 'vuex';
    import WelcomeTab from 'srcDir/component/WelcomeTab.vue';
    import ActionTab from 'srcDir/component/ActionTab.vue';
    import ResourceTab from 'srcDir/component/ResourceTab.vue';

    export default {
        setup(props, context){

            let editableTabsName = Vue.ref('Welcome'); // 当前在激活状态的 tab 的 tab name
            let editableTabs = Vue.reactive([{
                label: 'Welcome',
                tabComponentName: 'kh-welcome-tab'
            }]);

            function addTab(tabComponentName) {
                // 如果存在相同的 tab name 那么直接跳转到该 tab
                if(editableTabs.find(tab => tab.label === tabComponentName) !== undefined){
                    editableTabsName.value = tabComponentName;
                    return ;
                }

                // 如果不存在相同的 tab name 那么新建 tab
                editableTabs.push({
                    label: tabComponentName,
                    tabComponentName: 'kh-' + tabComponentName.toLowerCase() + '-tab'
                });
                editableTabsName.value = tabComponentName;
            }
            function removeTab(targetName) {
                let tabs = editableTabs;
                let activeName = editableTabsName;
                if (activeName.value === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.label === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName.value = nextTab.label;
                            }
                        }
                    });
                }

                // editableTabsName.value = activeName.value;
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].label === targetName) {
                        tabs.splice(i, 1);
                        i--;
                    }
                }
            }

            const store = Vuex.useStore();
            Vue.watch(Vue.computed(() => store.state.tabComponentChangeTrigger ), (value, oldValue) => {
                addTab(store.state.currentTabComponentName);
            });
            return {
                // data
                editableTabsName,
                editableTabs,
                // method
                addTab,
                removeTab,
                // computed
                // currentTabComponentName,
                // watch
            }
        },
        components: {
            'kh-welcome-tab': WelcomeTab,
            'kh-action-tab': ActionTab,
            'kh-resource-tab': ResourceTab
        }
    }
</script>

<style>
    .el-tabs__header.is-top {
        height: 5%;
    }

    .el-tabs__content {
        height: 95%;
    }
</style>
