import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';
import GetApi from '../../data/GetApi';
import { Api } from '../../data/UrlApi';
import SkeletonField from '../Loading/SkeletonField';

const Ant_HorizontalBar = (props) => {

    const [isloading, setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

  const config = {
    data: props.data,
    isGroup: true,
    xField: 'value',
    yField: 'label',

    color: ['rgb(214, 69, 44)', 'rgb(34, 112, 230)', 'rgb(233, 211, 15)'],
    seriesField: 'type',
    marginRatio: 0,
    dodgePadding: 1,
    intervalPadding: 15,
    label: {
      position: 'right',
      // 'left', 'middle', 'right'
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  const listerine = []

  const api = props.data
  api.map((head) => {
    if(listerine.includes(head.label)){
      
    }else{
      listerine.push(head.label)
    }
  })

//   return (
//         <div style={{width:'100%', height:(listerine.length*6).toString()+'vh'}}>
//             <Bar {...config} />;
//         </div>
//   )

  return (
    isloading ? (
        <SkeletonField />
    ) : (
        <div style={{width:'100%', height:(listerine.length*7).toString()+'vh'}}>
            <Bar {...config} />;
        </div>
    )
  ) 
};


export default Ant_HorizontalBar
