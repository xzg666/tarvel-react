import { cookie} from 'project-libs';
import {history} from 'umi';

export  function onRouteChange(route){
    // console.log('route',route)
    const nowPath = route.routes[0].routes.filter(item => item.path === route.location.pathname);//防止其他页面
    const isLogin = localStorage.getItem('token');
    console.log('route.location.pathname',route.location.pathname)

    if(nowPath.length === 1 && nowPath[0].auth && !isLogin){
        history.push({
            pathname:'/login',
            query:{
                from: route.location.pathname
            }
        })
    }
}