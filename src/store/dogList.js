import { create } from "zustand"

const initStore = {
  dog: {
    data: {},
    loading: false,
    error: null
  },
  fetchDog: {
    data: {},
    loading: false,
    error: null
  }
}

export const useDogListStore = create(set => ({
  ...initStore,
  setDogList: value => set({ dog: value }),
  setFetchDogList: value => set({ fetchDog: value }),
  clearDog: () => set({ ...initStore })
}))
