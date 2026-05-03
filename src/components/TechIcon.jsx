const commonProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': 'true',
  focusable: 'false',
}

function TechIcon({ name }) {
  switch (name) {
    case 'git':
      return (
        <svg {...commonProps}>
          <path d="M24 6 42 24 24 42 6 24 24 6Z" />
          <path d="M17 18h7l7 7" />
          <path d="M24 18v13" />
          <circle cx="17" cy="18" r="3" />
          <circle cx="24" cy="31" r="3" />
          <circle cx="31" cy="25" r="3" />
        </svg>
      )
    case 'jenkins':
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="14" r="7" />
          <path d="M13 40v-7c0-7 5-12 11-12s11 5 11 12v7" />
          <path d="M17 33h14" />
          <path d="M16 39h16" />
        </svg>
      )
    case 'docker':
      return (
        <svg {...commonProps}>
          <path d="M9 25h28c-1 9-7 14-16 14-7 0-12-3-15-9" />
          <path d="M37 25c2-3 4-4 7-4" />
          <path d="M12 17h6v6h-6zM20 17h6v6h-6zM28 17h6v6h-6zM20 9h6v6h-6z" />
        </svg>
      )
    case 'compose':
      return (
        <svg {...commonProps}>
          <rect x="8" y="8" width="13" height="13" rx="3" />
          <rect x="27" y="8" width="13" height="13" rx="3" />
          <rect x="8" y="27" width="13" height="13" rx="3" />
          <rect x="27" y="27" width="13" height="13" rx="3" />
          <path d="M21 15h6M21 34h6M15 21v6M34 21v6" />
        </svg>
      )
    case 'aws':
      return (
        <svg {...commonProps}>
          <path d="M14 35h24a7 7 0 0 0 1-14 11 11 0 0 0-21-4 8 8 0 0 0-4 18Z" />
          <path d="M16 34c5 4 18 4 24-2" />
          <path d="M16 39c8 3 18 2 25-4" />
        </svg>
      )
    case 'ec2':
      return (
        <svg {...commonProps}>
          <path d="M15 35h22a7 7 0 0 0 1-14 11 11 0 0 0-21-4 8 8 0 0 0-2 18Z" />
          <path d="M20 24h12v9H20z" />
          <path d="M24 24v9M28 24v9" />
        </svg>
      )
    case 'architecture':
      return (
        <svg {...commonProps}>
          <rect x="6" y="8" width="12" height="12" rx="3" />
          <rect x="30" y="8" width="12" height="12" rx="3" />
          <rect x="18" y="30" width="12" height="12" rx="3" />
          <path d="M18 14h12" />
          <path d="M12 20v5l8 5" />
          <path d="M36 20v5l-8 5" />
        </svg>
      )
    case 'secure-db':
      return (
        <svg {...commonProps}>
          <ellipse cx="24" cy="14" rx="13" ry="6" />
          <path d="M11 14v13c0 3 6 6 13 6s13-3 13-6V14" />
          <path d="M17 34v-4a7 7 0 0 1 14 0v4" />
          <rect x="15" y="34" width="18" height="9" rx="3" />
          <path d="M24 37v3" />
        </svg>
      )
    case 'kubernetes':
      return (
        <svg {...commonProps}>
          <path d="M24 5 40 14v20l-16 9-16-9V14l16-9Z" />
          <circle cx="24" cy="24" r="5" />
          <path d="M24 9v10M24 29v10M11 16l9 5M28 27l9 5M37 16l-9 5M20 27l-9 5" />
        </svg>
      )
    case 'terraform':
      return (
        <svg {...commonProps}>
          <path d="M9 11 21 18v14L9 25V11Z" />
          <path d="M23 19 35 12v14l-12 7V19Z" />
          <path d="M23 35 35 28v9l-12 7v-9Z" />
        </svg>
      )
    case 'ansible':
      return (
        <svg {...commonProps}>
          <circle cx="24" cy="24" r="18" />
          <path d="M24 13 34 35 24 29 14 35l10-22Z" />
          <path d="M24 18v11" />
        </svg>
      )
    case 'shell':
      return (
        <svg {...commonProps}>
          <rect x="7" y="10" width="34" height="28" rx="4" />
          <path d="m15 20 6 5-6 5" />
          <path d="M24 31h10" />
        </svg>
      )
    case 'nginx':
      return (
        <svg {...commonProps}>
          <path d="M24 5 40 14v20l-16 9-16-9V14l16-9Z" />
          <path d="M17 33V15l14 18V15" />
        </svg>
      )
    case 'spring':
      return (
        <svg {...commonProps}>
          <path d="M39 9c-16 1-28 9-28 21 0 6 5 10 11 10 11 0 17-12 17-31Z" />
          <path d="M12 34c8-2 15-8 20-17" />
          <path d="M15 25c3 3 8 5 13 4" />
        </svg>
      )
    case 'mysql':
      return (
        <svg {...commonProps}>
          <ellipse cx="24" cy="12" rx="14" ry="6" />
          <path d="M10 12v24c0 3 6 6 14 6s14-3 14-6V12" />
          <path d="M10 24c0 3 6 6 14 6s14-3 14-6" />
          <path d="M10 36c0 3 6 6 14 6s14-3 14-6" />
        </svg>
      )
    case 'linux':
      return (
        <svg {...commonProps}>
          <path d="M14 38c2-9 3-14 5-19" />
          <path d="M34 38c-2-9-3-14-5-19" />
          <path d="M18 19c0-8 3-13 6-13s6 5 6 13" />
          <path d="M16 39h16" />
          <path d="M20 25h8" />
          <circle cx="21" cy="15" r="1.5" />
          <circle cx="27" cy="15" r="1.5" />
        </svg>
      )
    default:
      return (
        <svg {...commonProps}>
          <path d="M24 6 42 24 24 42 6 24 24 6Z" />
          <path d="M16 24h16M24 16v16" />
        </svg>
      )
  }
}

export default TechIcon
