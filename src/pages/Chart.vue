<template>
    <div ref="chartDom" style="height: 500px">

    </div>
</template>

<script>
    import echarts from 'echarts';
    import * as lodash from 'lodash'

    export default {
        name: "Chart",
        // 外部传入
        props: {
            // propC: {
            //     type: Number,
            //     required: true,
            //     default: 0,
            // }
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
        methods: {

        },

        mounted() {
            // based on prepared DOM, initialize echarts instance
            var myChart = echarts.init(this.$refs.chartDom);

            // specify chart configuration item and data
            var option = {
                title: {
                    text: 'ECharts entry example'
                },
                tooltip: {},
                legend: {
                    data:['Sales']
                },
                xAxis: {
                    data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
                },
                yAxis: {},
                series: [{
                    name: 'Sales',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            // use configuration item and data specified to show chart
            myChart.setOption(option);

            lodash.debounce()
        }
    }
</script>

<style scoped lang="less">

</style>
