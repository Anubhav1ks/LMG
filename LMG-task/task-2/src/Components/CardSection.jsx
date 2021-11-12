 // eslint-disable-next-line
import Card from './Card';
import Load from './Load';
const CardSection = (props)=>{

    return(
        <div className="cardsection">
        {props.loading?
        <Load/> :
        props.users.map((idx)=>{
          return <Card key={idx.id} idx={idx}/>
        })
        }
        </div>
    );
}
export default CardSection;
