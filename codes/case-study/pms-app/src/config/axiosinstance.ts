import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:3003',
    timeout: 5000,
    timeoutErrorMessage:'request timed out...'
})
export default axiosInstance