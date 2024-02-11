import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { useMutation } from '@tanstack/react-query'
import { fetchLogout } from '@src/apis/user'
import { userAtom } from '@src/stores/atoms/user'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '10px',
  bgcolor: 'background.paper',
  '&:focus': {
    outline: 'none',
  },
  p: 4,
}

const ButtonValue = styled(Button)({
  color: '#000000',
  '&:focus': {
    outline: 'none',
  },
})

const LogoutModal = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [user, setUser] = useAtom(userAtom)
  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: fetchLogout,
    onSuccess: () => {
      setUser({
        userNo: 0,
        email: '',
        name: '',
        password: '',
        address: '',
        role: '',
        birth: '',
        gender: '',
        type: 0,
        stage: 0,
      })
      navigate('/')
    },
  })

  const handleLogout = () => {
    mutate(user.email)
  }
  return (
    <div>
      <Typography
        onClick={handleOpen}
        sx={{
          fontWeight: '400',
          fontSize: '15px',
          fontFamily: 'SCDream',
          cursor: 'pointer',
          '&:hover': {
            color: '#646cff',
          },
        }}
      >
        로그아웃
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: 'black' }}
          >
            로그아웃 하시겠습니까?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ButtonValue type="button" onClick={handleLogout}>
              예
            </ButtonValue>
            <ButtonValue type="button" onClick={handleClose}>
              아니요
            </ButtonValue>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default LogoutModal
