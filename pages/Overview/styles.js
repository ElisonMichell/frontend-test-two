import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: ${props => props.theme.spacing.lg};
  gap: ${props => props.theme.spacing['3xl']};
`