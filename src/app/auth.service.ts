export class AuthService {
    loggedIn:boolean;
    token:string;

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