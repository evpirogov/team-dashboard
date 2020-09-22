import React from "react"
import $ from './ProgressBar.module.scss'

export const ProgressBar = ({content}) => {

  return (
    <div className={$.progress}>
      <p className={$.title}>{content.title}</p>
      <div className={$.progressBar} style={content.style}>
        {content.chunks.map( (e,i) => (
          <div key={i} className={$.status} style={e.style}>
            {`${e.chunkTitle}: ${e.width}`}
          </div>)
        )}
      </div>
    </div>
  )
}