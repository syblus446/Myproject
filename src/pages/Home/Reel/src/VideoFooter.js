import { formatMs } from '@material-ui/core';
import React from 'react';
import { Button, Avatar } from "@material-ui/core";



function VideoFooter({channel, song, likes, shares, avatarSrc}) {
  return (
    <div className='videoFooter'>
        <Avatar src={avatarSrc} />
    </div>
  )
}

export default VideoFooter