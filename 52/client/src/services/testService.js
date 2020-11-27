import axios from "../axios";

const testService = {
    getRecommendTest() {
        return axios.get('test');
    },
    getQuizz(testId) {
        return axios.get(`quizz?testId=${testId}`)
    }
};

export default testService;