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
import Piechart from '../../components/ChartsJs/Pie'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import Ant_Treemap from '../../components/AntChart/Ant_Treemap'
import { Api } from '../../data/UrlApi'
import  GetApi  from '../../data/GetApi'
import Testeur from '../../data/testeur'

const LazyPie = React.lazy(() => import('../../components/ChartsJs/Pie'))

interface Props {
}


function ClinicalOp() {
	

    return (
		<>
		<div id='boxerss' className='box_container'>


			<div className='block' style={{width: "20vw"}}>
				<div className='title_block'>
					Sites 
				</div>
				<Gauge 
					data={DataSites()}
					potentialValue={GetApi({url:Api.sites})[0]?.total_value}
					totalValue={GetApi({url:Api.sites})[0]?.potential_value}
					text={'Active : '+((GetApi({url:Api.sites})[0]?.potential_value/GetApi({url:Api.sites})[0]?.total_value)*100).toFixed(2)+'%'}
					type={'Initiated'}
				/>
				<BtnExportExcel apiData={GetApi({url:Api.sites})}/>
			</div>

			<div className='block' style={{width: "22vw"}}>
				<div className='title_block'>
					Site identified per country
				</div>
				{/* <Ant_Treemap /> */}
				<Piechart data={DataSiteIdentifiedPerCountry()}/>
				<BtnExportExcel apiData={GetApi({url:Api.siteIdentifiedPerCountry})}/>
				{/* <Treemap /> */}
			</div>

			<div className='block' style={{width: "20vw"}}>
				<div className='title_block'>
					Patients 
				</div>
				<Gauge 
					data={DataPatients()}
					potentialValue={GetApi({url:Api.patients})[0]?.total_value}
					totalValue={GetApi({url:Api.patients})[0]?.potential_value}
					text={'To target : '+((GetApi({url:Api.patients})[0]?.potential_value/GetApi({url:Api.patients})[0]?.total_value)*100).toFixed(2)+'%'}
					type={'Included'}
				/>
				<div style={{fontSize: '1vw'}}>
					AVG patients per site : {(GetApi({url:Api.patients})[0]?.potential_value/GetApi({url:Api.patients})[0]?.potential_value).toFixed(2)}
				</div>
				<BtnExportExcel apiData={GetApi({url:Api.patients})}/>
			</div>

			<div className='block' style={{width: "32.5vw"}}>
				<div className='title_block'>
					Site status
				</div>
				<VerticalBar data={DataSiteStatus()}/>
				<BtnExportExcel apiData={GetApi({url:Api.siteStatus})}/>
			</div>

			<div className='block' style={{width: "32.5vw"}}>
				<div className='title_block'>
					Patient status
				</div>
				<VerticalBar data={DataPatientStatus()}/>
				<BtnExportExcel apiData={GetApi({url:Api.patientStatus})}/>
			</div>

			<div className='block' style={{width: "68.2vw"}}>
				<div className='title_block'>
					Curve of inclusion
				</div>
				<Liner data={DataCurveOfInclusion()} />
				<BtnExportExcel apiData={GetApi({url:Api.curve})}/>
			</div>

			<div className='block' style={{width: "33vw"}}>
				<div className='title_block'>
					Monitoring
				</div>
				<TableSet header={HeadCellsMonitoring} url={Api.monitoring} searchBar='false'/>
				<BtnExportExcel apiData={GetApi({url:Api.monitoring})}/>
			</div>


			<div className='block' style={{width: "13.8vw"}}>
				<div className='title_block'>
					Documents
				</div>
				<div style={{fontSize: '.8vw'}}>
					Received : {GetApi({url:Api.documentConformity})[0]?.received}
					<br/>
					Default unresolved : {GetApi({url:Api.documentConformity})[0]?.default_unresolved}
				</div>
				<DoughnutChart  data={DataDocuments()} legend='Conformity' />
				<BtnExportExcel apiData={GetApi({url:Api.documentConformity})}/>
			</div>

			<div className='block' style={{width: "15vw"}}>
				<div className='title_block'>
						Safety
					</div>
					<DoughnutChart data={DataSafety()} legend='AE/SAE' />
					<BtnExportExcel apiData={GetApi({url:Api.safetyAE})}/>
					<div style={{fontSize: '.8vw'}}>
						Serious : {((GetApi({url:Api.safetyAE})[0]?.value2/Getter({url:Api.safetyAE})[0]?.ack_not_received)*100).toFixed(1)} %
						<br/>
						Ack not received : {GetApi({url:Api.safetyAE})[0]?.ack_not_received}
					</div>
					<div style={{fontSize: '.8vw', border: '1px solid black', marginTop: '1%'}}>
						<table>
							<thead>
								<tr>
									<th></th>
									<th>Initial</th>
									<th>Follow-up</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>AVG SAE per site</td>
									<td>{(GetApi({url:Api.safetyAeTable})[0]?.per_site)?.toFixed(2)}</td>
									<td>{(GetApi({url:Api.safetyAeTable})[1]?.per_site)?.toFixed(2)}</td>
								</tr>
								<tr>
									<td>AVG SAE per patient</td>
									<td>{(GetApi({url:Api.safetyAeTable})[0]?.per_patient)?.toFixed(2)}</td>
									<td>{(GetApi({url:Api.safetyAeTable})[1]?.per_patient)?.toFixed(2)}</td>
								</tr>
							</tbody>
							
						</table>
					</div>
				</div> 
			</div>
		</>
	)

}

export default ClinicalOp
