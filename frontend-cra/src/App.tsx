import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { themeAtom } from '@stores/theme'
import { GlobalStyle } from '@style/GlobalStyles'
import { darkTheme, lightTheme } from '@style/theme.'
import { useAtomValue } from 'jotai'
import ChatPage from '@pages/Chat'
import ChatRoomPage from '@pages/ChatRoom'
import HomePage from '@pages/Home'
import MyPage from '@pages/MyPage'
import FindSimilarDogPage from '@pages/FindSimilarDog'

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/chat" element={<ChatPage />} />
    <Route path="/chat/:id" element={<ChatRoomPage />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="/mypage/find-similar-dog" element={<FindSimilarDogPage />} />
  </Routes>
)

const App = () => {
  const user = true
  const theme = useAtomValue(themeAtom)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        {user && <AuthRoutes />}
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
