import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const linkStyle = {
  color: '#582900',
  fontSize: '11px',
  textDecoration: 'underline',
  cursor: 'pointer',
}

const HomeStageInfoModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Typography onClick={handleOpen} style={linkStyle}>
        단계안내
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            단계안내
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            descriptionnihroiertaertaewtawet aweithoaiehtaoet
            aewitboaweihtoaierht aiwehbtoai4toai
            uiawehbogaetw0ajpoi9ajtepoiajetiajeotij aiwehtaoiehto
            siehtoihetoweit aiehbtoaiwehtoaiehtoiHetohWE
            iahweotiaheoighaieotghaowehtaw4et aoiehaeo0japreogjapoej4rgpoer
            aireghoaihnergoia aojgpaeijgapie aiehtoaiehtaoet
            areitbao;riybaoirbtoiahbtoirh airehaoierhtyoaih4tiaheotiah
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default HomeStageInfoModal
