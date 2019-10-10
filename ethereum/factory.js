import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xb5BE476bd065Dd963a6E0280a7589526d49C85Fb'
);

export default instance;