import React from 'react'

import { Getter } from '../../data/Getter'

import { DataPatientPerMandatoryConsultation, DataPatientPerMandatoryConsultation2 } from '../../data/ChartData'

import Piechart from '../../components/ChartsJs/Pie'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import HorizontalBar from '../../components/ChartsJs/HorizontalBar'
import Sent from '../../components/QueriesBlock/SentQueries'
import Received from '../../components/QueriesBlock/ReceivedQueries'
import Confirmed from '../../components/QueriesBlock/ConfirmedQueries'
import Resolved from '../../components/QueriesBlock/ResolvedQueries'
import Closed from '../../components/QueriesBlock/ClosedQueries'
import Completed from '../../components/QueriesBlock/CompletedQueries'
import { Api } from '../../data/UrlApi'
import Cancelled from '../../components/QueriesBlock/CancelledQueries'

interface Props {}

function Dmecrf(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

        <div className='block' style={{width: "20vw", padding: '0'}}>

            <div className='block' style={{width: "92%", padding:'2%', margin:'2%'}}>
                <div className='title_block'>
                    Visits
                </div>
                <div style={{display: 'flex', justifyContent:'space-between', fontSize:'17px', padding:'10px'}}>
                    <div>Data entry : {(Getter({url:"http://localhost:5000/api/OpDashboard/dmecrf_visits"})[0]?.data_entry*100).toFixed(1)}%</div>
                    <div>Signed : {(Getter({url:"http://localhost:5000/api/OpDashboard/dmecrf_visits"})[0]?.signed*100).toFixed(1)}%</div>
                </div>
                {/* <BtnExportExcel /> */}
            </div>

            <div className='block' style={{width: "92%", padding:'2%', margin:'2%'}}>
                <div className='title_block'>
                    Patient Signed
                </div>
                <div style={{padding:'10px'}}>{Getter({url:"http://localhost:5000/api/OpDashboard/patient_signed"})[0]?.signed}</div>
                {/* <BtnExportExcel/> */}
            </div>
        </div>

            <div className='block' style={{width: "47vw"}}>
                <div className='title_block'>
                    Queries
                </div>
                <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: '20px', fontSize:'20px'}}>
                    <div>
                        Issued : {Getter({url:"http://localhost:5000/api/OpDashboard/queries"})[0]?.issued}
                    </div>
                    <div>
                        Closed : {Getter({url:"http://localhost:5000/api/OpDashboard/queries"})[0]?.issued}
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Sent urlQueries={Api.DMeCRFQueries}  />
                    <Received urlQueries={Api.DMeCRFQueries}  />
                    <Cancelled urlQueries={Api.DMeCRFQueries}  />
                    <Completed urlQueries={Api.DMeCRFQueries}  />
                    <Confirmed urlQueries={Api.DMeCRFQueries}  />
                    <Resolved urlQueries={Api.DMeCRFQueries}  />
                    <Closed urlQueries={Api.DMeCRFQueries}  />
                </div>
                {/* <BtnExportExcel/> */}
            </div>

            <div className='block' style={{width: "68.7vw"}}>
                <div className='title_block'>
                    Patient per mandatory consultation
                </div>
                <HorizontalBar data={DataPatientPerMandatoryConsultation2()} />
                {/* <BtnExportExcel/> */}
            </div>

        </div>
        </>
    )
}

export default Dmecrf
