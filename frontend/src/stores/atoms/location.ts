import { atomWithStorage } from 'jotai/utils'

export const locationAtom = atomWithStorage('currentLocation', {
  latitude: 0,
  longitude: 0,
})
