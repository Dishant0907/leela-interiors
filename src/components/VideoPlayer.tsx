"use client"
import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  return (
    <div className='mx-auto mt-[3rem] rounded-lg  flex justify-center    md:h-[42rem] md:w-[73rem]'>
            <ReactPlayer 
            controls={false} 
            width={1239}
            height={697}
            playing={true}
            loop={true}
            muted={false}
            url='videos/Kitchen-video.MP4' />

    </div>
  )
}

export default VideoPlayer