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
      {link.name !== 'Contact' && (
        <FeatherIcon
          icon='chevron-down'
          className={`${
            link.name === 'Funds' ? 'active-icon' : 'nav__links-list-icon'
          }`}
          size={24}
        />
      )}
    </div>
  )
}

export default NavLink
