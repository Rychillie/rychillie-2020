import React from 'react'
import PropTypes from 'prop-types'
import featherSprite from '../../static/feather-sprite.svg'

const FeatherIcon = ({ name, color, size, ...restProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...restProps}
  >
    <use xlinkHref={`${featherSprite}#${name}`} />
  </svg>
)

FeatherIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

FeatherIcon.defaultProps = {
  color: 'currentColor',
}

export default FeatherIcon;
