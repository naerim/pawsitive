import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useAtomValue } from 'jotai'
import ChatPage from '@pages/Chat'
import ChatRoomPage from '@pages/ChatRoom'
import { themeAtom } from '@stores/theme'
import { GlobalStyle } from '@style/GlobalStyles'
import { darkTheme, lightTheme } from '@style/theme.'

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<ChatPage />} />
    <Route path="/chat" element={<ChatPage />} />
    <Route path="/chat/:roomId" element={<ChatRoomPage />} />
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
