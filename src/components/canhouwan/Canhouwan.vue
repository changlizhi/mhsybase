<template>
  <div class='canhouwan'>
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
            data: ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84', '87', '90', '93', '96', '99', '102', '105', '108', '111', '114', '117', '120', '123', '126', '129', '132', '135', '138', '141', '144', '147', '150', '153', '156', '159', '162', '165', '168', '171', '174', '177', '180']
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
            data: [123, 124, 134, 140, 123, 122, 124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 123, 122, 124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 140, 123, 122, 124, 133, 134, 137, 123, 122, 124, 133, 134, 137, 123, 122, 124, 133, 123, 122, 124, 133, 123, 137]
          }]
        })
      }
    },
      // 调用
    mounted () {
      this.$nextTick(function () {
        this.drawPie('canhouwan')
      })
    }
  }

</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .canhouwan
    background: #eeccff
    width: 800px
    height: 400px
</style>
