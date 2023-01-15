import styled, { keyframes } from 'styled-components'

const heightAnimation = keyframes`
  from {
    height: 0%;
  }
  to {
    height: ${(props) => props.size}%;
  }
`;

const fadeAnimation = keyframes`
  from {
    filter: opacity(0)
  }
  to {
    filter: opacity(100)
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) => props.theme.colors.gray400};
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing['3xl']};
  border-radius: ${(props) => props.theme.spacing.md};
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  gap: ${(props) => props.theme.spacing.md};
`

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fonts.size.sm};
  color: ${(props) => props.theme.colors.gray200};
  justify-content: space-between;
`

export const Area = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) => props.theme.colors.gray400};
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.md} 0;
  border-radius: ${(props) => props.theme.spacing.sm};
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors.gray400};
  }
`

export const Bar = styled.div`
  flex: 1;
  position: relative;
  animation: ${heightAnimation} 1s ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  height: ${(props) => props.size}%;
  border-radius: ${(props) => props.theme.spacing.xs};
  background: linear-gradient( ${(props) => props.theme.colors.primary200}, ${(props) => props.theme.colors.primary300});
  transition: linear-gradient 1s;
  font-weight: 500;

  :hover {
    background: linear-gradient( ${(props) => props.theme.colors.primary100}, ${(props) => props.theme.colors.primary200});

    &::after {
      content: "${(props) => props.value}";
      position: absolute;
      width: 100%;
      bottom: 0;
      padding-bottom: ${(props) => props.theme.spacing.sm};
      text-align: center;
      animation: ${fadeAnimation} 0.5s ease-in-out;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
  }

  &::before {
    content: "${(props) => props.label}";
    position: absolute;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    padding-top: ${(props) => props.theme.spacing.xs};
    font-size: 10px;
    text-transform: uppercase;
    color: white;
    bottom: 0;
    transform: translateY(100%);
  }
`