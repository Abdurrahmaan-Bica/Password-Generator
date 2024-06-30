import React from 'react';
import './RandomPasswordGenerator.css'

class RandomPasswordGenerator extends React.Component{

    state = {
        currentPassword: "",
        lengthOfThePassword:0,
        detailsAboutPassword:0
        

    }

    generateNewPassword = ()=>{
            const lengthOfThePassword = 12;
            const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const smallLetters = "abcdefghijklmnopqrstuvwxyz";
            const numbers = "0123456789";
            const specialCharacters = "!@#$_+=]-*£?[<€{|`]}%)^";
            let  generatedPassword = "";
            const allCharacters = capitalLetters + smallLetters + numbers + specialCharacters;
            for (let i = 0; i < lengthOfThePassword;i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            generatedPassword += allCharacters[randomIndex];
            }
            
            this.setState({currentPassword:generatedPassword,lengthOfThePassword:generatedPassword.length,detailsAboutPassword:1})
    }
    clearInput = () =>{
        this.setState({currentPassword:"",lengthOfThePassword:0,detailsAboutPassword:0})
    }

    render(){
        return(
            <div>
                <h3><i>Unique passwords are your first line of</i> defense.</h3> 
                <br></br>
                <input class="form-control" type="text" value= {this.state.currentPassword} readonly/>
                
                <br></br>
                <h6> Password has: </h6>
                <h6> - a length of {this.state.lengthOfThePassword} characters</h6>
                <h6> - at least {this.state.detailsAboutPassword} lower case letter</h6>
                <h6> - at least {this.state.detailsAboutPassword} upper case letter</h6>
                <h6> - a minimum of {this.state.detailsAboutPassword} special character</h6>
                <br></br>  
                <div class="d-grid gap-2 d-md-flex justify-content-center">
                    <button class="btn btn-light me-md-2" type="button" onClick={this.generateNewPassword}><b>Generate</b></button>
                    <button class="btn btn-light" type="button"  onClick={this.clearInput}><b>Delete</b></button>
                </div>
                
               
  
            </div>
        )
    }

}
export default RandomPasswordGenerator;