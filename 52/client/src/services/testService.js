import axios from "../axios";

const testService = {
    getRecommendTest() {
        return axios.get('test');
    },
    getQuizz(testId) {
        return axios.get(`quizz?testId=${testId}`);
    },
    submitQuizz(quizzId, answer) {
        return axios.post(`quizz/${quizzId}/answer/${answer}`);
    }
};

export default testService;