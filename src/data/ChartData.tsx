import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react'
import { isLineBreak } from 'typescript';

interface Props {
}

//#region Clinical Operational
export function DataSiteIdentifiedPerCountry(){
    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_status_summary") // 1 -mettre l'url de l'api
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

    const labelSet:any = []

    lev.map((head:any) => {
        labelSet.push(head.status)
        
    })

    const t_labelSet:any = ['France', 'United States', 'Netherlands','Canada', 'Italy', 'Brazil']
    const t_data:any = [37,  14 ,  5 , 5 ,  4 ,  2  ]
    const data3 = [
        {category: 'United States', value: 7, name:"francia"},
        {category: 'France', value: 7, name:'new england'},
        {category: 'Netherlands', value: 5},
        {category: 'Canada', value: 5},
        {category: 'Italy', value: 4},
        {category: 'Brazil', value: 2},
        {category: 'Norway', value: 2},
        {category: 'Japan', value: 1},
        {category: 'Spain', value: 1},
      ]

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "prop.label1",
            data: t_data,//[7,17,3,3], 
          },
        ],
      }
  
      return data

}

export function DataSites() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/sites")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  const label:any = []
  const value:any = []
  lev.map((head:any) => {
      label.push(head.potential_value)
      value.push(head.total_value)
  })

  const data ={
    labels : label,
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

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/patients")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  const label:any = []
  const value:any = []
  lev.map((head:any) => {
      label.push(head.potential_value)
      value.push(head.total_value)
  })

  const data ={
    labels : label,
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

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/site_status") // 1 -mettre l'url de l'api
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

    console.log("lever : ",lev)
  const label:any = []                    //
  const status_total:any = []             // 2 - ajouter le nombre de liste nécessaire
  const last_status_total:any = []       //

  lev.map((head:any) => {
      label.push(head.label)                             //
      status_total.push(head.status_total)                // 3 - Push vers les listes
      last_status_total.push(head.last_status_total)     //
      
  })

  // 4 - Les afficher
  const data ={
    labels : label,
    datasets: [
      {
          label: 'Status total',
          data: status_total,
          borderColor: 'rgba(75,192,192,1)'
      },
      {
          label: 'Last status total',
          data: last_status_total,
          borderColor: '#742774'
      }
      
    ]
  }

  console.log('datata', data)

  return data

  
}

export function DataPatientStatus() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/patient_status")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  const label:any = []
  const status_total:any = []
  const last_status_total:any = []
  lev.map((head:any) => {
    label.push(head.label)
      status_total.push(head.status_total)
      last_status_total.push(head.last_status_total)
      
  })

  const data ={
    labels : label,
    datasets: [
      {
          label: 'Status total',
          data: status_total,
          borderColor: 'rgba(75,192,192,1)'
      },
      {
          label: 'Last status total',
          data: last_status_total,
          borderColor: '#742774'
      }
      
    ]
  }

  return data
}

export function DataCurveOfInclusion() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/curve")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  const labelSet:any = []
  const dataSet1:any = []
  const dataSet2:any = []
  const dataSet3:any = []
  lev.map((head:any) => {
      labelSet.push(head.date)
      dataSet1.push(head.included)
      dataSet2.push(head.randomised)
      dataSet3.push(head.theoretical)
  })

  const data ={
    labels : labelSet,
    datasets: [
      {
        label: "Included",
        data:dataSet1,
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
        data:dataSet2,
        borderColor: '#374649',
        backgroundColor: 'rgba(75,192,192,0.2)',
        // fill: true,
        // borderRadius: 10,
        // borderWidth: 10,
        hoverBorderWidth: 5,
      },
      {
        label: "Theoretical",
        data:dataSet3,
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

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/documents_conformity")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  const label:any = []
  const value:any = []
  lev.map((head:any) => {
      label.push(head.no_yes)
      value.push(head.value)
  })

  const data ={
    labels : label,
    datasets: [
      {
          label: 'Status total',
          data: value,
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

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/safety_ae")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  const label:any = []
  const value:any = []
  lev.map((head:any) => {
      label.push(head.initial_followup)
      value.push(head.value)
  })

  const data ={
    labels : label,
    datasets: [
      {
          label: 'Status total',
          data: value,
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
//#endregion

export function DataPatientPerMandatoryConsultation() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/patient_mandatory_consultation")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  const labelSet:any = []
  const dataSet1:any = []
  const dataSet2:any = []
  const dataSet3:any = []
  const dataSet4:any = []
  const dataSet5:any = []
  const dataSet6:any = []
  lev.map((head:any) => {
      labelSet.push(head.label)
      dataSet1.push(head.na)
      dataSet2.push(head.incomplete)
      dataSet3.push(head.complete)
      dataSet4.push(head.dea)
      dataSet5.push(head.deb)
      dataSet6.push(head.clean)
  })

  const data ={
    labels : labelSet,
    datasets: [
      {
        label: "Consultation NA",
        data:dataSet1,
        borderColor: ['rgba(1, 184, 170, 1)'],
      backgroundColor: ['rgba(1, 184, 170, 1)'],
      },
      {
        label: "Consultation incomplete",
        data:dataSet2,
        borderColor: ['rgba(201, 27, 61, 1)'],
      backgroundColor: ['rgba(201, 27, 61, 1)'],
      },
      {
        label: "consultation complete",
        data:dataSet3,
        borderColor: ['rgba(253, 98, 94, 1)'],
      backgroundColor: ['rgba(253, 98, 94, 1)'],
      },
      {
        label: "consultation DEA",
        data:dataSet4,
        borderColor: ['rgba(55, 70, 73, 1)'],
      backgroundColor: ['rgba(55, 70, 73, 1)'],
      },
      {
        label: "consultation DEB",
        data:dataSet5,
        borderColor: ['rgba(242, 200, 15, 1)'],
      backgroundColor: ['rgba(242, 200, 15, 1)'],
        
      },
      {
        label: "consultation clean",
        data:dataSet6,
        borderColor: ['rgba(131, 196, 57, 1)'],
      backgroundColor: ['rgba(131, 196, 57, 1)'],
      },
    ],
  }

  return data
}

export function DataPatientPerMandatoryConsultation2() {

  const [lev, setStatus] = useState<any>([])
  useEffect(() => {
      fetch("http://localhost:5000/api/OpDashboard/dmecrf_patient_mandatory_consultation")
          .then((response) => response.json())
          .then((json) => setStatus(json))

  },[])

  const labelSet:any = []
  const dataSet1:any = []
  const dataSet2:any = []
  const dataSet3:any = []
  const dataSet4:any = []
  lev.map((head:any) => {
      labelSet.push(head.label)
      dataSet1.push(head.expected)
      dataSet2.push(head.in_progress)
      dataSet3.push(head.data_entry)
      dataSet4.push(head.signed)
  })

  const data ={
    labels : labelSet,
    datasets: [
      {
        label: "Consultation NA",
        data:dataSet1,
        borderColor: ['rgba(1, 184, 170, 1)'],
      backgroundColor: ['rgba(1, 184, 170, 1)'],
      },
      {
        label: "Consultation incomplete",
        data:dataSet2,
        borderColor: ['rgba(201, 27, 61, 1)'],
      backgroundColor: ['rgba(201, 27, 61, 1)'],
      },
      {
        label: "consultation complete",
        data:dataSet3,
        borderColor: ['rgba(253, 98, 94, 1)'],
      backgroundColor: ['rgba(253, 98, 94, 1)'],
      },
      {
        label: "consultation DEA",
        data:dataSet4,
        borderColor: ['rgba(55, 70, 73, 1)'],
      backgroundColor: ['rgba(55, 70, 73, 1)'],
      }
    ],
  }

  return data
}

//#region DataManagement Queries
export function DataSiteQueries1(){
    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_status_summary") // 1 -mettre l'url de l'api
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

    const labelSet:any = []

    lev.map((head:any) => {
        labelSet.push(head.status)
        
    })

    const t_labelSet:any = ['Issued', 'Completed']
    const t_data:any = [7739, 6504 ]
    

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "aaa",
            data: t_data,
          },
        ],
      }
  
      return data

}
export function DataSiteQueries2(){
    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_status_summary") // 1 -mettre l'url de l'api
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

    const labelSet:any = []

    lev.map((head:any) => {
        labelSet.push(head.status)
        
    })

    const t_labelSet:any = ['Issued', 'Completed']
    const t_data:any = [7739, 6504 ]
    

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "aaa",
            data: t_data,
          },
        ],
      }
  
      return data

}
export function DataSiteQueries3(){
    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_status_summary") // 1 -mettre l'url de l'api
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

    const labelSet:any = []

    lev.map((head:any) => {
        labelSet.push(head.status)
        
    })

    const t_labelSet:any = ['Issued', 'Confirmed']
    const t_data:any = [7739, 908 ]
    

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "aaa",
            data: t_data,
          },
        ],
      }
  
      return data

}
export function DataSiteQueries4(){
    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_status_summary") // 1 -mettre l'url de l'api
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

    const labelSet:any = []

    lev.map((head:any) => {
        labelSet.push(head.status)
        
    })

    const t_labelSet:any = ['Issued', 'Completed']
    const t_data:any = [7739, 6504 ]
    

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "aaa",
            data: t_data,
          },
        ],
      }
  
      return data

}
export function DataSiteQueries5(){
    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_status_summary") // 1 -mettre l'url de l'api
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

    const labelSet:any = []

    lev.map((head:any) => {
        labelSet.push(head.status)
        
    })

    const t_labelSet:any = ['Issued', 'Resolved']
    const t_data:any = [7739, 7324 ]
    

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "aaa",
            data: t_data,
          },
        ],
      }
  
      return data

}
export function DataSiteQueries6(){
    const [lev, setStatus] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:5000/api/Sites/sites_status_summary") // 1 -mettre l'url de l'api
            .then((response) => response.json())
            .then((json) => setStatus(json))

    },[])

    const labelSet:any = []

    lev.map((head:any) => {
        labelSet.push(head.status)
        
    })

    const t_labelSet:any = ['Issued', 'Closed']
    const t_data:any = [7739, 7739 ]
    

    const data ={
        labels: t_labelSet,
        datasets: [
          {
            label: "aaa",
            data: t_data,
          },
        ],
      }
  
      return data

}
//#endregion