'use client'
import React, {useEffect, useState} from 'react'
import mqtt from 'mqtt'
import Alert from '@mui/material/Alert';






const page = () => {

  const [alertShowing, setAlertShowing] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [alertText, setAlertText] = useState("");
  
  const [client, setClient] = useState(null);

 

  function testMqtt() {
    if(!alertShowing){
      setAlertShowing(true);
    }
  }



  return (
    <div className='flex flex-col align-center items-center p-10 bg-slate-700 h-screen'>
      { alertShowing ? (      
        <Alert className='w-screen' severity={alertSeverity} onClose={() => {setAlertShowing(false)}}>{alertText}</Alert>
        ) : (
          <></>
        )}
        <h1 className='text-2xl my-5'>Light Controller Hub</h1>
        <div className='flex flex-row space-x-4'>
          <button className='border rounded-lg p-2 text-slate-200 hover:bg-slate-500'>Turn On</button>
          <button className='border rounded-lg p-2 text-slate-200 hover:bg-slate-500'>Turn Off</button>
          <button className='border rounded-lg p-4 text-slate-200 hover:bg-slate-500' onClick={testMqtt}>Test</button>
          <input type='color'></input>
        </div>
    </div>
  )
}

export default page