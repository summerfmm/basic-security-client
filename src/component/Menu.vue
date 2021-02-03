<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :style="{ 'text-align': textAlign, 'overflow': 'auto'}"
        :collapse="isCollapse">
        <el-menu-item index="1" @click="collapseHandler">
            <i :class="[isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left']"></i>
        </el-menu-item>
        <el-menu-item index="Resource" @click="itemClick">
            <i class="el-icon-document"></i>
            <span>Resource</span>
        </el-menu-item>
        <el-menu-item index="Action" @click="itemClick">
            <i class="el-icon-s-operation"></i>
            <span>Action</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-lock"></i>
            <span>ResourceAction</span>
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-notebook-2"></i>
            <span>Role</span>
        </el-menu-item>

        <el-submenu index="6">
            <template slot="title">
                <i class="el-icon-user"></i>
                <span>User</span>
            </template>
            <el-menu-item index="1-1">所有用户</el-menu-item>
            <el-submenu index="1-4">
                <template slot="title">用户管理</template>
                <el-menu-item index="1-4-1">新增用户</el-menu-item>
                <el-menu-item index="1-4-1">删除用户</el-menu-item>
                <el-menu-item index="1-4-1">新增用户</el-menu-item>
            </el-submenu>

            <el-submenu index="1-4">
                <template slot="title">用户组</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
                <template slot="title">角色</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
        </el-submenu>


        <el-menu-item index="7">
            <i class="el-icon-user-solid"></i>
            <span>Group</span>
        </el-menu-item>


    </el-menu>
</template>


<script>
    import * as Vue from 'vue';
    import { useStore } from 'vuex';
    import * as VuexConfig from '../vuex/VuexConfig.js';

    export default {
        setup(props, context){
            const store = useStore()
            let textAlign = Vue.ref('left');
            let isCollapse = Vue.ref(true);

            const collapseHandler = function() {
                isCollapse.value = !isCollapse.value;
            };

            function handleOpen(key, keyPath) {
                console.log(key, keyPath);
            }

            function handleClose(key, keyPath) {
                console.log(key, keyPath);
            }

            function itemClick(el){
                store.commit(VuexConfig.mutationNames.changeTabComponentName, el.index);
                console.log(el);
            }
            return {
                textAlign,
                isCollapse,
                collapseHandler,
                handleOpen,
                handleClose,
                itemClick

            };
        }
    }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 15%;
        min-height: 200px;
    }
</style>


