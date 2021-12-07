import React, { useState, useEffect } from 'react';
import {history} from 'umi'
import {useObserverHook} from '@/hook'
import {ShowLoading} from '@/components'

let observer
export default function(props){
  const [state, setState] = useState()

  const handleReturn = ()=>{
    history.push('/')
    }

    //引入自己封装的useObserverHook
    useObserverHook('#loading',(entries)=>{
        console.log(entries)
    })

//   useEffect(() => {
//     observer = new IntersectionObserver(entries => {
//         console.log(entries)
//     })
//     observer.observe(document.querySelector('#loading'));
    
//     return ()=>{
//         if(observer){
//             //解绑元素
//             observer.unobserve(document.querySelector('#loading'));
//             //停止监听
//             observer.disconnect();
//         }
//     }
//   }, [])

  return (
    <div>
        obsever
        <button onClick={handleReturn}>返回</button>
        <div id="loading" style={{width:'100px',height:'50px',backgroundColor:'red',marginTop:'1000px'}}>loading...</div>
    </div>
  )
}