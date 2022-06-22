import { useState, useEffect, useCallback, useRef } from 'react';
import Button from '@mui/material/Button';
import * as IoIcons from "react-icons/io5"
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);
// import { Bar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter } from 'react-chartjs-2';


export default function VerticalBar(props) {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const options = {

        responsive: true,
        hoverBorderWidth: 5,
        borderColor: 'rgba(75,192,192,1)',
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
            <Box style={{display:'flex' ,justifyContent:'space-evenly'}}>
                <Skeleton sx={{margin:'5px'}} width={210} height={300}/>
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={321}/>
                <Skeleton sx={{margin:'5px'}}  animation={false} width={210} height={42}/>
                <Skeleton sx={{margin:'5px'}} width={210} height={98}/>
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={321}/>
                <Skeleton sx={{margin:'5px'}}  animation={false} width={210} height={42}/>
                <Skeleton sx={{margin:'5px'}} width={210} height={98}/>
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={7}/>
                <Skeleton sx={{margin:'5px'}}  animation={false} width={210} height={280}/>
                <Skeleton sx={{margin:'5px'}} width={210} height={347}/>
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={150}/>
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={150}/>
                <Skeleton sx={{margin:'5px'}}  animation={false} width={210} height={224}/>
                <Skeleton sx={{margin:'5px'}} width={210} height={300}/>
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={7}/>
                <Skeleton sx={{margin:'5px'}}  animation={false} width={210} height={280}/>
                <Skeleton sx={{margin:'5px'}} width={210} height={347}/>
                <Skeleton sx={{margin:'5px'}} width={210} height={98}/>
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={7}/>
                <Skeleton sx={{margin:'5px'}}  animation={false} width={210} height={280}/>
                <Skeleton sx={{margin:'5px'}} width={210} height={347}/>
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={150}/>
                <Skeleton sx={{margin:'5px'}}  animation={false} width={210} height={224}/>
                <Skeleton sx={{margin:'5px'}} width={210} height={300}/>
                
                <Skeleton sx={{margin:'5px'}}  animation="wave" width={210} height={321}/>
                <Skeleton sx={{margin:'5px'}}  animation={false} width={210} height={42}/>
                
            </Box>
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

