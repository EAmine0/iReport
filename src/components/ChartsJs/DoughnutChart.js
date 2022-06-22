import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);


export default function DoughnutChart(props) {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const options =  {
      indexAxis: 'x',
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels:{
          display: true,
          color: 'black',
          anchor: 'center'
        },
        legend: {
          display: true,
          position: 'top',
          align: 'start'
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
          <Box>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
          </Box>
        ) : (
          <div style={{width:'100%', height:'20vh'}}>
              <Doughnut data={props.data} plugins={[ChartDataLabels]} options={options}/> 
          </div>
        )
        
     
    )
}

