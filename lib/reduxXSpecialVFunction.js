import { REDUXX_SPECIAL_KEY } from './tools/constants';


export default Object.freeze( value => ({ [REDUXX_SPECIAL_KEY]: value }) );
