 // eslint-disable-next-line
import Loader from "react-loader-spinner";
const Load = ()=>{
return(
    <div className="load">
       <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000} />
    </div>
);
}
export default Load;
