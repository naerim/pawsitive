import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@src/style/theme.'
import { GlobalStyle } from '@src/style/GlobalStyles'
import HomePage from '@src/pages/HomePage'
import LoginPage from '@src/pages/LoginPage'
import SignUpPage from '@src/pages/SignUpPage'
import MeetingPage from '@src/pages/MeetingPage'
import BroadcastPage from '@src/pages/BroadcastPage'
import MyPage from '@src/pages/MyPage'
import SettingPage from '@src/pages/SettingPage'
import ProfilePage from '@src/pages/ProfilePage'
import NotFoundPage from '@src/pages/NotFoundPage'
import { useAtom, useAtomValue } from 'jotai'
import { themeAtom } from '@src/stores/atoms/theme'
import DogDetailPage from '@src/pages/DogDetailPage'
import CreateDogPage from '@src/pages/CreateDogPage'
import FindSimilarDogPage from '@src/pages/FindSimilarDogPage'
import AdoptionSurveyPage from '@src/pages/AdoptionSurveyPage'
import ChattingPage from '@src/pages/ChattingPage'
import ConfirmPawsitivePage from '@src/pages/ConfirmPawsitivePage'
import DictionaryListPage from '@src/pages/DictionaryListPage'
import DictionaryDetailPage from '@src/pages/DictionaryDetailPage'
import DogListPage from '@src/pages/DogListPage'
import CommunityInfoPage from '@src/pages/CommunityInfoPage'
import CommunityDetailPage from '@src/pages/CommunityDetailPage'
import CommunityCreatePage from '@src/pages/CommunityCreatePage'
import AdoptionSurveyDonePage from '@src/pages/AdoptionSurveyDonePage'
import DailyDiaryPage from '@src/pages/DailyDiaryPage'
import FindSimilarDogResultPage from '@src/pages/FindSimilarDogResultPage'
import FillAdoptInfoPage from '@src/pages/FillAdoptInfoPage'
import SaveDogsListPage from '@src/pages/SaveDogsListPage'
import ChattingRoomContainerHj from '@src/components/Chat/ChattingRoomContainerHJ'
import { userAtom } from '@src/stores/atoms/user'
import QuestionCreatePage from '@src/pages/QuestionCreatePage'
import QuestionDetailPage from '@src/pages/QuestionDetailPage'
import QuestionListPage from '@src/pages/QuestionListPage'

// 로그인된 경우 접근할 수 있는 url
const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/mypage/profile" element={<ProfilePage />} />
    <Route path="/mypage/setting" element={<SettingPage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/community" element={<CommunityInfoPage />} />
    <Route path="/community/:contentNo" element={<CommunityDetailPage />} />
    <Route path="/community/create" element={<CommunityCreatePage />} />
    <Route path="/new/dog" element={<CreateDogPage />} />
    <Route path="/mypage/findSimilarDog" element={<FindSimilarDogPage />} />
    <Route
      path="/mypage/findSimilarDog/result"
      element={<FindSimilarDogResultPage />}
    />
    <Route path="/dogs" element={<DogListPage />} />
    <Route path="/dogs/:dogNo" element={<DogDetailPage />} />
    <Route path="/mypage/survey" element={<AdoptionSurveyPage />} />
    <Route path="/mypage/survey/done" element={<AdoptionSurveyDonePage />} />
    <Route path="/chat" element={<ChattingPage />} />
    <Route path="/chat/:no" element={<ChattingRoomContainerHj />} />
    <Route path="/confirm/pawsitive" element={<ConfirmPawsitivePage />} />
    <Route path="/mypage/adoptionSurvey" element={<AdoptionSurveyPage />} />
    <Route path="/dictionary" element={<DictionaryListPage />} />
    <Route path="/dictionary/:contentNo" element={<DictionaryDetailPage />} />
    <Route path="/dailyDiary" element={<DailyDiaryPage />} />
    <Route path="/fill-adopt-info" element={<FillAdoptInfoPage />} />
    <Route path="/save-dogs-list" element={<SaveDogsListPage />} />
    <Route path="/questions" element={<QuestionListPage />} />
    <Route path="/questions/new" element={<QuestionCreatePage />} />
    <Route path="/questions/:questionNo" element={<QuestionDetailPage />} />
  </Routes>
)

// 로그인안된 경우 접근할 수 있는  url
const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/openvidu" element={<MeetingPage />} />
    <Route path="/broadcast" element={<BroadcastPage />} />
    <Route path="/signUp" element={<SignUpPage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/dogs" element={<DogListPage />} />
    <Route path="/dogs/:dogNo" element={<DogDetailPage />} />
  </Routes>
)

const App = () => {
  const theme = useAtomValue(themeAtom)
  const [userValue] = useAtom(userAtom)

  const user = userValue.email
  // const user = true

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        {user ? <AuthRoutes /> : <HomeRoutes />}
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
