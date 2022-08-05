import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import SkeletonField from '../Loading/SkeletonField';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);


export default function DoughnutChart(props) {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])
    let delayed;
    const options =  {
      indexAxis: 'x',
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 500 + context.datasetIndex * 150;
          }
          return delay;
        },
      },
      plugins: {
        datalabels:{
          display: true,
          color: 'black',
          anchor: 'center',
          font: function(context) {
              var width = context.chart.width;
              var size = Math.round(width / 22);

              return {
                  // weight: 'bold',
                  size: size
              };
          }
        },
        legend: {
          display: true,
          position: 'top',
          align: 'start',
          labels: {
            font: function(context) {
                var width = context.chart.width;
                var size = Math.round(width / 22);

                return {
                    // weight: 'bold',
                    size: size
                };
            }
        }
        },
        title: {
          display: true,
          text: props.legend,
          align: 'start'
        },
      },
    };

    // const arret = DataSiteStatus();

    return (
        
        loading ? (
          <SkeletonField />
        ) : (
          <div style={{width:'100%', height:'12vw'}}>
              <Doughnut data={props.data} plugins={[ChartDataLabels]} options={options}/> 
          </div>
        )
        
     
    )
}

