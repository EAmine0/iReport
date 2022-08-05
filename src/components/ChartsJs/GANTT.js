import { useState, useEffect, useCallback, useRef } from 'react';
import { Input, TextField, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import 'chartjs-adapter-date-fns';
import Button from '@mui/material/Button';
import * as IoIcons from "react-icons/io5"
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { isPropertySignature } from 'typescript';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);

// import { Bar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter } from 'react-chartjs-2';


function GANTT(props) {

    
    let delayed;
    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                min: props.min, //'2015-01-01',
                max: props.max,//'2021-12-01',
                position:'top',
                type: 'time',
                
                // time:{
                //     unit: 'quarter'
                // }
            },
            y: {
                beginAtZero: true,
                
            },
        },
        responsive: true,
        maintainAspectRatio: false, 
        hoverBorderWidth: 5,
        // borderColor: ['rgba(1, 184, 170, 1)',
        //                   'rgba(201, 27, 61, 1)',
        //                   'rgba(253, 98, 94, 1)',
        //                   'rgba(55, 70, 73, 1)',
        //                   'rgba(242, 200, 15, 1)',
        //                   'rgba(131, 196, 57, 1)',
        //                   'rgba(48, 156, 159, 1)',
        //                   'rgba(110, 0, 85, 1)'],
        // backgroundColor: ['rgba(1, 184, 170, .6)',
        //                     'rgba(201, 27, 61, .8)',
        //                     'rgba(253, 98, 94, .8)',
        //                     'rgba(55, 70, 73, .8)',
        //                     'rgba(242, 200, 15, .8)',
        //                     'rgba(131, 196, 57, .8)',
        //                     'rgba(48, 156, 159, .8)',
        //                     'rgba(110, 0, 85, .8)'],
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
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        return label+"fd";
                    },
                    title: function(context) {
                        return context[0].label;
                    }
                }
            },
            title: {
                display: false,
                // text: props.title,
                position: 'left'
            },
            legend: {
                display: true,
            },
            datalabels:{
                formatter: (val, ctx) => {
                    
                    
                    return ctx.chart.data.labels[ctx.dataIndex] + "\n" + val;
                  },
                display: props.labels,
                // color: 'black',
                anchor: 'end',
                align: 'right',
                offset: 3,
                font: {
                    size: 10,
                }
            },
        },
    };

    

const tooltipLine = {
    id: 'tooltipLine',
    afterDraw: chart => {
        if (chart.tooltip?._active?.length) {
            let x = chart.tooltip._active[0].element.x;
            let yAxis = chart.scales.y;
            let ctx = chart.ctx;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, yAxis.top);
            ctx.lineTo(x, yAxis.bottom);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
            ctx.restore();

            let y = chart.tooltip._active[0].element.base;
            let yAxiss = chart.scales.y;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(y, yAxiss.top);
            ctx.lineTo(y, yAxiss.bottom);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
            ctx.restore();
        }
    }
}

    


    return (
        <div style={{width:'100%', height:(props.data.labels.length*props.height).toString()+'px'}}>
            <Bar data={props.data} plugins={[ChartDataLabels, tooltipLine]} options={options}/> 
        </div>
    )
}

export default GANTT
