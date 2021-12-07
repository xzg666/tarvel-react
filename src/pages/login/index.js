import React, { useState, useEffect } from 'react';
import {List,InputItem,Button,Toast,Icon} from 'antd-mobile';
import {createForm} from 'rc-form';
import {history} from 'umi';
import './index.less';
import {useStoreHook} from 'think-react-store';


function Login(props){
  const {user:{loginAsync}} = useStoreHook();

  const { getFieldProps, validateFields } = props.form;

  const [state, setState] = useState()

  useEffect(() => {
    console.log(localStorage.getItem('token'))
  }, [])

  const handleClick = ()=>{
    validateFields((err,value)=>{
        if(err){
            Toast.fail('请填写完整信息~')
            return
        }else{
            console.log('value',value)
            loginAsync(value);
        }
    })
  }

  const toRegister = () =>{
      history.push({
          pathname:'/register'
      })
  }

  const returnHome = ()=>{
    history.push('/')
   }

  return (
    <div>
        <Icon type="left" onClick={returnHome}/>
        <List
            renderHeader={()=>'用户登录'}
        >
            <List.Item>
                <InputItem 
                {...getFieldProps('username',{
                    rules:[{require:true}]
                })}
                    placeholder="用户名"
                >
                    用户名：
                </InputItem>
                <InputItem 
                {...getFieldProps('password',{
                    rules:[{require:true}]
                })}
                    placeholder="密码"
                >
                    密码：
                </InputItem>
            </List.Item>
        </List>
        <Button type="warning" onClick={handleClick}>登录</Button>
        <div className="to-register" onClick={toRegister}>没有账户，去注册</div>
    </div>
  )
}

export default createForm()(Login)