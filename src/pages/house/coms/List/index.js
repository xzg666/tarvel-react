import React, { useState, useEffect } from 'react';
import { ShowLoading } from '@/components';
import {timer} from '@/utils';

export default function (props) {
  const [state, setState] = useState()

 

  useEffect(() => {

  }, [])

  return (
    <div className="comments-box">
      <h1 className="title">评论</h1>
      <div className="comments-list">
        {
          props.comments?.map((item) => (
            <div className="list-item" key={item.id}>
              <img className="avatar" src={item.user?.avatar} />
              <div className="right">
                <div className="top">
                  <p>{item.user?.username}</p>
                  <p>{timer(item.createTime)}</p>
                </div>
                <div className="bottom">
                  <div>{item.msg}</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <ShowLoading showLoading={props.showLoading} />
    </div>
  )
}