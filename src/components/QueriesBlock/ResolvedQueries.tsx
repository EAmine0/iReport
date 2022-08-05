import React from 'react'
import GetApi from '../../data/GetApi';
import { Api } from '../../data/UrlApi';
import Ant_Liquid from '../AntChart/Ant_Liquid';

interface Props {urlQueries : any}

function Resolved(props: Props) {
    const {urlQueries} = props

    const api = GetApi({url:urlQueries})
    const listLabel = api.map((head:any)=>head.label)

    if(listLabel.includes('Resolved')){
        return(
            <>
            <div  style={{width:"16%"}}>
            <Ant_Liquid percentage={(api[listLabel.indexOf('Resolved')]?.value/api[listLabel.indexOf('Issued')]?.value)} /> Resolved
            </div>
            </>
        )
    }
    else{
        return null
    }
}

export default Resolved