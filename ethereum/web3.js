import Web3 from 'web3';

// Taking metamask into account...
// const web3 = new Web3(window.web3.currentProvider);

let web3;

const waitingFunc = async() => {
	await ethereum.enable();
};

if(typeof window != 'undefined' && typeof window.web3 != 'undefined') {
	if (window.ethereum) {
        try {
            // Request account access if needed
            waitingFunc();
            // Acccounts now exposed
            web3 = new Web3(ethereum);
        } catch (error) {
            // User denied account access...
            console.log('denied by the user');
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    }

} else {
	const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/ddadd8e5449f4890a6ff7f6697108fc7');
	web3 = new Web3(provider);
}

// if(typeof window != 'undefined' && typeof window.web3 != 'undefined') {
// 	// We are in the browser and metamask is running...
// 	web3 = new Web3(window.web3.currentProvider);
// } else {
// 	// We are on the server *OR* the user is not running metamask...
// 	// Creating our own provider that is accessing the Rinkeby network using the url...
// 	const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/ddadd8e5449f4890a6ff7f6697108fc7');
// 	web3 = new Web3(provider);
// }

export default web3;