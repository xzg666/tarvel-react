import React, { useState, useEffect } from 'react';
import { useHttpHook } from '@/hook';
import { ErrorBoundary } from '@/components';

import  HeaderCom from './coms/header'
import HotCom from './coms/hot'
import SearchCom from './coms/search'

import './index.less'

export default function(props){
  const [city, setCity] = useState([])
  const [cities,citiesLoading] = useHttpHook({
    url:'/common/cities',
    method:'post',
    init:[]
  })
  const [houses,houseLoading] = useHttpHook({
    url:'/house/hot',
    method:'post'
  })
  console.log(houses,houseLoading)
  
  useEffect(() => {
    // fetch('/api/commons/cities',{method:'post'})
    // .then(res=>res.json())
    // .then(res=>console.log(res))
    // .catch(e=>console.log(e))
  }, [])

  return (
    <ErrorBoundary>
      <div className="home-box">
        {/* header登录 */}
        <HeaderCom/>
        {/* 搜索 */}
        {cities && <SearchCom cities={cities} citiesLoading={citiesLoading}/>}
        {/* 热门民宿 */}
        {houses && <HotCom houses={houses} houseLoading={houseLoading}/>}
    </div>
    </ErrorBoundary>
  )
}