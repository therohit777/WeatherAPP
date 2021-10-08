import { useHistory } from "react-router-dom";
import { Weather } from "./Weather";

export const Logo = () => {

    const history = useHistory();

    setTimeout(() => {
      history.push("/weather");
    }, 5800);

    return (
      <div className="App1">
      <div className="collect89">
      <div className="logo animate">
      </div>
      <div className="texthead77">
        Weather App
      </div>
      </div> 
      </div>
      
    )
}
