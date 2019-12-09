import React from 'react'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { ServicesPageTemplate } from '../templates/ServicesPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { DefaultPageTemplate } from '../templates/DefaultPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplateA } from '../templates/SinglePostA'
import { SinglePostTemplateB } from '../templates/SinglePostB'
import { SinglePostTemplateC } from '../templates/SinglePostC'
import { SinglePostTemplateD } from '../templates/SinglePostD'

CMS.init()

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}
CMS.registerMediaLibrary('uploadcare', uploadcare)

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('services-page', ({ entry }) => (
  <ServicesPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('infoPages', ({ entry }) => (
  <DefaultPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('posts', ({ entry }) => {
  switch (entry.getIn(['data', 'template'])) {
    case 'SinglePostA':
      return <SinglePostTemplateA {...entry.toJS().data} />
    case 'SinglePostB':
      return <SinglePostTemplateB {...entry.toJS().data} />
    case 'SinglePostC':
      return <SinglePostTemplateC {...entry.toJS().data} />
    case 'SinglePostD':
      return <SinglePostTemplateD {...entry.toJS().data} />
  }
})
