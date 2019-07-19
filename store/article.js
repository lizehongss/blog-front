import service from '../api'

export const state = () => ({
  // 列表文章
  art: {
    pagination: {},
    list: []
  },
  // 文章详情
  details: {},
  fetch: false
})

export const mutations = {
  FETCH_ART(state) {
    state.fetch = true
    state.art = {
        pagination: {},
        list: []
    }
  },
  SET_ART_FILE(state) {
    state.fetch = false
  },
  SET_ART_SUCCESS(state, data) {
    state.art = data
    state.fetch = false
  },
  SET_ART_FAIL(state) {
    state.art = {
      pagination: {},
      list: []
    }
    state.fetch = false
  },
  SET_DETAILS(state, data) {
    state.details = data
  },
  ADD_COMMENT(state) {
    state.details.meta.comments += 1
  }
}
export const actions = {
  // 文章列表
  async getArtList(
    { commit },
    data = {
      current_page: 1
    }
  ) {
    commit('FETCH_ART')
    const res = await service.getArts({
      ...data,
      page_size: data.page_size || 6
    })
    if (res && res.code === 1) {
      if (!process.client) {
        commit('SET_ART_SUCCESS', res.result)
      } else {
        setTimeout(() => {
          commit('SET_ART_SUCCESS', res.result)
        }, 200)
      } 
    } else {
      commit('SET_ART_FILE')
    }
  },
  // 文章详情
  async getArt({ commit }, data) {
    const res = await service.getArt(data)
    commit('SET_DETAILS', res.result || {})
  }

}