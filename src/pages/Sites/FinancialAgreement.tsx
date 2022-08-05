import React from 'react'
import { useState } from 'react';
import Ant_BarStack from '../../components/AntChart/Ant_BarStack';
import HorizontalBar from '../../components/ChartsJs/HorizontalBar';
import HorizStackBar from '../../components/ChartsJs/HorizStackBar';
import TableSet from '../../components/Table/TableSet';
import { DataFAType } from '../../data/ChartData';
import GetApi from '../../data/GetApi';
import { HeadCellsSiteFADetails } from '../../data/TableData';
import { Api } from '../../data/UrlApi';


interface Props {}

function FinancialAgreement(props: Props) {
    const {} = props

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "85.2%"}}>
                <div className='title_block'>
                    Financial Agreement Type
                </div>
                {/* <HorizStackBar data={DataFAType()} /> */}
                <Ant_BarStack data={GetApi({url:Api.FAType})} />
                {/* <BtnExportExcel/> */}
            </div>

            <div className='block' style={{width: "84.7%"}}>
                <div className='title_block'>
                    Financial Agreement Details
                </div>
                <TableSet header={HeadCellsSiteFADetails} url={Api.FADetails} searchBar="true" />
            </div>

        </div>
        </>
    )
}

export default FinancialAgreement
