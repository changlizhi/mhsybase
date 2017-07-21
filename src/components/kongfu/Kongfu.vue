<template>
  <div class='kongfu'>
  </div>
</template>
<script type='text/ecmascript-6'>
  import echarts from 'echarts'
  export default{
    methods: {
      drawPie (name) {
        this.charts = echarts.init(document.getElementsByClassName(name)[0])
        this.charts.setOption({
          title: {
            text: 'xx客户干预后空腹血糖走势图',
            x: 'middle'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              animation: false
            }
          },
          legend: {
            data: ['血糖'],
            x: 'left'
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          axisPointer: {
            link: {
              xAxisIndex: 'all'
            }
          },
          dataZoom: [{
            show: true,
            realtime: true,
            start: 0,
            end: 15,
            xAxisIndex: [0, 1]
          }, {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0, 1]
          }],
          grid: [{
            left: 40,
            right: 40
          }, {
            left: 40,
            right: 40
          }],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            name: '天',
            axisLine: {
              onZero: true
            },
            data: [
              '1', '2', '3', '4', '5', '6',
              '7', '8', '9', '10', '11', '12',
              '13', '14', '15', '16', '17', '18',
              '19', '20', '21', '22', '23', '24',
              '25', '26', '27', '28', '29', '30',
              '31', '32', '33', '34', '35', '36',
              '37', '38', '39', '40', '41', '42',
              '43', '44', '45', '46', '47', '48',
              '49', '50', '51', '52', '53', '54',
              '55', '56', '57', '58', '59', '60',
              '61', '62', '63', '64', '65', '66',
              '67', '68', '69', '70', '71', '72',
              '73', '74', '75', '76', '77', '78',
              '79', '80', '81', '82', '83', '84',
              '85', '86', '87', '88', '89', '90',
              '91', '92', '93', '94', '95', '96',
              '97', '98', '99', '100', '101', '102',
              '103', '104', '105', '106', '107', '108',
              '109', '110', '111', '112', '113', '114',
              '115', '116', '117', '118', '119', '120',
              '121', '122', '123', '124', '125', '126',
              '127', '128', '129', '130', '131', '132',
              '133', '134', '135', '136', '137', '138',
              '139', '140', '141', '142', '143', '144',
              '145', '146', '147', '148', '149', '150',
              '151', '152', '153', '154', '155', '156',
              '157', '158', '159', '160', '161', '162',
              '163', '164', '165', '166', '167', '168',
              '169', '170', '171', '172', '173', '174',
              '175', '176', '177', '178', '179', '180'
            ]
          }, {
            gridIndex: 1
          }],
          yAxis: [{
            type: 'value',
            max: 500,
            name: '(nmol/l)',
            min: 0,
            interval: 25
          }, {
            gridIndex: 1
          }],
          series: [{
            name: '血糖',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 9,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            markPoint: {
              data: [{
                type: 'max',
                name: '最大值'
              }, {
                type: 'min',
                name: '最小值'
              }]
            },
            markArea: {
              silent: true,
              label: {
                normal: {
                  position: ['10%', '50%']
                }
              },
              data: [
                [{
                  name: '过低',
                  itemStyle: {
                    normal: {
                      color: 'rgba(120,123,130,0.27)'
                    }
                  }
                }, {
                  yAxis: 100
                }],
                [{
                  name: '偏低',
                  yAxis: 100,
                  itemStyle: {
                    normal: {
                      color: 'rgba(0,153,153,0.27)'
                    }
                  }
                }, {
                  yAxis: 200
                }],
                [{
                  name: '正常',
                  yAxis: 200,
                  itemStyle: {
                    normal: {
                      color: 'rgba(153,204,51,0.2)'
                    }
                  }
                }, {
                  yAxis: 300
                }],
                [{
                  name: '偏高',
                  yAxis: 300,
                  itemStyle: {
                    normal: {
                      color: 'rgba(250,250,51,0.2)'
                    }
                  }
                }, {
                  yAxis: 400
                }],
                [{
                  name: '过高',
                  yAxis: 400,
                  itemStyle: {
                    normal: {
                      color: 'rgba(250,0,0,0.2)'
                    }
                  }
                }, {
                }]
              ]
            },
            data: [
              113, 132, 123, 122, 132, 132,
              123, 225, 223, 232, 223, 222,
              223, 312, 223, 222, 223, 222,
              232, 262, 232, 232, 223, 222,
              223, 332, 223, 232, 223, 322,
              123, 222, 231, 322, 233, 122,
              223, 232, 232, 222, 223, 232,
              232, 222, 232, 132, 123, 212,
              113, 132, 123, 122, 132, 132,
              123, 225, 223, 232, 223, 222,
              223, 312, 223, 222, 223, 222,
              232, 262, 232, 232, 223, 222,
              223, 332, 223, 232, 223, 322,
              123, 222, 231, 322, 233, 122,
              223, 232, 232, 222, 223, 232,
              232, 222, 232, 132, 123, 212,
              113, 132, 123, 122, 132, 132,
              123, 225, 223, 232, 223, 222,
              223, 312, 223, 222, 223, 222,
              232, 262, 232, 232, 223, 222,
              223, 332, 223, 232, 223, 322,
              123, 222, 231, 322, 233, 122,
              223, 232, 232, 222, 223, 232,
              232, 222, 232, 132, 123, 212,
              113, 132, 123, 122, 132, 132,
              123, 225, 223, 232, 223, 222,
              223, 312, 223, 222, 223, 222,
              232, 262, 232, 232, 223, 222,
              223, 332, 223, 232, 223, 322,
              123, 222, 231, 322, 233, 122
            ]
          }]
        })
      }
    },
      // 调用
    mounted () {
      this.$nextTick(function () {
        this.drawPie('kongfu')
      })
    }
  }

</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .kongfu
    background: #eeccff
    width: 800px
    height: 400px
</style>
