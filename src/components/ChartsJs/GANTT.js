import { useState, useEffect, useCallback, useRef } from 'react';
import 'chartjs-adapter-date-fns';
import Button from '@mui/material/Button';
import * as IoIcons from "react-icons/io5"
import { Skeleton } from '@mui/material';
import { Box } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS,ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement,LineElement,BarElement,PointElement,BarController,BubbleController,DoughnutController,LineController,PieController,PolarAreaController,RadarController,ScatterController,CategoryScale,LinearScale,LogarithmicScale,RadialLinearScale,TimeScale,TimeSeriesScale,Decimation,Filler,Legend,Title,Tooltip,SubTitle);

// import { Bar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter } from 'react-chartjs-2';


function GANTT() {

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                min:'2021-01-01',
                position:'top',
                type: 'time',
                time:{
                    unit: 'quarter'
                }
            },
            y: {
                beginAtZero: true
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

        plugins: {
            datalabels:{
                display: false,
                color: 'black',
                anchor: 'end',
                align: 'right',
                offset: 3
            },
        },
    };

    const data ={
        labels : ['Belgium', 'Canada','Belgium', 'Canada','Belgium', 'Canada', 'Canada','Belgium', 'Canada'],
        datasets: [
            {
                label: 'Regulatory planned',
                data: [
                    ['2021-01-01', '2021-04-02'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-01-01', '2021-04-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-01-01', '2021-04-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-01-01', '2021-04-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                ],
                borderColor : 'rgba(55, 70, 73, 1)',
                backgroundColor : 'rgba(55, 70, 73, 1)',
            },
            {
                label: 'Regulatory actual',
                data: [
                    ['2021-01-01', '2021-04-11'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-01-01', '2021-04-11'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-01-01', '2021-04-11'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-01-01', '2021-04-11'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                ],
                borderColor : 'rgba(55, 70, 73, 1)',
                backgroundColor : 'rgba(55, 70, 73, 1)',
            },
            {
                label: 'Start-up planned',
                data: [
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                ],
                borderColor : 'rgba(253, 98, 94, 1)',
                backgroundColor : 'rgba(253, 98, 94, 1)',
            },
            {
                label: 'Start-up actual',
                data: [
                    ['2021-04-01', '2021-07-21'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-21'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-21'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-21'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                ],
                borderColor : 'rgba(253, 98, 94, 1)',
                backgroundColor : 'rgba(253, 98, 94, 1)',
            },
            {
                label: 'Core docs planned',
                data: [
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                ],
                borderColor : 'rgba(242, 200, 15, 1)',
                backgroundColor : 'rgba(242, 200, 15, 1)',
            },
            {
                label: 'Core docs actual',
                data: [
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                ],
                borderColor : 'rgba(242, 200, 15, 1)',
                backgroundColor : 'rgba(242, 200, 15, 1)',
            },
            {
                label: 'Sites selection planned',
                data: [
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                ],
                borderColor : 'rgba(101, 137, 142, 1)',
                backgroundColor : 'rgba(101, 137, 142, 1)',
            },
            {
                label: 'Sites selection actual',
                data: [
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                ],
                borderColor : 'rgba(101, 137, 142, 1)',
                backgroundColor : 'rgba(101, 137, 142, 1)',
            },
            {
                label: 'Initiation planned',
                data: [
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-01'],
                ],
                borderColor : 'rgba(138, 212, 235, 1)',
                backgroundColor : 'rgba(138, 212, 235, 1)',
            },
            {
                label: 'Initiation actual',
                data: [
                    ['2021-04-01', '2021-07-21'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-21'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-21'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-21'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-04-01', '2021-07-21'],
                ],
                borderColor : 'rgba(138, 212, 235, 1)',
                backgroundColor : 'rgba(138, 212, 235, 1)',
            },
            {
                label: 'Recruitment planned',
                data: [
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                ],
                borderColor : 'rgba(254, 150, 102, 1)',
                backgroundColor : 'rgba(254, 150, 102, 1)',
            },
            {
                label: 'Recruitment actual',
                data: [
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-07-01', '2021-08-01'],
                ],
                borderColor : 'rgba(254, 150, 102, 1)',
                backgroundColor : 'rgba(254, 150, 102, 1)',
            },
            {
                label: 'Monitoring planned',
                data: [
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                ],
                borderColor : 'rgba(166, 105, 153, 1)',
                backgroundColor : 'rgba(166, 105, 153, 1)',
            },
            {
                label: 'Monitoring actual',
                data: [
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                    ['2021-04-01', '2021-07-01'],
                    ['2021-09-01', '2021-10-03'],
                ],
                borderColor : 'rgba(166, 105, 153, 1)',
                backgroundColor : 'rgba(166, 105, 153, 1)',
            }
            
        ]
    }

    // const data ={
    //     labels : ['task 1', 'task2','task 3', 'task 4'],
    //     datasets: [
    //         {
    //             label: 'planned',
    //             data: [
    //                 ['2021-01-01', '2021-04-01'],
    //                 ['2021-04-01', '2021-07-01'],
    //                 ['2021-03-01', '2021-05-31'],
    //                 ['2021-06-01', '2021-09-30'],
    //             ],
    //             borderColor: ['rgba(1, 184, 170, 1)',
    //                             'rgba(201, 27, 61, 1)',
    //                             'rgba(253, 98, 94, 1)',
    //                             'rgba(55, 70, 73, 1)',
    //                             'rgba(242, 200, 15, 1)',
    //                             'rgba(131, 196, 57, 1)',
    //                             'rgba(48, 156, 159, 1)',
    //                             'rgba(110, 0, 85, 1)'],
    //             backgroundColor: ['rgba(1, 184, 170, .6)',
    //                                 'rgba(201, 27, 61, .8)',
    //                                 'rgba(253, 98, 94, .8)',
    //                                 'rgba(55, 70, 73, .8)',
    //                                 'rgba(242, 200, 15, .8)',
    //                                 'rgba(131, 196, 57, .8)',
    //                                 'rgba(48, 156, 159, .8)',
    //                                 'rgba(110, 0, 85, .8)'],
    //         },
    //         {
    //             label: 'actual',
    //             data: [
    //                 ['2021-01-01', '2021-08-25'],
    //                 ['2021-04-01', '2021-07-15'],
    //                 ['2021-03-01', '2021-05-31'],
    //                 ['2021-06-01', '2021-10-30'],
    //             ],
    //             borderColor: ['rgba(1, 184, 170, 1)',
    //                             'rgba(201, 27, 61, 1)',
    //                             'rgba(253, 98, 94, 1)',
    //                             'rgba(55, 70, 73, 1)',
    //                             'rgba(242, 200, 15, 1)',
    //                             'rgba(131, 196, 57, 1)',
    //                             'rgba(48, 156, 159, 1)',
    //                             'rgba(110, 0, 85, 1)'],
    //             backgroundColor: ['rgba(1, 184, 170, .6)',
    //                                 'rgba(201, 27, 61, .8)',
    //                                 'rgba(253, 98, 94, .8)',
    //                                 'rgba(55, 70, 73, .8)',
    //                                 'rgba(242, 200, 15, .8)',
    //                                 'rgba(131, 196, 57, .8)',
    //                                 'rgba(48, 156, 159, .8)',
    //                                 'rgba(110, 0, 85, .8)'],
    //         }
            
    //     ]
    // }

    //Pour height => = nb_de_label*200 en px
    return (
        <div style={{width:'100%', height:'1800'+'px'}}> 
            <Bar data={data} plugins={[ChartDataLabels]} options={options}/> 
        </div>
    )
}

export default GANTT


// const [lev, setStatus] = useState([])
//     useEffect(() => {
//         fetch("http://localhost:5000/api/OpDashboard/site_status") // 1 -mettre l'url de l'api
//             .then((response) => response.json())
//             .then((json) => setStatus(json))

//     },[])

//     console.log("lever : ",lev)
//     const label = []                    //
//     const status_total = []             // 2 - ajouter le nombre de liste nécessaire
//     const last_status_total = []       //

//     lev.map((head) => {
//         label.push(head.label)                             //
//         status_total.push(head.status_total)                // 3 - Push vers les listes
//         last_status_total.push(head.last_status_total)     //
        
//     })

//     // 4 - Les afficher
//     const data ={
//     labels : label,
//     datasets: [
//         {
//             label: 'Status total',
//             data: status_total,
//             borderColor: 'rgba(75,192,192,1)'
//         },
//         {
//             label: 'Last status total',
//             data: last_status_total,
//             borderColor: '#742774'
//         }
        
//     ]
//     }
