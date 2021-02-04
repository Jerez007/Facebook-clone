import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://www.usnews.com/dims4/USNEWS/cbc9554/2147483647/resize/1200x%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F39%2F19e2a5e97bbabb3dd90fee9115c764%2Fmedia%3A8b59cdedb48843219428d703b41a53b0UFC_246_Mixed_Martial_Arts_80657.jpg"
        message="Wow this works!"
        timestamp="timestamp"
        username="Conor Mcgregor"
        image="https://www.thesun.ie/wp-content/uploads/sites/3/2020/09/as-graphi-tale-of-tape-mcgreggor-pacquiao-v2.jpg?strip=all&quality=100&w=1200&h=800&crop=1"
      />
      <Post
        profilePic="https://www.usnews.com/dims4/USNEWS/cbc9554/2147483647/resize/1200x%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F39%2F19e2a5e97bbabb3dd90fee9115c764%2Fmedia%3A8b59cdedb48843219428d703b41a53b0UFC_246_Mixed_Martial_Arts_80657.jpg"
        message="Wow this works!"
        timestamp="timestamp"
        username="Conor Mcgregor"
      />      
      <Post />
    </div>
  );
}

export default Feed
