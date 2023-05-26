import axios from 'axios';

const getHandler = async (URL: string) => {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: '',
        'ngrok-skip-browser-warning': true,
    };
    const response: any = {
        status: 0,
        data: '',
    };
    await axios
        .get(URL, { headers })
        .then((res) => {
            response.status = 1;
            response.data = res.data;
        })
        .catch((err) => {
            response.status = 0;
            response.data = err.response.data;
        });
    return response;
};

export default getHandler;