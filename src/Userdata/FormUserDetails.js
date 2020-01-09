import React, { Component } from 'react'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props; 
        return (
            <div>
                <React.Fragment>
                    <div>Enter User Details</div>
                    <label>First name:
                    <textarea type="text" onChange={handleChange('firstName')} defaultValue={values.firstName}/> 
                    </label>
                    <br></br>
                    <label>Last Name: 
                    <textarea type = "text"  onChange={handleChange('lastName')} defaultValue={values.lastName} /> 
                    </label>
                    <br></br>
                    <label>Email:
                    <textarea type="text" onChange={handleChange('email')} defaultValue={values.email} /> </label>
                    <br></br>
                    <button onClick={this.continue}>Continue</button>
                </React.Fragment>
            </div>
        )
    }
}

export default FormUserDetails
