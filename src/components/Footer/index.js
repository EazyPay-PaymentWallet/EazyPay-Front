import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Get to Know Us</FooterLinkTitle>
                            <FooterLink to="/">About Us</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Press Releases</FooterLink>
                            <FooterLink to="/">EazyPay Cares</FooterLink>
                            <FooterLink to="/">Gift a Smile</FooterLink>
                            <FooterLink to="/">EazyPay Science</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Connect with Us</FooterLinkTitle>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">Instagram</FooterLink>
                        </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Make Money with Us</FooterLinkTitle>
                            <FooterLink to="/">Sell on Amazon</FooterLink>
                            <FooterLink to="/">Sell under Amazon Accelerator</FooterLink>
                            <FooterLink to="/">Amazon Global Selling</FooterLink>
                            <FooterLink to="/">Become an Affiliate</FooterLink>
                            <FooterLink to="/">Fulfilment by Amazon</FooterLink>
                            <FooterLink to="/">Advertise Your Products</FooterLink>
                            <FooterLink to="/">Amazon Pay on Merchants</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Let Us Help You</FooterLinkTitle>
                            <FooterLink to="/">COVID-19 and Amazon</FooterLink>
                            <FooterLink to="/">Your Account</FooterLink>
                            <FooterLink to="/">Returns Centre</FooterLink>
                            <FooterLink to="/">100% Purchase Protection</FooterLink>
                            <FooterLink to="/">Amazon App Download</FooterLink>
                            <FooterLink to="/">Amazon Assistant Download</FooterLink>
                            <FooterLink to="/Help">Help</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>EazyPay</SocialLogo>
                    <WebsiteRights>EazyPay © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer