'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

// Taking metamask into account...
// const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0;

var waitingFunc = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return ethereum.enable();

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function waitingFunc() {
        return _ref.apply(this, arguments);
    };
}();

if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
    if (window.ethereum) {
        try {
            // Request account access if needed
            waitingFunc();
            // Acccounts now exposed
            web3 = new _web2.default(ethereum);
        } catch (error) {
            // User denied account access...
            console.log('denied by the user');
        }
    } else if (window.web3) {
        web3 = new _web2.default(window.web3.currentProvider);
    }
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/ddadd8e5449f4890a6ff7f6697108fc7');
    web3 = new _web2.default(provider);
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

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3YWl0aW5nRnVuYyIsImV0aGVyZXVtIiwiZW5hYmxlIiwid2luZG93IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7OztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQU0sMEJBQUE7d0ZBQWMsbUJBQUE7c0VBQUE7c0JBQUE7aURBQUE7eUJBQUE7d0NBQUE7K0JBQ2IsU0FBUyxBQUFULEFBRGE7O3lCQUFBO3lCQUFBO3dDQUFBOztBQUFBO29CQUFBO0FBQWQ7O2tDQUFBO2dDQUFBO0FBQUE7QUFBTjs7QUFJQSxJQUFHLE9BQU8sQUFBUCxVQUFpQixBQUFqQixlQUFnQyxPQUFPLE9BQU8sQUFBZCxRQUFzQixBQUF6RCxhQUFzRSxBQUNyRTtRQUFJLE9BQU8sQUFBWCxVQUFxQixBQUNkO1lBQUksQUFDQTtBQUNBO0FBQ0E7QUFDQTttQkFBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFMRCxVQUtFLE9BQU8sQUFBUCxPQUFjLEFBQ1o7QUFDQTtvQkFBUSxBQUFSLElBQVksQUFBWixBQUNIO0FBQ0o7QUFWSixXQVVVLElBQUksT0FBTyxBQUFYLE1BQWlCLEFBQ3BCO2VBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUVKO0FBZkQsT0FlTyxBQUNOO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQWdDLEFBQWhDLEFBQWpCLEFBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7OztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW1hbi9Eb3dubG9hZHMvcHJvamVjdHMvS2lja3N0YXJ0ZXItQ2xvbmUifQ==