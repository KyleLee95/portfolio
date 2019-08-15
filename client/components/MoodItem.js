import React from 'react'
import {Image as BsImage} from 'react-bootstrap'
import ReactPlayer from 'react-player'

export const MoodItem = props => {
  const {content} = props
  //image
  if (content.type === 'IMAGE') {
    var image = new Image()
    image.src = content.image

    return (
      <React.Fragment key={content.id}>
        <BsImage fluid src={image.src} />
        <br />
        <br />
      </React.Fragment>
    )
  }
  //video
  if (content.type === 'VIDEO') {
    return (
      <React.Fragment key={content.id}>
        <ReactPlayer url={content.url} width="100%" />
        <br />
        <br />
      </React.Fragment>
    )
  }
}
