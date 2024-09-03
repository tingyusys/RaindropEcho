const fs = require('fs');


function e(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
            n.push.apply(n, r)
    }
    return n
}

function t(t) {
    for (var n = 1; arguments.length > n; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(r), !0).forEach((function (e) {
            a(t, e, r[e])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }
        ))
    }
    return t
}

function n(e) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    }
        : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(e)
}

function r(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}

function i(e, t) {
    for (var n = 0; t.length > n; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, k(r.key), r)
    }
}

function o(e, t, n) {
    return t && i(e.prototype, t),
        n && i(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
}

function a(e, t, n) {
    return (t = k(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}

function s(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && u(e, t)
}

function c(e) {
    return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }
        ,
        c(e)
}

function u(e, t) {
    return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t,
            e
    }
        ,
        u(e, t)
}

function l(e, t) {
    if (null == e)
        return {};
    var n, r, i = function (e, t) {
        if (null == e)
            return {};
        var n, r, i = {}, o = Object.keys(e);
        for (r = 0; o.length > r; r++)
            0 > t.indexOf(n = o[r]) && (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; o.length > r; r++)
            0 > t.indexOf(n = o[r]) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function f(e) {
    if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function d(e) {
    var t = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
            }
            ))),
                !0
        } catch (e) {
            return !1
        }
    }();
    return function () {
        var n, r = c(e);
        if (t) {
            var i = c(this).constructor;
            n = Reflect.construct(r, arguments, i)
        } else
            n = r.apply(this, arguments);
        return function (e, t) {
            if (t && ("object" == typeof t || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return f(e)
        }(this, n)
    }
}

function h(e, t) {
    return p(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, i, o, a, s = [], c = !0, u = !1;
            try {
                if (o = (n = n.call(e)).next,
                    0 === t) {
                    if (Object(n) !== n)
                        return;
                    c = !1
                } else
                    for (; !(c = (r = o.call(n)).done) && (s.push(r.value),
                        s.length !== t); c = !0)
                        ;
            } catch (e) {
                u = !0,
                    i = e
            } finally {
                try {
                    if (!c && null != n.return && (a = n.return(),
                        Object(a) !== a))
                        return
                } finally {
                    if (u)
                        throw i
                }
            }
            return s
        }
    }(e, t) || m(e, t) || _()
}

function v(e) {
    return function (e) {
        if (Array.isArray(e))
            return y(e)
    }(e) || g(e) || m(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function p(e) {
    if (Array.isArray(e))
        return e
}

function g(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e)
}

function m(e, t) {
    if (e) {
        if ("string" == typeof e)
            return y(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
    }
}

function y(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); t > n; n++)
        r[n] = e[n];
    return r
}

function _() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function k(e) {
    var t = function (e, t) {
        if ("object" != typeof e || null === e)
            return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r)
                return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" == typeof t ? t : t + ""
}

var w, b, T, S = {
    app_id: "",
    app_key: "",
    env: "prod",
    region: "sg",
    region_code: "",
    session_cutting_time: 30,
    sdk_auto_track: !0,
    is_single_page_app: !0,
    is_track_visittime: !0,
    log_level: "info",
    reported_platforms: ["web"],
    pageview: {
        delay: 100,
        track_pageview_type: "auto",
        track_ignore: function () {
            return !1
        },
        is_trigger_pageload: !0,
        watch_utm: !0,
        url_alias: {}
    },
    exposure: {
        once: !0,
        duration_threshold: 300,
        intersection_threshold: 1,
        root_margin: "0px"
    },
    develop: {
        catch_js_error: !1,
        performance: !1,
        errorRatio: .2,
        errorSplit: 500
    },
    app_version: "",
    is_cross_subdomain: !1,
    is_print_header: !1,
    event_rule: [],
    event_blacklist: [],
    project: "default",
    quarantine_report: !1
}, E = {
    balance: !0,
    flush: !0,
    is_print_header: !1,
    interval_time: 1,
    max_batch_events: 10,
    max_request_queue: 10,
    fail_timeout: 5,
    fail_retry_count: 1
};
!function (e) {
    e[e.INIT = 0] = "INIT",
        e[e.FETCH_CONFIG = 1] = "FETCH_CONFIG",
        e[e.READY = 2] = "READY"
}(w || (w = {})),
    function (e) {
        e.TRACK = "track",
            e.DEFERRED = "deferred",
            e.REQUEST = "request",
            e.TRACK_PENDING = "track-pending"
    }(b || (b = {})),
    function (e) {
        e.BALANCE = "balance",
            e.BALANCE_REQ = "balance_req"
    }(T || (T = {}));
var C, I = [b.TRACK], O = {
    eventId: "$page_view",
    eventGroup: "$track_page_view"
}, A = {
    eventId: "$page_duration",
    eventGroup: "$track_page_view"
}, x = {
    eventId: "$page_load",
    eventGroup: "$track_page_load"
}, D = {
    eventId: "$catch_error",
    eventGroup: "$track_develop"
}, P = {
    eventId: "$track_version",
    eventGroup: "$track_develop"
}, $ = {
    clickId: "$web_click",
    stayId: "$web_stay",
    eventGroup: "$track_heatmap"
}, j = {
    eventId: "$",
    eventGroup: "$track_sensors"
};
!function (e) {
    e.DOMESTIC = "https://static-common.heytapdownload.com",
        e.FOREIGN = "https://static-common.heytapdl.com",
        e.INTRANET = "https://static-common.oppoer.me",
        e.FILES_COMMON = "common-files",
        e.OTRACK = "otrack"
}(C || (C = {}));
var L = {
    utm: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
    search: ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
    social: ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
    keyword: {
        baidu: ["wd", "word", "kw", "keyword"],
        google: ["q"],
        bing: ["q"],
        yahoo: ["p"],
        sogou: ["query", "keyword"],
        so: ["q"],
        sm: ["q"]
    }
}
    , N = Object.prototype.toString
    , R = {
        isObject: function (e) {
            return null != e && "[object Object]" == N.call(e)
        },
        isDate: function (e) {
            return "[object Date]" == N.call(e)
        },
        isArray: function (e) {
            return Array.isArray && Array.isArray(e) || "[object Array]" === N.call(e)
        },
        isFunction: function (e) {
            return "[object Function]" == N.call(e)
        },
        getType: function (e) {
            return N.call(e).slice(8, -1)
        }
    }
    , U = {
        addEvent: function (e, t, n) {
            e && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n)
        },
        removeEvent: function (e, t, n) {
            e && (e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null)
        }
    };

function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
            n.push.apply(n, r)
    }
    return n
}

function q(e) {
    for (var t = 1; arguments.length > t; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? M(Object(n), !0).forEach((function (t) {
            W(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}

function F(e) {
    return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    }
        : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        F(e)
}

function H(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}

function V(e, t) {
    for (var n = 0; t.length > n; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, X(r.key), r)
    }
}

function G(e, t, n) {
    return t && V(e.prototype, t),
        n && V(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
}

function W(e, t, n) {
    return (t = X(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}

function Q(e, t) {
    if (null == e)
        return {};
    var n, r, i = function (e, t) {
        if (null == e)
            return {};
        var n, r, i = {}, o = Object.keys(e);
        for (r = 0; o.length > r; r++)
            0 > t.indexOf(n = o[r]) && (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; o.length > r; r++)
            0 > t.indexOf(n = o[r]) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function B(e, t) {
    return function (e) {
        if (Array.isArray(e))
            return e
    }(e) || function (e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, i, o, a, s = [], c = !0, u = !1;
            try {
                if (o = (n = n.call(e)).next,
                    0 === t) {
                    if (Object(n) !== n)
                        return;
                    c = !1
                } else
                    for (; !(c = (r = o.call(n)).done) && (s.push(r.value),
                        s.length !== t); c = !0)
                        ;
            } catch (e) {
                u = !0,
                    i = e
            } finally {
                try {
                    if (!c && null != n.return && (a = n.return(),
                        Object(a) !== a))
                        return
                } finally {
                    if (u)
                        throw i
                }
            }
            return s
        }
    }(e, t) || z(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function K(e) {
    return function (e) {
        if (Array.isArray(e))
            return J(e)
    }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e)
    }(e) || z(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function z(e, t) {
    if (e) {
        if ("string" == typeof e)
            return J(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(e, t) : void 0
    }
}

function J(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); t > n; n++)
        r[n] = e[n];
    return r
}

function X(e) {
    var t = function (e, t) {
        if ("object" !== n(e) || null === e)
            return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var i = r.call(e, t || "default");
            if ("object" !== n(i))
                return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" === n(t) ? t : t + ""
}

var Y = !0
    , Z = "info"
    , ee = {
        debug: 0,
        info: 10,
        warn: 100,
        error: 1e3
    };

function te(e) {
    try {
        return JSON.stringify(e, null, "  ")
    } catch (t) {
        return fe(e)
    }
}

var ne = function (e) {
    return ["string", "number", "boolean", "undefined", "null"].indexOf(F(e)) > -1
}


re = function () {
    function e(t) {
        H(this, e),
            this.namespace = "",
            this.isShowMills = !1,
            this.isShowLog = !0,
            this.info = this.genLog("info"),
            this.warn = this.genLog("warn"),
            this.error = this.genLog("error"),
            this.debug = this.genLog("debug"),
            t && this.setLogConfig(t)
    }

    return G(e, [{
        key: "setLogConfig",
        value: function (e) {
            var t = e.isShowLog
                , n = e.isShowMills
                , r = void 0 !== n && n
                , i = e.namespace
                , o = void 0 === i ? "" : i;
            this.isShowLog = void 0 === t || t,
                this.isShowMills = r,
                this.namespace = o
        }
    }, {
        key: "config",
        get: function () {
            return {
                namespace: this.namespace,
                isShowMills: this.isShowMills,
                isShowLog: this.isShowLog
            }
        }
    }, {
        key: "clone",
        value: function (t) {
            return new e(q(q({}, this.config), t))
        }
    }, {
        key: "genLog",
        value: function (e) {
            var t = this;
            return function () {
                var n = !1;
                try {
                    var r;
                    n = JSON.parse((null === (r = localStorage) || void 0 === r ? void 0 : r.getItem("__otrack_debug")) || "false")
                } catch (e) {
                }
                if (n && (Y = !0),
                    !(Y && t.isShowLog || -1 !== ["warn", "error"].indexOf(e)))
                    return !1;
                if (ee[Z] > ee[e])
                    return !1;
                for (var i = arguments.length, o = Array(i), a = 0; i > a; a++)
                    o[a] = arguments[a];
                var s = o.map((function (e, t, n) {
                    return R.isObject(e) ? te(e) : R.isArray(e) ? e.every((function (e) {
                        return ne(e) || R.isArray(e)
                    }
                    )) ? e : te(e) : ne(e) && t !== n.length - 1 ? e + "" : e
                }
                ))
                    , c = new Date;
                "" !== t.namespace && s.unshift(t.namespace),
                    s.unshift("".concat(function (e, t) {
                        var n = {
                            "M+": e.getMonth() + 1,
                            "d+": e.getDate(),
                            "h+": e.getHours(),
                            "m+": e.getMinutes(),
                            "s+": e.getSeconds(),
                            "q+": Math.floor((e.getMonth() + 3) / 3),
                            S: e.getMilliseconds()
                        };
                        for (var r in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))),
                            n)
                            RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
                        return t
                    }(c, "yyyy-MM-dd hh:mm:ss" + (t.isShowMills ? ".S" : ""))));
                var u = s.filter((function (e) {
                    return "" !== e
                }
                ));
                if ("object" === (void 0 === console ? "undefined" : F(console)) && console[e])
                    try {
                        return console[e].call(console, u.join(", "))
                    } catch (t) {
                        console[e](u[0])
                    }
            }
        }
    }]),
        e
}();

re.disableAllLog = function () {
    Y = !1,
        re.disableAllLog = function () {
        }
}
    ,
    re.setLogLevel = function (e) {
        ["info", "debug", "error", "warn"].includes(e) && (Z = e)
    };
var ie = new re
    , oe = "0123456789"
    , ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    , se = "~!@#$%^*()_+-=[]{}|;:,./<>?";

function ce() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8
        , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            specials: !1,
            letters: !0,
            numbers: !0
        };
    e || (e = 8),
        t || (t = {});
    var n = ""
        , r = "";
    for (!0 === t ? n = oe + ae + se : "string" == typeof t ? n = t : (!1 !== t.numbers && (n += "string" == typeof t.numbers ? t.numbers : oe),
        !1 !== t.letters && (n += "string" == typeof t.letters ? t.letters : ae),
        t.specials && (n += "string" == typeof t.specials ? t.specials : se)); e > 0;)
        e--,
            r += n[Math.floor(Math.random() * n.length)];
    return r
}

var ue = ce(8);

function le(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        , r = {};
    return e.filter(Boolean).forEach((function (e) {
        var i = "function" == typeof t ? t(e) : t;
        r[e[i]] ? !n && r[e[i]].push(e) : r[e[i]] = n ? e : [e]
    }
    )),
        r
}

function fe(e, t, n, r, i) {
    t = void 0 !== t ? isNaN(+t) ? 6 : t : 6;
    var o = new WeakMap;
    return JSON.stringify(function e(t, r, a, s, c) {
        return t && "object" == F(t) ? (c = o.has(t),
            o.set(t, !0),
            s = Array.isArray(t),
            c ? a = i && i(t) || null : JSON.stringify(t, (function (i, o) {
                if (s || r > 0) {
                    if (n && (o = n(i, o)),
                        !i)
                        return s = Array.isArray(o),
                            t = o;
                    !a && (a = s ? [] : {}),
                        a[i] = e(o, s ? r : r - 1)
                }
            }
            )),
            void 0 === a ? s ? [] : {} : a) : t
    }(e, t), null, r)
}

function de(e) {
    if (null == e)
        return e;
    try {
        e = JSON.parse(e)
    } catch (e) {
    }
    return e
}

var he = function (e) {
    var t;
    if (!(e = e || (null === (t = location) || void 0 === t ? void 0 : t.hostname)))
        return "";
    var n = e.split(".");
    if (R.isArray(n) && n.length >= 2 && !/^(\d+\.)+\d+$/.test(e))
        for (var r = "." + n.splice(n.length - 1, 1); n.length > 0;)
            if (r = "." + n.splice(n.length - 1, 1) + r,
                document.cookie = "otrack_jssdk_domain_test=true; path=/; domain=" + r,
                -1 !== document.cookie.indexOf("otrack_jssdk_domain_test=true")) {
                var i = new Date;
                return i.setTime(i.getTime() - 1e3),
                    document.cookie = "otrack_jssdk_domain_test=true; expires=" + i.toUTCString() + "; path=/; domain=" + r,
                    r
            }
    return ""
};

function ve(e, t, n, r) {
    r = q({
        cross_subdomain: !1,
        domain: ""
    }, r);
    var i = new Date
        , o = 0;
    "number" == typeof n ? o = i.getTime() + 24 * n * 60 * 60 * 1e3 : R.isDate(n) && (o = n.getTime()),
        i.setTime(o);
    var a = "; expires=" + i.toUTCString();
    0 === n && (a = ""),
        r.cross_subdomain && (r.domain = he()),
        document.cookie = e + "=" + t + a + "; path=/" + (r.domain ? "; domain=" + r.domain : "")
}

function pe(e) {
    var t = [];
    for (var n in e)
        t.push(n + "=" + encodeURIComponent(e[n]));
    return t.join("&")
}

function ge(e) {
    for (var t = e + "=", n = document.cookie.split(";"), r = 0, i = n.length; i > r; r++) {
        for (var o = n[r]; " " === o.charAt(0);)
            o = o.substring(1, o.length);
        if (0 === o.indexOf(t))
            return o.substring(t.length, o.length)
    }
    return null
}

var me = !0;
try {
    "undefined" != typeof localStorage && (localStorage.setItem("testLocal", "true"),
        localStorage.removeItem("testLocal"))
} catch (kt) {
    ie.warn("localStorage不支持", kt),
        me = !1
}

function ye(e, t, n) {
    var r, i;
    if (e.indexOf("-queue") > 0 && (e = "".concat(e, "/").concat(ue)),
        n = void 0 === n || n,
        null != t)
        if (t = fe(t),
            me)
            try {
                var o;
                null === (o = localStorage) || void 0 === o || o.setItem(e, t)
            } catch (e) {
                if (["QUOTA_EXCEEDED_ERR", "NS_ERROR_DOM_QUOTA_REACHED", "QuotaExceededError", "W3CException_DOM_QUOTA_EXCEEDED_ERR"].indexOf(e.name) > -1) {
                    try {
                        for (var a = 0; a < (null === (s = localStorage) || void 0 === s ? void 0 : s.length); a++) {
                            var s, c, u = null === (c = localStorage) || void 0 === c ? void 0 : c.key(a);
                            if (u && /^obus-track_/.test(u))
                                if (-1 === u.indexOf("track-queue") && -1 === u.indexOf("request-queue")) {
                                    var l;
                                    null === (l = localStorage) || void 0 === l || l.removeItem(u)
                                } else {
                                    var f, d,
                                        h = (null === (f = localStorage) || void 0 === f ? void 0 : f.getItem(u)) || [];
                                    null === (d = localStorage) || void 0 === d || d.setItem(u, fe({
                                        version: Date.now(),
                                        data: h.length > 100 ? h.slice(100 - h.length) : h
                                    }))
                                }
                        }
                    } catch (e) {
                    }
                    return
                }
                console.log("[OTrack] setStorage error")
            }
        else
            n || ve(e, t, 30);
    if (void 0 === t) {
        var v;
        if (me)
            r = null === (v = localStorage) || void 0 === v ? void 0 : v.getItem(e);
        else
            n || (r = ge(e));
        return de(r)
    }
    null === t && (me ? null === (i = localStorage) || void 0 === i || i.removeItem(e) : n || ve(e, "", -1))
}

var _e = !0;
try {
    "undefined" != typeof sessionStorage && (sessionStorage.setItem("testLocal", "true"),
        sessionStorage.removeItem("testLocal"))
} catch (kt) {
    ie.warn("sessionStorage不支持", kt),
        _e = !1
}

function ke(e, t, n) {
    var r;
    if (n = void 0 === n || n,
        null != t)
        if (t = fe(t),
            _e)
            try {
                sessionStorage.setItem(e, t)
            } catch (e) {
                console.log("[OTrack] sessionStorage error")
            }
        else
            n || ve(e, t, 30);
    if (void 0 === t)
        return _e ? r = sessionStorage.getItem(e) : n || (r = ge(e)),
            de(r);
    null === t && (_e ? sessionStorage.removeItem(e) : n || ve(e, "", -1))
}

function we(e) {
    var t = (new Date).getTime()
        , n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
            var n = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16),
                ("x" === e ? n : 3 & n | 8).toString(16)
        }
        ));
    return e && e > 0 ? n.slice(0, e) : n
}

function be() {
    return Math.floor((new Date).getTime() / 1e3)
}

function Te(e, t) {
    var n = {};
    for (var r in e)
        e.hasOwnProperty(r) && t(e[r], r, e) && (n[r] = e[r]);
    return n
}

var Se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    , Ee = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
    , Ce = function (e, t, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var c = function () {
            var t;
            s = !1 === (null === (t = n) || void 0 === t ? void 0 : t.leading) ? 0 : Date.now(),
                a = null,
                o = e.apply(r, i),
                a || (r = i = null)
        };
        return function () {
            for (var u, l, f = arguments.length, d = Array(f), h = 0; f > h; h++)
                d[h] = arguments[h];
            var v = Date.now();
            s || !1 !== (null === (u = n) || void 0 === u ? void 0 : u.leading) || (s = v);
            var p = t - (v - s);
            return r = this,
                i = arguments,
                0 >= p || p > t ? (a && (clearTimeout(a),
                    a = null),
                    s = v,
                    o = e.apply(r, i),
                    a || (r = i = null)) : a || !1 === (null === (l = n) || void 0 === l ? void 0 : l.trailing) || (a = setTimeout(c, p)),
                o
        }
    };

function Ie(e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}

function Oe(e) {
    var t, n = null === (t = location) || void 0 === t ? void 0 : t.search.substr(1), r = {};
    if (n)
        try {
            n.split("&").filter(Boolean).forEach((function (e) {
                var t = B(e.split("="), 2);
                r[t[0]] = decodeURIComponent(t[1])
            }
            ))
        } catch (e) {
        }
    return e ? r[e] || null : r
}

function Ae(e) {
    if (!e)
        return null;
    var t = e.match(/^(https?:\/\/)([^\/]+)(.*)$/i);
    if (t) {
        var n = B(t, 4)
            , r = n[1]
            , i = n[2]
            , o = B((n[3] || "").split("?"), 2)
            , a = o[0]
            , s = B((o[1] || "").split("#"), 2)
            , c = s[0]
            , u = s[1]
            , l = (c || "").split("&").filter(Boolean)
            , f = {};
        return l.forEach((function (e) {
            var t = B(e.split("="), 2);
            f[t[0]] = decodeURIComponent(t[1])
        }
        )),
        {
            schema: r,
            host: i,
            path: a,
            search: c,
            query: f,
            hash: u || ""
        }
    }
    return null
}

function xe(e) {
    var t = {};
    return R.isObject(e) && Object.keys(e).forEach((function (n) {
        t[n] = "function" == typeof e[n] ? e[n]() : e[n]
    }
    )),
        t
}

var De, Pe = (De = (new Date).getTime(),
    function (e) {
        return Math.ceil((De = (9301 * De + 49297) % 233280) / 233280 * e)
    }
), $e = function () {
    if ("function" == typeof Uint32Array) {
        var e = "";
        if ("undefined" != typeof crypto ? e = crypto : "undefined" != typeof msCrypto && (e = msCrypto),
            R.isObject(e) && e.getRandomValues) {
            var t = new Uint32Array(1);
            return e.getRandomValues(t)[0] / 4294967296
        }
    }
    return Pe(1e19) / 1e19
}

var Le = !0;

function Ne(e) {
    if (void 0 === e)
        return Le;
    Le = e
}

function Re(e, t) {
    var n, r, i = t.method, o = void 0 === i ? "GET" : i, a = t.data, s = void 0 === a ? {} : a, c = t.timeout,
        u = void 0 === c ? 20 : c,
        l = !("onLine" in (navigator || {})) || (null === (n = navigator) || void 0 === n ? void 0 : n.onLine),
        f = t.success, d = t.fail;
    u = u || 20;
    var h = function () {
        var e = window;
        if (void 0 !== e.XMLHttpRequest)
            return new e.XMLHttpRequest;
        if (e.ActiveXObject)
            try {
                return new e.ActiveXObject("Msxml2.XMLHTTP")
            } catch (t) {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                    return ie.error(e),
                        null
                }
            }
    }()
        , v = Ne();
    if (t.withCredentials && (h.withCredentials = t.withCredentials),
        o = o.toUpperCase(),
        null == h)
        return ie.error("xhr object is null, exiting"),
            !1;
    if (!l)
        return ie.warn("当前网络离线，请检查网络状态!"),
            t.fail && t.fail("NOT ONLINE", 404),
            !1;
    if (t.success = function (e) {
        f && f(e),
            r && (clearTimeout(r),
                r = 0)
    }
        ,
        t.fail = function () {
            for (var n = arguments.length, i = Array(n), o = 0; n > o; o++)
                i[o] = arguments[o];
            !function (n) {
                if (void 0 === t.reTryCount || 0 >= t.reTryCount)
                    return "function" == typeof n && n(!0),
                        !0;
                t.success = f,
                    t.fail = d,
                    ie.warn("retry fetch with ".concat(--t.reTryCount, " count.")),
                    Re(e, t)
            }((function (e) {
                d && d.apply(null, i)
            }
            )),
                r && (clearTimeout(r),
                    r = 0)
        }
        ,
        r = window.setTimeout((function () {
            !function () {
                try {
                    R.isObject(h) && h.abort()
                } catch (e) {
                    ie.error(e)
                }
                r && (clearTimeout(r),
                    r = 0,
                    t.fail && t.fail("TIMEOUT", 408),
                    h.onreadystatechange = null,
                    h.onload = null,
                    h.onerror = null)
            }()
        }
        ), 1e3 * u),
        h.onreadystatechange = function () {
            try {
                4 == h.readyState && (h.status >= 200 && 300 > h.status || 304 == h.status ? t.success && t.success(function (e) {
                    if (!e)
                        return "";
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return {}
                    }
                }(h.responseText)) : t.fail && t.fail(h.responseText, h.status),
                    h.onreadystatechange = null,
                    h.onload = null)
            } catch (e) {
                console.error(e),
                    h.onreadystatechange = null,
                    h.onload = null
            }
        }
        ,
        "GET" === o.toUpperCase()) {
        var p = function (e) {
            if (e)
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t))
                        return !0;
            return !1
        }(s) ? "?" + pe(s) : "";
        h.open("GET", e + p, v)
    } else
        h.open("POST", e, v);
    if (R.isObject(t.headers))
        for (var g in t.headers)
            t.headers.hasOwnProperty(g) && h.setRequestHeader && h.setRequestHeader(g, t.headers[g]);
    if ("GET" === o)
        return h.send(),
            !0;
    var m, y = t.headers && (t.headers["Content-Type"] || t.headers["Content-type"]) || "";
    if (0 > y.indexOf("application/x-www-form-urlencoded"))
        0 > y.indexOf("application/json") ? h.send(s) : h.send(JSON.stringify(s));
    else if ((null === (m = navigator) || void 0 === m ? void 0 : m.sendBeacon) && !v && window.URLSearchParams) {
        var _ = new URLSearchParams;
        Object.keys(s).forEach((function (e) {
            _.append(e, s[e])
        }
        )),
            navigator.sendBeacon(e, _),
            t.success(s)
    } else
        h.send(pe(s))
}


var Ue = {
    AT: "EU",
    BE: "EU",
    DK: "EU",
    FI: "EU",
    FR: "EU",
    DE: "EU",
    GR: "EU",
    IE: "EU",
    IT: "EU",
    LU: "EU",
    NL: "EU",
    PT: "EU",
    ES: "EU",
    SE: "EU",
    GB: "EU",
    HU: "EU",
    PL: "EU",
    CZ: "EU",
    SI: "EU",
    SK: "EU",
    EE: "EU",
    LT: "EU",
    MT: "EU",
    CY: "EU",
    RO: "EU",
    BG: "EU",
    LV: "EU",
    HR: "EU",
    NO: "EU",
    IS: "EU",
    LI: "EU",
    CH: "EU",
    TR: "EU",
    RS: "EU",
    BA: "EU",
    MX: "US"
}

function qe() {
    var e = document;
    return Math.max(Math.max(e.body.scrollWidth, e.documentElement.scrollWidth), Math.max(e.body.offsetWidth, e.documentElement.offsetWidth), Math.max(e.body.clientWidth, e.documentElement.clientWidth))
}

function Fe() {
    var e = document;
    return Math.min(Math.min(e.body.clientHeight, e.documentElement.clientHeight), Math.min(e.body.offsetHeight, e.documentElement.offsetHeight), window.innerHeight)
}

function He() {
    return window.innerWidth > window.innerHeight ? "landscape" : "portrait"
}

var Ve = {
    ucbrowser: "UC",
    sogou: "Sogou",
    "2345browser": "2345",
    baidu: "Baidu",
    liebao: "LieBao",
    huawei: "Huawei",
    360: 360,
    heytap: "oppo",
    oppo: "oppo",
    quark: "quark",
    vivo: "vivo",
    meizu: "meizu",
    samsung: "samsung",
    realme: "realme",
    oneplus: "oneplus",
    weibo: "Weibo"
}
    , Ge = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
            , r = e.match(t);
        return r ? r[n] : "0"
    };

function Je() {
    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
        t[n] = arguments[n];
    return tt(!0 === t[0], !1, t)
}

function Xe() {
    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
        t[n] = arguments[n];
    return tt(!0 === t[0], !0, t)
}

function Ye(e) {
    if (Array.isArray(e)) {
        for (var t = [], n = 0; e.length > n; ++n)
            t.push(Ye(e[n]));
        return t
    }
    if (Ze(e)) {
        var r = {};
        for (var i in e)
            r[i] = Ye(e[i]);
        return r
    }
    return e
}

function Ze(e) {
    return e && "object" === F(e) && !Array.isArray(e)
}

function et(e, t) {
    if (!Ze(e))
        return t;
    for (var n in t)
        "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = Ze(e[n]) && Ze(t[n]) ? et(e[n], t[n]) : t[n]);
    return e
}

function tt(e, t, n) {
    var r;
    !e && Ze(r = n.shift()) || (r = {});
    for (var i = 0; n.length > i; ++i) {
        var o = n[i];
        if (Ze(o))
            for (var a in o)
                if ("__proto__" !== a && "constructor" !== a && "prototype" !== a) {
                    var s = e ? Ye(o[a]) : o[a];
                    r[a] = t ? et(r[a], s) : s
                }
    }
    return r
}

var nt = function () {
    var e, t, n;
    return {
        origin: 'https://www.opposhop.cn',
        pathname: '/cn/web/trade',
        href: 'https://www.opposhop.cn/cn/web/trade?quickbuy=0'
    }
}
    , rt = null
    , it = nt()
    , ot = null
    , at = it
    , st = ""
    , ct = !1
    , ut = function (e) {
        return "function" == typeof e
    };

function lt(e, t) {
    var n, r, i, o, a, s,
        c = null === (n = window) || void 0 === n || null === (r = n.history) || void 0 === r ? void 0 : r.pushState,
        u = null === (i = window) || void 0 === i || null === (o = i.history) || void 0 === o ? void 0 : o.replaceState,
        l = function () {
            t(location, rt) || e(location, rt)
        }, f = !0, d = function () {
            var e;
            (f = !f) ? history.__proto__.pushState.apply(history, arguments) : (st = "pushState",
                at = rt = nt(),
                null,
                c.apply(null === (e = window) || void 0 === e ? void 0 : e.history, arguments),
                it = nt(),
                f = !0,
                l(),
                ct ? ct = !1 : t(it, rt) || ft.watchRoutes().forEach((function (e) {
                    return e(it, rt)
                }
                )))
        }, h = function () {
            var e;
            (f = !f) ? history.__proto__.replaceState.apply(history, arguments) : (st = "replaceState",
                at = rt = nt(),
                null,
                u.apply(null === (e = window) || void 0 === e ? void 0 : e.history, arguments),
                it = nt(),
                f = !0,
                l(),
                ct ? ct = !1 : t(it, rt) || ft.watchRoutes().forEach((function (e) {
                    return e(it, rt)
                }
                )))
        }, v = function () {
            (rt = it) || ot || (ct = !0),
                ot = it,
                st || (rt = ot),
                st = "",
                it = at = nt(),
                l(),
                ct ? ct = !1 : t(at, ot) || ft.watchRoutes().forEach((function (e) {
                    return e(at, ot)
                }
                ))
        };
    ut(c) && (window.history.pushState = d),
        ut(u) && (window.history.replaceState = h),
        s = (null === (a = window) || void 0 === a ? void 0 : a.document.documentMode) ? "hashchange" : c ? "popstate" : "hashchange",
        U.addEvent(window, s, v);
    setTimeout((function e() {
        var t, n = !1, r = (null === (t = window) || void 0 === t ? void 0 : t.history) || {};
        ut(c) && r.pushState !== d && (r.pushState,
            n = !0),
            ut(u) && r.replaceState !== h && (r.replaceState,
                n = !0),
            n && (U.removeEvent(window, s, v),
                U.addEvent(window, s, v)),
            setTimeout(e, 1e3)
    }
    ), 1e3)
}

// -------- 解密函数 -----------------

function jeimit(e) {
    return "object" === n(e) && (e = JSON.stringify(e)),
        function (e) {
            for (var t, n, r, i, o = "", a = 0, s = (e += "").length % 3; e.length > a;)
                ((n = e.charCodeAt(a++)) > 255 || (r = e.charCodeAt(a++)) > 255 || (i = e.charCodeAt(a++)) > 255) && console.log("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."),
                    o += Se.charAt((t = n << 16 | r << 8 | i) >> 18 & 63) + Se.charAt(t >> 12 & 63) + Se.charAt(t >> 6 & 63) + Se.charAt(63 & t);
            return s ? o.slice(0, s - 3) + "===".substring(s) : o
        }(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function (e, t) {
            return String.fromCharCode("0x" + t)
        }
        )))
}

function encryptFunction(data) {
    // 使用 JSON.parse 将字符串转换为 JSON 对象
    const json_data = JSON.parse(data);
    return `data=${jeimit(json_data.data)}&crc=${json_data.crc}`
}

// 直接输出配置，无需文件输入输出
const config = {
    domain: "obus-jssdk2-cn.heytapmobi.com",
    path: "/v3/track/js/117500"
};

const default_json = {
    "data": {
        "head": {
            "$platform": "web",
            "$lib_version": "2.0.11",
            "$lib_type": "script",
            "$timezone_offset": -480,
            "$screen_height": 864,
            "$screen_width": 1536,
            "$orientation": "landscape",
            "$doc_width": 1530,
            "$doc_height": 247,
            "$connection_type": "4g",
            "$browser_type": "Chrome",
            "$browser_version": 122,
            "$os": "Win10,desktop",
            "$session_id": "2Yy70l4V",
            "$browser_language": "zh-CN",
            "$browser_charset": "UTF-8",
            "$region": "cn",
            "$region_code": "",
            "$device_id": "3b64023b-7b17-4d0f-aed6-c6a7908aa65c",
            "$is_login": true,
            "$user_id": "1168832602",
            "$app_version": ""
        },
        "request_id": "hjqfxxDo",
        "body": [
            {
                "$title": "商品下单 - OPPO 商城",
                "$referrer": "",
                "$referrer_host": "",
                "$url": "https://www.opposhop.cn/cn/web/trade?quickbuy=0",
                "$url_path": "/cn/web/trade",
                "$event_id": "$web_stay",
                "$event_group": "$track_heatmap",
                "$event_info": "{\"$viewport_position\":2,\"$viewport_height\":247,\"$viewport_width\":1536,\"event_duration\":7730.562,\"data_sequence_id\":\"3b64023b-7b17-4d0f-aed6-c6a7908aa65c_1724443592356\",\"$utm_source\":\"\",\"$utm_medium\":\"\",\"$utm_campaign\":\"\",\"$utm_content\":\"\",\"$utm_term\":\"\",\"$latest_utm_source\":\"\",\"$latest_utm_medium\":\"\",\"$latest_utm_campaign\":\"\",\"$latest_utm_content\":\"\",\"$latest_utm_term\":\"\",\"s_channel\":\"h5_web\",\"source_type\":504,\"s_version\":\"\",\"os_version\":\"\",\"brand\":\"\",\"site\":\"\",\"ua\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36\",\"_track_id\":716132357,\"_flush_time\":1724443592357,\"$project\":\"default\"}",
                "$event_time": 1724443592357,
                "$sequence_id": "02d84f0f-6cad-45da-b699-a9f983aca1f2"
            }
        ],
        "custom_head": {
            "props": {},
            "identities": {
                "$identity_cookie_id": "3b64023b-7b17-4d0f-aed6-c6a7908aa65c",
                "$identity_anonymous_id": "3b64023b-7b17-4d0f-aed6-c6a7908aa65c",
                "$identity_login_id": "3b64023b-7b17-4d0f-aed6-c6a7908aa65c"
            },
            "lib": {
                "$lib": "js",
                "$lib_method": "code",
                "$lib_version": "1.24.6"
            },
            "h5app": {},
            "userId": ""
        }
    },
    "crc": -1829784181
}

// 检查传递的参数数量--------------------------------

// 检查传递的参数数量
const mode = process.argv[2];

if (mode === 'config') {
    console.log(JSON.stringify(config));
    process.exit(0);
}
if (mode === 'default') {
    console.log(JSON.stringify(default_json));
    process.exit(0);
}

if (process.argv.length < 4) {
    console.error("Usage: node script.js [mode] [inputFile] [outputFile]");
    process.exit(1);
}

const inputFile = process.argv[3];
const outputFile = process.argv[4];

// 读取输入文件内容
let inputData;
try {
    inputData = fs.readFileSync(inputFile, 'utf8');
} catch (err) {
    console.error(`Error reading input file: ${inputFile}`, err);
    process.exit(1);
}

let outputData;

switch (mode) {
    case 'encrypt':
        // 假设加密操作是在这里进行的
        outputData = encryptFunction(inputData); // 请将 encryptFunction 替换为实际加密函数
        break;

    default:
        console.error(`Unknown mode: ${mode}`);
        process.exit(1);
}

// 将输出数据写入输出文件
try {
    fs.writeFileSync(outputFile, outputData, 'utf8');
} catch (err) {
    console.error(`Error writing to output file: ${outputFile}`, err);
    process.exit(1);
}


