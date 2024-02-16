import * as t from '@src/components/style/ThemeToggleStyle'
import { useAtom } from 'jotai'
import { themeAtom } from '@src/stores/atoms/theme'

const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(themeAtom)

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div>
      <t.ToggleWrapper type="button" onClick={changeTheme}>
        {theme === 'light' ? '🌞' : '🌕'}
      </t.ToggleWrapper>
    </div>
  )
}

export default ThemeToggle
