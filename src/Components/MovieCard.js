import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function MovieCard({movie}) {
  return (
    <Card className='M-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Card.Text>
          {"🌟".repeat(movie.rate)}
        </Card.Text>
      <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
}
export default MovieCard;