import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {

  const [state] = React.useState({

    series: [{
      name: 'Completed Task',
      data: [2, 3, 4, 10, 4, 3, 3, 2, 1, 8, 5, 2]
    }],

    options: {
      chart: {
        height: 350,
        type: 'bar',
        colors: 'red',
        toolbar: {
            show: false,
          },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },

        crosshairs: {
          fill: {         

            type: 'gradient',
            gradient: {
              colorFrom: '#E84C88',
              colorTo: '#E84C88',
              stops: [0, 100],
              opacityFrom: 1,
              opacityTo: 1,

              
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },

      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },

      colors: ['#e84c881f'],

    },

  });

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
    </div>
  );
};

export default ApexChart;
