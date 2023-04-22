import styled from 'styled-components';

export const NotificationMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${props => {
    return props.theme.colors.text;
  }};
`;
