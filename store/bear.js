import { create } from "zustand";

export const useBearStore = create((set) => ({
  bears: 666,
  userInfo: {
    account: [
      'ssss',
      'aaa',
      'ccccc'
    ]
  },
  increasePopulation: () => set((state) => {
    console.log(state);
    return { bears: state.bears + 111 }
  }),
  removeAllBears: () => set({ bears: 0 }),
  addAccount: () => set(state => {
    state.userInfo.account.push('xxx')
    // state.userInfo.account[0] = '11'
    // state.userInfo.account.push('xxx')
    return {userInfo: state.userInfo}
  })
}));
