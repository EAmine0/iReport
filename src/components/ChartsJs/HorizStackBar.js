import React from 'react'
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import SkeletonField from '../Loading/SkeletonField';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);

export default function HorizStackBar(props) {
    const tree = ['121','32']
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    let delayed;
    const options = {
      indexAxis: 'y',
      responsive: true,
      hoverBorderWidth: 5,
      categoryPercentage: 1,
      barPercentage: .5,
      maintainAspectRatio: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
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
            delay = context.dataIndex * 500 + context.datasetIndex * 150;
          }
          return delay;
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        
          datalabels:{
              display: true,
              color: 'white',
              anchor: 'center',
              align: 'right',
              offset: 3
          },
      },

  };

  
    console.log("hohi", props.data.labels.length)

    return (
        
        loading ? (
                <SkeletonField />
            ) : (
                <div style={{width:'100%', height:(props.data.labels.length*100).toString()+'px'}}>
                    <Bar data={props.data} plugins={[ChartDataLabels]} options={options}/> 
                </div> 
        )
    )
}
