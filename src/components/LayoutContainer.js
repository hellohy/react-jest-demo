import React from 'react'

import routes from '../routes'

export default class LayoutContainer extends React.Component {
  render() {
    return (
      <div className="container">
        {routes}

        <style jsx>{`
          .container {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
