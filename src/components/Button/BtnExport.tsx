import React from 'react'
import { jsPDF } from "jspdf";
import './Button.css'

interface Props {
}

function printer(){
    window.print()
}

function generatePDF(){
  const doc = new jsPDF("p", "pt", "a4");

  // const elem = document.querySelector('markss'),{
  //   callback: function(pdf:any):any=>{
  //     pdf.save("mypdf.pdf")
  //   }
  

  // doc.html(document.querySelector('markss'),{
  //   callback: function(pdf){
  //     pdf.save("mypdf.pdf")
  //   }
  // });
}


// function generatePDF(){
//     const doc = new jsPDF("p", "pt", "a4");
//     // let li: HTMLCollectionOf<Element>= document.getElementsByTagName('markss');
//     const element = document.querySelector('markss',{
//       callback: function(pdf:any){
//         pdf.save("mypdf.pdf")
//       }
//     }).item.toString()

//     doc.html(document.querySelector('markss',{
//       callback: function(pdf:any){
//         pdf.save("mypdf.pdf")
//       }
//     }).item.toString());

//     // doc.html(document.querySelector(".markss",{
//     //   callback: function(pdf:any){
//     //     pdf.save("mypdf.pdf")
//     //   }
//     // }))
    
// }

function BtnExport(props: Props) {
    const {} = props

    

    return (
        <div className='btn_export'>
            EXPORT
            <br/>
            {/* <button onClick={printer}>here</button> */}
            <div>
              <button className='markss' onClick={generatePDF}>aqui</button>
            </div>
        </div>
    )
}

export default BtnExport
