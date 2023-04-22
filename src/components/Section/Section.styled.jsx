import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding-top: 30px;

  :nth-child(even) {
    background-color: ${props => {
      return props.theme.colors.background;
    }};
  }

  :last-child {
    padding-bottom: 30px;
  }
`;

export const Container = styled.div`
  padding: 0 15px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 15px;

  font-size: 20px;
`;
