export type AdoptedDog = {
  adoptDogNo: number
  userNo: number
  dogNo: number
  name: string
  createdAt: string
  weight: number
  age: number
  adoptedDays: number
}

export type ModData = {
  fetchData: {
    name: string
    weight: number
    age: number
  }
  adoptDogNo: number
}
