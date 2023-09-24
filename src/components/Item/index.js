import {Link} from 'react-router-dom'

import {Ci, Cn, Li} from './style'

import './index.css'

const Item = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  return (
    <Li>
      <Link to={`/courses/${id}`} className="link-el">
        <Ci src={logoUrl} alt={name} />
        <Cn>{name}</Cn>
      </Link>
    </Li>
  )
}

export default Item


/*
import {Link} from 'react-router-dom'

import './index.css'

const Item = props => {
  const {details} = props
  const {id, name, logoUrl} = details
  return (
    <li>
      <Link to={`/courses/${id}`} className="link-el">
        <img src={logoUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default Item

*/
