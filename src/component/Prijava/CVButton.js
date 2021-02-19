import './CVButton.css'
import {useRef, useState} from 'react'

const CVButton = ({error}) =>{
    const inputRef = useRef();
    const fileUploadRef = useRef();
    const [filename,setFile] = useState('');

    function uploadFile(){
        inputRef.current.click();
    }

    return(
        <>
        <button className="CVButton" onClick={uploadFile}>
            <div>Pošalji nam svoj CV</div>
            <input onChange={()=>{setFile(inputRef.current.value.split("\\").pop())}} ref={inputRef} type="file" hidden="hidden"/>
            <div><svg width="20" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="19" height="25" rx="1.5" stroke="#18EEA1"/><circle cx="10" cy="5" r="2.75" stroke="#18EEA1" stroke-width=".5"/><path d="M5 13c2-5 8-5 10 0" stroke="#18EEA1" stroke-width=".5"/><path stroke="#18EEA1" stroke-width=".3" d="M3 15.85h15"/><path d="M9.016 21.195c-.032.61-.204 1.076-.516 1.399-.31.323-.749.484-1.316.484-.57 0-1.024-.216-1.36-.648-.336-.435-.504-1.024-.504-1.766v-1.031c0-.74.172-1.324.516-1.754.346-.43.818-.645 1.414-.645.55 0 .974.166 1.273.496.303.329.467.799.493 1.41h-.723c-.031-.463-.129-.794-.293-.992-.164-.197-.414-.296-.75-.296-.388 0-.686.152-.895.457-.208.302-.312.746-.312 1.332v1.043c0 .575.096 1.017.289 1.324.195.307.48.46.852.46s.64-.092.804-.277c.164-.184.266-.517.305-.996h.723zm4.433.707l1.301-4.59h.785L13.765 23h-.624l-1.766-5.688h.781l1.293 4.59z" fill="#18EEA1"/></svg></div>
            <div className="required" style={{top:"1rem"}}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.3" stroke="#18EEA1" strokeWidth="1.4"/><path fill="#18EEA1" d="M9 14h2v2H9z"/><path stroke="#18EEA1" d="M9.5 3v10M10.5 3v10"/></svg></div>
            
        </button>
        {filename!='' && 
            <div className="uploadedFileName">CV: {filename}</div>
        }
        {error!='' ?
        <div ref={fileUploadRef} style={{display:'block'}} className="ovoPoljeJeObaveznoFile">{error}</div>
        :
        <div ref={fileUploadRef} style={{display:'none'}} className="ovoPoljeJeObaveznoFile">{error}</div>
        }
        </>
    )
}

export default CVButton