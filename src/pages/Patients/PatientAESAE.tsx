import React from 'react'
import Ant_BarStack from '../../components/AntChart/Ant_BarStack'
import HorizontalBar from '../../components/ChartsJs/HorizontalBar'
import HorizStackBar from '../../components/ChartsJs/HorizStackBar'
import TableSet from '../../components/Table/TableSet'
import { DataDocumentType, DataPatientAEPerType } from '../../data/ChartData'
import GetApi from '../../data/GetApi'
import { HeadCellsPatientsAEDetails, HeadCellsSiteDocumentsDetails } from '../../data/TableData'
import { Api } from '../../data/UrlApi'

interface Props {}

function PatientAESAE(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    AE per type / seriousness
                </div>
                <HorizontalBar   data={DataPatientAEPerType()}/>
            </div>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    AE details
                </div>
                <TableSet  header={HeadCellsPatientsAEDetails} url={Api.patientsAEDetails} searchBar='false'/>
            </div>

        </div>
        
        </>
    )
}

export default PatientAESAE
