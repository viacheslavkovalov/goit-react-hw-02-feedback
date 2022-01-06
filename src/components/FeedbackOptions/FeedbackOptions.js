import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  align-items: center;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  color: #36395a;
  display: inline-flex;
  height: 30px;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  transition: all.25s;
  font-size: 16px;
  text-transform: capitalize;
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
    background-color: rgba(199, 199, 199, 0.248);
    color: #07575b;
    font-weight: bold;
  }
  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }
  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      {options.map((option) => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
