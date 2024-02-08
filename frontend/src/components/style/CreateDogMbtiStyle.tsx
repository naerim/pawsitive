import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`

export const Title = styled.div`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const RadioWrap = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  padding: 5px 0;

  input {
    -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
    -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거
    appearance: none; // 기본 브라우저에서 기본 스타일 제거
    border: 1px solid #cbcbcb; // 체크되지 않았을 때의 테두리 색상
    border-radius: 50%;
    outline: none; // focus 시에 나타나는 기본 스타일 제거
    width: 16px;
    height: 16px;

    &:checked {
      background-color: #ff9232; // 체크 시 내부 원으로 표시될 색상
      border: 3px solid white; // 테두리가 아닌, 테두리와 원 사이의 색상
      box-shadow: 0 0 0 1px #ff9232; //
    }
  }
`
export const QuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`
