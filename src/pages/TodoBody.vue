<template>
    <div >
        <div v-for="todo in this.todos">
            {{todo.title}}--{{todo.desc}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoBody",
        // 外部传入
        props: {
            // propC: {
            //     type: Number,
            //     required: true,
            //     default: 0,
            // }

            todos : {
                type: Array,
                required: true,
                default: []
            }
        },


        // 依赖的组件
        components: {},


        // this 的属性
        data() {
            return {}
        },
        computed: {},
        watch: {},


        // 方法
        methods: {}
    }
</script>

<style scoped lang="less">

</style>
