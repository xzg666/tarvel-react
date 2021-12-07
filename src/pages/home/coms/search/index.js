import React, { useState, useEffect,memo } from 'react';
import { Picker, List, Button,Calendar,Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import { history } from 'umi';

function Search(props){
  const [selectedCity, setSelectedCity] = useState(['10001'])
  const [time, setTime] = useState('选择时间')
  const [calShow, setCalShow] = useState(false)

  useEffect(() => {
    
  }, [])

  const handleCityChange = (value)=>{
    setSelectedCity(value)
  }

  const selectTime = ()=>{
    setCalShow(!calShow)
  }

  const selectedTime = (startTime,endTime)=>{
    // console.log(startTime,endTime)
    setCalShow(!calShow)
    setTime(dayjs(startTime).format('YYYY-MM-DD')+'~'+dayjs(endTime).format('YYYY-MM-DD'))
  }

  const search = ()=>{
    if(time.includes('~')){
      history.push({
        pathname:'/search',
        query:{
          code:selectedCity,
          startTime:time.split('~')[0],
          endTime:time.split('~')[1]
        }
      })
    }else{
      Toast.fail('请选择时间')
    }
    
  }

  return (
    <div className="search-box">
      {/* 可选城市 */}
      <div>
        {
          props.cities.length && <Picker
          title='城市'
          data={props.cities}
          value={selectedCity}
          cascade={false}
          cols={1}
          onChange={handleCityChange}
        >
          <List.Item>可选城市</List.Item>
        </Picker>
        }        
      </div>
      {/* 点击按钮 */}
      <List onClick={selectTime}>
        <List.Item>
          <div className="select-time">
            <div>出租时间</div>
            <div className="time">{time}</div>
          </div>
        </List.Item>
      </List>
      {/* 点击按钮 */}
      <Button type="warning" size="small" onClick={search}>搜索民宿</Button>
        {/* 日历 */}
      <Calendar
      visible={calShow}
      onCancel={selectTime}
      onConfirm={selectedTime}
      />
    </div>
  )
}

//做深度比较，ture为不渲染，false为渲染
function areEqual(prevProps,nextProps) {
  // console.log(prevProps,nextProps)
  if(prevProps.cities === nextProps.cities && prevProps.citiesLoading === nextProps.citiesLoading){
    return true;
  }else{
    return false;
  }
}

export default memo(Search,areEqual);