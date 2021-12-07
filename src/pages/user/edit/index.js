import React, { useState, useEffect } from 'react';
import {List,ImagePicker,Toast,InputItem,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import {useStoreHook} from 'think-react-store';

function Edit(props){
    const {user:{editUserAsync, getUserAsync,avatar,phone,sign}} = useStoreHook();
    // const [files, setFiles] = useState([{url:avatar}]);

  const [files, setFiles] = useState([]);
  const {getFieldProps, validateFields } = props.form

  useEffect(() => {
    // console.log(props)
    
  }, [])

  const handleChange = (files)=>{
    console.log('files',files)
    if(files[0]?.file?.size/1024/1024 >0.05){
        Toast.fail('图片大小不能超过0.05M');
        return
    }
    setFiles(files);
  }

  const handleSubmit = ()=>{
      if(!files.length){
          Toast.fail('请上传图片~');
          return;
      }
      validateFields((error,value)=>{
          console.log(error);
          if(error){
              Toast.fail('请将信息补充完整~');
              return
          }else{
            console.log('value',value,files)
            //发送请求传参
            editUserAsync({
                avatar:files[0].url,
                phone:value.phone,
                sign:value.sign
            })
          }
      })
  }

  return (
    <div className="edit-box">
        <List>
            <List.Item>
                <ImagePicker
                    files={files}
                    onChange={handleChange}
                    selectable={files.length < 2}
                />
            </List.Item>
            <List.Item>
                <InputItem
                 {...getFieldProps('phone', {
                    rules: [{ required: true }],
                    initialValue: phone
                  })}
                    placeholder="请输入您的电话"
                >
                电话：
                </InputItem>
            </List.Item>
            <List.Item>
                <InputItem
                {...getFieldProps('sign', {
                    rules: [{ required: true }],
                    initialValue: sign
                  })}
                    placeholder="请输入您的签名"
                >
                签名：
                </InputItem>
            </List.Item>
        </List>
        <Button type="warning" onClick={handleSubmit}>修改</Button>
    </div>
  )
}

export default createForm()(Edit)