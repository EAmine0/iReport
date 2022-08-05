import React from 'react'
import Ant_BarStack from '../../components/AntChart/Ant_BarStack'
import Ant_HorizontalBar from '../../components/AntChart/Ant_HorizontalBar'
import HorizontalBar from '../../components/ChartsJs/HorizontalBar'
import HorizStackBar from '../../components/ChartsJs/HorizStackBar'
import Liner from '../../components/ChartsJs/Liner'
import TableSet from '../../components/Table/TableSet'
import { DataCurveOfInclusion, DataDocumentType, DataPatientRecruitmentPerSite } from '../../data/ChartData'
import GetApi from '../../data/GetApi'
import { HeadCellsPatientsRecruitmentDetails, HeadCellsPatientsStatusSummary, HeadCellsSiteDocumentsDetails } from '../../data/TableData'
import { Api } from '../../data/UrlApi'

interface Props {}

function PatientRecruitment(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "26vw"}}>
                <div className='title_block'>
                    Patient Status Summary
                </div>
                <TableSet header={HeadCellsPatientsStatusSummary} url={Api.patientsStatusSummary} searchBar='false'/>
            </div>

            <div className='block' style={{width: "39vw"}}>
				<div className='title_block'>
					Patient Inclusion Period
				</div>
				<Liner data={DataCurveOfInclusion()} />
				{/* <BtnExportExcel apiData={GetApi({url:Api.curve})}/> */}
			</div>

            <div className='block' style={{width: "68.2vw"}}>
				<div className='title_block'>
					Monitoring
				</div>
				<TableSet header={HeadCellsPatientsRecruitmentDetails} url={Api.patientsRecruitmentDetails} searchBar='true'/>
				{/* <BtnExportExcel apiData={GetApi({url:Api.patientsRecruitmentDetails})}/> */}
			</div>

            <div className='block' style={{width: "32.5vw"}}>
                <div className='title_block'>
                    Patients recruitment per site
                </div>
                {/* <HorizontalBar  data={DataPatientRecruitmentPerSite()}/> */}
                <Ant_HorizontalBar data={GetApi({url:Api.patientsRecruitmentPerSite})} />
            </div>

            <div className='block' style={{width: "32.5vw"}}>
                <div className='title_block'>
                    Patients recruitment per country
                </div>
                {/* <HorizontalBar  data={DataPatientRecruitmentPerSite()}/> */}
                <Ant_HorizontalBar data={GetApi({url:Api.patientsRecruitmentPerCountry})} />
            </div>

            {/* <div className='block' style={{width: "32.5vw"}}>
                <div className='title_block'>
                    Patients recruitment per country
                </div>
                <HorizontalBar  data={DataPatientRecruitmentPerSite()}/>
            </div> */}

        </div>
        
        </>
    )
}

export default PatientRecruitment
