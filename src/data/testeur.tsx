import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import React from 'react'
import GetApi from './GetApi';
import { Api } from './UrlApi';



export default function Testeur() {
    const url = Api.siteIdentifiedPerCountry

    const api = GetApi({url:url})

    const t_labelSet:any = ['France', 'United States', 'Netherlands','Canada', 'Italy', 'Brazil']
    const t_data:any = [37,  14 ,  5 , 5 ,  4 ,  2  ]
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

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "prop.label1",
            data: t_data,//[7,17,3,3], 
          },
        ],
      }
  
    return data
}

