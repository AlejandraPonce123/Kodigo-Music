import React from 'react';
import AlbumCard from '../components/AlbumCard';
import PlaylistCard from '../components/PlaylistCard';
import Footer from '../components/Footer';

const albums = [
  {
    title: "Album 1",
    artist: "Artist 1",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699181/Kodigo%20Music/i0jzfnfmqgarutywusif.jpg"
  },
  {
    title: "Album 2",
    artist: "Artist 2",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699352/Kodigo%20Music/vz30pvg7ddqcmg7po3rb.jpg"
  },
  {
    title: "Album 3",
    artist: "Artist 3",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699352/Kodigo%20Music/qmnidnrditqrlfwbesy5.jpg"
  },
  {
    title: "Album 4",
    artist: "Artist 4",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699352/Kodigo%20Music/t8l4581av1e396vs7zfq.jpg"
  },
  {
    title: "Album 5",
    artist: "Artist 5",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699181/Kodigo%20Music/i0jzfnfmqgarutywusif.jpg"
  },
  {
    title: "Album 6",
    artist: "Artist 6",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699352/Kodigo%20Music/qmnidnrditqrlfwbesy5.jpg"
  },
  {
    title: "Album 7",
    artist: "Artist 7",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699181/Kodigo%20Music/i0jzfnfmqgarutywusif.jpg"
  },
  {
    title: "Album 8",
    artist: "Artist 8",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699352/Kodigo%20Music/vz30pvg7ddqcmg7po3rb.jpg"
  },
 
];

const playlists = [
  {
    title: "Chill Vibes",
    description: "Relax and unwind with this playlist.",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699726/Kodigo%20Music/uiemf0xt9lr5cdjajk0q.png"
  },
  {
    title: "Top Hits",
    description: "The most popular songs right now.",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699726/Kodigo%20Music/c1lunv3cu9qxg6hvep1u.png"
  },
  {
    title: "Chill Vibes",
    description: "Relax and unwind with this playlist.",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699726/Kodigo%20Music/uiemf0xt9lr5cdjajk0q.png"
  },
  {
    title: "Top Hits",
    description: "The most popular songs right now.",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699726/Kodigo%20Music/c1lunv3cu9qxg6hvep1u.png"
  },
  {
    title: "Chill Vibes",
    description: "Relax and unwind with this playlist.",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699726/Kodigo%20Music/uiemf0xt9lr5cdjajk0q.png"
  },
  {
    title: "Top Hits",
    description: "The most popular songs right now.",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699726/Kodigo%20Music/c1lunv3cu9qxg6hvep1u.png"
  },
  {
    title: "Chill Vibes",
    description: "Relax and unwind with this playlist.",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699726/Kodigo%20Music/uiemf0xt9lr5cdjajk0q.png"
  },
  {
    title: "Top Hits",
    description: "The most popular songs right now.",
    imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730699726/Kodigo%20Music/c1lunv3cu9qxg6hvep1u.png"
  },
  
];

const Home = () => (
  <div className="home">
    <h1>Kodigo Music</h1>
    
    <h2>Featured Albums</h2>
    <div className="albums">
      {albums.map((album, index) => (
        <AlbumCard key={index} album={album} />
      ))}
    </div>
    
    <h2>Playlists</h2>
    <div className="playlists">
      {playlists.map((playlist, index) => (
        <PlaylistCard key={index} playlist={playlist} />
      ))}
    </div>

    {}
    <Footer />
  </div>
);

export default Home;
