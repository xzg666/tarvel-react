import React, { useState, useEffect } from 'react';
import { useHttpHook } from '@/hook';
import {List,Button} from 'antd-mobile';
import './index.less'
import {history} from 'umi';
import {useStoreHook} from 'think-react-store';
import { ErrorBoundary } from '@/components';


export default function(props){
  const {user:{logoutAsync}} = useStoreHook();
  const {user:{getUserAsync,username,avatar,phone,sign}} = useStoreHook();

  useEffect(() => {
    getUserAsync({
      id:10
    })
  }, [])

  const handleClick = ()=>{
    history.push({
      pathname:'/user/edit',
      query:{

      }
    })
  }

  const handlelogout = ()=>{
    console.log('logout',location.href);
    logoutAsync()
  }

  return (
    <ErrorBoundary>
      <div className="user-box">
        {/* 用户信息 */}
        <div className="info"> 
          <div className="set" onClick={handleClick}>设置</div>
          <div className="user">
            <img src={avatar || require('@/assets/yay.jpg')} />
            <p className="tel">{phone}</p>
            <p className="username">{sign}</p>
          </div>
        </div>
        {/* 列表 */}
        <div className="list"> 
          <List>
            <List.Item arrow="horizontal">用户协议</List.Item>
            <List.Item arrow="horizontal">常见问题</List.Item>
            <List.Item arrow="horizontal">联系客服</List.Item>
          </List>
          {/* 退出登录 */}
          <Button className="logout" type="warning" onClick={handlelogout}>退出登录</Button>
        </div>
      </div>
    </ErrorBoundary>
  )
}