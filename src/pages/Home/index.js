import React from 'react'
import { connect } from 'react-redux'
import { Link } from '@reach/router'

import ErrorBoundary from '../../components/ErrorBoundary'
import TestError from '../../components/TestError'
import { addInitialLoad } from '../../redux/actions/sample'

import './style.css'

export class Home extends React.Component {
  componentDidMount() {
    this.props.addInitialLoad()
  }

  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">
            React APP
        </h1>
        <nav className="navbar">
          <ul>
            <li className="nav-li">
              <Link to="/page-a">Page A</Link>
            </li>
            <li className="nav-li">
              <Link to="/page-b">Page B</Link>
            </li>
            <li className="nav-li">
              <Link to="/about">Go to about</Link>
            </li>
          </ul>
        </nav>

        <ErrorBoundary>
          <TestError />
        </ErrorBoundary>

        <style jsx>{`
          .title {
            color: red;
          }
        `}</style>
      </header>
    )
  }
}

export default connect(
  null,
  { addInitialLoad },
)(Home)
