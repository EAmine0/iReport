import React from 'react'
import { useRef, useEffect } from "react";
import { Chart, LinearScale, Tooltip } from 'chart.js'
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap'
Chart.register(TreemapController,TreemapElement,LinearScale,Tooltip)



function Treemap(props) {

    const canvas = useRef(null);

    useEffect(() => {
        const data2 = [4,7,10,34,33,45]
        const data = [1, 2, 4, 8, 16, 32, 64]
        const data3 = [
            {category: 'United States', value: 7, name:"francia"},
            {category: 'France', value: 7, name:'new england'},
            {category: 'Netherlands', value: 5},
            {category: 'Canada', value: 5},
            {category: 'Italy', value: 4},
            {category: 'Brazil', value: 2},
            {category: 'Norway', value: 2},
            {category: 'Japan', value: 1},
            {category: 'Spain', value: 1},
          ]

        const chart = new Chart(canvas.current, {

            type: "treemap",
            data: {
                 
                datasets: [
                {
                    label: 'heuu',
                    tree: data3,
                    labels: {
                        display: true,
                        color: 'white',
                        hoverColor: 'black',
                        font:{
                            size: 9,
                        },
                        align: 'left',
                        position: 'bottom',
                    },
                    key: 'value',
                    groups: ['category'],
                    borderWidth: 2,
                    borderColor: ['rgba(1, 184, 170, 1)',
                          'rgba(201, 27, 61, 1)',
                          'rgba(253, 98, 94, 1)',
                          'rgba(55, 70, 73, 1)',
                          'rgba(242, 200, 15, 1)',
                          'rgba(131, 196, 57, 1)',
                          'rgba(48, 156, 159, 1)',
                          'rgba(110, 0, 85, 1)'],
                    backgroundColor: ["rgba(1, 184, 170, 1)"],
                    spacing: 1,
                    hoverBorderWidth: 5,
                    hoverBorderColor: 'rgba(1, 184, 170, 1)',
                    hoverBackgroundColor: "rgba(1, 184, 170, .3)",
                }
                ]
            },
            options: {
                plugins:{
                    title:{
                        display: false,
                        text: 'My treemap chart'
                    },
                    legend:{
                        display: false,
                    }
                }
            }

        });

        return () => chart.destroy();
    }, [canvas, props]);

    return (
        <div>
        <canvas ref={canvas} />
        </div>
    );

    // return (
    //     <>
    //     hayhay
    //     </>
    // )

    // const options = {

    //     responsive: true,
    //     hoverBorderWidth: 5,
    //     backgroundColor: 'rgba(75,192,192,0.2)',
    //     hoverBorderWidth: 5,

    //     elements: {
    //         bar: {
    //             borderWidth: 2,
    //         },
    //     },

    //     plugins: {
    //         datalabels:{
    //             display: true,
    //             color: 'black',
    //             anchor: 'end',
    //             align: 'top',
    //             offset: -3
    //         },
    //     },

    // };

    // const data = {
    //     datasets: [
    //       {
    //         label: 'My treemap dataset',
    //         tree: [15, 6, 6, 5, 4, 3, 2, 2],
    //         borderColor: 'green',
    //         borderWidth: 1,
    //         spacing: 0,
    //         backgroundColor: "red",
    //       }
    //     ],
    //   }


    // return (
    //     <div style={{width:'100%', height:'100%'}}>
    //         <Treemap data={data} options={options}/> 
    //      </div>
    // )
}

export default Treemap
