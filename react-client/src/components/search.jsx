class Search extends React.Component{
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
                    callback(err,null)
                }else{
                    callback(result)
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

export default Search;