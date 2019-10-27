<template>
    <div>
        <div v-for="todo in this.todos" :key="todo.id">
            {{todo.title}}
        </div>


    </div>
</template>

<script>
    export default {
        name: "ExamplePage",
        // 外部传入
        props: {
            // propC: {
            //     type: Number,
            //     required: true,
            //     default: 0,
            //     validator: function(val) {
            //         return [
            //             "syncint",
            //             'synced',
            //             'version-conflict',
            //             'error'
            //         ].indexOf(val) !== -1
            //     }
            // }
        },


        // 依赖的组件
        components: {},


        // this 的属性
        data() {
            return {
                todos: [
                    {
                        id: 1,
                        title: '1'
                    }
                ]
            }
        },
        computed: {},
        watch: {},


        // 方法
        methods: {},

        // 钩子函数
        // beforeCreate() {
        // },
        // created() {
        // },
        // beforeMount() {
        // },
        // mounted() {
        // },
        // beforeUpdate() {
        // },
        // updated() {
        // },
        // beforeDestroy() {
        // },
        // destroyed() {
        // },
    }
</script>

<style scoped lang="less">

</style>
