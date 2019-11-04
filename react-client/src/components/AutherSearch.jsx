import { callbackify } from "util";

class search extends React.Component{
    constructor(props){
        super(props);
        this.state={
        result:[]
        }
        $.ajax({
            url:'/search',
            type:'GET',
            data:data,
            success:(err,result)=>{
                if(err){
                    callbackify(err,null)
                }else{
                    callbackify(result)
                    //// i need to itarate over the db
                }
            }
        })
    }
    
   
    render(){
        return(
            <div>
                <input type="text" name="auther" />
                <input type="submit" name="submit"/> 
                <table>
                    <tr>
                        <td></td>
                    </tr>
                </table>
            </div>
          
        )
    }
}
ReactDOM.render(<search/>,document.getElementById(''))