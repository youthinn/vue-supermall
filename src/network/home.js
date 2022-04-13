import { request } from "./request";

export function getHomeMultiData() {
  return request({
    URL:'/home/multidata'
  })
}