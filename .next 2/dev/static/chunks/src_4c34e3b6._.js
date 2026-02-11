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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(95);
    if ($[0] !== "382cd08073787e26d83dec08a786af7752f2ba970446caa28b7903cb5ef03725") {
        for(let $i = 0; $i < 95; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "382cd08073787e26d83dec08a786af7752f2ba970446caa28b7903cb5ef03725";
    }
    const { onClose } = t0;
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
            isFirstTime: true,
            gender: "",
            maritalStatus: ""
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
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
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
    if ($[5] !== formData.appointmentDate || $[6] !== formData.dateOfBirth || $[7] !== formData.extraTime || $[8] !== formData.gender || $[9] !== formData.isFirstTime || $[10] !== formData.maritalStatus || $[11] !== formData.name || $[12] !== formData.phone || $[13] !== formData.placeOfBirth || $[14] !== formData.serviceType || $[15] !== formData.timeOfBirth || $[16] !== formData.timeSlot || $[17] !== onClose) {
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
            const formatDate = _temp3;
            const message = "\uD83C\uDF1F *New Appointment Booking - Rekha Sharma Ji* \uD83C\uDF1F%0A%0A*\uD83D\uDC64 Personal Details:*%0A" + `Name: ${formData.name}%0A` + `Phone: ${formData.phone}%0A` + `Gender: ${formData.gender || "Not specified"}%0A` + `Marital Status: ${formData.maritalStatus || "Not specified"}%0A%0A` + "*\uD83D\uDCC5 Birth Details (For Accurate Reading):*%0A" + `Date of Birth: ${formatDate(formData.dateOfBirth)}%0A` + `Time of Birth: ${formData.timeOfBirth || "Not specified"}%0A` + `Place of Birth: ${formData.placeOfBirth}%0A%0A` + "*\uD83D\uDCCB Appointment Details:*%0A" + `Appointment Date: ${formatDate(formData.appointmentDate)}%0A` + `Time Slot: ${formData.timeSlot}%0A` + `Service: ${serviceDetails}%0A` + `Total Charges: ₹${charges}%0A%0A` + "\uD83D\uDCC5 *Please confirm this appointment*%0A" + "\u2728 *Thank you!*%0A" + "_Rekha Sharma Astrology Services_";
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
                isFirstTime: true,
                gender: "",
                maritalStatus: ""
            });
            setLoading(false);
            setStep(1);
            onClose();
            alert("Opening WhatsApp with your booking details. Please send the message to confirm your appointment.");
        };
        $[5] = formData.appointmentDate;
        $[6] = formData.dateOfBirth;
        $[7] = formData.extraTime;
        $[8] = formData.gender;
        $[9] = formData.isFirstTime;
        $[10] = formData.maritalStatus;
        $[11] = formData.name;
        $[12] = formData.phone;
        $[13] = formData.placeOfBirth;
        $[14] = formData.serviceType;
        $[15] = formData.timeOfBirth;
        $[16] = formData.timeSlot;
        $[17] = onClose;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    const handleSubmit = t5;
    let t6;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (e_0)=>{
            const { name, value, type, checked } = e_0.target;
            setFormData((prev)=>({
                    ...prev,
                    [name]: type === "checkbox" ? checked : value
                }));
        };
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    const handleChange = t6;
    let t7;
    if ($[20] !== formData.extraTime || $[21] !== formData.isFirstTime || $[22] !== formData.serviceType) {
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
        $[20] = formData.extraTime;
        $[21] = formData.isFirstTime;
        $[22] = formData.serviceType;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    const calculateCharges = t7;
    let t8;
    if ($[24] !== formData.dateOfBirth || $[25] !== formData.name || $[26] !== formData.phone || $[27] !== formData.placeOfBirth || $[28] !== step) {
        t8 = ()=>{
            if (step === 1) {
                if (!formData.name || !formData.phone) {
                    alert("Please fill in your name and phone number");
                    return;
                }
            } else {
                if (step === 2) {
                    if (!formData.dateOfBirth || !formData.placeOfBirth) {
                        alert("Please fill in your date of birth and place of birth");
                        return;
                    }
                }
            }
            setStep(step + 1);
        };
        $[24] = formData.dateOfBirth;
        $[25] = formData.name;
        $[26] = formData.phone;
        $[27] = formData.placeOfBirth;
        $[28] = step;
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    const nextStep = t8;
    let t9;
    if ($[30] !== step) {
        t9 = ()=>{
            setStep(step - 1);
        };
        $[30] = step;
        $[31] = t9;
    } else {
        t9 = $[31];
    }
    const prevStep = t9;
    let t10;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            {
                number: 1,
                title: "Personal Details"
            },
            {
                number: 2,
                title: "Birth Details"
            },
            {
                number: 3,
                title: "Appointment"
            }
        ];
        $[32] = t10;
    } else {
        t10 = $[32];
    }
    const steps = t10;
    let t11;
    let t12;
    let t13;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            opacity: 0
        };
        t12 = {
            opacity: 1
        };
        t13 = {
            opacity: 0
        };
        $[33] = t11;
        $[34] = t12;
        $[35] = t13;
    } else {
        t11 = $[33];
        t12 = $[34];
        t13 = $[35];
    }
    let t14;
    let t15;
    let t16;
    let t17;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            scale: 0.8,
            opacity: 0,
            y: 50
        };
        t15 = {
            scale: 1,
            opacity: 1,
            y: 0
        };
        t16 = {
            scale: 0.8,
            opacity: 0,
            y: 50
        };
        t17 = {
            type: "spring",
            damping: 25
        };
        $[36] = t14;
        $[37] = t15;
        $[38] = t16;
        $[39] = t17;
    } else {
        t14 = $[36];
        t15 = $[37];
        t16 = $[38];
        t17 = $[39];
    }
    let t18;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-white text-2xl font-bold",
                    children: "Book with Rekha Sharma Ji"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 294,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-purple-300 text-sm",
                    children: "Complete details required for accurate astrological reading"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 294,
                    columnNumber: 92
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 294,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== onClose) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-start mb-6",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-400 hover:text-white text-2xl transition-colors",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 301,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 301,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = onClose;
        $[42] = t19;
    } else {
        t19 = $[42];
    }
    let t20;
    if ($[43] !== step) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-4",
            children: steps.map((stepItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= stepItem.number ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : "bg-gray-800 text-gray-400"}`,
                            children: stepItem.number
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 309,
                            columnNumber: 156
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-xs ${step >= stepItem.number ? "text-purple-300" : "text-gray-500"}`,
                            children: stepItem.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 309,
                            columnNumber: 376
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, stepItem.number, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 309,
                    columnNumber: 90
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 309,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = step;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            width: "33%"
        };
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    const t22 = `${step / 3 * 100}%`;
    let t23;
    if ($[46] !== t22) {
        t23 = {
            width: t22
        };
        $[46] = t22;
        $[47] = t23;
    } else {
        t23 = $[47];
    }
    let t24;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            duration: 0.3
        };
        $[48] = t24;
    } else {
        t24 = $[48];
    }
    let t25;
    if ($[49] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-2 bg-gray-800 rounded-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full",
                initial: t21,
                animate: t23,
                transition: t24
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.js",
                lineNumber: 346,
                columnNumber: 66
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 346,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t23;
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    let t26;
    if ($[51] !== t20 || $[52] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-8",
            children: [
                t20,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 354,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t20;
        $[52] = t25;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== formData.gender || $[55] !== formData.maritalStatus || $[56] !== formData.name || $[57] !== formData.phone || $[58] !== nextStep || $[59] !== step) {
        t27 = step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: 20
            },
            animate: {
                opacity: 1,
                x: 0
            },
            exit: {
                opacity: 0,
                x: -20
            },
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-white text-lg font-semibold mb-4",
                    children: "Personal Information"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 372,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-white text-sm font-medium mb-2 block",
                            children: "Full Name *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 372,
                            columnNumber: 114
                        }, ("TURBOPACK compile-time value", void 0)),
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
                            lineNumber: 372,
                            columnNumber: 194
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 372,
                    columnNumber: 109
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-white text-sm font-medium mb-2 block",
                            children: "Phone Number *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 372,
                            columnNumber: 537
                        }, ("TURBOPACK compile-time value", void 0)),
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
                            lineNumber: 372,
                            columnNumber: 620
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 372,
                    columnNumber: 532
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-white text-sm font-medium mb-2 block",
                                    children: "Gender"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 372,
                                    columnNumber: 1047
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "gender",
                                    value: formData.gender,
                                    onChange: handleChange,
                                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select Gender"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 1373
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Male",
                                            children: "Male"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 1412
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Female",
                                            children: "Female"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 1446
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Other",
                                            children: "Other"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 1484
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 372,
                                    columnNumber: 1122
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 372,
                            columnNumber: 1042
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-white text-sm font-medium mb-2 block",
                                    children: "Marital Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 372,
                                    columnNumber: 1540
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "maritalStatus",
                                    value: formData.maritalStatus,
                                    onChange: handleChange,
                                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 1888
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Single",
                                            children: "Single"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 1927
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Married",
                                            children: "Married"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 1965
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Divorced",
                                            children: "Divorced"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 2005
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Widowed",
                                            children: "Widowed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 372,
                                            columnNumber: 2047
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 372,
                                    columnNumber: 1623
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 372,
                            columnNumber: 1535
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 372,
                    columnNumber: 1002
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        type: "button",
                        onClick: nextStep,
                        className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2",
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Next: Birth Details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.js",
                                lineNumber: 376,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.js",
                                lineNumber: 376,
                                columnNumber: 44
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.js",
                        lineNumber: 372,
                        columnNumber: 2130
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 372,
                    columnNumber: 2108
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 363,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = formData.gender;
        $[55] = formData.maritalStatus;
        $[56] = formData.name;
        $[57] = formData.phone;
        $[58] = nextStep;
        $[59] = step;
        $[60] = t27;
    } else {
        t27 = $[60];
    }
    let t28;
    if ($[61] !== formData.dateOfBirth || $[62] !== formData.placeOfBirth || $[63] !== formData.timeOfBirth || $[64] !== nextStep || $[65] !== prevStep || $[66] !== step) {
        t28 = step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: 20
            },
            animate: {
                opacity: 1,
                x: 0
            },
            exit: {
                opacity: 0,
                x: -20
            },
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-white text-lg font-semibold mb-4",
                    children: "Birth Details (For Accurate Astrological Reading)"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 398,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-purple-300 text-sm mb-2",
                            children: "⚠️ Accurate birth details are essential for precise astrological analysis"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 398,
                            columnNumber: 225
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-white text-sm font-medium mb-2 block",
                                    children: "Date of Birth *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 351
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    name: "dateOfBirth",
                                    value: formData.dateOfBirth,
                                    onChange: handleChange,
                                    required: true,
                                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 435
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-xs mt-1",
                                    children: "Enter as per your birth certificate"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 746
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 398,
                            columnNumber: 346
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-white text-sm font-medium mb-2 block",
                                    children: "Time of Birth (Optional but Recommended)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 838
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "time",
                                    name: "timeOfBirth",
                                    value: formData.timeOfBirth,
                                    onChange: handleChange,
                                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 947
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-xs mt-1",
                                    children: "More accurate time = More precise prediction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 1242
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 398,
                            columnNumber: 833
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-white text-sm font-medium mb-2 block",
                                    children: "Place of Birth *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 1343
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "placeOfBirth",
                                    value: formData.placeOfBirth,
                                    onChange: handleChange,
                                    required: true,
                                    className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300",
                                    placeholder: "City, State, Country (e.g., Delhi, India)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 1428
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-xs mt-1",
                                    children: "Enter the exact location where you were born"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 398,
                                    columnNumber: 1797
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 398,
                            columnNumber: 1338
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 398,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-4 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            type: "button",
                            onClick: prevStep,
                            className: "flex-1 border border-gray-600 text-white py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2",
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 402,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 402,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 398,
                            columnNumber: 1936
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            type: "button",
                            onClick: nextStep,
                            className: "flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2",
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Next: Appointment"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 406,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 406,
                                    columnNumber: 42
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 402,
                            columnNumber: 59
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 398,
                    columnNumber: 1899
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 389,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = formData.dateOfBirth;
        $[62] = formData.placeOfBirth;
        $[63] = formData.timeOfBirth;
        $[64] = nextStep;
        $[65] = prevStep;
        $[66] = step;
        $[67] = t28;
    } else {
        t28 = $[67];
    }
    let t29;
    if ($[68] !== availableSlots || $[69] !== calculateCharges || $[70] !== formData.appointmentDate || $[71] !== formData.extraTime || $[72] !== formData.isFirstTime || $[73] !== formData.serviceType || $[74] !== formData.timeSlot || $[75] !== loading || $[76] !== prevStep || $[77] !== step) {
        t29 = step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: 20
            },
            animate: {
                opacity: 1,
                x: 0
            },
            exit: {
                opacity: 0,
                x: -20
            },
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: "text-white text-lg font-semibold mb-4",
                    children: "Appointment Details"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 428,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-white text-sm font-medium mb-2 block",
                            children: "Appointment Date *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 113
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            name: "appointmentDate",
                            value: formData.appointmentDate,
                            onChange: handleChange,
                            required: true,
                            className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Choose appointment date"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 501
                                }, ("TURBOPACK compile-time value", void 0)),
                                getNext30Days().map(_temp5)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 200
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 428,
                    columnNumber: 108
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-white text-sm font-medium mb-2 block",
                            children: "Select Time Slot *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 599
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            name: "timeSlot",
                            value: formData.timeSlot,
                            onChange: handleChange,
                            required: true,
                            className: "w-full bg-gray-800/80 border border-gray-700 rounded-xl px-4 py-3.5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 appearance-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Choose time (9 AM - 9 PM)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 973
                                }, ("TURBOPACK compile-time value", void 0)),
                                availableSlots.map(_temp6)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 686
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 428,
                    columnNumber: 594
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-white text-sm font-medium mb-2 block",
                            children: "Service Type *"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 1072
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFormData(_temp7),
                                    className: `py-3 px-4 rounded-xl border transition-all duration-300 ${formData.serviceType === "kundli" ? "bg-purple-600 border-purple-500 text-white shadow-lg" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "Kundli Reading"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 1493
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs opacity-80",
                                            children: "₹300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 1544
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 1195
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFormData(_temp8),
                                    className: `py-3 px-4 rounded-xl border transition-all duration-300 ${formData.serviceType === "consultation" ? "bg-purple-600 border-purple-500 text-white shadow-lg" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 1903
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs opacity-80",
                                            children: "First Free"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 1952
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 1599
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 1155
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 428,
                    columnNumber: 1067
                }, ("TURBOPACK compile-time value", void 0)),
                formData.serviceType === "consultation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            lineNumber: 428,
                            columnNumber: 2144
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
                                    lineNumber: 428,
                                    columnNumber: 2433
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-400 ml-2",
                                    children: "(Free)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 2495
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 2370
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 428,
                    columnNumber: 2069
                }, ("TURBOPACK compile-time value", void 0)),
                formData.serviceType === "consultation" && !formData.isFirstTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-white text-sm font-medium mb-2 block",
                            children: "Session Duration"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 2635
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFormData(_temp9),
                                    className: `py-3 rounded-xl border transition-all duration-300 ${!formData.extraTime ? "bg-purple-600 border-purple-500 text-white shadow-lg" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "1 Hour"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 3039
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs opacity-80",
                                            children: "₹300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 3082
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 2760
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFormData(_temp10),
                                    className: `py-3 rounded-xl border transition-all duration-300 ${formData.extraTime === "1.5" ? "bg-purple-600 border-purple-500 text-white shadow-lg" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "1.5 Hours"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 3426
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs opacity-80",
                                            children: "+₹150"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 3472
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 3137
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFormData(_temp11),
                                    className: `py-3 rounded-xl border transition-all duration-300 ${formData.extraTime === "2" ? "bg-purple-600 border-purple-500 text-white shadow-lg" : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-purple-500/50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "2 Hours"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 3815
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs opacity-80",
                                            children: "+₹300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BookingForm.js",
                                            lineNumber: 428,
                                            columnNumber: 3859
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 3528
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 2720
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 428,
                    columnNumber: 2630
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-300 font-medium",
                                    children: "Total Charges:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 4095
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-bold text-purple-400",
                                    children: [
                                        "₹",
                                        calculateCharges()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 428,
                                    columnNumber: 4160
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 4039
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 text-xs",
                            children: formData.serviceType === "kundli" ? "Kundli Reading (\u20B9300)" : formData.isFirstTime ? "First Consultation (Free)" : `Consultation (₹300${formData.extraTime === "1.5" ? " + \u20B9150" : formData.extraTime === "2" ? " + \u20B9300" : ""})`
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 4247
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-xs mt-2",
                            children: "Payment directly to Rekha Sharma Ji after service"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 4530
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 428,
                    columnNumber: 3928
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-4 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            type: "button",
                            onClick: prevStep,
                            className: "flex-1 border border-gray-600 text-white py-4 rounded-xl font-semibold hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300 flex items-center justify-center space-x-2",
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "←"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 432,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.js",
                                    lineNumber: 432,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 428,
                            columnNumber: 4668
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            type: "submit",
                            disabled: loading,
                            className: `flex-1 ${loading ? "bg-gray-700 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"} text-white py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center space-x-3`,
                            whileHover: !loading ? {
                                scale: 1.02
                            } : {},
                            whileTap: !loading ? {
                                scale: 0.98
                            } : {},
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                                lineNumber: 436,
                                                columnNumber: 104
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingForm.js",
                                                lineNumber: 436,
                                                columnNumber: 210
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingForm.js",
                                        lineNumber: 436,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Preparing WhatsApp..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.js",
                                        lineNumber: 436,
                                        columnNumber: 383
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "Book via WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.js",
                                        lineNumber: 436,
                                        columnNumber: 425
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl animate-pulse",
                                        children: "📱"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.js",
                                        lineNumber: 436,
                                        columnNumber: 475
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BookingForm.js",
                            lineNumber: 432,
                            columnNumber: 59
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 428,
                    columnNumber: 4631
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 419,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = availableSlots;
        $[69] = calculateCharges;
        $[70] = formData.appointmentDate;
        $[71] = formData.extraTime;
        $[72] = formData.isFirstTime;
        $[73] = formData.serviceType;
        $[74] = formData.timeSlot;
        $[75] = loading;
        $[76] = prevStep;
        $[77] = step;
        $[78] = t29;
    } else {
        t29 = $[78];
    }
    let t30;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-xs",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 453,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0)),
                "All details will be sent securely to Rekha Sharma Ji's WhatsApp"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 453,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t30;
    } else {
        t30 = $[79];
    }
    let t31;
    if ($[80] !== step) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center pt-4 border-t border-gray-800",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-xs mt-1",
                    children: [
                        "Step ",
                        step,
                        " of 3"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BookingForm.js",
                    lineNumber: 460,
                    columnNumber: 75
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 460,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[80] = step;
        $[81] = t31;
    } else {
        t31 = $[81];
    }
    let t32;
    if ($[82] !== handleSubmit || $[83] !== t27 || $[84] !== t28 || $[85] !== t29 || $[86] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-6",
            children: [
                t27,
                t28,
                t29,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 468,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[82] = handleSubmit;
        $[83] = t27;
        $[84] = t28;
        $[85] = t29;
        $[86] = t31;
        $[87] = t32;
    } else {
        t32 = $[87];
    }
    let t33;
    if ($[88] !== t19 || $[89] !== t26 || $[90] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "bg-gray-900/90 rounded-3xl p-6 md:p-8 max-w-2xl w-full border border-purple-500/40 shadow-2xl backdrop-blur-xl",
            initial: t14,
            animate: t15,
            exit: t16,
            transition: t17,
            onClick: _temp4,
            children: [
                t19,
                t26,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 480,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t19;
        $[89] = t26;
        $[90] = t32;
        $[91] = t33;
    } else {
        t33 = $[91];
    }
    let t34;
    if ($[92] !== onClose || $[93] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4",
            initial: t11,
            animate: t12,
            exit: t13,
            onClick: onClose,
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/BookingForm.js",
            lineNumber: 490,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[92] = onClose;
        $[93] = t33;
        $[94] = t34;
    } else {
        t34 = $[94];
    }
    return t34;
};
_s(BookingForm, "PLP21JI9SjIgffkb/ThiQ2kFuC4=");
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
function _temp3(dateString) {
    if (!dateString) {
        return "";
    }
    return new Date(dateString).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
function _temp4(e_1) {
    return e_1.stopPropagation();
}
function _temp5(date_0) {
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
        lineNumber: 533,
        columnNumber: 10
    }, this);
}
function _temp6(slot) {
    const hour_0 = parseInt(slot.split(":")[0]);
    const displayTime = hour_0 < 12 ? `${slot} AM` : hour_0 === 12 ? `${slot} PM` : `${hour_0 - 12}:00 PM`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: slot,
        children: displayTime
    }, slot, false, {
        fileName: "[project]/src/components/BookingForm.js",
        lineNumber: 543,
        columnNumber: 10
    }, this);
}
function _temp7(prev_0) {
    return {
        ...prev_0,
        serviceType: "kundli"
    };
}
function _temp8(prev_1) {
    return {
        ...prev_1,
        serviceType: "consultation"
    };
}
function _temp9(prev_2) {
    return {
        ...prev_2,
        extraTime: ""
    };
}
function _temp10(prev_3) {
    return {
        ...prev_3,
        extraTime: "1.5"
    };
}
function _temp11(prev_4) {
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
"[project]/src/components/BenefitsSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/components/BenefitsSection.js
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
const BenefitsSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "6770b2b08a99c9dd73260f6e79cd47720ae48e4849d6b229c3181cc78d39421c") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6770b2b08a99c9dd73260f6e79cd47720ae48e4849d6b229c3181cc78d39421c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            icon: "\uD83C\uDFAF",
            title: "Clarity in Career Decisions",
            description: "Get guidance on job changes, business timing, and career growth opportunities",
            points: [
                "Identify ideal career paths",
                "Best timing for job changes",
                "Business start-up guidance",
                "Growth opportunities"
            ]
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            icon: "\uD83D\uDC96",
            title: "Relationship Harmony",
            description: "Understand compatibility, timing for marriage, and relationship improvements",
            points: [
                "Marriage compatibility analysis",
                "Relationship timing",
                "Conflict resolution",
                "Family harmony"
            ]
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            icon: "\uD83D\uDCB0",
            title: "Financial Prosperity",
            description: "Learn auspicious times for investments and remedies for financial stability",
            points: [
                "Wealth accumulation timing",
                "Investment guidance",
                "Debt reduction remedies",
                "Business expansion"
            ]
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            icon: "\uD83C\uDFE0",
            title: "Home & Property",
            description: "Vastu guidance for home/office and property investment timing",
            points: [
                "Vastu correction remedies",
                "Property purchase timing",
                "Home construction muhurta",
                "Office setup guidance"
            ]
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            icon: "\uD83C\uDF3F",
            title: "Health & Wellness",
            description: "Remedies for health issues and guidance for preventive care",
            points: [
                "Health issue remedies",
                "Preventive care timing",
                "Meditation guidance",
                "Lifestyle improvements"
            ]
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            t0,
            t1,
            t2,
            t3,
            t4,
            {
                icon: "\uD83E\uDDD8",
                title: "Spiritual Growth",
                description: "Personalized spiritual practices and remedies for inner peace",
                points: [
                    "Personalized mantras",
                    "Meditation techniques",
                    "Spiritual growth timing",
                    "Karmic balance"
                ]
            }
        ];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const benefits = t5;
    const [selectedBenefit, setSelectedBenefit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(benefits[0]);
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: "How We Help"
                }, void 0, false, {
                    fileName: "[project]/src/components/BenefitsSection.js",
                    lineNumber: 99,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Transform Your Life Through Astrology"
                }, void 0, false, {
                    fileName: "[project]/src/components/BenefitsSection.js",
                    lineNumber: 99,
                    columnNumber: 113
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Discover how Rekha Sharma Ji's guidance can positively impact every aspect of your life"
                }, void 0, false, {
                    fileName: "[project]/src/components/BenefitsSection.js",
                    lineNumber: 99,
                    columnNumber: 222
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== selectedBenefit.title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: `p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${selectedBenefit.title === benefit.title ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50" : "bg-gray-900/50 border border-gray-700 hover:border-purple-500/30"}`,
                    onClick: ()=>setSelectedBenefit(benefit),
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.4,
                        delay: index * 0.1
                    },
                    whileHover: {
                        y: -3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl mb-4",
                                children: benefit.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/BenefitsSection.js",
                                lineNumber: 117,
                                columnNumber: 66
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-white font-bold text-lg mb-2",
                                children: benefit.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/BenefitsSection.js",
                                lineNumber: 117,
                                columnNumber: 117
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: benefit.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/BenefitsSection.js",
                                lineNumber: 117,
                                columnNumber: 187
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BenefitsSection.js",
                        lineNumber: 117,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/src/components/BenefitsSection.js",
                    lineNumber: 106,
                    columnNumber: 99
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 106,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = selectedBenefit.title;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = selectedBenefit.title;
    let t10;
    let t11;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            opacity: 0,
            x: 20
        };
        t10 = {
            opacity: 1,
            x: 0
        };
        t11 = {
            duration: 0.5
        };
        $[10] = t10;
        $[11] = t11;
        $[12] = t9;
    } else {
        t10 = $[10];
        t11 = $[11];
        t9 = $[12];
    }
    let t12;
    if ($[13] !== selectedBenefit.icon) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-5xl",
            children: selectedBenefit.icon
        }, void 0, false, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = selectedBenefit.icon;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] !== selectedBenefit.title) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-2xl font-bold",
            children: selectedBenefit.title
        }, void 0, false, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 157,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = selectedBenefit.title;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== selectedBenefit.description) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-purple-300",
            children: selectedBenefit.description
        }, void 0, false, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = selectedBenefit.description;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] !== t13 || $[20] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t13;
        $[20] = t14;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] !== t12 || $[23] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4 mb-6",
            children: [
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t12;
        $[23] = t15;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold text-lg",
            children: "What You Get:"
        }, void 0, false, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== selectedBenefit.points) {
        t18 = selectedBenefit.points.map(_temp);
        $[26] = selectedBenefit.points;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 mb-6",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t18;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-white/5 rounded-xl border border-white/10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-purple-300 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold",
                        children: "Result:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BenefitsSection.js",
                        lineNumber: 214,
                        columnNumber: 116
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Clients report significant improvements within 3-6 months of following personalized guidance"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BenefitsSection.js",
                lineNumber: 214,
                columnNumber: 77
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== selectedBenefit.title || $[32] !== t16 || $[33] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-lg",
            initial: t9,
            animate: t10,
            transition: t11,
            children: [
                t16,
                t19,
                t20
            ]
        }, t8, true, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 221,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = selectedBenefit.title;
        $[32] = t16;
        $[33] = t19;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== t21 || $[36] !== t7) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-20 px-4 md:px-6 lg:px-12 bg-transparent section-wrapper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t6,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                        children: [
                            t7,
                            t21
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BenefitsSection.js",
                        lineNumber: 231,
                        columnNumber: 130
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BenefitsSection.js",
                lineNumber: 231,
                columnNumber: 91
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/BenefitsSection.js",
            lineNumber: 231,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t21;
        $[36] = t7;
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    return t22;
};
_s(BenefitsSection, "WVXZVP5L7r1kuHqyoilL6464Nyo=");
_c = BenefitsSection;
const __TURBOPACK__default__export__ = BenefitsSection;
function _temp(point, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors",
        initial: {
            opacity: 0,
            x: 20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 0.3,
            delay: index_0 * 0.1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white",
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/src/components/BenefitsSection.js",
                lineNumber: 251,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-300",
                children: point
            }, void 0, false, {
                fileName: "[project]/src/components/BenefitsSection.js",
                lineNumber: 251,
                columnNumber: 140
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/components/BenefitsSection.js",
        lineNumber: 242,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "BenefitsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ClientSuccessStories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/components/ClientSuccessStories.js
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
const ClientSuccessStories = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(79);
    if ($[0] !== "c8e23eaec746cc9a663d58b8a4b14ce85b12c189f8b3109f272e6addbacf8ae3") {
        for(let $i = 0; $i < 79; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c8e23eaec746cc9a663d58b8a4b14ce85b12c189f8b3109f272e6addbacf8ae3";
    }
    const stories = [
        {
            name: "Rahul Verma",
            age: 32,
            problem: "Stuck in career for 5 years, no promotions",
            solution: "Career guidance + timing analysis",
            result: "Got promoted within 3 months, 60% salary hike",
            duration: "3 months",
            icon: "\uD83D\uDCBC",
            beforeAfter: {
                before: "Stagnant career",
                after: "Rapid growth"
            }
        },
        {
            name: "Priya Sharma",
            age: 28,
            problem: "Multiple failed relationships, marriage delay",
            solution: "Relationship analysis + remedies",
            result: "Married within 1 year, happy relationship",
            duration: "1 year",
            icon: "\uD83D\uDC8D",
            beforeAfter: {
                before: "Relationship struggles",
                after: "Happy marriage"
            }
        },
        {
            name: "Amit Patel",
            age: 45,
            problem: "Business losses for 3 consecutive years",
            solution: "Business timing + Vastu remedies",
            result: "Business turned profitable in 6 months",
            duration: "6 months",
            icon: "\uD83D\uDCB0",
            beforeAfter: {
                before: "Financial losses",
                after: "Profitable growth"
            }
        },
        {
            name: "Sneha Kapoor",
            age: 35,
            problem: "Health issues, no diagnosis from doctors",
            solution: "Health remedies + planetary analysis",
            result: "Health improved, found right treatment",
            duration: "4 months",
            icon: "\uD83C\uDF3F",
            beforeAfter: {
                before: "Chronic health issues",
                after: "Improved health"
            }
        },
        {
            name: "Rajesh Kumar",
            age: 50,
            problem: "Family disputes, property conflicts",
            solution: "Family harmony remedies",
            result: "Family reunited, property settled",
            duration: "8 months",
            icon: "\uD83C\uDFE0",
            beforeAfter: {
                before: "Family conflicts",
                after: "Harmony restored"
            }
        },
        {
            name: "Anjali Singh",
            age: 29,
            problem: "Anxiety, lack of direction in life",
            solution: "Spiritual guidance + meditation",
            result: "Found purpose, anxiety reduced",
            duration: "2 months",
            icon: "\uD83E\uDDD8",
            beforeAfter: {
                before: "Anxiety & confusion",
                after: "Clarity & peace"
            }
        }
    ];
    const [selectedStory, setSelectedStory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(stories[0]);
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleStories = showAll ? stories : stories.slice(0, 3);
    const t0 = "py-20 px-4 md:px-6 lg:px-12 bg-transparent section-wrapper";
    const t1 = "max-w-7xl mx-auto";
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
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
                    children: "Real Transformations"
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 103,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                    children: "Client Success Stories"
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 103,
                    columnNumber: 122
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 max-w-2xl mx-auto",
                    children: "Real people, real problems, real solutions through Rekha Sharma Ji's guidance"
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 103,
                    columnNumber: 216
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    let t4;
    let t5;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 20
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            duration: 0.6
        };
        $[2] = t3;
        $[3] = t4;
        $[4] = t5;
    } else {
        t3 = $[2];
        t4 = $[3];
        t5 = $[4];
    }
    let t6;
    if ($[5] !== selectedStory.icon) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-5xl",
            children: selectedStory.icon
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 133,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = selectedStory.icon;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== selectedStory.age || $[8] !== selectedStory.name) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-2xl font-bold",
            children: [
                selectedStory.name,
                ", ",
                selectedStory.age
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 141,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = selectedStory.age;
        $[8] = selectedStory.name;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-purple-300",
            children: "Featured Success Story"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 150,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 157,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t7;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t6 || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4 mb-6",
            children: [
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold mb-2",
            children: "The Problem"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== selectedStory.problem) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-white/5 rounded-xl",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300",
                    children: selectedStory.problem
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 181,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = selectedStory.problem;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold mb-2",
            children: "Rekha Ji's Solution"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== selectedStory.solution) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-white/5 rounded-xl",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300",
                    children: selectedStory.solution
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 196,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = selectedStory.solution;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-semibold mb-2",
            children: "The Result"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 204,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== selectedStory.result) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-green-300 font-medium",
            children: selectedStory.result
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 211,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = selectedStory.result;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== selectedStory.duration) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-sm mt-1",
            children: [
                "Achieved in ",
                selectedStory.duration
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 219,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = selectedStory.duration;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== t16 || $[28] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-green-500/10 rounded-xl border border-green-500/20",
            children: [
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t16;
        $[28] = t17;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== t12 || $[31] !== t14 || $[32] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t12,
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 236,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t12;
        $[31] = t14;
        $[32] = t18;
        $[33] = t19;
    } else {
        t19 = $[33];
    }
    let t20;
    if ($[34] !== t10 || $[35] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 246,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t10;
        $[35] = t19;
        $[36] = t20;
    } else {
        t20 = $[36];
    }
    let t21;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-white font-bold text-xl mb-6 text-center",
            children: "Transformation Journey"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 255,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-sm mb-2",
            children: "Before"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 262,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== selectedStory.beforeAfter.before) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-400 font-semibold",
                    children: selectedStory.beforeAfter.before
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 269,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 269,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = selectedStory.beforeAfter.before;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-purple-400 text-2xl",
            children: "→"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 277,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t24;
    } else {
        t24 = $[41];
    }
    let t25;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-sm mb-2",
            children: "After"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 284,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t25;
    } else {
        t25 = $[42];
    }
    let t26;
    if ($[43] !== selectedStory.beforeAfter.after) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-green-400 font-semibold",
                    children: selectedStory.beforeAfter.after
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 291,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 291,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = selectedStory.beforeAfter.after;
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== t23 || $[46] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                t23,
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 299,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t23;
        $[46] = t26;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-4 bg-gray-800 rounded-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 h-4 bg-gradient-to-r from-red-500 via-purple-500 to-green-500 rounded-full",
                initial: {
                    width: "0%"
                },
                animate: {
                    width: "100%"
                },
                transition: {
                    duration: 2
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ClientSuccessStories.js",
                lineNumber: 308,
                columnNumber: 82
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 308,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t28;
    } else {
        t28 = $[48];
    }
    let t29;
    if ($[49] !== selectedStory.duration) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white font-bold",
            children: selectedStory.duration
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 321,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = selectedStory.duration;
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    let t30;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-gray-400 text-xs",
            children: "Duration"
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 329,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t30;
    } else {
        t30 = $[51];
    }
    let t31;
    if ($[52] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-gray-800/50 rounded-xl",
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 336,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t29;
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    let t32;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-gray-800/50 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white font-bold",
                    children: "100%"
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 344,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 text-xs",
                    children: "Satisfaction"
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 344,
                    columnNumber: 106
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 344,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t32;
    } else {
        t32 = $[54];
    }
    let t33;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-gray-800/50 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white font-bold",
                    children: "⭐⭐⭐⭐⭐"
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 351,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 text-xs",
                    children: "Rating"
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 351,
                    columnNumber: 107
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 351,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t33;
    } else {
        t33 = $[55];
    }
    let t34;
    if ($[56] !== t31) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-3 gap-4 text-center",
            children: [
                t31,
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 358,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t31;
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] !== t27 || $[59] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/50 rounded-2xl p-6 border border-gray-700",
                children: [
                    t21,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            t27,
                            t28,
                            t34
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ClientSuccessStories.js",
                        lineNumber: 366,
                        columnNumber: 92
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClientSuccessStories.js",
                lineNumber: 366,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 366,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t27;
        $[59] = t34;
        $[60] = t35;
    } else {
        t35 = $[60];
    }
    let t36;
    if ($[61] !== t20 || $[62] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "bg-gradient-to-r from-purple-500/10 via-gray-900/50 to-pink-500/10 rounded-3xl p-8 mb-12 border border-purple-500/20 backdrop-blur-lg",
            initial: t3,
            whileInView: t4,
            transition: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
                children: [
                    t20,
                    t35
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClientSuccessStories.js",
                lineNumber: 375,
                columnNumber: 215
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 375,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t20;
        $[62] = t35;
        $[63] = t36;
    } else {
        t36 = $[63];
    }
    const t37 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8";
    const t38 = visibleStories.map((story, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: `p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] ${selectedStory.name === story.name ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50" : "bg-gray-900/50 border border-gray-700 hover:border-purple-500/30"}`,
            onClick: ()=>setSelectedStory(story),
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.4,
                delay: index * 0.1
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-3xl",
                            children: story.icon
                        }, void 0, false, {
                            fileName: "[project]/src/components/ClientSuccessStories.js",
                            lineNumber: 392,
                            columnNumber: 56
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-bold",
                                    children: story.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ClientSuccessStories.js",
                                    lineNumber: 392,
                                    columnNumber: 105
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm",
                                    children: [
                                        "Age ",
                                        story.age
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ClientSuccessStories.js",
                                    lineNumber: 392,
                                    columnNumber: 159
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ClientSuccessStories.js",
                            lineNumber: 392,
                            columnNumber: 100
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 392,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-xs mb-1",
                                    children: "Problem"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ClientSuccessStories.js",
                                    lineNumber: 392,
                                    columnNumber: 259
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm line-clamp-2",
                                    children: story.problem
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ClientSuccessStories.js",
                                    lineNumber: 392,
                                    columnNumber: 316
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ClientSuccessStories.js",
                            lineNumber: 392,
                            columnNumber: 254
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400 text-xs mb-1",
                                    children: "Result"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ClientSuccessStories.js",
                                    lineNumber: 392,
                                    columnNumber: 396
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-300 text-sm font-medium",
                                    children: story.result.split(",")[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ClientSuccessStories.js",
                                    lineNumber: 392,
                                    columnNumber: 452
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ClientSuccessStories.js",
                            lineNumber: 392,
                            columnNumber: 391
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 392,
                    columnNumber: 227
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 pt-4 border-t border-gray-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400 text-xs",
                                children: story.duration
                            }, void 0, false, {
                                fileName: "[project]/src/components/ClientSuccessStories.js",
                                lineNumber: 392,
                                columnNumber: 649
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-purple-400 text-xs",
                                children: "View Details →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ClientSuccessStories.js",
                                lineNumber: 392,
                                columnNumber: 712
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ClientSuccessStories.js",
                        lineNumber: 392,
                        columnNumber: 598
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ClientSuccessStories.js",
                    lineNumber: 392,
                    columnNumber: 546
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, index, true, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 383,
            columnNumber: 52
        }, ("TURBOPACK compile-time value", void 0)));
    let t39;
    if ($[64] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t37,
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 395,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t38;
        $[65] = t39;
    } else {
        t39 = $[65];
    }
    let t40;
    if ($[66] !== setShowAll || $[67] !== showAll) {
        t40 = ()=>setShowAll(!showAll);
        $[66] = setShowAll;
        $[67] = showAll;
        $[68] = t40;
    } else {
        t40 = $[68];
    }
    let t41;
    let t42;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = {
            scale: 1.05
        };
        t42 = {
            scale: 0.95
        };
        $[69] = t41;
        $[70] = t42;
    } else {
        t41 = $[69];
        t42 = $[70];
    }
    const t43 = showAll ? "Show Less Stories" : "View All Success Stories";
    let t44;
    if ($[71] !== t40 || $[72] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                className: "px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300",
                onClick: t40,
                whileHover: t41,
                whileTap: t42,
                children: t43
            }, void 0, false, {
                fileName: "[project]/src/components/ClientSuccessStories.js",
                lineNumber: 428,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 428,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t40;
        $[72] = t43;
        $[73] = t44;
    } else {
        t44 = $[73];
    }
    let t45;
    if ($[74] !== t2 || $[75] !== t36 || $[76] !== t39 || $[77] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t1,
                children: [
                    t2,
                    t36,
                    t39,
                    t44
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClientSuccessStories.js",
                lineNumber: 437,
                columnNumber: 35
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ClientSuccessStories.js",
            lineNumber: 437,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t2;
        $[75] = t36;
        $[76] = t39;
        $[77] = t44;
        $[78] = t45;
    } else {
        t45 = $[78];
    }
    return t45;
};
_s(ClientSuccessStories, "CR9OhIZYP0rJbbcMXt/r6Y1szvs=");
_c = ClientSuccessStories;
const __TURBOPACK__default__export__ = ClientSuccessStories;
var _c;
__turbopack_context__.k.register(_c, "ClientSuccessStories");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/page.js
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookingForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BenefitsSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BenefitsSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientSuccessStories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClientSuccessStories.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Interactive Background Component (Fixed)
const InteractiveBackground = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 23,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            children: [
                ...Array(50)
            ].map(_temp)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl",
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ]
            },
            transition: {
                duration: 10,
                repeat: Infinity
            }
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 37,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed-bg fixed inset-0 overflow-hidden z-[-10]",
            children: [
                t0,
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 rounded-full blur-3xl",
                    animate: {
                        scale: [
                            1.2,
                            1,
                            1.2
                        ]
                    },
                    transition: {
                        duration: 12,
                        repeat: Infinity,
                        delay: 3
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 49,
                    columnNumber: 86
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c = InteractiveBackground;
// Astrologer Hero Section (Simplified)
const AstrologerHero = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a";
    }
    const { setIsBookingOpen } = t0;
    const [currentWord, setCurrentWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "Rekha Sharma Ji",
            "Vedic Astrology",
            "Kundli",
            "Life Guidance",
            "Problem Solutions"
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
            y: 30
        };
        t5 = {
            opacity: 1,
            y: 0
        };
        t6 = {
            duration: 0.7
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
                            lineNumber: 126,
                            columnNumber: 93
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 126,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-purple-300 text-xl mt-4",
                    children: "Renowned Vedic Astrologer"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 126,
                    columnNumber: 143
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 126,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t10;
    let t11;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0,
            y: 20
        };
        t9 = {
            opacity: 1,
            y: 0
        };
        t10 = {
            opacity: 0,
            y: -20
        };
        t11 = {
            duration: 0.5
        };
        $[8] = t10;
        $[9] = t11;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[8];
        t11 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    const t12 = words[currentWord];
    let t13;
    if ($[12] !== currentWord || $[13] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-20 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: t8,
                    animate: t9,
                    exit: t10,
                    transition: t11,
                    className: "text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-2xl lg:text-3xl font-bold inline-block",
                    children: [
                        "Expert in ",
                        t12
                    ]
                }, currentWord, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 164,
                    columnNumber: 95
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 164,
                columnNumber: 66
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 164,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = currentWord;
        $[13] = t12;
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300 text-lg max-w-2xl mx-auto",
            children: "With 14+ years of experience, I've helped thousands find clarity, purpose, and solutions to life's challenges through divine astrological guidance."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-8 max-w-md mx-auto",
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
                    label: "Success"
                },
                {
                    number: "24/7",
                    label: "Support"
                }
            ].map(_temp2)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    let t17;
    let t18;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            opacity: 0,
            y: 20
        };
        t17 = {
            opacity: 1,
            y: 0
        };
        t18 = {
            duration: 0.7,
            delay: 0.5
        };
        $[17] = t16;
        $[18] = t17;
        $[19] = t18;
    } else {
        t16 = $[17];
        t17 = $[18];
        t18 = $[19];
    }
    let t19;
    let t20;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            scale: 1.05
        };
        t20 = {
            scale: 0.95
        };
        $[20] = t19;
        $[21] = t20;
    } else {
        t19 = $[20];
        t20 = $[21];
    }
    let t21;
    if ($[22] !== setIsBookingOpen) {
        t21 = ()=>setIsBookingOpen(true);
        $[22] = setIsBookingOpen;
        $[23] = t21;
    } else {
        t21 = $[23];
    }
    let t22;
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Book Consultation"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 247,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "✨"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 248,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t22;
        $[25] = t23;
    } else {
        t22 = $[24];
        t23 = $[25];
    }
    let t24;
    if ($[26] !== t21) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2",
            whileHover: t19,
            whileTap: t20,
            onClick: t21,
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 257,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t21;
        $[27] = t24;
    } else {
        t24 = $[27];
    }
    let t25;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "border-2 border-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-300",
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: 0.95
            },
            onClick: _temp3,
            children: "How I Can Help"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 265,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t25;
    } else {
        t25 = $[28];
    }
    let t26;
    if ($[29] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex flex-col sm:flex-row gap-4 justify-center pt-4",
            initial: t16,
            animate: t17,
            transition: t18,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 276,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t24;
        $[30] = t26;
    } else {
        t26 = $[30];
    }
    let t27;
    if ($[31] !== t13 || $[32] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            className: "min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-12 relative content-layer pt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto w-full text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "space-y-8",
                    initial: t4,
                    animate: t5,
                    transition: t6,
                    children: [
                        t7,
                        t13,
                        t14,
                        t15,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 284,
                    columnNumber: 193
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 284,
                columnNumber: 139
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 284,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t13;
        $[32] = t26;
        $[33] = t27;
    } else {
        t27 = $[33];
    }
    return t27;
};
_s(AstrologerHero, "Vaj1vxHvwmHVopt95sBERTYBjqk=");
_c1 = AstrologerHero;
// Simple About Section
const AboutSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            x: -30
        };
        t1 = {
            opacity: 1,
            x: 0
        };
        t2 = {
            duration: 0.6
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-gradient text-3xl lg:text-4xl font-black mb-6",
            children: "About Rekha Sharma Ji"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 319,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300",
            children: "Born into a family of astrologers, I've been practicing Vedic astrology for over 14 years. My approach combines traditional wisdom with practical, actionable guidance for modern life."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 333,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-300",
            children: "I believe astrology isn't about predicting fate, but about understanding cosmic patterns to make better decisions and create the life you desire."
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 334,
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
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t0,
            whileInView: t1,
            transition: t2,
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t4,
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4 mt-6",
                            children: [
                                {
                                    icon: "\uD83C\uDF93",
                                    text: "Vedic Astrology Expert"
                                },
                                {
                                    icon: "\uD83C\uDF1F",
                                    text: "14+ Years Experience"
                                },
                                {
                                    icon: "\uD83D\uDCAB",
                                    text: "5000+ Happy Clients"
                                },
                                {
                                    icon: "\uD83C\uDFAF",
                                    text: "Practical Solutions"
                                }
                            ].map(_temp4)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 343,
                            columnNumber: 107
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 343,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 343,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 0,
            x: 30
        };
        t8 = {
            opacity: 1,
            x: 0
        };
        t9 = {
            duration: 0.6
        };
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    let t11;
    let t12;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-8xl mb-6",
            children: "👩‍🦳"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 387,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-2xl font-bold mb-2",
            children: "Rekha Sharma"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 388,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-purple-300 mb-4",
            children: "Vedic Astrologer & Spiritual Guide"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 389,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
        $[12] = t11;
        $[13] = t12;
    } else {
        t10 = $[11];
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "py-20 px-4 md:px-6 lg:px-12 bg-transparent section-wrapper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "relative",
                            initial: t7,
                            whileInView: t8,
                            transition: t9,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        t10,
                                        t11,
                                        t12,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 400,
                                                    columnNumber: 564
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 text-sm",
                                                    children: "Available for Consultation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 400,
                                                    columnNumber: 631
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 400,
                                            columnNumber: 446
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 400,
                                    columnNumber: 402
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 400,
                                columnNumber: 289
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 400,
                            columnNumber: 210
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 400,
                    columnNumber: 137
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 400,
                columnNumber: 102
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 400,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    return t13;
};
_c2 = AboutSection;
// Simple Services Section
const ServicesSection = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a";
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
                title: "Kundli Analysis",
                price: "\u20B9300",
                desc: "Complete birth chart analysis",
                features: [
                    "Detailed predictions",
                    "Planetary positions",
                    "Remedies"
                ]
            },
            {
                title: "Consultation",
                price: "First Free",
                desc: "Personal guidance session",
                features: [
                    "Life guidance",
                    "Problem solving",
                    "Follow-up"
                ]
            },
            {
                title: "Marriage Match",
                price: "\u20B9600",
                desc: "Compatibility analysis",
                features: [
                    "Guna Milan",
                    "Mangal Dosha",
                    "Remedies"
                ]
            },
            {
                title: "Career Guidance",
                price: "\u20B9400",
                desc: "Professional path analysis",
                features: [
                    "Career timing",
                    "Job changes",
                    "Business"
                ]
            }
        ];
        t5 = "services";
        t6 = "py-20 px-4 md:px-6 lg:px-12 bg-transparent section-wrapper";
        t3 = "max-w-6xl mx-auto";
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "text-center mb-12",
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-gradient text-3xl lg:text-4xl font-black mb-4",
                        children: "My Services"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 460,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Comprehensive astrological services for all life aspects"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 460,
                        columnNumber: 93
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 452,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        t1 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6";
        t2 = services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.4,
                    delay: index * 0.1
                },
                whileHover: {
                    y: -5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white font-bold text-xl mb-1",
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 477,
                                columnNumber: 30
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-purple-400 text-lg font-semibold",
                                children: service.price
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 477,
                                columnNumber: 102
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: service.desc
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 477,
                                columnNumber: 178
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 477,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 mb-6",
                        children: service.features.map(_temp5)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 477,
                        columnNumber: 244
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors",
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: 0.98
                        },
                        onClick: ()=>setIsBookingOpen(true),
                        children: "Book Now"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 477,
                        columnNumber: 312
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 466,
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
            lineNumber: 499,
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
            lineNumber: 508,
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
            lineNumber: 518,
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
// Simple Footer
const Footer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-black text-white mb-4",
            children: [
                "Rekha",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gradient",
                    children: "Sharma"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 540,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 540,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#home",
                    className: "text-gray-400 hover:text-purple-400 transition-colors",
                    children: "Home"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 547,
                    columnNumber: 109
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#about",
                    className: "text-gray-400 hover:text-purple-400 transition-colors",
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 547,
                    columnNumber: 199
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#services",
                    className: "text-gray-400 hover:text-purple-400 transition-colors",
                    children: "Services"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 547,
                    columnNumber: 291
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#benefits",
                    className: "text-gray-400 hover:text-purple-400 transition-colors",
                    children: "Benefits"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 547,
                    columnNumber: 389
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#stories",
                    className: "text-gray-400 hover:text-purple-400 transition-colors",
                    children: "Stories"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 547,
                    columnNumber: 487
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 547,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300 mb-2",
                    children: "📱 WhatsApp: +91 85109 88703"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 554,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-sm",
                    children: "Available 9 AM - 9 PM, Monday to Sunday"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 554,
                    columnNumber: 98
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 554,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-transparent border-t border-gray-800/50 py-12 px-4 md:px-6 lg:px-12 section-wrapper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t0,
                        t1,
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Rekha Sharma Astrology Services"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 561,
                            columnNumber: 193
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 561,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 561,
                columnNumber: 117
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 561,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c4 = Footer;
// Loader
const Loader = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 border-4 border-purple-500/30 rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 580,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black flex items-center justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-20 h-20 mx-auto mb-4",
                        children: [
                            t0,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-2xl",
                                    children: "✨"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 587,
                                    columnNumber: 237
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 587,
                                columnNumber: 170
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 587,
                        columnNumber: 117
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-xl",
                        children: "Rekha Sharma Astrology"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 587,
                        columnNumber: 295
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 587,
                columnNumber: 88
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 587,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c5 = Loader;
function Home() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1be0bc289f1b41db0fe0afe949a0505bf4afc602a27b2a19ba5748090c6ae3a";
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
                }["Home[useEffect() > setTimeout()]"], 1000);
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
                lineNumber: 628,
                columnNumber: 12
            }, this);
            $[3] = t2;
        } else {
            t2 = $[3];
        }
        return t2;
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InteractiveBackground, {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 637,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xl font-black text-white",
            children: [
                "Rekha",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gradient",
                    children: "Sharma"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 644,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 644,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed top-0 w-full z-40 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50 header-layer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 py-4 flex justify-between items-center",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: {
                            "Home[<motion.button>.onClick]": ()=>setIsBookingOpen(true)
                        }["Home[<motion.button>.onClick]"],
                        children: "Book Now"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 651,
                        columnNumber: 210
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 651,
                columnNumber: 127
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 651,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-layer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AstrologerHero, {
                    setIsBookingOpen: setIsBookingOpen
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 664,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutSection, {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 664,
                    columnNumber: 95
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicesSection, {
                    setIsBookingOpen: setIsBookingOpen
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 664,
                    columnNumber: 111
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BenefitsSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 664,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientSuccessStories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 664,
                    columnNumber: 185
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 664,
                    columnNumber: 209
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 664,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== isBookingOpen) {
        t6 = isBookingOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: isBookingOpen,
            onClose: {
                "Home[<BookingForm>.onClose]": ()=>setIsBookingOpen(false)
            }["Home[<BookingForm>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 671,
            columnNumber: 27
        }, this);
        $[8] = isBookingOpen;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t6
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 681,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            className: "w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-green-600 transition-colors",
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
            lineNumber: 689,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "floating-layer fixed bottom-6 right-6 flex flex-col items-end space-y-4",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: "w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl shadow-lg hover:from-purple-700 hover:to-pink-700 transition-colors",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: 0.9
                    },
                    onClick: {
                        "Home[<motion.button>.onClick]": ()=>setIsBookingOpen(true)
                    }["Home[<motion.button>.onClick]"],
                    children: "📅"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 700,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 700,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t7) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen text-white overflow-x-hidden",
            children: [
                t2,
                t4,
                t5,
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 713,
            columnNumber: 11
        }, this);
        $[14] = t7;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    return t10;
}
_s1(Home, "UQaO14UFtJOlNUOXQAYJhpJys6I=");
_c6 = Home;
function _HomeMotionButtonOnClick() {
    return window.open("https://wa.me/918510988703", "_blank");
}
function _temp(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute w-1 h-1 bg-purple-400/20 rounded-full",
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
        },
        animate: {
            opacity: [
                0.2,
                0.8,
                0.2
            ]
        },
        transition: {
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5
        }
    }, i, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 725,
        columnNumber: 10
    }, this);
}
function _temp2(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "text-center",
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-bold text-purple-400",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 746,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-sm",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 746,
                columnNumber: 77
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 737,
        columnNumber: 10
    }, this);
}
function _temp3() {
    return document.getElementById("benefits").scrollIntoView({
        behavior: "smooth"
    });
}
function _temp4(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl",
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 754,
                columnNumber: 67
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-300 text-sm",
                children: item.text
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 754,
                columnNumber: 109
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 754,
        columnNumber: 10
    }, this);
}
function _temp5(feature, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2 text-sm text-gray-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1.5 h-1.5 bg-purple-500 rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 757,
                columnNumber: 87
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: feature
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 757,
                columnNumber: 145
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 757,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "InteractiveBackground");
__turbopack_context__.k.register(_c1, "AstrologerHero");
__turbopack_context__.k.register(_c2, "AboutSection");
__turbopack_context__.k.register(_c3, "ServicesSection");
__turbopack_context__.k.register(_c4, "Footer");
__turbopack_context__.k.register(_c5, "Loader");
__turbopack_context__.k.register(_c6, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4c34e3b6._.js.map