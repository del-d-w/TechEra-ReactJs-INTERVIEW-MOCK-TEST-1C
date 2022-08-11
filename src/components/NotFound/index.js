import {Link} from 'react-router-dom'
import {NoCon, NoIm, Nel, Logo, Noh, Nop} from './style'

const NotFound = () => (
  <div>
    <Link to="/" className="link-el">
      <Nel>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Nel>
    </Link>
    <NoCon>
      <NoIm
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <Noh>Page Not Found</Noh>
      <Nop>We are sorry, the page you requested could not be found</Nop>
    </NoCon>
  </div>
)

export default NotFound
