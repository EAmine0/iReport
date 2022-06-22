import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from '../TopBar/Dashboard'
import ClinicalOp from '../../pages/OpDashboard/ClinicalOp'
import Dmecrf from '../../pages/OpDashboard/Dmecrf'
import Dmcrf from '../../pages/OpDashboard/Dmcrf'

import Status from '../../pages/Sites/Status'
import Activities from '../../pages/Sites/Activities'
import Documents from '../../pages/Sites/Documents'
import FinancialAgreement from '../../pages/Sites/FinancialAgreement'
import Sites from '../TopBar/Sites'
import Monitoring from '../TopBar/Monitoring'
import Milestones from '../TopBar/Milestones'

interface Props {}

function Router(props: Props) {
    const {} = props

    return (
        <>
        <Routes>

            <Route path="/" element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard/>}>
                    <Route path="/dashboard" element={<Navigate replace to="clinic" />} />
                    <Route path="clinic" element={<ClinicalOp/>} />
                    <Route path="dmcrf" element={<Dmcrf/>} />
                    <Route path="dmecrf" element={<Dmecrf/>} />
                </Route>

                <Route path="Sites" element={<Sites/>}>
                    <Route path="/Sites" element={<Navigate replace to="status" />} />
                    <Route path="status" element={<Status/>} />
                    <Route path="activities" element={<Activities/>} />
                    <Route path="documents" element={<Documents/>} />
                    <Route path="financial_agreement" element={<FinancialAgreement/>} />
                </Route>

                <Route path="Monitoring" element={<Monitoring/>}>
                    <Route path="/Monitoring" element={<Navigate replace to="SelectionPhase" />} />
                    <Route path="SelectionPhase" element={<Status/>} />
                    <Route path="InitiationPhase" element={<Activities/>} />
                    <Route path="FollowUpPhase" element={<Documents/>} />
                    <Route path="CloseOutPhase" element={<FinancialAgreement/>} />
                    <Route path="Details" element={<FinancialAgreement/>} />
                </Route>

                <Route path="Milestones" element={<Milestones/>}>
                    <Route path="/Milestones" element={<Navigate replace to="GANTTCountry" />} />
                    <Route path="GANTTCountry" element={<ClinicalOp/>} />
                    <Route path="GANTTSite" element={<Activities/>} />
                    <Route path="GANTTStudy" element={<Documents/>} />
                    <Route path="Timeline" element={<FinancialAgreement/>} />
                    <Route path="TimelineStudy" element={<FinancialAgreement/>} />
                    <Route path="TimelineTransverse" element={<FinancialAgreement/>} />
                    <Route path="Details" element={<FinancialAgreement/>} />
                </Route>

        </Routes>
        </>
    )
}

export default Router
