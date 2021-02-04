import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image='https://cdn.extra.ie/wp-content/uploads/2018/09/17154140/Proper-No-Twelve-Conor-McGregor-Feature.jpg'
        profileSrc='https://www.usnews.com/dims4/USNEWS/cbc9554/2147483647/resize/1200x%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F39%2F19e2a5e97bbabb3dd90fee9115c764%2Fmedia%3A8b59cdedb48843219428d703b41a53b0UFC_246_Mixed_Martial_Arts_80657.jpg'
        title='Connor Mcgregor'
      />
      <Story
        image='https://i.dmarge.com/2019/03/floyd-2-733x1100.jpg'
        profileSrc='https://i.dmarge.com/2019/03/floyd-2-733x1100.jpg'
        title='Floyd Mayweather'
      />
      <Story
        image='https://themaclife.com/wp-content/uploads/2016/10/Khabib.png'
        profileSrc='https://c.ndtvimg.com/2020-04/4qul6n6o_khabib-nurmagomedov_625x300_02_April_20.jpg'
        title='Khabib N'
      />   
      <Story
        image='https://www.fbcnews.com.fj/wp-content/uploads/2020/04/Dana-white-ufc.jpg'
        profileSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Dana_White_-_London_2015_(cropped).jpg/1200px-Dana_White_-_London_2015_(cropped).jpg'
        title='Danna White'
      />  
      <Story
        image='https://i0.wp.com/metro.co.uk/wp-content/uploads/2020/05/Mike-Tyson-training-comp-9de0.jpg?quality=90&strip=all&zoom=1&resize=644%2C402&ssl=1'
        profileSrc='https://veganfoodandliving-1321f.kxcdn.com/wp-content/uploads/2020/05/is-Mike-Tyson-vegan.jpg'
        title='Mike Tyson'
      />                    
    </div>
  );
}

export default StoryReel
