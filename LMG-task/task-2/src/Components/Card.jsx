
const Card = (props)=>{
    return(
        <div key={props.idx.id} className="card">
            <img src={props.idx.avatar} alt="image" className="avatar"/>
            <div key={props.idx.id} className="cardcontent">
                <p className="name">{props.idx.first_name} {props.idx.last_name}</p>
                <p className="email">{props.idx.email}</p>
                <p className="id">ID: {props.idx.id}</p>
            </div>
        </div>
    );
}
export default Card;
