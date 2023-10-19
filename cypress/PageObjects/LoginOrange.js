class Login{

    txtUserName = "input[name='username']";
    txtPassword = "input[name='password']";
    btnLogin    = "button.orangehrm-login-button";

     setUserName(UserName){
        cy.get(this.txtUserName).type(UserName);
    }

     setPassword(Password){
        cy.get(this.txtPassword).type(Password);
    }

     clickLogin(){
        cy.get(this.btnLogin).click();
    }

}
export default Login;