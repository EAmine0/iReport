import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../TopBar/Dashboard'
import Sites from '../TopBar/Sites'
import Monitoring from '../TopBar/Monitoring'
import Milestones from '../TopBar/Milestones'
import IctaLoading from '../Loading/IctaLoading'
import SelectionPhase from '../../pages/Monitoring/SelectionPhase'
import InitiationPhase from '../../pages/Monitoring/InitiationPhase'
import FollowUpPhase from '../../pages/Monitoring/FollowUpPhase'
import CloseOutPhase from '../../pages/Monitoring/CloseOutPhase'
import Details from '../../pages/Monitoring/Details'
import Participants from '../TopBar/Participants'
import Document from '../../pages/Participants/Document'
import OrgDocument from '../../pages/Organizations/OrgDocument'
import Organizations from '../TopBar/Organizations'
import Patients from '../TopBar/Patients'
import PatientRecruitment from '../../pages/Patients/PatientRecruitment'
import PatientDocuments from '../../pages/Patients/PatientDocuments'
import DataManagement from '../TopBar/DataManagement'
import CRFGlobalOverviewActivities from '../../pages/DataManagement/CRFGlobalOverviewActivities'
import CRFPerPatient from '../../pages/DataManagement/CRFPerPatient'
import DataManagementCRF from '../TopBar/DataManagementCRF'
import DataManagementECRF from '../TopBar/DataManagementECRF'
import ECRFGlobalOverviewActivities from '../../pages/DataManagement/eCRFGlobalOverviewActivities'
import ECRFPerPatient from '../../pages/DataManagement/eCRFPerPatient'
import PatientAESAE from '../../pages/Patients/PatientAESAE'


const ClinicalOp = React.lazy(() => import('../../pages/OpDashboard/ClinicalOp'))
const Dmecrf = React.lazy(() => import('../../pages/OpDashboard/Dmecrf'))
const Dmcrf = React.lazy(() => import('../../pages/OpDashboard/Dmcrf'))


const Status = React.lazy(() => import('../../pages/Sites/Status'))
const Activities = React.lazy(() => import('../../pages/Sites/Activities'))
const Documents = React.lazy(() => import('../../pages/Sites/Documents'))
const FinancialAgreement = React.lazy(() => import('../../pages/Sites/FinancialAgreement'))


const GANTTCountry = React.lazy(() => import('../../pages/Milestones/GANTTCountry'))
const Timeline = React.lazy(() => import('../../pages/Milestones/Timeline'))








interface Props {}

function Router(props: Props) {
    const {} = props

    return (
        <>
        <Routes>

            <Route path="/" element={<Navigate replace to="dashboard" />} />

                <Route path="dashboard" element={<Dashboard/>}>
                    <Route path="/dashboard" element={<Navigate replace to="clinic" />} />
                    <Route path="clinic" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><ClinicalOp/></Suspense>} />
                    <Route path="dmcrf" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><Dmcrf/></Suspense>} />
                    <Route path="dmecrf" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><Dmecrf/></Suspense>} />
                </Route>

                <Route path="Sites" element={<Sites/>}>
                    <Route path="/Sites" element={<Navigate replace to="status" />} />
                    <Route path="status" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><Status/></Suspense>} />
                    <Route path="activities" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><Activities/></Suspense>} />
                    <Route path="documents" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><Documents/></Suspense>} />
                    <Route path="financial_agreement" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><FinancialAgreement/></Suspense>} />
                </Route>

                <Route path="Monitoring" element={<Monitoring/>}>
                    <Route path="/Monitoring" element={<Navigate replace to="SelectionPhase" />} />
                    <Route path="SelectionPhase" element={<SelectionPhase/>} />
                    <Route path="InitiationPhase" element={<InitiationPhase/>} />
                    <Route path="FollowUpPhase" element={<FollowUpPhase/>} />
                    <Route path="CloseOutPhase" element={<CloseOutPhase/>} />
                    <Route path="Details" element={<Details/>} />
                </Route>

                <Route path="Milestones" element={<Milestones/>}>
                    <Route path="/Milestones" element={<Navigate replace to="GANTTCountry" />} />
                    <Route path="GANTTCountry" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><GANTTCountry/></Suspense>} />
                    <Route path="GANTTSite" element={<Activities/>} />
                    <Route path="GANTTStudy" element={<Documents/>} />
                    <Route path="Timeline" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><Timeline/></Suspense>} />
                    <Route path="TimelineStudy" element={<FinancialAgreement/>} />
                    <Route path="TimelineTransverse" element={<FinancialAgreement/>} />
                    <Route path="Details" element={<FinancialAgreement/>} />
                </Route>

                <Route path="Participants" element={<Participants/>}>
                    <Route path="/Participants" element={<Navigate replace to="Documents" />} />
                    <Route path="Documents" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><Document/></Suspense>} />
                </Route>

                <Route path="Organizations" element={<Organizations/>}>
                    <Route path="/Organizations" element={<Navigate replace to="Documents" />} />
                    <Route path="Documents" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><OrgDocument/></Suspense>} />
                </Route>

                <Route path="Patients" element={<Patients/>}>
                    <Route path="/Patients" element={<Navigate replace to="Recruitment" />} />
                    <Route path="Recruitment" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><PatientRecruitment/></Suspense>} />
                    <Route path="Documents" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><PatientDocuments/></Suspense>} />
                    <Route path="aesae" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><PatientAESAE/></Suspense>} />
                </Route>

                {/* <Route path="/" element={<Navigate replace to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard/>}>
                    <Route path="/dashboard" element={<Navigate replace to="clinic" />} />
                        <Route path="clinic" element={<Suspense fallback={<div className='icta-loading-container'><IctaLoading /></div>}><ClinicalOp/></Suspense>} /> */}

                <Route path="DataManagement" element={<DataManagement/>}>
                    <Route path="/DataManagement" element={<Navigate replace to="CRF" />} />

                    <Route path="CRF" element={<DataManagementCRF/>}>
                        <Route path="/DataManagement/CRF" element={<Navigate replace to="Global" />} />
                        <Route path="Global" element={<CRFGlobalOverviewActivities/>} />
                        <Route path="PerPatient" element={<CRFPerPatient/>} />
                    </Route>

                    <Route path="eCRF" element={<DataManagementECRF/>}>
                        <Route path="/DataManagement/eCRF" element={<Navigate replace to="Global" />} />
                        <Route path="Global" element={<ECRFGlobalOverviewActivities/>} />
                        <Route path="PerPatient" element={<ECRFPerPatient/>} />
                    </Route>
                </Route>

        </Routes>
        </>
    )
}

export default Router
