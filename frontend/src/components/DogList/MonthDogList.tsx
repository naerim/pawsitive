import MonthDogCard from '@src/components/DogList/MonthDogCard'
import * as m from '@src/components/DogList/style/MonthDogListStyle'

const MonthDogList = () => {
  return (
    <m.Container>
      <m.Title>이달의 유기견</m.Title>
      <m.CardList>
        <MonthDogCard />
        <MonthDogCard />
        <MonthDogCard />
      </m.CardList>
    </m.Container>
  )
}

export default MonthDogList
