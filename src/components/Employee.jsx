import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Employee() {
    const [empList,setEmpList]=useState([])
    // useEffect(()=>{
    //     axios.get('https://www.getpostman.com/collections/027f63bff89dd4c1d9a4').then((resp)=>{
    //         setEmpList(resp)
    //     })
    // })
  return (
    <div>
        {
            empList.map(item=>
                <div>
                    {/* display each item in the employee list here */}
                    </div>)
        }
    </div>
  )
}

export default Employee
