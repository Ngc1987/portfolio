import "./HiAlien.scss";
import Eye from '../Eye/Eye';

const HiAlien = () => {

    return (

		<div className="hiAlien">
			<Eye className="hiAlien__eye" />
			<img className="hiAlien__img" src={process.env.PUBLIC_URL + "assets/hiAlien.svg"} alt="petit extraterrestre vert qui fait salut" />
		</div>
		
    )
}

export default HiAlien;
