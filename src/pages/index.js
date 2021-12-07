import { useState, useEffect } from 'react';
import { ErrorBoundary, MenuBar } from '../components'
import { useLocation } from 'umi';
import './index.less'
import { StoreProvider } from 'think-react-store'
import * as store from '@/stores'

export default function (props) {
    const location = useLocation()
    const paths = ['/', '/user', '/order']

    useEffect(() => {
    }, [])

    return (
        <div className="box">
            <StoreProvider store={store}>
                <MenuBar show={paths.includes(location.pathname)}
                    pathname={location.pathname} />
                {props.children}
            </StoreProvider>
        </div>
    )
}