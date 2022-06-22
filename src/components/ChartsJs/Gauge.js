import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);


export default function Gauge(props) {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    const options =  {
        indexAxis: 'x',
        responsive: true,
        maintainAspectRatio: false,
        hover:{mode: null,},
        elements: {
            // bar: {
            //     borderWidth: 2,
            // },
        },
        plugins: {
            tooltip: {
                enabled: null,
            },
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: props.text,
                align: 'end',
                color: 'black',
                font:{
                    size: 14
                }
            },
        },
    };

    const gaugeNeedle = {
        id: 'gaugeNeedle',
        afterDatasetDraw(chart, args, options) {
            const {ctx, config, data, chartArea: {top, bottom, left, right, width, height}} = chart;
            ctx.save();

            const totalValue = props.totalValue;
            const potentialValue = props.potentialValue;
            const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
            // console.log("dataTotal : ", dataTotal)
            const angle = Math.PI + (1/dataTotal * potentialValue * Math.PI);
            const angle2 = Math.PI + (1/dataTotal * totalValue * Math.PI);

            const cx = width / 2;
            const cy = chart._metasets[0].data[0].y;

            //needle 1 potentialValue
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(1, -1);
            ctx.lineTo(height, 0);
            ctx.lineTo(0, 1);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.restore();

            //textvalue needle 1
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle+1.6);
            ctx.beginPath();
            ctx.moveTo(1, -1);
            ctx.lineTo(height, 0); //-(ctx.canvas.offsetTop-40)
            ctx.lineTo(0, 1);
            ctx.font = '15px Helvetica';
            ctx.fillStyle = "red";
            ctx.fillText(potentialValue,0,-height-5);
            ctx.restore();

            //needle 2 totalValue
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle2);
            ctx.beginPath();
            ctx.moveTo(1, -1);
            ctx.lineTo(height, 0); //-(ctx.canvas.offsetTop-40)
            ctx.lineTo(0, 1);
            ctx.fillStyle = "rgba(75,192,192,1)";
            //ctx.font = '15px Helvetica';
            //ctx.fillText("688",height+10,0);
            ctx.fill();
            ctx.restore();
        
            //textvalue needle 2
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle2+1.6);
            ctx.beginPath();
            ctx.moveTo(1, -1);
            ctx.lineTo(height, 0); //-(ctx.canvas.offsetTop-40)
            ctx.lineTo(0, 1);
            ctx.font = '15px Helvetica';
            ctx.fillStyle = "rgba(75,192,192,1)";
            ctx.fillText(totalValue,0,-height-5);
            ctx.restore();

            ctx.save();
            ctx.font = '15px Helvetica';
            ctx.fillStyle = "black";
            ctx.fillText(props.type,0,50);
            ctx.textAlign = "center";
            ctx.restore();

            //needle dot
            //ctx.translate(c, -cy);
            ctx.beginPath();
            ctx.arc(cx,cy,5,0,10);
            ctx.fillStyle = "rgba(75,192,192,1)";
            ctx.fill();
            ctx.restore();

        }
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
              <Doughnut data={props.data} plugins={[gaugeNeedle]} options={options}/> 
          </div>
        )
        
     
    )
}