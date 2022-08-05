import React from 'react'
import Ant_BarStack from '../../components/AntChart/Ant_BarStack'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import TableSet from '../../components/Table/TableSet'
import GetApi from '../../data/GetApi'
import { Getter } from '../../data/Getter'
import { HeadCellsMonitoringCloseOutPhase, HeadCellsMonitoringDetailsTable, HeadCellsMonitoringFollowUpPhase, HeadCellsMonitoringInitiationPhase, HeadCellsMonitoringSelectionPhase } from '../../data/TableData'
import { Api } from '../../data/UrlApi'
import './../Pages.css'

interface Props {}

function Details(props: Props) {
    const {} = props

    console.log('datarder : ',GetApi({url:Api.MonitoringDetails}))


    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "68vw"}}>
                <div className='title_block'>
                    Monitoring details
                </div>
                <Ant_BarStack data={GetApi({url:Api.MonitoringDetails})} />
            </div>

            <div className='block' style={{width: "68vw"}}>
				<div className='title_block'>
					Details table
				</div>
                <TableSet header={HeadCellsMonitoringDetailsTable} url={Api.MonitoringDetailsTable} searchBar='true'/>
                <BtnExportExcel apiData={GetApi({url:Api.MonitoringDetailsTable})}/>
			</div>



        </div>
        </>
    )
}

export default Details
