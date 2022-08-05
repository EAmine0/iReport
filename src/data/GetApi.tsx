import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface Props {
    url: any
}

export default function GetApi(props: Props) {
    const {url} = props

    const [api, setApi] = useState<any>([])
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        await axios.get(url).then((response) => {
            setApi(response.data)
            setLoading(false);
        })
        .catch((error) => {
            console.log('GetApi error : ',error);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchData()
    },[])

    const empty : any[] = [];

    // console.log('apiss0000 :', testtt)

    // console.log('apiss :', api)

    // return api
    
    if (loading) {
        return empty
    }
    else{
        return api
    }
  
    
}
