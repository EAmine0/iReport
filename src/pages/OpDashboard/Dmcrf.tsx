import React from 'react'
import { Getter } from '../../data/Getter'
import { DataPatientPerMandatoryConsultation, DataPatientPerMandatoryConsultation2 } from '../../data/ChartData'
import HorizontalBar from '../../components/ChartsJs/HorizontalBar'
import Piechart from '../../components/ChartsJs/Pie'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import Ant_Gauge from '../../components/AntChart/Ant_Gauge'
import Ant_Liquid from '../../components/AntChart/Ant_Liquid'
import { Console } from 'console'
import { Api } from '../../data/UrlApi'
import GetApi from '../../data/GetApi'
import CompletedQueries from '../../components/QueriesBlock/CompletedQueries'
import Sent from '../../components/QueriesBlock/SentQueries'
import Received from '../../components/QueriesBlock/ReceivedQueries'
import Confirmed from '../../components/QueriesBlock/ConfirmedQueries'
import Resolved from '../../components/QueriesBlock/ResolvedQueries'
import Closed from '../../components/QueriesBlock/ClosedQueries'
import Completed from '../../components/QueriesBlock/CompletedQueries'

interface Props {}

function Dmcrf(props: Props) {
    const {} = props

    

    

    // issued()
    return (
        <>
        
        <div className='box_container'>

            <div className='block' style={{width: "20vw", padding: '0'}}>

                <div className='block' style={{width: "92%", padding:'2%', margin:'2%'}}>
                    <div className='title_block'>
                        Visits
                    </div>
                    <div style={{display: 'flex', justifyContent:'space-between', fontSize:'17px', padding:'10px'}}>
                        <div>Entered : {(Getter({url:"http://localhost:5000/api/OpDashboard/visits"})[0]?.entered*100).toFixed(1)}%</div>
                        <div>Cleaned : {(Getter({url:"http://localhost:5000/api/OpDashboard/visits"})[0]?.cleaned*100).toFixed(1)}%</div>
                    </div>
                    {/* <BtnExportExcel/> */}
                </div>

                <div className='block' style={{width: "92%", padding:'2%', margin:'2%'}}>
                    <div className='title_block'>
                        Patient Cleaned
                    </div>
                    <div style={{padding:'10px'}}>{Getter({url:"http://localhost:5000/api/OpDashboard/patient_cleaned"})[0]?.cleaned}</div>
                    {/* <BtnExportExcel/> */}
                </div>


            </div>

            

            

            <div className='block ' style={{width: "47vw"}}>
                <div className='title_block'>
                    Data-management  -  Queries
                </div>
                <div style={{display: "flex", justifyContent: "space-evenly", marginBottom: '20px', fontSize:'20px'}}>
                    <div>
                        {/* Issued : {Getter({url:"http://localhost:5000/api/OpDashboard/queries"})[0]?.issued} */}
                        {/* Issued : {GetApi({url:Api.DMCRFQueries})[0]?.value} */}
                        Issued : {GetApi({url:Api.DMCRFQueries})[GetApi({url:Api.DMCRFQueries}).map((head:any)=>head.label).indexOf('Issued')]?.value}
                    </div>
                    <div>
                        {/* Closed : {Getter({url:"http://localhost:5000/api/OpDashboard/queries"})[0]?.issued} */}
                        Closed : {GetApi({url:Api.DMCRFQueries})[GetApi({url:Api.DMCRFQueries}).map((head:any)=>head.label).indexOf('Closed')]?.value}
                    </div>
                </div>

                <div style={{display: "flex", justifyContent: "space-around", height:'100%'}}>
                    <Sent urlQueries={Api.DMCRFQueries} />
                    <Received urlQueries={Api.DMCRFQueries}  />
                    <Completed urlQueries={Api.DMCRFQueries}  />
                    <Confirmed urlQueries={Api.DMCRFQueries}  />
                    <Resolved urlQueries={Api.DMCRFQueries}  />
                    <Closed urlQueries={Api.DMCRFQueries}  />
                
                </div>
                <BtnExportExcel apiData={GetApi({url:Api.DMCRFQueries})} />
            </div>

            

            <div className='block' style={{width: "68.7vw"}}>
                <div className='title_block'>
                    Patient per mandatory consultation
                </div>
                <HorizontalBar  data={DataPatientPerMandatoryConsultation()}/>
            </div>
            
        </div>

        </>
    )
}

export default Dmcrf
