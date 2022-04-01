import "./Alien.scss";
import Eye from '../Eye/Eye';

const Alien = () => {

    return (

		<div className="alien" tabIndex={0}>
			<Eye className="alien__eye" />
			<Eye className="alien__secondEye" size="small" />
			<img className="alien__img" src={process.env.PUBLIC_URL + "assets/alien.svg"} alt="petit extraterrestre vert" />
		</div>
		
    )
}

export default Alien;
