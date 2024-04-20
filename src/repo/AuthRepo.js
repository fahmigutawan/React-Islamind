import axios from "axios"

class AuthRepoImpl {
    async login(
        email,
        password
    ) {
        return await axios.post(
            'https://devel0-filkom.ub.ac.id/auth/login',
            {
                username: email,
                password: password
            }
        )
    }

    setLocalToken(token) { localStorage.setItem('token', token) }

    setSessionToken(token) { sessionStorage.setItem('token', token) }

    getToken() {
        return (sessionStorage.getItem('token') ?? localStorage.getItem('token')) ?? ''
    }
}

export const AuthRepo = new AuthRepoImpl()