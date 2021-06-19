import Checkbox from '@material-ui/core/Checkbox';

const Filterbox = () => {

    const handleChange = () => {
        console.log("change");
    }
    return ( 
        <div>
            <ul style={{listStyle:"none"}}>
                <li><h2>Brands</h2></li>
                <li>clear all </li>
                <li>nike <Checkbox  onChange={handleChange} name="size" /></li>
                <li>puma <Checkbox  onChange={handleChange} name="size" /></li>
                <li>allen solly <Checkbox  onChange={handleChange} name="size" /></li>
                <li>peter england <Checkbox  onChange={handleChange} name="size" /></li> 
            </ul>
        </div>
     );
}
 
export default Filterbox;
