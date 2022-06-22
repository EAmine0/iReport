import React from 'react'
import {Treemap, Gauge} from '@ant-design/plots'
import { useState } from 'react'
import { useEffect } from 'react'

const Ant_Treemap = () => {
    const data = {
        name: 'root',
        children: [
        {
            name: 'United States',value: 7,
        },
        {
            name: 'France',value: 7,
        },
        {
            name: 'Netherlands',value: 5,
        },
        {
            name: 'Canada',value: 5,
        },
        {
            name: 'Italy',value: 4,
        },
        {
            name: 'Brazil',value: 2,
        },
        {
            name: 'Norway',value: 2,
        },
        {
            name: 'Japan',value: 1,
        },
        {
            name: 'Span',value: 1,
        }
        ],
    };

    const config = {
        data,
        colorField: 'name',
    };

    return (
        <Treemap {...config} />
    )

//     const config = {
//         percent: 0.75,
//         range: {
//           ticks: [0, 1 / 3, 2 / 3, 1],
//           color: ['#F4664A', '#FAAD14', '#30BF78'],
//         },
//         indicator: {
//           pointer: {
//             style: {
//               stroke: '#D0D0D0',
//             },
//           },
//           pin: {
//             style: {
//               stroke: '#D0D0D0',
//             },
//           },
//         },
//         statistic: {
//           content: {
//             style: {
//               fontSize: '36px',
//               lineHeight: '36px',
//             },
//           },
//         },
//       };
//       return <Gauge {...config} />;
}

export default Ant_Treemap
