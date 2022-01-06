import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e2e8e4;
  padding-bottom: 20px;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 18px;
  color: #07575b;
  margin-bottom: 20px;
`;

function Section({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
