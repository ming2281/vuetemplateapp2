<template>
    <div class="todo">
        <el-row type="flex" justify="center">
            <el-col :span="6">
                <TodoHeader class="todo-header"></TodoHeader>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col :span="12">
                <TodoBody class="todo-body" :todos="this.todos">

                </TodoBody>
            </el-col>

            <div>{{this.name}}</div>
        </el-row>


    </div>
</template>

<script>

    import TodoHeader from "./TodoHeader";
    import TodoBody from "./TodoBody";
    import {Axios} from "../utils/axios_utils";

    import axios from "axios"


    export default {
        name: "Todo",
        // 外部传入
        props: {
            // propC: {
            //     type: Number,
            //     required: true,
            //     default: 0,
            // }
        },


        // 依赖的组件
        components: {TodoBody, TodoHeader},


        // this 的属性
        data() {
            return {
                todos: [],
                name: '',
            }
        },
        computed: {},
        watch: {},


        // 方法
        methods: {
            func1(response) {
                this.todos = response.data
            },

            func2(response) {

            }
        },

        created() {
            // Axios.get('/todos').then(
            //     (response) => {
            //         this.todos = response.data;
            //     },
            //     (response) => {
            //         console.log(response)
            //     }
            // )

            axios.get("/todos").then(
                this.func1,
                this.func2,
            )
        }
    }
</script>

<style scoped lang="less">

    .todo {
        display: flex;


        background-color: red;

        .todo-header {
            background-color: blue;
        }

        .todo-body {
            background-color: yellow;
        }
    }

</style>
