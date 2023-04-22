import PropTypes from 'prop-types';
import { StatItem, StatList, StatNumber, StatText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage = 0,
}) => {
  return (
    <StatList>
      <StatItem>
        <StatText>
          Good: <StatNumber>{good}</StatNumber>
        </StatText>
      </StatItem>
      <StatItem>
        <StatText>
          Neutral: <StatNumber>{neutral}</StatNumber>
        </StatText>
      </StatItem>
      <StatItem>
        <StatText>
          Bad: <StatNumber>{bad}</StatNumber>
        </StatText>
      </StatItem>
      <StatItem>
        <StatText>
          Total: <StatNumber>{total}</StatNumber>
        </StatText>
      </StatItem>
      <StatItem>
        <StatText>
          Positive feedback: <StatNumber>{positivePercentage}%</StatNumber>
        </StatText>
      </StatItem>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
