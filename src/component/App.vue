<template>

    <el-container :style="styleObject">
        <el-header height="5%">PAS</el-header>
        <el-container style="height: 90%;">
            <kh-menu></kh-menu>
            <el-main>
                <kh-main-tabs></kh-main-tabs>
            </el-main>
        </el-container>
        <el-footer height="5%">Footer</el-footer>
    </el-container>

</template>

<script>
    import * as Vue from 'vue';
    import * as Vuex from 'vuex';
    import Menu from './Menu.vue';
    import MainTabs from './MainTabs.vue';

    export default {


        setup(props, context){
            const store = Vuex.useStore();

            return {
                styleObject2: Vue.computed(()=>({

                })),

            };
        },

        name: 'kh-app',
        // 当前组件固定的属性
        data(){
            return {

            };
        },
        // 当前组件定义的一系列功能函数
        methods: {

        },
        // 需要根据固定属性计算得出来的属性
        computed: {
            styleObject: function(){
                return {
                    height: window.innerHeight + 'px',
                    minHeight: window.innerHeight + 'px'
                };
            }
        },
        // 用于监听某一个属性的变化，发生变化时，执行对应的函数
        watch: {

        },
        components: {
            'kh-menu': Menu,
            'kh-main-tabs': MainTabs
        }
    }

</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body > .el-container {
        /*margin-bottom: 40px;*/
        /*height: 100px;*/
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 100%;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
        padding: 0;
    }



</style>


