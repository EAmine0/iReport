import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react';
import Button from '@mui/material/Button';
import * as IoIcons from "react-icons/io5"

function BtnToPng() {

    let ref = useRef(null)
        const link = document.createElement("a")
        link.download = "chart.png"
        link.href = ref.current.toBase64Image()
        link.click()


    return ref
}

export default BtnToPng
