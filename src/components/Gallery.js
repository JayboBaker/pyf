import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { PhotoSwipe } from 'react-photoswipe'
import Image from './Image'

import _kebabCase from 'lodash/kebabCase'

import './Gallery.css'
import 'react-photoswipe/lib/photoswipe.css'

const Gallery = ({ images = [], isStacked }) => {
  const [ isOpen, setOpen ] = useState(false)
  const [ activeImageIndex, setActiveImageIndex ] = useState(0)

  const getImageInfo = ({ image, title }, index) => ({
    src: image,
    title,
    w: 1000,
    h: 1000,
  })

  const sliderImages = images.map(getImageInfo)

  return (
    <Fragment>
      {images && images.length > 0 && (
        <div className={`Gallery ${isStacked ? 'Gallery-column' : 'Gallery-row'}`}>
          {images.map((image, index) => index < 3 && (
            <figure
              className={`
                Gallery--Item
                ${isStacked ? 'Gallery--Item-column' : 'Gallery--Item-row'}
              `}
              key={_kebabCase(image.alt) + '-' + index}
              onClick={() => {
                setActiveImageIndex(index)
                setOpen(!isOpen)
              }}
            >
              <div>
                <Image
                  resolutions="small"
                  src={image.image}
                  alt={image.alt}
                />
              </div>
              {image.title && <figcaption>{image.title}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      {isOpen && sliderImages.length > 0 && (
        <PhotoSwipe
          isOpen={isOpen}
          items={sliderImages}
          options={{
            index: activeImageIndex,
            history: false,
            closeOnScroll: false
          }}
          onClose={() => setOpen(false)}
        />
      )}

    </Fragment>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}


export const query = graphql`
  fragment Gallery on MarkdownRemark {
    frontmatter {
      gallery {
        alt
        image
        title
      }
    }
  }
`

export default Gallery
