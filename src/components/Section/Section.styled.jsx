import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: 24px 0;

  :nth-child(even) {
    background-color: ${props => {
      return props.theme.colors.background;
    }};
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  width: ${props => {
    return props.theme.spacing(80);
  }};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => {
    return props.theme.spacing(4);
  }};

  font-size: 20px;
  text-align: center;
  color: ${props => {
    return props.theme.colors.text;
  }};
`;
