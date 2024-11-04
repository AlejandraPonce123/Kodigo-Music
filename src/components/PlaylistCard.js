const PlaylistCard = ({ playlist }) => (
    <div className="playlist-card">
      <img src={playlist.imageUrl} alt={playlist.title} />
      <h3>{playlist.title}</h3>
      <p>{playlist.description}</p>
    </div>
  );
  
  export default PlaylistCard;
  