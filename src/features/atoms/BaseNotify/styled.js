import styled from 'styled-components'

export const TextTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  position: relative;
`
export const TextContent = styled.p`
  margin: 10px auto;
`
export const TextLink = styled.span`
  color: ${props => props.theme.colors.calendar[0]};
  font-size: 14px;
  font-weight: bold;
`
export const Wrapper = styled.div`
  display: block;
  max-width: 480px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray[5]};
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  background: ${props => props.status && props.theme.colors.backgroundNotify};
  .title {
    color: ${props =>
      props.status &&
      props.theme.colors.primary +
        ';' +
        `&:after {
      position: absolute;
      right: 20px;
      top: 50%;
      bottom: 50%;
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background:   ${props.theme.colors.primary};`};
  }
`
export const TextTime = styled.div`
  font-size: 12px;
  text-align: right;
  color: ${props => props.theme.colors.gray[2]};
`
