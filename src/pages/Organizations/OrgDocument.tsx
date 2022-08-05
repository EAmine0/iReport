import React from 'react'
import Ant_BarStack from '../../components/AntChart/Ant_BarStack'
import HorizStackBar from '../../components/ChartsJs/HorizStackBar'
import TableSet from '../../components/Table/TableSet'
import { DataDocumentType } from '../../data/ChartData'
import GetApi from '../../data/GetApi'
import { HeadCellsOrganizationDetails, HeadCellsSiteDocumentsDetails } from '../../data/TableData'
import { Api } from '../../data/UrlApi'

interface Props {}

function OrgDocument(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    Document
                </div>
                {/* <HorizStackBar data={DataDocumentType()} /> */}
                <Ant_BarStack data={GetApi({url:Api.organizationDocument})} />
            </div>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    Documents detail
                </div>
                <TableSet header={HeadCellsOrganizationDetails} url={Api.organizationDocumentDetails} searchBar="true" />
            </div>

        </div>
        
        </>
    )
}

export default OrgDocument
