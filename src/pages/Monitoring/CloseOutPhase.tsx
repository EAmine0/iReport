import React from 'react'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import TableSet from '../../components/Table/TableSet'
import GetApi from '../../data/GetApi'
import { Getter } from '../../data/Getter'
import { HeadCellsMonitoringCloseOutPhase, HeadCellsMonitoringFollowUpPhase, HeadCellsMonitoringInitiationPhase, HeadCellsMonitoringSelectionPhase } from '../../data/TableData'
import { Api } from '../../data/UrlApi'
import './../Pages.css'

interface Props {}

function CloseOutPhase(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "68vw"}}>
                <div className='title_block'>
                    Close-out phase - Global status of qualified site
                </div>
                <div className='frameBlock'>

                    <div className='oblock'>
                        <div className='label'>Number of initiated sites</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.initiatedSite}</div>

                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of planned close-out visits</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.plannedMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of  performed close-out visits</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.performedMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of cancelled close-out visits prior to the visit</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.cancelledMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of close-out visits cancelled on site</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.cancelledSiteMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of included patient</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.includedPatient}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of report to be drafted</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.crToBeDraft}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of report to be validated</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.crToBeValidated}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of validated report</div>
                        <div className='value'>{GetApi({url:Api.closeOutPhase})[0]?.crValidated}</div>
                    </div>
                    
                    
                    <div style={{display: 'flex', fontSize: '.6vw'}}>
                        <div className='frameBlockFooter'>
                            <span>- Initiated sites = Number of sites with at least a status "Initiated"</span>
                            <span>- Planned close-out visits = Number of sites with a close-out visit with a last status "planned"</span>
                            <span>- Cancelled close-out visits prior to the visit = Number of sites with a close-out visit with at least a status "cancelled"</span>
                        </div>
                        <div className='frameBlockFooter'>
                            <span>- Included patients = Number of patients with a statut "included"</span>
                            <span>- Performed close-out visits = Number of sites with a close-out visit with a last status "performed"</span>
                            <span>- Close-out visits cancelled on site = Number of sites with a close-out visit with a last status "cancelled on site"</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className='block' style={{width: "68vw"}}>
				<div className='title_block'>
					Close-out phase - Detailled status of qualified site
				</div>
                <TableSet header={HeadCellsMonitoringCloseOutPhase} url={Api.closeOutPhaseTable} searchBar='true'/>
                <BtnExportExcel apiData={GetApi({url:Api.closeOutPhaseTable})}/>
			</div>



        </div>
        </>
    )
}
export default CloseOutPhase
