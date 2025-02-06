import axios from 'axios';

export default axios.create({
  baseURL: 'http://ec2-3-111-32-59.ap-south-1.compute.amazonaws.com:8080/FarmersMarketplace/',
  headers: {
    'Content-Type': 'application/json',
  },
});
