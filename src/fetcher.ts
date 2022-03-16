import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

export const fetcher = applyCaseMiddleware(axios.create());

export default fetcher;
