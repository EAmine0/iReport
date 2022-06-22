import React from 'react'
import TableSet from '../../components/Table/TableSet'
import { HeadCellsSiteStatusDetails, HeadCellsSiteStatusSummary } from '../../data/TableData'
import Treemap from '../../components/ChartsJs/Treemap'
import BtnExportExcel from '../../components/Button/BtnExportExcel'


interface Props {}

function Status(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

			<div className='block' style={{width: "500px"}}>
				<div className='title_block'>
					Site status summary
				</div>
				<TableSet header={HeadCellsSiteStatusSummary} url='http://localhost:5000/api/Sites/sites_status_summary' searchBar='false'/>
				{/* <BtnExportExcel /> */}
			</div>

            <div className='block' style={{width: "700px"}}>
				<div className='title_block'>
					Site last status
				</div>
                <Treemap />
				{/* <BtnExportExcel /> */}
			</div>

            <div className='block' style={{width: "85%"}}>
				<div className='title_block'>
					Sites details
				</div>
				<TableSet header={HeadCellsSiteStatusDetails} url='http://localhost:5000/api/Sites/sites_status_details' searchBar='true' />
				{/* <BtnExportExcel /> */}
			</div>

			

        </div>
        </>
    )
}

export default Status
