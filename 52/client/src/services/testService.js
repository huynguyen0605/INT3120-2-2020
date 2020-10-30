import axios from "../axios";

const testService = {
    getRecommendTest() {
        return axios.get('recommendTests');
    },
};
1
export default testService;