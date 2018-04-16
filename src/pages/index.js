import React from 'react'
import Link from 'gatsby-link'
import Logo from '../img/logo-white.svg';
import Header from '../components/Header'
import '../styles/main.scss';
import '../styles/custom.scss';
import AboutPageTemplate from '../templates/about-page'
import Content, { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
      <Header />
      <section className="section">
        <div className="container">
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'about-page')
            .map(({ node: post }) => (

              <div>
              <h2>{post.frontmatter.title}</h2>
                <p>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  <br />
                  <br />


                  <ul className="actions">
                    <li><a href="https://facebook.com/nashblockchain" target="_blank" className="button">Facebook</a></li>
                    <li><a href="https://twitter.com/nashblockchain" target="_blank" className="button">Twitter</a></li>
                  </ul>

                </p>
                </div>
            ))}
        </div>
      </section>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          html
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
