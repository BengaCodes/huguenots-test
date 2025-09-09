import FeatherIcon from 'feather-icons-react'
import Logo from '../../assets/JOH_logo.svg'
import Divider from '../divider/Divider'
import FooterLinksWithTitle from './FooterLinksWithTitle'
import { FOOTER_LINKS, FOOTER_LINKS_SECONDARY } from '../../data'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__content-main'>
          <div className='logo'>
            <img
              src={Logo}
              alt='J O Hambro Capital Management Group Logo'
              width={180}
              height={60}
            />
          </div>
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className='footer__links'>
              <FooterLinksWithTitle
                title={
                  section.includes('_') ? section.replace('_', ' ') : section
                }
                links={links}
              />
            </div>
          ))}
        </div>
      </div>
      <Divider orientation='horizontal' />
      <div className='footer__content-secondary'>
        <ul className='footer__links-list footer__links-list--secondary'>
          {FOOTER_LINKS_SECONDARY.map(({ label, url }) => (
            <li key={label} className='footer__links-item'>
              <a href={url}>{label}</a>
            </li>
          ))}
        </ul>
        <div className='footer__icon'>
          <FeatherIcon size={30} icon='linkedin' />
        </div>
      </div>
      <p className='footer__regulatory-text'>
        This website is issued and approved in the UK by J O Hambro Capital
        Management Limited ("JOHCML") which is authorised and regulated by the
        Financial Conduct Authority. Registered office: Level 3, 1 St James's
        Market, London SW1Y 4AH. Issued in the European Union by Perpetual
        Investment Services Europe Limited ("PISEL") which is authorised by the
        Central Bank of Ireland. Registered office: 24 Fitzwilliam Place, Dublin
        2, Ireland D02 T296. References to "JOHCM" below are to either JOHCML or
        PISEL as the context requires. J O Hambro® and JOHCM® are registered
        trademarks of JOHCML. Telephone calls to and from JOHCML and PISEL may
        be recorded.
      </p>
      <p className='footer__copyright-text'>
        &copy; 2024 J O Hambro Capital Management Limited. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
