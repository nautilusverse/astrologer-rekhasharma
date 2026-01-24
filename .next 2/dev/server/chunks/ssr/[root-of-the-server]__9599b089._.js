module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Services Section - Updated Headings
const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
const ServicesSection = ()=>{
    const services = [
        {
            icon: "💻",
            title: "Web Development",
            description: "Custom web applications with modern tech stacks",
            features: [
                "React/Next.js",
                "Node.js",
                "Tailwind CSS",
                "MongoDB"
            ]
        },
        {
            icon: "📱",
            title: "Mobile Apps",
            description: "Cross-platform mobile solutions",
            features: [
                "React Native",
                "Flutter",
                "iOS & Android",
                "Firebase"
            ]
        },
        {
            icon: "🎨",
            title: "UI/UX Design",
            description: "User-centered design systems",
            features: [
                "Figma",
                "Prototyping",
                "User Testing",
                "Design Systems"
            ]
        },
        {
            icon: "🚀",
            title: "Digital Marketing",
            description: "Data-driven growth strategies",
            features: [
                "SEO",
                "PPC",
                "Social Media",
                "Analytics"
            ]
        }
    ];
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "services",
        className: "py-20 px-6 lg:px-12 bg-dark",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                            children: "Our Expertise"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 34,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-4xl font-black mb-4 text-blue-400",
                            children: "Services We Offer"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 35,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-gray-400 max-w-2xl mx-auto",
                            children: "Comprehensive digital solutions tailored to your business needs"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 38,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 33,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: services.map((service, index)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: "group bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300",
                                    children: service.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-white font-bold text-lg mb-3",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-gray-400 text-sm mb-4",
                                    children: service.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: service.features.map((feature, idx)=>/*#__PURE__*/ _jsxDEV("span", {
                                            className: "px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs",
                                            children: feature
                                        }, idx, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 45,
                            columnNumber: 13
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 32,
            columnNumber: 7
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 31,
        columnNumber: 5
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e);
};
// Portfolio Section - Updated Headings
const PortfolioSection = ()=>{
    const portfolioProjects = [
        {
            emoji: "🛒",
            title: "E-Commerce Revolution",
            description: "Built a scalable e-commerce platform processing 10,000+ daily orders with 99.9% uptime and seamless user experience.",
            tech: [
                "React",
                "Node.js",
                "MongoDB",
                "Stripe",
                "AWS",
                "Redis"
            ],
            status: "Live",
            duration: "6 Months",
            budget: "$85,000"
        },
        {
            emoji: "📊",
            title: "Enterprise Analytics Dashboard",
            description: "Real-time business intelligence platform for Fortune 500 company with predictive analytics and custom reporting.",
            tech: [
                "Next.js",
                "D3.js",
                "Python",
                "PostgreSQL",
                "Docker",
                "Kubernetes"
            ],
            status: "Live",
            duration: "8 Months",
            budget: "$120,000"
        },
        {
            emoji: "🎵",
            title: "Music Streaming Platform",
            description: "Cross-platform music streaming service with AI-powered recommendations and social features.",
            tech: [
                "React Native",
                "GraphQL",
                "AWS",
                "Redis",
                "Web Audio API"
            ],
            status: "Live",
            duration: "9 Months",
            budget: "$150,000"
        },
        {
            emoji: "🏥",
            title: "Healthcare Management System",
            description: "Comprehensive patient management and telemedicine platform for healthcare providers.",
            tech: [
                "Vue.js",
                "Python",
                "PostgreSQL",
                "WebRTC",
                "HIPAA Compliant"
            ],
            status: "Live",
            duration: "12 Months",
            budget: "$200,000"
        }
    ];
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "work",
        className: "py-20 px-6 lg:px-12 bg-darker",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                            children: "Our Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-4xl font-black mb-4 text-blue-400",
                            children: "Success Stories"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-gray-400 max-w-2xl mx-auto",
                            children: "Explore how we've helped businesses across industries achieve their digital transformation goals."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 118,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 113,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: portfolioProjects.map((project, index)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: "bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group cursor-pointer",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "relative overflow-hidden rounded-xl mb-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "w-full h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center text-4xl",
                                            children: project.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    className: "bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300",
                                                    children: "View Case Study"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                /*#__PURE__*/ _jsxDEV("button", {
                                                    className: "bg-white/20 text-white px-4 py-2 rounded-lg font-semibold backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100",
                                                    children: "Live Demo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "absolute top-4 right-4",
                                            children: /*#__PURE__*/ _jsxDEV("span", {
                                                className: "bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30",
                                                children: project.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    className: "text-white font-bold text-xl mb-3",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    className: "text-gray-400 text-sm mb-4 leading-relaxed",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex flex-wrap gap-2 mb-4",
                                    children: project.tech.map((tech, idx)=>/*#__PURE__*/ _jsxDEV("span", {
                                            className: "px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs border border-blue-500/20",
                                            children: tech
                                        }, idx, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex justify-between items-center text-xs text-gray-500",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: [
                                                "📅 ",
                                                project.duration
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            children: [
                                                "💰 ",
                                                project.budget
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 125,
                            columnNumber: 13
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 123,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "text-center mt-16",
                    children: /*#__PURE__*/ _jsxDEV("button", {
                        className: "border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300",
                        children: "View All Case Studies →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 165,
                        columnNumber: 11
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 164,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 112,
            columnNumber: 7
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 111,
        columnNumber: 5
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e);
};
// Process Section - Updated Headings
const ProcessSection = ()=>{
    const processSteps = [
        {
            step: "01",
            title: "Discovery & Strategy",
            description: "We analyze your business goals and create a comprehensive digital strategy",
            icon: "🔍",
            color: "from-blue-500 to-cyan-500"
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Creating stunning visual designs and interactive prototypes",
            icon: "🎨",
            color: "from-blue-600 to-blue-400"
        },
        {
            step: "03",
            title: "Development",
            description: "Building robust solutions with cutting-edge technologies",
            icon: "⚡",
            color: "from-cyan-500 to-blue-500"
        },
        {
            step: "04",
            title: "Testing & Quality",
            description: "Rigorous testing to ensure flawless performance",
            icon: "🧪",
            color: "from-blue-400 to-cyan-400"
        },
        {
            step: "05",
            title: "Launch & Deployment",
            description: "Seamless deployment with comprehensive monitoring",
            icon: "🚀",
            color: "from-blue-500 to-indigo-500"
        },
        {
            step: "06",
            title: "Growth & Optimization",
            description: "Continuous improvement and performance optimization",
            icon: "📈",
            color: "from-cyan-400 to-blue-400"
        }
    ];
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "process",
        className: "py-20 px-6 lg:px-12 bg-dark",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                            children: "Our Process"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 225,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-4xl font-black mb-4 text-blue-400",
                            children: "How We Work"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 226,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-gray-400 max-w-2xl mx-auto",
                            children: "A structured approach to ensure your project's success from concept to launch"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 229,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 224,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: processSteps.map((step, index)=>/*#__PURE__*/ _jsxDEV("div", {
                            className: "relative group",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                className: "bg-gray-900/50 border border-gray-700 rounded-2xl p-6 h-full group-hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: `w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-black text-sm mb-4`,
                                        children: step.step
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-lg mb-4",
                                        children: step.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        className: "text-white font-bold text-lg mb-3",
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        className: "text-gray-400 text-sm leading-relaxed",
                                        children: step.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 240,
                                columnNumber: 15
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                        }, index, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 236,
                            columnNumber: 13
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 234,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 223,
            columnNumber: 7
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 222,
        columnNumber: 5
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e);
};
// Testimonials Section - Updated Headings
const TestimonialsCarousel = ()=>{
    const testimonials = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "CEO, TechInnovate Inc.",
            content: "Nautilus Verse transformed our digital presence completely. Our revenue grew by 250% in just 6 months!",
            avatar: "👩‍💼",
            company: "TechInnovate Inc."
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Marketing Director, Global Retail Co.",
            content: "The attention to detail and strategic approach exceeded our expectations. Best investment we've made.",
            avatar: "👨‍💼",
            company: "Global Retail Co."
        },
        {
            id: 3,
            name: "Emily Watson",
            role: "Founder, StartUp Ventures",
            content: "From concept to launch, the team was exceptional. They understood our vision perfectly.",
            avatar: "👩‍🎓",
            company: "StartUp Ventures"
        }
    ];
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "testimonials",
        className: "py-20 px-6 lg:px-12 bg-darker relative overflow-hidden",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                            children: "Testimonials"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 291,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            className: "text-3xl lg:text-4xl font-black mb-4 text-blue-400",
                            children: "What Clients Say"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 292,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "text-gray-400 max-w-2xl mx-auto",
                            children: "Don't just take our word for it. Here's what our clients have to say about their experience."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 295,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 290,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "flex space-x-6 animate-infinite-scroll",
                            children: [
                                ...testimonials,
                                ...testimonials
                            ].map((testimonial, index)=>/*#__PURE__*/ _jsxDEV("div", {
                                    className: "flex-shrink-0 w-80 bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "text-yellow-400 text-lg mb-4",
                                            children: "★★★★★"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            className: "text-gray-300 mb-6 leading-relaxed italic",
                                            children: [
                                                '"',
                                                testimonial.content,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            className: "flex items-center space-x-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    className: "w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-xl",
                                                    children: testimonial.avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "font-bold text-white",
                                                            children: testimonial.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 314,
                                                            columnNumber: 21
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "text-blue-400 text-sm font-semibold",
                                                            children: testimonial.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            className: "text-gray-400 text-xs",
                                                            children: testimonial.company
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.js",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                    ]
                                }, `${testimonial.id}-${index}`, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 301,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-darker to-transparent z-10"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 324,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("div", {
                            className: "absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-darker to-transparent z-10"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 325,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 300,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 289,
            columnNumber: 7
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 288,
        columnNumber: 5
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e);
};
// CTA Section - Updated Headings
const CTASection = ()=>{
    return /*#__PURE__*/ _jsxDEV("section", {
        id: "contact",
        className: "py-20 px-6 lg:px-12 bg-dark",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
                /*#__PURE__*/ _jsxDEV("span", {
                    className: "text-white text-sm font-semibold mb-4 block uppercase tracking-wider",
                    children: "Get Started"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 337,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("h2", {
                    className: "text-4xl lg:text-5xl font-black mb-6 text-blue-400",
                    children: "Ready to Transform Your Business?"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 338,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("p", {
                    className: "text-xl text-gray-400 mb-8 max-w-2xl mx-auto",
                    children: "Let's discuss your project and create something extraordinary together. We're here to turn your vision into reality."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 341,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("button", {
                            className: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 text-lg",
                            children: "Schedule Free Consultation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 346,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                        /*#__PURE__*/ _jsxDEV("button", {
                            className: "border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300 text-lg",
                            children: "Contact Our Team"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 349,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 345,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "mt-8 text-gray-500 text-sm",
                    children: "⚡ Typically respond within 2 hours during business hours"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 354,
                    columnNumber: 9
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 336,
            columnNumber: 7
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 335,
        columnNumber: 5
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e);
};
}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9599b089._.js.map