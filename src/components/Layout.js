import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import GithubCorner from './GithubCorner'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

export default ({ children, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
          }
          allPosts: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "postCategories" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { siteTitle, socialMediaCard, googleTrackingId } =
            data.settingsYaml || {},
          subNav = {
            posts: data.allPosts.hasOwnProperty('edges')
              ? data.allPosts.edges.map(post => {
                  return { ...post.node.fields, ...post.node.frontmatter }
                })
              : false
          }

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>>
              <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
              <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
              <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
              <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
              <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
              <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
              <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
              <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/manifest.json"/>
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
              <meta name="theme-color" content="#ffffff" />
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />

            <GithubCorner url="https://github.com/thriveweb/yellowcake" />

            <Nav subNav={subNav} />

            <Fragment>{children}</Fragment>

            <Footer />
          </Fragment>
        )
      }}
    />
  )
}
