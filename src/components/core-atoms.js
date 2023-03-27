import styled from "styled-components";

export const LogoGroup = styled.img.attrs({
    alt: "logo"
})`
    height: ${props => props.size || "10rem"};
    width: ${props => props.size || "10rem"};
    border-radius: 50%;
`

export const ButtonAbout = styled.button`
    border: 2px solid #55c;
    color: #55c;
    width: ${props => props.width || "8rem"};
    font-size: 16px;
    cursor: pointer;
    padding: 0.5rem 1rem;
    background-color: white;
    :hover{
        opacity: 0.8;
    }
`

export const ButtonChangePage = styled.button`
    padding: 0.5rem;
    border: none;
    color: #fff;
    background-color: #55c;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`