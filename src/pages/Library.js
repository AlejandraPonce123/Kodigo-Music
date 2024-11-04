import React, { useState } from 'react';
import '../styles/Library.css';
import Footer from '../components/Footer'; 

const artistsData = [
  { name: "Bad Bunny", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/v64e5j8vi5ieujgtpzmr.jpg" },
  { name: "Karol G", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/rrnqn9yeidtyrge4q9hx.jpg" },
  { name: "Feid", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/vv1mzcorjgumtrv9icac.jpg" },
  { name: "Maluma", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/tkrz7lgowez33xmblw0z.jpg" },
  { name: "Rauw Alejandro", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/h1u3rnxra8quomukij8p.jpg" },
  { name: "Daddy Yankee", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/brwcmpydfsg6luqugkih.jpg" },
  { name: "Plan B", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/kfetb9fbwukkovdztfwj.jpg" },
  { name: "Bad Bunny", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/v64e5j8vi5ieujgtpzmr.jpg" },
  { name: "Karol G", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/rrnqn9yeidtyrge4q9hx.jpg" },
  { name: "Feid", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/vv1mzcorjgumtrv9icac.jpg" },
  { name: "Maluma", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/tkrz7lgowez33xmblw0z.jpg" },
  { name: "Rauw Alejandro", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/h1u3rnxra8quomukij8p.jpg" },
  { name: "Daddy Yankee", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/brwcmpydfsg6luqugkih.jpg" },
  { name: "Plan B", role: "Artista", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/kfetb9fbwukkovdztfwj.jpg" },
  
  
];

const albumsData = [
  { title: "Un Verano Sin Ti", artist: "Bad Bunny", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/v64e5j8vi5ieujgtpzmr.jpg" },
  { title: "nadie sabe lo que va a pasar mañana", artist: "Feid", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/rrnqn9yeidtyrge4q9hx.jpg" },
  { title: "FERXXO CALIPSIS", artist: "Feid", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/vv1mzcorjgumtrv9icac.jpg" },
  { title: "Fórmula, Vol. 2", artist: "Romeo Santos", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/h1u3rnxra8quomukij8p.jpg" },
  { title: "INCÓMODO", artist: "Tito Double P", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/rrnqn9yeidtyrge4q9hx.jpg" },
  { title: "PRIMERA MUSA", artist: "Omar Courtz", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/tkrz7lgowez33xmblw0z.jpg" },
  { title: "MAÑANA SERÁ BONITO", artist: "Karol G", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/kfetb9fbwukkovdztfwj.jpg" },
  { title: "Un Verano Sin Ti", artist: "Bad Bunny", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/v64e5j8vi5ieujgtpzmr.jpg" },
  { title: "nadie sabe lo que va a pasar mañana", artist: "Feid", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/rrnqn9yeidtyrge4q9hx.jpg" },
  { title: "FERXXO CALIPSIS", artist: "Feid", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/vv1mzcorjgumtrv9icac.jpg" },
  { title: "Fórmula, Vol. 2", artist: "Romeo Santos", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/h1u3rnxra8quomukij8p.jpg" },
  { title: "INCÓMODO", artist: "Tito Double P", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/rrnqn9yeidtyrge4q9hx.jpg" },
  { title: "PRIMERA MUSA", artist: "Omar Courtz", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700074/Kodigo%20Music/tkrz7lgowez33xmblw0z.jpg" },
  { title: "MAÑANA SERÁ BONITO", artist: "Karol G", imageUrl: "https://res.cloudinary.com/djolwqp8g/image/upload/v1730700075/Kodigo%20Music/kfetb9fbwukkovdztfwj.jpg" },
  
];

const Library = () => {
    const [showAllArtists, setShowAllArtists] = useState(false);
    const [showAllAlbums, setShowAllAlbums] = useState(false);
  
    const displayedArtists = showAllArtists ? artistsData : artistsData.slice(0, 7);
    const displayedAlbums = showAllAlbums ? albumsData : albumsData.slice(0, 7);
  
    return (
      <div className="library-container">
        <section className="artists-section">
          <h2>Artistas populares</h2>
          <div className="artists-grid">
            {displayedArtists.map((artist, index) => (
              <div key={index} className="artist-card">
                <img src={artist.imageUrl} alt={artist.name} />
                <h3>{artist.name}</h3>
                <p>{artist.role}</p>
              </div>
            ))}
          </div>
          <button className="show-all-button" onClick={() => setShowAllArtists(!showAllArtists)}>
            {showAllArtists ? "Mostrar menos" : "Mostrar todo"}
          </button>
        </section>
  
        <section className="albums-section">
          <h2>Álbumes populares</h2>
          <div className="albums-grid">
            {displayedAlbums.map((album, index) => (
              <div key={index} className="album-card">
                <img src={album.imageUrl} alt={album.title} />
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
              </div>
            ))}
          </div>
          <button className="show-all-button" onClick={() => setShowAllAlbums(!showAllAlbums)}>
            {showAllAlbums ? "Mostrar menos" : "Mostrar todo"}
          </button>
        </section>
  
        {}
        <Footer />
      </div>
    );
  };
export default Library;
