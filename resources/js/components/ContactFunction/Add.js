import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            tel : ''
        }

        this.handleNameInputChange = this.handleNameInputChange.bind(this)
        this.handleTelInputChange = this.handleTelInputChange.bind(this)
    }

    handleNameInputChange(event) {
        this.setState({
            name : event.target.value
        })
    }
    
    handleTelInputChange(event) {
        this.setState({
            tel : event.target.value
        })
    }

    handFormSubmit(event) {
        event.preventDefault();
        axios.post('/api/contact/create',{
            name : this.state.name,
            tel : this.state.tel
        }).then(response => {
            this.setState ({
                name : '',
                tel:''
            })
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }

   render(){
     

    return (
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Add Component</div>
                                <div className="card-body">
                                <form onSubmit = {this.handFormSubmit}>
                                    <div className="form-group">
                                        <input type="text" 
                                        required
                                        onChange = {this.handleNameInputChange}
                                        value = {this.name}
                                        className="form-control" placeholder="Enter Name "/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" 
                                         onChange = {this.handleTelInputChange}
                                         value = {this.tel}
                                        className="form-control" placeholder="Phone "/>
                                    </div>
                                
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                                </div>
                        </div>
                    </div>

                </div>
            </div>
    );
   }
}

export default Add;
