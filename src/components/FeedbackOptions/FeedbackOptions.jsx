import { Button,OptionsList } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <li key={option}>
          <Button
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option[0].toUpperCase() + option.substring(1)}
          </Button>
        </li>
      ))}
    </OptionsList>
  );
};

export default FeedbackOptions;
