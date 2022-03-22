import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #f88497;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex; 
  justify-content: center;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 200px;
  box-sizing: border-box;
  color: #fff;
`;

export const FooterLinkTitle = styled.h1`
  font-size: 19px;
  margin-bottom: 16px;
  margin-left: 45px;
  font-weight: bold;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  margin-left: 45px;
  font-size: 16px;
`;

export const SocialMedia = styled.section`
  width: 110%;
  max-width: 1000px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-contents: space-between;
  align-items: center;
  margin: 40px auto 0 auto;
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 120px;
  margin-left: 100px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-right: 120px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-bottom: 7px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;