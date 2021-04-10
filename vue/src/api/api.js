import axios from 'axios';

let Axios = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default {
    /**
     * Pass TRUE if you want single type questions
     * @param {boolean} type
     */
    getQuestions(type) {
        return Axios.get(`/questions${type ? '/single' : ''}`);
    },

    /**
     * Pass TRUE if you want single type answer
     * @param {boolean} type 
     */
    getAnswer(type) {
        return Axios.get(`/answer${type ? '/single' : ''}`);
    },

    /**
     * Pass username and password of the user
     * @param {Object} user 
     */
    login(user) {
        return Axios.post('/login', user);
    },

    /**
     * Pass username, email, password and password_confirmation to register a user
     * @param {Object} user 
     */
    register(user) {
        return Axios.post('/register', user);
    },

    logout() {
        return Axios.post('/logout');
    },

    profile(token) {
        return Axios.get('/profile', token);
    },
    /**
     * Get csrf token
     */
    csrf() {
        return Axios.get('csrf-cookie')
    }
}