type FooterLinksWithTitleProps = {
  title: string
  links: { label: string; url: string }[]
}

const FooterLinksWithTitle = ({ title, links }: FooterLinksWithTitleProps) => {
  return (
    <div>
      <h3 className='footer__links-title'>{title}</h3>
      <ul className='footer__links-list'>
        {links.map((link) => (
          <li key={link.label} className='footer__links-item'>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinksWithTitle
