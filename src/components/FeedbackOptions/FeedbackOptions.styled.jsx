import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  gap: ${props => {
    return props.theme.spacing(3);
  }};
`;

export const Button = styled.button`
  padding: 4px 8px;
  min-width: 52px;

  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;

  text-transform: capitalize;
  font-weight: 500;
  font-size: 14px;
  color: ${props => {
    return props.theme.colors.textAccent;
  }};

  background-color: ${props => {
    switch (props.value) {
      case 'good':
        return props.theme.colors.btnGood;
      case 'neutral':
        return props.theme.colors.btnNeutral;
      case 'bad':
        return props.theme.colors.btnBad;
      default:
        return props.theme.colors.btn;
    }
  }};

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.08);
  }
`;
