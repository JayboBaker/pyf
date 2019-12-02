import React from 'react'
import { graphql } from 'gatsby'

import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Content from '../components/Content.js'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout.js'
import PageHeader from '../components/PageHeader'


const renderGallery = (gallery) =>
  <section className="section">
    <div className="container">
      <h2>Our gallery component</h2>
      <Gallery images={gallery} />
    </div>
  </section>


// Export Template for use in CMS preview
export const HomePageTemplate = ({
  accordion,
  body,
  featuredImage,
  gallery,
  section1,
  section2,
  subtitle,
  title,
  video,
  videoPoster,
  videoTitle,
}) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

    {video &&
      <section className="BackgroundVideo-section section">
        <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
          {video && <source src={video} type="video/mp4" />}
        </BackgroundVideo>
      </section>
    }

    {!!gallery && !!gallery.length && renderGallery(gallery)}


    {section1 &&
      <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
      <div className="container">
        <br />
        {accordion && <Accordion items={accordion} />}
      </div>
    </section>
    }

    {section2 &&
      <section className="section">
        <div className="container">
          <Content source={section2} />
        </div>
      </section>
    }



  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
