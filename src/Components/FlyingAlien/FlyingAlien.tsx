import "./FlyingAlien.scss";
import Eye from '../Eye/Eye';

const FlyingAlien = () => {

    return (

		<div className="hiAlien">
			<Eye className="hiAlien__eye" size="small" />
			<img className="hiAlien__img" src={process.env.PUBLIC_URL + "assets/flyingAlien.svg"} alt="petit extraterrestre vert qui fait salut" />
		</div>
		
    )
}

export default FlyingAlien;
