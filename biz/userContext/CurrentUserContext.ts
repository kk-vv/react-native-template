import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface States {
  isLogin: boolean
}

const initialStates: States = {
  isLogin: false,
}

interface Actions {
  login: () => void
  logout: () => void
}

const useCurrentUserStore = create<States & Actions>()(
  immer((set, get) => ({
    ...initialStates,
    login: () => {
      set(state => {
        state.isLogin = true
      })
    },
    logout() {
      set({ ...initialStates })
    },
  }))
)

export default useCurrentUserStore