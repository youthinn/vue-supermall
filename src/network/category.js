import { request } from "./request";

// 请求分类标题
export function getCategoryTitle() {
  return request({
    url:'/category',

  })
}


// 请求分类内容
export function getCategoryContent(maitKey) {
  return request({
    url:'/subcategory',
    params:{
      type:'pop',
      maitKey
      
    }
  })
}