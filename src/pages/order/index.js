import React, { useState, useEffect } from 'react';
import { useObserverHook } from '@/hook';
import { Tabs } from 'antd-mobile'
import List from './coms/Lists'
import './index.less'
import { Http } from '@/hook/useHttpHook/http';
import {COMMONCONSTANTS} from '@/constants'
import { ErrorBoundary } from '@/components';


export default function (props) {
  const [page, setPage] = useState(COMMONCONSTANTS.PAGE);
  const [orders, setOrders] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [type, setType] = useState(0);

  const tabs = [
    { title: '未支付', sub: 0 },
    { title: '已支付', sub: 1 }
  ];

  const involkeHttp = async(pageNum)=>{
    const result = await Http({
      url: '/orders/lists',
      body: {
        ...page,
        pageNum,
        type
      } 
    });
    console.log('http',result)
    setOrders(result);
    return result;
  }
  
  useObserverHook('#'+COMMONCONSTANTS.MORE,async(entries)=>{
    console.log(entries)
    if(entries[0].isIntersecting){
      const result = await involkeHttp(page.pageNum + 1)
      if(orders && result && result.length === page.pageSize){
        setOrders([...orders,...result]);//数据拼接
        setPage({
          ...page,
          pageNum: page.pageNum + 1
        })
        setShowLoading(true);
      }else{
        setShowLoading(false);
      }
    }
  },null)

  // const [orders] = useHttpHook({
  //   url:'/order/lists',
  //   body:{
  //   }
  // })
  const handleChange = (e)=>{
    // console.log(e)
    setType(e.sub);
    setPage(COMMONCONSTANTS.PAGE);
    setOrders([]);
    setShowLoading(true)
  }

  const fetchOrder = async (pageNum) => {
    const result = await involkeHttp(pageNum)
    if(result && result.length === page.pageSize){
      setOrders(result);
      setShowLoading(true);
    }else{
      setShowLoading(false)
    }
  }

  useEffect(() => {
    fetchOrder(1)
  }, [type])

  useEffect(() => {
    
  }, [])

  return (
    <ErrorBoundary>
      <div className="order-box">
      <Tabs
        tabs={tabs}
        onChange={handleChange}
      >
        <div className="tab">
          <List orders={orders} type={0} showLoading={showLoading}/>
        </div>
        <div className="tab">
          <List orders={orders} type={1} showLoading={showLoading}/>
        </div>
      </Tabs>
    </div>
    </ErrorBoundary>
  )
}

