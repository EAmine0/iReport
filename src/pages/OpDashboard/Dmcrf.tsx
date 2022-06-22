import React from 'react'
import { Getter } from '../../data/Getter'
import { DataPatientPerMandatoryConsultation, DataSiteQueries1, DataSiteQueries2, DataSiteQueries3, DataSiteQueries4, DataSiteQueries5, DataSiteQueries6 } from '../../data/ChartData'
import HorizontalBar from '../../components/ChartsJs/HorizontalBar'
import Piechart from '../../components/ChartsJs/Pie'
import BtnExportExcel from '../../components/Button/BtnExportExcel'

interface Props {}

function Dmcrf(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "24%", padding: '0'}}>

                <div className='block' style={{width: "84%", fontSize:'15px', padding:'15px', margin:'15px'}}>
                    <div className='title_block'>
                        Visits
                    </div>
                    <div style={{display: 'flex', justifyContent:'space-between', fontSize:'17px', padding:'10px'}}>
                        <div>Entered : {(Getter({url:"http://localhost:5000/api/OpDashboard/visits"})[0]?.entered*100).toFixed(1)}%</div>
                        <div>Cleaned : {(Getter({url:"http://localhost:5000/api/OpDashboard/visits"})[0]?.cleaned*100).toFixed(1)}%</div>
                    </div>
                    {/* <BtnExportExcel/> */}
                </div>

                <div className='block' style={{width: "84%", fontSize:'20px', padding:'15px', margin:'15px'}}>
                    <div className='title_block'>
                        Patient Cleaned
                    </div>
                    <div style={{padding:'10px'}}>{Getter({url:"http://localhost:5000/api/OpDashboard/patient_cleaned"})[0]?.cleaned}</div>
                    {/* <BtnExportExcel/> */}
                </div>
                

            </div>

            <div className='block ' style={{width: "900px"}}>
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
                    <div style={{width: "15%"}}>
                        <Piechart data={DataSiteQueries1()} />
                    </div>
                    {/* <div style={{width: "15%"}}>
                        <Piechart data={DataSiteQueries2()} />
                    </div> */}
                    <div style={{width: "15%"}}>
                        <Piechart data={DataSiteQueries3()} />
                    </div>
                    {/* <div style={{width: "15%"}}>
                        <Piechart data={DataSiteQueries4()} />
                    </div> */}
                    <div style={{width: "15%"}}>
                        <Piechart data={DataSiteQueries5()} />
                    </div>
                    <div style={{width: "15%"}}>
                        <Piechart data={DataSiteQueries6()} />
                    </div>
                </div>
                {/* <BtnExportExcel/> */}
            </div>

            <div className='block' style={{width: "85.2%"}}>
                <div className='title_block'>
                    Patient per mandatory consultation
                </div>
                <HorizontalBar data={DataPatientPerMandatoryConsultation()} />
                {/* <BtnExportExcel/> */}
            </div>
            
        </div>

        </>
    )
}

export default Dmcrf
