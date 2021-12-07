import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mock:false,
  //进行代理配置
  proxy:{
    '/api':{
      'target':"http://127.0.0.1:7001/",
      'changeOrigin':true
    }
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/', component: '@/pages/home/index' },
        { path: '/order', component: '@/pages/order/index',auth:true },
        { path: '/user', component: '@/pages/user/index',auth:true  },
        { path: '/user/edit', component: '@/pages/user/edit/index' },
        { path: '/search', component: '@/pages/search/index' },
        { path: '/obsever', component: '@/pages/obsever/index' },
        { path: '/house', component: '@/pages/house/index'},
        { path: '/login', component: '@/pages/login/index'},
        { path: '/register', component: '@/pages/register/index'}
      ]
    }

  ],
  fastRefresh: {},
});
