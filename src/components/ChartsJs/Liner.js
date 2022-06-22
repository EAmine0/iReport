import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);


export default function Liner(props) {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

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
      plugins: {
        legend: {
          position: 'bottom',
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
          <Box>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
          </Box>
        ) : (
          <div style={{width:'100%', height:'35vh'}}>
              <Line data={props.data} options={options}/> 
          </div>
        )
        
     
    )
}

