import React from 'react'
import { connect } from 'react-redux'
import DemoBlock from './DemoBlock'
import demos from './demos'

import { incrementCounter } from '../../redux/actions/sample'

export class HOCButton extends React.Component {
  render() {
    return (
      // <section>
      //   <h1>About Page</h1>
      //   <button onClick={() => this.props.incrementCounter()}>Increment</button>
      //   <p>Current Count: {this.props.counter}</p>
      // </section>
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
            React Particle Effect Buttons
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {demos.map((demo, index) => (
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

export const mapStateToProps = state => ({
  counter: state.sample.counter,
})

export default connect(
  mapStateToProps,
  { incrementCounter },
)(HOCButton)
