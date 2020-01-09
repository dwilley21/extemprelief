import React, { Component } from 'react'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevstep(); 
    }
    render() {
        const { values, handleChange } = this.props; 
        return (
            <div>
                <React.Fragment>
                    <div>Enter Personal Details</div>
                    <label> Occupation:
                    <textarea type="text" onChange={handleChange('occupation')} defaultValue={values.occupation}/> 
                    </label>
                    <br></br>
                    <label>City
                    <textarea type = "text"  onChange={handleChange('city')} defaultValue={values.city} /> 
                    </label>
                    <br></br>
                    <label>Bio
                    <textarea type="text" onChange={handleChange('bio')} defaultValue={values.bio} /> </label>
                    <br></br>
                    <button onClick={this.continue}>Continue</button>
                    <br></br>
                    <button onClick={this.back}>Back</button>
                </React.Fragment>
            </div>
        )
    }
}

export default FormPersonalDetails
