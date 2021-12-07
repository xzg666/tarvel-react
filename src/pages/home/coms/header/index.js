import React, { useState, useEffect,memo } from 'react';
import {Link} from 'umi';

function Header(props){
  const [username, setUsername] = useState(localStorage.getItem('username'));

  useEffect(() => {
    // console.log(2,cookie.get('user'))
    
  }, [])

  return (
    <div className="header-box">
        <h2>民宿</h2>
        <div className="log">
          {
            username ? username :
            (
              <>
              <Link to='/login'>登录</Link><span>|</span><Link to="/register">注册</Link>
              </>
            )
          }
        </div>
    </div>
  )
}

export default memo(Header);