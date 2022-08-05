import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots';
import { autocompleteClasses } from '@mui/material';

const Ant_Liquid = (props) => {
  const config = {
    percent: props.percentage,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4,
    },
    statistic: {
        content: {
          style: {
            fontSize: '.7vw',
            fontWeight: 'bold'
            // lineHeight: '36px',
          },
        },
      },
    wave: {
      length: 128,
    },
    theme: {
      styleSheet: {
        brandColor: 'l(260) 0:#e74c3c 1:#f1c40f',
      },
    },
  };
  return(
      <div style={{ padding: '0px 0px'}}>
            <Liquid {...config} style={{height:'150px'}} />
      </div>
  ) 
};

export default Ant_Liquid