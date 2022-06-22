import { useEffect, useState } from "react"
import React from 'react'

interface Props {
    url:any
}

export function Getter(props: Props) {
    const {url} = props

    const [get, setGet] = useState<any>([])
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setGet(json))

    },[])

    return get
}

// export default Getter

