import { connect } from 'react-redux'
import demos from './demos'
import HocList from '../../components/list/hoc'

const defaultProps = {
  title: 'Page B',
}

const dataSource = () => Promise.resolve(demos)

const PageB = HocList(dataSource, defaultProps)

export default connect()(PageB)
