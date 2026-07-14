import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants'
import HeroImg from '../../images/HeroImage.jpg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Desc = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 900px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const InfoList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 18px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const InfoItem = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 18px;
  border-radius: 18px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 10px 30px;
`

const InfoLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
`

const InfoText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6;
`

const HighlightList = styled.ul`
  margin: 0;
  padding-left: 20px;
  color: ${({ theme }) => theme.text_secondary};
  li {
    margin-bottom: 10px;
    line-height: 1.8;
  }
`

const Link = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`

const ProfilePic = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.primary};
`

const About = () => {
  return (
    <Container>
      <Wrapper>
        <ProfileHeader>
        
        </ProfileHeader>
        <Title>About Me</Title>
        <Desc>{Bio.description}</Desc>

        <InfoList>
          <InfoItem>
            <InfoLabel>Contact</InfoLabel>
            <InfoText>
              Email: <Link href={`mailto:${Bio.email}`}>{Bio.email}</Link>
              <br />
              Phone: <Link href={`tel:${Bio.phone}`}>{Bio.phone}</Link>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Location</InfoLabel>
            <InfoText>Dhaka, Bangladesh</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoLabel>LinkedIn</InfoLabel>
            <InfoText>
              <Link href={Bio.linkedin} target="_blank" rel="noreferrer">
                {Bio.linkedin}
              </Link>
            </InfoText>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Portfolio</InfoLabel>
            <InfoText>
              <Link href={Bio.resume} target="_blank" rel="noreferrer">
                {Bio.resume}
              </Link>
            </InfoText>
          </InfoItem>
        </InfoList>

        <HighlightList>
          <li>Developed real-world projects including BODY-ID, Naturon, AI Pneumonia Detection, SmartBin AI, and BARAQA_BIN Smart Bin.</li>
          <li>Skilled in full-stack web development, AI/ML, ECG signal processing, IoT systems, and technical documentation.</li>
          <li>Passionate about driving digital healthcare, sustainability, and practical problem-solving through technology.</li>
        </HighlightList>
      </Wrapper>
    </Container>
  )
}

export default About;