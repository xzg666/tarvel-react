import React, { useState, useEffect } from 'react';
import './index.less'
import Banner from './coms/Banner';
import Info from './coms/Info';
import List from './coms/List';
import Footer from './coms/Footer';
import { useLocation } from 'react-router';
import { useStoreHook } from 'think-react-store';
import {useObserverHook } from '@/hook';
import {COMMONCONSTANTS} from '@/constants';

export default function(props){
    // * 1.监听loading是否展示出来
  // *2.触发reload，修改分页
  // *3.监听reload变化，重新请求接口
  // *4.拼接数据
  const {query} = useLocation();
  const { house: { detail ,comments,
    reloadCommentsNum,showLoading,reloadComments ,resetData, 
    getDetailAsync , getCommentsAsync,order,hasOrderAsync,addOrderAsync,delOrderAsync } } = useStoreHook()

  useObserverHook('#'+COMMONCONSTANTS.MORE,(entries)=>{
    console.log('ENTRIES',entries)
    //如果划到底部则参数加一
    if(entries[0].isIntersecting && comments && comments.length && showLoading){
      reloadComments()
    }
  },[comments])//这里加这个依赖的是，每次comments发生变化就重新参数加一，而不是一判断到是划到下面一次性加完

  useEffect(() => {
    getDetailAsync({
      id:query?.id
    })
   
  }, [])
//当划到底部的时候参数加1了，设置参数为依赖，然后进行重新发送请求
  useEffect(() => {
    
    getCommentsAsync({
      houseId:query.id
    })
  }, [reloadCommentsNum])

  useEffect(() => {
    return ()=>{
      resetData({
        detail:{}
      })
    }
  }, [])

  //进入该页面判断这个house是否是被预定
  useEffect(() => {
    hasOrderAsync({
      id:query?.id
    })
  }, [])

  const handleBtnClick = (id)=>{
    //如果传来了id说明已经有订单，并且你点了取消订单
    //如果没有传来id，说明没有订单，而且你点了预定
    if(!id){
      addOrderAsync({
        id:query?.id
      })
    }else{
      delOrderAsync({
        id:query?.id
      })
    }
  }

  return (
    <div className="house-box">
        {/**banner */}
        <Banner banner={detail?.banner}/>
        {/**房屋信息 */}
        <Info info={detail?.info} order={order} btnClick={handleBtnClick} />
        {/**评论列表 */}
        <List comments={comments} showLoading={showLoading}/>
        {/**footer */}
        <Footer/>
    </div>
  )
}
