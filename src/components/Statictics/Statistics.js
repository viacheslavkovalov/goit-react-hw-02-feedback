import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledMark = styled.li`
  font-size: 16px;
  color: #275362;
`;

const StyledReview = styled(StyledMark)`
  color: #0a6067;
  font-weight: bold;
  line-height: 2;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <StyledMark>Good: {good}</StyledMark>
      <StyledMark>Neutral: {neutral}</StyledMark>
      <StyledMark>Bad: {bad}</StyledMark>
      <StyledReview>Total:{total}</StyledReview>
      <StyledReview>Positive feedback:{positivePercentage} %</StyledReview>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
