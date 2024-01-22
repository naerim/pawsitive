import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { darkTheme, lightTheme } from '@src/style/theme.'
import { GlobalStyle } from '@src/style/GlobalStyles'
import HomePage from '@src/pages/HomePage'
import LoginPage from '@src/pages/LoginPage'
import SignUpPage from '@src/pages/SignUpPage'
import Header from '@src/common/Header'
import MeetingPage from '@src/pages/MeetingPage'
import BroadcastPage from '@src/pages/BroadcastPage'

// 로그인된 경우 접근할 수 있는 url
const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
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
  </Routes>
)

const App = () => {
  const user = false
  const [theme, setTheme] = useState('dark')

  const isLight = theme === 'light'

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button type="button" onClick={toggleTheme}>
        {isLight ? 'Dark 🌚 ' : 'Light 🌝'}
      </button>
      <BrowserRouter>
        <Header />
        {user ? <AuthRoutes /> : <HomeRoutes />}
        <footer>footer</footer>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
