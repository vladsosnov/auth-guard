import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: !!localStorage.getItem('userLogined'),
    loginedStatus: ''
  } as { logined: boolean; loginedStatus: string | null },
  mutations: {
    loginSuccess (state) {
      localStorage.setItem('userLogined', 'codeExist')
      state.loginedStatus = 'logined'
      state.logined = true
    },
    loginFailed (state) {
      state.loginedStatus = 'failed'
    },
    logout (state) {
      localStorage.removeItem('userLogined')
      state.loginedStatus = 'logOuted'
      state.logined = false
    }
  },
  actions: {
    async login ({ commit }, accessCode) {
      const codes = await fetch('/codes.json')
        .then((response) => { return response.json() })
        .catch((e) => console.log(e.message))

      codes.some((code: number) => code === Number(accessCode))
        ? commit('loginSuccess')
        : commit('loginFailed')
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  getters: {
    isLogIn: state => state.logined,
    logInStatus: state => state.loginedStatus
  }
})
