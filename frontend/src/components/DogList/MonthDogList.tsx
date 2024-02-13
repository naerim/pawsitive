import * as m from '@src/components/DogList/style/MonthDogListStyle'
import { useQuery } from '@tanstack/react-query'
import { fetchDogRecommend } from '@src/apis/recommend'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { useEffect, useState } from 'react'
import { BasicDogType } from '@src/types/dogType'
import MonthDogCard from '@src/components/DogList/MonthDogCard'

const MonthDogList = () => {
  const user = useAtomValue(userAtom)
  const [array] = useState<BasicDogType[]>([])

  const { data, isLoading } = useQuery({
    queryKey: ['DogRecommend'],
    queryFn: () => fetchDogRecommend(user.userNo),
  })

  useEffect(() => {
    if (!isLoading && data) {
      for (let i = 0; i < 2; i += 1) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        array.push(data[i] as BasicDogType)
      }
    }
  }, [array, data, isLoading])
  return (
    <m.Container>
      <m.Title>이달의 유기견</m.Title>
      <m.CardList>
        {!isLoading &&
          data &&
          array.map(item => (
            <MonthDogCard
              key={item.dogNo}
              file={item.file}
              name={item.name}
              sex={item.sex}
              neutralized={item.neutralized}
              age={item.age}
              kind={item.kind}
            />
          ))}
      </m.CardList>
    </m.Container>
  )
}

export default MonthDogList
