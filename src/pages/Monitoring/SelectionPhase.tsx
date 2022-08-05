import React from 'react'
import BtnExportExcel from '../../components/Button/BtnExportExcel'
import TableSet from '../../components/Table/TableSet'
import GetApi from '../../data/GetApi'
import { Getter } from '../../data/Getter'
import { HeadCellsMonitoringSelectionPhase } from '../../data/TableData'
import { Api } from '../../data/UrlApi'
import './../Pages.css'

interface Props {}

function SelectionPhase(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "68vw"}}>
                <div className='title_block'>
                    Selection phase - Global status
                </div>
                <div className='frameBlock'>

                    <div className='oblock'>
                        <div className='label'>Number of identified investigators</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.identifiedInvestigators}</div>

                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of investigators contacted for 1st request</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.investigatorsContactedFirstRequest}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of  interested investigators</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.interestedInvestigators}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of confidentiality agreements received</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.confidentialityAgreementsReceived}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of CVs received</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.cvReceived}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of selected investigators</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.selectedInvestigators}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of qualified investigators</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.qualifiedInvestigators}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of investigators not interested/not selected/cancelled</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.investigatorsNOT}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of planned pre-study visits</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.plannedPreStudyVisits}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of performed pre-study visits</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.performedPreStudyVisits}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of cancelled pre-study visits prior to the visit</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.cancelledPreStudyVisits}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of close-out visits cancelled on site</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.closeOutVisitsCancelled}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of report to be drafted</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.reportToBeDrafted}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of report to be validated</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.reportToBeValidated}</div>
                    </div>
                    <div className='oblock'>
                        <div className='label'>Number of validated report</div>
                        <div className='value'>{GetApi({url:Api.SelectionPhase})[0]?.validatedReport}</div>
                    </div>
                    <div style={{display: 'flex', fontSize: '.6vw'}}>
                        <div className='frameBlockFooter'>
                            <span>- Identified investigators = Number of sites with a status "Identified"</span>
                            <span>- Investigators contacted for first request = 1st successfull "First request" contact with the site (call, mailing etc.)</span>
                            <span>- Interested investigators = Number of sites with a status "On feasibility"</span>
                            <span>- Confidentiality agreements received = Number of principal investigators with at least a confidentiality agreement received (with or without defaults, excepted for "Not signed" CDA)</span>

                        </div>
                        <div className='frameBlockFooter'>
                            <span>- CVs received = Number of principal investigators' with at least one CV (with or without defaults)</span>
                            <span>- Selected investigators = Number of sites with a site status = "Selected"</span>
                            <span>- Qualified investigators = Number of sites with a site status = "Qualified"</span>
                            <span>- Investigators not interested/not selected/cancelled = Number of sites with a status " Refused", "Non-selected", "Back-up" and "Cancelled"</span>

                        </div>

                    </div>
                </div>
            </div>

            <div className='block' style={{width: "68vw"}}>
				<div className='title_block'>
					Selection phase - Detailled status
				</div>
                <TableSet header={HeadCellsMonitoringSelectionPhase} url={Api.SelectionPhaseTable} searchBar='true'/>
                <BtnExportExcel apiData={GetApi({url:Api.SelectionPhaseTable})}/>
			</div>



        </div>
        </>
    )
}

export default SelectionPhase
