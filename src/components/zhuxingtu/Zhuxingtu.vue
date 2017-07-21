
<template>
  <div class='zhuxingtu'>
  </div>
</template>
<script type='text/ecmascript-6'>
  import echarts from 'echarts'
  export default{
    methods: {
      drawPie (name) {
        this.charts = echarts.init(document.getElementsByClassName(name)[0])
        this.charts.setOption({
          backgroundColor: '#1b74ac',
          color: ['#f9882c', '#24c5fb'],
          textStyle: {
            color: '#ffffff'
          },
          legend: {
            right: 10,
            width: 500,
            itemWidth: 40,
            textStyle: {
              color: '#d7d7d7'
            },
            data: ['血糖', '血脂']
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              show: false
            },
            data: ['云南-昆明', '湖北-武汉', '江西-宜春', '江苏-苏州', '河南-郑州', '湖南-长沙', '安徽-蚌埠', '福建-福州', '江苏-淮安']
          }],
          yAxis: [{
            type: 'value',
            name: '单位：人',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#333333'
              }
            }
          }],
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          series: [{
            name: '预期人数',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 6
              }
            },
            data: [220, 50, 60, 50, 15, 50, 30, 50, 20]
          }, {
            name: '实到人数',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: 5
              }
            },
            data: [66, 35, 58, 2, 4, 7, 98, 47, 10]
          }]
        })
      }
    },
      // 调用
    mounted () {
      this.$nextTick(function () {
        this.drawPie('zhuxingtu')
      })
    }
  }
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .zhuxingtu
    background: #eeccff
    width: 800px
    height: 400px
</style>
