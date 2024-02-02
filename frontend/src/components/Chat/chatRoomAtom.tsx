import { atomWithStorage } from 'jotai/utils'
import { RoomType } from '@src/components/Chat/roomType'

export const roomAtom = atomWithStorage<Array<RoomType>>('roomList', [])
