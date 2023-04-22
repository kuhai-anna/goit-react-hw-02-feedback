import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = good => {
    const totalFeedback = this.countTotalFeedback(this.state);

    return Math.round((good * 100) / totalFeedback);
  };

  // leaveFeedback = e => {
  //   this.setState(prevState => ({
  //     [e]: prevState[e] + 1,
  //   }));
  // };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Pleas leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(good)}
          />
        </Section>
      </>
    );
  }
}
