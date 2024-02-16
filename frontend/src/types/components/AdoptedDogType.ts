export type AdoptedDog = {
  adoptDogNo: number
  userNo: number
  dogNo: number
  name: string
  createdAt: string
  weight: number
  age: number
  adoptedDays: number
  sex: string
  neutralized: boolean
  image: string
}

export type ModDataType = {
  formData: {
    updateAdoptDogRes: {
      name: string
      weight: number
      age: number
    }
    file: string
  }
  adoptDogNo: number
}

export type ShelterAdoptionReqType = {
  userNo: number
  dogNo: number
}
