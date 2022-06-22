import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

//#region clinicalOP
export function FetchSiteIdentifiedPerCountry(){
    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_status_summary") // 1 -mettre l'url de l'api
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])
  
    return lev

}

export function FetchSites() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/sites")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev
}

export function FetchPatients() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/patients")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev
}

export function FetchSiteStatus() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/site_status") // 1 -mettre l'url de l'api
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev

  
}

export function FetchPatientStatus() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/patient_status")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev
}

export function FetchCurveOfInclusion() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/curve")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev
}

export function FetchMonitoring() {

    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/OpDashboard/monitoring")
            .then((response) => response.json())
            .then((json) => setStatus(json))
  
    },[])
  
    return lev
  }
  

export function FetchDocuments() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/documents_conformity")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev
}

export function FetchSafety() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/safety_ae")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev
}
//#endregion

export function FetchPatientPerMandatoryConsultation() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/patient_mandatory_consultation")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev
}

export function FetchPatientPerMandatoryConsultation2() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/dmecrf_patient_mandatory_consultation")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  return lev
}
