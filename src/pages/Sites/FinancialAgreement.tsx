import React from 'react'
import GANTT from '../../components/ChartsJs/GANTT'

interface Props {}

function FinancialAgreement(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "84.7%", height:'100%'}}>
                <div className='title_block'>
                    GANTT Country
                </div>
                <GANTT />
            </div>

        </div>
        </>
    )
}

export default FinancialAgreement
