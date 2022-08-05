import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import React from 'react'
import GetApi from './GetApi';
import { Api } from './UrlApi';
import Ant_Liquid from '../components/AntChart/Ant_Liquid';

// const LazyApi = React.lazy(() => import('./GetApi'))

interface Props {
}

//#region Clinical Operational
export function DataSiteIdentifiedPerCountry(){
    const url = Api.siteIdentifiedPerCountry

    const api = GetApi({url:url})

    // const t_labelSet:any = ['France', 'United States', 'Netherlands','Canada', 'Italy', 'Brazil']
    // const t_data:any = [37,  14 ,  5 , 5 ,  4 ,  2  ]
    // const data3 = [
    //     {category: 'United States', value: 7, name:"francia"},
    //     {category: 'France', value: 7, name:'new england'},
    //     {category: 'Netherlands', value: 5},
    //     {category: 'Canada', value: 5},
    //     {category: 'Italy', value: 4},
    //     {category: 'Brazil', value: 2},
    //     {category: 'Norway', value: 2},
    //     {category: 'Japan', value: 1},
    //     {category: 'Spain', value: 1},
    //   ]

    const data ={
        labels: api.map((head:any)=>head.country),
        datasets: [
          {
            data: api.map((head:any)=>head.site_identified),//[7,17,3,3], 
          },
        ],
      }
  
    return data
   

}

export function DataSites() {
  const url = "http://localhost:5000/api/OpDashboard/sites"

  const api = GetApi({url:url})

  const value = api.map((head:any)=>head.total_value)
  const data ={
    labels :  api.map((head:any)=>head.potential_value),
    datasets: [
      {
          label: 'Status total',
          data: [value[0]/2,value[0]/3.3,value[0]/5,value[0]],
          borderColor: ['white'],
          backgroundColor: ['rgba(254, 0, 0, .5)','rgba(253, 192, 0, .5)','rgba(0, 176, 79, .5)','rgba(75,192,192, .5)'],
          fill: true, //Pour Line
          cutout: '75%',        //
          circumference: 180,  //  Pour Doughnut ou Pie
          rotation: 270,      //
          borderRadius: 1,
      },
      
    ]
  }

  return data
}

export function DataPatients() {
  const url = "http://localhost:5000/api/OpDashboard/patients"

  const api = GetApi({url:url})

  const value = api.map((head:any)=>head.total_value)
  const data ={
    labels : api.map((head:any)=>head.potential_value),
    datasets: [
      {
          label: 'Status total',
          data: [value[0]/2,value[0]/3.3,value[0]/5,value[0]],
          borderColor: ['white'],
          backgroundColor: ['rgba(254, 0, 0, .5)','rgba(253, 192, 0, .5)','rgba(0, 176, 79, .5)','rgba(75,192,192, .5)'],
          fill: true, //Pour Line
          cutout: '75%',        //
          circumference: 180,  //  Pour Doughnut ou Pie
          rotation: 270,      //
          borderRadius: 1,
      },
      
    ]
  }

  return data
}

export function DataSiteStatus() {
  const url = "http://localhost:5000/api/OpDashboard/site_status"

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.label),
    datasets: [
      {
          label: 'Status total',
          data: api.map((head:any)=>head.status_total),
          borderColor: 'rgba(75,192,192,1)'
      },
      {
          label: 'Last status total',
          data: api.map((head:any)=>head.last_status_total),
          borderColor: '#742774'
      }
      
    ]
  }

  return data
}

export function DataPatientStatus() {
  const url = "http://localhost:5000/api/OpDashboard/patient_status"

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.label),
    datasets: [
      {
          label: 'Status total',
          data: api.map((head:any)=>head.status_total),
          borderColor: 'rgba(75,192,192,1)'
      },
      {
          label: 'Last status total',
          data: api.map((head:any)=>head.last_status_total),
          borderColor: '#742774'
      }
      
    ]
  }

  return data
}

export function DataCurveOfInclusion() {
  const url = "http://localhost:5000/api/OpDashboard/curve"

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.date),
    datasets: [
      {
        label: "Included",
        data:api.map((head:any)=>head.included),
        borderColor: '#01B8AA',
        backgroundColor: 'rgba(75,192,192,0.2)',
        // fill: true,
        // borderRadius: 10,
        // borderWidth: 10,
        hoverBorderWidth: 5,
        //tension: 0.1,
      },
      {
        label: "Randomised",
        data:api.map((head:any)=>head.randomised),
        borderColor: '#374649',
        backgroundColor: 'rgba(75,192,192,0.2)',
        // fill: true,
        // borderRadius: 10,
        // borderWidth: 10,
        hoverBorderWidth: 5,
      },
      {
        label: "Theoretical",
        data:api.map((head:any)=>head.theoretical),
        borderColor: '#FD625E',
        backgroundColor: 'rgba(253, 98, 94, 0.5)',
        // fill: true,
        // borderRadius: 10,
        // borderWidth: 10,
        hoverBorderWidth: 5,
      },
    ],
  }

  return data
}

export function DataDocuments() {
  const url = "http://localhost:5000/api/OpDashboard/documents_conformity"

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.no_yes),
    datasets: [
      {
          label: 'Status total',
          data: api.map((head:any)=>head.value),
          borderColor: ['rgba(54, 125, 173, 1)','rgba(255, 192, 0, 1)'],
          backgroundColor: ['rgba(54, 125, 173, 0.5)','rgba(255, 192, 0, 0.5)'],
          cutout: '50%',        //
          // circumference: 180,  //  Pour Doughnut ou Pie
          // rotation: 270,      //
          borderRadius: 1,
          // borderWidth: 10,
          hoverBorderWidth: 5,
      },
      
    ]
  }

  return data
}

export function DataSafety() {
  const url = "http://localhost:5000/api/OpDashboard/safety_ae"

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.initial_followup),
    datasets: [
      {
          label: 'Status total',
          data: api.map((head:any)=>head.value),
          borderColor: ['rgba(54, 125, 173, 1)','rgba(255, 192, 0, 1)'],
          backgroundColor: ['rgba(54, 125, 173, 0.5)','rgba(255, 192, 0, 0.5)'],
          cutout: '50%',        //
          // circumference: 180,  //  Pour Doughnut ou Pie
          // rotation: 270,      //
          borderRadius: 1,
          // borderWidth: 10,
          hoverBorderWidth: 5,
      },
      
    ]
  }

  return data
}

export function DataPatientPerMandatoryConsultation() {
  const url = "http://localhost:5000/api/OpDashboard/patient_mandatory_consultation"

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.label),
    datasets: [
      {
        label: "Consultation NA",
        data:api.map((head:any)=>head.na),
        borderColor: ['rgba(1, 184, 170, 1)'],
      backgroundColor: ['rgba(1, 184, 170, 1)'],
      },
      {
        label: "Consultation incomplete",
        data:api.map((head:any)=>head.incomplete),
        borderColor: ['rgba(201, 27, 61, 1)'],
      backgroundColor: ['rgba(201, 27, 61, 1)'],
      },
      {
        label: "consultation complete",
        data:api.map((head:any)=>head.complete),
        borderColor: ['rgba(253, 98, 94, 1)'],
      backgroundColor: ['rgba(253, 98, 94, 1)'],
      },
      {
        label: "consultation DEA",
        data:api.map((head:any)=>head.dea),
        borderColor: ['rgba(55, 70, 73, 1)'],
      backgroundColor: ['rgba(55, 70, 73, 1)'],
      },
      {
        label: "consultation DEB",
        data:api.map((head:any)=>head.deb),
        borderColor: ['rgba(242, 200, 15, 1)'],
      backgroundColor: ['rgba(242, 200, 15, 1)'],
        
      },
      {
        label: "consultation clean",
        data:api.map((head:any)=>head.clean),
        borderColor: ['rgba(131, 196, 57, 1)'],
      backgroundColor: ['rgba(131, 196, 57, 1)'],
      },
    ],
  }

  return data
}
export function DataPatientPerMandatoryConsultation2() {
  const url = "http://localhost:5000/api/OpDashboard/dmecrf_patient_mandatory_consultation"

  const api = GetApi({url:url})

  api.map((head:any)=>head.total_value)

  const data ={
    labels : api.map((head:any)=>head.label),
    datasets: [
      {
        label: "Consultation NA",
        data:api.map((head:any)=>head.expected),
        borderColor: ['rgba(1, 184, 170, 1)'],
      backgroundColor: ['rgba(1, 184, 170, 1)'],
      },
      {
        label: "Consultation incomplete",
        data:api.map((head:any)=>head.in_progress),
        borderColor: ['rgba(201, 27, 61, 1)'],
      backgroundColor: ['rgba(201, 27, 61, 1)'],
      },
      {
        label: "consultation complete",
        data:api.map((head:any)=>head.data_entry),
        borderColor: ['rgba(253, 98, 94, 1)'],
      backgroundColor: ['rgba(253, 98, 94, 1)'],
      },
      {
        label: "consultation DEA",
        data:api.map((head:any)=>head.signed),
        borderColor: ['rgba(55, 70, 73, 1)'],
      backgroundColor: ['rgba(55, 70, 73, 1)'],
      }
    ],
  }

  return data
}
//#endregion




//#region Sites

export function DataActivitySAE() {
  const url = Api.activitySAE

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.centreCode),
    datasets: [
      {
          // label: 'Status total',
          data: api.map((head:any)=>head.nbSAE),
          borderColor: 'rgba(75,192,192,1)'
      }
      
    ]
  }

  return data
}

export function DataDocumentType() {
  // const url = "http://localhost:5000/api/OpDashboard/site_status"

  const api = GetApi({url:Api.FAType})

  const t_labelSet = ['Administration', 'Report', 'Payable']
    const t_data = [37,  14 ,  5 ]

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "Undefined",
            data: [31,0,0],//[7,17,3,3], 
            backgroundColor: "orange"
          },
          {
            label: "NA",
            data: [27,186,0],//[7,17,3,3], 
            backgroundColor: "blue"
          },
          {
            label: "No",
            data: [31,0,0],//[7,17,3,3], 
            backgroundColor: "red"
          },
          {
            label: "Unknown",
            data: [1,0,0],//[7,17,3,3], 
            backgroundColor: "black"
          },
          {
            label: "Yes",
            data: [219,0,134],//[7,17,3,3], 
            backgroundColor: "green"
          },
        ],
      }

  return data
}

export function DataFAType() {
  // const url = "http://localhost:5000/api/OpDashboard/site_status"

  const api = GetApi({url:Api.FAType})

  const data ={
    labels : api.map((head:any)=>head.type),
    datasets: [
      {
          label: 'Type',
          data: api.map((head:any)=>head.nbSite),
          borderColor: 'red',
          backgroundColor: 'red'
      }
      
    ]
  }

  return data
}
//#endregion




//#region Milestones

export function DataGANTTCountry(){
  const [lev, setStatus] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_gantt") 
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

        
    const country:any = []    

    const regulatory_planned:any = []             
    const regulatory_actual:any = [] 
    
    const coredocs_planned:any = []             
    const coredocs_actual:any = [] 

    const startup_planned:any = []             
    const startup_actual:any = [] 

    const siteselection_planned:any = []             
    const siteselection_actual:any = [] 

    const initiation_planned:any = []             
    const initiation_actual:any = [] 

    const recruitment_planned:any = []             
    const recruitment_actual:any = [] 

    const monitoring_planned:any = []             
    const monitoring_actual:any = [] 

    lev.map((head:any) => {
        country.push(head.country)   

        regulatory_planned.push([head.regulatory_start_date_planned, head.regulatory_end_date_planned])              
        regulatory_actual.push([head.regulatory_start_date_actual, head.regulatory_end_date_actual])    

        coredocs_planned.push([head.coredocs_start_date_planned, head.coredocs_end_date_planned])              
        coredocs_actual.push([head.coredocs_start_date_actual, head.coredocs_end_date_actual])    

        startup_planned.push([head.startup_start_date_planned, head.startup_end_date_planned])              
        startup_actual.push([head.startup_start_date_actual, head.startup_end_date_actual])    

        siteselection_planned.push([head.siteselection_start_date_planned, head.siteselection_end_date_planned])              
        siteselection_actual.push([head.siteselection_start_date_actual, head.siteselection_end_date_actual])    

        initiation_planned.push([head.initiation_start_date_planned, head.initiation_end_date_planned])              
        initiation_actual.push([head.initiation_start_date_actual, head.initiation_end_date_actual])    

        recruitment_planned.push([head.recruitment_start_date_planned, head.recruitment_end_date_planned])              
        recruitment_actual.push([head.recruitment_start_date_actual, head.recruitment_end_date_actual])    

        monitoring_planned.push([head.monitoring_start_date_planned, head.monitoring_end_date_planned])              
        monitoring_actual.push([head.monitoring_start_date_actual, head.monitoring_end_date_actual])    
        
    })

    console.log("bien : ", regulatory_planned)

    // console.log('lever, ',lev)

    // const listLabel = lev.map((head)=>head.country)

    // console.log('apiindex : ', lev[listLabel.indexOf('Belgium')])

    
    // //console.log("country : ",country)
    // //console.log("start planned : ",start_planned)
    // //console.log("end planned : ",end_planned)

    const data ={
        labels : country,
        datasets: [
            {
                label: 'Regulatory planned',
                data: regulatory_planned,
                borderColor : 'rgba(55, 70, 73, 1)',
                backgroundColor : 'rgba(55, 70, 73, 1)',
            },
            {
                label: 'Regulatory actual',
                data: regulatory_actual,
                borderColor : 'rgba(55, 70, 73, 1)',
                backgroundColor : 'rgba(55, 70, 73, 1)',
            },
            {
                label: 'Start-up planned',
                data: startup_planned,
                borderColor : 'rgba(253, 98, 94, 1)',
                backgroundColor : 'rgba(253, 98, 94, 1)',
            },
            {
                label: 'Start-up actual',
                data: startup_actual,
                borderColor : 'rgba(253, 98, 94, 1)',
                backgroundColor : 'rgba(253, 98, 94, 1)',
            },
            {
                label: 'Core docs planned',
                data: coredocs_planned,
                borderColor : 'rgba(242, 200, 15, 1)',
                backgroundColor : 'rgba(242, 200, 15, 1)',
            },
            {
                label: 'Core docs actual',
                data: coredocs_actual,
                borderColor : 'rgba(242, 200, 15, 1)',
                backgroundColor : 'rgba(242, 200, 15, 1)',
            },
            {
                label: 'Sites selection planned',
                data: siteselection_planned,
                borderColor : 'rgba(101, 137, 142, 1)',
                backgroundColor : 'rgba(101, 137, 142, 1)',
            },
            {
                label: 'Sites selection actual',
                data: siteselection_actual,
                borderColor : 'rgba(101, 137, 142, 1)',
                backgroundColor : 'rgba(101, 137, 142, 1)',
            },
            {
                label: 'Initiation planned',
                data: initiation_planned,
                borderColor : 'rgba(138, 212, 235, 1)',
                backgroundColor : 'rgba(138, 212, 235, 1)',
            },
            {
                label: 'Initiation actual',
                data: initiation_actual,
                borderColor : 'rgba(138, 212, 235, 1)',
                backgroundColor : 'rgba(138, 212, 235, 1)',
            },
            {
                label: 'Recruitment planned',
                data: recruitment_planned,
                borderColor : 'rgba(254, 150, 102, 1)',
                backgroundColor : 'rgba(254, 150, 102, 1)',
            },
            {
                label: 'Recruitment actual',
                data: recruitment_actual,
                borderColor : 'rgba(254, 150, 102, 1)',
                backgroundColor : 'rgba(254, 150, 102, 1)',
            },
            {
                label: 'Monitoring planned',
                data: monitoring_planned,
                borderColor : 'rgba(166, 105, 153, 1)',
                backgroundColor : 'rgba(166, 105, 153, 1)',
            },
            {
                label: 'Monitoring actual',
                data: monitoring_actual,
                borderColor : 'rgba(166, 105, 153, 1)',
                backgroundColor : 'rgba(166, 105, 153, 1)',
            }
            
        ]
    }

    return data
}

//#endregion




export function DataPatientRecruitmentPerSite() {
  const url = Api.patientsRecruitmentPerSite

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.siteCodeName),
    datasets: [
      {
        label: "Early Discontinued",
        data:api.map((head:any)=>head.earlyDiscontinued),
        borderColor: ['rgb(214, 69, 44)'],
        backgroundColor: ['rgb(214, 69, 44)'],
      },
      {
        label: "Included",
        data:api.map((head:any)=>head.included),
        borderColor: ['rgb(34, 112, 230)'],
        backgroundColor: ['rgb(34, 112, 230)'],
      },
      {
        label: "Randomised",
        data:api.map((head:any)=>head.randomised),
        borderColor: ['rgb(252, 249, 81)'],
        backgroundColor: ['rgb(252, 249, 81)'],
      }
    ],
  }

  return data
}

export function DataPatientAEPerType() {
  const url = Api.patientsAEPerType

  const api = GetApi({url:url})

  const data ={
    labels : api.map((head:any)=>head.aeType),
    datasets: [
      {
        label: "Early",
        data:api.map((head:any)=>head.value),
        borderColor: ['rgba(1, 184, 170, 1)',
                      'rgba(201, 27, 61, 1)',
                      'rgba(253, 98, 94, 1)',
                      'rgba(55, 70, 73, 1)',
                      'rgba(242, 200, 15, 1)',
                      'rgba(131, 196, 57, 1)',
                      'rgba(48, 156, 159, 1)',
                      'rgba(110, 0, 85, 1)'],
        backgroundColor: ['rgba(1, 184, 170, .6)',
                          'rgba(201, 27, 61, .8)',
                          'rgba(253, 98, 94, .8)',
                          'rgba(55, 70, 73, .8)',
                          'rgba(242, 200, 15, .8)',
                          'rgba(131, 196, 57, .8)',
                          'rgba(48, 156, 159, .8)',
                          'rgba(110, 0, 85, .8)'],
      },
    ],
  }

  return data
}