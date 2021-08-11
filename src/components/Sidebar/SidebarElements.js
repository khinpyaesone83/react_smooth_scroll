import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  /* top: 0; */
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const Icon = styled.div`
  position: absolute;
  font-size: 2rem;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  /* transform: translate(-100%, 80px); */
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
  cursor: pointer;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-rows: 400px;
  grid-template-columns: 1fr;
`;

export const SidebarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SidebarLink = styled(LinkS)`
  text-decoration: none;
  color: #fff;
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBtn = styled(LinkR)`
  text-decoration: none;
  color: #0d0d0d;
  background: #01bf71;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 16px;
  &:hover {
    background: #fff;
    transition: 0.2s ease-in-out;
  }
`;
