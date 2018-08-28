import React from 'react'
import List from './index'

export default function hocList(fetchData, defaultProps) {
  return class HocList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      fetchData().then((data) => {
        this.setState({ data })
      })
    }

    render() {
      return (
        <List {...this.props} data={this.state.data} {...defaultProps}></List>
      )
    }
  }
}
