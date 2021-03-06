import React from "react";

import styled from "styled-components";

const StyledLink = styled.a`
  color: ${props => (props.active ? "pink" : "#fff")};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding-right: 32px;
  border-right: ${props =>
    props.active ? "2px dashed salmon" : "1px dotted #fff"};

  &:hover {
    color: #8d8d8d;
    text-decoration: none;
  }

  &:last-child {
    border-right: none;
  }
`;

const Link = ({ link, text }) => (
  <StyledLink active href={link}>
    {text}
  </StyledLink>
);

export default Link;
