import React, { useState, useEffect } from 'react';
import {Button} from 'antd-mobile';
import { timer } from '@/utils';

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {
    console.log('res',props)
    
  }, [])

  const handleOrder = (id) => {
    props?.btnClick(id) //将未支付的houseId传给父组件去发送请求
  }

  const renderBtn = () => {
    //order里面没有id,说明订单一定不存在
    if(!props.order?.id){
      return <Button className='info-btn' type='warning' onClick={()=>handleOrder()}>预定</Button>
    }

    //已经有订单，处于未支付状况
    if(props.order?.isPayed === 0){
      return <Button className='info-btn' type='warning' onClick={()=>handleOrder(props.order?.id)}>取消预定</Button>
    }

    //已经有订单，处于已支付状况
    if(props.order?.isPayed === 1){
      return <Button className='info-btn' type='ghost' >居住中</Button>
    }
  }

  useEffect(() => {
    // console.log(props?.info)
  }, [])

  return (
    <div className="info-box">
        <div className="title">{props?.info?.name}</div>
        <div className="msg">简介：{props?.info?.info}</div>
        <div className="price">价格：￥{props?.info?.price}</div>
        <div className="puvlish-time">发布时间：{timer(props?.info?.publishTime)}</div>
        <div className="start-time">开始时间：{timer(props?.info?.startTime,'')}</div>
        <div className="end-time">结束时间：{timer(props?.info?.endTime,'')}</div>
        {renderBtn()}
    </div>
  )
}