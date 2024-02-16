import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@src/style/theme.'
import { GlobalStyle } from '@src/style/GlobalStyles'
import HomePage from '@src/pages/HomePage'
import LoginPage from '@src/pages/LoginPage'
import SignUpPage from '@src/pages/SignUpPage'
import MyPage from '@src/pages/MyPage'
import SettingPage from '@src/pages/SettingPage'
import ProfilePage from '@src/pages/ProfilePage'
import NotFoundPage from '@src/pages/NotFoundPage'
import { useAtom, useAtomValue } from 'jotai'
import { themeAtom } from '@src/stores/atoms/theme'
import DogDetailPage from '@src/pages/DogDetailPage'
import CreateDogPage from '@src/pages/CreateDogPage'
import AdoptionSurveyPage from '@src/pages/AdoptionSurveyPage'
import ConfirmPawsitivePage from '@src/pages/ConfirmPawsitivePage'
import DictionaryListPage from '@src/pages/DictionaryListPage'
import DictionaryDetailPage from '@src/pages/DictionaryDetailPage'
import DogListPage from '@src/pages/DogListPage'
import CommunityInfoPage from '@src/pages/CommunityInfoPage'
import CommunityMapPage from '@src/pages/CommunityMapPage'
import CommunityDetailPage from '@src/pages/CommunityDetailPage'
import CommunityCreatePage from '@src/pages/CommunityCreatePage'
import AdoptionSurveyDonePage from '@src/pages/AdoptionSurveyDonePage'
import AdoptedDogDetailPage from '@src/pages/AdoptedDogDetailPage'
import SaveDogsListPage from '@src/pages/SaveDogsListPage'
import QuestionCreatePage from '@src/pages/QuestionCreatePage'
import QuestionDetailPage from '@src/pages/QuestionDetailPage'
import QuestionListPage from '@src/pages/QuestionListPage'
import ChattingRoomPage from '@src/pages/ChattingRoomPage'
import ChattingPage from '@src/pages/ChattingPage'
import AboutSameDogChatListPage from '@src/pages/AboutSameDogChatListPage'
import ScrollToTop from '@src/hooks/ScrollToTop'
import AdoptionSurveyDetailPage from '@src/pages/AdoptionSurveyDetailPage'
import ShelterDogsPage from '@src/pages/ShelterDogsPage'
import AdoptProcessInfoPage from '@src/pages/AdoptProcessInfoPage'
import FindSimilarDogPage from '@src/pages/FindSimilarDogPage'
import FindSimilarDogResultPage from '@src/pages/FindSimilarDogResultPage'
import { userAtom } from '@src/stores/atoms/user'

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
    <Route path="/community/map" element={<CommunityMapPage />} />
    <Route path="/community/:contentNo" element={<CommunityDetailPage />} />
    <Route path="/community/create" element={<CommunityCreatePage />} />
    <Route path="/new/dog" element={<CreateDogPage />} />
    <Route path="/dogs" element={<DogListPage />} />
    <Route path="/dogs/:dogNo" element={<DogDetailPage />} />
    <Route path="/mypage/survey" element={<AdoptionSurveyPage />} />
    <Route path="/mypage/survey/done" element={<AdoptionSurveyDonePage />} />
    <Route
      path="/mypage/survey/detail/:userNo"
      element={<AdoptionSurveyDetailPage />}
    />
    <Route path="/chat" element={<ChattingPage />} />
    <Route path="/shelter/chat/:dogNo" element={<AboutSameDogChatListPage />} />
    <Route path="/chat/:no" element={<ChattingRoomPage />} />
    <Route path="/confirm/pawsitive" element={<ConfirmPawsitivePage />} />
    <Route path="/dictionary" element={<DictionaryListPage />} />
    <Route path="/dictionary/:contentNo" element={<DictionaryDetailPage />} />
    <Route path="/adopted-dog/detail" element={<AdoptedDogDetailPage />} />
    <Route path="/save-dogs-list" element={<SaveDogsListPage />} />
    <Route path="/questions" element={<QuestionListPage />} />
    <Route path="/questions/new" element={<QuestionCreatePage />} />
    <Route path="/questions/:questionNo" element={<QuestionDetailPage />} />
    <Route path="/shelter/dogs" element={<ShelterDogsPage />} />
    <Route path="/adopt-process-info" element={<AdoptProcessInfoPage />} />
    <Route path="/mypage/findSimilarDog" element={<FindSimilarDogPage />} />
    <Route
      path="/mypage/findSimilarDog/result"
      element={<FindSimilarDogResultPage />}
    />
  </Routes>
)

// 로그인안된 경우 접근할 수 있는  url
const HomeRoutes = () => (
  <Routes>
    <Route path="*" element={<LoginPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signUp" element={<SignUpPage />} />
    <Route path="/community" element={<CommunityInfoPage />} />
    <Route path="/community/map" element={<CommunityMapPage />} />
    <Route path="/dictionary" element={<DictionaryListPage />} />
    <Route path="/dogs" element={<DogListPage />} />
    <Route path="/adopt-process-info" element={<AdoptProcessInfoPage />} />
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
        <ScrollToTop />
        {user ? <AuthRoutes /> : <HomeRoutes />}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
