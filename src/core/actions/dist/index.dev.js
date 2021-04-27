"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findWeather = exports.savePartialInput = exports.defineMyLocation = void 0;

var _secret = require("../../lib/secret.js");

var _constants = require("../../lib/constants.js");

var _location = _interopRequireDefault(require("../../lib/location.js"));

var _fetchWrap = _interopRequireDefault(require("../../lib/fetchWrap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defineMyLocation = function defineMyLocation() {
  return function (dispatch) {
    dispatch(loading(true));
    (0, _location["default"])().then(function (json) {
      if (json) {
        if (json.message == 'permission not granted') {
          dispatch(saveError(json.message));
        } else {
          var link = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(json.coords.latitude, "&lon=").concat(json.coords.longitude, "&appid=").concat(_secret.ACCESS_KEY);
          (0, _fetchWrap["default"])(link, dispatch, saveData, saveError, loading, 'myLocation');
        }
      } else {
        dispatch(saveError('something wrong'));
      }
    });
  };
};

exports.defineMyLocation = defineMyLocation;

var savePartialInput = function savePartialInput(data) {
  return {
    type: _constants.SAVE_PARTIAL_DATA,
    data: data
  };
};

exports.savePartialInput = savePartialInput;

var findWeather = function findWeather(_ref) {
  var townName = _ref.townName,
      townList = _ref.townList;
  return function (dispatch) {
    if (!townList.some(function (item) {
      return item.name == townName;
    })) {
      dispatch(loading(true));
      var link = "https://api.openweathermap.org/data/2.5/weather?q=".concat(townName, "&appid=").concat(_secret.ACCESS_KEY);
      (0, _fetchWrap["default"])(link, dispatch, saveData, saveError, loading, 'someTown');
    } else {
      dispatch(changeData(townName, townList));
    }
  };
};

exports.findWeather = findWeather;

var loading = function loading(data) {
  return {
    type: _constants.LOADING,
    data: data
  };
};

var saveData = function saveData(data, side) {
  return {
    type: _constants.SAVE_DATA,
    data: data,
    side: side
  };
};

var saveError = function saveError(data) {
  return {
    type: _constants.ERROR_DATA,
    data: data
  };
};

var changeData = function changeData(townName, townList) {
  return {
    type: _constants.CHANGE_DATA,
    data: townList.find(function (item) {
      return item.name == townName;
    })
  };
};