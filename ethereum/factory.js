import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xed4C1a64e8b75685c25B2bBdeAc33012c4d747B4'
);

export default instance;