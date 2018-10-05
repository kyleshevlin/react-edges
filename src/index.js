import React, { Component } from 'react'

class Provider extends Component {
  render() {
    const {
      bottom,
      bottomLeft,
      bottomRight,
      children,
      left,
      margin,
      right,
      top,
      topLeft,
      topRight
    } = this.props

    return (
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <div>{children}</div>

        {topLeft ? (
          <div style={{ position: 'absolute', top: margin, left: margin }}>
            {topLeft}
          </div>
        ) : null}

        {top ? (
          <div
            style={{
              position: 'absolute',
              top: margin,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            {top}
          </div>
        ) : null}

        {topRight ? (
          <div style={{ position: 'absolute', top: margin, right: margin }}>
            {topRight}
          </div>
        ) : null}

        {right ? (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: margin,
              transform: 'translateY(-50%)'
            }}
          >
            {right}
          </div>
        ) : null}

        {bottomRight ? (
          <div style={{ position: 'absolute', bottom: margin, right: margin }}>
            {bottomRight}
          </div>
        ) : null}

        {bottom ? (
          <div
            style={{
              position: 'absolute',
              bottom: margin,
              left: margin,
              transform: 'translateX(-50%)'
            }}
          >
            {bottom}
          </div>
        ) : null}

        {bottomLeft ? (
          <div style={{ position: 'absolute', bottom: margin, left: margin }}>
            {bottomLeft}
          </div>
        ) : null}

        {left ? (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: margin,
              transform: 'translateY(-50%)'
            }}
          >
            {left}
          </div>
        ) : null}
      </div>
    )
  }
}

Provider.defaultProps = {
  margin: '1em'
}

export default Provider
