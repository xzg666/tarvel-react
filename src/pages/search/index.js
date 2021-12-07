import React, { useState, useEffect } from 'react';
import './index.less'
import { SearchBar, ActivityIndicator } from 'antd-mobile'
import { useHttpHook, useObserverHook, useImgHook } from '@/hook';
import { ShowLoading } from '@/components'
import { history } from 'umi';
import { useLocation } from 'umi';
import {COMMONCONSTANTS} from '@/constants'

export default function (props) {
    //useState-----------------------------------------------------------------------
    const [houseName, setHouseName] = useState('')
    const [page, setPage] = useState(COMMONCONSTANTS.PAGE)
    const [houseList, setHouseList] = useState([])
    const [showLoading, setShowLoading] = useState(true)
    const [houseSubmitName, setHouseSubmitName] = useState('')

    //useHook----------------------------------------------------------------------
    const { query } = useLocation()
    const [houses, loading] = useHttpHook({
        url: '/house/search',
        body: {
            ...page,
            houseSubmitName,
            code: query?.code,
            startTime: query?.startTime + ' 00:00:00',
            endTime: query?.endTime + ' 23:59:59'

        },
        watch: [page.pageNum]
    })
    // console.log(houses, loading)

    useObserverHook('#'+COMMONCONSTANTS.MORE, (entries) => {
        // console.log(entries)
        //只有划到最下面为true而且上一个请求完成了loading是false状态才修改数据，监听进行下一次请求
        if (entries[0].isIntersecting && !loading) {
            setPage({
                ...page,
                pageNum: page.pageNum + 1
            })
        }
    }, null)

    useImgHook('.item-img', (entries) => { }, null)

    useEffect(() => {
        //监听loading，如果loading返回false说明发送请求返回数据了，将houses拼接到houseList中。注意...houses的话要进行.length判断，不然会报错!
        if (houses && !loading) {
            if (houses.length) {
                setHouseList([...houseList, ...houses])
                //如果返回的houses数据少于每页的数据，则这是最后一条数据。showloading设置为false
                if (houses.length < page.pageSize) {
                    setShowLoading(false)
                }
            } else {
                setShowLoading(false)
            }
        }
    }, [loading])

    //func-------------------------------------------------------------------------
    const handleChange = (value) => {
        setHouseName(value)
    }
    const handleCancle = () => {
        history.push('/')
    }

    const handleSumbit = (value) => {
        setHouseSubmitName(value)
        setPage(COMMONCONSTANTS.PAGE)
        setHouseList([])
    }

    return (
        <div className="search-box">
            {/* 底部搜索栏 */}
            <SearchBar
                placeholder="搜索民宿"
                value={houseName}
                onChange={handleChange}
                onCancel={handleCancle}
                onSubmit={handleSumbit}
            />
            {/* 搜索结果 */}
            <div className="select-res">
                {
                    !houseList.length ?
                        <ActivityIndicator toast /> :
                        <div className="list">
                            {
                                houseList?.map((item, index) => (
                                        <div className="list-item" key={index}>
                                            <img className='item-img' alt='img' src={require('@/assets/blank.png')} data-src={item.imgs[0]?.url} />
                                            <div className="item-prod">
                                                <div className="title">{item.name}</div>
                                                <div className="price">{item.price}</div>
                                            </div>
                                        </div>
                                ))

                            }
                            <ShowLoading showLoading={showLoading} page={page} />
                        </div>
                }
            </div>
        </div>
    )
}