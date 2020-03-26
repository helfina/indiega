window.N2PRO = 1;
window.N2GSAP = 1;
window.N2PLATFORM = "wordpress";
(function () {
    var N = this;
    N.N2_ = N.N2_ || {
        r: [],
        d: []
    }, N.N2R = N.N2R || function () {
        N.N2_.r.push(arguments)
    }, N.N2D = N.N2D || function () {
        N.N2_.d.push(arguments)
    }
}).call(window);
if (!window.n2jQuery) {
    window.n2jQuery = {
        ready: function (cb) {
            console.error('n2jQuery will be deprecated!');
            N2R(['$'], cb);
        }
    }
}
window.nextend = {
    localization: {},
    ready: function (cb) {
        console.error('nextend.ready will be deprecated!');
        N2R('documentReady', function ($) {
            cb.call(window, $)
        })
    }
};
window.N2SSPRO = 1;
window.N2SS3C = "smartslider3";
nextend.fontsLoaded = false;
nextend.fontsLoadedActive = function () {
    nextend.fontsLoaded = true;
};
var fontData = {
    google: {
        families: ["Roboto:300,400:latin"]
    },
    active: function () {
        nextend.fontsLoadedActive()
    },
    inactive: function () {
        nextend.fontsLoadedActive()
    }
};
if (typeof WebFontConfig !== 'undefined') {
    var _WebFontConfig = WebFontConfig;
    for (var k in WebFontConfig) {
        if (k == 'active') {
            fontData.active = function () {
                nextend.fontsLoadedActive();
                _WebFontConfig.active();
            }
        } else if (k == 'inactive') {
            fontData.inactive = function () {
                nextend.fontsLoadedActive();
                _WebFontConfig.inactive();
            }
        } else if (k == 'google') {
            if (typeof WebFontConfig.google.families !== 'undefined') {
                for (var i = 0; i < WebFontConfig.google.families.length; i++) {
                    fontData.google.families.push(WebFontConfig.google.families[i]);
                }
            }
        } else {
            fontData[k] = WebFontConfig[k];
        }
    }
}
if (typeof WebFont === 'undefined') {
    window.WebFontConfig = fontData;
} else {
    WebFont.load(fontData);
}
