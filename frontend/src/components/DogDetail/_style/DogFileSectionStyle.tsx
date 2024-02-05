import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
  position: relative;
`

export const StyledSlider = styled(Slider)`
  height: 512px;
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
    background-color: #000;
  }
`

export const SliderBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.63));
`

export const Text = styled.div`
  color: #fff;
`
