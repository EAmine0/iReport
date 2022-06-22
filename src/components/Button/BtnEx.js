import React from 'react'
import { jsPDF } from "jspdf";
import './Button.css'

function generatePDF(){
  //méthode 1
    const doc = new jsPDF({
      orientation:'landscape',
      unit: 'pt'
    });
    doc.html(document.querySelector(".box_container"),{
      callback: function(pdf){
        pdf.save("mypdf.pdf")
      }
    });

    
}

function BtnEx() {
    return (
        <div className='btn_export'>
            EXPORT
            <br/>
            {/* <button onClick={printer}>here</button> */}
            <div className='markss'>
              <button onClick={generatePDF}>export</button>
            </div>
            
        </div>
    )
}

export default BtnEx
