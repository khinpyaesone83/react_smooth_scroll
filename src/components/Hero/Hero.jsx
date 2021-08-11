import React,{useState} from 'react'
import Video from '../../video/video.mp4';
import {HeroSection,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,Button,ArrowForward,ArrowRight} from './HeroElements';


const Hero = () => {
    const[hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
    return (
        <HeroSection>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $200 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroSection>
    )
}

export default Hero
