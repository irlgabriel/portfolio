import React from "react"
import { FaGithub, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa"
import { AiFillMail } from "react-icons/ai"
import {
  MainContainer,
  ContactInfo,
  ContactIcon,
  ContactHeader,
  ContactLink,
  TopLine
} from "./Footer.components"

export default function Footer() {
  return (
    <MainContainer>
      <ContactInfo>
        <ContactLink href="https://github.com/irlgabriel">
          <TopLine>
            <ContactHeader>Github &nbsp;</ContactHeader>
            <ContactIcon><FaGithub /></ContactIcon>
          </TopLine> 
        </ContactLink>
      </ContactInfo>
      <ContactInfo>
        <ContactLink href="https://www.instagram.com/gabriel.radu1/">
          <TopLine>
            <ContactHeader>Instagram &nbsp;</ContactHeader>
            <ContactIcon><FaInstagramSquare /></ContactIcon>
          </TopLine> 
        </ContactLink>
      </ContactInfo>
      <ContactInfo>
      <ContactLink href="https://www.facebook.com/gabi.radu.75/">
          <TopLine>
            <ContactHeader>Facebook &nbsp;</ContactHeader>
            <ContactIcon><FaFacebookSquare /></ContactIcon>
          </TopLine> 
        </ContactLink>
      </ContactInfo>
      <ContactInfo>
      <ContactLink href="mailto: radu.gabriel131@gmail.com">
          <TopLine>
            <ContactHeader>Mail &nbsp;</ContactHeader>
            <ContactIcon><AiFillMail /></ContactIcon>
          </TopLine> 
        </ContactLink>
      </ContactInfo>
    </MainContainer>
  )
}