import styled from 'styled-components';

export const StatList = styled.ul`
  margin: 0 auto;
  width: ${props => {
    return props.theme.spacing(53);
  }};
`;

export const StatItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${props => {
      return props.theme.spacing(2);
    }};
  }
`;

export const StatText = styled.p`
  display: block;
  min-width: ${props => {
    return props.theme.spacing(20);
  }};
`;

export const StatNumber = styled.span`
  font-weight: 700;
`;
