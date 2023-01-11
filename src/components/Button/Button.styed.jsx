import styled from 'styled-components';

export const Btn = styled.button`
  width: ${(p) =>
    p.stylesetting.width ? p.stylesetting.width : '250px'};
  height: ${(p) =>
    p.stylesetting.height ? p.stylesetting.height : '40px'};
  color: ${(p) =>
    p.stylesetting.color ? p.stylesetting.color : '#808080'};
  background-color: ${(p) =>
    p.stylesetting.backgroundColor
      ? p.stylesetting.backgroundColor
      : 'transparent'};
  padding: ${(p) =>
    p.stylesetting.padding ? p.stylesetting.padding : '10px'};
  border: none;
  border-radius: ${(p) =>
    p.stylesetting.padding ? p.stylesetting.borderRadius : '5px'};
  border: 1px solid #dddddd;
  -webkit-font-smoothing: inherit;
  text-align: inherit;
  font-size: inherit;
  border-width: 0;

  cursor: pointer;

  :hover {
    color: #222;
  }
`;
