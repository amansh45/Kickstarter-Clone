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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/aman/Downloads/projects/Kickstarter-Clone/components/ContributeForm.js';


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								campaign = (0, _campaign2.default)(_this.props.address);

								console.log(_this.props.address);

								_this.setState({ loading: true });

								_context.prev = 4;
								_context.next = 7;
								return _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;

								console.log(accounts[0]);
								_context.next = 11;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, 'ether')
								});

							case 11:
								_routes.Router.replaceRoute('/campaigns/' + _this.props.address);
								_context.next = 17;
								break;

							case 14:
								_context.prev = 14;
								_context.t0 = _context['catch'](4);

								_this.setState({ errorMessage: _context.t0.message });

							case 17:

								_this.setState({ loading: false, value: '' });

							case 18:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 14]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				label: 'ether', labelPosition: 'right', __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Contribute!'));
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDTDtVQUFRLEFBQ0EsQUFDUDtpQkFGTyxBQUVPLEFBQ2Q7WUFITyxBLEFBR0U7QUFIRixBQUNQLFcsQUFLRDt3RkFBVyxpQkFBQSxBQUFPLE9BQVA7a0JBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNWO2NBQUEsQUFBTSxBQUNBO0FBRkksbUJBRU8sd0JBQVMsTUFBQSxBQUFLLE1BRnJCLEFBRU8sQUFBb0IsQUFDckM7O2dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFFdkI7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FMTixBQUtWLEFBQWMsQUFBVzs7d0JBTGY7d0JBQUE7ZUFRYyxjQUFBLEFBQUssSUFSbkIsQUFRYyxBQUFTOztZQUExQjtBQVJHLDRCQVNUOztnQkFBQSxBQUFRLElBQUksU0FUSCxBQVNULEFBQVksQUFBUzt3QkFUWjt3QkFVSCxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7ZUFDN0IsU0FEa0MsQUFDbEMsQUFBUyxBQUNmO2dCQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FaM0IsQUFVSCxBQUFtQyxBQUVqQyxBQUFtQztBQUZGLEFBQ3hDLFNBREs7O1lBSU47dUJBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BZDlCLEFBY1QsQUFBNkM7d0JBZHBDO0FBQUE7O1lBQUE7d0JBQUE7d0NBZ0JUOztjQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFoQnJCLEFBZ0JULEFBQWMsQUFBb0I7O1lBR25DOztjQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVSxPQUFPLE9BbkJyQixBQW1CVixBQUFjLEFBQXdCOztZQW5CNUI7WUFBQTt3QkFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzJCQXVCRjtnQkFDUjs7MEJBQ0MsQUFBQyx1Q0FBSyxVQUFZLEtBQWxCLEFBQXVCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQS9DLEFBQXFEO2VBQXJEO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx5Q0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3hCO2NBQVUseUJBQUE7WUFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUR4RCxBQUVDO1dBRkQsQUFFTyxTQUFRLGVBRmYsQUFFNkI7ZUFGN0I7aUJBSEYsQUFDQyxBQUVDLEFBSUQ7QUFKQzt3QkFJRCxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFFBQU8sU0FBUyxLQUFBLEFBQUssTUFBM0MsQUFBaUQ7ZUFBakQ7aUJBUEQsQUFPQyxBQUNBO0FBREE7dUJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQUFBO0FBQUE7TUFURixBQUNDLEFBUUMsQUFHRjs7Ozs7QUEzQzJCLEEsQUE4QzdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FtYW4vRG93bmxvYWRzL3Byb2plY3RzL0tpY2tzdGFydGVyLUNsb25lIn0=