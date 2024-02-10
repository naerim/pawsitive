import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 390px;
  height: 130px;
  z-index: 100;
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`

export const TopWrap = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  .arrow {
    width: 14px;
    height: 18px;
    cursor: pointer;
  }

  span {
    margin-left: 16px;
    font-size: 1em;
    font-weight: 500;
  }

  .call {
    width: 14px;
    height: 16px;
    cursor: pointer;
  }
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
`

export const InfoDetailWrap = styled.div`
  display: flex;
  font-size: 0.9em;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 6px;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      margin-bottom: 4px;
    }
  }
`
export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ebebeb;
    background-color: #fff;
    border-radius: 2px;
    padding: 4px 10px;
    font-size: 0.8em;
    margin-right: 10px;
  }
`
