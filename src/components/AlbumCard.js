const AlbumCard = ({ album }) => (
    <div className="album-card">
      <img src={album.imageUrl} alt={album.title} />
      <h3>{album.title}</h3>
      <p>{album.artist}</p>
    </div>
  );
  
  export default AlbumCard;
  