import { useState, useEffect, useCallback, useRef } from 'react';
import Button from '@mui/material/Button';
import * as IoIcons from "react-icons/io5"
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import SkeletonField from '../Loading/SkeletonField';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);
// import { Bar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter } from 'react-chartjs-2';


export default function VerticalBar(props) {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3250)
    }, [])


    // if(props.axisTitle == 'true'){

    // }else{

    // }

    let delayed;
    const options = {

        responsive: true,
        // maintainAspectRatio: false,
        hoverBorderWidth: 5,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        scales: {
            x: {
                title: {
                    display: props.axisTitle,
                    text: props.xTitle,
                    font: function(context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 55);
        
                        return {
                            // weight: 'bold',
                            size: size
                        };
                    }
                },
                ticks: {
                    font: function(context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 55);
        
                        return {
                            // weight: 'bold',
                            size: size
                        };
                    }
                }
            },
            y: {
                title: {
                    display: props.axisTitle,
                    text: props.yTitle,
                    font: function(context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 55);
        
                        return {
                            // weight: 'bold',
                            size: size
                        };
                    }
                },
                ticks: {
                    font: function(context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 55);
        
                        return {
                            // weight: 'bold',
                            size: size
                        };
                    }
                }
            }
        },
        
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
        
        plugins: {
            legend: {
                labels: {
                    font: function(context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 55);
        
                        return {
                            // weight: 'bold',
                            size: size
                        };
                    }
                }
            },
            datalabels:{
                display: true,
                color: 'black',
                anchor: 'end',
                align: 'top',
                offset: -3
            },
        },

    };

    let ref = useRef(null)
    const downloadImage = useCallback(()=>{
        const link = document.createElement("a")
        link.download = "chart.png"
        link.href = ref.current.toBase64Image()
        link.click()
    }, [])

    // const arret = DataSiteStatus();

    return (
        
        loading ? (
            <SkeletonField />
        ) : (
            <>
                <div style={{position:'absolute', right:'30px', top:'0px'}}>
                    <Button
                        id="basic-button"
                        onClick={downloadImage}
                        style={{color: 'grey', padding:'0px'}}
                        className='BtnMUId'
                    >
                        <span  className='iconICON'>
                            <IoIcons.IoDownloadOutline/>
                        </span>
                        
                    </Button>
                </div>
                <div style={{width:'100%', height:'100%'}}>
                    
                    <Bar data={props.data} plugins={[ChartDataLabels]} options={options} ref={ref}/> 
                </div>
            </>
            
        )
        
     
    )
}

