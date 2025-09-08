import Logo from '../../assets/JOH_logo.svg'
import NavLink from './NavLink'
import FeatherIcon from 'feather-icons-react'

const NAV_LINKS = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Funds',
    href: '#funds'
  },
  {
    name: 'Insights',
    href: '#insights'
  },
  {
    name: 'Resources',
    href: '#resources'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
]

const Nav = () => {
  return (
    <nav className='nav'>
      <article className='nav__logo'>
        <img
          src={Logo}
          className='nav__logo-image'
          alt='J O Hambro Capital Management Group Logo'
          width={180}
          height={60}
        />
      </article>
      <article className='nav__items'>
        <div className='nav__links'>
          <ul className='nav__links-list'>
            {NAV_LINKS.map((link) => {
              return <NavLink key={link.name} link={link} />
            })}
          </ul>
        </div>
        <div className='nav__search'>
          <button className='nav__search-btn'>UK | Professional</button>
          <FeatherIcon icon='search' className='nav__search-icon' />
        </div>
      </article>
    </nav>
  )
}

export default Nav
