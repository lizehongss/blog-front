import ax from './axios'

// 获取文章列表
export function getArts (params) {
  return ax.get('/article', {params})
          .then(res => res.data)
}