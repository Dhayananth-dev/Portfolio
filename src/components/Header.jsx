import { profile } from '../data/portfolio'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

function Header({ activePage }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${profile.name} home`}>
        {profile.name}
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className={activePage === item.id ? 'is-active' : ''} href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
