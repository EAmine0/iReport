import React from 'react'
import GetApi from '../../data/GetApi';
import { Api } from '../../data/UrlApi';
import Ant_Liquid from '../AntChart/Ant_Liquid';

interface Props {urlQueries : any}

function Sent(props: Props) {
    const {urlQueries} = props

    const api = GetApi({url:urlQueries})
    const listLabel = api.map((head:any)=>head.label)

    if(listLabel.includes('Sent')){
        return(
            <>
            <div  style={{width:"16%"}}>
                <Ant_Liquid percentage={(api[listLabel.indexOf('Sent')]?.value/api[listLabel.indexOf('Issued')]?.value)} /> Sent
            </div>
            </>
        )
    }
    else{
        return null
    }
}

export default Sent