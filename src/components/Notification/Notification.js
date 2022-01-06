import PropTypes from "prop-types";
import styled from "styled-components";

const StyledMessage = styled.p`
  color: #8e9b97;
`;

const Notification = ({ message }) => {
  return <StyledMessage>{message}</StyledMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
