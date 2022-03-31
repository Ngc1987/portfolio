import "./HiAlien.scss";
import Eye from '../Eye/Eye';

type Props = {
	className?: string;
}

const HiAlien:React.FC<Props> = ({className}) => {

    return (
		<div className={`hiAlien ${className}`}>
			<Eye className="hiAlien__eye" />
			<img className="hiAlien__img" src={process.env.PUBLIC_URL + "assets/hiAlien.webp"} alt="petit extraterrestre vert qui fait salut" />
		</div>
    )
}

export default HiAlien;
