import React from 'react'
import TableSet from '../../components/Table/TableSet'
import { HeadCellsSiteActivitiesMonitoring, HeadCellsSiteActivitiesPatients} from '../../data/TableData'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import { Api } from '../../data/UrlApi'
import VerticalBar from '../../components/ChartsJs/VerticalBar'
import { DataActivitySAE } from '../../data/ChartData'

interface Props {}

function Activities(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "68vw"}}>
				<div className='title_block'>
                Sites activity - Monitoring
				</div>
				<TableSet header={HeadCellsSiteActivitiesMonitoring} url={Api.activityMonitoring} searchBar='true' />
				{/* <BtnExportExcel /> */}
			</div>

            <div className='block' style={{width: "68vw"}}>
                <div className='title_block'>
                    Sites activity - Patients
                </div>
                <TableSet header={HeadCellsSiteActivitiesPatients} url={Api.activityPatients} searchBar='true' />
            </div>

            <div className='block' style={{width: "40vw"}}>
                <div className='title_block'>
                    Site activity - SAE
                </div>
                <VerticalBar data={DataActivitySAE()} axisTitle={true} xTitle={'Centre code'} yTitle={'Number SAE'} />
                {/* <VerticalBar data={DataPatientStatus()}/> */}
            </div>

        </div>
        </>
    )
}

export default Activities
