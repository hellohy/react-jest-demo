// import React from 'react'
import { connect } from 'react-redux'
import HocList from '../../components/list/hoc'

const defaultProps = {
  title: 'Page A',
}

const dataSource = () => Promise.resolve([
  {
    background: 'linear-gradient(120deg, #a8edea 0%, #fed6e3 100%)',
    text: 'Send',
    duration: 2000,
    buttonStyles: {
      background: '#121019',
      color: '#fff',
    },
    buttonOptions: {
      color: '#121019',
    },
  },
  {
    background: 'linear-gradient(120deg,#7f54e6,#3F51B5)',
    text: 'Upload',
    buttonStyles: {
      background: '#f3f3f3',
      color: '#3c2e9e',
      padding: '1.8rem 4rem',
    },
    buttonOptions: {
      color: '#f3f3f3',
      type: 'triangle',
      easing: 'easeOutQuart',
      size: 6,
      particlesAmountCoefficient: 4,
      oscillationCoefficient: 2,
    },
  }])

const PageA = HocList(dataSource, defaultProps)

export default connect()(PageA)
