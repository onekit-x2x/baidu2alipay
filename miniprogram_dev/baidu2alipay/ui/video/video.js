module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-console */
exports.default = {
  props: {
    onekitId: 'id' + new Date().getTime(),
    // onekitId: '' || `id${new Date().getTime()}`,
    onekitClass: '',
    onekitStyle: '',
    onekitVersion: '',
    onekitDataset: null
  },
  data: {},
  onInit: function onInit() {
    if (this.props.onekitId) {
      getApp().onekit_nodes['_' + this.props.onekitId] = this;
    }
    //
    if (this.props.onekitClass) {
      getApp().onekit_nodes['__' + this.props.onekitClass] = this;
    }
  },

  methods: {
    _dataset: function _dataset() {
      if (!this.props.onekitDataset) {
        return {};
      }
      var json = '{' + this.props.onekitDataset + '}';
      return JSON.parse(json);
    },
    _e: function _e(detail, dataset) {
      // currentTarget: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // detail: {
      //   curPercent: parseInt(curPercent, 10)
      // },
      // mark: {},
      // mut: false,
      // target: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // timeStamp: 8888888, //
      // type: 'activeend',
      // _userTap: false
      return {
        detail: detail || {},
        dataset: dataset || {}
      };
    }
  }
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  props: {},
  methods: {
    ui_tap: function ui_tap(e) {
      if (this.props.onTap) {
        this.props.onTap(e);
      }
    },
    ui_touchstart: function ui_touchstart() {
      if (this.props.onTouchstart) {
        this.props.onTouchstart();
      }
    },
    ui_touchmove: function ui_touchmove() {
      if (this.props.onTouchmove) {
        this.props.onTouchmove();
      }
    },
    ui_touchcancel: function ui_touchcancel() {
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel();
      }
    },
    ui_touchend: function ui_touchend() {
      if (this.props.onTouchend) {
        this.props.onTouchend();
      }
    },
    ui_longpress: function ui_longpress() {
      if (this.props.onLongpress) {
        this.props.onLongpress();
      }
    },
    ui_longtap: function ui_longtap() {
      if (this.props.onLongtap) {
        this.props.onLongtap();
      }
    },
    ui_transitionend: function ui_transitionend() {
      if (this.props.onTransitionend) {
        this.props.onTransitionend();
      }
    },
    ui_animationstart: function ui_animationstart() {
      if (this.props.onAnimationstart) {
        this.props.onAnimationstart();
      }
    },
    ui_animationiteration: function ui_animationiteration() {
      if (this.props.onAnimationiteration) {
        this.props.onAnimationiteration();
      }
    },
    ui_animationend: function ui_animationend() {
      if (this.props.onAnimationend) {
        this.props.onAnimationend();
      }
    },
    ui_touchforcechange: function ui_touchforcechange() {
      if (this.props.onTouchforcechange) {
        this.props.onTouchforcechange();
      }
    }
  }
};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("oneutil");

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(0);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _baidu_behavior = __webpack_require__(1);

var _baidu_behavior2 = _interopRequireDefault(_baidu_behavior);

var _VideoContext_behavior = __webpack_require__(38);

var _VideoContext_behavior2 = _interopRequireDefault(_VideoContext_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  mixins: [_onekit_behavior2.default, _baidu_behavior2.default, _VideoContext_behavior2.default],
  data: {
    mobilenetHintType: 1,
    currentTime: 0,
    danmus: [[], []]
  },
  props: {
    src: '',
    //
    title: '',
    initialTime: null,
    controls: true,
    autoplay: false,
    loop: false,
    muted: false,
    objectFit: 'contain',
    poster: '',
    pagGesture: false,
    direction: null,
    //
    showProgress: true,
    showFullscreenBtn: true,
    enableProgressGesture: true,
    danmuList: [],
    //
    danmuBtn: false,
    //
    enableDanmu: false,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    showMuteBtn: true,
    //
    showNoWifiTip: true,
    //
    vslideGesture: false,
    vslideGestureInFullscreen: true,
    enablePlayGesture: false,
    //
    showRateBtn: false,
    showVslideBtnInFullscreen: true,
    silentPlay: false,
    duration: null
  },
  didMount: function didMount() {
    var _this = this;

    my.createSelectorQuery().select('.onekit-video').boundingClientRect().exec(function (rect) {
      _this.setData({
        rect: rect[0]
      });
    });
    //
    var danmuDict = {};
    this.props.danmuList.forEach(function (danmu) {
      if (!danmuDict[danmu.time]) {
        danmuDict[danmu.time] = [];
      }
      danmuDict[danmu.time].push(danmu);
    });
    this.data.danmuDict = danmuDict;
    //
    if (this.props.enableProgressGesture) {
      this.data.mobilenetHintType = 1 || false;
    } else {
      this.data.mobilenetHintType =  false || 2;
    }
    this.setData(this.data);
  },

  methods: {
    video_play: function video_play() {
      if (this.props.onPlay) {
        this.props.onPlay();
      }
    },
    video_pause: function video_pause() {
      if (this.props.onPause) {
        this.props.onPause();
      }
    },
    video_end: function video_end() {
      if (this.props.onEnded) {
        this.props.onEnded();
      }
    },
    video_timeupdate: function video_timeupdate(e) {
      var currentTime = Math.ceil(e.detail.currentTime);
      //
      if (currentTime !== this.data.currentTime) {
        var _setData;

        this.data.currentTime = currentTime;
        var AorB = currentTime % 2;
        var danmus = this.data.danmuDict[currentTime];
        var key = 'danmus[' + AorB + ']';
        console.log(AorB, danmus, key);
        this.setData((_setData = {}, _setData[key] = danmus || [], _setData));
      }
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(e.detail);
      }
    },
    video_fullscreenchange: function video_fullscreenchange(e) {
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange(e.detail);
      }
    },
    video_waiting: function video_waiting() {
      if (this.props.onLoading) {
        this.props.onLoading({});
      }
    },
    video_error: function video_error() {
      if (this.props.onError) {
        this.props.onError({});
      }
    },

    //
    video_renderstart: function video_renderstart(e) {
      console.log('[video.renderstart]', e);
      //   if (this.props.onLoadedmetadata) {
      //     this.props.onLoadedmetadata({})
      //   }
    }
  }
}); /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _oneutil = __webpack_require__(2);

module.exports = {
  methods: {
    sendDanmu: function sendDanmu(wx_object) {
      var _this = this;

      if (!wx_object) {
        return;
      }
      var wx_text = wx_object.text;
      var wx_color = wx_object.color;
      var wx_success = wx_object.success;
      var wx_fail = wx_object.fail;
      var wx_complete = wx_object.complete;
      wx_object = null;
      //
      (0, _oneutil.PROMISE)(function (SUCCESS, FAIL) {
        var _this$setData;

        if (_this.data.currentTime <= 0) {
          return;
        }
        if (!wx_text) {
          FAIL({
            errMsg: 'sendDanmu:error'
          });
          return;
        }
        var time = _this.data.currentTime + 1;
        var danmu = {
          text: wx_text,
          color: wx_color
        };
        var danmus = _this.data.danmuDict[time] || [];
        danmus.push(danmu);
        var key = 'danmuDict[\'' + time + '\']';
        _this.setData((_this$setData = {}, _this$setData[key] = danmus, _this$setData));
        SUCCESS({
          errMsg: 'sendDanmu:ok'
        });
      }, wx_success, wx_fail, wx_complete);
    }
  }
}; /* eslint-disable camelcase */
/* eslint-disable no-console */

/***/ })

/******/ });