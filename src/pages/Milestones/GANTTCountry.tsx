import React from 'react'
import GANTT from '../../components/ChartsJs/GANTT';
import { useState } from 'react';
import { pink } from '@mui/material/colors';
import { Input, TextField, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import { DataGANTTCountry } from '../../data/ChartData';

interface Props {}

function GANTTCountry(props: Props) {
    const {} = props
    const [min, setMin] = useState('2015-01-01');
    const [max, setMax] = useState('2022-01-01');
    const [height, setHeight] = useState('500');
    const [show, setShow] = useState(true);

    const inputMin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMin(event.target.value);
    };
    const inputMax = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMax(event.target.value);
    };
    const inputHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        // //console.log(typeof(parseInt(event.target.value))    )
        const num = parseInt(event.target.value)
        if(num == 1){
            setHeight('500');
        }
        if(num == 2){
            setHeight('700');
        }
        if(num == 3){
            setHeight('900');
        }
        
    };
    const cbShow = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShow(event.target.checked);
    };

    return (
        <>
        <div className='box_container'>

            <div className='block' style={{width: "84.7%", height:'100%'}}>
                <div className='title_block'>
                    GANTT Country
                </div>
                <div style={{display:'flex', justifyContent:'space-evenly', margin:'10px 0px'}}>
                    <TextField size='small' style={{width:'300px'}} variant="filled" label='Start date' helperText='YYYY-MM-DD' onChange={inputMin}/>
                    <TextField size='small' style={{width:'300px'}} variant="filled" label='End date' helperText='YYYY-MM-DD' onChange={inputMax}/>
                    <TextField size='small' type='number' style={{width:'80px'}} variant="filled" label='Zoom' onChange={inputHeight} InputProps={{ inputProps: { min: 1, max: 3 } }}/>
                    <FormControlLabel style={{color: 'grey'}} control={<Checkbox style={{}} defaultChecked onChange={cbShow} />} label="Label" labelPlacement="top" />
                </div>
                <GANTT data={DataGANTTCountry()} min={min} max={max} height={height} labels={show}/>
                {/* <GANTT title='Canada'/>
                <GANTT title='France'/>
                <GANTT title='Italy'/>
                <GANTT title='Israel'/> */}
                {/* <GANTT title='United States'/> */}
            </div>

        </div>
        </>
    )
}


export default GANTTCountry
