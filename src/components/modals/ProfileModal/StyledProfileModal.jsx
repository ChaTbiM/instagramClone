import styled from "styled-components";

const StyledProfileModal = styled.div`
  background-color: white;
  padding: 1rem 0.75rem;
  position: fixed;
  top: ${(props) => props.top}px;
  left: calc(${(props) => props.left}px - 100px);
`;

export default StyledProfileModal;
