import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import SkeletonField from '../Loading/SkeletonField';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);


export default function Gauge(props) {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    let delayed;
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
                font: function(context) {
                    var width = context.chart.width;
                    var size = Math.round(width / 28);
    
                    return {
                        weight: 'bold',
                        size: size
                    };
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
            // //console.log("dataTotal : ", dataTotal)
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
            ctx.font = '.7vw Helvetica';
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
            ctx.font = '.7vw Helvetica';
            ctx.fillStyle = "rgba(75,192,192,1)";
            ctx.fillText(totalValue,0,-height-5);
            ctx.restore();

            ctx.save();
            ctx.font = '.7vw Helvetica';
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
          <SkeletonField />
        ) : (
          <div style={{width:'20vw', height: '19vh'}}>
              <Doughnut data={props.data} plugins={[gaugeNeedle]} options={options}/> 
          </div>
        )
        
     
    )
}