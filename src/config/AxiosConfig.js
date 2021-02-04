import originalAxios from 'axios';


const axios = originalAxios.create({
    baseURL: 'https://localhost:8415',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default { axios };
