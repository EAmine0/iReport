import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Line } from 'react-chartjs-2';
import SkeletonField from '../Loading/SkeletonField';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);


export default function Liner(props) {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    let delayed;
    const options = {
      indexAxis: 'x',
      responsive: true,
      maintainAspectRatio: false,
      //tension:0.4,
      pointRadius: 0,
      pointHoverRadius: 5,
      pointHitRadius: 10,
      hoverBackgroundColor: 'white',
      pointHoverBorderWidth: 3,
      scales: {
        x: {
            ticks: {
                font: function(context) {
                    var width = context.chart.width;
                    var size = Math.round(width / 90);
    
                    return {
                        // weight: 'bold',
                        size: size
                    };
                }
            }
        },
        y: {
            ticks: {
                font: function(context) {
                    var width = context.chart.width;
                    var size = Math.round(width / 80);
    
                    return {
                        // weight: 'bold',
                        size: size
                    };
                }
            }
        }
    },
      interaction:{
        mode: 'index',
      },
      //intersect: false,
      //pointRadius: 0,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      plugins: {
          legend: {
            position: 'bottom',
            labels: {
                font: function(context) {
                    var width = context.chart.width;
                    var size = Math.round(width / 120);
    
                    return {
                        // weight: 'bold',
                        size: size
                    };
                }
            }
        },
        tooltip:{
          //padding: 30,
        }
        // title: {
        //   display: true,
        //   text: 'Lattitude & Longitude of everyone',
        // },
      },
    };

    // const arret = DataSiteStatus();

    return (
        
        loading ? (
          <SkeletonField />
        ) : (
          <div style={{width:'100%', height:'35vh'}}>
              <Line data={props.data} options={options}/> 
          </div>
        )
        
     
    )
}

