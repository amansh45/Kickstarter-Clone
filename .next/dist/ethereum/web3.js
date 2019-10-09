'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Taking metamask into account...
// const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0;
if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
	// We are in the browser and metamask is running...
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	// We are on the server *OR* the user is not running metamask...
	// Creating our own provider that is accessing the Rinkeby network using the url...
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/ddadd8e5449f4890a6ff7f6697108fc7');

	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBOztBQUVBLElBQUksWUFBSjtBQUNBLElBQUcsT0FBTyxBQUFQLFVBQWlCLEFBQWpCLGVBQWdDLE9BQU8sT0FBTyxBQUFkLFFBQXNCLEFBQXpELGFBQXNFLEFBQ3JFO0FBQ0E7UUFBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNBO0FBSEQsT0FHTyxBQUNOO0FBQ0E7QUFDQTtLQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxBQUFoQyxBQUFqQixBQUVBOztRQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDQTtBQUdEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW1hbi9Eb3dubG9hZHMvcHJvamVjdHMvS2lja3N0YXJ0ZXItQ2xvbmUifQ==