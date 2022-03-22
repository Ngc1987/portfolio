import "./FlyingAlien.scss";
import Eye from '../Eye/Eye';

const FlyingAlien:React.FC = () => {

    return (

		<div className="flyingAlien">
			{/* <Eye className="flyingAlien__eye" size="small" /> */}
			<img className="flyingAlien__img" src={process.env.PUBLIC_URL + "assets/flyingAlien.webp"} alt="petit extraterrestre vert qui fait salut" />
		</div>
		
    )
}

export default FlyingAlien;
