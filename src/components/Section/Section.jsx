import PropTypes from 'prop-types';
import { Container, SectionTitle, SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </Container>
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};
