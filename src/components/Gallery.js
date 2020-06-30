import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Lightbox from 'react-image-lightbox'
import Image from './Image'

import _kebabCase from 'lodash/kebabCase'

import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import './Gallery.css'
// import 'react-photoswipe/lib/photoswipe.css'

const Gallery = ({ images = [], isStacked }) => {
  const [ isOpen, setOpen ] = useState(false)
  const [ activeImageIndex, setActiveImageIndex ] = useState(0)

  const getImageSrcArray = ({ image }) => (image)

  const sliderImages = images.map(getImageSrcArray)

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
        <Lightbox
          mainSrc={sliderImages[activeImageIndex]}
          nextSrc={sliderImages[(activeImageIndex + 1) % sliderImages.length]}
          prevSrc={sliderImages[(activeImageIndex + sliderImages.length - 1) % sliderImages.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setActiveImageIndex((activeImageIndex + sliderImages.length - 1) % sliderImages.length)}
          onMoveNextRequest={() => setActiveImageIndex((activeImageIndex + 1) % sliderImages.length)}
          imageCaption={images[activeImageIndex].title}
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
