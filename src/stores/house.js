import { Http } from "@/hook/useHttpHook/http"
import { COMMONCONSTANTS } from '@/constants'

async function handleOrder(url,dispatch,payload){
    const result = await Http({
        url,
        body:payload
    });
    dispatch({
        type:'setOrder',
        payload:result
    })
}

export default {
    state: {
        detail: {},
        comments: [],
        page: COMMONCONSTANTS.PAGE,
        showLoading: true,
        reloadCommentsNum:0,
        order:null
    },
    reducers: {
        getDetail(state, payload) {
            return {
                ...state,
                detail: payload
            }
        },
        getComments(state, payload) {
            return {
                ...state,
                comments: payload
            }
        },
        getShowLoading(state, payload) {
            return {
                ...state,
                showLoading: payload
            }
        },
        reloadComments(state,payload){
            return{
                ...state,
                reloadCommentsNum: state.reloadCommentsNum + 1,
                page:{
                    ...COMMONCONSTANTS.PAGE,
                    pageNum:state.page.pageNum + 1
                }
            }
        },
        resetData(state, payload) {
            return {
              ...state,
              // detail: {},
              comments: [],
              page: COMMONCONSTANTS.PAGE,
              showLoading: true,
              reloadCommentsNum: 0,
              ...payload
            }
          },
          setOrder(state,payload){
              return{
                  ...state,
                  order:payload
              }
          }
    },
    effects: {
        async getDetailAsync(dispatch, rootState, payload) {
            const detail = await Http({
                url: '/house/detail',
                body: payload
            });
            dispatch({
                type: 'getDetail',
                payload: detail
            })
        },
        async getCommentsAsync(dispatch, rootState, payload) {
            
            const { comments, page } = rootState.house;
           
            const lists = await Http({
                url: '/comments/lists',
                body: {
                    ...payload,
                    pageSize: rootState.house?.page?.pageSize,
                    pageNum: rootState.house?.page?.pageNum
                }
            });
            // console.log('lislength',lists.length ? true : false)
            //返回评论数据拼接
            dispatch({
                type: 'getComments',
                payload: [...comments, ...lists]
              });
            //根据返回的list是否为空设置showloading的值，然后进行下滑的切换
            dispatch({
                type: 'getShowLoading',
                payload: lists.length ? true : false
              });
        },
        async addCommentsAsync(dispatch,rootState,payload){
            const result = await Http({
                url:'/comments/add',
                body:payload
            });
            if(result){
                dispatch({
                    type:'resetData',
                    payload:{}
                })
            }
        },
        async hasOrderAsync(dispatch,rootState,payload){
            await handleOrder('/orders/hasOrder',dispatch,payload)
        },
        async addOrderAsync(dispatch,rootState,payload){
            await handleOrder('/orders/addOrder',dispatch,payload)
        },
        async delOrderAsync(dispatch,rootState,payload){
            await handleOrder('/orders/delOrder',dispatch,payload)
        },
    }
}