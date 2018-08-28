import React from 'react'
import PropTypes from 'prop-types'
import DemoBlock from './DemoBlock'

export default class List extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'Page',
    data: [],
  }

  render() {
    return (
      <div
        style={{
          padding: '48px 0',
          background: '#000',
          width: '100%',
          minHeight: '100vh',
          color: '#fff',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>
          {this.props.title}
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {this.props.data.map((demo, index) => (
            <DemoBlock
              key={index}
              background={demo.background}
              text={demo.text}
              buttonStyles={demo.buttonStyles}
              buttonOptions={demo.buttonOptions}
            />
          ))}
        </div>
      </div>
    )
  }
}
