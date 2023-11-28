import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers:{
        Authorization:'bearer xPoFBUGCXh8nirbD2tgWqij5TU-oLykA_cQq1oxArdkNTUbIeSWnsf4CGfQo0IMS2cgFPACswgAX4U4IeakrrUa2pgYwxqTkT7pP2V5RbcRyk1NAR9GouE1pbURfZXYx'

    }
});