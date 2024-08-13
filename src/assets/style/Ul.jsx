import styled from "styled-components";
const Ul = styled.ul`
  li {
    list-style-type: none;
    margin-left: 0px;
  }

  ${({ children }) =>
    children.length > 1 &&
    `
    li {
      list-style-type: disc;
      margin-left: 16px;
    }
  `}
`;

export const UlComponent = Ul;
