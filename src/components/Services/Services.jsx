import React from 'react';
import {ServicesContainer,ServiceH1,ServicesWrapper,ServicesCard,ServicesIcon,ServiceH2,ServicesP} from './ServiceElements';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';


const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServiceH1>Our Services</ServiceH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServiceH2>Reduce expenses</ServiceH2>
                    <ServicesP>We help reduce your fees and increase your overall rvenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServiceH2>Virtual Offices</ServiceH2>
                    <ServicesP>We help reduce your fees and increase your overall rvenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServiceH2>Premium Benefits</ServiceH2>
                    <ServicesP>We help reduce your fees and increase your overall rvenue.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
