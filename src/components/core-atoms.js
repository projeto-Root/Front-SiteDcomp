import styled from "styled-components";

export const LogoGroup = styled.img.attrs({
  alt: "logo",
})`
  height: ${(props) => props.size || "10rem"};
  width: ${(props) => props.size || "10rem"};
  border-radius: 50%;
  border: 1px solid #222;
  padding: 5px;
`;

export const ButtonAbout = styled.button`
  border: 2px solid #55c;
  color: #55c;
  width: ${(props) => props.width || "8rem"};
  font-size: 16px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: white;
  :hover {
    opacity: 0.8;
  }
`;

export const ButtonChangePage = styled.button`
  padding: 0.5rem;
  border: none;
  color: #fff;
  background-color: #55c;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const MenuOption = styled.a`
  color: #f5f5f5;
  position: relative;
  transition: all 0.2s linear;
  font-size: 13px;
  &::after {
    content: "";
    width: 0%;
    height: 0.1rem;
    background-color: #aaf;
    position: absolute;
    left: 50%;
    bottom: 0;
    transition: all 0.2s linear;
  }
  :hover {
    color: #aaf;
    &::after {
      content: "";
      width: 100%;
      height: 0.1rem;
      background-color: #aaf;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;

export const TitlePage = styled.p`
  font-weight: 600;
  font-size: 3rem;
  color: #fff;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const ButtonEffect = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #fff;
  border: 2px solid #ccc;
  margin-top: 2rem;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: all 0.2s linear;
  :hover {
    background-color: #88f;
    border: 2px solid #88f;
    transition: all 0.2s linear;
  }

  }
`;
