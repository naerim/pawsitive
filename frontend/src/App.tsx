import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from '@src/pages/HomePage'
import LoginPage from '@src/pages/LoginPage'
import Header from '@src/common/Header'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { darkTheme, lightTheme } from '@src/style/theme..ts'
import { GlobalStyle } from '@src/style/GlobalStyles.ts'
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
      <button onClick={toggleTheme}>{isLight ? 'Dark 🌚 ' : 'Light 🌝'}</button>
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
