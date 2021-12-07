import React, { useState, useEffect } from 'react';
import { Button,Toast } from 'antd-mobile'
import { Http } from '@/hook/useHttpHook/http';

export default function (props) {
  const [state, setState] = useState()

  const renderPay = ()=>{
    switch(props.type) {
      case 0 :
        return <Button type="warning" size="small" onClick={handlePay}>去支付</Button>;
      case 1:
        return <Button size="small">已完成</Button>;
      default:
        break;
    }
  }

  const handlePay = async()=>{
    const res = await Http({
      url:'/orders/pay',
      body:{
        id:props.id
      }
    })
    if(res){
      Toast.success('支付成功！');
      window.location.reload();
    }
  }

  return (
    <div className="order-item">
      <img alt="order" src={props?.house?.imgs[0]?.url} />
      <div className="center">
        <div className="title">{props?.house.name}</div>
        <div className="price">{props?.house.price}</div>
      </div>
      <div className="pay">
        {renderPay()}
      </div>
    </div>
  )
}

