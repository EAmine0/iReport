import React from 'react'
import TableSet from '../../components/Table/TableSet'
import { HeadCellsSiteActivitiesMonitoring} from '../../data/TableData'
import BtnExportExcel from '../../components/Button/BtnExportExcel'

interface Props {}

function Activities(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "85%"}}>
				<div className='title_block'>
                Sites activity - Monitoring
				</div>
				<TableSet header={HeadCellsSiteActivitiesMonitoring} url='http://localhost:5000/api/Sites/sites_activities_monitoring' searchBar='true' />
				{/* <BtnExportExcel /> */}
			</div>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    Sites activity - Patients
                </div>
            </div>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    Site activity - SAE
                </div>
            </div>

        </div>
        </>
    )
}

export default Activities
