import React, { useState, useEffect } from 'react';
import './index.less'

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {
    // console.log('props.showLoading',props.showLoading)
  }, [])

  return (
    <div className="loaing-box">
        {
          props.showLoading ? <div id='more'>loading...</div> : <div>只有这么多了~</div>
        }
    </div>
  )
}