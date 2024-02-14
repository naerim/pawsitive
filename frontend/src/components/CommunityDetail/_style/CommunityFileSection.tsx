import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
  position: relative;
`

export const StyledSlider = styled(Slider)`
  height: 500px;
  width: 100%;

  .slick-list {
    height: 100%;
  }

  .dots_custom ul {
    background-color: #747bff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    width: 100%;
  }

  .dots_custom li button {
    border: none;
    background: #fff;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 0;
    padding: 0;
  }

  .dots_custom li button:focus {
    outline: none;
  }

  .dots_custom li.slick-active button {
    background-color: #ff9232;
  }
`

export const SliderBottom = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 110px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.63));
  padding: 29px;
`

export const Title = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 1.3em;
`

export const Desc = styled.div`
  color: #fff;
  font-weight: 400;
  margin-top: 12px;
  font-size: 0.9em;
`

export const EyeWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 32px;
  right: 32px;

  img {
    width: 21px;
    height: 13px;
  }

  span {
    color: #fff;
    margin-top: 7px;
    font-size: 0.7em;
  }
`

export const ArrowWrap = styled.div`
  display: flex;
  position: absolute;
  left: 30px;
  top: 52px;

  img {
    width: 11px;
    height: 19px;
  }
`
