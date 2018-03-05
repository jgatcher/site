import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Link from "gatsby-link"

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="megatchr"
      meta={[
        { name: 'description', content: 'blog and portfolio' },
        { name: 'keywords', content: 'blog,portfolio,ux,product design' },
      ]}
    />
    
    <div
      style={{
        margin: '0 auto',
        maxWidth: 650,
        padding: '0.1rem',
        
      }}
    >
	<Link to="/" style= {{marginBottom:'1.5rem'}}><h3 style={{display:'inline'}}>megatchr</h3></Link>
     <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about">about</ListLink>
        <ListLink to="/blog/">blog</ListLink>
        <ListLink to="/portfolio/">portfolio</ListLink>
     </ul>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
