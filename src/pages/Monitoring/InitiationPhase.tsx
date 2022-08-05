import React from 'react'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import TableSet from '../../components/Table/TableSet'
import GetApi from '../../data/GetApi'
import { Getter } from '../../data/Getter'
import { HeadCellsMonitoringInitiationPhase, HeadCellsMonitoringSelectionPhase } from '../../data/TableData'
import { Api } from '../../data/UrlApi'
import './../Pages.css'

interface Props {}

function InitiationPhase(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "68vw"}}>
                <div className='title_block'>
                    Initiation phase - Global status of qualified site
                </div>
                <div className='frameBlock'>

                    <div className='oblock'>
                        <div className='label'>Number of qualified sites</div>
                        <div className='value'>{GetApi({url:Api.initiationPhase})[0]?.qualifiedSite}</div>

                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of planned initiation visits</div>
                        <div className='value'>{GetApi({url:Api.initiationPhase})[0]?.plannedSite}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of  performed initiation visits</div>
                        <div className='value'>{GetApi({url:Api.initiationPhase})[0]?.performedSite}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of cancelled initiation visits prior to the visit</div>
                        <div className='value'>{GetApi({url:Api.initiationPhase})[0]?.cancelledMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of initiation visits cancelled on site</div>
                        <div className='value'>{GetApi({url:Api.initiationPhase})[0]?.cancelledSiteMonit}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of report to be drafted</div>
                        <div className='value'>{GetApi({url:Api.initiationPhase})[0]?.crToBeDraft}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of report to be validated</div>
                        <div className='value'>{GetApi({url:Api.initiationPhase})[0]?.crToBeValidated}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of validated report</div>
                        <div className='value'>{GetApi({url:Api.initiationPhase})[0]?.crValidated}</div>
                    </div>
                    
                    <div style={{display: 'flex', fontSize: '.6vw'}}>
                        <div className='frameBlockFooter'>
                            <span>- Qualified sites = Number of sites with at least a status "Qualified"</span>
                            <span>- Planned initiation visits = Number of sites with an initiation visit with a last status "planned"</span>
                            <span>- Cancelled initiation visits prior to the visit = Number of sites with an initiation visit with at least a status "cancelled"</span>
                        </div>
                        <div className='frameBlockFooter'>
                            <span>- Performed initiation visits = Number of sites with an initiation visit with a last status "performed"</span>
                            <span>- Initiation visits cancelled on site = Number of sites with an initiation visit with a last status "cancelled on site"</span>

                        </div>

                    </div>
                </div>
            </div>

            <div className='block' style={{width: "68vw"}}>
				<div className='title_block'>
					Initiation phase - Detailled status qualified site
				</div>
                <TableSet header={HeadCellsMonitoringInitiationPhase} url={Api.initiationPhaseTable} searchBar='true'/>
                <BtnExportExcel apiData={GetApi({url:Api.initiationPhaseTable})}/>
			</div>



        </div>
        </>
    )
}

export default InitiationPhase
