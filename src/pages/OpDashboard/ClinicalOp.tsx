import React from 'react'

import { Getter } from '../../data/Getter'

import VerticalBar from '../../components/ChartsJs/VerticalBar'
import {DataSiteIdentifiedPerCountry, DataSiteStatus, DataPatientStatus, DataSafety, DataDocuments, DataSites, DataPatients, DataCurveOfInclusion } from '../../data/ChartData'

import TableSet from '../../components/Table/TableSet'
import { HeadCellsMonitoring } from '../../data/TableData'


import './../Pages.css'
import Gauge from '../../components/ChartsJs/Gauge'
import Liner from '../../components/ChartsJs/Liner'
import DoughnutChart from '../../components/ChartsJs/DoughnutChart'
import Treemap from '../../components/ChartsJs/Treemap'
import Pie from '../../components/ChartsJs/Pie'
import Piechart from '../../components/ChartsJs/Pie'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import Ant_Treemap from '../../components/AntChart/Ant_Treemap'
import { FetchCurveOfInclusion, FetchDocuments, FetchMonitoring, FetchPatients, FetchPatientStatus, FetchSafety, FetchSiteIdentifiedPerCountry, FetchSites, FetchSiteStatus } from '../../data/fetchData'
import BtnToPng from '../../components/Button/BtnToPng'
import BtnEx from '../../components/Button/BtnEx'

interface Props {
}



function ClinicalOp() {

	// const api = Getter()
	// console.log("api : ", api)
	

    return (
		<>
		<div id='boxerss' className='box_container'>

			<div className='block' style={{width: "350px"}}>
				<div className='title_block'>
					Sites 
				</div>
				<Gauge 
					data={DataSites()}
					potentialValue={Getter({url:"http://localhost:5000/api/OpDashboard/sites"})[0]?.total_value}
					totalValue={Getter({url:"http://localhost:5000/api/OpDashboard/sites"})[0]?.potential_value}
					text={'Active : '+((Getter({url:"http://localhost:5000/api/OpDashboard/sites"})[0]?.potential_value/Getter({url:"http://localhost:5000/api/OpDashboard/sites"})[0]?.total_value)*100).toFixed(2)+'%'}
					type={'Initiated'}
				/>
				<BtnExportExcel apiData={FetchSites()}/>
			</div>

			<div className='block' style={{width: "400px"}}>
				<div className='title_block'>
					Site identified per country
				</div>
				{/* <Ant_Treemap /> */}
				<Piechart data={DataSiteIdentifiedPerCountry()}/>
				<BtnExportExcel apiData={FetchSiteIdentifiedPerCountry()}/>
				{/* <Treemap /> */}
			</div>

			<div className='block' style={{width: "350px"}}>
				<div className='title_block'>
					Patients 
				</div>
				<Gauge 
					data={DataPatients()}
					potentialValue={Getter({url:"http://localhost:5000/api/OpDashboard/patients"})[0]?.total_value}
					totalValue={Getter({url:"http://localhost:5000/api/OpDashboard/patients"})[0]?.potential_value}
					text={'To target : '+((Getter({url:"http://localhost:5000/api/OpDashboard/patients"})[0]?.potential_value/Getter({url:"http://localhost:5000/api/OpDashboard/patients"})[0]?.total_value)*100).toFixed(2)+'%'}
					type={'Included'}
				/>
				<div>
					AVG patients per site : {(Getter({url:"http://localhost:5000/api/OpDashboard/patients"})[0]?.potential_value/Getter({url:"http://localhost:5000/api/OpDashboard/sites"})[0]?.potential_value).toFixed(2)}
				</div>
				<BtnExportExcel apiData={FetchPatients()}/>
			</div>

			<div className='block' style={{width: "600px"}}>
				<div className='title_block'>
					Site status
				</div>
				<VerticalBar data={DataSiteStatus()}/>
				<BtnExportExcel apiData={FetchSiteStatus()}/>
			</div>

			<div className='block' style={{width: "600px"}}>
				<div className='title_block'>
					Patient status
				</div>
				<VerticalBar data={DataPatientStatus()}/>
				<BtnExportExcel apiData={FetchPatientStatus()}/>
			</div>

			<div className='block' style={{width: "84.7%"}}>
				<div className='title_block'>
					Curve of inclusion
				</div>
				<Liner data={DataCurveOfInclusion()} />
				<BtnExportExcel apiData={FetchCurveOfInclusion()}/>
			</div>

			<div className='block' style={{width: "640px"}}>
				<div className='title_block'>
					Monitoring
				</div>
				<TableSet header={HeadCellsMonitoring} url='http://localhost:5000/api/OpDashboard/monitoring' searchBar='false'/>
				<BtnExportExcel apiData={FetchMonitoring()}/>
			</div>

			<div className='block' style={{width: "15%"}}>
				<div className='title_block'>
					Documents
				</div>
				<div>
					Received : {Getter({url:"http://localhost:5000/api/OpDashboard/documents_conformity"})[0]?.received}
					<br/>
					Default unresolved : {Getter({url:"http://localhost:5000/api/OpDashboard/documents_conformity"})[0]?.default_unresolved}
				</div>
				<DoughnutChart  data={DataDocuments()} legend='Conformity' />
				<BtnExportExcel apiData={FetchDocuments()}/>
			</div>

			<div className='block' style={{width: "15%"}}>
				<div className='title_block'>
						Safety
					</div>
					<DoughnutChart data={DataSafety()} legend='AE/SAE' />
					<BtnExportExcel apiData={FetchSafety()}/>
					<div>
						Serious : {((Getter({url:"http://localhost:5000/api/OpDashboard/safety_ae"})[0]?.value2/Getter({url:"http://localhost:5000/api/OpDashboard/safety_ae"})[0]?.ack_not_received)*100).toFixed(1)} %
						<br/>
						Ack not received : {Getter({url:"http://localhost:5000/api/OpDashboard/safety_ae"})[0]?.ack_not_received}
					</div>
					<div style={{fontSize: '.8rem', border: '1px solid black'}}>
						<table>
							<tr>
			                     <th>           </th>
			                     <th>Initial</th>
			                     <th>Follow-up</th>
							</tr>
							<tr>
								<td>AVG SAE per site</td>
								<td>xxx</td>
								<td>xxx</td>
							</tr>
							<tr>
								<td>AVG SAE per patient</td>
								<td>xxx</td>
								<td>xxx</td>
							</tr>
						</table>
					</div>
				</div> 
			</div>
		</>
	)

}

export default ClinicalOp
