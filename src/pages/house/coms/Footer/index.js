import React, { useState, useEffect } from 'react';
import { Modal } from '@/components';
import { TextareaItem, Button, Toast } from 'antd-mobile';
import {useStoreHook} from 'think-react-store';
import {useLocation} from 'umi';

export default function (props) {
  const {house:{addCommentsAsync}} = useStoreHook()

  const {query} = useLocation();

  const [show, setShow] = useState(false)
  const [commentValue, setCommentValue] = useState('')

  const handleCommit = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }

  const handleChange = (value) => {
    // console.log(value)
    setCommentValue(value)
  }

  const handleSubmit = (value) => {
    if(commentValue){
      setShow(false)
      addCommentsAsync({
        comment:commentValue,
        houseId:query.id
      })
    }else{
      Toast.fail('请输入评论~')
    }
    
  }

  useEffect(() => {

  }, [])

  return (
    <div className="footer" >
      <div className="footer-click" onClick={handleCommit}>
        评论~
      </div>
      <Modal
        show={show}
        onClose={handleClose}
        styleBody={{

          height: '220px',
          bottom: '0px',
          top: 'unset'
        }}
      >
        <div className="modal-comment">
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange}
          />
          <Button className='comment-btn' type='warning' onClick={handleSubmit}>评论</Button>
        </div>
      </Modal>
    </div>
  )
}