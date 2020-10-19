import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  color: white;
  &[disabled] {
    opacity: .3;
  }
`
