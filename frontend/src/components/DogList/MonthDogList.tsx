import * as m from '@src/components/DogList/style/MonthDogListStyle'
import { useQuery } from '@tanstack/react-query'
import MonthDogCard from '@src/components/DogList/MonthDogCard'
import { fetchMonthlyDogRecommend } from '@src/apis/recommend'

const MonthDogList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['MonthlyDogRecommend'],
    queryFn: () => fetchMonthlyDogRecommend(3),
  })

  return (
    <m.Container>
      <m.Title>이달의 유기견</m.Title>
      <m.Wrap>
        <m.CardList>
          {!isLoading &&
            data &&
            data.map(item => (
              <MonthDogCard
                key={item.dogNo}
                dogNo={item.dogNo}
                file={item.file}
                name={item.name}
                sex={item.sex}
                neutralized={item.neutralized}
                age={item.age}
                kind={item.kind}
              />
            ))}
        </m.CardList>
      </m.Wrap>
    </m.Container>
  )
}

export default MonthDogList
