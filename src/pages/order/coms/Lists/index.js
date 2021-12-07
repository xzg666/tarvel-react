import React, { useState, useEffect } from 'react';
import {isEmpty} from 'project-libs'
import {ActivityIndicator} from 'antd-mobile'
import OrderItem from '../Item'
import {ShowLoading} from '@/components'

export default function(props){
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      if(isEmpty(props?.orders)){
        setState(true);
      }
    },1500);//1.5s还是没有数据则显示没有数据
  }, [])
 
  return (
    <div>
        {isEmpty(props?.orders) ?
        <>{state?<ShowLoading showLoading={false}/>:<ActivityIndicator toast/> }</>
           :
          <div className="tab-lists">
            {
              props.orders.map((item,index)=>(
                <OrderItem type={props.type} key={index} {...item} />
                // 将item的值都传给item组件
              ))
            }
            <ShowLoading showLoading={props.showLoading}/>
          </div>
        }
    </div>
  )
}

