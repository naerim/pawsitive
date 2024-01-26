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
import Header from '@src/common/Header'
import MeetingPage from '@src/pages/MeetingPage'
import BroadcastPage from '@src/pages/BroadcastPage'
import MyPage from '@src/pages/MyPage'
import SettingPage from '@src/pages/SettingPage'
import ProfilePage from '@src/pages/ProfilePage'
import NotFoundPage from '@src/pages/NotFoundPage'
import { useAtomValue } from 'jotai'
import { themeAtom } from '@src/stores/atoms/theme'
import Footer from '@src/common/Footer'
import DogDetailPage from '@src/pages/DogDetailPage'
import CommunityPage from '@src/pages/CommunityPage'
import CommunityCreatePage from '@src/pages/CommunityCreatePage'
import CreateDogPage from '@src/pages/CreateDogPage'
import TeachablePage from '@src/pages/TeachablePage'

// 로그인된 경우 접근할 수 있는 url
const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/mypage/profile" element={<ProfilePage />} />
    <Route path="/mypage/setting" element={<SettingPage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/community" element={<CommunityPage />} />
    <Route path="/article/create" element={<CommunityCreatePage />} />
    <Route path="/new/dog" element={<CreateDogPage />} />
    <Route path="/mypage/teachable" element={<TeachablePage />} />
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
    <Route path="/dogDetail" element={<DogDetailPage />} />
  </Routes>
)

const App = () => {
  const user = true
  const theme = useAtomValue(themeAtom)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        {user ? <AuthRoutes /> : <HomeRoutes />}
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
