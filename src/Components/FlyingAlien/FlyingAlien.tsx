import "./FlyingAlien.scss";

const FlyingAlien:React.FC = () => {

    return (

		<div className="flyingAlien" data-testid="flyingAlien" >
			<img className="flyingAlien__img" 
				src={process.env.PUBLIC_URL + "assets/flyingAlien.webp"} 
				alt="Alien in a flying saucer" />
		</div>
		
    )
}

export default FlyingAlien;
