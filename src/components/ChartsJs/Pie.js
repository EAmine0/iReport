import React from 'react'
import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import {Pie} from 'react-chartjs-2';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);

function Piechart(props) {
    const tree = ['121','32']
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const options = {

        responsive: true,
        hoverBorderWidth: 5,
        cutout: '85%',        //
        // circumference: 180,  //  Pour Doughnut ou Pie
        rotation: 200,      //
        // borderRadius: 5,
        borderWidth: 3,
        hoverBorderWidth: 1,
        hoverBorderColor: 'black',
        hoverOffset: 5,
        borderColor: ['rgba(1, 184, 170, 1)',
                          'rgba(201, 27, 61, 1)',
                          'rgba(253, 98, 94, 1)',
                          'rgba(55, 70, 73, 1)',
                          'rgba(242, 200, 15, 1)',
                          'rgba(131, 196, 57, 1)',
                          'rgba(48, 156, 159, 1)',
                          'rgba(110, 0, 85, 1)'],
        backgroundColor: ['rgba(1, 184, 170, .6)',
                            'rgba(201, 27, 61, .8)',
                            'rgba(253, 98, 94, .8)',
                            'rgba(55, 70, 73, .8)',
                            'rgba(242, 200, 15, .8)',
                            'rgba(131, 196, 57, .8)',
                            'rgba(48, 156, 159, .8)',
                            'rgba(110, 0, 85, .8)'],
        elements: {
            bar: {
                borderWidth: 2,
            },
        },

        
        plugins: {
            datalabels:{
                formatter: (val, ctx) => {
                    
                    return ctx.chart.data.labels[ctx.dataIndex] + "\n" + val;
                  },
                display: true,
                color: 'grey',
                anchor: 'center',
                align: 'start',
                offset: 20,
                font: {
                    size: 11
                }
            },
            legend: {
                display: false,
                position: 'top',
                align: 'start'
            },
            title: {
                display: false,
                text: '',
                align: 'start'
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
                    <Pie data={props.data} plugins={[ChartDataLabels]} options={options}/> 
                </div> 
        )
    )
}

export default Piechart
