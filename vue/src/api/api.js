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
    }
}