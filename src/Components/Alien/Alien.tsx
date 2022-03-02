import "./Alien.css";
import Eye from '../Eye/Eye';

const Alien = () => {

    return (

		<div className="alien">
			<Eye />
			<img src={process.env.PUBLIC_URL + "assets/alien.svg"} alt="petit extraterrestre vert" />
		</div>
		
    )
}

export default Alien;
