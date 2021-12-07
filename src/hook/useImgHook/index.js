import { useEffect } from 'react';
import { isTemplateMiddle } from 'typescript';

let observer;
export default function useImgHook(ele,callback,watch=[]){

  useEffect(() => {
      const nodes = document.querySelectorAll(ele);
      if(nodes && nodes.length){
          observer = new IntersectionObserver((entries)=>{
              callback && callback(entries);
              entries.forEach(item=>{
                //   console.log(item)
                if(item.isIntersecting){
                    const dataSrc = item.target.getAttribute('data-src');
                    item.target.setAttribute('src',dataSrc);
                    //解绑
                    observer.unobserve(item.target)
                }
              })
          })
          nodes.forEach(item => {
              observer.observe(item);
          });
      }

  }, watch)

  return {}
}