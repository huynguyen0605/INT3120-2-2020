import axios from "../axios";

const testService = {
    getTest(type) {
        const path = type ? `test?type=${type}` : `test`;
        return axios.get(path);
    },
    getQuizz(testId) {
        return axios.get(`quizz?testId=${testId}`);
    },
    submitQuizz(quizzId, answer) {
        return axios.post(`quizz/${quizzId}/answer/${answer}`);
    }
};

export default testService;