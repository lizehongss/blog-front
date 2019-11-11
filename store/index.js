    /* eslint-disable require-await */
export const actions = {
    nuxtServerInit(store, ) {
  
      const initAppData = [
        // 获取信息
        // store.dispatch('options/getAdminInfo'),
  
        // 网站信息
        // store.dispatch('options/getOpt'),
  
        // 标签
        store.dispatch('tag/getTag'),
  
        // 友情链接
        // store.dispatch('link/getLink', {
        //   page_size: 1000
        // })
      ]
  
      // if (!isMobile) {
      //   initAppData.push(store.dispatch('article/getHotArt'))
      // }
  
      return Promise.all(initAppData)
    }
  }
  