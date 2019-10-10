'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/aman/Downloads/projects/Kickstarter-Clone/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: 'Adress of Manager',
				description: 'The manager created this campaign and can create requests to withdraw money',
				style: { overflowWrap: 'break-word' }
			}, {
				header: minimumContribution,
				meta: 'minimum Contribution (wei)',
				description: 'You must contribute at least this much wei to become an approver',
				style: { overflowWrap: 'break-word' }
			}, {
				header: requestsCount,
				meta: 'Number of Requests',
				description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
				style: { overflowWrap: 'break-word' }
			}, {
				header: approversCount,
				meta: 'Number of approvers',
				description: 'Number of people who have already donated to this campaign.',
				style: { overflowWrap: 'break-word' }
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Campaign Balance (ether)',
				description: 'The balance is how much money this campaign has left to spend.',
				style: { overflowWrap: 'break-word' }
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, 'View Requests')))))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								// address of the campaign...
								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVMsQUFBTSxBQUFNOztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7OztnQ0FnQlM7Z0JBQ29FLEtBRHBFLEFBQ3lFO09BRHpFLEFBQ0wsaUJBREssQUFDTDtPQURLLEFBQ0ksaUJBREosQUFDSTtPQURKLEFBQ2EsNkJBRGIsQUFDYTtPQURiLEFBQ2tDLHVCQURsQyxBQUNrQztPQURsQyxBQUNpRCx3QkFEakQsQUFDaUQsQUFHOUQ7O09BQU07WUFDTCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBRSxjQUxHLEFBQ2IsQUFJUSxBQUFnQjtBQUp4QixBQUNDLElBRlk7WUFNVixBQUNNLEFBQ1I7VUFGRSxBQUVJLEFBQ047aUJBSEUsQUFHVyxBQUNiO1dBQU8sRUFBRSxjQVZHLEFBTVYsQUFJSyxBQUFnQjtBQUpyQixBQUNGO1lBSUUsQUFDTSxBQUNSO1VBRkUsQUFFSSxBQUNOO2lCQUhFLEFBR1csQUFDYjtXQUFPLEVBQUUsY0FmRyxBQVdWLEFBSUssQUFBZ0I7QUFKckIsQUFDRjtZQUlFLEFBQ00sQUFDUjtVQUZFLEFBRUksQUFDTjtpQkFIRSxBQUdXLEFBQ2I7V0FBTyxFQUFFLGNBcEJHLEFBZ0JWLEFBSUssQUFBZ0I7QUFKckIsQUFDRjtZQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUR6QixBQUNNLEFBQTRCLEFBQ3BDO1VBRkUsQUFFSSxBQUNOO2lCQUhFLEFBR1csQUFDYjtXQUFPLEVBQUUsY0F6QlgsQUFBYyxBQXFCVixBQUlLLEFBQWdCLEFBSXpCO0FBUkksQUFDRjs7d0NBT0ssQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLGtDQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDRTtBQURGO1dBREQsQUFDQyxBQUNFLEFBQUssQUFFUCxnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQU5ILEFBQ0MsQUFJQyxBQUNDLEFBR0Y7QUFIRTt5QkFHRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQUc7QUFBSDtBQUFBLHNCQUFHLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFmVCxBQUNDLEFBRUMsQUFTQyxBQUNDLEFBQ0MsQUFDQyxBQUFHLEFBUVQ7Ozs7O3dHQTNFNEIsQTs7Ozs7WUFDNUI7QUFDTTtBLG1CQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O2VBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O1lBQTlDO0E7O2tCQUdJLE1BQUEsQUFBTSxNQURULEFBQ2UsQUFDckI7OEJBQXFCLFFBRmYsQUFFZSxBQUFRLEFBQzdCO2tCQUFTLFFBSEgsQUFHRyxBQUFRLEFBQ2pCO3dCQUFlLFFBSlQsQUFJUyxBQUFRLEFBQ3ZCO3lCQUFnQixRQUxWLEFBS1UsQUFBUSxBQUN4QjtrQkFBUyxRQU5ILEFBTUcsQUFBUSxBO0FBTlgsQUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVB3QixBLEFBK0UzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FtYW4vRG93bmxvYWRzL3Byb2plY3RzL0tpY2tzdGFydGVyLUNsb25lIn0=