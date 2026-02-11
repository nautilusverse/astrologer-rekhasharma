(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/page.js - FIXED VERSION (NO FADE ISSUES)
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Custom hook to fix opacity issues
const useFixOpacity = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_temp2, t0);
};
_s(useFixOpacity, "OD7bBpZva5O2jO+Puf00hKivP7c=");
// Vedic Astrology Knowledge Component
const VedicAstrologyKnowledge = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const knowledgeTopics = [
        {
            title: "Vedic Astrology Basics",
            icon: "\uD83D\uDCDC",
            content: [
                "Vedic astrology (Jyotish) is an ancient Indian science of time and cycles",
                "Based on 27 Nakshatras (lunar mansions) and 12 Rashis (zodiac signs)",
                "Uses sidereal zodiac system (based on fixed stars)",
                "Considers 9 planets (Navagrahas) including Rahu and Ketu"
            ],
            fact: "Vedic astrology is over 5,000 years old!"
        },
        {
            title: "Kundli & Birth Chart",
            icon: "\uD83E\uDE90",
            content: [
                "Kundli is a snapshot of celestial positions at birth time",
                "Contains 12 houses representing different life areas",
                "Planetary positions determine personality and destiny",
                "Dasha system predicts life events and timing"
            ],
            fact: "An accurate Kundli requires exact birth time and place"
        },
        {
            title: "Planetary Influences",
            icon: "\uD83C\uDF1F",
            content: [
                "Sun: Soul, authority, father, government",
                "Moon: Mind, emotions, mother, public",
                "Mars: Energy, courage, siblings, property",
                "Mercury: Intellect, communication, business",
                "Jupiter: Wisdom, wealth, children, spirituality",
                "Venus: Love, beauty, marriage, luxury",
                "Saturn: Discipline, career, obstacles, longevity",
                "Rahu: Material desires, foreign connections",
                "Ketu: Spirituality, past life, detachment"
            ],
            fact: "Planets influence different areas based on their position"
        },
        {
            title: "Remedies & Solutions",
            icon: "\uD83D\uDE4F",
            content: [
                "Gemstones for planetary strengthening",
                "Mantras and chants for specific deities",
                "Yantras for energy alignment",
                "Charity and donations (daan)",
                "Fasting on specific days",
                "Rudraksha and other spiritual beads",
                "Color therapy based on planetary influences"
            ],
            fact: "Remedies work by balancing planetary energies"
        }
    ];
    useFixOpacity();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "Vedic Astrology Knowledge"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 62,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Learn Ancient Wisdom"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 62,
                    columnNumber: 164
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Discover the science behind Vedic astrology and how it can guide your life"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 62,
                    columnNumber: 256
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const t2 = "space-y-4 mb-6";
    const t3 = knowledgeTopics[activeTab].content.map(_temp3);
    let t4;
    if ($[3] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-yellow-400 text-xl",
            children: "💡"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const t6 = knowledgeTopics[activeTab];
    let t7;
    if ($[6] !== t6.fact) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-purple-300 font-medium",
                        children: t6.fact
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 94,
                        columnNumber: 170
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 94,
                columnNumber: 121
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t6.fact;
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6 lg:px-12 bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto content-layer",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: knowledgeTopics.map((topic, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `w-full p-6 rounded-2xl text-left transition-all duration-300 ${activeTab === index ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50" : "bg-gray-900/50 border border-gray-700 hover:border-purple-500/30"}`,
                                    onClick: ()=>setActiveTab(index),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl",
                                                children: topic.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 100,
                                                columnNumber: 594
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg",
                                                        children: topic.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 100,
                                                        columnNumber: 643
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-400 text-sm mt-1",
                                                        children: [
                                                            "Click to learn more about ",
                                                            topic.title.toLowerCase()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.js",
                                                        lineNumber: 100,
                                                        columnNumber: 706
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 100,
                                                columnNumber: 638
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 100,
                                        columnNumber: 549
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, index, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 100,
                                    columnNumber: 241
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 100,
                            columnNumber: 175
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-5xl",
                                            children: knowledgeTopics[activeTab].icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 100,
                                            columnNumber: 1021
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white text-2xl font-bold",
                                                    children: knowledgeTopics[activeTab].title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 100,
                                                    columnNumber: 1091
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                t1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 100,
                                            columnNumber: 1086
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 100,
                                    columnNumber: 971
                                }, ("TURBOPACK compile-time value", void 0)),
                                t4,
                                t7
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 100,
                            columnNumber: 834
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 100,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 100,
            columnNumber: 66
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 100,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(VedicAstrologyKnowledge, "RsRnkDvZntAdr5O4U3J3DBmo7bY=", false, function() {
    return [
        useFixOpacity
    ];
});
_c = VedicAstrologyKnowledge;
// Moon Phases & Planetary Movements Component
const MoonPhasesPlanetary = ()=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const [currentPhase, setCurrentPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentPlanet, setCurrentPlanet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const moonPhases = [
        {
            name: "New Moon",
            emoji: "\uD83C\uDF11",
            date: "Today - Tomorrow",
            influence: "New beginnings, setting intentions",
            activities: [
                "Start new projects",
                "Set goals",
                "Plant seeds (literal & metaphorical)"
            ],
            avoid: [
                "Making major decisions",
                "Signing contracts"
            ]
        },
        {
            name: "Waxing Crescent",
            emoji: "\uD83C\uDF12",
            date: "Dec 12-15",
            influence: "Growth and building momentum",
            activities: [
                "Take action",
                "Build foundations",
                "Learn new skills"
            ],
            avoid: [
                "Giving up too soon",
                "Overcommitting"
            ]
        },
        {
            name: "First Quarter",
            emoji: "\uD83C\uDF13",
            date: "Dec 16-19",
            influence: "Decision making, overcoming challenges",
            activities: [
                "Make important decisions",
                "Solve problems",
                "Face obstacles"
            ],
            avoid: [
                "Procrastination",
                "Avoiding conflicts"
            ]
        },
        {
            name: "Waxing Gibbous",
            emoji: "\uD83C\uDF14",
            date: "Dec 20-22",
            influence: "Refinement and adjustment",
            activities: [
                "Refine projects",
                "Adjust plans",
                "Seek feedback"
            ],
            avoid: [
                "Perfectionism",
                "Ignoring feedback"
            ]
        },
        {
            name: "Full Moon",
            emoji: "\uD83C\uDF15",
            date: "Dec 23",
            influence: "Completion and manifestation",
            activities: [
                "Complete projects",
                "Release old patterns",
                "Celebrate"
            ],
            avoid: [
                "Starting new ventures",
                "Emotional reactions"
            ]
        }
    ];
    const planetaryMovements = [
        {
            planet: "Jupiter",
            emoji: "\uD83E\uDE90",
            status: "Direct Motion",
            influence: "Expansion, wisdom, prosperity",
            duration: "Until March 2024",
            effect: "Good for education, travel, spiritual growth"
        },
        {
            planet: "Saturn",
            emoji: "\uD83E\uDE90",
            status: "Retrograde",
            influence: "Karma, discipline, lessons",
            duration: "June-Nov 2024",
            effect: "Time for reflection, facing responsibilities"
        },
        {
            planet: "Rahu-Ketu",
            emoji: "\uD83C\uDF17",
            status: "Changing Signs",
            influence: "Destiny, transformation",
            date: "Oct 2024",
            effect: "Major life shifts, spiritual awakening"
        },
        {
            planet: "Mercury",
            emoji: "\u263F",
            status: "Direct",
            influence: "Communication, business",
            duration: "All month",
            effect: "Good for contracts, studies, negotiations"
        }
    ];
    useFixOpacity();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "Cosmic Calendar"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 182,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Moon Phases & Planetary Movements"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 182,
                    columnNumber: 154
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Track celestial movements and their impact on daily life"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 182,
                    columnNumber: 263
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 182,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-white text-xl font-bold",
                    children: "Current Moon Cycle"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 189,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-purple-400 text-sm",
                    children: "Live Updates"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 189,
                    columnNumber: 134
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 189,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 196,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold mb-2",
            children: "Influence"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 203,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: "text-green-400 font-semibold mb-2",
            children: "Recommended"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 210,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: "text-red-400 font-semibold mb-2",
            children: "Avoid"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 217,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = moonPhases[currentPhase].avoid.map(_temp5);
    let t7;
    if ($[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-500/10 p-4 rounded-xl border border-red-500/20",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: t6
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 225,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 225,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const t8 = "space-y-6";
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-xl font-bold mb-6",
            children: "Planetary Transits"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 234,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    const t10 = planetaryMovements.map((planet, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${currentPlanet === index_2 ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50" : "bg-gray-900/50 border-gray-700 hover:border-purple-500/30"}`,
            onClick: ()=>setCurrentPlanet(index_2),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl",
                                children: planet.emoji
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 239,
                                columnNumber: 468
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-white font-bold",
                                        children: planet.planet
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 239,
                                        columnNumber: 519
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `px-2 py-1 rounded-full text-xs ${planet.status.includes("Retrograde") ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`,
                                                children: planet.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 239,
                                                columnNumber: 626
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-400 text-sm",
                                                children: planet.duration || planet.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 239,
                                                columnNumber: 803
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 239,
                                        columnNumber: 576
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 239,
                                columnNumber: 514
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 239,
                        columnNumber: 423
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 239,
                    columnNumber: 367
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300",
                            children: planet.influence
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 239,
                            columnNumber: 931
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-purple-300 text-sm",
                            children: planet.effect
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 239,
                            columnNumber: 982
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 239,
                    columnNumber: 904
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, index_2, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 239,
            columnNumber: 59
        }, ("TURBOPACK compile-time value", void 0)));
    let t11;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-blue-400 text-xl",
                        children: "💫"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 242,
                        columnNumber: 163
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-sm",
                                children: "Want personalized planetary analysis?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 242,
                                columnNumber: 215
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-blue-300 text-xs",
                                children: "Book a consultation for detailed transit reading"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 242,
                                columnNumber: 290
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 242,
                        columnNumber: 210
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 242,
                columnNumber: 118
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 242,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    let t12;
    if ($[11] !== t10 || $[12] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 249,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
        $[12] = t9;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6 lg:px-12 bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto content-layer",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900/50 rounded-3xl p-8 border border-gray-700",
                            children: [
                                t1,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-64 h-64",
                                        children: [
                                            t2,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-8 bg-gray-900 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-6xl",
                                                            children: moonPhases[currentPhase].emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 256,
                                                            columnNumber: 466
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white font-bold mt-2",
                                                            children: moonPhases[currentPhase].name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 256,
                                                            columnNumber: 530
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-gray-400 text-sm",
                                                            children: moonPhases[currentPhase].date
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 256,
                                                            columnNumber: 610
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 256,
                                                    columnNumber: 437
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 256,
                                                columnNumber: 345
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 256,
                                        columnNumber: 305
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 256,
                                    columnNumber: 250
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                t3,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300",
                                                    children: moonPhases[currentPhase].influence
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 256,
                                                    columnNumber: 746
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 256,
                                            columnNumber: 737
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-green-500/10 p-4 rounded-xl border border-green-500/20",
                                                    children: [
                                                        t4,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-1",
                                                            children: moonPhases[currentPhase].activities.map(_temp4)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 256,
                                                            columnNumber: 940
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 256,
                                                    columnNumber: 861
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                t7
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 256,
                                            columnNumber: 821
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 256,
                                    columnNumber: 710
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center space-x-2 mt-6",
                                    children: moonPhases.map((_, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `w-3 h-3 rounded-full ${currentPhase === index_1 ? "bg-purple-500" : "bg-gray-700"}`,
                                            onClick: ()=>setCurrentPhase(index_1)
                                        }, index_1, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 256,
                                            columnNumber: 1126
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 256,
                                    columnNumber: 1042
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 256,
                            columnNumber: 175
                        }, ("TURBOPACK compile-time value", void 0)),
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 256,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 256,
            columnNumber: 66
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 256,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(MoonPhasesPlanetary, "lE43EsKbU5EQ0OC5l0Ew9dOZQ1s=", false, function() {
    return [
        useFixOpacity
    ];
});
_c1 = MoonPhasesPlanetary;
// Nakshatra & Daily Guidance Component
const NakshatraGuidance = ()=>{
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(42);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 42; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const [selectedNakshatra, setSelectedNakshatra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "Ashwini",
                ruler: "Ketu",
                deity: "Ashwini Kumaras",
                quality: "Quick and sharp",
                guidance: "Good day for starting new ventures, travel, and healing activities"
            },
            {
                name: "Bharani",
                ruler: "Venus",
                deity: "Yama",
                quality: "Sustaining",
                guidance: "Focus on commitments, relationships, and artistic pursuits"
            },
            {
                name: "Krittika",
                ruler: "Sun",
                deity: "Agni",
                quality: "Fiery and sharp",
                guidance: "Transformative energy - good for purification and new beginnings"
            },
            {
                name: "Rohini",
                ruler: "Moon",
                deity: "Brahma",
                quality: "Fixed and stable",
                guidance: "Creative activities, material pursuits, and relationship building"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const nakshatras = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                time: "Brahma Muhurta (4-6 AM)",
                activity: "Meditation & Spiritual Practice",
                benefit: "Clear mind, spiritual connection",
                icon: "\uD83E\uDDD8"
            },
            {
                time: "Morning (7-9 AM)",
                activity: "Planning & Strategy",
                benefit: "Optimal mental clarity",
                icon: "\uD83D\uDCDD"
            },
            {
                time: "Midday (12-2 PM)",
                activity: "Important Meetings",
                benefit: "Peak solar energy for success",
                icon: "\uD83D\uDCBC"
            },
            {
                time: "Evening (6-8 PM)",
                activity: "Family & Relationships",
                benefit: "Emotional harmony",
                icon: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66"
            },
            {
                time: "Night (9-10 PM)",
                activity: "Reflection & Learning",
                benefit: "Assimilation of knowledge",
                icon: "\uD83D\uDCDA"
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const dailyGuidance = t1;
    useFixOpacity();
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "Vedic Daily Wisdom"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 337,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Nakshatra Guidance & Daily Routine"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 337,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Align your day with cosmic rhythms for optimal results"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 337,
                    columnNumber: 267
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 337,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-xl font-bold mb-6",
            children: "Today's Nakshatra"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 344,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-6xl mb-4",
            children: "✨"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 351,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = nakshatras[selectedNakshatra];
    let t6;
    if ($[6] !== t5.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white text-2xl font-bold",
            children: t5.name
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 359,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5.name;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-purple-300",
            children: "Currently Active"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 367,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-6",
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 374,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t6;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-sm mb-1",
            children: "Ruler"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 382,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = nakshatras[selectedNakshatra];
    let t11;
    if ($[12] !== t10.ruler) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 p-4 rounded-xl",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white font-semibold",
                    children: t10.ruler
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 390,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 390,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t10.ruler;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-sm mb-1",
            children: "Deity"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 398,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    const t13 = nakshatras[selectedNakshatra];
    let t14;
    if ($[15] !== t13.deity) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 p-4 rounded-xl",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white font-semibold",
                    children: t13.deity
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 406,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 406,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t13.deity;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-sm mb-1",
            children: "Quality"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 414,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    const t16 = nakshatras[selectedNakshatra];
    let t17;
    if ($[18] !== t16.quality) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 p-4 rounded-xl",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white font-semibold",
                    children: t16.quality
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 422,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 422,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t16.quality;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/5 p-4 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 text-sm mb-1",
                    children: "Favorable For"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 430,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white font-semibold",
                    children: "New Beginnings"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 430,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 430,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    let t19;
    if ($[21] !== t11 || $[22] !== t14 || $[23] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 mb-6",
            children: [
                t11,
                t14,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 437,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t11;
        $[22] = t14;
        $[23] = t17;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
            className: "text-white font-semibold mb-2",
            children: "Today's Guidance"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 447,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    const t21 = nakshatras[selectedNakshatra];
    let t22;
    if ($[26] !== t21.guidance) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-white/5 rounded-xl",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300",
                    children: t21.guidance
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 455,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 455,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t21.guidance;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] !== t19 || $[29] !== t22 || $[30] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t8,
                t19,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 463,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t19;
        $[29] = t22;
        $[30] = t8;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    let t24;
    if ($[32] !== selectedNakshatra) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-2 justify-center",
            children: nakshatras.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `px-4 py-2 rounded-lg ${selectedNakshatra === index ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`,
                    onClick: ()=>setSelectedNakshatra(index),
                    children: nakshatras[index].name
                }, index, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 473,
                    columnNumber: 88
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 473,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = selectedNakshatra;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    let t25;
    if ($[34] !== t23 || $[35] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20",
            children: [
                t3,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 481,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t23;
        $[35] = t24;
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-xl font-bold mb-6",
            children: "Optimal Daily Routine (Dinacharya)"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 490,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t26;
    } else {
        t26 = $[37];
    }
    let t27;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: dailyGuidance.map(_temp6)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 497,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t27;
    } else {
        t27 = $[38];
    }
    let t28;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl",
                                children: "🌅"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 504,
                                columnNumber: 190
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-white font-bold mb-2",
                                        children: "Vedic Wisdom Tip"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 504,
                                        columnNumber: 229
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 text-sm",
                                        children: "According to Ayurveda and Vedic astrology, aligning daily activities with natural rhythms (circadian and cosmic) enhances health, productivity, and spiritual growth."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 504,
                                        columnNumber: 292
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 504,
                                columnNumber: 224
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 504,
                        columnNumber: 145
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 504,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 504,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t28;
    } else {
        t28 = $[39];
    }
    let t29;
    if ($[40] !== t25) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 px-6 lg:px-12 bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto content-layer",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                        children: [
                            t25,
                            t28
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 511,
                        columnNumber: 120
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 511,
                columnNumber: 67
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 511,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t25;
        $[41] = t29;
    } else {
        t29 = $[41];
    }
    return t29;
};
_s3(NakshatraGuidance, "JfPhbcSAUwTDTOl2qPE5kDDg2gw=", false, function() {
    return [
        useFixOpacity
    ];
});
_c2 = NakshatraGuidance;
// FIXED BOOKING FORM COMPONENT (WITHOUT FADE)
const BookingForm = (t0)=>{
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(112);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 112; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const { isOpen, onClose } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "",
            phone: "",
            dateOfBirth: "",
            timeOfBirth: "",
            placeOfBirth: "",
            appointmentDate: "",
            timeSlot: "",
            serviceType: "kundli",
            isFirstTime: true
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [availableSlots, setAvailableSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const generateTimeSlots = _temp7;
    const getNext30Days = _temp8;
    let t3;
    let t4;
    if ($[3] !== isOpen) {
        t3 = ()=>{
            setAvailableSlots(generateTimeSlots());
            if (isOpen) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            return _temp9;
        };
        t4 = [
            isOpen
        ];
        $[3] = isOpen;
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[6] !== isOpen || $[7] !== onClose) {
        t5 = ()=>{
            const handleClickOutside = (event)=>{
                if (formRef.current && !formRef.current.contains(event.target)) {
                    onClose();
                }
            };
            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ()=>{
                document.removeEventListener("mousedown", handleClickOutside);
            };
        };
        t6 = [
            isOpen,
            onClose
        ];
        $[6] = isOpen;
        $[7] = onClose;
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[10] !== formData.appointmentDate || $[11] !== formData.dateOfBirth || $[12] !== formData.extraTime || $[13] !== formData.isFirstTime || $[14] !== formData.name || $[15] !== formData.phone || $[16] !== formData.placeOfBirth || $[17] !== formData.serviceType || $[18] !== formData.timeOfBirth || $[19] !== formData.timeSlot || $[20] !== onClose) {
        t7 = (e)=>{
            e.preventDefault();
            setLoading(true);
            let charges = 0;
            let serviceDetails = "";
            if (formData.serviceType === "kundli") {
                charges = 300;
                serviceDetails = "Kundli Reading - \u20B9300";
            } else {
                if (formData.serviceType === "consultation") {
                    charges = formData.isFirstTime ? 0 : 300;
                    serviceDetails = `Consultation - ${formData.isFirstTime ? "Free (First Time)" : "\u20B9300"}`;
                    if (formData.extraTime === "1.5") {
                        charges = charges + 150;
                        serviceDetails = serviceDetails + " + 1.5 hours (+\u20B9150)";
                    } else {
                        if (formData.extraTime === "2") {
                            charges = charges + 300;
                            serviceDetails = serviceDetails + " + 2 hours (+\u20B9300)";
                        } else {
                            if (formData.extraTime) {
                                serviceDetails = serviceDetails + " (1 hour)";
                            }
                        }
                    }
                }
            }
            const formattedDate = formData.appointmentDate ? new Date(formData.appointmentDate).toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }) : "";
            const message = "\uD83C\uDF1F *New Astrology Appointment - Rekha Sharma Ji* \uD83C\uDF1F%0A%0A*\uD83D\uDC64 Client Details:*%0A" + `Name: ${formData.name}%0A` + `Phone: ${formData.phone}%0A%0A` + "*\uD83D\uDCC5 Birth Details:*%0A" + `Date of Birth: ${formData.dateOfBirth}%0A` + `Time of Birth: ${formData.timeOfBirth}%0A` + `Place of Birth: ${formData.placeOfBirth}%0A%0A` + "*\uD83D\uDCCB Appointment Details:*%0A" + `Date: ${formattedDate}%0A` + `Time Slot: ${formData.timeSlot}%0A` + `Service: ${serviceDetails}%0A` + `Total Charges: ₹${charges}%0A%0A` + "\uD83D\uDCC5 *Please confirm this appointment*%0A" + "\u2728 *Thank you!*%0A" + "_Rekha Sharma Astrology Services_";
            const whatsappURL = `https://wa.me/${"918510988703"}?text=${message}`;
            window.open(whatsappURL, "_blank");
            setFormData({
                name: "",
                phone: "",
                dateOfBirth: "",
                timeOfBirth: "",
                placeOfBirth: "",
                appointmentDate: "",
                timeSlot: "",
                serviceType: "kundli",
                isFirstTime: true
            });
            setLoading(false);
            onClose();
            alert("Opening WhatsApp with your booking details. Please send the message to confirm your appointment.");
        };
        $[10] = formData.appointmentDate;
        $[11] = formData.dateOfBirth;
        $[12] = formData.extraTime;
        $[13] = formData.isFirstTime;
        $[14] = formData.name;
        $[15] = formData.phone;
        $[16] = formData.placeOfBirth;
        $[17] = formData.serviceType;
        $[18] = formData.timeOfBirth;
        $[19] = formData.timeSlot;
        $[20] = onClose;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    const handleSubmit = t7;
    let t8;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = (e_0)=>{
            const { name, value, type, checked } = e_0.target;
            setFormData((prev)=>({
                    ...prev,
                    [name]: type === "checkbox" ? checked : value
                }));
        };
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    const handleChange = t8;
    let t9;
    if ($[23] !== formData.extraTime || $[24] !== formData.isFirstTime || $[25] !== formData.serviceType) {
        t9 = ()=>{
            if (formData.serviceType === "kundli") {
                return 300;
            }
            if (formData.serviceType === "consultation") {
                let charges_0 = formData.isFirstTime ? 0 : 300;
                if (!formData.isFirstTime) {
                    if (formData.extraTime === "1.5") {
                        charges_0 = charges_0 + 150;
                    } else {
                        if (formData.extraTime === "2") {
                            charges_0 = charges_0 + 300;
                        }
                    }
                }
                return charges_0;
            }
            return 0;
        };
        $[23] = formData.extraTime;
        $[24] = formData.isFirstTime;
        $[25] = formData.serviceType;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    const calculateCharges = t9;
    let t10;
    let t11;
    if ($[27] !== onClose) {
        t10 = ()=>{
            const handleEsc = (event_0)=>{
                if (event_0.key === "Escape") {
                    onClose();
                }
            };
            window.addEventListener("keydown", handleEsc);
            return ()=>{
                window.removeEventListener("keydown", handleEsc);
            };
        };
        t11 = [
            onClose
        ];
        $[27] = onClose;
        $[28] = t10;
        $[29] = t11;
    } else {
        t10 = $[28];
        t11 = $[29];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-white text-2xl font-bold",
                    children: "Book with Rekha Sharma Ji"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 752,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-purple-300 text-sm",
                    children: "Complete birth details required for accurate reading"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 752,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 752,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== onClose) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start mb-6",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-400 hover:text-white text-2xl transition-colors bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 759,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 759,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = onClose;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Full Name *"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 767,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== formData.name) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300",
                    placeholder: "Enter your full name"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 774,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 774,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = formData.name;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Phone Number *"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 782,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== formData.phone) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "tel",
                    name: "phone",
                    value: formData.phone,
                    onChange: handleChange,
                    required: true,
                    pattern: "[0-9]{10}",
                    maxLength: "10",
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300",
                    placeholder: "Enter 10-digit mobile number"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 789,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 789,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = formData.phone;
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    let t19;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-purple-300 font-semibold text-sm",
            children: "Birth Details (For Accurate Reading)"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 798,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Date of Birth *"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 799,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t18;
        $[40] = t19;
    } else {
        t18 = $[39];
        t19 = $[40];
    }
    let t20;
    if ($[41] !== formData.dateOfBirth) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "date",
                    name: "dateOfBirth",
                    value: formData.dateOfBirth,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 808,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 808,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = formData.dateOfBirth;
        $[42] = t20;
    } else {
        t20 = $[42];
    }
    let t21;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Time of Birth *"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 816,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== formData.timeOfBirth) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "time",
                    name: "timeOfBirth",
                    value: formData.timeOfBirth,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 823,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 823,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = formData.timeOfBirth;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Place of Birth *"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 831,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== formData.placeOfBirth) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "placeOfBirth",
                    value: formData.placeOfBirth,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300",
                    placeholder: "City, State, Country"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 838,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 838,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = formData.placeOfBirth;
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== t20 || $[50] !== t22 || $[51] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20",
            children: [
                t18,
                t20,
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 846,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t20;
        $[50] = t22;
        $[51] = t24;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Appointment Date *"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 856,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    const t27 = formData.appointmentDate;
    let t28;
    let t29;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Choose appointment date"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 865,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t29 = getNext30Days().map(_temp10);
        $[54] = t28;
        $[55] = t29;
    } else {
        t28 = $[54];
        t29 = $[55];
    }
    let t30;
    if ($[56] !== formData.appointmentDate) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "appointmentDate",
                    value: t27,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none",
                    children: [
                        t28,
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 875,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 875,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = formData.appointmentDate;
        $[57] = t30;
    } else {
        t30 = $[57];
    }
    let t31;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Select Time Slot *"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 883,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t31;
    } else {
        t31 = $[58];
    }
    const t32 = formData.timeSlot;
    let t33;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Choose time (9 AM - 9 PM)"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 891,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t33;
    } else {
        t33 = $[59];
    }
    let t34;
    if ($[60] !== availableSlots) {
        t34 = availableSlots.map(_temp11);
        $[60] = availableSlots;
        $[61] = t34;
    } else {
        t34 = $[61];
    }
    let t35;
    if ($[62] !== formData.timeSlot || $[63] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "timeSlot",
                    value: t32,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none",
                    children: [
                        t33,
                        t34
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 906,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 906,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = formData.timeSlot;
        $[63] = t34;
        $[64] = t35;
    } else {
        t35 = $[64];
    }
    let t36;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Service Type *"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 915,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t36;
    } else {
        t36 = $[65];
    }
    let t37;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = ()=>setFormData(_temp12);
        $[66] = t37;
    } else {
        t37 = $[66];
    }
    const t38 = `py-3 px-4 rounded-xl border transition-all duration-300 ${formData.serviceType === "kundli" ? "bg-purple-600 border-purple-500 text-white shadow-lg" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`;
    let t39;
    let t40;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-semibold",
            children: "Kundli"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 931,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs opacity-80",
            children: "₹300"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 932,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t39;
        $[68] = t40;
    } else {
        t39 = $[67];
        t40 = $[68];
    }
    let t41;
    if ($[69] !== t38) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t37,
            className: t38,
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 941,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t38;
        $[70] = t41;
    } else {
        t41 = $[70];
    }
    let t42;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ()=>setFormData(_temp13);
        $[71] = t42;
    } else {
        t42 = $[71];
    }
    const t43 = `py-3 px-4 rounded-xl border transition-all duration-300 ${formData.serviceType === "consultation" ? "bg-purple-600 border-purple-500 text-white shadow-lg" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`;
    let t44;
    let t45;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-semibold",
            children: "Consultation"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 958,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs opacity-80",
            children: "First Free"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 959,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = t44;
        $[73] = t45;
    } else {
        t44 = $[72];
        t45 = $[73];
    }
    let t46;
    if ($[74] !== t43) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t42,
            className: t43,
            children: [
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 968,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t43;
        $[75] = t46;
    } else {
        t46 = $[75];
    }
    let t47;
    if ($[76] !== t41 || $[77] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        t41,
                        t46
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 976,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 976,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[76] = t41;
        $[77] = t46;
        $[78] = t47;
    } else {
        t47 = $[78];
    }
    let t48;
    if ($[79] !== formData.isFirstTime || $[80] !== formData.serviceType) {
        t48 = formData.serviceType === "consultation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-3 p-3 bg-gray-800/30 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    id: "isFirstTime",
                    name: "isFirstTime",
                    checked: formData.isFirstTime,
                    onChange: handleChange,
                    className: "w-5 h-5 text-purple-600 bg-gray-800 border-gray-700 rounded-lg focus:ring-purple-500 focus:ring-2"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 985,
                    columnNumber: 129
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "isFirstTime",
                    className: "text-gray-300 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "First time consultation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 985,
                            columnNumber: 418
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-green-400 ml-2",
                            children: "(Free)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 985,
                            columnNumber: 480
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 985,
                    columnNumber: 355
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 985,
            columnNumber: 54
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = formData.isFirstTime;
        $[80] = formData.serviceType;
        $[81] = t48;
    } else {
        t48 = $[81];
    }
    let t49;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-300 font-medium",
            children: "Total Charges:"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 994,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[82] = t49;
    } else {
        t49 = $[82];
    }
    const t50 = calculateCharges();
    let t51;
    if ($[83] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-2",
            children: [
                t49,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold text-purple-400",
                    children: [
                        "₹",
                        t50
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1002,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1002,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[83] = t50;
        $[84] = t51;
    } else {
        t51 = $[84];
    }
    const t52 = formData.serviceType === "kundli" ? "Kundli Reading (\u20B9300)" : formData.isFirstTime ? "First Consultation (Free)" : "Consultation (\u20B9300)";
    let t53;
    if ($[85] !== t52) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-xs",
            children: t52
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1011,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t52;
        $[86] = t53;
    } else {
        t53 = $[86];
    }
    let t54;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-xs mt-2",
            children: "Payment directly to Rekha Sharma Ji after service"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1019,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[87] = t54;
    } else {
        t54 = $[87];
    }
    let t55;
    if ($[88] !== t51 || $[89] !== t53) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30",
            children: [
                t51,
                t53,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1026,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t51;
        $[89] = t53;
        $[90] = t55;
    } else {
        t55 = $[90];
    }
    const t56 = `w-full ${loading ? "bg-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"} text-white py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3`;
    let t57;
    if ($[91] !== loading) {
        t57 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-5 w-5 mr-2 text-white",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4",
                            fill: "none"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1036,
                            columnNumber: 97
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1036,
                            columnNumber: 203
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1036,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Preparing WhatsApp..."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1036,
                    columnNumber: 376
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg",
                    children: "Book via WhatsApp"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1036,
                    columnNumber: 418
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl animate-pulse",
                    children: "📱"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1036,
                    columnNumber: 468
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[91] = loading;
        $[92] = t57;
    } else {
        t57 = $[92];
    }
    let t58;
    if ($[93] !== loading || $[94] !== t56 || $[95] !== t57) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: loading,
            className: t56,
            children: t57
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1044,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[93] = loading;
        $[94] = t56;
        $[95] = t57;
        $[96] = t58;
    } else {
        t58 = $[96];
    }
    let t59;
    if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1054,
                        columnNumber: 77
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Details sent directly to Rekha Sharma Ji's WhatsApp"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1054,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1054,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[97] = t59;
    } else {
        t59 = $[97];
    }
    let t60;
    if ($[98] !== handleSubmit || $[99] !== t15 || $[100] !== t17 || $[101] !== t25 || $[102] !== t30 || $[103] !== t35 || $[104] !== t47 || $[105] !== t48 || $[106] !== t55 || $[107] !== t58) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-5",
            children: [
                t15,
                t17,
                t25,
                t30,
                t35,
                t47,
                t48,
                t55,
                t58,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1061,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[98] = handleSubmit;
        $[99] = t15;
        $[100] = t17;
        $[101] = t25;
        $[102] = t30;
        $[103] = t35;
        $[104] = t47;
        $[105] = t48;
        $[106] = t55;
        $[107] = t58;
        $[108] = t60;
    } else {
        t60 = $[108];
    }
    let t61;
    if ($[109] !== t13 || $[110] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 modal-layer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: formRef,
                className: "bg-gray-900/95 rounded-3xl p-6 md:p-8 w-full max-w-md border border-purple-500/40 shadow-2xl backdrop-blur-xl booking-form-fix",
                children: [
                    t13,
                    t60
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1078,
                columnNumber: 125
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1078,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[109] = t13;
        $[110] = t60;
        $[111] = t61;
    } else {
        t61 = $[111];
    }
    return t61;
};
_s4(BookingForm, "VxDEeAKnoIScG0x7rEl+XSibzSc=");
_c3 = BookingForm;
// Interactive Background (SIMPLIFIED - NO FADE)
const InteractiveBackground = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1099,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-10",
            style: {
                backgroundImage: "\n            radial-gradient(circle at 25% 25%, rgba(162, 89, 247, 0.2) 2px, transparent 2px),\n            radial-gradient(circle at 75% 75%, rgba(247, 106, 238, 0.2) 2px, transparent 2px)\n          ",
                backgroundSize: "100px 100px"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1106,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            children: [
                "\u2648",
                "\u2649",
                "\u264A",
                "\u264B",
                "\u264C",
                "\u264D",
                "\u264E",
                "\u264F",
                "\u2650",
                "\u2651",
                "\u2652",
                "\u2653"
            ].map(_temp14)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1116,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 overflow-hidden z-0",
            children: [
                t0,
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0",
                    children: [
                        ...Array(30)
                    ].map(_temp15)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1123,
                    columnNumber: 73
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/4 left-1/4 w-64 h-64 mystic-orb rounded-full blur-3xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1123,
                    columnNumber: 142
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1123,
                    columnNumber: 250
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1123,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c4 = InteractiveBackground;
// Astrologer Hero Section (SIMPLIFIED - NO FADE)
const AstrologerHero = (t0)=>{
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const { setIsBookingOpen } = t0;
    const [currentWord, setCurrentWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "Rekha Sharma Ji",
            "Vedic Astrology",
            "Kundli",
            "Palmistry",
            "Numerology"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const words = t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
            const interval = setInterval(()=>{
                setCurrentWord((prev)=>(prev + 1) % words.length);
            }, 2000);
            return ()=>clearInterval(interval);
        };
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2 h-2 bg-purple-500 rounded-full animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1171,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2 h-2 bg-pink-500 rounded-full animate-pulse",
            style: {
                animationDelay: "0.2s"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1178,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-1",
                    children: [
                        t4,
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 bg-purple-400 rounded-full animate-pulse",
                            style: {
                                animationDelay: "0.4s"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1187,
                            columnNumber: 176
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1187,
                    columnNumber: 136
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-purple-300 text-sm font-medium",
                    children: "✨ Divine Guidance Since 2010"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1189,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1187,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl lg:text-6xl font-bold text-white leading-tight",
                    children: [
                        "Rekha ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gradient",
                            children: "Sharma"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1196,
                            columnNumber: 93
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1196,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-purple-300 text-xl mt-2",
                    children: "Renowned Vedic Astrologer & Life Coach"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1196,
                    columnNumber: 143
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1196,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const t8 = words[currentWord];
    let t9;
    if ($[8] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center space-y-4",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-20 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-3xl lg:text-4xl font-bold inline-block",
                        children: [
                            "Expert in ",
                            t8
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1204,
                        columnNumber: 123
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1204,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1204,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t8;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto",
            children: "With 14+ years of experience in Vedic astrology, I've guided thousands towards clarity, purpose, and success through celestial wisdom."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1219,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t9;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto",
            children: [
                {
                    icon: "\uD83D\uDCDC",
                    title: "Kundli Analysis",
                    description: "Precise birth chart readings"
                },
                {
                    icon: "\uD83E\uDD32",
                    title: "Palm Reading",
                    description: "Life line analysis"
                },
                {
                    icon: "\uD83D\uDC8D",
                    title: "Marriage Match",
                    description: "Compatibility analysis"
                },
                {
                    icon: "\uD83D\uDCBC",
                    title: "Career Guidance",
                    description: "Professional path clarity"
                }
            ].map(_temp16)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center gap-12 max-w-md mx-auto",
            children: [
                {
                    number: "14+",
                    label: "Years",
                    icon: "\uD83D\uDCC5"
                },
                {
                    number: "5000+",
                    label: "Clients",
                    icon: "\uD83D\uDC65"
                },
                {
                    number: "98%",
                    label: "Accuracy",
                    icon: "\uD83C\uDFAF"
                },
                {
                    number: "24/7",
                    label: "Support",
                    icon: "\uD83D\uDCAC"
                }
            ].map(_temp17)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1250,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t11;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== setIsBookingOpen) {
        t15 = ()=>setIsBookingOpen(true);
        $[17] = setIsBookingOpen;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    let t17;
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10",
            children: "Book Consultation"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1291,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10",
            children: "✨"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1292,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1293,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t16;
        $[20] = t17;
        $[21] = t18;
    } else {
        t16 = $[19];
        t17 = $[20];
        t18 = $[21];
    }
    let t19;
    if ($[22] !== t15) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group",
            onClick: t15,
            children: [
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1304,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t15;
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    let t20;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "border border-gray-600 text-white px-10 py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2",
            onClick: _temp18,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "My Journey"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1312,
                    columnNumber: 236
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "👤"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1312,
                    columnNumber: 259
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1312,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t20;
    } else {
        t20 = $[24];
    }
    let t21;
    if ($[25] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1319,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t19;
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    let t23;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "Kundli Reading: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-purple-400 font-semibold",
                    children: "₹300"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1328,
                    columnNumber: 33
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1328,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "•"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1329,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t22;
        $[28] = t23;
    } else {
        t22 = $[27];
        t23 = $[28];
    }
    let t24;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-green-400 font-semibold",
            children: "First Free"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1338,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-sm bg-white/5 rounded-xl p-4 max-w-md mx-auto border border-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-center justify-center space-x-4",
                children: [
                    t22,
                    t23,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Consultation: ",
                            t24,
                            ", then ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-400 font-semibold",
                                children: "₹300/hr"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1345,
                                columnNumber: 216
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1345,
                        columnNumber: 184
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1345,
                columnNumber: 116
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1345,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    if ($[31] !== t21) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t21,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1352,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t21;
        $[32] = t26;
    } else {
        t26 = $[32];
    }
    let t27;
    if ($[33] !== t14 || $[34] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            className: "min-h-screen flex items-center justify-center px-6 lg:px-12 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto w-full text-center content-layer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12",
                    children: [
                        t6,
                        t14,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1360,
                    columnNumber: 179
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1360,
                columnNumber: 111
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1360,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t14;
        $[34] = t26;
        $[35] = t27;
    } else {
        t27 = $[35];
    }
    return t27;
};
_s5(AstrologerHero, "Vaj1vxHvwmHVopt95sBERTYBjqk=");
_c5 = AstrologerHero;
// About Rekha Sharma Section (SIMPLIFIED - NO FADE)
const AboutAstrologer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "About Rekha Sharma Ji"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1381,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Your Trusted Guide to Cosmic Wisdom"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1381,
                    columnNumber: 160
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-3xl mx-auto text-lg",
                    children: "From ancient family traditions to modern-day spiritual guidance - my journey in astrology"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1381,
                    columnNumber: 267
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1381,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-4 border-purple-500/30 flex items-center justify-center overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-8xl",
                children: "👩‍🦳"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1388,
                columnNumber: 194
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1388,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-2xl font-bold mb-2",
            children: "Rekha Sharma"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1396,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-purple-300 text-lg mb-4",
            children: "Vedic Astrologer & Spiritual Guide"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1397,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center space-x-2 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex text-yellow-400",
                    children: "\u2B50".repeat(5)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1406,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-400 text-sm",
                    children: "(4.9/5 Rating)"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1406,
                    columnNumber: 139
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1406,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-3 bg-white/5 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white font-bold text-lg",
                    children: "14+"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1413,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 text-sm",
                    children: "Years Experience"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1413,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1413,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 mb-6",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-3 bg-white/5 rounded-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white font-bold text-lg",
                            children: "5000+"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1420,
                            columnNumber: 114
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-400 text-sm",
                            children: "Happy Clients"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1420,
                            columnNumber: 171
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1420,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1420,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 border border-white/10 backdrop-blur-sm",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            t2,
                            t3,
                            t4,
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-purple-500/10 rounded-xl border border-purple-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-purple-300 text-sm",
                                    children: '"My mission is to help you find clarity and purpose through celestial guidance"'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 1427,
                                    columnNumber: 296
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1427,
                                columnNumber: 219
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1427,
                        columnNumber: 174
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs",
                        children: "✨"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1427,
                        columnNumber: 430
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs",
                        children: "🔮"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1427,
                        columnNumber: 599
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1427,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1427,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-2xl font-bold",
            children: "My Spiritual Journey"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1434,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 leading-relaxed",
            children: "Born into a family of astrologers in Varanasi, I was introduced to the sacred science of Jyotish (Vedic Astrology) at the tender age of 12. My grandfather, a renowned astrologer, recognized my intuitive abilities and began training me in the ancient scriptures."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1442,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 leading-relaxed",
            children: "After completing my formal education in Sanskrit and Vedic Studies from Banaras Hindu University, I dedicated myself fully to mastering astrology. I've studied under various gurus across India, learning diverse systems including KP Astrology, Nadi Astrology, and Western Astrology."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1443,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-purple-400 font-semibold text-lg",
                    children: "My Philosophy"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1452,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300",
                    children: "I believe astrology is not about predicting a fixed future, but about understanding cosmic patterns to make informed decisions and live in harmony with universal energies. My approach combines traditional Vedic wisdom with practical, actionable guidance for modern life."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1452,
                    columnNumber: 110
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1452,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "py-20 px-6 lg:px-12 bg-transparent relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10 content-layer",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                        children: [
                            t7,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    t8,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            t9,
                                            t10,
                                            t11,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 mt-6",
                                                children: [
                                                    {
                                                        icon: "\uD83C\uDF93",
                                                        title: "Education",
                                                        desc: "M.A. in Vedic Studies, BHU"
                                                    },
                                                    {
                                                        icon: "\uD83D\uDCDA",
                                                        title: "Specialization",
                                                        desc: "Vedic & KP Astrology"
                                                    },
                                                    {
                                                        icon: "\uD83C\uDF1F",
                                                        title: "Recognition",
                                                        desc: "Featured in Astrology Conferences"
                                                    },
                                                    {
                                                        icon: "\uD83D\uDCAB",
                                                        title: "Languages",
                                                        desc: "Hindi, English, Sanskrit"
                                                    }
                                                ].map(_temp19)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 1459,
                                                columnNumber: 315
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 1459,
                                        columnNumber: 274
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1459,
                                columnNumber: 243
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1459,
                        columnNumber: 170
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1459,
                columnNumber: 103
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1459,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    return t12;
};
_c6 = AboutAstrologer;
// Services Section (SIMPLIFIED - NO FADE)
const ServicesSection = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const { setIsBookingOpen } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== setIsBookingOpen) {
        const services = [
            {
                icon: "\uD83D\uDCDC",
                title: "Complete Kundli Analysis",
                price: "\u20B9300",
                description: "Detailed birth chart with planetary positions, dasha periods, and life predictions",
                details: [
                    "Janam Kundli",
                    "Dasha Analysis",
                    "Planetary Positions",
                    "Remedies"
                ],
                duration: "1-2 Hours",
                popular: true
            },
            {
                icon: "\uD83D\uDCAC",
                title: "Personal Consultation",
                price: "First Free | Then \u20B9300/hr",
                description: "One-on-one guidance for life decisions, relationships, and career choices",
                details: [
                    "Life Guidance",
                    "Problem Solving",
                    "Remedy Suggestions",
                    "Follow-up"
                ],
                duration: "1 Hour",
                highlight: "Most Popular"
            },
            {
                icon: "\uD83E\uDD32",
                title: "Palm Reading & Analysis",
                price: "\u20B9500",
                description: "Comprehensive palm analysis revealing personality, destiny, and future prospects",
                details: [
                    "Life Line Reading",
                    "Career Analysis",
                    "Relationship Lines",
                    "Health Indications"
                ],
                duration: "45 Minutes"
            },
            {
                icon: "\uD83D\uDC8D",
                title: "Marriage Compatibility",
                price: "\u20B9600",
                description: "Detailed analysis of compatibility between partners with Guna Milan",
                details: [
                    "Guna Milan",
                    "Mangal Dosha",
                    "Planetary Match",
                    "Remedies"
                ],
                duration: "1.5 Hours"
            },
            {
                icon: "\uD83D\uDCBC",
                title: "Career Guidance",
                price: "\u20B9400",
                description: "Professional path analysis and guidance for career growth and opportunities",
                details: [
                    "Career Analysis",
                    "Job Change",
                    "Business Timing",
                    "Growth Areas"
                ],
                duration: "1 Hour"
            },
            {
                icon: "\uD83C\uDFE0",
                title: "Vastu Consultation",
                price: "\u20B9800",
                description: "Home/Office energy analysis and remedies for prosperity and harmony",
                details: [
                    "Space Analysis",
                    "Direction Alignment",
                    "Remedy Suggestions",
                    "Color Guidance"
                ],
                duration: "2 Hours"
            },
            {
                icon: "\uD83D\uDD22",
                title: "Numerology Report",
                price: "\u20B9400",
                description: "Detailed numerology analysis based on your name and birth date",
                details: [
                    "Life Path Number",
                    "Destiny Number",
                    "Name Analysis",
                    "Lucky Numbers"
                ],
                duration: "1 Hour"
            },
            {
                icon: "\uD83C\uDFAF",
                title: "Yearly Horoscope",
                price: "\u20B9700",
                description: "Comprehensive yearly prediction covering all aspects of life",
                details: [
                    "Yearly Forecast",
                    "Monthly Predictions",
                    "Important Dates",
                    "Precautions"
                ],
                duration: "2 Hours",
                popular: true
            }
        ];
        t5 = "services";
        t6 = "py-20 px-6 lg:px-12 bg-transparent";
        t3 = "max-w-7xl mx-auto content-layer";
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                        children: "My Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1566,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                        children: "Comprehensive Astrology Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1566,
                        columnNumber: 152
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto text-lg",
                        children: "Personalized services to illuminate your life path and guide your decisions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1566,
                        columnNumber: 256
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1566,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        t1 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6";
        t2 = services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `group bg-gray-900/50 border rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm h-full flex flex-col relative ${service.popular ? "border-purple-500/50 shadow-lg shadow-purple-500/10" : "border-gray-700"}`,
                children: [
                    service.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap",
                        children: "⭐ Most Popular"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1572,
                        columnNumber: 350
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300",
                                children: service.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1572,
                                columnNumber: 600
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-purple-400",
                                        children: service.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 1572,
                                        columnNumber: 837
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: service.duration
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 1572,
                                        columnNumber: 909
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1572,
                                columnNumber: 809
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1572,
                        columnNumber: 545
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-bold text-lg mb-3",
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1572,
                                columnNumber: 1013
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-sm mb-4 leading-relaxed",
                                children: service.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1572,
                                columnNumber: 1083
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 mb-4",
                                children: service.details.map(_temp20)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1572,
                                columnNumber: 1166
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1572,
                        columnNumber: 989
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm flex items-center justify-center space-x-2 group",
                        onClick: ()=>setIsBookingOpen(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Book Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1572,
                                columnNumber: 1512
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-hover:translate-x-1 transition-transform duration-300",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1572,
                                columnNumber: 1533
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1572,
                        columnNumber: 1240
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1572,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = setIsBookingOpen;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[9] !== t1 || $[10] !== t2) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1590,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t1;
        $[10] = t2;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t3 || $[13] !== t4 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1599,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t3;
        $[13] = t4;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t5 || $[17] !== t6 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t5,
            className: t6,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1609,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t5;
        $[17] = t6;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    return t9;
};
_c7 = ServicesSection;
// Testimonials Section (SIMPLIFIED - NO FADE)
const TestimonialsSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const testimonials = [
            {
                name: "Priya Sharma",
                text: "Rekha Ji's kundli reading was incredibly accurate! She helped me understand my career path better at a time when I was completely confused.",
                service: "Kundli Reading",
                rating: 5,
                date: "2 weeks ago"
            },
            {
                name: "Rahul Verma",
                text: "First consultation was free and so helpful! I've been coming back regularly for guidance. Her predictions about my job change were spot on.",
                service: "Personal Consultation",
                rating: 5,
                date: "1 month ago"
            },
            {
                name: "Anjali Patel",
                text: "The marriage compatibility analysis saved me from a wrong decision. Forever grateful to Rekha Ji for her honest guidance!",
                service: "Marriage Compatibility",
                rating: 5,
                date: "3 months ago"
            },
            {
                name: "Vikram Singh",
                text: "Palm reading revealed aspects of my personality I never knew existed. Truly insightful! Her career guidance changed my life.",
                service: "Palm Reading",
                rating: 5,
                date: "2 months ago"
            },
            {
                name: "Sneha Kapoor",
                text: "Vastu consultation transformed our home energy. My family life improved dramatically after following her suggestions.",
                service: "Vastu Consultation",
                rating: 5,
                date: "4 months ago"
            },
            {
                name: "Rajesh Kumar",
                text: "Yearly horoscope prediction was incredibly accurate. Every major event she predicted happened exactly as she said.",
                service: "Yearly Horoscope",
                rating: 5,
                date: "6 months ago"
            }
        ];
        t3 = "testimonials";
        t4 = "py-20 px-6 lg:px-12 bg-transparent";
        t1 = "max-w-7xl mx-auto content-layer";
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "Client Experiences"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1676,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Words of Gratitude"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1676,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Hear from those who found clarity through divine guidance"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1676,
                    columnNumber: 247
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1676,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t0 = "relative";
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
            children: testimonials.map(_temp21)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1678,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t3,
            className: t4,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t1,
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: t0,
                        children: [
                            t5,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center",
                                    children: [
                                        {
                                            number: "4.9/5",
                                            label: "Average Rating",
                                            icon: "\u2B50"
                                        },
                                        {
                                            number: "5000+",
                                            label: "Happy Clients",
                                            icon: "\uD83D\uDE0A"
                                        },
                                        {
                                            number: "98%",
                                            label: "Accuracy Rate",
                                            icon: "\uD83C\uDFAF"
                                        },
                                        {
                                            number: "100%",
                                            label: "Satisfaction",
                                            icon: "\uD83D\uDCAB"
                                        }
                                    ].map(_temp22)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 1695,
                                    columnNumber: 237
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1695,
                                columnNumber: 90
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1695,
                        columnNumber: 66
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1695,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1695,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
};
_c8 = TestimonialsSection;
// Social Proof Section (SIMPLIFIED - NO FADE)
const SocialProof = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                number: "5000+",
                label: "Happy Clients",
                icon: "\uD83D\uDE0A"
            },
            {
                number: "14+",
                label: "Years Experience",
                icon: "\uD83D\uDCC5"
            },
            {
                number: "98%",
                label: "Accuracy Rate",
                icon: "\uD83C\uDFAF"
            },
            {
                number: "24/7",
                label: "WhatsApp Support",
                icon: "\uD83D\uDCAC"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const stats = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                time: "Just now",
                name: "Priya S.",
                service: "Kundli Reading"
            },
            {
                time: "5 min ago",
                name: "Rahul M.",
                service: "Consultation"
            },
            {
                time: "15 min ago",
                name: "Anjali P.",
                service: "Marriage Match"
            },
            {
                time: "30 min ago",
                name: "Vikram S.",
                service: "Career Guidance"
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const liveSessions = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white font-bold text-xl",
            children: "Live Bookings"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1778,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mb-6",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1785,
                            columnNumber: 115
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-green-400 text-sm",
                            children: "Live Now"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1785,
                            columnNumber: 182
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1785,
                    columnNumber: 70
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1785,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: liveSessions.map(_temp23)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1792,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900/50 rounded-2xl p-8 border border-gray-700",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-purple-300 text-sm text-center",
                        children: [
                            "Next available slot: Today at ",
                            Math.floor(Math.random() * 5) + 4,
                            ":00 PM"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1799,
                        columnNumber: 171
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1799,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1799,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 px-6 lg:px-12 bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto content-layer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-6",
                            children: stats.map(_temp24)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1806,
                            columnNumber: 175
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1806,
                    columnNumber: 115
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1806,
                columnNumber: 66
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1806,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
};
_c9 = SocialProof;
// FAQ Section (SIMPLIFIED - NO FADE)
const FAQSection = ()=>{
    _s6();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                question: "What details do I need to provide for a Kundli reading?",
                answer: "For an accurate Kundli reading, you need your exact date of birth, time of birth (as precise as possible), and place of birth (city, state, country)."
            },
            {
                question: "Is the first consultation really free?",
                answer: "Yes! Your first consultation with Rekha Ji is completely free. This allows you to experience her guidance before committing to paid services."
            },
            {
                question: "How long does a typical consultation last?",
                answer: "A standard consultation lasts 1 hour. You can extend it to 1.5 hours (+\u20B9150) or 2 hours (+\u20B9300) if you need more detailed guidance."
            },
            {
                question: "What payment methods do you accept?",
                answer: "Payments are made directly to Rekha Ji after the service via UPI, bank transfer, or cash (for in-person consultations)."
            },
            {
                question: "Can I get guidance for specific problems?",
                answer: "Yes! Rekha Ji specializes in providing guidance for specific life situations including career decisions, relationship issues, health concerns, and financial matters."
            },
            {
                question: "How do I book an appointment?",
                answer: "Simply click the 'Book Now' button, fill in your details including birth information, select your preferred date and time, and the details will be sent to Rekha Ji via WhatsApp."
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const faqs = t0;
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "FAQ"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1852,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1852,
                    columnNumber: 142
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Common questions about Rekha Ji's astrology services"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1852,
                    columnNumber: 240
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1852,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== openIndex) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "py-20 px-6 lg:px-12 bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto content-layer",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors",
                                        onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-semibold",
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 1859,
                                                columnNumber: 461
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-purple-400 text-xl",
                                                children: openIndex === index ? "\u2212" : "+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 1859,
                                                columnNumber: 525
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 1859,
                                        columnNumber: 276
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-6 pb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300",
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1859,
                                            columnNumber: 672
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 1859,
                                        columnNumber: 645
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1859,
                                columnNumber: 181
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1859,
                        columnNumber: 128
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1859,
                columnNumber: 75
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1859,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = openIndex;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
};
_s6(FAQSection, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c10 = FAQSection;
// Booking Info Section (SIMPLIFIED - NO FADE)
const BookingInfoSection = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const { setIsBookingOpen } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                day: "Monday - Friday",
                time: "9:00 AM - 9:00 PM"
            },
            {
                day: "Saturday",
                time: "9:00 AM - 6:00 PM"
            },
            {
                day: "Sunday",
                time: "10:00 AM - 4:00 PM"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const workingHours = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "Book Your Session"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1899,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Connect with Rekha Sharma Ji"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1899,
                    columnNumber: 156
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Simple 3-step process to book your divine guidance session"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1899,
                    columnNumber: 256
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1899,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            {
                step: "01",
                title: "Choose Service & Time",
                description: "Select from our comprehensive services and pick a convenient time slot",
                icon: "\uD83D\uDCC5"
            },
            {
                step: "02",
                title: "Provide Birth Details",
                description: "Share your date, time, and place of birth for accurate analysis",
                icon: "\uD83D\uDCDD"
            },
            {
                step: "03",
                title: "Confirm via WhatsApp",
                description: "Details sent directly to Rekha Ji's WhatsApp for confirmation",
                icon: "\uD83D\uDCAC"
            }
        ].map(_temp25);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== setIsBookingOpen) {
        t4 = ()=>setIsBookingOpen(true);
        $[4] = setIsBookingOpen;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Book Appointment Now"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1937,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "animate-pulse",
            children: "✨"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1938,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3",
                    onClick: t4,
                    children: [
                        t5,
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1947,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1947,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t4;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white font-bold text-2xl mb-6",
            children: "Working Hours & Charges"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1955,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-purple-400 font-semibold text-lg mb-4",
            children: "Available Hours"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1962,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: workingHours.map(_temp26)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1970,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1970,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-purple-400 font-semibold text-lg mb-4",
            children: "Service Charges"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1971,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t10;
        $[13] = t11;
    } else {
        t10 = $[12];
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300",
                    children: "Kundli Reading"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1980,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-medium",
                    children: "₹300"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1980,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1980,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300",
                    children: "First Consultation"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1987,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-green-400 font-medium",
                    children: "FREE"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1987,
                    columnNumber: 124
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1987,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300",
                    children: "Follow-up Consultation"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1994,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-medium",
                    children: "₹300/hour"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1994,
                    columnNumber: 128
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1994,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300",
                    children: "Extra 30 minutes"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2001,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-medium",
                    children: "+₹150"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2001,
                    columnNumber: 122
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2001,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t12,
                        t13,
                        t14,
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Extra 1 hour"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 2008,
                                    columnNumber: 124
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-medium",
                                    children: "+₹300"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 2008,
                                    columnNumber: 175
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2008,
                            columnNumber: 68
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2008,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2008,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm",
            children: [
                t8,
                t10,
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-purple-300 text-sm text-center",
                            children: "📞 Direct WhatsApp: +91 85109 88703"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2015,
                            columnNumber: 229
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-xs text-center mt-1",
                            children: "Urgent queries responded within 2 hours"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2015,
                            columnNumber: 319
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2015,
                    columnNumber: 113
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2015,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] !== t7) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "booking",
            className: "py-20 px-6 lg:px-12 bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto content-layer",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                        children: [
                            t7,
                            t17
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2022,
                        columnNumber: 133
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2022,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2022,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t7;
        $[21] = t18;
    } else {
        t18 = $[21];
    }
    return t18;
};
_c11 = BookingInfoSection;
// Contact CTA Section (SIMPLIFIED - NO FADE)
const ContactCTASection = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const { setIsBookingOpen } = t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2046,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2047,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    let t3;
    let t4;
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
            children: "Ready for Guidance?"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2058,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-gradient text-4xl lg:text-5xl font-black mb-6",
            children: "Begin Your Spiritual Journey Today"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2059,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 text-xl mb-10 max-w-2xl mx-auto",
            children: "Connect with Rekha Sharma Ji for personalized divine guidance that transforms lives. Take the first step towards clarity and purpose."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2060,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
    } else {
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] !== setIsBookingOpen) {
        t6 = ()=>setIsBookingOpen(true);
        $[6] = setIsBookingOpen;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Book Your Session"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2080,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "animate-pulse",
            children: "✨"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2081,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t6) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3",
            onClick: t6,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2090,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t6;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "border-2 border-purple-500 text-white px-12 py-5 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300 text-lg",
            onClick: _temp27,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Chat on WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2098,
                        columnNumber: 228
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "💬"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2098,
                        columnNumber: 257
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2098,
                columnNumber: 182
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2098,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-6 justify-center",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t9;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto",
            children: [
                {
                    icon: "\u26A1",
                    text: "Instant WhatsApp Confirmation"
                },
                {
                    icon: "\uD83C\uDFAF",
                    text: "100% Personalized Guidance"
                },
                {
                    icon: "\uD83D\uDCAB",
                    text: "14+ Years Expert Experience"
                }
            ].map(_temp28)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2113,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "py-20 px-6 lg:px-12 bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-purple-900/30 via-gray-900/50 to-pink-900/30 rounded-3xl p-12 border border-white/10 backdrop-blur-lg relative overflow-hidden",
                    children: [
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    t3,
                                    t4,
                                    t5,
                                    t11,
                                    t12
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 2129,
                                columnNumber: 333
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2129,
                            columnNumber: 290
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2129,
                    columnNumber: 115
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2129,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t11;
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    return t13;
};
_c12 = ContactCTASection;
// Header Component (SIMPLIFIED - NO FADE)
const Header = (t0)=>{
    _s7();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const { setIsBookingOpen } = t0;
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            setActiveSection("home");
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-black text-white cursor-pointer",
                onClick: t1,
                children: [
                    "Rekha",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gradient",
                        children: "Sharma"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2167,
                        columnNumber: 136
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2167,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2167,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            {
                name: "Home",
                id: "home"
            },
            {
                name: "About",
                id: "about"
            },
            {
                name: "Services",
                id: "services"
            },
            {
                name: "Testimonials",
                id: "testimonials"
            },
            {
                name: "Booking",
                id: "booking"
            },
            {
                name: "FAQ",
                id: "faq"
            },
            {
                name: "Contact",
                id: "contact"
            }
        ];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== activeSection) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden lg:flex space-x-8",
            children: t3.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: `#${link.id}`,
                    className: `text-sm font-semibold transition-all duration-300 relative ${activeSection === link.id ? "text-purple-400" : "text-gray-400 hover:text-white"}`,
                    onClick: ()=>setActiveSection(link.id),
                    children: [
                        link.name,
                        activeSection === link.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2202,
                            columnNumber: 346
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, link.id, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2202,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2202,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = activeSection;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:flex items-center space-x-2 px-3 py-1.5 bg-green-500/20 rounded-full border border-green-500/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2210,
                    columnNumber: 133
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-green-400 text-xs font-medium",
                    children: "Online Now"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2210,
                    columnNumber: 200
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2210,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== isMenuOpen) {
        t6 = ()=>setIsMenuOpen(!isMenuOpen);
        $[7] = isMenuOpen;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== isMenuOpen) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2225,
                columnNumber: 103
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6h16M4 12h16M4 18h16"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2225,
                columnNumber: 200
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2225,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = isMenuOpen;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "lg:hidden text-gray-400 hover:text-white",
            onClick: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2233,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== setIsBookingOpen) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25",
            onClick: ()=>setIsBookingOpen(true),
            children: "Book Now"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2242,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = setIsBookingOpen;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t8 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4",
            children: [
                t5,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2250,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t8;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 py-4 flex justify-between items-center",
            children: [
                t2,
                t4,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
        $[20] = t4;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== activeSection || $[23] !== isMenuOpen) {
        t12 = isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 space-y-4",
                children: [
                    {
                        name: "Home",
                        id: "home"
                    },
                    {
                        name: "About",
                        id: "about"
                    },
                    {
                        name: "Services",
                        id: "services"
                    },
                    {
                        name: "Testimonials",
                        id: "testimonials"
                    },
                    {
                        name: "Booking",
                        id: "booking"
                    },
                    {
                        name: "FAQ",
                        id: "faq"
                    },
                    {
                        name: "Contact",
                        id: "contact"
                    }
                ].map((link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `#${link_0.id}`,
                        className: `block py-2 font-semibold ${activeSection === link_0.id ? "text-purple-400" : "text-gray-300 hover:text-white"}`,
                        onClick: ()=>{
                            setActiveSection(link_0.id);
                            setIsMenuOpen(false);
                        },
                        children: link_0.name
                    }, link_0.id, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2289,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2268,
                columnNumber: 142
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2268,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = activeSection;
        $[23] = isMenuOpen;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t11 || $[26] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed top-0 w-full z-50 glass-dark border-b border-gray-800/50 backdrop-blur-xl",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2301,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    return t13;
};
_s7(Header, "9p4F4HxYlv4v56HZ8KFJGp/gUvI=");
_c13 = Header;
// Footer Component (SIMPLIFIED - NO FADE)
// Footer Component - BRIGHT TEXT VERSION
const Footer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-black text-white mb-6",
            children: [
                "Rekha",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gradient",
                    children: "Sharma"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2324,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2324,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/80 leading-relaxed mb-6",
            children: "Providing divine Vedic astrology guidance to help you navigate life's journey with clarity, purpose, and confidence through celestial wisdom."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2325,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/90 flex items-center space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "📧"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2334,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "guidance@rekhasharma.com"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2334,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2334,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/90 flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "📱"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 2342,
                                    columnNumber: 111
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "+91 85109 88703 (WhatsApp)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 2342,
                                    columnNumber: 126
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2342,
                            columnNumber: 54
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2342,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2342,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-white text-lg mb-6",
            children: "Quick Links"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2343,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        "Home",
                        "About",
                        "Services",
                        "Testimonials",
                        "Booking",
                        "FAQ",
                        "Contact"
                    ].map(_temp29)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2353,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2353,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-white text-lg mb-6",
            children: "Services"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2354,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        "Kundli Reading",
                        "Personal Consultation",
                        "Palm Reading",
                        "Marriage Match",
                        "Career Guidance",
                        "Vastu Consultation",
                        "Numerology",
                        "Yearly Horoscope"
                    ].map(_temp30)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2364,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2364,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-white text-lg mb-6",
            children: "Connect With Us"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2365,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white/80",
            children: "Get daily cosmic insights and astrology tips"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2374,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "📱"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2381,
                columnNumber: 165
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2381,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "📘"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2388,
                columnNumber: 165
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2388,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "📸"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2395,
                columnNumber: 165
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2395,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-4",
            children: [
                t10,
                t11,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "🎥"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2402,
                        columnNumber: 212
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2402,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2402,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-12",
            children: [
                t3,
                t5,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                t9,
                                t13,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple-300 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400",
                                                    children: "📞"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 2409,
                                                    columnNumber: 245
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Emergency guidance available 24/7 on WhatsApp"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 2409,
                                            columnNumber: 206
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/70 text-xs mt-1",
                                            children: "Instant response for urgent consultations"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 2409,
                                            columnNumber: 337
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 2409,
                                    columnNumber: 124
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2409,
                            columnNumber: 88
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2409,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2409,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/70 text-sm mb-1",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Rekha Sharma Astrology Services. All divine wisdom reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2416,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/50 text-xs",
                    children: "Trusted by 5000+ clients across India"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2416,
                    columnNumber: 151
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2416,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-transparent border-t border-gray-800/50 py-16 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 mt-12 pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-center",
                            children: [
                                t15,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-6 mt-4 md:mt-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 2423,
                                            columnNumber: 300
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 2423,
                                            columnNumber: 417
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-white/70 hover:text-purple-400 transition-colors duration-300 text-sm",
                                            children: "Disclaimer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 2423,
                                            columnNumber: 536
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 2423,
                                    columnNumber: 255
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2423,
                            columnNumber: 178
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2423,
                        columnNumber: 125
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2423,
                columnNumber: 85
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2423,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    return t16;
};
_c14 = Footer;
function Home() {
    _s8();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ee219eba1aa5a856465df7eda8df98cca64a332991a020f9ec02e3125418f09";
    }
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isBookingOpen, setIsBookingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Home[useEffect()]": ()=>{
                const timer = setTimeout({
                    "Home[useEffect() > setTimeout()]": ()=>setIsLoading(false)
                }["Home[useEffect() > setTimeout()]"], 1500);
                return ()=>clearTimeout(timer);
            }
        })["Home[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_HomeUseEffect, t2);
    if (isLoading) {
        let t3;
        if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 border-4 border-purple-500/30 rounded-full animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2472,
                columnNumber: 12
            }, this);
            $[4] = t3;
        } else {
            t3 = $[4];
        }
        let t4;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-4 border-4 border-transparent border-t-pink-500 rounded-full animate-spin",
                style: {
                    animationDirection: "reverse"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2479,
                columnNumber: 12
            }, this);
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        let t5;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-24 h-24 mx-auto mb-4",
                            children: [
                                t3,
                                t4,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-4xl",
                                        children: "✨"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 2488,
                                        columnNumber: 243
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 2488,
                                    columnNumber: 176
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2488,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white text-2xl font-semibold",
                            children: "Rekha Sharma Astrology"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2488,
                            columnNumber: 301
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-purple-400 text-sm mt-2",
                            children: "Loading divine wisdom..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2488,
                            columnNumber: 380
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2488,
                    columnNumber: 90
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2488,
                columnNumber: 12
            }, this);
            $[6] = t5;
        } else {
            t5 = $[6];
        }
        return t5;
    }
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InteractiveBackground, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2510,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2511,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AstrologerHero, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2512,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutAstrologer, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2513,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicesSection, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2514,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsSection, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2515,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VedicAstrologyKnowledge, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2516,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoonPhasesPlanetary, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2517,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NakshatraGuidance, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2518,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialProof, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2519,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQSection, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2520,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingInfoSection, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2521,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactCTASection, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2522,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2523,
            columnNumber: 11
        }, this);
        $[7] = t10;
        $[8] = t11;
        $[9] = t12;
        $[10] = t13;
        $[11] = t14;
        $[12] = t15;
        $[13] = t16;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
    } else {
        t10 = $[7];
        t11 = $[8];
        t12 = $[9];
        t13 = $[10];
        t14 = $[11];
        t15 = $[12];
        t16 = $[13];
        t3 = $[14];
        t4 = $[15];
        t5 = $[16];
        t6 = $[17];
        t7 = $[18];
        t8 = $[19];
        t9 = $[20];
    }
    let t17;
    if ($[21] !== isBookingOpen) {
        t17 = isBookingOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingForm, {
            isOpen: isBookingOpen,
            onClose: {
                "Home[<BookingForm>.onClose]": ()=>setIsBookingOpen(false)
            }["Home[<BookingForm>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2556,
            columnNumber: 28
        }, this);
        $[21] = isBookingOpen;
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:shadow-green-500/30 hover:scale-110 transition-all duration-300 animate-pulse-glow",
            onClick: _HomeButtonOnClick,
            "aria-label": "Chat on WhatsApp",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "💬"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2566,
                columnNumber: 300
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2566,
            columnNumber: 11
        }, this);
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "Home[<button>.onClick]": ()=>setIsBookingOpen(true)
        })["Home[<button>.onClick]"];
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    let t21;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-6 right-6 flex flex-col items-end space-y-4 z-40 floating-layer",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:shadow-purple-500/30 hover:scale-110 transition-all duration-300",
                    onClick: t19,
                    "aria-label": "Book Appointment",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📅"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2583,
                        columnNumber: 366
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2583,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300 lg:hidden",
                    onClick: _HomeButtonOnClick2,
                    "aria-label": "Call Now",
                    children: "📞"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 2583,
                    columnNumber: 390
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2583,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "fixed bottom-6 left-6 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:border-purple-500 transition-colors z-40 floating-layer",
            onClick: _HomeButtonOnClick3,
            "aria-label": "Scroll to top",
            children: "↑"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2584,
            columnNumber: 11
        }, this);
        $[25] = t20;
        $[26] = t21;
    } else {
        t20 = $[25];
        t21 = $[26];
    }
    let t22;
    if ($[27] !== t17) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen text-white w-full overflow-x-hidden bg-black",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                t10,
                t11,
                t12,
                t13,
                t14,
                t15,
                t16,
                t17,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2593,
            columnNumber: 11
        }, this);
        $[27] = t17;
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    return t22;
}
_s8(Home, "aVRIoHWWlz7QbBOdOgoEXcr4uvA=");
_c15 = Home;
function _HomeButtonOnClick3() {
    return window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function _HomeButtonOnClick2() {
    return window.location.href = "tel:+918510988703";
}
function _HomeButtonOnClick() {
    return window.open("https://wa.me/918510988703", "_blank");
}
function _HomeUseEffect() {
    setTimeout(_HomeUseEffectSetTimeout, 100);
}
function _HomeUseEffectSetTimeout() {
    const allElements = document.querySelectorAll("*");
    allElements.forEach(_HomeUseEffectSetTimeoutAllElementsForEach);
}
function _HomeUseEffectSetTimeoutAllElementsForEach(el) {
    el.style.opacity = "1";
    el.style.visibility = "visible";
}
function _temp(el) {
    el.style.opacity = "1";
    el.style.visibility = "visible";
}
function _temp2() {
    const allElements = document.querySelectorAll("*");
    allElements.forEach(_temp);
}
function _temp3(point, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start space-x-3 p-4 bg-white/5 rounded-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm mt-1",
                children: index_0 + 1
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2633,
                columnNumber: 94
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300",
                children: point
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2633,
                columnNumber: 253
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2633,
        columnNumber: 10
    }, this);
}
function _temp4(activity, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-gray-300 text-sm",
        children: [
            "• ",
            activity
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2636,
        columnNumber: 10
    }, this);
}
function _temp5(item, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "text-gray-300 text-sm",
        children: [
            "• ",
            item
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2639,
        columnNumber: 10
    }, this);
}
function _temp6(item, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center p-4 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl mr-4",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2642,
                columnNumber: 168
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-semibold",
                                children: item.time
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 2642,
                                columnNumber: 296
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-400 text-sm bg-purple-500/10 px-2 py-1 rounded",
                                children: "Recommended"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 2642,
                                columnNumber: 357
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2642,
                        columnNumber: 240
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 text-sm mb-1",
                        children: item.activity
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2642,
                        columnNumber: 458
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-green-400 text-xs",
                        children: item.benefit
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2642,
                        columnNumber: 519
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2642,
                columnNumber: 216
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2642,
        columnNumber: 10
    }, this);
}
function _temp7() {
    const slots = [];
    for(let hour = 9; hour <= 21; hour++){
        const time = `${hour.toString().padStart(2, "0")}:00`;
        slots.push(time);
    }
    return slots;
}
function _temp8() {
    const dates = [];
    const today = new Date();
    for(let i = 0; i < 30; i++){
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
}
function _temp9() {
    document.body.style.overflow = "unset";
}
function _temp10(date_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: date_0,
        children: new Date(date_0).toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        })
    }, date_0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2666,
        columnNumber: 10
    }, this);
}
function _temp11(slot) {
    const hour_0 = parseInt(slot.split(":")[0]);
    const displayTime = hour_0 < 12 ? `${slot} AM` : hour_0 === 12 ? `${slot} PM` : `${hour_0 - 12}:00 PM`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: slot,
        children: displayTime
    }, slot, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2676,
        columnNumber: 10
    }, this);
}
function _temp12(prev_0) {
    return {
        ...prev_0,
        serviceType: "kundli"
    };
}
function _temp13(prev_1) {
    return {
        ...prev_1,
        serviceType: "consultation"
    };
}
function _temp14(symbol, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute text-purple-400/20 text-4xl zodiac-float pointer-events-none",
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
        },
        children: symbol
    }, i, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2691,
        columnNumber: 10
    }, this);
}
function _temp15(_, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none animate-twinkle",
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i_0 * 0.2}s`
        }
    }, i_0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2697,
        columnNumber: 10
    }, this);
}
function _temp16(specialty, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl mb-3 group-hover:scale-110 transition-transform duration-300",
                children: specialty.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2704,
                columnNumber: 151
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-white font-semibold mb-2",
                children: specialty.title
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2704,
                columnNumber: 260
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm",
                children: specialty.description
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2704,
                columnNumber: 328
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2704,
        columnNumber: 10
    }, this);
}
function _temp17(stat, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl mb-1",
                children: stat.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2707,
                columnNumber: 59
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-purple-400",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2707,
                columnNumber: 107
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-xs font-medium",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2707,
                columnNumber: 178
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2707,
        columnNumber: 10
    }, this);
}
function _temp18() {
    return document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}
function _temp19(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl mb-2",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2715,
                columnNumber: 147
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white font-semibold text-sm mb-1",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2715,
                columnNumber: 195
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-xs",
                children: item.desc
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2715,
                columnNumber: 268
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2715,
        columnNumber: 10
    }, this);
}
function _temp20(detail, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2 text-xs text-gray-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2718,
                columnNumber: 87
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: detail
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2718,
                columnNumber: 159
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2718,
        columnNumber: 10
    }, this);
}
function _temp21(testimonial, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg",
                            children: "👤"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2721,
                            columnNumber: 329
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2721,
                        columnNumber: 204
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-white font-semibold",
                                children: testimonial.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 2721,
                                columnNumber: 375
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex text-yellow-400 text-sm",
                                        children: "\u2B50".repeat(testimonial.rating)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 2721,
                                        columnNumber: 484
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 text-xs",
                                        children: testimonial.date
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 2721,
                                        columnNumber: 573
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 2721,
                                columnNumber: 439
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2721,
                        columnNumber: 370
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2721,
                columnNumber: 154
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 italic mb-4",
                children: [
                    '"',
                    testimonial.text,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2721,
                columnNumber: 656
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-purple-400 text-sm bg-purple-500/10 px-3 py-1 rounded-full",
                        children: testimonial.service
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2721,
                        columnNumber: 772
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-500 text-xs",
                        children: "Verified Client"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2721,
                        columnNumber: 882
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2721,
                columnNumber: 721
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2721,
        columnNumber: 10
    }, this);
}
function _temp22(stat, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl mb-2",
                children: stat.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2724,
                columnNumber: 53
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-purple-400",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2724,
                columnNumber: 101
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-300 text-sm",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2724,
                columnNumber: 172
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2724,
        columnNumber: 10
    }, this);
}
function _temp23(session, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "👤"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 2727,
                            columnNumber: 312
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2727,
                        columnNumber: 187
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white font-medium",
                                children: session.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 2727,
                                columnNumber: 338
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 text-sm",
                                children: session.service
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 2727,
                                columnNumber: 398
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2727,
                        columnNumber: 333
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2727,
                columnNumber: 142
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-purple-400 text-sm",
                children: session.time
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2727,
                columnNumber: 472
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2727,
        columnNumber: 10
    }, this);
}
function _temp24(stat, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/50 rounded-2xl p-6 border border-gray-700 flex flex-col items-center justify-center text-center hover:border-purple-500/50 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl mb-3",
                children: stat.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2730,
                columnNumber: 204
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl font-bold text-purple-400 mb-1",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2730,
                columnNumber: 252
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-300",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2730,
                columnNumber: 328
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2730,
        columnNumber: 10
    }, this);
}
function _temp25(step, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start space-x-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg",
                children: step.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2733,
                columnNumber: 66
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-purple-400 text-sm font-semibold mb-1",
                        children: [
                            "Step ",
                            step.step
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2733,
                        columnNumber: 244
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-bold text-lg mb-1",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2733,
                        columnNumber: 326
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: step.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 2733,
                        columnNumber: 393
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2733,
                columnNumber: 239
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2733,
        columnNumber: 10
    }, this);
}
function _temp26(slot, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center py-3 border-b border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-300",
                children: slot.day
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2736,
                columnNumber: 105
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white font-medium",
                children: slot.time
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2736,
                columnNumber: 154
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2736,
        columnNumber: 10
    }, this);
}
function _temp27() {
    return window.open("https://wa.me/918510988703", "_blank");
}
function _temp28(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-3 text-gray-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2742,
                columnNumber: 81
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: item.text
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 2742,
                columnNumber: 123
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2742,
        columnNumber: 10
    }, this);
}
function _temp29(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `#${link.toLowerCase()}`,
            className: "text-white/80 hover:text-purple-400 transition-colors duration-300 hover:pl-2 block",
            children: link
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2745,
            columnNumber: 25
        }, this)
    }, link, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2745,
        columnNumber: 10
    }, this);
}
function _temp30(service) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#services",
            className: "text-white/80 hover:text-purple-400 transition-colors duration-300 hover:pl-2 block",
            children: service
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 2748,
            columnNumber: 28
        }, this)
    }, service, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 2748,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "VedicAstrologyKnowledge");
__turbopack_context__.k.register(_c1, "MoonPhasesPlanetary");
__turbopack_context__.k.register(_c2, "NakshatraGuidance");
__turbopack_context__.k.register(_c3, "BookingForm");
__turbopack_context__.k.register(_c4, "InteractiveBackground");
__turbopack_context__.k.register(_c5, "AstrologerHero");
__turbopack_context__.k.register(_c6, "AboutAstrologer");
__turbopack_context__.k.register(_c7, "ServicesSection");
__turbopack_context__.k.register(_c8, "TestimonialsSection");
__turbopack_context__.k.register(_c9, "SocialProof");
__turbopack_context__.k.register(_c10, "FAQSection");
__turbopack_context__.k.register(_c11, "BookingInfoSection");
__turbopack_context__.k.register(_c12, "ContactCTASection");
__turbopack_context__.k.register(_c13, "Header");
__turbopack_context__.k.register(_c14, "Footer");
__turbopack_context__.k.register(_c15, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_page_cf51c7e1.js.map