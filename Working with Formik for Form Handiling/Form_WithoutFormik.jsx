import React from 'react';

class Registerform extends React.Component{
    constructor(){
        super();
        this.state={
            employee:{
                Id:'',
                Name:'',
                Salary:'',
                MobileNo:''
            }
        }
    } 

    changehandler = e=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({employee:{
            ...this.state.employee,
            [name]:value
        }});
        
    }

    submithandler = (e)=>{
        e.preventDefault();
        console.log(this.state.employee);
        alert(this.employee);
    }

    render(){
        return(
            <div class="card  p-3">
                <form>
                    <div >
                        <h3>Employee Register Form</h3>
                    </div>
                <div className="mb-3">
                <label className="form-label">ID :  </label>
                <input type="number"   className="form-control w-50" name="Id" value={this.state.employee.Id} onChange={this.changehandler}/>
                </div>
                <div className="mb-3">
                <label>Name : </label>
                <input type="text"  className="form-control  w-50" name="Name" value={this.state.employee.Name} onChange={this.changehandler}/> 
                </div>
                <div className="mb-3">
                <label>Salary : </label>
                <input type="number" className="form-control  w-50" name="Salary" value={this.state.employee.Salary} onChange={this.changehandler}/> 
                </div>
                <div className="mb-3">
                <label>Mobile No :  </label>
                <input type="number" className="form-control  w-50"  name="MobileNo" value={this.state.employee.MobileNo} onChange={this.changehandler}/>
                </div>
                <button className="btn btn-info mt-2" onClick={this.submithandler}>Submit</button>
                </form>
            </div>
        )
    };
}


export default Registerform;