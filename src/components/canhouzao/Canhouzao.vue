<template>
  <div class='canhouzao'>
  </div>
</template>
<script type='text/ecmascript-6'>
  import echarts from 'echarts'
  export default{
    methods: {
      drawPie (name) {
        this.charts = echarts.init(document.getElementsByClassName(name)[0])
        this.charts.setOption({
          backgroundColor: '#394056',
          title: {
            text: 'xx用户使用迪恩摩因干预后餐后两小时（晚）血糖曲线图',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16,
              color: '#F1F1F3'
            },
            left: '6%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: '#57617B'
              }
            }
          },
          legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['血糖'],
            right: '4%',
            textStyle: {
              fontSize: 12,
              color: '#F1F1F3'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            data: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85', '88', '91', '94', '97', '100', '103', '106', '109', '112', '115', '118', '121', '124', '127', '130', '133', '136', '139', '142', '145', '148', '151', '154', '157', '160', '163', '166', '169', '172', '175', '178']
          }],
          yAxis: [{
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              lineStyle: {
                color: '#57617B'
              }
            }
          }],
          series: [{
            name: '血糖',
            type: 'line',
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)'
              }
            },
            data: [124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 123, 122, 124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 123, 122, 124, 133, 134, 137, 123, 122, 124, 133, 123, 122, 124, 133, 122]
          }]
        })
      }
    },
      // 调用
    mounted () {
      this.$nextTick(function () {
        this.drawPie('canhouzao')
      })
    }
  }

</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .canhouzao
    background: #eeccff
    width: 800px
    height: 400px
</style>
