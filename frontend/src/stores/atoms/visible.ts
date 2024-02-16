import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const storage = createJSONStorage(() => sessionStorage)

export const homeRecommendDogShowAtom = atomWithStorage(
  'homeRecommendDogShow',
  true,
  storage,
)
