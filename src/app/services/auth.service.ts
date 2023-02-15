export class AuthService {
    loggedIn:boolean = localStorage.getItem('token') == null ? false : true;
    token:string = localStorage.getItem('token') == null ? null : localStorage.getItem('token');

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=>{
                    resolve(this.loggedIn)
                },800);
            }
        )

        return promise;
    }

    setToken(token:string){
        localStorage.setItem('token',token);
        this.token = token;
        this.loggedIn = true;
    }

    logout(){
        localStorage.removeItem('token');
        this.loggedIn = false;
    }
}