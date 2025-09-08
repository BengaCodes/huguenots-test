import FeatherIcon from 'feather-icons-react'

type NavLinksProps = {
  link: { name: string; href: string }
}

const NavLink = ({ link }: NavLinksProps) => {
  return (
    <div className='links-container'>
      <a
        className={`${
          link.name === 'Funds' ? 'active' : 'nav__links-list-link'
        }`}
        href={link.href}
      >
        {link.name}
      </a>
      <FeatherIcon
        icon={link.name !== 'Funds' ? 'chevron-down' : 'chevron-up'}
      />
    </div>
  )
}

export default NavLink
