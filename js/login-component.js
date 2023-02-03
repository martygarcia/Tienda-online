import  {API_URL} from '../config/config.js';

class Login extends HTMLElement {

    constructor() {
        super(); 
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
        
        .login {
            width: 400px;
            margin: 16px auto;
            font-size: 16px;
        }
        
        /* Reset top and bottom margins from certain elements */
        .login-header,
        .login p {
            margin-top: 0;
            margin-bottom: 0;
        }
        
        /* The triangle form is achieved by a CSS hack */
        .login-triangle {
            width: 0;
            margin-right: auto;
            margin-left: auto;
            border: 12px solid transparent;
            border-bottom-color: #02A8B1;
        }
        
        .login-header {
            background: #02A8B1;
            padding: 20px;
            font-size: 1.4em;
            font-weight: normal;
            text-align: center;
            text-transform: uppercase;
            color: #fff;
        }
        
        .login-container {
            background: #ebebeb;
            padding: 12px;
        }
        
        /* Every row inside .login-container is defined with p tags */
        .login p {
            padding: 12px;
        }
        
        .login input {
            box-sizing: border-box;
            display: block;
            width: 100%;
            border-width: 1px;
            border-style: solid;
            padding: 16px;
            outline: 0;
            font-family: inherit;
            font-size: 0.95em;
        }
        
        .login input[type="email"],
        .login input[type="password"] {
            background: #fff;
            border-color: #bbb;
            color: #555;
        }
        
        /* Text fields' focus effect */
            .login input[type="email"]:focus,
            .login input[type="password"]:focus {
            border-color: #888;
        }
        
        .login input[type="submit"] {
            background: #02A8B1;
            border-color: transparent;
            color: #fff;
            cursor: pointer;
        }
        
        .login input[type="submit"]:hover {
            background: #17c;
        }
        
        /* Buttons' focus effect */
            .login input[type="submit"]:focus {
            border-color: #05a;
        }
        </style>

        <div class="login">
        <div class="login-triangle"></div>
        
        <h2 class="login-header">Log in</h2>

        <form class="login-container">
            <p><input name="email" type="text" placeholder="Email"></p>
            <p><input name="password" type="password" placeholder="Password"></p>
            <p><input class="send-login-button" type="submit" value="Log in"></p>
        </form>
</div>
        `;	

        let sendLoginButton = this.shadow.querySelector('.send-login-button');

        sendLoginButton.addEventListener('click', event => {

            event.preventDefault(); 
    
            let form = this.shadow.querySelector('form');
            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());
    
            fetch('http://127.0.0.1:8080/api/auth/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formDataJson)
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                sessionStorage.setItem('accessToken', data.accessToken);
                if(data.accessToken){
                    window.location.href = "panel-admin.html";
                }
            }).catch(error => {
                console.log(error);
            });
        });
    }
}

customElements.define('login-', Login);