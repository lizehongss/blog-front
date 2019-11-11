import service from '../api'
export const state = () => ({
  data: {}
})

export const mutations = {
  SET_TAG(state, data) {
    state.data = data
  }
}


export const actions = {
  async getTag({
    commit
  }) {
    const res = await service.getTags({
        page_size: 100
    })
    commit('SET_TAG', res.result || {
        pagination: {},
        list: []
    })
  }
}