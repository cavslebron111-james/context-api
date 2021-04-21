import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component{
  state = {
        first:'ruel',
        last:'agnes',
        age:30,
        imge: './product-1.png'

  }

 render(){
  return(
  <MyContext.Provider value = {{
    stat:this.state,
    growAYearOlder : ()=> this.setState({
      age:this.state.age + 1
    
    

    })
  }}>
  {this.props.children}
</MyContext.Provider>
    )

 }

}


const Family = (props)=>(
<div className='family'>
<Person />
</div>
)






class Person extends Component {
   render(){
 
 return(
<div className = 'pers'>
<MyContext.Consumer>
{(context) => (
<React.Fragment>
<p>how old are you {context.stat.age}</p>
<p> agr:  {context.stat.age}</p>
<p> firstname: {context.stat.first}</p>
<button onClick={context.growAYearOlder}/>
<img src ={context.stat.imge} alt = "logoglo"/>
<img src ={context.stat.imge} alt = "logogldo"/>






</React.Fragment>

)}
</MyContext.Consumer>
</div>

);
}
}



class App extends Component {

  
render(){

 return(

<MyProvider>

<div>
<p>im the app </p>
<Family />



</div>
</MyProvider>
);
}
}




  




export default App;
