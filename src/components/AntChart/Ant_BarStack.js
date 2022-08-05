import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column, Bar } from '@ant-design/plots';
import GetApi from '../../data/GetApi';
import { Api } from '../../data/UrlApi';

const Ant_BarStack = (props) => {

  console.log('propsdata: ', props.data)

  const config = {
    data: props.data,
    isStack: true,
    xField: 'value',
    yField: 'label',
    seriesField: 'type',
    label: {
      position: 'middle',
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

    console.log('porpsdata : ',props.data)
  // console.log('papi',api)
  // console.log("listeri : ", listerine)

  if(props.data.length == 0){
      return (
          <div style={{width:'100%'}}>
                No Data Found
          </div>
      ) 
  }
  else{
      return (
          <div style={{width:'100%', height:(listerine.length*9).toString()+'vh'}}>
                <Bar {...config} />
          </div>
      ) 
  }

};

export default Ant_BarStack
