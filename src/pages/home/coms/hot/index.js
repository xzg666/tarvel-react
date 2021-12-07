import React, { useState, useEffect,memo } from 'react';
import { history } from 'umi';


function Hot(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  const handleDetail = (id)=>{
    // console.log('id',id)
    history.push({
      pathname:'/house',
      query:{
        id
      }
    })
  }

  return (
    <div className="hot-box">
       <h2>最热民宿</h2>
       <div className="list">
        {
          props?.houses?.map((item)=>(
            <div className="list-item" key={item.id} onClick={()=>handleDetail(item.id)}> 
                <img className='img' alt='img' src={item.imgs[0]?.url} />
                <div>{item.title}</div>
                <div>{item.info}</div>
                <div>{item.price}</div>
            </div>
              
            )
          )
        }
       </div>
    </div>
  )
}

export default memo(Hot);