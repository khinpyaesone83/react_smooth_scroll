import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroSection = styled.div`
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before{
      content:'';
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background:linear-gradient(180deg,rgba(0,0,0,0.2)0%,rgba(0,0,0,0.6)100%),linear-gradient(180deg,rgba(0,0,0,0.2)0%,rgba(0,0,0,0.6)100%);
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
`;
export const HeroH1 = styled.h1`
  margin-bottom: 2rem;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  line-height: 20px;
  margin-bottom: 3rem;
  font-size: 18px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Button = styled(LinkS)`
  background: #01bf71;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 16px;
  color: #0d0d0d;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  &:hover {
    background: #fff;
  }
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
