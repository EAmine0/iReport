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


function TimelineChart() {

    // const dater = '2015-05-18'
    // //console.log('=> dater : ', dater.DateTime())
    
    const options = {
        indexAxis: 'y',
        categoryPercentage: 1,
        barPercentage: .9,
        scales: {
            x: {
                min: '2015-04-01',
                max: '2018-04-01',
                position:'top',
                type: 'time',
                
                time:{
                    unit: 'quarter'
                }
            },
            y: {
                beginAtZero: true,
                
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        hoverBorderWidth: 5,
        // barThickness: 29,
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
            tooltip: {
                padding: 15,
                callbacks: {
                    title: function(context) {
                        // //console.log('title : ', context[0])
                        return context[0].dataset.label;
                    },
                    label: function(context) {
                        // let data = context.dataset.label || '';
                        // //console.log("azert : ", context.dataset.data)
                        return context.dataset.data[context.dataIndex].label;
                    },
                    afterLabel: function(context) {
                        // //console.log('title : ', context[0])
                        return 'date : ' + context.dataset.data[context.dataIndex].date;
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
                    // //console.log('ctx',ctx)
                    // //console.log('val',val)
                    // data.datasets[0]?.resolved
                    // //console.log('pos',data)
                    // return data.labels[ctx.dataIndex];
                    // //console.log('val',val)
                    return val.label
                  },
                display: true,
                color: 'white',
                anchor: 'center',
                clamp: true,
                font: {
                    size: 9,
                }
            },
        },
    };


    const tooltipLine = {
        id: 'tooltipLine',
        afterDraw: chart => {
            // console.log('newhence : ',chart.tooltip._active[0])
            if (chart.tooltip?._active?.length) {
                let xbefore = chart.tooltip._active[0].element.base;
                let xafter = chart.tooltip._active[0].element.x;
                let yAxis = chart.scales.y;
                let ctx = chart.ctx;

                console.log("ctxx : ", ctx)

                ctx.save();
                ctx.beginPath();
                ctx.moveTo((xbefore+xafter)/2, yAxis.top);
                ctx.lineTo((xbefore+xafter)/2, yAxis.bottom);
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ff0000';
                ctx.stroke();
                ctx.restore();

                // ctx.moveTo((xbefore+xafter)/2, yAxis.top);
                ctx.font = '14px serif';
                ctx.fillStyle = "black";
                ctx.fillText('Hello world', (xbefore+xafter)/2, 55);
                // ctx.textAlign = "center";
                
                
            }
        }
    }


    const [lev, setStatus] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_timeline") 
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

    const dataRegulatory = []    
    const dataStartup = [] 
    const dataCoredocs = [] 
    const dataSiteselection = [] 
    const dataInitiation = [] 
    const dataRecruitment = [] 
    const dataMonitoring = [] 
    const dataDatamanagement = [] 
    const dataStatistics = [] 
    lev.map((head) => {
        if (head.phase == 'Regulatory') {
            dataRegulatory.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
        if (head.phase == 'Start-up') {
            dataStartup.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
        if (head.phase == 'Core docs') {
            dataCoredocs.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
        // //console.log('core docs ',dataCoredocs)
        if (head.phase == 'Sites selection') {
            dataSiteselection.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
        if (head.phase == 'Initiation') {
            dataInitiation.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
        if (head.phase == 'Recruitment') {
            dataRecruitment.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
        if (head.phase == 'Recruitment') {
            dataMonitoring.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
        if (head.phase == 'Data Management') {
            dataDatamanagement.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
        if (head.phase == 'Statistics') {
            dataStatistics.push({
                label: head.milestone,
                y: 1,
                x: [head.pre_date, head.post_date],
                date: head.date
            })
        }
    })

    // //console.log('data regulatory : ', dataRegulatory)

    //---------------------------création automatique
    // var lineChartData = { labels: ['a', 'bd', '3','rt'], datasets: [] }
    // const array = ["[1,3,4]","[1,2,3,4]","[1,2,3,4]","[1,2,3,4]"];

    // function getDataset(index, data) { 
    //     return { 
    //         label: 'Label '+ index, 
    //         data: data,
    //         borderColor : 'rgba(35, 30, 73, 1)',
    //         backgroundColor : 'rgba(55, 70, 73, 1)',
    //         } 
    //     }

    // array.forEach(function (a, i) { 
    //     lineChartData.datasets.push(getDataset(i,JSON.parse(a))); 
    //     })

    // //console.log('linechartdata : ',lineChartData);
    

    // //console.log('data3 : ', data3)

    const data3 = [
        {label: 'Last Approval LEC/IRB', y: 1, x: ['2015-09-14']},
        {label: 'First Site Initiation Visit', y: 1, x: ['2015-09-28', '2015-10-28']},
        {label: 'FPI(First ISF signed)', y: 1, x: ['2015-07-28', '2015-08-28']},
        {label: 'Last Close-out Visit', y: 1, x: ['2015-09-14', '2015-10-14']},
        {label: 'Last Approval LEC/IRB', y: 1, x: ['2015-09-14', '2015-10-14']},
        {label: 'First Site Initiation Visit', y: 1, x: ['2015-09-28', '2015-10-28']},
        {label: 'FPI(First ISF signed)', y: 1, x: ['2015-07-28', '2015-08-28']},
        {label: 'Last Close-out Visit', y: 1, x: ['2015-09-14', '2015-10-14']},
    ]

    const data33 = [
        {label: 'Last Approval LEC/IRB', y: 1, x: ['2015-09-14', '2015-10-14']},
        {label: 'First Site Initiation Visit', y: 1, x: ['2015-09-28', '2015-10-28']},
        {label: 'FPI(First ISF signed)', y: 1, x: ['2015-07-28', '2015-08-28']},
        {label: 'Last Close-out Visit', y: 1, x: ['2015-09-14', '2015-10-14']},
        {label: 'FPI(First ISF signed)', y: 1, x: ['2015-07-28', '2015-08-28']},
        {label: 'Last Close-out Visit', y: 1, x: ['2015-09-14', '2015-10-14']},
    ]

    const datavia = {
        labels : [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
        datasets: [
            {
                label: 'Regulatory',
                data: dataRegulatory,
                borderColor : 'rgba(55, 70, 73, 1)',
                backgroundColor : 'rgba(55, 70, 73, 1)',
            },
            {
                label: 'Start-up',
                data: dataStartup,
                borderColor : 'rgba(253, 98, 94, 1)',
                backgroundColor : 'rgba(253, 98, 94, 1)',
            },
            {
                label: 'Core docs',
                data: dataCoredocs,
                borderColor : 'rgba(242, 200, 15, 1)',
                backgroundColor : 'rgba(242, 200, 15, 1)',
            },
            {
                label: 'Site selection',
                data: dataSiteselection,
                borderColor : 'rgba(101, 137, 142, 1)',
                backgroundColor : 'rgba(101, 137, 142, 1)',
            },
            {
                label: 'Initiation',
                data: dataInitiation,
                borderColor : 'rgba(138, 212, 235, 1)',
                backgroundColor : 'rgba(138, 212, 235, 1)',
            },
            {
                label: 'Recruitment',
                data: dataRecruitment,
                borderColor : 'rgba(254, 150, 102, 1)',
                backgroundColor : 'rgba(254, 150, 102, 1)',
            },
            {
                label: 'Monitoring',
                data: dataMonitoring,
                borderColor : 'rgba(166, 105, 153, 1)',
                backgroundColor : 'rgba(166, 105, 153, 1)',
            },
            {
                label: 'Data management',
                data: dataDatamanagement,
                borderColor : 'rgba(110, 0, 85, 1)',
                backgroundColor : 'rgba(110, 0, 85, 1)',
            },
            {
                label: 'Statistics',
                data: dataStatistics,
                borderColor : 'rgba(48, 156, 159, 1)',
                backgroundColor : 'rgba(48, 156, 159, 1)',
            }
        ]
    }
    // //console.log('datavia', datavia)
    
    // const data ={
    //     labels : ['aze','fsd','qs','d'],
    //     datasets: [
            
    //         {
    //             label: 'Regulatory',
    //             data: [
    //                 ['2015-09-14', '2015-10-14'],
    //                 ['2015-09-28', '2015-10-28'],
    //                 ['2016-07-28', '2016-08-28'],
    //                 ['2015-09-14', '2015-10-14'],
    //             ],
    //             borderColor : 'rgba(55, 70, 73, 1)',
    //             backgroundColor : 'rgba(55, 70, 73, 1)',
    //             heuss: panon,
    //         },
    //         {
    //             label: 'Start-up',
    //             data: [
    //                 ['2015-07-17', '2015-08-17'],
    //                 ['2015-11-17', '2015-12-17'],
    //                 ['2015-11-25', '2015-12-25'],
    //                 ['2015-12-11', '2016-01-11'],
    //             ],
    //             borderColor : 'rgba(253, 98, 94, 1)',
    //             backgroundColor : 'rgba(253, 98, 94, 1)',
    //             heuss:['un', 'deux', 'trois', 'quatre']
    //         }
    //         ,
    //         {
    //             label: 'Core docs',
    //             data: [
    //                 ['2015-09-15', '2015-10-15'],
    //                 ['2015-09-28', '2015-10-28'],
    //                 ['2015-08-06', '2015-09-06'],
    //                 ['2015-10-04', '2015-11-04'],
    //             ],
    //             borderColor : 'rgba(242, 200, 15, 1)',
    //             backgroundColor : 'rgba(242, 200, 15, 1)',
    //         }
    //         ,
    //         {
    //             label: 'Sites selection',
    //             data: [
    //                 ['2015-07-10', '2015-08-10'],
    //                 ['2015-06-09', '2015-07-09'],
    //             ],
    //             borderColor : 'rgba(101, 137, 142, 1)',
    //             backgroundColor : 'rgba(101, 137, 142, 1)',
    //         }
    //         ,
    //         {
    //             label: 'Initiation',
    //             data: [
    //                 ['2015-11-19', '2015-12-19'],
    //                 ['2017-06-07', '2017-07-07'],
    //                 ['2015-11-23', '2015-12-23'],
    //                 ['2015-11-27', '2015-12-27'],
    //             ],
    //             borderColor : 'rgba(138, 212, 235, 1)',
    //             backgroundColor : 'rgba(138, 212, 235, 1)',
    //         }
    //         ,
    //         {
    //             label: 'Recruitment',
    //             data: [
    //                 ['2016-03-17', '2016-04-17'],
    //                 ['2017-10-09', '2017-11-09'],
    //                 ['2015-11-21', '2015-12-21'],
    //             ],
    //             borderColor : 'rgba(254, 150, 102, 1)',
    //             backgroundColor : 'rgba(254, 150, 102, 1)',
    //         }
            
    //     ]
    // }

    // ChartDataLabels
    // tooltipLine

    return (
        <div style={{width:'100%', height:'7000px'}}>
            <Bar data={datavia} plugins={[ChartDataLabels,tooltipLine]} options={options}/> 
        </div>
    )
}

export default TimelineChart
