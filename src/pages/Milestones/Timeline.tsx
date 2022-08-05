import React from 'react'
import TimelineChart from '../../components/ChartsJs/TimelineChart'

interface Props {}

function Timeline(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "84.7%", height:'100%'}}>
                <div className='title_block'>
                    Timelines
                </div>
                <TimelineChart />
            </div>

        </div>
        </>
    )
}

export default Timeline
