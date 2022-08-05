import React from 'react'
import GetApi from '../../data/GetApi';
import { Api } from '../../data/UrlApi';
import Ant_Liquid from '../AntChart/Ant_Liquid';

interface Props {urlQueries:any}

function Cancelled(props: Props) {
    const {urlQueries} = props

    const api = GetApi({url:urlQueries})
    // console.log('api : ', api)

    // console.log('api 2 : ', api[0]?.label)
    const listLabel = api.map((head:any)=>head.label)

    // console.log('apiindex : ', api[listLabel.indexOf('Closed')]?.value)

    if(listLabel.includes('Cancelled')){
        return(
            <>
            <div style={{width:"16%"}}>
             <Ant_Liquid percentage={(api[listLabel.indexOf('Cancelled')]?.value/api[listLabel.indexOf('Issued')]?.value)} /> Cancelled
            </div>
            </>
        )
    }
    else{
        return null
    }
}

export default Cancelled