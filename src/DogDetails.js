import { useParams, Redirect, Link } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
	const { name } = useParams();

	const dog = dogs.filter((dog) => dog.src === name)[0];

	if (!dog) return <Redirect to="/dogs" />;

	const src = require(`./images/${dog.src}.jpg`).default;

	return (
		<div className="Dog">
			<h1>{dog.name}</h1>
			<img src={src} alt={dog.name} />
			<p>
				<b>Age:</b> {dog.age}
			</p>
			<h2>About {dog.name}</h2>
			{dog.facts.map((fact, idx) => <p key={idx}>{fact}</p>)}
			<Link to="/dogs">Back</Link>
		</div>
	);
};

export default DogDetails;
