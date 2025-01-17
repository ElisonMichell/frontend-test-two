import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};

  .button-container {
    display: flex;
    margin-top: ${props => props.theme.spacing.xl};
    justify-content: center;
  }
`

export const Content = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  place-items: center;
  gap: ${props => props.theme.spacing.xs};
  margin-top: ${props => props.theme.spacing.lg};

  @media (max-width: ${props => props.theme.breakpoints.sm}) { 
    grid-template-columns: 1fr;
  }
`