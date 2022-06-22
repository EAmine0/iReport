import React from 'react'
import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import {Bar} from 'react-chartjs-2';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);

export default function HorizontalBar(props) {
    const tree = ['121','32']
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const options = {
      indexAxis: 'y',
      responsive: true,
      hoverBorderWidth: 5,
      backgroundColor: 'rgba(75,192,192,0.2)',

      elements: {
          bar: {
              borderWidth: 2,
          },
      },

      plugins: {
          datalabels:{
              display: true,
              color: 'black',
              anchor: 'end',
              align: 'right',
              offset: 3
          },
      },

  };

    // console.log("hohi", props.data)

    return (
        
        loading ? (
                <Box>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
            ) : (
                <div style={{width:'100%', height:'100%'}}>
                    <Bar data={props.data} plugins={[ChartDataLabels]} options={options}/> 
                </div> 
        )
    )
}
