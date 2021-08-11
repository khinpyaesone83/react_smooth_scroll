import React from 'react'
import {InfoContainer,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle,BtnWrap, Column2,ImgWrapper,Img,Button} from './InfoSectionElement';

const InfoSection = ({data,img}) => {
    return (
        <>
            <InfoContainer lightBg={data.lightBg} id={data.id}>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {data.topLine}
                                </TopLine>
                                <Heading lightText={data.lightText}>
                                    {data.headline}
                                </Heading>
                                <Subtitle darkText={data.darkText}>
                                    {data.description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button 
                                    to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    dark={data.dark}
                                    >
                                        {data.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1> 
                        <Column2>
                            <ImgWrapper>
                                <Img src={img} alt={data.alt} />
                            </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
