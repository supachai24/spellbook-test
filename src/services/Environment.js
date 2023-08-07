import axios from 'axios';
const baseDomain = 'https://rails-interview.spellbook.tech/api/v1/admin';

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});