import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '@src/pages/HomePage'
import LoginPage from '@src/pages/LoginPage'
import Header from '@src/common/Header'
import MeetingPage from '@src/pages/MeetingPage'
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
  </Routes>
)

const App = () => {
  const user = false

  return (
    <BrowserRouter>
      <Header />
      {user ? <AuthRoutes /> : <HomeRoutes />}
      <footer>footer</footer>
    </BrowserRouter>
  )
}

export default App
