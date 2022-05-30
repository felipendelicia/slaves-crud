import axios from 'axios'
import { useEffect, useState, useContext } from 'react'

import config from '../../configuration/config'
import ThemeContext from '../../configuration/theme';
import "./SlavesContainer.css"

const SlavesContainer = () => {

  const [slaves, setSlaves] = useState<{description:string;slave:string;status:boolean;__v:string;_id:string}[]>()

  const getSlaves = () => {
    axios.get(config.slavesEndPoint)
    .then(res => {
        setSlaves(res.data);
      })
  }

  useEffect(()=>{
    getSlaves()
  },[])

  const theme = useContext(ThemeContext)

  return (
    <div className="slaves-container-container">
      {
        slaves?.map((slave,i)=>{
          console.log(slave.status)
          return(
            <div className='slave-container-main' 
            key={i}
            style={{background:theme.softColor}}>
              <div className="slave-data">
                <h3 style={{color:theme.inverseColor}}>{slave.slave}</h3>
                <p style={{color:theme.inverseColor}}>{slave.description}</p>
              </div>
              <div className="slave-controllers">
                <button>Delete</button>
                <button style={slave.status?{background:"#36AE7C"}:{background:"#F32424"}}>
                  Sold?
                </button>
                <button>Edit</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SlavesContainer