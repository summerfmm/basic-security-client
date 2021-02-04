<template>
    <!--<el-container :style="styleObject">-->
    <el-container style="width: 100%; height:100%;"><!-- style 的作用是让该元素占满整个屏幕 -->
        <el-header style="height:5%; flex:5">PAS</el-header><!-- flex 设置元素的占比 -->
        <el-container style="height:90%; flex:90">
            <kh-menu></kh-menu>
            <el-main style="height:100%;">
                <kh-main-tabs></kh-main-tabs>
            </el-main>
        </el-container>
        <el-footer style="height:5%; flex:5">Footer</el-footer>
    </el-container>
</template>

<script>
    import * as Vue from 'vue';
    import * as Vuex from 'vuex';
    import Menu from 'srcDir/component/Menu.vue';
    import MainTabs from 'srcDir/component/MainTabs.vue';

    export default {


        setup(props, context) {
            const store = Vuex.useStore();

            return {
                styleObject2: Vue.computed(() => ({})),

            };
        },

        name: 'kh-app',
        // 当前组件固定的属性
        data() {
            return {};
        },
        // 当前组件定义的一系列功能函数
        methods: {},
        // 需要根据固定属性计算得出来的属性
        computed: {
            styleObject: function () {
                return {
                    height: window.innerHeight + 'px',
                    minHeight: window.innerHeight + 'px',
                    maxHeight: window.innerHeight + 'px',
                };
            }
        },
        // 用于监听某一个属性的变化，发生变化时，执行对应的函数
        watch: {},
        components: {
            'kh-menu': Menu,
            'kh-main-tabs': MainTabs
        }
    }

</script>

<style>
    * {
        margin: 0; /* 设置 margin 为 0 方便 body 占满整个屏幕 */
        padding: 0; /* 设置 padding 为 0 方便 body 占满整个屏幕 */
        box-sizing: border-box; /* 表示计算元素宽高的时候包含 padding 和 border 的宽度 */
    }

    /* 设置 html body #app 的高度刚好为屏幕高度 */
    html, body, #app {
        width: 100%;
        height: 100%;
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
        /*line-height: 160px;*/
        padding: 0;
    }


</style>


