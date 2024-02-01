import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@src/style/theme.'
import { GlobalStyle } from '@src/style/GlobalStyles'
import HomePage from '@src/pages/HomePage'
import LoginPage from '@src/pages/LoginPage'
import SignUpPage from '@src/pages/SignUpPage'
import ShelterSignUpPage from '@src/pages/ShelterSignUpPage'
import MeetingPage from '@src/pages/MeetingPage'
import BroadcastPage from '@src/pages/BroadcastPage'
import MyPage from '@src/pages/MyPage'
import SettingPage from '@src/pages/SettingPage'
import ProfilePage from '@src/pages/ProfilePage'
import NotFoundPage from '@src/pages/NotFoundPage'
import { useAtomValue } from 'jotai'
import { themeAtom } from '@src/stores/atoms/theme'
import Navbar from '@src/common/Navbar'
import DogDetailPage from '@src/pages/DogDetailPage'
import CreateDogPage from '@src/pages/CreateDogPage'
import FindSimilarDogPage from '@src/pages/FindSimilarDogPage'
import AdoptionSurveyPage from '@src/pages/AdoptionSurveyPage'
import ChattingPage from '@src/pages/ChattingPage'
import ConfirmPawsitivePage from '@src/pages/ConfirmPawsitivePage'
import DictionaryListPage from '@src/pages/DictionaryListPage'
import DictionaryDetailPage from '@src/pages/DictionaryDetailPage'
import DogListPage from '@src/pages/DogListPage'

// 로그인된 경우 접근할 수 있는 url
const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/mypage/profile" element={<ProfilePage />} />
    <Route path="/mypage/setting" element={<SettingPage />} />
    <Route path="*" element={<NotFoundPage />} />
    {/* <Route path="/community" element={<CommunityInfoPage />} /> */}
    {/* <Route path="/community/:contentNo" element={<CommunityDetailPage />} /> */}
    {/* <Route path="/community/create" element={<CommunityCreatePage />} /> */}
    <Route path="/new/dog" element={<CreateDogPage />} />
    <Route path="/mypage/findSimilarDog" element={<FindSimilarDogPage />} />
    <Route path="/dogs" element={<DogListPage />} />
    <Route path="/dogDetail" element={<DogDetailPage />} />
    <Route path="/mypage/survey" element={<AdoptionSurveyPage />} />
    <Route path="/chat" element={<ChattingPage />} />
    <Route path="/chat/1" element={<ChattingPage />} />
    <Route path="/confirm/pawsitive" element={<ConfirmPawsitivePage />} />
    <Route path="/mypage/adoptionSurvey" element={<AdoptionSurveyPage />} />
    <Route path="/dictionary" element={<DictionaryListPage />} />
    <Route path="/dictionary/:contentNo" element={<DictionaryDetailPage />} />
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
    <Route path="/shelterSignUp" element={<ShelterSignUpPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

const App = () => {
  const user = true
  const theme = useAtomValue(themeAtom)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        {user ? <AuthRoutes /> : <HomeRoutes />}
        <Navbar />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
