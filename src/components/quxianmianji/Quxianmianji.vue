<template>
  <div class='quxianmianji'>
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
            text: 'xx客户xx日血糖-血压-血脂曲线图',
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
            data: ['血脂', '血压', '血糖'],
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
            data: ['空腹', '餐后半小时', '餐后一小时', '餐后两小时']
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
            name: '血脂',
            type: 'line',
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(137, 189, 27, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(137,189,27)'
              }
            },
            data: [112, 129, 104, 123]
          }, {
            name: '血压',
            type: 'line',
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 136, 212, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(0,136,212)'
              }
            },
            data: [89, 91, 94, 87]
          }, {
            name: '血糖',
            type: 'line',
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(219, 50, 51, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)'
              }
            },
            data: [79, 84, 93, 89]
          }]
        })
      }
    },
      // 调用
    mounted () {
      this.$nextTick(function () {
        this.drawPie('quxianmianji')
      })
    }
  }

</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .quxianmianji
    background: #eeccff
    width: 800px
    height: 400px
</style>
