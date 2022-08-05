import React from 'react'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import TableSet from '../../components/Table/TableSet'
import GetApi from '../../data/GetApi'
import { Getter } from '../../data/Getter'
import { HeadCellsMonitoringFollowUpPhase, HeadCellsMonitoringInitiationPhase, HeadCellsMonitoringSelectionPhase } from '../../data/TableData'
import { Api } from '../../data/UrlApi'
import './../Pages.css'

interface Props {}

function FollowUpPhase(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "68vw"}}>
                <div className='title_block'>
                    Follow-up phase - Global status of qualified site
                </div>
                <div className='frameBlock'>

                    <div className='oblock'>
                        <div className='label'>Number of initiated sites</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.initiatedSite}</div>

                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of planned monitoring visits</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.plannedMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of  performed monitoring visits</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.performedMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of cancelled monitoring visits prior to the visit</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.cancelledMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of monitoring visits cancelled on site</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.cancelledSiteMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of included patient</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.includedPatient}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of report to be drafted</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.crToBeDraft}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of report to be validated</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.crToBeValidated}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of validated report</div>
                        <div className='value'>{GetApi({url:Api.followUpPhase})[0]?.crValidated}</div>
                    </div>
                    
                    
                    <div style={{display: 'flex', fontSize: '.6vw'}}>
                        <div className='frameBlockFooter'>
                            <span>- Initiated sites = Number of sites with at least a status "Initiated"</span>
                            <span>- Planned monitoring visits = Number of sites with a monitoring visit with a last status "planned"</span>
                            <span>- Cancelled monitoring visits prior to the visit = Number of sites with a monitoring visit with at least a status "cancelled"</span>
                        </div>
                        <div className='frameBlockFooter'>
                            <span>- Included patients = Number of patients with a statut "included"</span>
                            <span>- Performed monitoring visits = Number of sites with a monitoring visit with a last status "performed"</span>
                            <span>- Monitoring visits cancelled on site = Number of sites with a monitoring visit with a last status "cancelled on site"</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className='block' style={{width: "68vw"}}>
				<div className='title_block'>
					Follow-up phase - Detailled status of qualified site
				</div>
                <TableSet header={HeadCellsMonitoringFollowUpPhase} url={Api.followUpPhaseTable} searchBar='true'/>
                <BtnExportExcel apiData={GetApi({url:Api.followUpPhaseTable})}/>
			</div>



        </div>
        </>
    )
}
export default FollowUpPhase
