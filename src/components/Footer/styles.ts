import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #3d0080;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Para = styled("div")`
  color: #6e99Ba;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link) <any>`
  font-size: 16px;
  color: #082e4a;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: #d91f2b;
    text-underline-position: under;
    text-decoration: #d91f2b wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #3d0080;
  max-width: fit-content;
  border-bottom: 1px solid #3d0080;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #d91f2b;
    color: #d91f2b;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #3d0080;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #3d0080;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div") <any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
