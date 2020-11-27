import axios from "../axios";
import { AsyncStorage } from 'react-native';
var genId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};
async function getUniqueId() {
    var uniqueId = await AsyncStorage.getItem('uniqueId')
    if (!uniqueId) {
        uniqueId = genId();
        await AsyncStorage.setItem('uniqueId', uniqueId);
    };
    return uniqueId;
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
        var uniqueId = await getUniqueId();
        return axios.post(`quizz/${quizzId}/answer/${answer}?uniqueId=${uniqueId}`);
    },
    async getResult(testId) {
        var uniqueId = await getUniqueId();
        var path = `result?uniqueId=${uniqueId}`;
        if (testId) path = path + `&testId=${testId}`;
        return axios.get(path);
    }
};

export default testService;