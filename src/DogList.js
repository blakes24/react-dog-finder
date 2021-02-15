import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({ dogs }) => (
	<div className="DogList">
		<h1>Dogs</h1>
		<div>
			{dogs.map((dog) => (
				<div key={dog.src} className="DogList-dog">
					<img src={require(`./images/${dog.src}.jpg`).default} />
					<Link to={`/dogs/${dog.src}`}>{dog.name}</Link>
				</div>
			))}
		</div>
	</div>
);

export default DogList;
