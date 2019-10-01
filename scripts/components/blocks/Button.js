import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.less'

export const Button = props => {
    const {primary, secondary, tertiary, children, ...rest} = props;

    const className = primary && styles.btnPrimary
        || secondary && styles.btnSecondary
        || tertiary && styles.btnTertiary;

    return (
        <button className={className} {...rest}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
}
