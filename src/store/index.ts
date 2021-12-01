import { atom } from "recoil"

export const countState = atom({
  key: "countState",
  default: 0,
})

export const todos = atom({
  key: "todos",
  default: [],
})
