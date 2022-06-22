import React from 'react'

interface Props {}

function Documents(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    Filter
                </div>
            </div>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    Search
                </div>
            </div>

            <div className='block' style={{width: "85%"}}>
                <div className='title_block'>
                    Table
                </div>
            </div>

        </div>
        
        </>
    )
}

export default Documents
