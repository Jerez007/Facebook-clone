import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => (
      setPosts(snapshot.docs.map((doc) =>({id: doc.id, data: doc.data() })))
    ));
  },[]); 

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

{/* 
      <Post
        profilePic="https://www.usnews.com/dims4/USNEWS/cbc9554/2147483647/resize/1200x%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F39%2F19e2a5e97bbabb3dd90fee9115c764%2Fmedia%3A8b59cdedb48843219428d703b41a53b0UFC_246_Mixed_Martial_Arts_80657.jpg"
        message="Hi Floyd!"
        timestamp="timestamp"
        username="Conor Mcgregor"
        image="https://www.thesun.ie/wp-content/uploads/sites/3/2020/09/as-graphi-tale-of-tape-mcgreggor-pacquiao-v2.jpg?strip=all&quality=100&w=1200&h=800&crop=1"
      />
      <Post
        profilePic="https://www.usnews.com/dims4/USNEWS/cbc9554/2147483647/resize/1200x%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F39%2F19e2a5e97bbabb3dd90fee9115c764%2Fmedia%3A8b59cdedb48843219428d703b41a53b0UFC_246_Mixed_Martial_Arts_80657.jpg"
        message="I'm coming for you Pacqiao!"
        timestamp="timestamp"
        username="Conor Mcgregor"
      />      
      <Post /> */}
    </div>
  );
}

export default Feed
