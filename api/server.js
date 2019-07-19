import ax from './axios'

// 获取文章列表
export function getArts (params) {
  return ax.get('/article', {params})
          .then(res => res.data)
}
// 文章归档
export function getallArts () {
  return ax.get('/allArticle')
           .then(res => res.data)
}
// 获取单个文章
export function geArt (data) {
  return ax.get(`/article_detail/${data.id}`)
            .then(res => res.data)
}