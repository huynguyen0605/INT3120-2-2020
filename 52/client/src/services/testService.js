import axios from "../axios";
import { AsyncStorage } from 'react-native';
var genId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};
const testService = {
    getTest(type) {
        const path = type ? `test?type=${type}` : `test`;
        return axios.get(path);
    },
    getQuizz(testId) {
        return axios.get(`quizz?testId=${testId}`);
    },
    async submitQuizz(quizzId, answer) {
        var uniqueId = await AsyncStorage.getItem('uniqueId')
        if (!uniqueId) {
            uniqueId = genId();
            await AsyncStorage.setItem('uniqueId', uniqueId);
        };
        return axios.post(`quizz/${quizzId}/answer/${answer}?uniqueId=${uniqueId}`);
    }
};

export default testService;