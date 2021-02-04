<template>
    <div style="height: 100%;">
        <div style="height: 10%;">
            <el-button type="primary" icon="el-icon-circle-plus-outline">Add</el-button>
            <el-button type="primary" icon="el-icon-search">Search</el-button>
        </div>
        <!-- el-table 必须设置 height 属性才会 固定表头，不能将 height 放在 style 中 -->
        <el-table :data="tableData" height="90%" style="width: 100%;">
            <!-- el-table-column 设置列百分比宽度必须使用 min-width 属性，不能是放在 style 中的 min-width -->
            <el-table-column fixed type="index" label="Row" min-width="5%"></el-table-column>
            <el-table-column prop="name" label="Name" min-width="10%"></el-table-column>
            <el-table-column prop="description" label="Description" min-width="30%"></el-table-column>
            <el-table-column fixed="right" label="Operations" min-width="55%">
                <template #default="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, tableData)">Edit</el-button>
                    <el-button size="mini" type="danger" @click="deleteRow(scope.$index, tableData)">Remove</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue';
    import axios from 'axios';


    export default {

        setup(){
            let tableData = reactive([{
                id: 1,
                name: 'Create',
                description: '增'
            }, {
                id: 2,
                name: 'Delete',
                description: '删'
            }, {
                id: 3,
                name: 'Modify',
                description: '改'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }, {
                id: 4,
                name: 'Query',
                description: '查'
            }]);


            return {
                tableData,
            };
        },


        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            }
        }
    }
</script>
