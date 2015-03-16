/**
 * Created by agustin on 5/2/15.
 *
 *
 * Minified version of the Web Performance script.
 * LACNIC Labs
 * March 2015
 *
 * Scripts contained are
 *  - JQuery 1.11 (http://code.jquery.com/jquery-1.11.2.min.js)
 *  - boomerang.js
 *  - howtos.js (Boomerang POSTing)
 *  - rt.js
 *  - bw.js
 *
 *  [ Closure Compiler Code ](http://closure-compiler.appspot.com/home):
 *  // ==ClosureCompiler==
 *  // @compilation_level SIMPLE_OPTIMIZATIONS
 *  // @output_file_name default.js
 *  // @code_url http://code.jquery.com/jquery-1.11.2.min.js
 *  // @code_url http://simon.lacnic.net/static/app/js/boomerang.js
 *  // @code_url http://simon.lacnic.net/static/app/js/howtos.js
 *  // @code_url http://simon.lacnic.net/static/app/js/rt.js
 *  // @code_url http://simon.lacnic.net/static/app/js/bw.js
 *  // ==/ClosureCompiler==
 *
 */
!function (k, p) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = k.document ? p(k, !0) : function (g) {
        if (!g.document)throw Error("jQuery requires a window with a document");
        return p(g)
    } : p(k)
}("undefined" != typeof window ? window : this, function (k, p) {
    function g(a) {
        var b = a.length, d = c.type(a);
        return"function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && 0 < b && b - 1 in a
    }

    function m(a, b, d) {
        if (c.isFunction(b))return c.grep(a, function (a, c) {
            return!!b.call(a, c,
                a) !== d
        });
        if (b.nodeType)return c.grep(a, function (a) {
            return a === b !== d
        });
        if ("string" == typeof b) {
            if (Pb.test(b))return c.filter(b, a, d);
            b = c.filter(b, a)
        }
        return c.grep(a, function (a) {
            return 0 <= c.inArray(a, b) !== d
        })
    }

    function n(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function t(a) {
        var b = Va[a] = {};
        return c.each(a.match(S) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function A() {
        x.addEventListener ? (x.removeEventListener("DOMContentLoaded", f, !1), k.removeEventListener("load", f, !1)) : (x.detachEvent("onreadystatechange",
            f), k.detachEvent("onload", f))
    }

    function f() {
        (x.addEventListener || "load" === event.type || "complete" === x.readyState) && (A(), c.ready())
    }

    function u(a, b, d) {
        if (void 0 === d && 1 === a.nodeType) {
            var e = "data-" + b.replace(Qb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Rb.test(d) ? c.parseJSON(d) : d
                } catch (h) {
                }
                c.data(a, b, d)
            } else d = void 0
        }
        return d
    }

    function v(a) {
        for (var b in a)if (("data" !== b || !c.isEmptyObject(a[b])) && "toJSON" !== b)return!1;
        return!0
    }

    function E(a, b, d, e) {
        if (c.acceptData(a)) {
            var h, l, q = c.expando, z = a.nodeType, f = z ? c.cache : a, g = z ? a[q] : a[q] && q;
            if (g && f[g] && (e || f[g].data) || void 0 !== d || "string" != typeof b)return g || (g = z ? a[q] = T.pop() || c.guid++ : q), f[g] || (f[g] = z ? {} : {toJSON: c.noop}), ("object" == typeof b || "function" == typeof b) && (e ? f[g] = c.extend(f[g], b) : f[g].data = c.extend(f[g].data, b)), l = f[g], e || (l.data || (l.data = {}), l = l.data), void 0 !== d && (l[c.camelCase(b)] = d), "string" == typeof b ? (h = l[b], null == h && (h = l[c.camelCase(b)])) : h = l, h
        }
    }

    function r(a, b, d) {
        if (c.acceptData(a)) {
            var e,
                h, l = a.nodeType, q = l ? c.cache : a, z = l ? a[c.expando] : c.expando;
            if (q[z]) {
                if (b && (e = d ? q[z] : q[z].data)) {
                    c.isArray(b) ? b = b.concat(c.map(b, c.camelCase)) : b in e ? b = [b] : (b = c.camelCase(b), b = b in e ? [b] : b.split(" "));
                    for (h = b.length; h--;)delete e[b[h]];
                    if (d ? !v(e) : !c.isEmptyObject(e))return
                }
                (d || (delete q[z].data, v(q[z]))) && (l ? c.cleanData([a], !0) : w.deleteExpando || q != q.window ? delete q[z] : q[z] = null)
            }
        }
    }

    function H() {
        return!0
    }

    function D() {
        return!1
    }

    function ba() {
        try {
            return x.activeElement
        } catch (a) {
        }
    }

    function Wa(a) {
        var b = Xa.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)for (; b.length;)a.createElement(b.pop());
        return a
    }

    function F(a, b) {
        var d, e, h = 0, l = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!l)for (l = [], d = a.childNodes || a; null != (e = d[h]); h++)!b || c.nodeName(e, b) ? l.push(e) : c.merge(l, F(e, b));
        return void 0 === b || b && c.nodeName(a, b) ? c.merge([a], l) : l
    }

    function Sb(a) {
        Ga.test(a.type) && (a.defaultChecked = a.checked)
    }

    function Ya(a, b) {
        return c.nodeName(a, "table") && c.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Za(a) {
        return a.type = (null !== c.find.attr(a, "type")) + "/" + a.type, a
    }

    function $a(a) {
        var b = Tb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ha(a, b) {
        for (var d, e = 0; null != (d = a[e]); e++)c._data(d, "globalEval", !b || c._data(b[e], "globalEval"))
    }

    function ab(a, b) {
        if (1 === b.nodeType && c.hasData(a)) {
            var d, e, h;
            e = c._data(a);
            var l = c._data(b, e), q = e.events;
            if (q)for (d in delete l.handle, l.events = {}, q)for (e = 0, h = q[d].length; h > e; e++)c.event.add(b, d, q[d][e]);
            l.data && (l.data = c.extend({}, l.data))
        }
    }

    function bb(a, b) {
        var d, e = c(b.createElement(a)).appendTo(b.body), h = k.getDefaultComputedStyle && (d = k.getDefaultComputedStyle(e[0])) ? d.display : c.css(e[0], "display");
        return e.detach(), h
    }

    function ca(a) {
        var b = x, d = cb[a];
        return d || (d = bb(a, b), "none" !== d && d || (ma = (ma || c("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = (ma[0].contentWindow || ma[0].contentDocument).document, b.write(), b.close(), d = bb(a, b), ma.detach()), cb[a] = d), d
    }

    function db(a, b) {
        return{get: function () {
            var d = a();
            if (null != d)return d ? void delete this.get : (this.get = b).apply(this, arguments)
        }}
    }

    function eb(a, b) {
        if (b in a)return b;
        for (var d = b.charAt(0).toUpperCase() + b.slice(1), c = b, h = fb.length; h--;)if (b = fb[h] + d, b in a)return b;
        return c
    }

    function gb(a, b) {
        for (var d, e, h, l = [], q = 0, z = a.length; z > q; q++)e = a[q], e.style && (l[q] = c._data(e, "olddisplay"), d = e.style.display,
            b ? (l[q] || "none" !== d || (e.style.display = ""), "" === e.style.display && na(e) && (l[q] = c._data(e, "olddisplay", ca(e.nodeName)))) : (h = na(e), (d && "none" !== d || !h) && c._data(e, "olddisplay", h ? d : c.css(e, "display"))));
        for (q = 0; z > q; q++)e = a[q], e.style && (b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? l[q] || "" : "none"));
        return a
    }

    function hb(a, b, d) {
        return(a = Ub.exec(b)) ? Math.max(0, a[1] - (d || 0)) + (a[2] || "px") : b
    }

    function ib(a, b, d, e, h) {
        b = d === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var l = 0; 4 > b; b += 2)"margin" ===
        d && (l += c.css(a, d + da[b], !0, h)), e ? ("content" === d && (l -= c.css(a, "padding" + da[b], !0, h)), "margin" !== d && (l -= c.css(a, "border" + da[b] + "Width", !0, h))) : (l += c.css(a, "padding" + da[b], !0, h), "padding" !== d && (l += c.css(a, "border" + da[b] + "Width", !0, h)));
        return l
    }

    function jb(a, b, d) {
        var e = !0, h = "width" === b ? a.offsetWidth : a.offsetHeight, l = ea(a), q = w.boxSizing && "border-box" === c.css(a, "boxSizing", !1, l);
        if (0 >= h || null == h) {
            if (h = W(a, b, l), (0 > h || null == h) && (h = a.style[b]), ua.test(h))return h;
            e = q && (w.boxSizingReliable() || h === a.style[b]);
            h = parseFloat(h) || 0
        }
        return h + ib(a, b, d || (q ? "border" : "content"), e, l) + "px"
    }

    function C(a, b, d, c, h) {
        return new C.prototype.init(a, b, d, c, h)
    }

    function kb() {
        return setTimeout(function () {
            X = void 0
        }), X = c.now()
    }

    function va(a, b) {
        var d, c = {height: a}, h = 0;
        for (b = b ? 1 : 0; 4 > h; h += 2 - b)d = da[h], c["margin" + d] = c["padding" + d] = a;
        return b && (c.opacity = c.width = a), c
    }

    function lb(a, b, d) {
        for (var c, h = (oa[b] || []).concat(oa["*"]), l = 0, q = h.length; q > l; l++)if (c = h[l].call(d, b, a))return c
    }

    function Vb(a, b) {
        var d, e, h, l, q;
        for (d in a)if (e = c.camelCase(d),
            h = b[e], l = a[d], c.isArray(l) && (h = l[1], l = a[d] = l[0]), d !== e && (a[e] = l, delete a[d]), q = c.cssHooks[e], q && "expand"in q)for (d in l = q.expand(l), delete a[e], l)d in a || (a[d] = l[d], b[d] = h); else b[e] = h
    }

    function mb(a, b, d) {
        var e, h = 0, l = wa.length, q = c.Deferred().always(function () {
            delete z.elem
        }), z = function () {
            if (e)return!1;
            for (var b = X || kb(), b = Math.max(0, f.startTime + f.duration - b), d = 1 - (b / f.duration || 0), c = 0, h = f.tweens.length; h > c; c++)f.tweens[c].run(d);
            return q.notifyWith(a, [f, d, b]), 1 > d && h ? b : (q.resolveWith(a, [f]), !1)
        }, f = q.promise({elem: a,
            props: c.extend({}, b), opts: c.extend(!0, {specialEasing: {}}, d), originalProperties: b, originalOptions: d, startTime: X || kb(), duration: d.duration, tweens: [], createTween: function (b, d) {
                var e = c.Tween(a, f.opts, b, d, f.opts.specialEasing[b] || f.opts.easing);
                return f.tweens.push(e), e
            }, stop: function (b) {
                var d = 0, c = b ? f.tweens.length : 0;
                if (e)return this;
                for (e = !0; c > d; d++)f.tweens[d].run(1);
                return b ? q.resolveWith(a, [f, b]) : q.rejectWith(a, [f, b]), this
            }});
        d = f.props;
        for (Vb(d, f.opts.specialEasing); l > h; h++)if (b = wa[h].call(f, a, d, f.opts))return b;
        return c.map(d, lb, f), c.isFunction(f.opts.start) && f.opts.start.call(a, f), c.fx.timer(c.extend(z, {elem: a, anim: f, queue: f.opts.queue})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function nb(a) {
        return function (b, d) {
            "string" != typeof b && (d = b, b = "*");
            var e, h = 0, l = b.toLowerCase().match(S) || [];
            if (c.isFunction(d))for (; e = l[h++];)"+" === e.charAt(0) ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(d)) : (a[e] = a[e] || []).push(d)
        }
    }

    function ob(a, b, d, e) {
        function h(f) {
            var g;
            return l[f] = !0, c.each(a[f] || [], function (a, c) {
                var f = c(b, d, e);
                return"string" != typeof f || q || l[f] ? q ? !(g = f) : void 0 : (b.dataTypes.unshift(f), h(f), !1)
            }), g
        }

        var l = {}, q = a === Ia;
        return h(b.dataTypes[0]) || !l["*"] && h("*")
    }

    function Ja(a, b) {
        var d, e, h = c.ajaxSettings.flatOptions || {};
        for (e in b)void 0 !== b[e] && ((h[e] ? a : d || (d = {}))[e] = b[e]);
        return d && c.extend(!0, a, d), a
    }

    function Ka(a, b, d, e) {
        var h;
        if (c.isArray(b))c.each(b, function (b, c) {
            d || Wb.test(a) ? e(a, c) : Ka(a + "[" + ("object" == typeof c ? b : "") + "]", c, d, e)
        }); else if (d || "object" !==
            c.type(b))e(a, b); else for (h in b)Ka(a + "[" + h + "]", b[h], d, e)
    }

    function pb() {
        try {
            return new k.XMLHttpRequest
        } catch (a) {
        }
    }

    function qb(a) {
        return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var T = [], R = T.slice, rb = T.concat, La = T.push, sb = T.indexOf, ha = {}, Xb = ha.toString, ia = ha.hasOwnProperty, w = {}, c = function (a, b) {
        return new c.fn.init(a, b)
    }, Yb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Zb = /^-ms-/, $b = /-([\da-z])/gi, ac = function (a, b) {
        return b.toUpperCase()
    };
    c.fn = c.prototype = {jquery: "1.11.2", constructor: c,
        selector: "", length: 0, toArray: function () {
            return R.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        }, pushStack: function (a) {
            a = c.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        }, each: function (a, b) {
            return c.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(c.map(this, function (b, d) {
                return a.call(b, d, b)
            }))
        }, slice: function () {
            return this.pushStack(R.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: La, sort: T.sort, splice: T.splice};
    c.extend = c.fn.extend = function () {
        var a, b, d, e, h, l, q = arguments[0] || {}, f = 1, g = arguments.length, m = !1;
        "boolean" == typeof q && (m = q, q = arguments[f] || {}, f++);
        "object" == typeof q || c.isFunction(q) || (q = {});
        for (f === g && (q = this, f--); g > f; f++)if (null != (h = arguments[f]))for (e in h)a = q[e], d = h[e], q !== d && (m && d && (c.isPlainObject(d) ||
            (b = c.isArray(d))) ? (b ? (b = !1, l = a && c.isArray(a) ? a : []) : l = a && c.isPlainObject(a) ? a : {}, q[e] = c.extend(m, l, d)) : void 0 !== d && (q[e] = d));
        return q
    };
    c.extend({expando: "jQuery" + ("1.11.2" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
        throw Error(a);
    }, noop: function () {
    }, isFunction: function (a) {
        return"function" === c.type(a)
    }, isArray: Array.isArray || function (a) {
        return"array" === c.type(a)
    }, isWindow: function (a) {
        return null != a && a == a.window
    }, isNumeric: function (a) {
        return!c.isArray(a) && 0 <= a - parseFloat(a) + 1
    }, isEmptyObject: function (a) {
        for (var b in a)return!1;
        return!0
    }, isPlainObject: function (a) {
        var b;
        if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a))return!1;
        try {
            if (a.constructor && !ia.call(a, "constructor") && !ia.call(a.constructor.prototype, "isPrototypeOf"))return!1
        } catch (d) {
            return!1
        }
        if (w.ownLast)for (b in a)return ia.call(a, b);
        for (b in a);
        return void 0 === b || ia.call(a, b)
    }, type: function (a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ha[Xb.call(a)] || "object" : typeof a
    }, globalEval: function (a) {
        a && c.trim(a) && (k.execScript || function (a) {
            k.eval.call(k,
                a)
        })(a)
    }, camelCase: function (a) {
        return a.replace(Zb, "ms-").replace($b, ac)
    }, nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (a, b, d) {
        var c, h = 0, l = a.length, q = g(a);
        if (d)if (q)for (; l > h && (c = b.apply(a[h], d), !1 !== c); h++); else for (h in a) {
            if (c = b.apply(a[h], d), !1 === c)break
        } else if (q)for (; l > h && (c = b.call(a[h], h, a[h]), !1 !== c); h++); else for (h in a)if (c = b.call(a[h], h, a[h]), !1 === c)break;
        return a
    }, trim: function (a) {
        return null == a ? "" : (a + "").replace(Yb, "")
    }, makeArray: function (a, b) {
        var d = b || [];
        return null != a && (g(Object(a)) ? c.merge(d, "string" == typeof a ? [a] : a) : La.call(d, a)), d
    }, inArray: function (a, b, d) {
        var c;
        if (b) {
            if (sb)return sb.call(b, a, d);
            c = b.length;
            for (d = d ? 0 > d ? Math.max(0, c + d) : d : 0; c > d; d++)if (d in b && b[d] === a)return d
        }
        return-1
    }, merge: function (a, b) {
        for (var d = +b.length, c = 0, h = a.length; d > c;)a[h++] = b[c++];
        if (d !== d)for (; void 0 !== b[c];)a[h++] = b[c++];
        return a.length = h, a
    }, grep: function (a, b, d) {
        for (var c = [], h = 0, l = a.length, q = !d; l > h; h++)d = !b(a[h], h), d !== q && c.push(a[h]);
        return c
    }, map: function (a, b, d) {
        var c, h = 0, l = a.length, q = [];
        if (g(a))for (; l > h; h++)c = b(a[h], h, d), null != c && q.push(c); else for (h in a)c = b(a[h], h, d), null != c && q.push(c);
        return rb.apply([], q)
    }, guid: 1, proxy: function (a, b) {
        var d, e, h;
        return"string" == typeof b && (h = a[b], b = a, a = h), c.isFunction(a) ? (d = R.call(arguments, 2), e = function () {
            return a.apply(b || this, d.concat(R.call(arguments)))
        }, e.guid = a.guid = a.guid || c.guid++, e) : void 0
    }, now: function () {
        return+new Date
    }, support: w});
    c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function (a, b) {
            ha["[object " + b + "]"] = b.toLowerCase()
        });
    var V = function (a) {
        function b(a, b, c, d) {
            var e, h, l, q, f;
            if ((b ? b.ownerDocument || b : P) !== Q && pa(b), b = b || Q, c = c || [], q = b.nodeType, "string" != typeof a || !a || 1 !== q && 9 !== q && 11 !== q)return c;
            if (!d && K) {
                if (11 !== q && (e = wa.exec(a)))if (l = e[1])if (9 === q) {
                    if (h = b.getElementById(l), !h || !h.parentNode)return c;
                    if (h.id === l)return c.push(h), c
                } else {
                    if (b.ownerDocument && (h = b.ownerDocument.getElementById(l)) && N(b, h) && h.id === l)return c.push(h), c
                } else {
                    if (e[2])return ja.apply(c, b.getElementsByTagName(a)),
                        c;
                    if ((l = e[3]) && r.getElementsByClassName)return ja.apply(c, b.getElementsByClassName(l)), c
                }
                if (r.qsa && (!L || !L.test(a))) {
                    if (h = e = B, l = b, f = 1 !== q && a, 1 === q && "object" !== b.nodeName.toLowerCase()) {
                        q = Aa(a);
                        (e = b.getAttribute("id")) ? h = e.replace(ya, "\\$&") : b.setAttribute("id", h);
                        h = "[id='" + h + "'] ";
                        for (l = q.length; l--;)q[l] = h + n(q[l]);
                        l = ha.test(a) && k(b.parentNode) || b;
                        f = q.join(",")
                    }
                    if (f)try {
                        return ja.apply(c, l.querySelectorAll(f)), c
                    } catch (z) {
                    } finally {
                        e || b.removeAttribute("id")
                    }
                }
            }
            return F(a.replace(V, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > y.cacheLength && delete a[b.shift()], a[c + " "] = d
            }

            var b = [];
            return a
        }

        function e(a) {
            return a[B] = !0, a
        }

        function h(a) {
            var b = Q.createElement("div");
            try {
                return!!a(b)
            } catch (c) {
                return!1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function l(a, b) {
            for (var c = a.split("|"), d = a.length; d--;)y.attrHandle[c[d]] = b
        }

        function q(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d)return d;
            if (c)for (; c = c.nextSibling;)if (c === b)return-1;
            return a ? 1 : -1
        }

        function f(a) {
            return function (b) {
                return"input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function g(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return("input" === c || "button" === c) && b.type === a
            }
        }

        function m(a) {
            return e(function (b) {
                return b = +b, e(function (c, d) {
                    for (var e, h = a([], c.length, b), l = h.length; l--;)c[e = h[l]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function O() {
        }

        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function u(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, h = S++;
            return b.first ? function (b, c, h) {
                for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, h)
            } : function (b, c, l) {
                var q, f, z = [I, h];
                if (l)for (; b = b[d];) {
                    if ((1 === b.nodeType || e) && a(b, c, l))return!0
                } else for (; b = b[d];)if (1 === b.nodeType || e) {
                    if (f = b[B] || (b[B] = {}), (q = f[d]) && q[0] === I && q[1] === h)return z[2] = q[2];
                    if (f[d] = z, z[2] = a(b, c, l))return!0
                }
            }
        }

        function v(a) {
            return 1 < a.length ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b, c, d))return!1;
                return!0
            } : a[0]
        }

        function t(a, b, c, d, e) {
            for (var h, l = [], q = 0, f = a.length, z = null != b; f > q; q++)(h = a[q]) && (!c || c(h, d, e)) && (l.push(h), z && b.push(q));
            return l
        }

        function p(a, c, d, h, l, q) {
            return h && !h[B] && (h = p(h)), l && !l[B] && (l = p(l, q)), e(function (e, q, f, z) {
                var g, m, k = [], O = [], n = q.length, u;
                if (!(u = e)) {
                    u = c || "*";
                    for (var v = f.nodeType ? [f] : f, za = [], ta = 0, r = v.length; r > ta; ta++)b(u, v[ta], za);
                    u = za
                }
                u = !a || !e && c ? u : t(u, k, a, f, z);
                v = d ? l || (e ? a : n || h) ? [] : q : u;
                if (d && d(u, v, f, z), h)for (g = t(v, O), h(g, [], f, z), f = g.length; f--;)(m = g[f]) && (v[O[f]] = !(u[O[f]] = m));
                if (e) {
                    if (l || a) {
                        if (l) {
                            g =
                                [];
                            for (f = v.length; f--;)(m = v[f]) && g.push(u[f] = m);
                            l(null, v = [], g, z)
                        }
                        for (f = v.length; f--;)(m = v[f]) && -1 < (g = l ? J(e, m) : k[f]) && (e[g] = !(q[g] = m))
                    }
                } else v = t(v === q ? v.splice(n, v.length) : v), l ? l(null, q, v, z) : ja.apply(q, v)
            })
        }

        function E(a) {
            var b, c, d, e = a.length, h = y.relative[a[0].type];
            c = h || y.relative[" "];
            for (var l = h ? 1 : 0, q = u(function (a) {
                return a === b
            }, c, !0), f = u(function (a) {
                return-1 < J(b, a)
            }, c, !0), z = [function (a, c, d) {
                a = !h && (d || c !== C) || ((b = c).nodeType ? q(a, c, d) : f(a, c, d));
                return b = null, a
            }]; e > l; l++)if (c = y.relative[a[l].type])z =
                [u(v(z), c)]; else {
                if (c = y.filter[a[l].type].apply(null, a[l].matches), c[B]) {
                    for (d = ++l; e > d && !y.relative[a[d].type]; d++);
                    return p(1 < l && v(z), 1 < l && n(a.slice(0, l - 1).concat({value: " " === a[l - 2].type ? "*" : ""})).replace(V, "$1"), c, d > l && E(a.slice(l, d)), e > d && E(a = a.slice(d)), e > d && n(a))
                }
                z.push(c)
            }
            return v(z)
        }

        function A(a, c) {
            var d = 0 < c.length, h = 0 < a.length, l = function (e, l, q, f, z) {
                var g, m, k, O = 0, n = "0", u = e && [], v = [], za = C, ta = e || h && y.find.TAG("*", z), r = I += null == za ? 1 : Math.random() || .1, p = ta.length;
                for (z && (C = l !== Q && l); n !== p && null !=
                    (g = ta[n]); n++) {
                    if (h && g) {
                        for (m = 0; k = a[m++];)if (k(g, l, q)) {
                            f.push(g);
                            break
                        }
                        z && (I = r)
                    }
                    d && ((g = !k && g) && O--, e && u.push(g))
                }
                if (O += n, d && n !== O) {
                    for (m = 0; k = c[m++];)k(u, v, l, q);
                    if (e) {
                        if (0 < O)for (; n--;)u[n] || v[n] || (v[n] = da.call(f));
                        v = t(v)
                    }
                    ja.apply(f, v);
                    z && !e && 0 < v.length && 1 < O + c.length && b.uniqueSort(f)
                }
                return z && (I = r, C = za), u
            };
            return d ? e(l) : l
        }

        var w, r, y, x, H, Aa, D, F, C, ka, xa, pa, Q, U, K, L, qa, G, N, B = "sizzle" + 1 * new Date, P = a.document, I = 0, S = 0, tb = c(), T = c(), ba = c(), R = function (a, b) {
                return a === b && (xa = !0), 0
            }, Y = {}.hasOwnProperty, M = [], da =
                M.pop, ea = M.push, ja = M.push, W = M.slice, J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
                return-1
            }, Z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), aa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Z + "))|)[\\x20\\t\\r\\n\\f]*\\]", X = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + aa +
                ")*)|.*)\\)|)", ia = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), V = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), la = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ma = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, na = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), oa = new RegExp(X), ra = new RegExp("^" + Z + "$"), ca = {ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w",
                "w*") + ")"), ATTR: new RegExp("^" + aa), PSEUDO: new RegExp("^" + X), CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},
            ua = /^(?:input|select|textarea|button)$/i, va = /^h\d$/i, Ba = /^[^{]+\{\s*\[native \w/, wa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ha = /[+~]/, ya = /'|\\/g, fa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), ga = function (a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            }, sa = function () {
                pa()
            };
        try {
            ja.apply(M = W.call(P.childNodes), P.childNodes), M[P.childNodes.length].nodeType
        } catch (Ca) {
            ja = {apply: M.length ? function (a, b) {
                ea.apply(a,
                    W.call(b))
            } : function (a, b) {
                for (var c = a.length, d = 0; a[c++] = b[d++];);
                a.length = c - 1
            }}
        }
        r = b.support = {};
        H = b.isXML = function (a) {
            return(a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        pa = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : P;
            return d !== Q && 9 === d.nodeType && d.documentElement ? (Q = d, U = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", sa, !1) : c.attachEvent && c.attachEvent("onunload", sa)), K = !H(d), r.attributes = h(function (a) {
                return a.className =
                    "i", !a.getAttribute("className")
            }), r.getElementsByTagName = h(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), r.getElementsByClassName = Ba.test(d.getElementsByClassName), r.getById = h(function (a) {
                return U.appendChild(a).id = B, !d.getElementsByName || !d.getElementsByName(B).length
            }), r.getById ? (y.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && K) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, y.filter.ID = function (a) {
                var b = a.replace(fa, ga);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete y.find.ID, y.filter.ID = function (a) {
                var b = a.replace(fa, ga);
                return function (a) {
                    return(a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            }), y.find.TAG = r.getElementsByTagName ? function (a, b) {
                return"undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : r.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, h = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = h[e++];)1 === c.nodeType && d.push(c);
                    return d
                }
                return h
            },
                y.find.CLASS = r.getElementsByClassName && function (a, b) {
                    return K ? b.getElementsByClassName(a) : void 0
                }, qa = [], L = [], (r.qsa = Ba.test(d.querySelectorAll)) && (h(function (a) {
                U.appendChild(a).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || L.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll("[id~=" + B + "-]").length || L.push("~=");
                a.querySelectorAll(":checked").length || L.push(":checked");
                a.querySelectorAll("a#" + B + "+*").length || L.push(".#.+[+~]")
            }), h(function (a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && L.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                L.push(",.*:")
            })), (r.matchesSelector =
                Ba.test(G = U.matches || U.webkitMatchesSelector || U.mozMatchesSelector || U.oMatchesSelector || U.msMatchesSelector)) && h(function (a) {
                r.disconnectedMatch = G.call(a, "div");
                G.call(a, "[s!='']:x");
                qa.push("!=", X)
            }), L = L.length && new RegExp(L.join("|")), qa = qa.length && new RegExp(qa.join("|")), b = Ba.test(U.compareDocumentPosition), N = b || Ba.test(U.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition &&
                    16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)for (; b = b.parentNode;)if (b === a)return!0;
                return!1
            }, R = b ? function (a, b) {
                if (a === b)return xa = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !r.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === P && N(P, a) ? -1 : b === d || b.ownerDocument === P && N(P, b) ? 1 : ka ? J(ka, a) - J(ka, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b)return xa = !0, 0;
                var c, e =
                    0;
                c = a.parentNode;
                var h = b.parentNode, l = [a], f = [b];
                if (!c || !h)return a === d ? -1 : b === d ? 1 : c ? -1 : h ? 1 : ka ? J(ka, a) - J(ka, b) : 0;
                if (c === h)return q(a, b);
                for (c = a; c = c.parentNode;)l.unshift(c);
                for (c = b; c = c.parentNode;)f.unshift(c);
                for (; l[e] === f[e];)e++;
                return e ? q(l[e], f[e]) : l[e] === P ? -1 : f[e] === P ? 1 : 0
            }, d) : Q
        };
        b.matches = function (a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== Q && pa(a), c = c.replace(na, "='$1']"), !(!r.matchesSelector || !K || qa && qa.test(c) || L && L.test(c)))try {
                var d = G.call(a,
                    c);
                if (d || r.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return 0 < b(c, Q, null, [a]).length
        };
        b.contains = function (a, b) {
            return(a.ownerDocument || a) !== Q && pa(a), N(a, b)
        };
        b.attr = function (a, b) {
            (a.ownerDocument || a) !== Q && pa(a);
            var c = y.attrHandle[b.toLowerCase()], c = c && Y.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !K) : void 0;
            return void 0 !== c ? c : r.attributes || !K ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " +
                a);
        };
        b.uniqueSort = function (a) {
            var b, c = [], d = 0, e = 0;
            if (xa = !r.detectDuplicates, ka = !r.sortStable && a.slice(0), a.sort(R), xa) {
                for (; b = a[e++];)b === a[e] && (d = c.push(e));
                for (; d--;)a.splice(c[d], 1)
            }
            return ka = null, a
        };
        x = b.getText = function (a) {
            var b, c = "", d = 0;
            if (b = a.nodeType)if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent)return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)c += x(a)
            } else {
                if (3 === b || 4 === b)return a.nodeValue
            } else for (; b = a[d++];)c += x(b);
            return c
        };
        y = b.selectors = {cacheLength: 50, createPseudo: e,
            match: ca, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) {
                return a[1] = a[1].replace(fa, ga), a[3] = (a[3] || a[4] || a[5] || "").replace(fa, ga), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
            }, CHILD: function (a) {
                return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] &&
                    b.error(a[0]), a
            }, PSEUDO: function (a) {
                var b, c = !a[6] && a[2];
                return ca.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && oa.test(c) && (b = Aa(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
            }}, filter: {TAG: function (a) {
                var b = a.replace(fa, ga).toLowerCase();
                return"*" === a ? function () {
                    return!0
                } : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b
                }
            }, CLASS: function (a) {
                var b = tb[a + " "];
                return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) &&
                    tb(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
            }, ATTR: function (a, c, d) {
                return function (e) {
                    e = b.attr(e, a);
                    return null == e ? "!=" === c : c ? (e += "", "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? -1 < (" " + e.replace(ia, " ") + " ").indexOf(d) : "|=" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1) : !0
                }
            }, CHILD: function (a, b, c, d, e) {
                var h = "nth" !== a.slice(0,
                    3), l = "last" !== a.slice(-4), q = "of-type" === b;
                return 1 === d && 0 === e ? function (a) {
                    return!!a.parentNode
                } : function (b, c, f) {
                    var z, g, m, k, O;
                    c = h !== l ? "nextSibling" : "previousSibling";
                    var n = b.parentNode, u = q && b.nodeName.toLowerCase();
                    f = !f && !q;
                    if (n) {
                        if (h) {
                            for (; c;) {
                                for (g = b; g = g[c];)if (q ? g.nodeName.toLowerCase() === u : 1 === g.nodeType)return!1;
                                O = c = "only" === a && !O && "nextSibling"
                            }
                            return!0
                        }
                        if (O = [l ? n.firstChild : n.lastChild], l && f)for (f = n[B] || (n[B] = {}), z = f[a] || [], k = z[0] === I && z[1], m = z[0] === I && z[2], g = k && n.childNodes[k]; g = ++k && g && g[c] ||
                            (m = k = 0) || O.pop();) {
                            if (1 === g.nodeType && ++m && g === b) {
                                f[a] = [I, k, m];
                                break
                            }
                        } else if (f && (z = (b[B] || (b[B] = {}))[a]) && z[0] === I)m = z[1]; else for (; (g = ++k && g && g[c] || (m = k = 0) || O.pop()) && ((q ? g.nodeName.toLowerCase() !== u : 1 !== g.nodeType) || !++m || (f && ((g[B] || (g[B] = {}))[a] = [I, m]), g !== b)););
                        return m -= e, m === d || 0 === m % d && 0 <= m / d
                    }
                }
            }, PSEUDO: function (a, c) {
                var d, h = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                return h[B] ? h(c) : 1 < h.length ? (d = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ?
                    e(function (a, b) {
                        for (var d, e = h(a, c), l = e.length; l--;)d = J(a, e[l]), a[d] = !(b[d] = e[l])
                    }) : function (a) {
                    return h(a, 0, d)
                }) : h
            }}, pseudos: {not: e(function (a) {
                var b = [], c = [], d = D(a.replace(V, "$1"));
                return d[B] ? e(function (a, b, c, e) {
                    var h;
                    c = d(a, null, e, []);
                    for (e = a.length; e--;)(h = c[e]) && (a[e] = !(b[e] = h))
                }) : function (a, e, h) {
                    return b[0] = a, d(b, null, h, c), b[0] = null, !c.pop()
                }
            }), has: e(function (a) {
                return function (c) {
                    return 0 < b(a, c).length
                }
            }), contains: e(function (a) {
                return a = a.replace(fa, ga), function (b) {
                    return-1 < (b.textContent || b.innerText ||
                        x(b)).indexOf(a)
                }
            }), lang: e(function (a) {
                return ra.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(fa, ga).toLowerCase(), function (b) {
                    var c;
                    do if (c = K ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                    return!1
                }
            }), target: function (b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id
            }, root: function (a) {
                return a === U
            }, focus: function (a) {
                return a === Q.activeElement && (!Q.hasFocus || Q.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
            }, enabled: function (a) {
                return!1 === a.disabled
            }, disabled: function (a) {
                return!0 === a.disabled
            }, checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return"input" === b && !!a.checked || "option" === b && !!a.selected
            }, selected: function (a) {
                return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
            }, empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType)return!1;
                return!0
            }, parent: function (a) {
                return!y.pseudos.empty(a)
            }, header: function (a) {
                return va.test(a.nodeName)
            }, input: function (a) {
                return ua.test(a.nodeName)
            },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return"input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: m(function () {
                    return[0]
                }), last: m(function (a, b) {
                    return[b - 1]
                }), eq: m(function (a, b, c) {
                    return[0 > c ? c + b : c]
                }), even: m(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: m(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: m(function (a, b, c) {
                    for (b =
                                 0 > c ? c + b : c; 0 <= --b;)a.push(b);
                    return a
                }), gt: m(function (a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;)a.push(c);
                    return a
                })}};
        y.pseudos.nth = y.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})y.pseudos[w] = f(w);
        for (w in{submit: !0, reset: !0})y.pseudos[w] = g(w);
        O.prototype = y.filters = y.pseudos;
        y.setFilters = new O;
        Aa = b.tokenize = function (a, c) {
            var d, e, h, l, q, f, z;
            if (q = T[a + " "])return c ? 0 : q.slice(0);
            q = a;
            f = [];
            for (z = y.preFilter; q;) {
                d && !(e = la.exec(q)) || (e && (q = q.slice(e[0].length) || q), f.push(h = []));
                d = !1;
                (e = ma.exec(q)) &&
                (d = e.shift(), h.push({value: d, type: e[0].replace(V, " ")}), q = q.slice(d.length));
                for (l in y.filter)!(e = ca[l].exec(q)) || z[l] && !(e = z[l](e)) || (d = e.shift(), h.push({value: d, type: l, matches: e}), q = q.slice(d.length));
                if (!d)break
            }
            return c ? q.length : q ? b.error(a) : T(a, f).slice(0)
        };
        return D = b.compile = function (a, b) {
            var c, d = [], e = [], h = ba[a + " "];
            if (!h) {
                b || (b = Aa(a));
                for (c = b.length; c--;)h = E(b[c]), h[B] ? d.push(h) : e.push(h);
                h = ba(a, A(e, d));
                h.selector = a
            }
            return h
        }, F = b.select = function (a, b, c, d) {
            var e, h, l, q, f, z = "function" == typeof a &&
                a, g = !d && Aa(a = z.selector || a);
            if (c = c || [], 1 === g.length) {
                if (h = g[0] = g[0].slice(0), 2 < h.length && "ID" === (l = h[0]).type && r.getById && 9 === b.nodeType && K && y.relative[h[1].type]) {
                    if (b = (y.find.ID(l.matches[0].replace(fa, ga), b) || [])[0], !b)return c;
                    z && (b = b.parentNode);
                    a = a.slice(h.shift().value.length)
                }
                for (e = ca.needsContext.test(a) ? 0 : h.length; e-- && (l = h[e], !y.relative[q = l.type]);)if ((f = y.find[q]) && (d = f(l.matches[0].replace(fa, ga), ha.test(h[0].type) && k(b.parentNode) || b))) {
                    if (h.splice(e, 1), a = d.length && n(h), !a)return ja.apply(c,
                        d), c;
                    break
                }
            }
            return(z || D(a, g))(d, b, !K, c, ha.test(a) && k(b.parentNode) || b), c
        }, r.sortStable = B.split("").sort(R).join("") === B, r.detectDuplicates = !!xa, pa(), r.sortDetached = h(function (a) {
            return 1 & a.compareDocumentPosition(Q.createElement("div"))
        }), h(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || l("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), r.attributes && h(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value",
                ""), "" === a.firstChild.getAttribute("value")
        }) || l("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), h(function (a) {
            return null == a.getAttribute("disabled")
        }) || l("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, c) {
            var d;
            return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(k);
    c.find = V;
    c.expr = V.selectors;
    c.expr[":"] = c.expr.pseudos;
    c.unique = V.uniqueSort;
    c.text = V.getText;
    c.isXMLDoc = V.isXML;
    c.contains = V.contains;
    var ub = c.expr.match.needsContext, vb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Pb = /^.[^:#\[\.,]*$/;
    c.filter = function (a, b, d) {
        var e = b[0];
        return d && (a = ":not(" + a + ")"), 1 === b.length && 1 === e.nodeType ? c.find.matchesSelector(e, a) ? [e] : [] : c.find.matches(a, c.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    };
    c.fn.extend({find: function (a) {
        var b, d = [], e = this, h = e.length;
        if ("string" != typeof a)return this.pushStack(c(a).filter(function () {
            for (b = 0; h > b; b++)if (c.contains(e[b],
                this))return!0
        }));
        for (b = 0; h > b; b++)c.find(a, e[b], d);
        return d = this.pushStack(1 < h ? c.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    }, filter: function (a) {
        return this.pushStack(m(this, a || [], !1))
    }, not: function (a) {
        return this.pushStack(m(this, a || [], !0))
    }, is: function (a) {
        return!!m(this, "string" == typeof a && ub.test(a) ? c(a) : a || [], !1).length
    }});
    var ra, x = k.document, cc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (c.fn.init = function (a, b) {
        var d, e;
        if (!a)return this;
        if ("string" == typeof a) {
            if (d = "<" === a.charAt(0) &&
                ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : cc.exec(a), !d || !d[1] && b)return!b || b.jquery ? (b || ra).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof c ? b[0] : b, c.merge(this, c.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : x, !0)), vb.test(d[1]) && c.isPlainObject(b))for (d in b)c.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this
            }
            if (e = x.getElementById(d[2]), e && e.parentNode) {
                if (e.id !== d[2])return ra.find(a);
                this.length = 1;
                this[0] = e
            }
            return this.context = x, this.selector = a, this
        }
        return a.nodeType ?
            (this.context = this[0] = a, this.length = 1, this) : c.isFunction(a) ? "undefined" != typeof ra.ready ? ra.ready(a) : a(c) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), c.makeArray(a, this))
    }).prototype = c.fn;
    ra = c(x);
    var dc = /^(?:parents|prev(?:Until|All))/, ec = {children: !0, contents: !0, next: !0, prev: !0};
    c.extend({dir: function (a, b, d) {
        var e = [];
        for (a = a[b]; a && 9 !== a.nodeType && (void 0 === d || 1 !== a.nodeType || !c(a).is(d));)1 === a.nodeType && e.push(a), a = a[b];
        return e
    }, sibling: function (a, b) {
        for (var c = []; a; a =
            a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
        return c
    }});
    c.fn.extend({has: function (a) {
        var b, d = c(a, this), e = d.length;
        return this.filter(function () {
            for (b = 0; e > b; b++)if (c.contains(this, d[b]))return!0
        })
    }, closest: function (a, b) {
        for (var d, e = 0, h = this.length, l = [], q = ub.test(a) || "string" != typeof a ? c(a, b || this.context) : 0; h > e; e++)for (d = this[e]; d && d !== b; d = d.parentNode)if (11 > d.nodeType && (q ? -1 < q.index(d) : 1 === d.nodeType && c.find.matchesSelector(d, a))) {
            l.push(d);
            break
        }
        return this.pushStack(1 < l.length ? c.unique(l) : l)
    },
        index: function (a) {
            return a ? "string" == typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(c.unique(c.merge(this.get(), c(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }});
    c.each({parent: function (a) {
        return(a = a.parentNode) && 11 !== a.nodeType ? a : null
    }, parents: function (a) {
        return c.dir(a, "parentNode")
    }, parentsUntil: function (a, b, d) {
        return c.dir(a,
            "parentNode", d)
    }, next: function (a) {
        return n(a, "nextSibling")
    }, prev: function (a) {
        return n(a, "previousSibling")
    }, nextAll: function (a) {
        return c.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return c.dir(a, "previousSibling")
    }, nextUntil: function (a, b, d) {
        return c.dir(a, "nextSibling", d)
    }, prevUntil: function (a, b, d) {
        return c.dir(a, "previousSibling", d)
    }, siblings: function (a) {
        return c.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
        return c.sibling(a.firstChild)
    }, contents: function (a) {
        return c.nodeName(a,
            "iframe") ? a.contentDocument || a.contentWindow.document : c.merge([], a.childNodes)
    }}, function (a, b) {
        c.fn[a] = function (d, e) {
            var h = c.map(this, b, d);
            return"Until" !== a.slice(-5) && (e = d), e && "string" == typeof e && (h = c.filter(e, h)), 1 < this.length && (ec[a] || (h = c.unique(h)), dc.test(a) && (h = h.reverse())), this.pushStack(h)
        }
    });
    var S = /\S+/g, Va = {};
    c.Callbacks = function (a) {
        a = "string" == typeof a ? Va[a] || t(a) : c.extend({}, a);
        var b, d, e, h, l, q, f = [], g = !a.once && [], m = function (c) {
            d = a.memory && c;
            e = !0;
            l = q || 0;
            q = 0;
            h = f.length;
            for (b = !0; f && h > l; l++)if (!1 ===
                f[l].apply(c[0], c[1]) && a.stopOnFalse) {
                d = !1;
                break
            }
            b = !1;
            f && (g ? g.length && m(g.shift()) : d ? f = [] : k.disable())
        }, k = {add: function () {
            if (f) {
                var e = f.length;
                !function bc(b) {
                    c.each(b, function (b, d) {
                        var e = c.type(d);
                        "function" === e ? a.unique && k.has(d) || f.push(d) : d && d.length && "string" !== e && bc(d)
                    })
                }(arguments);
                b ? h = f.length : d && (q = e, m(d))
            }
            return this
        }, remove: function () {
            return f && c.each(arguments, function (a, d) {
                for (var e; -1 < (e = c.inArray(d, f, e));)f.splice(e, 1), b && (h >= e && h--, l >= e && l--)
            }), this
        }, has: function (a) {
            return a ? -1 < c.inArray(a,
                f) : !(!f || !f.length)
        }, empty: function () {
            return f = [], h = 0, this
        }, disable: function () {
            return f = g = d = void 0, this
        }, disabled: function () {
            return!f
        }, lock: function () {
            return g = void 0, d || k.disable(), this
        }, locked: function () {
            return!g
        }, fireWith: function (a, c) {
            return!f || e && !g || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? g.push(c) : m(c)), this
        }, fire: function () {
            return k.fireWith(this, arguments), this
        }, fired: function () {
            return!!e
        }};
        return k
    };
    c.extend({Deferred: function (a) {
        var b = [
            ["resolve", "done", c.Callbacks("once memory"), "resolved"],
            ["reject", "fail", c.Callbacks("once memory"), "rejected"],
            ["notify", "progress", c.Callbacks("memory")]
        ], d = "pending", e = {state: function () {
            return d
        }, always: function () {
            return h.done(arguments).fail(arguments), this
        }, then: function () {
            var a = arguments;
            return c.Deferred(function (d) {
                c.each(b, function (b, f) {
                    var g = c.isFunction(a[b]) && a[b];
                    h[f[1]](function () {
                        var a = g && g.apply(this, arguments);
                        a && c.isFunction(a.promise) ? a.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[f[0] + "With"](this === e ? d.promise() :
                            this, g ? [a] : arguments)
                    })
                });
                a = null
            }).promise()
        }, promise: function (a) {
            return null != a ? c.extend(a, e) : e
        }}, h = {};
        return e.pipe = e.then, c.each(b, function (a, c) {
            var f = c[2], g = c[3];
            e[c[1]] = f.add;
            g && f.add(function () {
                d = g
            }, b[1 ^ a][2].disable, b[2][2].lock);
            h[c[0]] = function () {
                return h[c[0] + "With"](this === h ? e : this, arguments), this
            };
            h[c[0] + "With"] = f.fireWith
        }), e.promise(h), a && a.call(h, h), h
    }, when: function (a) {
        var b = 0, d = R.call(arguments), e = d.length, h = 1 !== e || a && c.isFunction(a.promise) ? e : 0, l = 1 === h ? a : c.Deferred(), q = function (a, b, c) {
            return function (d) {
                b[a] = this;
                c[a] = 1 < arguments.length ? R.call(arguments) : d;
                c === f ? l.notifyWith(b, c) : --h || l.resolveWith(b, c)
            }
        }, f, g, m;
        if (1 < e)for (f = Array(e), g = Array(e), m = Array(e); e > b; b++)d[b] && c.isFunction(d[b].promise) ? d[b].promise().done(q(b, m, d)).fail(l.reject).progress(q(b, g, f)) : --h;
        return h || l.resolveWith(m, d), l.promise()
    }});
    var ya;
    c.fn.ready = function (a) {
        return c.ready.promise().done(a), this
    };
    c.extend({isReady: !1, readyWait: 1, holdReady: function (a) {
        a ? c.readyWait++ : c.ready(!0)
    }, ready: function (a) {
        if (!0 ===
            a ? !--c.readyWait : !c.isReady) {
            if (!x.body)return setTimeout(c.ready);
            c.isReady = !0;
            !0 !== a && 0 < --c.readyWait || (ya.resolveWith(x, [c]), c.fn.triggerHandler && (c(x).triggerHandler("ready"), c(x).off("ready")))
        }
    }});
    c.ready.promise = function (a) {
        if (!ya)if (ya = c.Deferred(), "complete" === x.readyState)setTimeout(c.ready); else if (x.addEventListener)x.addEventListener("DOMContentLoaded", f, !1), k.addEventListener("load", f, !1); else {
            x.attachEvent("onreadystatechange", f);
            k.attachEvent("onload", f);
            var b = !1;
            try {
                b = null == k.frameElement &&
                    x.documentElement
            } catch (d) {
            }
            b && b.doScroll && !function h() {
                if (!c.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (a) {
                        return setTimeout(h, 50)
                    }
                    A();
                    c.ready()
                }
            }()
        }
        return ya.promise(a)
    };
    for (var fc in c(w))break;
    w.ownLast = "0" !== fc;
    w.inlineBlockNeedsLayout = !1;
    c(function () {
        var a, b, c, e;
        (c = x.getElementsByTagName("body")[0]) && c.style && (b = x.createElement("div"), e = x.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" !== typeof b.style.zoom &&
            (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", w.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
    });
    (function () {
        var a = x.createElement("div");
        if (null == w.deleteExpando) {
            w.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                w.deleteExpando = !1
            }
        }
    })();
    c.acceptData = function (a) {
        var b = c.noData[(a.nodeName + " ").toLowerCase()], d = +a.nodeType || 1;
        return 1 !== d && 9 !== d ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    };
    var Rb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Qb =
        /([A-Z])/g;
    c.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (a) {
        return a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando], !!a && !v(a)
    }, data: function (a, b, c) {
        return E(a, b, c)
    }, removeData: function (a, b) {
        return r(a, b)
    }, _data: function (a, b, c) {
        return E(a, b, c, !0)
    }, _removeData: function (a, b) {
        return r(a, b, !0)
    }});
    c.fn.extend({data: function (a, b) {
        var d, e, h, l = this[0], q = l && l.attributes;
        if (void 0 === a) {
            if (this.length && (h = c.data(l), 1 === l.nodeType && !c._data(l, "parsedAttrs"))) {
                for (d = q.length; d--;)q[d] && (e = q[d].name, 0 === e.indexOf("data-") && (e = c.camelCase(e.slice(5)), u(l, e, h[e])));
                c._data(l, "parsedAttrs", !0)
            }
            return h
        }
        return"object" == typeof a ? this.each(function () {
            c.data(this, a)
        }) : 1 < arguments.length ? this.each(function () {
            c.data(this, a, b)
        }) : l ? u(l, a, c.data(l, a)) : void 0
    }, removeData: function (a) {
        return this.each(function () {
            c.removeData(this, a)
        })
    }});
    c.extend({queue: function (a, b, d) {
        var e;
        return a ? (b = (b || "fx") + "queue", e = c._data(a, b), d && (!e || c.isArray(d) ?
            e = c._data(a, b, c.makeArray(d)) : e.push(d)), e || []) : void 0
    }, dequeue: function (a, b) {
        b = b || "fx";
        var d = c.queue(a, b), e = d.length, h = d.shift(), l = c._queueHooks(a, b), q = function () {
            c.dequeue(a, b)
        };
        "inprogress" === h && (h = d.shift(), e--);
        h && ("fx" === b && d.unshift("inprogress"), delete l.stop, h.call(a, q, l));
        !e && l && l.empty.fire()
    }, _queueHooks: function (a, b) {
        var d = b + "queueHooks";
        return c._data(a, d) || c._data(a, d, {empty: c.Callbacks("once memory").add(function () {
            c._removeData(a, b + "queue");
            c._removeData(a, d)
        })})
    }});
    c.fn.extend({queue: function (a, b) {
        var d = 2;
        return"string" != typeof a && (b = a, a = "fx", d--), arguments.length < d ? c.queue(this[0], a) : void 0 === b ? this : this.each(function () {
            var d = c.queue(this, a, b);
            c._queueHooks(this, a);
            "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            c.dequeue(this, a)
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, b) {
        var d, e = 1, h = c.Deferred(), l = this, q = this.length, f = function () {
            --e || h.resolveWith(l, [l])
        };
        "string" != typeof a && (b = a, a = void 0);
        for (a = a ||
            "fx"; q--;)(d = c._data(l[q], a + "queueHooks")) && d.empty && (e++, d.empty.add(f));
        return f(), h.promise(b)
    }});
    var sa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, da = ["Top", "Right", "Bottom", "Left"], na = function (a, b) {
        return a = b || a, "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a)
    }, J = c.access = function (a, b, d, e, h, l, q) {
        var f = 0, g = a.length, m = null == d;
        if ("object" === c.type(d))for (f in h = !0, d)c.access(a, b, f, d[f], !0, l, q); else if (void 0 !== e && (h = !0, c.isFunction(e) || (q = !0), m && (q ? (b.call(a, e), b = null) : (m = b, b = function (a, b, d) {
            return m.call(c(a), d)
        })), b))for (; g > f; f++)b(a[f], d, q ? e : e.call(a[f], f, b(a[f], d)));
        return h ? a : m ? b.call(a) : g ? b(a[0], d) : l
    }, Ga = /^(?:checkbox|radio)$/i;
    !function () {
        var a = x.createElement("input"), b = x.createElement("div"), c = x.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", w.leadingWhitespace = 3 === b.firstChild.nodeType, w.tbody = !b.getElementsByTagName("tbody").length, w.htmlSerialize = !!b.getElementsByTagName("link").length, w.html5Clone = "<:nav></:nav>" !==
            x.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), w.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", w.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", w.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, w.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            w.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == w.deleteExpando) {
            w.deleteExpando = !0;
            try {
                delete b.test
            } catch (e) {
                w.deleteExpando = !1
            }
        }
    }();
    (function () {
        var a, b, c = x.createElement("div");
        for (a in{submit: !0, change: !0, focusin: !0})b = "on" + a, (w[a + "Bubbles"] = b in k) || (c.setAttribute(b, "t"), w[a + "Bubbles"] = !1 === c.attributes[b].expando)
    })();
    var Ma = /^(?:input|select|textarea)$/i, gc = /^key/, hc = /^(?:mouse|pointer|contextmenu)|click/, wb = /^(?:focusinfocus|focusoutblur)$/, xb = /^([^.]*)(?:\.(.+)|)$/;
    c.event = {global: {}, add: function (a, b, d, e, h) {
        var l, q, f, g, m, k, n, u, v, r;
        if (f = c._data(a)) {
            d.handler && (g = d, d =
                g.handler, h = g.selector);
            d.guid || (d.guid = c.guid++);
            (q = f.events) || (q = f.events = {});
            (k = f.handle) || (k = f.handle = function (a) {
                return"undefined" === typeof c || a && c.event.triggered === a.type ? void 0 : c.event.dispatch.apply(k.elem, arguments)
            }, k.elem = a);
            b = (b || "").match(S) || [""];
            for (f = b.length; f--;)l = xb.exec(b[f]) || [], v = r = l[1], l = (l[2] || "").split(".").sort(), v && (m = c.event.special[v] || {}, v = (h ? m.delegateType : m.bindType) || v, m = c.event.special[v] || {}, n = c.extend({type: v, origType: r, data: e, handler: d, guid: d.guid, selector: h,
                needsContext: h && c.expr.match.needsContext.test(h), namespace: l.join(".")}, g), (u = q[v]) || (u = q[v] = [], u.delegateCount = 0, m.setup && !1 !== m.setup.call(a, e, l, k) || (a.addEventListener ? a.addEventListener(v, k, !1) : a.attachEvent && a.attachEvent("on" + v, k))), m.add && (m.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), h ? u.splice(u.delegateCount++, 0, n) : u.push(n), c.event.global[v] = !0);
            a = null
        }
    }, remove: function (a, b, d, e, h) {
        var l, f, g, m, k, n, u, v, r, t, p, E = c.hasData(a) && c._data(a);
        if (E && (n = E.events)) {
            b = (b || "").match(S) || [""];
            for (k = b.length; k--;)if (g = xb.exec(b[k]) || [], r = p = g[1], t = (g[2] || "").split(".").sort(), r) {
                u = c.event.special[r] || {};
                r = (e ? u.delegateType : u.bindType) || r;
                v = n[r] || [];
                g = g[2] && new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)");
                for (m = l = v.length; l--;)f = v[l], !h && p !== f.origType || d && d.guid !== f.guid || g && !g.test(f.namespace) || e && e !== f.selector && ("**" !== e || !f.selector) || (v.splice(l, 1), f.selector && v.delegateCount--, u.remove && u.remove.call(a, f));
                m && !v.length && (u.teardown && !1 !== u.teardown.call(a, t, E.handle) || c.removeEvent(a,
                    r, E.handle), delete n[r])
            } else for (r in n)c.event.remove(a, r + b[k], d, e, !0);
            c.isEmptyObject(n) && (delete E.handle, c._removeData(a, "events"))
        }
    }, trigger: function (a, b, d, e) {
        var h, l, f, g, m, n, u = [d || x], v = ia.call(a, "type") ? a.type : a;
        n = ia.call(a, "namespace") ? a.namespace.split(".") : [];
        if (f = h = d = d || x, 3 !== d.nodeType && 8 !== d.nodeType && !wb.test(v + c.event.triggered) && (0 <= v.indexOf(".") && (n = v.split("."), v = n.shift(), n.sort()), l = 0 > v.indexOf(":") && "on" + v, a = a[c.expando] ? a : new c.Event(v, "object" == typeof a && a), a.isTrigger = e ? 2 :
            3, a.namespace = n.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = d), b = null == b ? [a] : c.makeArray(b, [a]), m = c.event.special[v] || {}, e || !m.trigger || !1 !== m.trigger.apply(d, b))) {
            if (!e && !m.noBubble && !c.isWindow(d)) {
                g = m.delegateType || v;
                for (wb.test(g + v) || (f = f.parentNode); f; f = f.parentNode)u.push(f), h = f;
                h === (d.ownerDocument || x) && u.push(h.defaultView || h.parentWindow || k)
            }
            for (n = 0; (f = u[n++]) && !a.isPropagationStopped();)a.type = 1 < n ?
                g : m.bindType || v, (h = (c._data(f, "events") || {})[a.type] && c._data(f, "handle")) && h.apply(f, b), (h = l && f[l]) && h.apply && c.acceptData(f) && (a.result = h.apply(f, b), !1 === a.result && a.preventDefault());
            if (a.type = v, !(e || a.isDefaultPrevented() || m._default && !1 !== m._default.apply(u.pop(), b)) && c.acceptData(d) && l && d[v] && !c.isWindow(d)) {
                (h = d[l]) && (d[l] = null);
                c.event.triggered = v;
                try {
                    d[v]()
                } catch (r) {
                }
                c.event.triggered = void 0;
                h && (d[l] = h)
            }
            return a.result
        }
    }, dispatch: function (a) {
        a = c.event.fix(a);
        var b, d, e, h, l, f = [], g = R.call(arguments);
        b = (c._data(this, "events") || {})[a.type] || [];
        var m = c.event.special[a.type] || {};
        if (g[0] = a, a.delegateTarget = this, !m.preDispatch || !1 !== m.preDispatch.call(this, a)) {
            f = c.event.handlers.call(this, a, b);
            for (b = 0; (h = f[b++]) && !a.isPropagationStopped();)for (a.currentTarget = h.elem, l = 0; (e = h.handlers[l++]) && !a.isImmediatePropagationStopped();)a.namespace_re && !a.namespace_re.test(e.namespace) || (a.handleObj = e, a.data = e.data, d = ((c.event.special[e.origType] || {}).handle || e.handler).apply(h.elem, g), void 0 === d || !1 !== (a.result =
                d) || (a.preventDefault(), a.stopPropagation()));
            return m.postDispatch && m.postDispatch.call(this, a), a.result
        }
    }, handlers: function (a, b) {
        var d, e, h, l, f = [], g = b.delegateCount, m = a.target;
        if (g && m.nodeType && (!a.button || "click" !== a.type))for (; m != this; m = m.parentNode || this)if (1 === m.nodeType && (!0 !== m.disabled || "click" !== a.type)) {
            h = [];
            for (l = 0; g > l; l++)e = b[l], d = e.selector + " ", void 0 === h[d] && (h[d] = e.needsContext ? 0 <= c(d, this).index(m) : c.find(d, this, null, [m]).length), h[d] && h.push(e);
            h.length && f.push({elem: m, handlers: h})
        }
        return g <
            b.length && f.push({elem: this, handlers: b.slice(g)}), f
    }, fix: function (a) {
        if (a[c.expando])return a;
        var b, d, e;
        b = a.type;
        var h = a, l = this.fixHooks[b];
        l || (this.fixHooks[b] = l = hc.test(b) ? this.mouseHooks : gc.test(b) ? this.keyHooks : {});
        e = l.props ? this.props.concat(l.props) : this.props;
        a = new c.Event(h);
        for (b = e.length; b--;)d = e[b], a[d] = h[d];
        return a.target || (a.target = h.srcElement || x), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, l.filter ? l.filter(a, h) : a
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {}, keyHooks: {props: ["char", "charCode", "key", "keyCode"], filter: function (a, b) {
            return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
        }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
            var c, e, h, l = b.button, f = b.fromElement;
            return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || x, h = e.documentElement, c = e.body, a.pageX = b.clientX + (h && h.scrollLeft || c && c.scrollLeft || 0) - (h &&
                h.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (h && h.scrollTop || c && c.scrollTop || 0) - (h && h.clientTop || c && c.clientTop || 0)), !a.relatedTarget && f && (a.relatedTarget = f === a.target ? b.toElement : f), a.which || void 0 === l || (a.which = 1 & l ? 1 : 2 & l ? 3 : 4 & l ? 2 : 0), a
        }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
            if (this !== ba() && this.focus)try {
                return this.focus(), !1
            } catch (a) {
            }
        }, delegateType: "focusin"}, blur: {trigger: function () {
            return this === ba() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"}, click: {trigger: function () {
            return c.nodeName(this,
                "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        }, _default: function (a) {
            return c.nodeName(a.target, "a")
        }}, beforeunload: {postDispatch: function (a) {
            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }}}, simulate: function (a, b, d, e) {
            a = c.extend(new c.Event, d, {type: a, isSimulated: !0, originalEvent: {}});
            e ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
            a.isDefaultPrevented() && d.preventDefault()
        }};
    c.removeEvent = x.removeEventListener ? function (a, b, c) {
        a.removeEventListener &&
        a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    c.Event = function (a, b) {
        return this instanceof c.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? H : D) : this.type = a, b && c.extend(this, b), this.timeStamp = a && a.timeStamp || c.now(), void(this[c.expando] = !0)) : new c.Event(a, b)
    };
    c.Event.prototype = {isDefaultPrevented: D, isPropagationStopped: D,
        isImmediatePropagationStopped: D, preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = H;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = H;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = H;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }};
    c.each({mouseenter: "mouseover",
        mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) {
        c.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var e, h = a.relatedTarget, l = a.handleObj;
            return(!h || h !== this && !c.contains(this, h)) && (a.type = l.origType, e = l.handler.apply(this, arguments), a.type = b), e
        }}
    });
    w.submitBubbles || (c.event.special.submit = {setup: function () {
        return c.nodeName(this, "form") ? !1 : void c.event.add(this, "click._submit keypress._submit", function (a) {
            a = a.target;
            (a = c.nodeName(a, "input") ||
                c.nodeName(a, "button") ? a.form : void 0) && !c._data(a, "submitBubbles") && (c.event.add(a, "submit._submit", function (a) {
                a._submit_bubble = !0
            }), c._data(a, "submitBubbles", !0))
        })
    }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
        return c.nodeName(this, "form") ? !1 : void c.event.remove(this, "._submit")
    }});
    w.changeBubbles || (c.event.special.change = {setup: function () {
        return Ma.test(this.nodeName) ? (("checkbox" ===
            this.type || "radio" === this.type) && (c.event.add(this, "propertychange._change", function (a) {
            "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
        }), c.event.add(this, "click._change", function (a) {
            this._just_changed && !a.isTrigger && (this._just_changed = !1);
            c.event.simulate("change", this, a, !0)
        })), !1) : void c.event.add(this, "beforeactivate._change", function (a) {
            a = a.target;
            Ma.test(a.nodeName) && !c._data(a, "changeBubbles") && (c.event.add(a, "change._change", function (a) {
                !this.parentNode || a.isSimulated || a.isTrigger ||
                c.event.simulate("change", this.parentNode, a, !0)
            }), c._data(a, "changeBubbles", !0))
        })
    }, handle: function (a) {
        var b = a.target;
        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return c.event.remove(this, "._change"), !Ma.test(this.nodeName)
    }});
    w.focusinBubbles || c.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var d = function (a) {
            c.event.simulate(b, a.target, c.event.fix(a), !0)
        };
        c.event.special[b] = {setup: function () {
            var e =
                this.ownerDocument || this, h = c._data(e, b);
            h || e.addEventListener(a, d, !0);
            c._data(e, b, (h || 0) + 1)
        }, teardown: function () {
            var e = this.ownerDocument || this, h = c._data(e, b) - 1;
            h ? c._data(e, b, h) : (e.removeEventListener(a, d, !0), c._removeData(e, b))
        }}
    });
    c.fn.extend({on: function (a, b, d, e, h) {
        var l, f;
        if ("object" == typeof a) {
            "string" != typeof b && (d = d || b, b = void 0);
            for (l in a)this.on(l, b, d, a[l], h);
            return this
        }
        if (null == d && null == e ? (e = b, d = b = void 0) : null == e && ("string" == typeof b ? (e = d, d = void 0) : (e = d, d = b, b = void 0)), !1 === e)e = D; else if (!e)return this;
        return 1 === h && (f = e, e = function (a) {
            return c().off(a), f.apply(this, arguments)
        }, e.guid = f.guid || (f.guid = c.guid++)), this.each(function () {
            c.event.add(this, a, e, d, b)
        })
    }, one: function (a, b, c, e) {
        return this.on(a, b, c, e, 1)
    }, off: function (a, b, d) {
        var e, h;
        if (a && a.preventDefault && a.handleObj)return e = a.handleObj, c(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
        if ("object" == typeof a) {
            for (h in a)this.off(h, b, a[h]);
            return this
        }
        return(!1 === b || "function" == typeof b) && (d =
            b, b = void 0), !1 === d && (d = D), this.each(function () {
            c.event.remove(this, a, d, b)
        })
    }, trigger: function (a, b) {
        return this.each(function () {
            c.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        var d = this[0];
        return d ? c.event.trigger(a, b, d, !0) : void 0
    }});
    var Xa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ic = / jQuery\d+="(?:null|\d+)"/g, yb = new RegExp("<(?:" + Xa + ")[\\s/>]", "i"), Na = /^\s+/, zb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ab = /<([\w:]+)/, Bb = /<tbody/i, jc = /<|&#?\w+;/, kc = /<(?:script|style|link)/i, lc = /checked\s*(?:[^=]|=\s*.checked.)/i, Cb = /^$|\/(?:java|ecma)script/i, Tb = /^true\/(.*)/, mc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, N = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3,
            "<table><tbody><tr>", "</tr></tbody></table>"], _default: w.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Oa = Wa(x).appendChild(x.createElement("div"));
    N.optgroup = N.option;
    N.tbody = N.tfoot = N.colgroup = N.caption = N.thead;
    N.th = N.td;
    c.extend({clone: function (a, b, d) {
        var e, h, l, f, g, m = c.contains(a.ownerDocument, a);
        if (w.html5Clone || c.isXMLDoc(a) || !yb.test("<" + a.nodeName + ">") ? l = a.cloneNode(!0) : (Oa.innerHTML = a.outerHTML, Oa.removeChild(l = Oa.firstChild)), !(w.noCloneEvent && w.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType ||
            c.isXMLDoc(a)))for (e = F(l), g = F(a), f = 0; null != (h = g[f]); ++f)if (e[f]) {
            var k = e[f], n = void 0, v = void 0, u = void 0;
            if (1 === k.nodeType) {
                if (n = k.nodeName.toLowerCase(), !w.noCloneEvent && k[c.expando]) {
                    u = c._data(k);
                    for (v in u.events)c.removeEvent(k, v, u.handle);
                    k.removeAttribute(c.expando)
                }
                "script" === n && k.text !== h.text ? (Za(k).text = h.text, $a(k)) : "object" === n ? (k.parentNode && (k.outerHTML = h.outerHTML), w.html5Clone && h.innerHTML && !c.trim(k.innerHTML) && (k.innerHTML = h.innerHTML)) : "input" === n && Ga.test(h.type) ? (k.defaultChecked =
                    k.checked = h.checked, k.value !== h.value && (k.value = h.value)) : "option" === n ? k.defaultSelected = k.selected = h.defaultSelected : ("input" === n || "textarea" === n) && (k.defaultValue = h.defaultValue)
            }
        }
        if (b)if (d)for (g = g || F(a), e = e || F(l), f = 0; null != (h = g[f]); f++)ab(h, e[f]); else ab(a, l);
        return e = F(l, "script"), 0 < e.length && Ha(e, !m && F(a, "script")), l
    }, buildFragment: function (a, b, d, e) {
        for (var h, l, f, g, m, k, n, v = a.length, u = Wa(b), r = [], t = 0; v > t; t++)if (l = a[t], l || 0 === l)if ("object" === c.type(l))c.merge(r, l.nodeType ? [l] : l); else if (jc.test(l)) {
            g =
                g || u.appendChild(b.createElement("div"));
            m = (Ab.exec(l) || ["", ""])[1].toLowerCase();
            n = N[m] || N._default;
            g.innerHTML = n[1] + l.replace(zb, "<$1></$2>") + n[2];
            for (h = n[0]; h--;)g = g.lastChild;
            if (!w.leadingWhitespace && Na.test(l) && r.push(b.createTextNode(Na.exec(l)[0])), !w.tbody)for (h = (l = "table" !== m || Bb.test(l) ? "<table>" !== n[1] || Bb.test(l) ? 0 : g : g.firstChild) && l.childNodes.length; h--;)c.nodeName(k = l.childNodes[h], "tbody") && !k.childNodes.length && l.removeChild(k);
            c.merge(r, g.childNodes);
            for (g.textContent = ""; g.firstChild;)g.removeChild(g.firstChild);
            g = u.lastChild
        } else r.push(b.createTextNode(l));
        g && u.removeChild(g);
        w.appendChecked || c.grep(F(r, "input"), Sb);
        for (t = 0; l = r[t++];)if ((!e || -1 === c.inArray(l, e)) && (f = c.contains(l.ownerDocument, l), g = F(u.appendChild(l), "script"), f && Ha(g), d))for (h = 0; l = g[h++];)Cb.test(l.type || "") && d.push(l);
        return u
    }, cleanData: function (a, b) {
        for (var d, e, h, l, f = 0, g = c.expando, m = c.cache, k = w.deleteExpando, n = c.event.special; null != (d = a[f]); f++)if ((b || c.acceptData(d)) && (h = d[g], l = h && m[h])) {
            if (l.events)for (e in l.events)n[e] ? c.event.remove(d,
                e) : c.removeEvent(d, e, l.handle);
            m[h] && (delete m[h], k ? delete d[g] : "undefined" !== typeof d.removeAttribute ? d.removeAttribute(g) : d[g] = null, T.push(h))
        }
    }});
    c.fn.extend({text: function (a) {
        return J(this, function (a) {
            return void 0 === a ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || x).createTextNode(a))
        }, null, a, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (a) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ya(this, a).appendChild(a)
        })
    }, prepend: function () {
        return this.domManip(arguments,
            function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ya(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
    }, before: function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
    }, remove: function (a, b) {
        for (var d, e = a ? c.filter(a, this) : this, h = 0; null != (d = e[h]); h++)b || 1 !== d.nodeType || c.cleanData(F(d)), d.parentNode &&
            (b && c.contains(d.ownerDocument, d) && Ha(F(d, "script")), d.parentNode.removeChild(d));
        return this
    }, empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
            for (1 === a.nodeType && c.cleanData(F(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
            a.options && c.nodeName(a, "select") && (a.options.length = 0)
        }
        return this
    }, clone: function (a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
            return c.clone(this, a, b)
        })
    }, html: function (a) {
        return J(this, function (a) {
            var d = this[0] || {}, e = 0, h = this.length;
            if (void 0 === a)return 1 ===
                d.nodeType ? d.innerHTML.replace(ic, "") : void 0;
            if (!("string" != typeof a || kc.test(a) || !w.htmlSerialize && yb.test(a) || !w.leadingWhitespace && Na.test(a) || N[(Ab.exec(a) || ["", ""])[1].toLowerCase()])) {
                a = a.replace(zb, "<$1></$2>");
                try {
                    for (; h > e; e++)d = this[e] || {}, 1 === d.nodeType && (c.cleanData(F(d, !1)), d.innerHTML = a);
                    d = 0
                } catch (l) {
                }
            }
            d && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function () {
        var a = arguments[0];
        return this.domManip(arguments, function (b) {
            a = this.parentNode;
            c.cleanData(F(this));
            a && a.replaceChild(b,
                this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, b) {
        a = rb.apply([], a);
        var d, e, h, l, f = 0, g = this.length, m = this, k = g - 1, n = a[0], v = c.isFunction(n);
        if (v || 1 < g && "string" == typeof n && !w.checkClone && lc.test(n))return this.each(function (c) {
            var d = m.eq(c);
            v && (a[0] = n.call(this, c, d.html()));
            d.domManip(a, b)
        });
        if (g && (l = c.buildFragment(a, this[0].ownerDocument, !1, this), d = l.firstChild, 1 === l.childNodes.length && (l = d), d)) {
            h = c.map(F(l, "script"), Za);
            for (e = h.length; g >
                f; f++)d = l, f !== k && (d = c.clone(d, !0, !0), e && c.merge(h, F(d, "script"))), b.call(this[f], d, f);
            if (e)for (l = h[h.length - 1].ownerDocument, c.map(h, $a), f = 0; e > f; f++)d = h[f], Cb.test(d.type || "") && !c._data(d, "globalEval") && c.contains(l, d) && (d.src ? c._evalUrl && c._evalUrl(d.src) : c.globalEval((d.text || d.textContent || d.innerHTML || "").replace(mc, "")));
            l = d = null
        }
        return this
    }});
    c.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        c.fn[a] = function (a) {
            for (var e =
                0, h = [], l = c(a), f = l.length - 1; f >= e; e++)a = e === f ? this : this.clone(!0), c(l[e])[b](a), La.apply(h, a.get());
            return this.pushStack(h)
        }
    });
    var ma, cb = {};
    !function () {
        var a;
        w.shrinkWrapBlocks = function () {
            if (null != a)return a;
            a = !1;
            var b, c, e;
            return c = x.getElementsByTagName("body")[0], c && c.style ? (b = x.createElement("div"), e = x.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" !== typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                b.appendChild(x.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
        }
    }();
    var Db = /^margin/, ua = new RegExp("^(" + sa + ")(?!px)[a-z%]+$", "i"), ea, W, nc = /^(top|right|bottom|left)$/;
    k.getComputedStyle ? (ea = function (a) {
        return a.ownerDocument.defaultView.opener ? a.ownerDocument.defaultView.getComputedStyle(a, null) : k.getComputedStyle(a, null)
    }, W = function (a, b, d) {
        var e, h, l, f, g = a.style;
        return d = d || ea(a), f = d ? d.getPropertyValue(b) || d[b] : void 0, d && ("" !== f || c.contains(a.ownerDocument, a) ||
            (f = c.style(a, b)), ua.test(f) && Db.test(b) && (e = g.width, h = g.minWidth, l = g.maxWidth, g.minWidth = g.maxWidth = g.width = f, f = d.width, g.width = e, g.minWidth = h, g.maxWidth = l)), void 0 === f ? f : f + ""
    }) : x.documentElement.currentStyle && (ea = function (a) {
        return a.currentStyle
    }, W = function (a, b, c) {
        var e, h, l, f, g = a.style;
        return c = c || ea(a), f = c ? c[b] : void 0, null == f && g && g[b] && (f = g[b]), ua.test(f) && !nc.test(b) && (e = g.left, h = a.runtimeStyle, l = h && h.left, l && (h.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f, f = g.pixelLeft + "px", g.left =
            e, l && (h.left = l)), void 0 === f ? f : f + "" || "auto"
    });
    !function () {
        var a, b, d, e, h, l, f;
        if (a = x.createElement("div"), a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = a.getElementsByTagName("a")[0], b = d && d.style) {
            var g = function () {
                var a, b, c, d;
                (b = x.getElementsByTagName("body")[0]) && b.style && (a = x.createElement("div"), c = x.createElement("div"), c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", b.appendChild(c).appendChild(a), a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    e = h = !1, f = !0, k.getComputedStyle && (e = "1%" !== (k.getComputedStyle(a, null) || {}).top, h = "4px" === (k.getComputedStyle(a, null) || {width: "4px"}).width, d = a.appendChild(x.createElement("div")), d.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", d.style.marginRight = d.style.width = "0", a.style.width = "1px", f = !parseFloat((k.getComputedStyle(d, null) || {}).marginRight), a.removeChild(d)), a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    d = a.getElementsByTagName("td"), d[0].style.cssText = "margin:0;border:0;padding:0;display:none", l = 0 === d[0].offsetHeight, l && (d[0].style.display = "", d[1].style.display = "none", l = 0 === d[0].offsetHeight), b.removeChild(c))
            };
            b.cssText = "float:left;opacity:.5";
            w.opacity = "0.5" === b.opacity;
            w.cssFloat = !!b.cssFloat;
            a.style.backgroundClip = "content-box";
            a.cloneNode(!0).style.backgroundClip = "";
            w.clearCloneStyle = "content-box" === a.style.backgroundClip;
            w.boxSizing = "" === b.boxSizing || "" === b.MozBoxSizing || "" === b.WebkitBoxSizing;
            c.extend(w, {reliableHiddenOffsets: function () {
                return null == l && g(), l
            }, boxSizingReliable: function () {
                return null == h && g(), h
            }, pixelPosition: function () {
                return null == e && g(), e
            }, reliableMarginRight: function () {
                return null == f && g(), f
            }})
        }
    }();
    c.swap = function (a, b, c, e) {
        var h, l = {};
        for (h in b)l[h] = a.style[h], a.style[h] = b[h];
        c = c.apply(a, e || []);
        for (h in b)a.style[h] = l[h];
        return c
    };
    var Pa = /alpha\([^)]*\)/i, oc = /opacity\s*=\s*([^)]*)/, pc = /^(none|table(?!-c[ea]).+)/, Ub = new RegExp("^(" + sa + ")(.*)$", "i"), qc = new RegExp("^([+-])=(" +
        sa + ")", "i"), rc = {position: "absolute", visibility: "hidden", display: "block"}, Eb = {letterSpacing: "0", fontWeight: "400"}, fb = ["Webkit", "O", "Moz", "ms"];
    c.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = W(a, "opacity");
            return"" === c ? "1" : c
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": w.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, b, d, e) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType &&
            a.style) {
            var h, l, f, g = c.camelCase(b), m = a.style;
            if (b = c.cssProps[g] || (c.cssProps[g] = eb(m, g)), f = c.cssHooks[b] || c.cssHooks[g], void 0 === d)return f && "get"in f && void 0 !== (h = f.get(a, !1, e)) ? h : m[b];
            if (l = typeof d, "string" === l && (h = qc.exec(d)) && (d = (h[1] + 1) * h[2] + parseFloat(c.css(a, b)), l = "number"), null != d && d === d && ("number" !== l || c.cssNumber[g] || (d += "px"), w.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (m[b] = "inherit"), !(f && "set"in f && void 0 === (d = f.set(a, d, e)))))try {
                m[b] = d
            } catch (k) {
            }
        }
    }, css: function (a, b, d, e) {
        var h,
            f, g, m = c.camelCase(b);
        return b = c.cssProps[m] || (c.cssProps[m] = eb(a.style, m)), g = c.cssHooks[b] || c.cssHooks[m], g && "get"in g && (f = g.get(a, !0, d)), void 0 === f && (f = W(a, b, e)), "normal" === f && b in Eb && (f = Eb[b]), "" === d || d ? (h = parseFloat(f), !0 === d || c.isNumeric(h) ? h || 0 : f) : f
    }});
    c.each(["height", "width"], function (a, b) {
        c.cssHooks[b] = {get: function (a, e, h) {
            return e ? pc.test(c.css(a, "display")) && 0 === a.offsetWidth ? c.swap(a, rc, function () {
                return jb(a, b, h)
            }) : jb(a, b, h) : void 0
        }, set: function (a, e, h) {
            var f = h && ea(a);
            return hb(a, e, h ?
                ib(a, b, h, w.boxSizing && "border-box" === c.css(a, "boxSizing", !1, f), f) : 0)
        }}
    });
    w.opacity || (c.cssHooks.opacity = {get: function (a, b) {
        return oc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    }, set: function (a, b) {
        var d = a.style, e = a.currentStyle, h = c.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = e && e.filter || d.filter || "";
        d.zoom = 1;
        (1 <= b || "" === b) && "" === c.trim(f.replace(Pa, "")) && d.removeAttribute && (d.removeAttribute("filter"), "" === b || e && !e.filter) || (d.filter = Pa.test(f) ?
            f.replace(Pa, h) : f + " " + h)
    }});
    c.cssHooks.marginRight = db(w.reliableMarginRight, function (a, b) {
        return b ? c.swap(a, {display: "inline-block"}, W, [a, "marginRight"]) : void 0
    });
    c.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        c.cssHooks[a + b] = {expand: function (c) {
            var e = 0, h = {};
            for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > e; e++)h[a + da[e] + b] = c[e] || c[e - 2] || c[0];
            return h
        }};
        Db.test(a) || (c.cssHooks[a + b].set = hb)
    });
    c.fn.extend({css: function (a, b) {
        return J(this, function (a, b, h) {
            var f, g = {}, m = 0;
            if (c.isArray(b)) {
                h = ea(a);
                for (f = b.length; f > m; m++)g[b[m]] = c.css(a, b[m], !1, h);
                return g
            }
            return void 0 !== h ? c.style(a, b, h) : c.css(a, b)
        }, a, b, 1 < arguments.length)
    }, show: function () {
        return gb(this, !0)
    }, hide: function () {
        return gb(this)
    }, toggle: function (a) {
        return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
            na(this) ? c(this).show() : c(this).hide()
        })
    }});
    c.Tween = C;
    C.prototype = {constructor: C, init: function (a, b, d, e, h, f) {
        this.elem = a;
        this.prop = d;
        this.easing = h || "swing";
        this.options = b;
        this.start = this.now = this.cur();
        this.end = e;
        this.unit = f || (c.cssNumber[d] ? "" : "px")
    }, cur: function () {
        var a = C.propHooks[this.prop];
        return a && a.get ? a.get(this) : C.propHooks._default.get(this)
    }, run: function (a) {
        var b, d = C.propHooks[this.prop];
        return this.pos = b = this.options.duration ? c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : C.propHooks._default.set(this), this
    }};
    C.prototype.init.prototype =
        C.prototype;
    C.propHooks = {_default: {get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = c.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
    }, set: function (a) {
        c.fx.step[a.prop] ? c.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[c.cssProps[a.prop]] || c.cssHooks[a.prop]) ? c.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}};
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }};
    c.easing = {linear: function (a) {
        return a
    }, swing: function (a) {
        return.5 - Math.cos(a * Math.PI) / 2
    }};
    c.fx = C.prototype.init;
    c.fx.step = {};
    var X, Ca, sc = /^(?:toggle|show|hide)$/, Fb = new RegExp("^(?:([+-])=|)(" + sa + ")([a-z%]*)$", "i"), tc = /queueHooks$/, wa = [function (a, b, d) {
        var e, h, f, g, m, k, n, v = this, u = {}, r = a.style, t = a.nodeType && na(a), p = c._data(a, "fxshow");
        d.queue || (g = c._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, m = g.empty.fire, g.empty.fire = function () {
            g.unqueued || m()
        }), g.unqueued++, v.always(function () {
            v.always(function () {
                g.unqueued--;
                c.queue(a, "fx").length || g.empty.fire()
            })
        }));
        1 === a.nodeType && ("height"in b || "width"in b) && (d.overflow = [r.overflow, r.overflowX, r.overflowY], k = c.css(a, "display"), n = "none" === k ? c._data(a, "olddisplay") || ca(a.nodeName) : k, "inline" === n && "none" === c.css(a, "float") && (w.inlineBlockNeedsLayout && "inline" !== ca(a.nodeName) ? r.zoom = 1 : r.display = "inline-block"));
        d.overflow && (r.overflow = "hidden", w.shrinkWrapBlocks() || v.always(function () {
            r.overflow = d.overflow[0];
            r.overflowX = d.overflow[1];
            r.overflowY = d.overflow[2]
        }));
        for (e in b)if (h =
            b[e], sc.exec(h)) {
            if (delete b[e], f = f || "toggle" === h, h === (t ? "hide" : "show")) {
                if ("show" !== h || !p || void 0 === p[e])continue;
                t = !0
            }
            u[e] = p && p[e] || c.style(a, e)
        } else k = void 0;
        if (c.isEmptyObject(u))"inline" === ("none" === k ? ca(a.nodeName) : k) && (r.display = k); else for (e in p ? "hidden"in p && (t = p.hidden) : p = c._data(a, "fxshow", {}), f && (p.hidden = !t), t ? c(a).show() : v.done(function () {
            c(a).hide()
        }), v.done(function () {
            var b;
            c._removeData(a, "fxshow");
            for (b in u)c.style(a, b, u[b])
        }), u)b = lb(t ? p[e] : 0, e, v), e in p || (p[e] = b.start, t && (b.end =
            b.start, b.start = "width" === e || "height" === e ? 1 : 0))
    }], oa = {"*": [function (a, b) {
        var d = this.createTween(a, b), e = d.cur(), h = Fb.exec(b), f = h && h[3] || (c.cssNumber[a] ? "" : "px"), g = (c.cssNumber[a] || "px" !== f && +e) && Fb.exec(c.css(d.elem, a)), m = 1, k = 20;
        if (g && g[3] !== f) {
            f = f || g[3];
            h = h || [];
            g = +e || 1;
            do m = m || ".5", g /= m, c.style(d.elem, a, g + f); while (m !== (m = d.cur() / e) && 1 !== m && --k)
        }
        return h && (g = d.start = +g || +e || 0, d.unit = f, d.end = h[1] ? g + (h[1] + 1) * h[2] : +h[2]), d
    }]};
    c.Animation = c.extend(mb, {tweener: function (a, b) {
        c.isFunction(a) ? (b = a, a = ["*"]) :
            a = a.split(" ");
        for (var d, e = 0, h = a.length; h > e; e++)d = a[e], oa[d] = oa[d] || [], oa[d].unshift(b)
    }, prefilter: function (a, b) {
        b ? wa.unshift(a) : wa.push(a)
    }});
    c.speed = function (a, b, d) {
        var e = a && "object" == typeof a ? c.extend({}, a) : {complete: d || !d && b || c.isFunction(a) && a, duration: a, easing: d && b || b && !c.isFunction(b) && b};
        return e.duration = c.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default, (null == e.queue || !0 === e.queue) && (e.queue = "fx"), e.old = e.complete, e.complete =
            function () {
                c.isFunction(e.old) && e.old.call(this);
                e.queue && c.dequeue(this, e.queue)
            }, e
    };
    c.fn.extend({fadeTo: function (a, b, c, e) {
        return this.filter(na).css("opacity", 0).show().end().animate({opacity: b}, a, c, e)
    }, animate: function (a, b, d, e) {
        var h = c.isEmptyObject(a), f = c.speed(b, d, e);
        b = function () {
            var b = mb(this, c.extend({}, a), f);
            (h || c._data(this, "finish")) && b.stop(!0)
        };
        return b.finish = b, h || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
    }, stop: function (a, b, d) {
        var e = function (a) {
            var b = a.stop;
            delete a.stop;
            b(d)
        };
        return"string" != typeof a && (d = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
            var b = !0, f = null != a && a + "queueHooks", g = c.timers, m = c._data(this);
            if (f)m[f] && m[f].stop && e(m[f]); else for (f in m)m[f] && m[f].stop && tc.test(f) && e(m[f]);
            for (f = g.length; f--;)g[f].elem !== this || null != a && g[f].queue !== a || (g[f].anim.stop(d), b = !1, g.splice(f, 1));
            !b && d || c.dequeue(this, a)
        })
    }, finish: function (a) {
        return!1 !== a && (a = a || "fx"), this.each(function () {
            var b, d = c._data(this), e = d[a + "queue"];
            b = d[a + "queueHooks"];
            var h =
                c.timers, f = e ? e.length : 0;
            d.finish = !0;
            c.queue(this, a, []);
            b && b.stop && b.stop.call(this, !0);
            for (b = h.length; b--;)h[b].elem === this && h[b].queue === a && (h[b].anim.stop(!0), h.splice(b, 1));
            for (b = 0; f > b; b++)e[b] && e[b].finish && e[b].finish.call(this);
            delete d.finish
        })
    }});
    c.each(["toggle", "show", "hide"], function (a, b) {
        var d = c.fn[b];
        c.fn[b] = function (a, c, f) {
            return null == a || "boolean" == typeof a ? d.apply(this, arguments) : this.animate(va(b, !0), a, c, f)
        }
    });
    c.each({slideDown: va("show"), slideUp: va("hide"), slideToggle: va("toggle"),
        fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        c.fn[a] = function (a, c, h) {
            return this.animate(b, a, c, h)
        }
    });
    c.timers = [];
    c.fx.tick = function () {
        var a, b = c.timers, d = 0;
        for (X = c.now(); d < b.length; d++)a = b[d], a() || b[d] !== a || b.splice(d--, 1);
        b.length || c.fx.stop();
        X = void 0
    };
    c.fx.timer = function (a) {
        c.timers.push(a);
        a() ? c.fx.start() : c.timers.pop()
    };
    c.fx.interval = 13;
    c.fx.start = function () {
        Ca || (Ca = setInterval(c.fx.tick, c.fx.interval))
    };
    c.fx.stop = function () {
        clearInterval(Ca);
        Ca = null
    };
    c.fx.speeds = {slow: 600, fast: 200, _default: 400};
    c.fn.delay = function (a, b) {
        return a = c.fx ? c.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var h = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(h)
            }
        })
    };
    (function () {
        var a, b, c, e, h;
        b = x.createElement("div");
        b.setAttribute("className", "t");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        e = b.getElementsByTagName("a")[0];
        c = x.createElement("select");
        h = c.appendChild(x.createElement("option"));
        a = b.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px";
        w.getSetAttribute = "t" !== b.className;
        w.style = /top/.test(e.getAttribute("style"));
        w.hrefNormalized = "/a" === e.getAttribute("href");
        w.checkOn = !!a.value;
        w.optSelected = h.selected;
        w.enctype = !!x.createElement("form").enctype;
        c.disabled = !0;
        w.optDisabled = !h.disabled;
        a = x.createElement("input");
        a.setAttribute("value", "");
        w.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        w.radioValue = "t" === a.value
    })();
    var uc = /\r/g;
    c.fn.extend({val: function (a) {
        var b, d, e, h =
            this[0];
        if (arguments.length)return e = c.isFunction(a), this.each(function (d) {
            var h;
            1 === this.nodeType && (h = e ? a.call(this, d, c(this).val()) : a, null == h ? h = "" : "number" == typeof h ? h += "" : c.isArray(h) && (h = c.map(h, function (a) {
                return null == a ? "" : a + ""
            })), b = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, h, "value") || (this.value = h))
        });
        if (h)return b = c.valHooks[h.type] || c.valHooks[h.nodeName.toLowerCase()], b && "get"in b && void 0 !== (d = b.get(h, "value")) ? d : (d = h.value, "string" == typeof d ? d.replace(uc, "") : null == d ? "" : d)
    }});
    c.extend({valHooks: {option: {get: function (a) {
        var b = c.find.attr(a, "value");
        return null != b ? b : c.trim(c.text(a))
    }}, select: {get: function (a) {
        for (var b, d = a.options, e = a.selectedIndex, h = "select-one" === a.type || 0 > e, f = h ? null : [], g = h ? e + 1 : d.length, m = 0 > e ? g : h ? e : 0; g > m; m++)if (b = d[m], !(!b.selected && m !== e || (w.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && c.nodeName(b.parentNode, "optgroup"))) {
            if (a = c(b).val(), h)return a;
            f.push(a)
        }
        return f
    }, set: function (a, b) {
        for (var d, e, h = a.options, f = c.makeArray(b), g = h.length; g--;)if (e = h[g], 0 <= c.inArray(c.valHooks.option.get(e), f))try {
            e.selected = d = !0
        } catch (m) {
            e.scrollHeight
        } else e.selected = !1;
        return d || (a.selectedIndex = -1), h
    }}}});
    c.each(["radio", "checkbox"], function () {
        c.valHooks[this] = {set: function (a, b) {
            return c.isArray(b) ? a.checked = 0 <= c.inArray(c(a).val(), b) : void 0
        }};
        w.checkOn || (c.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var la, Gb, Y = c.expr.attrHandle, Qa = /^(?:checked|selected)$/i,
        Z = w.getSetAttribute, Da = w.input;
    c.fn.extend({attr: function (a, b) {
        return J(this, c.attr, a, b, 1 < arguments.length)
    }, removeAttr: function (a) {
        return this.each(function () {
            c.removeAttr(this, a)
        })
    }});
    c.extend({attr: function (a, b, d) {
        var e, h, f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)return"undefined" === typeof a.getAttribute ? c.prop(a, b, d) : (1 === f && c.isXMLDoc(a) || (b = b.toLowerCase(), e = c.attrHooks[b] || (c.expr.match.bool.test(b) ? Gb : la)), void 0 === d ? e && "get"in e && null !== (h = e.get(a, b)) ? h : (h = c.find.attr(a, b), null == h ? void 0 : h) :
                null !== d ? e && "set"in e && void 0 !== (h = e.set(a, d, b)) ? h : (a.setAttribute(b, d + ""), d) : void c.removeAttr(a, b))
    }, removeAttr: function (a, b) {
        var d, e, h = 0, f = b && b.match(S);
        if (f && 1 === a.nodeType)for (; d = f[h++];)e = c.propFix[d] || d, c.expr.match.bool.test(d) ? Da && Z || !Qa.test(d) ? a[e] = !1 : a[c.camelCase("default-" + d)] = a[e] = !1 : c.attr(a, d, ""), a.removeAttribute(Z ? d : e)
    }, attrHooks: {type: {set: function (a, b) {
        if (!w.radioValue && "radio" === b && c.nodeName(a, "input")) {
            var d = a.value;
            return a.setAttribute("type", b), d && (a.value = d), b
        }
    }}}});
    Gb =
    {set: function (a, b, d) {
        return!1 === b ? c.removeAttr(a, d) : Da && Z || !Qa.test(d) ? a.setAttribute(!Z && c.propFix[d] || d, d) : a[c.camelCase("default-" + d)] = a[d] = !0, d
    }};
    c.each(c.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var d = Y[b] || c.find.attr;
        Y[b] = Da && Z || !Qa.test(b) ? function (a, b, c) {
            var f, g;
            return c || (g = Y[b], Y[b] = f, f = null != d(a, b, c) ? b.toLowerCase() : null, Y[b] = g), f
        } : function (a, b, d) {
            return d ? void 0 : a[c.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Da && Z || (c.attrHooks.value = {set: function (a, b, d) {
        return c.nodeName(a,
            "input") ? void(a.defaultValue = b) : la && la.set(a, b, d)
    }});
    Z || (la = {set: function (a, b, c) {
        var e = a.getAttributeNode(c);
        return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(c)), e.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }}, Y.id = Y.name = Y.coords = function (a, b, c) {
        var e;
        return c ? void 0 : (e = a.getAttributeNode(b)) && "" !== e.value ? e.value : null
    }, c.valHooks.button = {get: function (a, b) {
        var c = a.getAttributeNode(b);
        return c && c.specified ? c.value : void 0
    }, set: la.set}, c.attrHooks.contenteditable = {set: function (a, b, c) {
        la.set(a, "" === b ? !1 : b, c)
    }}, c.each(["width", "height"], function (a, b) {
        c.attrHooks[b] = {set: function (a, c) {
            return"" === c ? (a.setAttribute(b, "auto"), c) : void 0
        }}
    }));
    w.style || (c.attrHooks.style = {get: function (a) {
        return a.style.cssText || void 0
    }, set: function (a, b) {
        return a.style.cssText = b + ""
    }});
    var vc = /^(?:input|select|textarea|button|object)$/i, wc = /^(?:a|area)$/i;
    c.fn.extend({prop: function (a, b) {
        return J(this, c.prop, a, b, 1 < arguments.length)
    }, removeProp: function (a) {
        return a = c.propFix[a] || a, this.each(function () {
            try {
                this[a] = void 0, delete this[a]
            } catch (b) {
            }
        })
    }});
    c.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, d) {
        var e, h, f, g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !c.isXMLDoc(a), f && (b = c.propFix[b] || b, h = c.propHooks[b]), void 0 !== d ? h && "set"in h && void 0 !== (e = h.set(a, d, b)) ? e : a[b] = d : h && "get"in h && null !== (e = h.get(a, b)) ? e : a[b]
    }, propHooks: {tabIndex: {get: function (a) {
        var b = c.find.attr(a, "tabindex");
        return b ? parseInt(b, 10) : vc.test(a.nodeName) || wc.test(a.nodeName) && a.href ? 0 : -1
    }}}});
    w.hrefNormalized ||
    c.each(["href", "src"], function (a, b) {
        c.propHooks[b] = {get: function (a) {
            return a.getAttribute(b, 4)
        }}
    });
    w.optSelected || (c.propHooks.selected = {get: function (a) {
        a = a.parentNode;
        return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
    }});
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        c.propFix[this.toLowerCase()] = this
    });
    w.enctype || (c.propFix.enctype = "encoding");
    var Ra = /[\t\r\n\f]/g;
    c.fn.extend({addClass: function (a) {
        var b,
            d, e, h, f, g = 0, m = this.length;
        b = "string" == typeof a && a;
        if (c.isFunction(a))return this.each(function (b) {
            c(this).addClass(a.call(this, b, this.className))
        });
        if (b)for (b = (a || "").match(S) || []; m > g; g++)if (d = this[g], e = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Ra, " ") : " ")) {
            for (f = 0; h = b[f++];)0 > e.indexOf(" " + h + " ") && (e += h + " ");
            e = c.trim(e);
            d.className !== e && (d.className = e)
        }
        return this
    }, removeClass: function (a) {
        var b, d, e, h, f, g = 0, m = this.length;
        b = 0 === arguments.length || "string" == typeof a && a;
        if (c.isFunction(a))return this.each(function (b) {
            c(this).removeClass(a.call(this,
                b, this.className))
        });
        if (b)for (b = (a || "").match(S) || []; m > g; g++)if (d = this[g], e = 1 === d.nodeType && (d.className ? (" " + d.className + " ").replace(Ra, " ") : "")) {
            for (f = 0; h = b[f++];)for (; 0 <= e.indexOf(" " + h + " ");)e = e.replace(" " + h + " ", " ");
            e = a ? c.trim(e) : "";
            d.className !== e && (d.className = e)
        }
        return this
    }, toggleClass: function (a, b) {
        var d = typeof a;
        return"boolean" == typeof b && "string" === d ? b ? this.addClass(a) : this.removeClass(a) : this.each(c.isFunction(a) ? function (d) {
            c(this).toggleClass(a.call(this, d, this.className, b), b)
        } : function () {
            if ("string" ===
                d)for (var b, h = 0, f = c(this), g = a.match(S) || []; b = g[h++];)f.hasClass(b) ? f.removeClass(b) : f.addClass(b); else("undefined" === d || "boolean" === d) && (this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || "")
        })
    }, hasClass: function (a) {
        a = " " + a + " ";
        for (var b = 0, c = this.length; c > b; b++)if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Ra, " ").indexOf(a))return!0;
        return!1
    }});
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (a, b) {
            c.fn[b] = function (a, c) {
                return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
            }
        });
    c.fn.extend({hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, delegate: function (a, b, c, e) {
        return this.on(b, a, c, e)
    }, undelegate: function (a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }});
    var Sa = c.now(), Ta = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    c.parseJSON = function (a) {
        if (k.JSON && k.JSON.parse)return k.JSON.parse(a + "");
        var b, d = null, e = c.trim(a + "");
        return e && !c.trim(e.replace(xc, function (a, c, e, f) {
            return b && c && (d = 0), 0 === d ? a : (b = e || c, d += !f - !e, "")
        })) ? Function("return " + e)() : c.error("Invalid JSON: " + a)
    };
    c.parseXML = function (a) {
        var b, d;
        if (!a || "string" != typeof a)return null;
        try {
            k.DOMParser ? (d = new DOMParser, b = d.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
        } catch (e) {
            b = void 0
        }
        return b && b.documentElement && !b.getElementsByTagName("parsererror").length || c.error("Invalid XML: " + a), b
    };
    var aa, M, yc = /#.*$/, Hb = /([?&])_=[^&]*/, zc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ac = /^(?:GET|HEAD)$/, Bc = /^\/\//, Ib = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Jb = {}, Ia = {}, Kb = "*/".concat("*");
    try {
        M = location.href
    } catch (Ic) {
        M = x.createElement("a"), M.href = "", M = M.href
    }
    aa = Ib.exec(M.toLowerCase()) || [];
    c.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: M, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(aa[1]),
        global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": c.parseJSON, "text xml": c.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, b) {
        return b ? Ja(Ja(a,
            c.ajaxSettings), b) : Ja(c.ajaxSettings, a)
    }, ajaxPrefilter: nb(Jb), ajaxTransport: nb(Ia), ajax: function (a, b) {
        function d(a, b, d, e) {
            var f, h, u, x, H = b;
            if (2 !== D) {
                D = 2;
                k && clearTimeout(k);
                v = void 0;
                m = e || "";
                y.readyState = 0 < a ? 4 : 0;
                e = 200 <= a && 300 > a || 304 === a;
                if (d) {
                    u = r;
                    for (var F = y, K, L, C, G, N = u.contents, B = u.dataTypes; "*" === B[0];)B.shift(), void 0 === L && (L = u.mimeType || F.getResponseHeader("Content-Type"));
                    if (L)for (G in N)if (N[G] && N[G].test(L)) {
                        B.unshift(G);
                        break
                    }
                    if (B[0]in d)C = B[0]; else {
                        for (G in d) {
                            if (!B[0] || u.converters[G + " " + B[0]]) {
                                C =
                                    G;
                                break
                            }
                            K || (K = G)
                        }
                        C = C || K
                    }
                    u = C ? (C !== B[0] && B.unshift(C), d[C]) : void 0
                }
                var P;
                a:{
                    d = r;
                    K = u;
                    L = y;
                    C = e;
                    var I, M, J;
                    u = {};
                    F = d.dataTypes.slice();
                    if (F[1])for (I in d.converters)u[I.toLowerCase()] = d.converters[I];
                    for (G = F.shift(); G;)if (d.responseFields[G] && (L[d.responseFields[G]] = K), !J && C && d.dataFilter && (K = d.dataFilter(K, d.dataType)), J = G, G = F.shift())if ("*" === G)G = J; else if ("*" !== J && J !== G) {
                        if (I = u[J + " " + G] || u["* " + G], !I)for (P in u)if (M = P.split(" "), M[1] === G && (I = u[J + " " + M[0]] || u["* " + M[0]])) {
                            !0 === I ? I = u[P] : !0 !== u[P] && (G = M[0],
                                F.unshift(M[1]));
                            break
                        }
                        if (!0 !== I)if (I && d["throws"])K = I(K); else try {
                            K = I(K)
                        } catch (R) {
                            P = {state: "parsererror", error: I ? R : "No conversion from " + J + " to " + G};
                            break a
                        }
                    }
                    P = {state: "success", data: K}
                }
                u = P;
                e ? (r.ifModified && (x = y.getResponseHeader("Last-Modified"), x && (c.lastModified[g] = x), x = y.getResponseHeader("etag"), x && (c.etag[g] = x)), 204 === a || "HEAD" === r.type ? H = "nocontent" : 304 === a ? H = "notmodified" : (H = u.state, f = u.data, h = u.error, e = !h)) : (h = H, (a || !H) && (H = "error", 0 > a && (a = 0)));
                y.status = a;
                y.statusText = (b || H) + "";
                e ? E.resolveWith(t,
                    [f, H, y]) : E.rejectWith(t, [y, H, h]);
                y.statusCode(w);
                w = void 0;
                n && p.trigger(e ? "ajaxSuccess" : "ajaxError", [y, r, e ? f : h]);
                A.fireWith(t, [y, H]);
                n && (p.trigger("ajaxComplete", [y, r]), --c.active || c.event.trigger("ajaxStop"))
            }
        }

        "object" == typeof a && (b = a, a = void 0);
        b = b || {};
        var e, f, g, m, k, n, v, u, r = c.ajaxSetup({}, b), t = r.context || r, p = r.context && (t.nodeType || t.jquery) ? c(t) : c.event, E = c.Deferred(), A = c.Callbacks("once memory"), w = r.statusCode || {}, x = {}, H = {}, D = 0, F = "canceled", y = {readyState: 0, getResponseHeader: function (a) {
            var b;
            if (2 ===
                D) {
                if (!u)for (u = {}; b = zc.exec(m);)u[b[1].toLowerCase()] = b[2];
                b = u[a.toLowerCase()]
            }
            return null == b ? null : b
        }, getAllResponseHeaders: function () {
            return 2 === D ? m : null
        }, setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return D || (a = H[c] = H[c] || a, x[a] = b), this
        }, overrideMimeType: function (a) {
            return D || (r.mimeType = a), this
        }, statusCode: function (a) {
            var b;
            if (a)if (2 > D)for (b in a)w[b] = [w[b], a[b]]; else y.always(a[y.status]);
            return this
        }, abort: function (a) {
            a = a || F;
            return v && v.abort(a), d(0, a), this
        }};
        if (E.promise(y).complete =
            A.add, y.success = y.done, y.error = y.fail, r.url = ((a || r.url || M) + "").replace(yc, "").replace(Bc, aa[1] + "//"), r.type = b.method || b.type || r.method || r.type, r.dataTypes = c.trim(r.dataType || "*").toLowerCase().match(S) || [""], null == r.crossDomain && (e = Ib.exec(r.url.toLowerCase()), r.crossDomain = !(!e || e[1] === aa[1] && e[2] === aa[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (aa[3] || ("http:" === aa[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = c.param(r.data, r.traditional)), ob(Jb, r, b, y), 2 === D)return y;
        (n = c.event && r.global) && 0 === c.active++ && c.event.trigger("ajaxStart");
        r.type = r.type.toUpperCase();
        r.hasContent = !Ac.test(r.type);
        g = r.url;
        r.hasContent || (r.data && (g = r.url += (Ta.test(g) ? "&" : "?") + r.data, delete r.data), !1 === r.cache && (r.url = Hb.test(g) ? g.replace(Hb, "$1_=" + Sa++) : g + (Ta.test(g) ? "&" : "?") + "_=" + Sa++));
        r.ifModified && (c.lastModified[g] && y.setRequestHeader("If-Modified-Since", c.lastModified[g]), c.etag[g] && y.setRequestHeader("If-None-Match", c.etag[g]));
        (r.data && r.hasContent && !1 !== r.contentType || b.contentType) &&
        y.setRequestHeader("Content-Type", r.contentType);
        y.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : r.accepts["*"]);
        for (f in r.headers)y.setRequestHeader(f, r.headers[f]);
        if (r.beforeSend && (!1 === r.beforeSend.call(t, y, r) || 2 === D))return y.abort();
        F = "abort";
        for (f in{success: 1, error: 1, complete: 1})y[f](r[f]);
        if (v = ob(Ia, r, b, y)) {
            y.readyState = 1;
            n && p.trigger("ajaxSend", [y, r]);
            r.async && 0 < r.timeout && (k = setTimeout(function () {
                    y.abort("timeout")
                },
                r.timeout));
            try {
                D = 1, v.send(x, d)
            } catch (C) {
                if (!(2 > D))throw C;
                d(-1, C)
            }
        } else d(-1, "No Transport");
        return y
    }, getJSON: function (a, b, d) {
        return c.get(a, b, d, "json")
    }, getScript: function (a, b) {
        return c.get(a, void 0, b, "script")
    }});
    c.each(["get", "post"], function (a, b) {
        c[b] = function (a, e, f, g) {
            return c.isFunction(e) && (g = g || f, f = e, e = void 0), c.ajax({url: a, type: b, dataType: g, data: e, success: f})
        }
    });
    c._evalUrl = function (a) {
        return c.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    c.fn.extend({wrapAll: function (a) {
        if (c.isFunction(a))return this.each(function (b) {
            c(this).wrapAll(a.call(this,
                b))
        });
        if (this[0]) {
            var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]);
            b.map(function () {
                for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                return a
            }).append(this)
        }
        return this
    }, wrapInner: function (a) {
        return this.each(c.isFunction(a) ? function (b) {
            c(this).wrapInner(a.call(this, b))
        } : function () {
            var b = c(this), d = b.contents();
            d.length ? d.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = c.isFunction(a);
        return this.each(function (d) {
            c(this).wrapAll(b ?
                a.call(this, d) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)
        }).end()
    }});
    c.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !w.reliableHiddenOffsets() && "none" === (a.style && a.style.display || c.css(a, "display"))
    };
    c.expr.filters.visible = function (a) {
        return!c.expr.filters.hidden(a)
    };
    var Cc = /%20/g, Wb = /\[\]$/, Lb = /\r?\n/g, Dc = /^(?:submit|button|image|reset|file)$/i, Ec = /^(?:input|select|textarea|keygen)/i;
    c.param =
        function (a, b) {
            var d, e = [], f = function (a, b) {
                b = c.isFunction(b) ? b() : null == b ? "" : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = c.ajaxSettings && c.ajaxSettings.traditional), c.isArray(a) || a.jquery && !c.isPlainObject(a))c.each(a, function () {
                f(this.name, this.value)
            }); else for (d in a)Ka(d, a[d], b, f);
            return e.join("&").replace(Cc, "+")
        };
    c.fn.extend({serialize: function () {
        return c.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var a = c.prop(this, "elements");
            return a ? c.makeArray(a) : this
        }).filter(function () {
            var a = this.type;
            return this.name && !c(this).is(":disabled") && Ec.test(this.nodeName) && !Dc.test(a) && (this.checked || !Ga.test(a))
        }).map(function (a, b) {
            var d = c(this).val();
            return null == d ? null : c.isArray(d) ? c.map(d, function (a) {
                return{name: b.name, value: a.replace(Lb, "\r\n")}
            }) : {name: b.name, value: d.replace(Lb, "\r\n")}
        }).get()
    }});
    c.ajaxSettings.xhr = void 0 !== k.ActiveXObject ? function () {
        var a;
        if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) &&
            pb()))a:{
            try {
                a = new k.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {
            }
            a = void 0
        }
        return a
    } : pb;
    var Fc = 0, Ea = {}, Fa = c.ajaxSettings.xhr();
    k.attachEvent && k.attachEvent("onunload", function () {
        for (var a in Ea)Ea[a](void 0, !0)
    });
    w.cors = !!Fa && "withCredentials"in Fa;
    (Fa = w.ajax = !!Fa) && c.ajaxTransport(function (a) {
        if (!a.crossDomain || w.cors) {
            var b;
            return{send: function (d, e) {
                var f, g = a.xhr(), m = ++Fc;
                if (g.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (f in a.xhrFields)g[f] = a.xhrFields[f];
                a.mimeType &&
                g.overrideMimeType && g.overrideMimeType(a.mimeType);
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d)void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                g.send(a.hasContent && a.data || null);
                b = function (d, f) {
                    var h, k, n;
                    if (b && (f || 4 === g.readyState))if (delete Ea[m], b = void 0, g.onreadystatechange = c.noop, f)4 !== g.readyState && g.abort(); else {
                        n = {};
                        h = g.status;
                        "string" == typeof g.responseText && (n.text = g.responseText);
                        try {
                            k = g.statusText
                        } catch (u) {
                            k = ""
                        }
                        h || !a.isLocal || a.crossDomain ? 1223 ===
                            h && (h = 204) : h = n.text ? 200 : 404
                    }
                    n && e(h, k, n, g.getAllResponseHeaders())
                };
                a.async ? 4 === g.readyState ? setTimeout(b) : g.onreadystatechange = Ea[m] = b : b()
            }, abort: function () {
                b && b(void 0, !0)
            }}
        }
    });
    c.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (a) {
        return c.globalEval(a), a
    }}});
    c.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET",
            a.global = !1)
    });
    c.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, d = x.head || c("head")[0] || x.documentElement;
            return{send: function (c, f) {
                b = x.createElement("script");
                b.async = !0;
                a.scriptCharset && (b.charset = a.scriptCharset);
                b.src = a.url;
                b.onload = b.onreadystatechange = function (a, c) {
                    (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                };
                d.insertBefore(b, d.firstChild)
            }, abort: function () {
                b &&
                b.onload(void 0, !0)
            }}
        }
    });
    var Mb = [], Ua = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var a = Mb.pop() || c.expando + "_" + Sa++;
        return this[a] = !0, a
    }});
    c.ajaxPrefilter("json jsonp", function (a, b, d) {
        var e, f, g, m = !1 !== a.jsonp && (Ua.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Ua.test(a.data) && "data");
        return m || "jsonp" === a.dataTypes[0] ? (e = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, m ?
            a[m] = a[m].replace(Ua, "$1" + e) : !1 !== a.jsonp && (a.url += (Ta.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function () {
            return g || c.error(e + " was not called"), g[0]
        }, a.dataTypes[0] = "json", f = k[e], k[e] = function () {
            g = arguments
        }, d.always(function () {
            k[e] = f;
            a[e] && (a.jsonpCallback = b.jsonpCallback, Mb.push(e));
            g && c.isFunction(f) && f(g[0]);
            g = f = void 0
        }), "script") : void 0
    });
    c.parseHTML = function (a, b, d) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (d = b, b = !1);
        b = b || x;
        var e = vb.exec(a);
        d = !d && [];
        return e ? [b.createElement(e[1])] : (e = c.buildFragment([a], b, d), d && d.length && c(d).remove(), c.merge([], e.childNodes))
    };
    var Nb = c.fn.load;
    c.fn.load = function (a, b, d) {
        if ("string" != typeof a && Nb)return Nb.apply(this, arguments);
        var e, f, g, m = this, k = a.indexOf(" ");
        return 0 <= k && (e = c.trim(a.slice(k, a.length)), a = a.slice(0, k)), c.isFunction(b) ? (d = b, b = void 0) : b && "object" == typeof b && (g = "POST"), 0 < m.length && c.ajax({url: a, type: g, dataType: "html", data: b}).done(function (a) {
            f = arguments;
            m.html(e ? c("<div>").append(c.parseHTML(a)).find(e) :
                a)
        }).complete(d && function (a, b) {
            m.each(d, f || [a.responseText, b, a])
        }), this
    };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        c.fn[b] = function (a) {
            return this.on(b, a)
        }
    });
    c.expr.filters.animated = function (a) {
        return c.grep(c.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ob = k.document.documentElement;
    c.offset = {setOffset: function (a, b, d) {
        var e, f, g, m, k, n, u = c.css(a, "position"), v = c(a), r = {};
        "static" === u && (a.style.position = "relative");
        k = v.offset();
        g = c.css(a, "top");
        n = c.css(a, "left");
        ("absolute" === u || "fixed" === u) && -1 < c.inArray("auto", [g, n]) ? (e = v.position(), m = e.top, f = e.left) : (m = parseFloat(g) || 0, f = parseFloat(n) || 0);
        c.isFunction(b) && (b = b.call(a, d, k));
        null != b.top && (r.top = b.top - k.top + m);
        null != b.left && (r.left = b.left - k.left + f);
        "using"in b ? b.using.call(a, r) : v.css(r)
    }};
    c.fn.extend({offset: function (a) {
        if (arguments.length)return void 0 === a ? this : this.each(function (b) {
            c.offset.setOffset(this, a, b)
        });
        var b, d, e = {top: 0, left: 0}, f = this[0], g = f && f.ownerDocument;
        if (g)return b = g.documentElement,
            c.contains(b, f) ? ("undefined" !== typeof f.getBoundingClientRect && (e = f.getBoundingClientRect()), d = qb(g), {top: e.top + (d.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: e.left + (d.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)}) : e
    }, position: function () {
        if (this[0]) {
            var a, b, d = {top: 0, left: 0}, e = this[0];
            return"fixed" === c.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), c.nodeName(a[0], "html") || (d = a.offset()), d.top += c.css(a[0], "borderTopWidth", !0), d.left += c.css(a[0], "borderLeftWidth",
                !0)), {top: b.top - d.top - c.css(e, "marginTop", !0), left: b.left - d.left - c.css(e, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var a = this.offsetParent || Ob; a && !c.nodeName(a, "html") && "static" === c.css(a, "position");)a = a.offsetParent;
            return a || Ob
        })
    }});
    c.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var d = /Y/.test(b);
        c.fn[a] = function (e) {
            return J(this, function (a, e, f) {
                var g = qb(a);
                return void 0 === f ? g ? b in g ? g[b] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ?
                    c(g).scrollLeft() : f, d ? f : c(g).scrollTop()) : a[e] = f)
            }, a, e, arguments.length, null)
        }
    });
    c.each(["top", "left"], function (a, b) {
        c.cssHooks[b] = db(w.pixelPosition, function (a, e) {
            return e ? (e = W(a, b), ua.test(e) ? c(a).position()[b] + "px" : e) : void 0
        })
    });
    c.each({Height: "height", Width: "width"}, function (a, b) {
        c.each({padding: "inner" + a, content: b, "": "outer" + a}, function (d, e) {
            c.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), m = d || (!0 === e || !0 === f ? "margin" : "border");
                return J(this, function (b, d, e) {
                    var f;
                    return c.isWindow(b) ?
                        b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? c.css(b, d, m) : c.style(b, d, e, m)
                }, b, g ? e : void 0, g, null)
            }
        })
    });
    c.fn.size = function () {
        return this.length
    };
    c.fn.andSelf = c.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return c
    });
    var Gc = k.jQuery, Hc = k.$;
    return c.noConflict = function (a) {
        return k.$ === c && (k.$ = Hc), a && k.jQuery === c && (k.jQuery = Gc), c
    }, "undefined" === typeof p && (k.jQuery = k.$ = c), c
});
BOOMR_start = (new Date).getTime();
function BOOMR_check_doc_domain(k) {
    if (!k) {
        if (window.parent === window || !document.getElementById("boomr-if-as"))return;
        k = document.domain
    }
    k.indexOf(".")
}
BOOMR_check_doc_domain();
(function (k) {
    var p, g, m, n, t, A;
    k.parent !== k && document.getElementById("boomr-if-as") && "script" === document.getElementById("boomr-if-as").nodeName.toLowerCase() && (k = k.parent, n = document.getElementById("boomr-if-as").src);
    m = k.document;
    k.BOOMR || (k.BOOMR = {});
    BOOMR = k.BOOMR;
    BOOMR.version || (BOOMR.version = "0.9", BOOMR.window = k, BOOMR.plugins || (BOOMR.plugins = {}), function () {
        try {
            void 0 !== new k.CustomEvent("CustomEvent") && (t = function (f, g) {
                return new k.CustomEvent(f, g)
            })
        } catch (f) {
        }
        try {
            !t && m.createEvent && m.createEvent("CustomEvent") &&
            (t = function (f, g) {
                var k = m.createEvent("CustomEvent");
                g = g || {cancelable: !1, bubbles: !1};
                k.initCustomEvent(f, g.bubbles, g.cancelable, g.detail);
                return k
            })
        } catch (g) {
        }
        !t && m.createEventObject && (t = function (f, g) {
            var k = m.createEventObject();
            k.type = k.propertyName = f;
            k.detail = g.detail;
            return k
        });
        t || (t = function () {
        })
    }(), A = function (f, g) {
        var k = t(f, {detail: g});
        k && BOOMR.setImmediate(function () {
            m.dispatchEvent ? m.dispatchEvent(k) : m.fireEvent && m.fireEvent("onpropertychange", k)
        })
    }, p = {beacon_url: "", beacon_type: "AUTO", site_domain: k.location.hostname.replace(/.*?([^.]+\.[^.]+)\.?$/,
        "$1").toLowerCase(), user_ip: "", strip_query_string: !1, onloadfired: !1, handlers_attached: !1, events: {page_ready: [], page_unload: [], dom_loaded: [], visibility_changed: [], before_beacon: [], onbeacon: [], xhr_load: [], click: [], form_submit: []}, public_events: {before_beacon: "onBeforeBoomerangBeacon", onbeacon: "onBoomerangBeacon", onboomerangloaded: "onBoomerangLoaded"}, vars: {}, errors: {}, disabled_plugins: {}, xb_handler: function (f) {
        return function (g) {
            var m;
            g || (g = k.event);
            g.target ? m = g.target : g.srcElement && (m = g.srcElement);
            3 === m.nodeType && (m = m.parentNode);
            m && "OBJECT" === m.nodeName.toUpperCase() && "application/x-shockwave-flash" === m.type || p.fireEvent(f, m)
        }
    }, fireEvent: function (f, g) {
        var m, k, n;
        f = f.toLowerCase();
        if (!this.events.hasOwnProperty(f))return!1;
        this.public_events.hasOwnProperty(f) && A(this.public_events[f], g);
        n = this.events[f];
        for (m = 0; m < n.length; m++)try {
            k = n[m], k.fn.call(k.scope, g, k.cb_data)
        } catch (t) {
            BOOMR.addError(t, "fireEvent." + f)
        }
        return!0
    }}, g = {t_lstart: null, t_start: BOOMR_start, t_end: null, url: n, utils: {objectToString: function (f, g, m) {
        var k = [], n;
        if (!f || "object" !== typeof f)return f;
        void 0 === g && (g = "\n\t");
        m || (m = 0);
        if ("[object Array]" === Object.prototype.toString.call(f)) {
            for (n = 0; n < f.length; n++)0 < m && null !== f[n] && "object" === typeof f[n] ? k.push(this.objectToString(f[n], g + ("\n\t" === g ? "\t" : ""), m - 1)) : k.push(encodeURIComponent(f[n]));
            g = ","
        } else for (n in f)Object.prototype.hasOwnProperty.call(f, n) && (0 < m && null !== f[n] && "object" === typeof f[n] ? k.push(encodeURIComponent(n) + "=" + this.objectToString(f[n], g + ("\n\t" === g ? "\t" : ""), m - 1)) : k.push(encodeURIComponent(n) +
            "=" + encodeURIComponent(f[n])));
        return k.join(g)
    }, getCookie: function (f) {
        if (!f)return null;
        f = " " + f + "=";
        var g, k;
        k = " " + m.cookie + ";";
        return 0 <= (g = k.indexOf(f)) ? (g += f.length, k = k.substring(g, k.indexOf(";", g))) : null
    }, setCookie: function (f, g, k) {
        var n, r, t;
        if (!f || !p.site_domain)return BOOMR.debug("No cookie name or site domain: " + f + "/" + p.site_domain), !1;
        g = this.objectToString(g, "&");
        n = f + "=" + g;
        r = [n, "path=/", "domain=" + p.site_domain];
        k && (t = new Date, t.setTime(t.getTime() + 1E3 * k), t = t.toGMTString(), r.push("expires=" +
            t));
        if (500 > n.length) {
            m.cookie = r.join("; ");
            f = this.getCookie(f);
            if (g === f)return!0;
            BOOMR.warn("Saved cookie value doesn't match what we tried to set:\n" + g + "\n" + f)
        } else BOOMR.warn("Cookie too long: " + n.length + " " + n);
        return!1
    }, getSubCookies: function (f) {
        var g, m, k, n = !1, t = {};
        if (!f)return null;
        if ("string" !== typeof f)return BOOMR.debug("TypeError: cookie is not a string: " + typeof f), null;
        f = f.split("&");
        g = 0;
        for (m = f.length; g < m; g++)k = f[g].split("="), k[0] && (k.push(""), t[decodeURIComponent(k[0])] = decodeURIComponent(k[1]),
            n = !0);
        return n ? t : null
    }, removeCookie: function (f) {
        return this.setCookie(f, {}, -86400)
    }, cleanupURL: function (f) {
        return f ? p.strip_query_string ? f.replace(/\?.*/, "?qs-redacted") : f : ""
    }, hashQueryString: function (f, g) {
        if (!f)return f;
        f.match(/^\/\//) && (f = location.protocol + f);
        if (!f.match(/^(https?|file):/))return BOOMR.error("Passed in URL is invalid: " + f), "";
        g && (f = f.replace(/#.*/, ""));
        return BOOMR.utils.MD5 ? f.replace(/\?([^#]*)/, function (f, g) {
            return"?" + (10 < g.length ? BOOMR.utils.MD5(g) : g)
        }) : f
    }, pluginConfig: function (f, g, m, k) {
        var n, t = 0;
        if (!g || !g[m])return!1;
        for (n = 0; n < k.length; n++)void 0 !== g[m][k[n]] && (f[k[n]] = g[m][k[n]], t++);
        return 0 < t
    }, addListener: function (f, g, m) {
        f.addEventListener ? f.addEventListener(g, m, !1) : f.attachEvent && f.attachEvent("on" + g, m)
    }, removeListener: function (f, g, m) {
        f.removeEventListener ? f.removeEventListener(g, m, !1) : f.detachEvent && f.detachEvent("on" + g, m)
    }, pushVars: function (f, g, m) {
        var k, n, t = 0;
        for (k in g)if (g.hasOwnProperty(k))if ("[object Array]" === Object.prototype.toString.call(g[k]))for (n = 0; n < g[k].length; ++n)t +=
            BOOMR.utils.pushVars(f, g[k][n], k + "[" + n + "]"); else++t, f.push(encodeURIComponent(m ? m + "[" + k + "]" : k) + "=" + (void 0 === g[k] || null === g[k] ? "" : encodeURIComponent(g[k])));
        return t
    }, postData: function (f) {
        var g = document.createElement("iframe"), m = document.createElement("form"), k = document.createElement("input");
        g.name = "boomerang_post";
        g.style.display = m.style.display = "none";
        m.method = "POST";
        m.action = p.beacon_url;
        m.target = g.name;
        k.name = "data";
        window.JSON ? (m.enctype = "text/plain", k.value = JSON.stringify(p.vars)) : (m.enctype =
            "application/x-www-form-urlencoded", k.value = f);
        document.body.appendChild(g);
        m.appendChild(k);
        document.body.appendChild(m);
        BOOMR.utils.addListener(g, "load", function () {
            document.body.removeChild(m);
            document.body.removeChild(g)
        });
        m.submit()
    }}, init: function (f) {
        var n, t, A = ["beacon_url", "beacon_type", "site_domain", "user_ip", "strip_query_string"];
        BOOMR_check_doc_domain();
        f || (f = {});
        for (n = 0; n < A.length; n++)void 0 !== f[A[n]] && (p[A[n]] = f[A[n]]);
        void 0 !== f.log && (this.log = f.log);
        this.log || (this.log = function () {
        });
        for (t in this.plugins)if (this.plugins.hasOwnProperty(t))if (f[t] && f[t].hasOwnProperty("enabled") && !1 === f[t].enabled)p.disabled_plugins[t] = 1; else if (p.disabled_plugins[t] && delete p.disabled_plugins[t], "function" === typeof this.plugins[t].init)try {
            this.plugins[t].init(f)
        } catch (r) {
            BOOMR.addError(r, t + ".init")
        }
        if (p.handlers_attached)return this;
        p.onloadfired || void 0 !== f.autorun && !1 === f.autorun || (m.readyState && "complete" === m.readyState ? this.setImmediate(BOOMR.page_ready, null, null, BOOMR) : k.onpagehide || null ===
            k.onpagehide ? g.utils.addListener(k, "pageshow", BOOMR.page_ready) : g.utils.addListener(k, "load", BOOMR.page_ready));
        g.utils.addListener(k, "DOMContentLoaded", function () {
            p.fireEvent("dom_loaded")
        });
        (function () {
            var f, n;
            f = function () {
                p.fireEvent("visibility_changed")
            };
            m.webkitVisibilityState ? g.utils.addListener(m, "webkitvisibilitychange", f) : m.msVisibilityState ? g.utils.addListener(m, "msvisibilitychange", f) : m.visibilityState && g.utils.addListener(m, "visibilitychange", f);
            g.utils.addListener(m, "mouseup", p.xb_handler("click"));
            f = m.getElementsByTagName("form");
            for (n = 0; n < f.length; n++)g.utils.addListener(f[n], "submit", p.xb_handler("form_submit"));
            k.onpagehide || null === k.onpagehide || g.utils.addListener(k, "unload", function () {
                BOOMR.window = k = null
            })
        })();
        p.handlers_attached = !0;
        return this
    }, page_ready: function (f) {
        f || (f = k.event);
        f || (f = {name: "load"});
        if (p.onloadfired)return this;
        p.fireEvent("page_ready", f);
        p.onloadfired = !0;
        return this
    }, setImmediate: function (f, g, m, n) {
        var r = function () {
            f.call(n || null, g, m || {});
            r = null
        };
        k.setImmediate ? k.setImmediate(r) :
            k.msSetImmediate ? k.msSetImmediate(r) : k.webkitSetImmediate ? k.webkitSetImmediate(r) : k.mozSetImmediate ? k.mozSetImmediate(r) : setTimeout(r, 10)
    }, subscribe: function (f, m, n, t) {
        var r, A, D;
        f = f.toLowerCase();
        if (!p.events.hasOwnProperty(f))return this;
        D = p.events[f];
        for (r = 0; r < D.length; r++)if (A = D[r], A.fn === m && A.cb_data === n && A.scope === t)return this;
        D.push({fn: m, cb_data: n || {}, scope: t || null});
        "page_ready" === f && p.onloadfired && this.setImmediate(m, null, n, t);
        "page_unload" === f && (f = function (f) {
            m && m.call(t, f || k.event, n)
        },
                k.onpagehide || null === k.onpagehide ? g.utils.addListener(k, "pagehide", f) : g.utils.addListener(k, "unload", f), g.utils.addListener(k, "beforeunload", f));
        return this
    }, addError: function (f, g) {
        "string" !== typeof f && (f = String(f));
        void 0 !== g && (f = "[" + g + ":" + (new Date).getTime() + "] " + f);
        p.errors[f] ? p.errors[f]++ : p.errors[f] = 1
    }, addVar: function (f, g) {
        if ("string" === typeof f)p.vars[f] = g; else if ("object" === typeof f)for (var m in f)f.hasOwnProperty(m) && (p.vars[m] = f[m]);
        return this
    }, removeVar: function (f) {
        var g, m;
        if (!arguments.length)return this;
        m = 1 === arguments.length && "[object Array]" === Object.prototype.toString.apply(f) ? f : arguments;
        for (g = 0; g < m.length; g++)p.vars.hasOwnProperty(m[g]) && delete p.vars[m[g]];
        return this
    }, requestStart: function (f) {
        var g = (new Date).getTime();
        BOOMR.plugins.RT.startTimer("xhr_" + f, g);
        return{loaded: function (m) {
            BOOMR.responseEnd(f, g, m)
        }}
    }, responseEnd: function (f, g, m) {
        BOOMR.plugins.RT.startTimer("xhr_" + f, g);
        p.fireEvent("xhr_load", {name: "xhr_" + f, data: m})
    }, sendBeacon: function () {
        var f, g;
        g = [];
        BOOMR.debug("Checking if we can send beacon");
        for (f in this.plugins)if (this.plugins.hasOwnProperty(f) && !p.disabled_plugins[f] && !this.plugins[f].is_complete())return BOOMR.debug("Plugin " + f + " is not complete, deferring beacon send"), !1;
        p.vars.v = BOOMR.version;
        p.vars.u = BOOMR.utils.cleanupURL(m.URL.replace(/#.*/, ""));
        k !== window && (p.vars["if"] = "");
        for (f in p.errors)p.errors.hasOwnProperty(f) && g.push(f + (1 < p.errors[f] ? " (*" + p.errors[f] + ")" : ""));
        0 < g.length && (p.vars.errors = g.join("\n"));
        p.errors = {};
        p.fireEvent("before_beacon", p.vars);
        if (!p.beacon_url)return BOOMR.debug("No beacon_url, but would have sent: " +
            BOOMR.utils.objectToString(p.vars)), !0;
        f = [];
        g = BOOMR.utils.pushVars(f, p.vars);
        this.setImmediate(p.fireEvent, "onbeacon", p.vars, p);
        if (!g)return this;
        f = f.join("&");
        "POST" === p.beacon_type ? BOOMR.utils.postData(f) : (g = p.beacon_url + (-1 < p.beacon_url.indexOf("?") ? "&" : "?") + f, 2E3 < g.length && "AUTO" === p.beacon_type ? BOOMR.utils.postData(f) : (BOOMR.debug("Sending url: " + g.replace(/&/g, "\n\t")), f = new Image, f.src = g));
        return!0
    }}, delete BOOMR_start, "number" === typeof BOOMR_lstart ? (g.t_lstart = BOOMR_lstart, delete BOOMR_lstart) :
        "number" === typeof BOOMR.window.BOOMR_lstart && (g.t_lstart = BOOMR.window.BOOMR_lstart), function () {
        var f;
        k.YAHOO && k.YAHOO.widget && k.YAHOO.widget.Logger ? g.log = k.YAHOO.log : k.Y && k.Y.log ? g.log = k.Y.log : "object" === typeof console && void 0 !== console.log && (g.log = function (f, g, m) {
            console.log(m + ": [" + g + "] " + f)
        });
        f = function (f) {
            return function (g, m) {
                this.log(g, f, "boomerang" + (m ? "." + m : ""));
                return this
            }
        };
        g.debug = f("debug");
        g.info = f("info");
        g.warn = f("warn");
        g.error = f("error")
    }(), function () {
        for (var f in g)g.hasOwnProperty(f) &&
        (BOOMR[f] = g[f])
    }(), BOOMR.plugins = BOOMR.plugins || {}, A("onBoomerangLoaded", {BOOMR: BOOMR}))
})(window);
(function (k) {
    var p = k.document, g;
    BOOMR = BOOMR || {};
    BOOMR.plugins = BOOMR.plugins || {};
    BOOMR.plugins.RT || (g = {onloadfired: !1, unloadfired: !1, visiblefired: !1, initialized: !1, complete: !1, timers: {}, cookie: "RT", cookie_exp: 600, strict_referrer: !0, navigationType: 0, navigationStart: void 0, responseStart: void 0, t_start: void 0, cached_t_start: void 0, t_fb_approx: void 0, r: void 0, r2: void 0, basic_timers: {t_done: 1, t_resp: 1, t_page: 1}, updateCookie: function (g, k) {
        var t, p;
        if (!this.cookie)return!1;
        t = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)) ||
        {};
        if ("object" === typeof g)for (p in g)if (g.hasOwnProperty(p))if (void 0 === g[p])t.hasOwnProperty(p) && delete t[p]; else {
            if ("nu" === p || "r" === p)g[p] = BOOMR.utils.hashQueryString(g[p], !0);
            t[p] = g[p]
        }
        p = (new Date).getTime();
        k && (t[k] = p);
        BOOMR.debug("Setting cookie (timer=" + k + ")\n" + BOOMR.utils.objectToString(t), "rt");
        if (!BOOMR.utils.setCookie(this.cookie, t, this.cookie_exp))return BOOMR.error("cannot set start cookie", "rt"), !1;
        t = (new Date).getTime();
        50 < t - p && (BOOMR.utils.removeCookie(this.cookie), BOOMR.error("took more than 50ms to set cookie... aborting: " +
            p + " -> " + t, "rt"));
        return!0
    }, initFromCookie: function () {
        var g, k;
        if (k = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(this.cookie)))k.s = Math.max(+k.ul || 0, +k.cl || 0), BOOMR.debug("Read from cookie " + BOOMR.utils.objectToString(k), "rt"), k.s && (k.r || k.nu) && (this.r = k.r, g = BOOMR.utils.hashQueryString(p.URL, !0), BOOMR.debug(this.r + " =?= " + this.r2, "rt"), BOOMR.debug(k.s + " <? " + (+k.cl + 15), "rt"), BOOMR.debug(k.nu + " =?= " + g, "rt"), !this.strict_referrer || k.nu && k.nu === g && k.s < +k.cl + 15 || k.s === +k.ul && this.r === this.r2 ? (this.t_start =
            k.s, +k.hd > k.s && (this.t_fb_approx = parseInt(k.hd, 10))) : this.t_start = this.t_fb_approx = void 0), this.updateCookie({s: void 0, r: void 0, nu: void 0, ul: void 0, cl: void 0, hd: void 0})
    }, getBoomerangTimings: function () {
        var g, k, t, p;
        BOOMR.t_start && (BOOMR.plugins.RT.startTimer("boomerang", BOOMR.t_start), BOOMR.plugins.RT.endTimer("boomerang", BOOMR.t_end), BOOMR.plugins.RT.endTimer("boomr_fb", BOOMR.t_start), BOOMR.t_lstart && (BOOMR.plugins.RT.endTimer("boomr_ld", BOOMR.t_lstart), BOOMR.plugins.RT.setTimer("boomr_lat", BOOMR.t_start -
            BOOMR.t_lstart)));
        try {
            if (window.performance && window.performance.getEntriesByName)for (p in t = {"rt.bmr.": BOOMR.url}, t)if (t.hasOwnProperty(p) && t[p] && (g = window.performance.getEntriesByName(t[p])) && 0 !== g.length)for (k in g = g[0], g)g.hasOwnProperty(k) && k.match(/(Start|End)$/) && 0 < g[k] && BOOMR.addVar(p + k.replace(/^(...).*(St|En).*$/, "$1$2"), g[k])
        } catch (f) {
            BOOMR.addError(f, "rt.getBoomerangTimings")
        }
    }, checkPreRender: function () {
        if (!(p.visibilityState && "prerender" === p.visibilityState || p.msVisibilityState && 3 === p.msVisibilityState))return!1;
        BOOMR.plugins.RT.startTimer("t_load", this.navigationStart);
        BOOMR.plugins.RT.endTimer("t_load");
        BOOMR.plugins.RT.startTimer("t_prerender", this.navigationStart);
        BOOMR.plugins.RT.startTimer("t_postrender");
        BOOMR.subscribe("visibility_changed", BOOMR.plugins.RT.done, "visible", BOOMR.plugins.RT);
        return!0
    }, initFromNavTiming: function () {
        var g, n, t;
        this.navigationStart || ((n = k.performance || k.msPerformance || k.webkitPerformance || k.mozPerformance) && n.navigation && (this.navigationType = n.navigation.type), n && n.timing ?
            g = n.timing : k.chrome && k.chrome.csi && k.chrome.csi().startE ? (g = {navigationStart: k.chrome.csi().startE}, t = "csi") : k.gtbExternal && k.gtbExternal.startE() && (g = {navigationStart: k.gtbExternal.startE()}, t = "gtb"), g ? (BOOMR.addVar("rt.start", t || "navigation"), this.navigationStart = g.navigationStart || g.fetchStart || void 0, this.responseStart = g.responseStart || void 0, navigator.userAgent.match(/Firefox\/[78]\./) && (this.navigationStart = g.unloadEventStart || g.fetchStart || void 0)) : BOOMR.warn("This browser doesn't support the WebTiming API",
            "rt"))
    }, setPageLoadTimers: function (m) {
        g.initFromCookie();
        g.initFromNavTiming();
        if (g.checkPreRender())return!1;
        g.responseStart ? (BOOMR.plugins.RT.endTimer("t_resp", g.responseStart), g.timers.t_load ? BOOMR.plugins.RT.setTimer("t_page", g.timers.t_load.end - g.responseStart) : BOOMR.plugins.RT.setTimer("t_page", m - g.responseStart)) : g.timers.hasOwnProperty("t_page") ? BOOMR.plugins.RT.endTimer("t_page") : g.t_fb_approx && (BOOMR.plugins.RT.endTimer("t_resp", g.t_fb_approx), BOOMR.plugins.RT.setTimer("t_page", m - g.t_fb_approx));
        g.timers.hasOwnProperty("t_postrender") && (BOOMR.plugins.RT.endTimer("t_postrender"), BOOMR.plugins.RT.endTimer("t_prerender"));
        return!0
    }, setSupportingTimestamps: function (m) {
        BOOMR.addVar("rt.tstart", m);
        "number" === typeof g.t_start && g.t_start !== m && BOOMR.addVar("rt.cstart", g.t_start);
        BOOMR.addVar("rt.bstart", BOOMR.t_start);
        BOOMR.t_lstart && BOOMR.addVar("rt.blstart", BOOMR.t_lstart);
        BOOMR.addVar("rt.end", g.timers.t_done.end)
    }, determineTStart: function (m, k) {
        var t;
        "xhr" === m && k && g.timers[k] ? (t = g.timers[k].start,
            BOOMR.addVar("rt.start", "manual")) : g.navigationStart ? t = g.navigationStart : g.t_start && 2 !== g.navigationType ? (t = g.t_start, BOOMR.addVar("rt.start", "cookie")) : g.cached_t_start ? t = g.cached_t_start : (BOOMR.addVar("rt.start", "none"), t = void 0);
        BOOMR.debug("Got start time: " + t, "rt");
        return g.cached_t_start = t
    }, page_ready: function () {
        this.onloadfired = !0
    }, visibility_changed: function () {
        p.hidden || p.msHidden || p.webkitHidden || (g.visiblefired = !0)
    }, page_unload: function (g) {
        BOOMR.debug("Unload called with " + BOOMR.utils.objectToString(g) +
            " when unloadfired = " + this.unloadfired, "rt");
        this.unloadfired || BOOMR.plugins.RT.done(g, "unload");
        this.updateCookie({r: p.URL}, "beforeunload" === g.type ? "ul" : "hd");
        this.unloadfired = !0
    }, _iterable_click: function (g, k, t, p) {
        if (t) {
            for (BOOMR.debug(g + " called with " + t.nodeName, "rt"); t && t.nodeName.toUpperCase() !== k;)t = t.parentNode;
            t && t.nodeName.toUpperCase() === k && (BOOMR.debug("passing through", "rt"), g = p(t), this.updateCookie({nu: g}, "cl"), BOOMR.addVar("nu", BOOMR.utils.cleanupURL(g)))
        }
    }, onclick: function (m) {
        g._iterable_click("Click",
            "A", m, function (g) {
                return g.href
            })
    }, onsubmit: function (m) {
        g._iterable_click("Submit", "FORM", m, function (g) {
            g = g.action || p.URL || "";
            return g.match(/\?/) ? g : g + "?"
        })
    }, domloaded: function () {
        BOOMR.plugins.RT.endTimer("t_domloaded")
    }}, BOOMR.plugins.RT = {init: function (m) {
        BOOMR.debug("init RT", "rt");
        k !== BOOMR.window && (k = BOOMR.window);
        p = k.document;
        BOOMR.utils.pluginConfig(g, m, "RT", ["cookie", "cookie_exp", "strict_referrer"]);
        g.r = g.r2 = BOOMR.utils.hashQueryString(p.referrer, !0);
        g.initFromCookie();
        g.getBoomerangTimings();
        if (g.initialized)return this;
        g.complete = !1;
        g.timers = {};
        BOOMR.subscribe("page_ready", g.page_ready, null, g);
        g.visiblefired = !(p.hidden || p.msHidden || p.webkitHidden);
        g.visiblefired || BOOMR.subscribe("visibility_changed", g.visibility_changed, null, g);
        BOOMR.subscribe("page_ready", this.done, "load", this);
        BOOMR.subscribe("xhr_load", this.done, "xhr", this);
        BOOMR.subscribe("dom_loaded", g.domloaded, null, g);
        BOOMR.subscribe("page_unload", g.page_unload, null, g);
        BOOMR.subscribe("click", g.onclick, null, g);
        BOOMR.subscribe("form_submit",
            g.onsubmit, null, g);
        BOOMR.subscribe("before_beacon", this.addTimersToBeacon, "beacon", this);
        g.initialized = !0;
        return this
    }, startTimer: function (m, k) {
        m && ("t_page" === m && this.endTimer("t_resp", k), g.timers[m] = {start: "number" === typeof k ? k : (new Date).getTime()});
        return this
    }, endTimer: function (m, k) {
        m && (g.timers[m] = g.timers[m] || {}, void 0 === g.timers[m].end && (g.timers[m].end = "number" === typeof k ? k : (new Date).getTime()));
        return this
    }, setTimer: function (m, k) {
        m && (g.timers[m] = {delta: k});
        return this
    }, addTimersToBeacon: function (m, k) {
        var t, p, f = [];
        for (t in g.timers)g.timers.hasOwnProperty(t) && (p = g.timers[t], "number" !== typeof p.delta && ("number" !== typeof p.start && (p.start = g.cached_t_start), p.delta = p.end - p.start), isNaN(p.delta) || (g.basic_timers.hasOwnProperty(t) ? BOOMR.addVar(t, p.delta) : f.push(t + "|" + p.delta)));
        f.length && BOOMR.addVar("t_other", f.join(","));
        "beacon" === k && (g.timers = {}, g.complete = !1)
    }, done: function (m, k) {
        BOOMR.debug("Called done with " + BOOMR.utils.objectToString(m) + ", " + k, "rt");
        var t, p = (new Date).getTime(), f = !1;
        g.complete = !1;
        if (("load" === k || "visible" === k) && !g.setPageLoadTimers(p))return this;
        "xhr" === k && m && m.data && (f = m.data.subresource);
        t = g.determineTStart(k, m ? m.name : null);
        this.endTimer("t_done", p);
        BOOMR.removeVar("t_done", "t_page", "t_resp", "t_postrender", "t_prerender", "t_load", "t_other", "r", "r2", "rt.tstart", "rt.cstart", "rt.bstart", "rt.end", "rt.subres", "rt.abld");
        g.setSupportingTimestamps(t);
        this.addTimersToBeacon();
        "xhr" !== k && (BOOMR.addVar("r", BOOMR.utils.cleanupURL(g.r)), g.r2 !== g.r && BOOMR.addVar("r2", BOOMR.utils.cleanupURL(g.r2)));
        f && BOOMR.addVar("rt.subres", 1);
        g.updateCookie();
        "unload" === k && (BOOMR.addVar("rt.quit", ""), g.onloadfired || BOOMR.addVar("rt.abld", ""), g.visiblefired || BOOMR.addVar("rt.ntvu", ""));
        g.complete = !0;
        BOOMR.sendBeacon();
        return this
    }, is_complete: function () {
        return g.complete
    }})
})(window);
(function () {
    var k, p;
    BOOMR = BOOMR || {};
    BOOMR.plugins = BOOMR.plugins || {};
    BOOMR.plugins.BW || (p = [
        {name: "image-0.png", size: 11483, timeout: 1400},
        {name: "image-1.png", size: 40658, timeout: 1200},
        {name: "image-2.png", size: 164897, timeout: 1300},
        {name: "image-3.png", size: 381756, timeout: 1500},
        {name: "image-4.png", size: 1234664, timeout: 1200},
        {name: "image-5.png", size: 4509613, timeout: 1200},
        {name: "image-6.png", size: 9084559, timeout: 1200}
    ], p.end = p.length, p.start = 0, p.l = {name: "image-l.gif", size: 35, timeout: 1E3}, k = {base_url: "", timeout: 15E3,
        nruns: 5, latency_runs: 10, user_ip: "", test_https: !1, cookie_exp: 604800, cookie: "BA", results: [], latencies: [], latency: null, runs_left: 0, aborted: !1, complete: !0, running: !1, initialized: !1, ncmp: function (g, k) {
            return g - k
        }, iqr: function (g) {
            var k = g.length - 1, n, t, p, f = [], u;
            n = (g[Math.floor(.25 * k)] + g[Math.ceil(.25 * k)]) / 2;
            t = (g[Math.floor(.75 * k)] + g[Math.ceil(.75 * k)]) / 2;
            p = 1.5 * (t - n);
            if (0 === p)return g;
            k++;
            for (u = 0; u < k && g[u] < t + p; u++)g[u] > n - p && f.push(g[u]);
            return f
        }, calc_latency: function () {
            var g, k, n = 0, t = 0, p;
            this.latencies.shift();
            p = this.iqr(this.latencies.sort(this.ncmp));
            k = p.length;
            BOOMR.debug("latencies: " + this.latencies, "bw");
            BOOMR.debug("lat_filtered: " + p, "bw");
            for (g = 0; g < k; g++)n += p[g], t += p[g] * p[g];
            g = Math.round(n / k);
            n = Math.sqrt(t / k - n * n / (k * k));
            t = (1.96 * n / Math.sqrt(k)).toFixed(2);
            n = n.toFixed(2);
            k = Math.round((p[Math.floor(k / 2)] + p[Math.ceil(k / 2)]) / 2);
            return{mean: g, median: k, stddev: n, stderr: t}
        }, calc_bw: function () {
            var g, k, n = 0, t, A = [], f = [], u = 0, v = 0, E = 0, r = 0, H, D, ba = [];
            for (g = 0; g < this.nruns; g++)if (this.results[g] && this.results[g].r)for (t =
                                                                                              this.results[g].r, H = 0, k = t.length - 1; 0 <= k && 3 > H && t[k]; k--)null !== t[k].t && (n++, H++, D = 1E3 * p[k].size / t[k].t, A.push(D), t[k].t > this.latency.mean ? (D = 1E3 * p[k].size / (t[k].t - this.latency.mean), f.push(D)) : ba.push(k + "_" + t[k].t));
            BOOMR.debug("got " + n + " readings", "bw");
            BOOMR.debug("bandwidths: " + A, "bw");
            BOOMR.debug("corrected: " + f, "bw");
            3 < A.length ? (A = this.iqr(A.sort(this.ncmp)), f = this.iqr(f.sort(this.ncmp))) : (A = A.sort(this.ncmp), f = f.sort(this.ncmp));
            BOOMR.debug("after iqr: " + A, "bw");
            BOOMR.debug("corrected: " + f, "bw");
            n = Math.max(A.length, f.length);
            for (g = 0; g < n; g++)g < A.length && (u += A[g], v += Math.pow(A[g], 2)), g < f.length && (E += f[g], r += Math.pow(f[g], 2));
            n = A.length;
            g = Math.round(u / n);
            u = Math.sqrt(v / n - Math.pow(u / n, 2));
            v = Math.round(1.96 * u / Math.sqrt(n));
            u = Math.round(u);
            n = A.length - 1;
            A = Math.round((A[Math.floor(n / 2)] + A[Math.ceil(n / 2)]) / 2);
            1 > f.length ? (BOOMR.debug("not enough valid corrected datapoints, falling back to uncorrected", "bw"), ba.push("l==" + f.length), k = g, E = u, r = v, n = A) : (n = f.length, k = Math.round(E / n), E = Math.sqrt(r / n - Math.pow(E /
                n, 2)), r = (1.96 * E / Math.sqrt(n)).toFixed(2), E = E.toFixed(2), n = f.length - 1, n = Math.round((f[Math.floor(n / 2)] + f[Math.ceil(n / 2)]) / 2));
            BOOMR.debug("amean: " + g + ", median: " + A, "bw");
            BOOMR.debug("corrected amean: " + k + ", median: " + n, "bw");
            return{mean: g, stddev: u, stderr: v, median: A, mean_corrected: k, stddev_corrected: E, stderr_corrected: r, median_corrected: n, debug_info: ba}
        }, load_img: function (g, k, n) {
            function t(p) {
                return function () {
                    n && n.call(E, g, u, k, p);
                    null !== p && (v = v.onload = v.onerror = null, clearTimeout(f), E = n = null)
                }
            }

            var A =
                this.base_url + p[g].name + "?t=" + (new Date).getTime() + Math.random(), f = 0, u = 0, v = new Image, E = this;
            v.onload = t(!0);
            v.onerror = t(!1);
            f = setTimeout(t(null), p[g].timeout + Math.min(400, this.latency ? this.latency.mean : 400));
            u = (new Date).getTime();
            v.src = A
        }, lat_loaded: function (g, k, n, p) {
            n === this.latency_runs + 1 && (null !== p && (g = (new Date).getTime() - k, this.latencies.push(g)), 0 === this.latency_runs && (this.latency = this.calc_latency()), BOOMR.setImmediate(this.iterate, null, null, this))
        }, img_loaded: function (g, k, n, t) {
            n !== this.runs_left +
                1 || this.results[this.nruns - n].r[g] || (null === t ? this.results[this.nruns - n].r[g + 1] = {t: null, state: null, run: n} : (k = {start: k, end: (new Date).getTime(), t: null, state: t, run: n}, t && (k.t = k.end - k.start), this.results[this.nruns - n].r[g] = k, g >= p.end - 1 || void 0 !== this.results[this.nruns - n].r[g + 1] ? (BOOMR.debug(BOOMR.utils.objectToString(this.results[this.nruns - n], void 0, 2), "bw"), n === this.nruns && (p.start = g), BOOMR.setImmediate(this.iterate, null, null, this)) : this.load_img(g + 1, n, this.img_loaded)))
        }, finish: function () {
            this.latency ||
            (this.latency = this.calc_latency());
            var g = this.calc_bw(), k = {bw: g.median_corrected, bw_err: parseFloat(g.stderr_corrected, 10), lat: this.latency.mean, lat_err: parseFloat(this.latency.stderr, 10), bw_time: Math.round((new Date).getTime() / 1E3)};
            BOOMR.addVar(k);
            0 < g.debug_info.length && BOOMR.addVar("bw_debug", g.debug_info.join(","));
            !isNaN(k.bw) && 0 < k.bw && BOOMR.utils.setCookie(this.cookie, {ba: Math.round(k.bw), be: k.bw_err, l: k.lat, le: k.lat_err, ip: this.user_ip, t: k.bw_time}, this.user_ip ? this.cookie_exp : 0);
            this.complete = !0;
            BOOMR.sendBeacon();
            this.running = !1
        }, iterate: function () {
            this.aborted || (this.runs_left ? this.latency_runs ? this.load_img("l", this.latency_runs--, this.lat_loaded) : (this.results.push({r: []}), this.load_img(p.start, this.runs_left--, this.img_loaded)) : this.finish())
        }, setVarsFromCookie: function () {
            var g, m, n, p, A, f, u, v;
            return(g = BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(k.cookie))) && g.ba && (m = parseInt(g.ba, 10), n = parseFloat(g.be, 10), p = parseInt(g.l, 10) || 0, A = parseFloat(g.le, 10) || 0, f = g.ip.replace(/\.\d+$/, "0"),
                g = parseInt(g.t, 10), u = this.user_ip.replace(/\.\d+$/, "0"), v = Math.round((new Date).getTime() / 1E3), f === u && g >= v - this.cookie_exp && 0 < m) ? (this.complete = !0, BOOMR.addVar({bw: m, lat: p, bw_err: n, lat_err: A, bw_time: g}), !0) : !1
        }}, BOOMR.plugins.BW = {init: function (g) {
        if (k.initialized)return this;
        BOOMR.utils.pluginConfig(k, g, "BW", "base_url timeout nruns cookie cookie_exp test_https".split(" "));
        g && g.user_ip && (k.user_ip = g.user_ip);
        if (!k.base_url)return this;
        p.start = 0;
        k.runs_left = k.nruns;
        k.latency_runs = 10;
        k.results = [];
        k.latencies =
            [];
        k.latency = null;
        k.complete = k.aborted = !1;
        BOOMR.removeVar("ba", "ba_err", "lat", "lat_err");
        k.setVarsFromCookie() || (BOOMR.subscribe("page_ready", this.run, null, this), BOOMR.subscribe("page_unload", this.skip, null, this));
        k.initialized = !0;
        return this
    }, run: function () {
        if (k.running || k.complete)return this;
        if (!k.test_https && "https:" === BOOMR.window.location.protocol)return BOOMR.info("HTTPS detected, skipping bandwidth test", "bw"), k.complete = !0, BOOMR.sendBeacon(), this;
        k.running = !0;
        setTimeout(this.abort, k.timeout);
        k.iterate();
        return this
    }, abort: function () {
        k.aborted = !0;
        k.running && k.finish()
    }, skip: function () {
        k.complete || (k.complete = !0, BOOMR.sendBeacon())
    }, is_complete: function () {
        return k.complete
    }})
})();
BOOMR.subscribe("before_beacon", function (k) {
    var p, g = [], m = {};
    k.t_other || (k.t_other = "");
    for (var n in k)n.match(/^(t_done|t_other|bw|lat|bw_err|lat_err|u|r2?)$/) || (n.match(/^t_/) ? k.t_other += "," + n + "|" + k[n] : g.push(n + " = " + k[n]));
    k.t_done && (m.t_done = k.t_done);
    if (k.t_other) {
        p = k.t_other.replace(/^,/, "").replace(/\|/g, " = ").split(",");
        for (var t = 0; t < p.length; t++);
    }
    k.bw && (m.bw = k.bw, m.bw_err = k.bw_err);
    k.lat && (m.lat = k.lat, m.lat_err = k.lat_err);
    document.getElementById("results");
    for (n in k)m[n] = k[n];
    if (g.length)for (t =
                          0; t < g.length; t++)document.createTextNode(g[t]);
    m.r = m.r.split("?")[0];
    m.user_agent = navigator.userAgent;
    jQuery.ajax({url: "http://179.0.156.22/post/", type: "POST", data: m, crossDomain: !0})
});