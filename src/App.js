import React,{Component} from 'react';
import './App.css';

class  App extends Component {
  constructor(){
    super()
    this.state ={
      note:"",
      notesArray :[]
    }
  }
  changeevent =(e) =>{
    this.setState({
      note :e.target.value
    })
  }
  add=()=>{
    let newnotearray = this.state.notesArray
    newnotearray.push(this.state.note)
    this.setState({
      notesArray:newnotearray
    })
    console.log(this.refs.notecontent)
    this.refs.notecontent.focus()
  }
  delete = (index)=>{
    let newnotearray = this.state.notesArray
    newnotearray.splice(index,1)
    this.setState({
      notesArray:newnotearray
    })
  }
  render(){
    let notes = this.state.notesArray
    let notesList = notes.length? notes.map((val,key)=> <li key={key} onClick={()=>this.delete(key)}>{val}</li>): <p>No notes is exist</p>
    return (
      <div className="App">
       <h1>Todo-App</h1>
       {notesList}
       <button onClick={this.add}>+</button>
       <div>
         <input type="text" id="note" ref="notecontent" value={this.state.note} onChange={(e)=> this.changeevent(e)}/>
       </div>
      </div>
    );
  }

}

export default App;
