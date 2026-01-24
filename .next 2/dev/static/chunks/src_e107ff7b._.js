(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/BookingForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/components/BookingForm.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BookingForm = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(105);
    if ($[0] !== "bfd8204b8a9a176520891bf9307f3efa938884d3b7a4ea518f9b2c7744d19c15") {
        for(let $i = 0; $i < 105; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bfd8204b8a9a176520891bf9307f3efa938884d3b7a4ea518f9b2c7744d19c15";
    }
    const { onClose } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "",
            phone: "",
            date: "",
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
    const generateTimeSlots = _temp;
    const getNext30Days = _temp2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ()=>{
            setAvailableSlots(generateTimeSlots());
        };
        t4 = [];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[5] !== formData.date || $[6] !== formData.extraTime || $[7] !== formData.isFirstTime || $[8] !== formData.name || $[9] !== formData.phone || $[10] !== formData.serviceType || $[11] !== formData.timeSlot || $[12] !== onClose) {
        t5 = (e)=>{
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
            const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }) : "";
            const message = "\uD83C\uDF1F *New Astrology Appointment Booking* \uD83C\uDF1F%0A%0A" + `*Name:* ${formData.name}%0A` + `*Phone:* ${formData.phone}%0A` + `*Date:* ${formattedDate}%0A` + `*Time Slot:* ${formData.timeSlot}%0A` + `*Service:* ${serviceDetails}%0A` + `*Total Charges:* ₹${charges}%0A%0A` + "\uD83D\uDCC5 *Please confirm this appointment*%0A" + "\u2728 *Thank you!*";
            const whatsappURL = `https://wa.me/${"918510988703"}?text=${message}`;
            window.open(whatsappURL, "_blank");
            setFormData({
                name: "",
                phone: "",
                date: "",
                timeSlot: "",
                serviceType: "kundli",
                isFirstTime: true
            });
            setLoading(false);
            onClose();
            alert("Opening WhatsApp with your booking details. Please send the message to confirm your appointment.");
        };
        $[5] = formData.date;
        $[6] = formData.extraTime;
        $[7] = formData.isFirstTime;
        $[8] = formData.name;
        $[9] = formData.phone;
        $[10] = formData.serviceType;
        $[11] = formData.timeSlot;
        $[12] = onClose;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const handleSubmit = t5;
    let t6;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (e_0)=>{
            const { name, value, type, checked } = e_0.target;
            setFormData((prev)=>({
                    ...prev,
                    [name]: type === "checkbox" ? checked : value
                }));
        };
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const handleChange = t6;
    let t7;
    if ($[15] !== formData.extraTime || $[16] !== formData.isFirstTime || $[17] !== formData.serviceType) {
        t7 = ()=>{
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
        $[15] = formData.extraTime;
        $[16] = formData.isFirstTime;
        $[17] = formData.serviceType;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const calculateCharges = t7;
    let t10;
    let t8;
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0
        };
        t9 = {
            opacity: 1
        };
        t10 = {
            opacity: 0
        };
        $[19] = t10;
        $[20] = t8;
        $[21] = t9;
    } else {
        t10 = $[19];
        t8 = $[20];
        t9 = $[21];
    }
    let t11;
    let t12;
    let t13;
    let t14;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            scale: 0.8,
            opacity: 0,
            y: 50
        };
        t12 = {
            scale: 1,
            opacity: 1,
            y: 0
        };
        t13 = {
            scale: 0.8,
            opacity: 0,
            y: 50
        };
        t14 = {
            type: "spring",
            damping: 25
        };
        $[22] = t11;
        $[23] = t12;
        $[24] = t13;
        $[25] = t14;
    } else {
        t11 = $[22];
        t12 = $[23];
        t13 = $[24];
        t14 = $[25];
    }
    let t15;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-white text-2xl font-bold",
                    children: "Book Appointment"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 226,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-purple-300 text-sm",
                    children: "Connect with divine guidance"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 226,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 226,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== onClose) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start mb-6",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-400 hover:text-white text-2xl transition-colors",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 233,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 233,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = onClose;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Full Name *"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 241,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t17;
    } else {
        t17 = $[29];
    }
    let t18;
    if ($[30] !== formData.name) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300",
                    placeholder: "Enter your full name"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 248,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 248,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = formData.name;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    let t19;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Phone Number *"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 256,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== formData.phone) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
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
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 263,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 263,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = formData.phone;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Select Date *"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 271,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    const t22 = formData.date;
    let t23;
    let t24;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Choose appointment date"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 280,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t24 = getNext30Days().map(_temp4);
        $[36] = t23;
        $[37] = t24;
    } else {
        t23 = $[36];
        t24 = $[37];
    }
    let t25;
    if ($[38] !== formData.date) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "date",
                    value: t22,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none",
                    children: [
                        t23,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 290,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 290,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = formData.date;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    let t26;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Select Time Slot *"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 298,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    const t27 = formData.timeSlot;
    let t28;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: "Choose time (9 AM - 9 PM)"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 306,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t28;
    } else {
        t28 = $[41];
    }
    let t29;
    if ($[42] !== availableSlots) {
        t29 = availableSlots.map(_temp5);
        $[42] = availableSlots;
        $[43] = t29;
    } else {
        t29 = $[43];
    }
    let t30;
    if ($[44] !== formData.timeSlot || $[45] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "timeSlot",
                    value: t27,
                    onChange: handleChange,
                    required: true,
                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none",
                    children: [
                        t28,
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 321,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 321,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = formData.timeSlot;
        $[45] = t29;
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    let t31;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-white text-sm font-medium mb-2 block",
            children: "Service Type *"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 330,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t31;
    } else {
        t31 = $[47];
    }
    let t32;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = ()=>setFormData(_temp6);
        $[48] = t32;
    } else {
        t32 = $[48];
    }
    const t33 = `py-3 px-4 rounded-xl border transition-all duration-300 ${formData.serviceType === "kundli" ? "bg-purple-600 border-purple-500 text-white" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`;
    let t34;
    let t35;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-semibold",
            children: "Kundli"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 346,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs opacity-80",
            children: "₹300"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 347,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t34;
        $[50] = t35;
    } else {
        t34 = $[49];
        t35 = $[50];
    }
    let t36;
    if ($[51] !== t33) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t32,
            className: t33,
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 356,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t33;
        $[52] = t36;
    } else {
        t36 = $[52];
    }
    let t37;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = ()=>setFormData(_temp7);
        $[53] = t37;
    } else {
        t37 = $[53];
    }
    const t38 = `py-3 px-4 rounded-xl border transition-all duration-300 ${formData.serviceType === "consultation" ? "bg-purple-600 border-purple-500 text-white" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`;
    let t39;
    let t40;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "font-semibold",
            children: "Consultation"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 373,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs opacity-80",
            children: "First Free"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 374,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t39;
        $[55] = t40;
    } else {
        t39 = $[54];
        t40 = $[55];
    }
    let t41;
    if ($[56] !== t38) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t37,
            className: t38,
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 383,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t38;
        $[57] = t41;
    } else {
        t41 = $[57];
    }
    let t42;
    if ($[58] !== t36 || $[59] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        t36,
                        t41
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 391,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 391,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t36;
        $[59] = t41;
        $[60] = t42;
    } else {
        t42 = $[60];
    }
    let t43;
    if ($[61] !== formData.isFirstTime || $[62] !== formData.serviceType) {
        t43 = formData.serviceType === "consultation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 400,
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
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 400,
                            columnNumber: 418
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-green-400 ml-2",
                            children: "(Free)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 400,
                            columnNumber: 480
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 400,
                    columnNumber: 355
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 400,
            columnNumber: 54
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = formData.isFirstTime;
        $[62] = formData.serviceType;
        $[63] = t43;
    } else {
        t43 = $[63];
    }
    let t44;
    if ($[64] !== formData.extraTime || $[65] !== formData.isFirstTime || $[66] !== formData.serviceType) {
        t44 = formData.serviceType === "consultation" && !formData.isFirstTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "text-white text-sm font-medium mb-2 block",
                    children: "Session Duration"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 409,
                    columnNumber: 84
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setFormData(_temp8),
                            className: `py-3 rounded-xl border transition-all duration-300 ${!formData.extraTime ? "bg-purple-600 border-purple-500 text-white" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "1 Hour"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 409,
                                    columnNumber: 478
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs opacity-80",
                                    children: "₹300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 409,
                                    columnNumber: 521
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 409,
                            columnNumber: 209
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setFormData(_temp9),
                            className: `py-3 rounded-xl border transition-all duration-300 ${formData.extraTime === "1.5" ? "bg-purple-600 border-purple-500 text-white" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "1.5 Hours"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 409,
                                    columnNumber: 854
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs opacity-80",
                                    children: "+₹150"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 409,
                                    columnNumber: 900
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 409,
                            columnNumber: 576
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setFormData(_temp10),
                            className: `py-3 rounded-xl border transition-all duration-300 ${formData.extraTime === "2" ? "bg-purple-600 border-purple-500 text-white" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "2 Hours"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 409,
                                    columnNumber: 1233
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs opacity-80",
                                    children: "+₹300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 409,
                                    columnNumber: 1277
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 409,
                            columnNumber: 956
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 409,
                    columnNumber: 169
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 409,
            columnNumber: 79
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = formData.extraTime;
        $[65] = formData.isFirstTime;
        $[66] = formData.serviceType;
        $[67] = t44;
    } else {
        t44 = $[67];
    }
    let t45;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-300 font-medium",
            children: "Total Charges:"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 419,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t45;
    } else {
        t45 = $[68];
    }
    const t46 = calculateCharges();
    let t47;
    if ($[69] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-2",
            children: [
                t45,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl font-bold text-purple-400",
                    children: [
                        "₹",
                        t46
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 427,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 427,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t46;
        $[70] = t47;
    } else {
        t47 = $[70];
    }
    const t48 = formData.serviceType === "kundli" ? "Kundli Reading (\u20B9300)" : formData.isFirstTime ? "First Consultation (Free)" : `Consultation (₹300${formData.extraTime === "1.5" ? " + \u20B9150" : formData.extraTime === "2" ? " + \u20B9300" : ""})`;
    let t49;
    if ($[71] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-xs",
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 436,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t48;
        $[72] = t49;
    } else {
        t49 = $[72];
    }
    let t50;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-xs mt-2",
            children: "Payment directly to astrologer after service"
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 444,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t50;
    } else {
        t50 = $[73];
    }
    let t51;
    if ($[74] !== t47 || $[75] !== t49) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20",
            children: [
                t47,
                t49,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 451,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t47;
        $[75] = t49;
        $[76] = t51;
    } else {
        t51 = $[76];
    }
    const t52 = `w-full ${loading ? "bg-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"} text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3`;
    let t53;
    let t54;
    let t55;
    if ($[77] !== loading) {
        t53 = !loading ? {
            scale: 1.02
        } : {};
        t54 = !loading ? {
            scale: 0.98
        } : {};
        t55 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 469,
                            columnNumber: 97
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 469,
                            columnNumber: 203
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 469,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Preparing WhatsApp..."
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 469,
                    columnNumber: 376
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg",
                    children: "Book via WhatsApp"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 469,
                    columnNumber: 418
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl",
                    children: "📱"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 469,
                    columnNumber: 468
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[77] = loading;
        $[78] = t53;
        $[79] = t54;
        $[80] = t55;
    } else {
        t53 = $[78];
        t54 = $[79];
        t55 = $[80];
    }
    let t56;
    if ($[81] !== loading || $[82] !== t52 || $[83] !== t53 || $[84] !== t54 || $[85] !== t55) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            type: "submit",
            disabled: loading,
            className: t52,
            whileHover: t53,
            whileTap: t54,
            children: t55
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 481,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[81] = loading;
        $[82] = t52;
        $[83] = t53;
        $[84] = t54;
        $[85] = t55;
        $[86] = t56;
    } else {
        t56 = $[86];
    }
    let t57;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block w-2 h-2 bg-green-500 rounded-full mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingForm.js",
                        lineNumber: 493,
                        columnNumber: 77
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Details sent directly to astrologer's WhatsApp"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookingForm.js",
                lineNumber: 493,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 493,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[87] = t57;
    } else {
        t57 = $[87];
    }
    let t58;
    if ($[88] !== handleSubmit || $[89] !== t18 || $[90] !== t20 || $[91] !== t25 || $[92] !== t30 || $[93] !== t42 || $[94] !== t43 || $[95] !== t44 || $[96] !== t51 || $[97] !== t56) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-5",
            children: [
                t18,
                t20,
                t25,
                t30,
                t42,
                t43,
                t44,
                t51,
                t56,
                t57
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 500,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = handleSubmit;
        $[89] = t18;
        $[90] = t20;
        $[91] = t25;
        $[92] = t30;
        $[93] = t42;
        $[94] = t43;
        $[95] = t44;
        $[96] = t51;
        $[97] = t56;
        $[98] = t58;
    } else {
        t58 = $[98];
    }
    let t59;
    if ($[99] !== t16 || $[100] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "bg-gray-900 rounded-2xl p-6 md:p-8 max-w-md w-full border border-purple-500/30 shadow-2xl",
            initial: t11,
            animate: t12,
            exit: t13,
            transition: t14,
            onClick: _temp3,
            children: [
                t16,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 517,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[99] = t16;
        $[100] = t58;
        $[101] = t59;
    } else {
        t59 = $[101];
    }
    let t60;
    if ($[102] !== onClose || $[103] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            initial: t8,
            animate: t9,
            exit: t10,
            onClick: onClose,
            children: t59
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 526,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[102] = onClose;
        $[103] = t59;
        $[104] = t60;
    } else {
        t60 = $[104];
    }
    return t60;
};
_s(BookingForm, "4c3X4wK3grrln89MdfGSeoobTmc=");
_c = BookingForm;
const __TURBOPACK__default__export__ = BookingForm;
function _temp() {
    const slots = [];
    for(let hour = 9; hour <= 21; hour++){
        const time = `${hour.toString().padStart(2, "0")}:00`;
        slots.push(time);
    }
    return slots;
}
function _temp2() {
    const dates = [];
    const today = new Date();
    for(let i = 0; i < 30; i++){
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
}
function _temp3(e_1) {
    return e_1.stopPropagation();
}
function _temp4(date_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: date_0,
        children: new Date(date_0).toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        })
    }, date_0, false, {
        fileName: "[project]/src/components/BookingForm.js",
        lineNumber: 558,
        columnNumber: 10
    }, this);
}
function _temp5(slot) {
    const hour_0 = parseInt(slot.split(":")[0]);
    const displayTime = hour_0 < 12 ? `${slot} AM` : hour_0 === 12 ? `${slot} PM` : `${hour_0 - 12}:00 PM`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: slot,
        children: displayTime
    }, slot, false, {
        fileName: "[project]/src/components/BookingForm.js",
        lineNumber: 568,
        columnNumber: 10
    }, this);
}
function _temp6(prev_0) {
    return {
        ...prev_0,
        serviceType: "kundli"
    };
}
function _temp7(prev_1) {
    return {
        ...prev_1,
        serviceType: "consultation"
    };
}
function _temp8(prev_2) {
    return {
        ...prev_2,
        extraTime: ""
    };
}
function _temp9(prev_3) {
    return {
        ...prev_3,
        extraTime: "1.5"
    };
}
function _temp10(prev_4) {
    return {
        ...prev_4,
        extraTime: "2"
    };
}
var _c;
__turbopack_context__.k.register(_c, "BookingForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// page.js (Updated Astrology Website)
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookingForm.js [app-client] (ecmascript)"); // Import the booking form
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Interactive Background (same as before, but with cosmic theme)
const InteractiveBackground = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            x: 0,
            y: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [isMouseMoving, setIsMouseMoving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            let mouseMoveTimer;
            const handleMouseMove = (e)=>{
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                });
                setIsMouseMoving(true);
                clearTimeout(mouseMoveTimer);
                mouseMoveTimer = setTimeout(()=>{
                    setIsMouseMoving(false);
                }, 100);
            };
            window.addEventListener("mousemove", handleMouseMove);
            return ()=>{
                window.removeEventListener("mousemove", handleMouseMove);
                clearTimeout(mouseMoveTimer);
            };
        };
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            ...Array(50)
        ];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== isMouseMoving || $[6] !== mousePosition) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            children: t3.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute w-1 h-1 bg-purple-400/20 rounded-full pointer-events-none",
                    initial: {
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    },
                    animate: isMouseMoving ? {
                        x: mousePosition.x + (Math.random() - 0.5) * 100,
                        y: mousePosition.y + (Math.random() - 0.5) * 100
                    } : {
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    },
                    transition: {
                        duration: isMouseMoving ? 1 : 3,
                        ease: "easeOut"
                    }
                }, i, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 70,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = isMouseMoving;
        $[6] = mousePosition;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl pointer-events-none",
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ]
            },
            transition: {
                duration: 8,
                repeat: Infinity
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl pointer-events-none",
            animate: {
                scale: [
                    1.2,
                    1,
                    1.2
                ]
            },
            transition: {
                duration: 10,
                repeat: Infinity,
                delay: 3
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 103,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 overflow-hidden z-0",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 116,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t4;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    return t7;
};
_s(InteractiveBackground, "pdw/N6C/Ub9NIaDxqLHOOrH1xFY=");
_c = InteractiveBackground;
// Astrologer Hero Section
const AstrologerHero = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
    }
    const { setIsBookingOpen } = t0;
    const [currentWord, setCurrentWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "Astrology",
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
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            opacity: 0,
            y: 20
        };
        t5 = {
            opacity: 1,
            y: 0
        };
        t6 = {
            duration: 0.6
        };
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t4 = $[4];
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2 h-2 bg-purple-500 rounded-full animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 188,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-2 h-2 bg-pink-500 rounded-full animate-pulse",
            style: {
                animationDelay: "0.2s"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 195,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3",
            initial: t4,
            animate: t5,
            transition: t6,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-1",
                    children: [
                        t7,
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 bg-purple-400 rounded-full animate-pulse",
                            style: {
                                animationDelay: "0.4s"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 204,
                            columnNumber: 225
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 204,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-purple-300 text-sm font-medium",
                    children: "Divine Guidance Since 2010"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 206,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 204,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    let t11;
    let t12;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            opacity: 0,
            y: 30
        };
        t11 = {
            opacity: 1,
            y: 0
        };
        t12 = {
            duration: 0.7
        };
        $[10] = t10;
        $[11] = t11;
        $[12] = t12;
    } else {
        t10 = $[10];
        t11 = $[11];
        t12 = $[12];
    }
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 236,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    let t14;
    let t15;
    let t16;
    let t17;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            y: 50,
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)"
        };
        t15 = {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        };
        t16 = {
            y: -50,
            opacity: 0,
            scale: 1.2,
            filter: "blur(10px)"
        };
        t17 = {
            duration: 0.6,
            ease: "easeInOut"
        };
        $[14] = t14;
        $[15] = t15;
        $[16] = t16;
        $[17] = t17;
    } else {
        t14 = $[14];
        t15 = $[15];
        t16 = $[16];
        t17 = $[17];
    }
    const t18 = words[currentWord];
    let t19;
    if ($[18] !== currentWord || $[19] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl lg:text-6xl font-light text-white leading-tight",
            children: [
                "Connect with",
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-24 lg:h-28 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: t14,
                            animate: t15,
                            exit: t16,
                            transition: t17,
                            className: "text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-5xl lg:text-6xl font-normal inline-block",
                            children: t18
                        }, currentWord, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 281,
                            columnNumber: 193
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 281,
                        columnNumber: 164
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 281,
                    columnNumber: 101
                }, ("TURBOPACK compile-time value", void 0)),
                "for life clarity"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 281,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = currentWord;
        $[19] = t18;
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto",
            children: "Expert astrological guidance to navigate life's challenges and discover your true path with ancient wisdom."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 290,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "space-y-6",
            initial: t10,
            animate: t11,
            transition: t12,
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 297,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t19;
        $[23] = t21;
    } else {
        t21 = $[23];
    }
    let t22;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto",
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.7,
                delay: 0.3
            },
            children: [
                {
                    icon: "\u2728",
                    title: "Kundli Analysis",
                    description: "Detailed birth chart readings and predictions"
                },
                {
                    icon: "\uD83E\uDD32",
                    title: "Palm Reading",
                    description: "Understand your life lines and future"
                },
                {
                    icon: "\uD83D\uDD22",
                    title: "Numerology",
                    description: "Numbers that reveal your destiny"
                }
            ].map(_temp)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 305,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t22;
    } else {
        t22 = $[24];
    }
    let t23;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex justify-center gap-12 max-w-md mx-auto",
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.7,
                delay: 0.5
            },
            children: [
                {
                    number: "14+",
                    label: "Years"
                },
                {
                    number: "5000+",
                    label: "Clients"
                },
                {
                    number: "98%",
                    label: "Accuracy"
                },
                {
                    number: "24/7",
                    label: "Guidance"
                }
            ].map(_temp2)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 333,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t23;
    } else {
        t23 = $[25];
    }
    let t24;
    if ($[26] !== t21) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 361,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t21;
        $[27] = t24;
    } else {
        t24 = $[27];
    }
    let t25;
    let t26;
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = {
            opacity: 0,
            y: 20
        };
        t26 = {
            opacity: 1,
            y: 0
        };
        t27 = {
            duration: 0.7,
            delay: 0.7
        };
        $[28] = t25;
        $[29] = t26;
        $[30] = t27;
    } else {
        t25 = $[28];
        t26 = $[29];
        t27 = $[30];
    }
    let t28;
    let t29;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            scale: 1.02,
            y: -2
        };
        t29 = {
            scale: 0.98
        };
        $[31] = t28;
        $[32] = t29;
    } else {
        t28 = $[31];
        t29 = $[32];
    }
    let t30;
    if ($[33] !== setIsBookingOpen) {
        t30 = ()=>setIsBookingOpen(true);
        $[33] = setIsBookingOpen;
        $[34] = t30;
    } else {
        t30 = $[34];
    }
    let t31;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10",
            children: "Book Appointment"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 417,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t31;
    } else {
        t31 = $[35];
    }
    let t32;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            animate: {
                x: [
                    0,
                    5,
                    0
                ]
            },
            transition: {
                duration: 1.5,
                repeat: Infinity
            },
            className: "relative z-10",
            children: "📅"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 424,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t32;
    } else {
        t32 = $[36];
    }
    let t33;
    if ($[37] !== t30) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "bg-purple-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 relative overflow-hidden",
            whileHover: t28,
            whileTap: t29,
            onClick: t30,
            children: [
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 436,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t30;
        $[38] = t33;
    } else {
        t33 = $[38];
    }
    let t34;
    let t35;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            scale: 1.02,
            y: -2
        };
        t35 = {
            scale: 0.98
        };
        $[39] = t34;
        $[40] = t35;
    } else {
        t34 = $[39];
        t35 = $[40];
    }
    let t36;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "View Services"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 460,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t36;
    } else {
        t36 = $[41];
    }
    let t37;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "border border-gray-600 text-white px-10 py-4 rounded-lg font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-colors flex items-center justify-center space-x-2",
            whileHover: t34,
            whileTap: t35,
            onClick: _temp3,
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    animate: {
                        rotate: [
                            0,
                            360
                        ]
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    children: "🔮"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 467,
                    columnNumber: 269
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 467,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t37;
    } else {
        t37 = $[42];
    }
    let t38;
    if ($[43] !== t33) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [
                t33,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 480,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t33;
        $[44] = t38;
    } else {
        t38 = $[44];
    }
    let t39;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-gray-500 text-sm bg-white/5 rounded-lg p-4 max-w-md mx-auto",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 0.7,
                delay: 1
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Kundli Reading: ₹300 | Consultation: First-time Free, then ₹300/hour"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 495,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 488,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t39;
    } else {
        t39 = $[45];
    }
    let t40;
    if ($[46] !== t38) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "space-y-6",
            initial: t25,
            animate: t26,
            transition: t27,
            children: [
                t38,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 502,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t38;
        $[47] = t40;
    } else {
        t40 = $[47];
    }
    let t41;
    if ($[48] !== t24 || $[49] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            className: "min-h-screen flex items-center justify-center px-6 lg:px-12 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto w-full text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12",
                    children: [
                        t9,
                        t24,
                        t40
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 510,
                    columnNumber: 165
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 510,
                columnNumber: 111
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 510,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t24;
        $[49] = t40;
        $[50] = t41;
    } else {
        t41 = $[50];
    }
    return t41;
};
_s1(AstrologerHero, "Vaj1vxHvwmHVopt95sBERTYBjqk=");
_c1 = AstrologerHero;
// About Astrologer Section
const AboutAstrologer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            initial: {
                opacity: 0,
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "About Me"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 539,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-purple-400 text-3xl lg:text-4xl font-black mb-4",
                    children: "Your Guide to Cosmic Wisdom"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 539,
                    columnNumber: 110
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-3xl mx-auto text-lg",
                    children: "With over 14 years of experience in Vedic astrology, I've helped thousands find clarity, purpose, and direction through celestial guidance."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 539,
                    columnNumber: 211
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 531,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0,
            x: -30
        };
        t2 = {
            opacity: 1,
            x: 0
        };
        t3 = {
            duration: 0.6
        };
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative",
            initial: t1,
            whileInView: t2,
            transition: t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-8xl",
                    children: "🔮"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 569,
                    columnNumber: 215
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 569,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 569,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    let t7;
    let t8;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: 0,
            x: 30
        };
        t6 = {
            opacity: 1,
            x: 0
        };
        t7 = {
            duration: 0.6
        };
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-2xl font-bold",
            children: "My Journey & Philosophy"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 590,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 leading-relaxed",
            children: "Born into a family of astrologers, I was introduced to the cosmic sciences at a young age. What started as a family tradition transformed into my life's mission - to help people navigate life's complexities through astrological wisdom."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 604,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 leading-relaxed",
            children: "I believe astrology isn't about predicting a fixed future, but about understanding cosmic patterns to make informed decisions and live in harmony with universal energies."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 605,
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
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "py-20 px-6 lg:px-12 bg-transparent relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                        children: [
                            t4,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "space-y-6",
                                initial: t5,
                                whileInView: t6,
                                transition: t7,
                                children: [
                                    t8,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            t9,
                                            t10,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4 mt-6",
                                                children: [
                                                    {
                                                        icon: "\uD83C\uDF93",
                                                        title: "Vedic Astrology",
                                                        desc: "Master's in Jyotish Shastra"
                                                    },
                                                    {
                                                        icon: "\uD83D\uDCDA",
                                                        title: "14+ Years",
                                                        desc: "Professional Experience"
                                                    },
                                                    {
                                                        icon: "\uD83C\uDF1F",
                                                        title: "5000+",
                                                        desc: "Happy Clients"
                                                    },
                                                    {
                                                        icon: "\uD83D\uDCAB",
                                                        title: "Multiple",
                                                        desc: "Astrology Modalities"
                                                    }
                                                ].map(_temp4)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 614,
                                                columnNumber: 349
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 614,
                                        columnNumber: 313
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 614,
                                columnNumber: 229
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 614,
                        columnNumber: 156
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 614,
                columnNumber: 103
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 614,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    return t11;
};
_c2 = AboutAstrologer;
// Services Section for Astrologer
const ServicesSection = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
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
                title: "Kundli Reading",
                price: "\u20B9300",
                description: "Comprehensive birth chart analysis revealing your life's blueprint",
                details: [
                    "Detailed planetary positions",
                    "Dasha and Mahadasha analysis",
                    "Career and finance predictions",
                    "Relationship compatibility"
                ],
                duration: "1-2 Hours"
            },
            {
                icon: "\uD83D\uDCAC",
                title: "Personal Consultation",
                price: "First Free | Then \u20B9300/hr",
                description: "One-on-one guidance for specific life questions and decisions",
                details: [
                    "Personalized life guidance",
                    "Problem-specific solutions",
                    "Remedy suggestions",
                    "Follow-up support"
                ],
                duration: "1 Hour"
            },
            {
                icon: "\uD83E\uDD32",
                title: "Palm Reading",
                price: "\u20B9500",
                description: "Analysis of palm lines to understand personality and destiny",
                details: [
                    "Life line analysis",
                    "Career line reading",
                    "Relationship lines",
                    "Health indications"
                ],
                duration: "45 Minutes"
            },
            {
                icon: "\uD83D\uDD22",
                title: "Numerology",
                price: "\u20B9400",
                description: "Discover how numbers influence your life path and decisions",
                details: [
                    "Life path number",
                    "Destiny number",
                    "Name numerology",
                    "Lucky numbers"
                ],
                duration: "1 Hour"
            },
            {
                icon: "\uD83D\uDC8D",
                title: "Marriage Compatibility",
                price: "\u20B9600",
                description: "Detailed analysis of compatibility between partners",
                details: [
                    "Guna Milan",
                    "Mangal Dosha check",
                    "Planetary compatibility",
                    "Remedies if needed"
                ],
                duration: "1.5 Hours"
            },
            {
                icon: "\uD83C\uDFE0",
                title: "Vastu Consultation",
                price: "\u20B9800",
                description: "Harmonize your living space with cosmic energies",
                details: [
                    "Home energy analysis",
                    "Direction alignment",
                    "Remedy suggestions",
                    "Color guidance"
                ],
                duration: "2 Hours"
            }
        ];
        t5 = "services";
        t6 = "py-20 px-6 lg:px-12 bg-transparent";
        t3 = "max-w-7xl mx-auto";
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "text-center mb-16",
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                        children: "My Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 712,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-purple-400 text-3xl lg:text-4xl font-black mb-4",
                        children: "Cosmic Guidance Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 712,
                        columnNumber: 115
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto text-lg",
                        children: "Personalized astrological services to illuminate your path"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 712,
                        columnNumber: 213
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 704,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        t1 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
        t2 = services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "group bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer backdrop-blur-sm h-full flex flex-col",
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: index * 0.1
                },
                whileHover: {
                    y: -5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300",
                                children: service.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 729,
                                columnNumber: 63
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-purple-400",
                                        children: service.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 729,
                                        columnNumber: 300
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: service.duration
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 729,
                                        columnNumber: 372
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 729,
                                columnNumber: 272
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 729,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-bold text-xl mb-3",
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 729,
                                columnNumber: 476
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-sm mb-4 leading-relaxed",
                                children: service.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 729,
                                columnNumber: 546
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: service.details.map(_temp5)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 729,
                                columnNumber: 629
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 729,
                        columnNumber: 452
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        className: "w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm flex items-center justify-center space-x-2",
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        onClick: ()=>setIsBookingOpen(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Book Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 733,
                                columnNumber: 49
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "✨"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 733,
                                columnNumber: 70
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 729,
                        columnNumber: 697
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 718,
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
            lineNumber: 751,
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
            lineNumber: 760,
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
            lineNumber: 770,
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
_c3 = ServicesSection;
// Testimonials Section
const TestimonialsSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "Priya Sharma",
                text: "The kundli reading was incredibly accurate! Helped me understand my career path better.",
                service: "Kundli Reading"
            },
            {
                name: "Rahul Verma",
                text: "First consultation was free and so helpful! I've been coming back regularly since.",
                service: "Personal Consultation"
            },
            {
                name: "Anjali Patel",
                text: "The marriage compatibility analysis saved me from a wrong decision. Forever grateful!",
                service: "Marriage Compatibility"
            },
            {
                name: "Vikram Singh",
                text: "Palm reading revealed aspects of my personality I never knew existed. Truly insightful!",
                service: "Palm Reading"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const testimonials = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            initial: {
                opacity: 0,
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "Client Stories"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 824,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-purple-400 text-3xl lg:text-4xl font-black mb-4",
                    children: "Words of Gratitude"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 824,
                    columnNumber: 116
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Hear from those who found clarity through cosmic guidance"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 824,
                    columnNumber: 208
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 816,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 px-6 lg:px-12 bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: testimonials.map(_temp6)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 831,
                        columnNumber: 105
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 831,
                columnNumber: 66
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 831,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c4 = TestimonialsSection;
// Booking Info Section
const BookingInfoSection = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
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
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            initial: {
                opacity: 0,
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "Book Your Session"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 878,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-purple-400 text-3xl lg:text-4xl font-black mb-4",
                    children: "Connect with Cosmic Wisdom"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 878,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Simple 3-step process to book your appointment"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 878,
                    columnNumber: 219
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 870,
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
                description: "Select from our services and pick a convenient time slot"
            },
            {
                step: "02",
                title: "Fill Basic Details",
                description: "Provide your name, phone number, and birth details"
            },
            {
                step: "03",
                title: "Confirm via WhatsApp",
                description: "Details sent directly to our WhatsApp for confirmation"
            }
        ].map(_temp7);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            scale: 1.05,
            y: -2
        };
        t5 = {
            scale: 0.95
        };
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] !== setIsBookingOpen) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: "w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg",
                    whileHover: t4,
                    whileTap: t5,
                    onClick: ()=>setIsBookingOpen(true),
                    children: "Book Appointment Now"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 920,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 920,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = setIsBookingOpen;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t10;
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 0,
            x: 20
        };
        t8 = {
            opacity: 1,
            x: 0
        };
        t9 = {
            duration: 0.6
        };
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white font-bold text-xl mb-6",
            children: "Working Hours & Charges"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 942,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t10;
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[8];
        t7 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-purple-400 font-semibold mb-4",
            children: "Available Hours"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 955,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: workingHours.map(_temp8)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 963,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 963,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-purple-400 font-semibold mb-4",
            children: "Service Charges"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 964,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300",
                    children: "Kundli Reading"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 973,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-medium",
                    children: "₹300"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 973,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 973,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300",
                    children: "First Consultation"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 980,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-green-400 font-medium",
                    children: "FREE"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 980,
                    columnNumber: 124
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 980,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-300",
                    children: "Follow-up Consultation"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 987,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-medium",
                    children: "₹300/hour"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 987,
                    columnNumber: 128
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 987,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        t14,
                        t15,
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300",
                                    children: "Extra 30 minutes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 994,
                                    columnNumber: 119
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white font-medium",
                                    children: "+₹150"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 994,
                                    columnNumber: 174
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 994,
                            columnNumber: 63
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 994,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 994,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "bg-gray-900/50 rounded-2xl p-8 border border-gray-700",
            initial: t7,
            whileInView: t8,
            transition: t9,
            children: [
                t10,
                t12,
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-purple-300 text-sm text-center",
                        children: "📞 Direct WhatsApp contact for urgent queries: +91 85109 88703"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1001,
                        columnNumber: 232
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1001,
                    columnNumber: 150
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1001,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] !== t6) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "booking",
            className: "py-20 px-6 lg:px-12 bg-transparent",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                        children: [
                            t6,
                            t18
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1008,
                        columnNumber: 119
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1008,
                columnNumber: 80
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1008,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t6;
        $[21] = t19;
    } else {
        t19 = $[21];
    }
    return t19;
};
_c5 = BookingInfoSection;
// Updated Header for Astrologer
const Header = (t0)=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
    }
    const { setIsBookingOpen } = t0;
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -100
        };
        t2 = {
            y: 0
        };
        t3 = {
            duration: 0.6
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            scale: 1.05
        };
        t5 = {
            duration: 0.3
        };
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "text-2xl font-black text-white",
                whileHover: t4,
                transition: t5,
                children: [
                    "Cosmic",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-purple-400",
                        children: "Guidance"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1068,
                        columnNumber: 148
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1068,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1068,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
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
                name: "Booking",
                id: "booking"
            },
            {
                name: "Contact",
                id: "contact"
            }
        ];
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] !== activeSection) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden lg:flex space-x-8",
            children: t7.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                    href: `#${link.id}`,
                    className: `text-sm font-semibold transition-all duration-300 relative ${activeSection === link.id ? "text-purple-400" : "text-gray-400 hover:text-white"}`,
                    whileHover: {
                        y: -2
                    },
                    onClick: ()=>setActiveSection(link.id),
                    children: [
                        link.name,
                        activeSection === link.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full",
                            layoutId: "activeSection"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1099,
                            columnNumber: 93
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, link.id, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1097,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1097,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = activeSection;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            scale: 1.05,
            y: -2
        };
        t10 = {
            scale: 0.95
        };
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] !== setIsBookingOpen) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300",
            whileHover: t9,
            whileTap: t10,
            onClick: ()=>setIsBookingOpen(true),
            children: "Book Now"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = setIsBookingOpen;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t11 || $[15] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
            className: "fixed top-0 w-full z-50 glass-dark border-b border-gray-800/50",
            initial: t1,
            animate: t2,
            transition: t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 py-4 flex justify-between items-center",
                children: [
                    t6,
                    t8,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1131,
                columnNumber: 143
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1131,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t11;
        $[15] = t8;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    return t12;
};
_s2(Header, "FjbvDFX71Ug+Rs29xRsjy4Zimjc=");
_c6 = Header;
// Updated Footer
const Footer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-black text-white mb-6",
            children: [
                "Cosmic",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-purple-400",
                    children: "Guidance"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1153,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1153,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 leading-relaxed mb-6",
            children: "Providing divine astrological guidance to help you navigate life's journey with clarity and confidence."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1154,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300",
                            children: "📧 Email: guidance@cosmic.com"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1164,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-300",
                            children: "📱 WhatsApp: +91 85109 88703"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1164,
                            columnNumber: 112
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1164,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1164,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-white text-lg mb-6",
            children: "Quick Links"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1165,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-3",
                    children: [
                        "Home",
                        "About",
                        "Services",
                        "Booking",
                        "Testimonials"
                    ].map(_temp9)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1175,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1175,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-bold text-white text-lg mb-6",
            children: "Follow for Daily Guidance"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1176,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400",
            children: "Get daily cosmic insights and astrology tips"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1185,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "📱"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1192,
                columnNumber: 140
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1192,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "📘"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1199,
                columnNumber: 140
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1199,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-12",
            children: [
                t2,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        t7,
                                        t8,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "📸"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 1206,
                                                columnNumber: 284
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 1206,
                                            columnNumber: 154
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 1206,
                                    columnNumber: 114
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1206,
                            columnNumber: 83
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1206,
                    columnNumber: 74
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1206,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            id: "contact",
            className: "bg-transparent border-t border-gray-800/50 py-16 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 mt-12 pt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Cosmic Guidance. All celestial wisdom reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1213,
                            columnNumber: 202
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1213,
                        columnNumber: 137
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1213,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1213,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    return t10;
};
_c7 = Footer;
// Loader
const Loader = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0
        };
        t1 = {
            opacity: 1
        };
        t2 = {
            opacity: 0
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            scale: 0.8,
            opacity: 0
        };
        t4 = {
            scale: 1,
            opacity: 1
        };
        t5 = {
            duration: 0.5
        };
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 border-4 border-purple-500/30 rounded-full",
            animate: {
                rotate: 360
            },
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "linear"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1276,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-2 border-4 border-transparent border-t-pink-500 rounded-full",
            animate: {
                rotate: -360
            },
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1289,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative w-20 h-20 mx-auto mb-4",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-2xl",
                        children: "✨"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1302,
                        columnNumber: 141
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 1302,
                    columnNumber: 74
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1302,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-white text-xl font-semibold",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 0.5
            },
            children: "Cosmic Guidance"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1309,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 bg-black flex items-center justify-center z-50",
            initial: t0,
            animate: t1,
            exit: t2,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "text-center",
                initial: t3,
                animate: t4,
                transition: t5,
                children: [
                    t8,
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "text-purple-400 text-sm mt-2",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.8
                        },
                        children: "Connecting you to cosmic wisdom..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1322,
                        columnNumber: 218
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1322,
                columnNumber: 132
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1322,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    return t10;
};
_c8 = Loader;
function Home() {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6464d64f87dc2e3572ab7d81820a25f7c2e012c92327c3eacad120840bebda7f";
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
                }["Home[useEffect() > setTimeout()]"], 2000);
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
    if (isLoading) {
        let t2;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader, {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1367,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InteractiveBackground, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1383,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1384,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AstrologerHero, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1385,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutAstrologer, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1386,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicesSection, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1387,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsSection, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1388,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BookingInfoSection, {
            setIsBookingOpen: setIsBookingOpen
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1389,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1390,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
    } else {
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
        t7 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t10;
    if ($[12] !== isBookingOpen) {
        t10 = isBookingOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: isBookingOpen,
            onClose: {
                "Home[<BookingForm>.onClose]": ()=>setIsBookingOpen(false)
            }["Home[<BookingForm>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1411,
            columnNumber: 28
        }, this);
        $[12] = isBookingOpen;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1421,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-lg z-40",
            whileHover: {
                scale: 1.1
            },
            whileTap: {
                scale: 0.9
            },
            onClick: _HomeMotionButtonOnClick,
            children: "💬"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1429,
            columnNumber: 11
        }, this);
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen text-white w-full overflow-x-hidden bg-black",
            children: [
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1440,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    return t13;
}
_s3(Home, "UQaO14UFtJOlNUOXQAYJhpJys6I=");
_c9 = Home;
function _HomeMotionButtonOnClick() {
    return window.open("https://wa.me/918510988703", "_blank");
}
function _temp(specialty, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors",
        whileHover: {
            y: -5,
            scale: 1.02
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl mb-3",
                children: specialty.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1455,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-white font-semibold mb-2",
                children: specialty.title
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1455,
                columnNumber: 59
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm",
                children: specialty.description
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1455,
                columnNumber: 127
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 1452,
        columnNumber: 10
    }, this);
}
function _temp2(stat, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "text-center",
        whileHover: {
            scale: 1.1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-purple-400",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1460,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-xs font-medium",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1460,
                columnNumber: 77
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 1458,
        columnNumber: 10
    }, this);
}
function _temp3() {
    return document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}
function _temp4(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "bg-gray-900/50 rounded-xl p-4 border border-gray-700",
        whileHover: {
            scale: 1.05
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl mb-2",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1470,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white font-semibold",
                children: item.title
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1470,
                columnNumber: 54
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-sm",
                children: item.desc
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1470,
                columnNumber: 114
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 1468,
        columnNumber: 10
    }, this);
}
function _temp5(detail, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2 text-xs text-gray-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1473,
                columnNumber: 87
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: detail
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1473,
                columnNumber: 159
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 1473,
        columnNumber: 10
    }, this);
}
function _temp6(testimonial, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300",
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: index * 0.1
        },
        whileHover: {
            y: -5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg",
                            children: "⭐"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 1487,
                            columnNumber: 181
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1487,
                        columnNumber: 56
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-white font-semibold",
                                children: testimonial.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1487,
                                columnNumber: 226
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-400 text-sm",
                                children: testimonial.service
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 1487,
                                columnNumber: 290
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1487,
                        columnNumber: 221
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1487,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 italic",
                children: [
                    '"',
                    testimonial.text,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1487,
                columnNumber: 372
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 1476,
        columnNumber: 10
    }, this);
}
function _temp7(step, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex items-start space-x-4",
        initial: {
            opacity: 0,
            x: -20
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 0.6,
            delay: index * 0.2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg",
                children: step.step
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1499,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white font-bold text-lg mb-1",
                        children: step.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1499,
                        columnNumber: 173
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: step.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 1499,
                        columnNumber: 240
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1499,
                columnNumber: 168
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 1490,
        columnNumber: 10
    }, this);
}
function _temp8(slot, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center py-2 border-b border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-300",
                children: slot.day
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1502,
                columnNumber: 105
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-white font-medium",
                children: slot.time
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 1502,
                columnNumber: 154
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 1502,
        columnNumber: 10
    }, this);
}
function _temp9(link) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `#${link.toLowerCase()}`,
            className: "text-gray-400 hover:text-purple-400 transition-colors duration-300",
            children: link
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 1505,
            columnNumber: 25
        }, this)
    }, link, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 1505,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "InteractiveBackground");
__turbopack_context__.k.register(_c1, "AstrologerHero");
__turbopack_context__.k.register(_c2, "AboutAstrologer");
__turbopack_context__.k.register(_c3, "ServicesSection");
__turbopack_context__.k.register(_c4, "TestimonialsSection");
__turbopack_context__.k.register(_c5, "BookingInfoSection");
__turbopack_context__.k.register(_c6, "Header");
__turbopack_context__.k.register(_c7, "Footer");
__turbopack_context__.k.register(_c8, "Loader");
__turbopack_context__.k.register(_c9, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e107ff7b._.js.map