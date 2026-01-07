"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, Users, Calendar, ExternalLink, ChevronDown, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const currentCourses = [
    {
        name: "電腦網路",
        code: "資工二",
        type: "必修" as const,
        description: "介紹電腦網路的基本原理、協定與應用，包含網路架構、傳輸層、網路層等核心概念。",
        schedule: "每週(三) 09:05 - 12:00",
        classroom: "資工電腦教室(一)",
        link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/114-1-nt.html",
        color: "from-blue-500 to-cyan-500",
        highlights: ["TCP/IP 協定", "基本網路架構", "傳輸層設計", "路由演算法"],
    },
    {
        name: "物聯網",
        code: "資工碩一",
        type: "選修" as const,
        description: "探討物聯網技術與應用，包含感測器網路、無線通訊、雲端運算及實作專題。",
        schedule: "每週(二) 09:05 - 12:00",
        classroom: "資工電腦教室(二)",
        link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/114-1-IoT.html",
        color: "from-purple-500 to-pink-500",
        highlights: ["感測器網路", "無線通訊", "雲端運算", "專題實作"],
    },
    {
        name: "書報討論",
        code: "人工智慧應用服務碩士在職專班一",
        type: "必修" as const,
        description: "研討最新的研究論文與技術發展，訓練學生的論文閱讀、批判性思考及口頭報告能力。",
        schedule: "每週(三) 18:20 - 20:05",
        classroom: "資工研討室(二)",
        link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/114-1 seminar.htm",
        color: "from-emerald-500 to-teal-500",
        highlights: ["論文研討", "批判思考", "口頭報告", "學術寫作"],
    },
    {
        name: "網路通訊專題(二)",
        code: "資工四",
        type: "必修" as const,
        description: "研討最新的研究論文與技術發展，訓練學生的論文閱讀以及批判性思考，讓學生了解系統整合流程與實作能力。",
        schedule: "每週(六) 08:10 - 12:00",
        classroom: "資工電腦教室(一)",
        link: "https://webap0.ncue.edu.tw/DEANV2/UploadDEAN/SUBJECT/1141/54020_1EICS0024920.pdf",
        color: "from-amber-500 to-teal-500",
        highlights: ["論文研討", "批判思考", "專題報告", "學術研究"],
    },
];

export default function CurrentCoursesPage() {
    const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-800 dark:via-blue-700 dark:to-cyan-700 py-20">
                <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-white/5 bg-[size:20px_20px]"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.div
                            className="inline-flex items-center justify-center mb-6"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 animate-pulse"></div>
                                <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/30 dark:border-white/20">
                                    <BookOpen className="h-12 w-12 text-white" />
                                </div>
                            </div>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                            目前授課
                        </h1>
                        <p className="text-xl text-white/90 mb-2">
                            114 學年度第 1 學期課程
                        </p>
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 dark:border-white/20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-white text-sm font-medium">共 {currentCourses.length} 門課程</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Courses Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {currentCourses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <Card className="h-full overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-2xl">
                                    {/* Course Header with Gradient */}
                                    <div className={`relative bg-gradient-to-r ${course.color} p-6`}>
                                        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                                        <div className="relative flex items-start justify-between">
                                            <div className="flex items-start gap-4 flex-1">
                                                <motion.div
                                                    className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/30"
                                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <GraduationCap className="h-7 w-7 text-white" />
                                                </motion.div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
                                                        {course.name}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                                                            {course.code}
                                                        </Badge>
                                                        <Badge
                                                            className={
                                                                course.type === "必修"
                                                                    ? "bg-red-500/90 hover:bg-red-600 text-white border-0"
                                                                    : "bg-blue-500/90 hover:bg-blue-600 text-white border-0"
                                                            }
                                                        >
                                                            {course.type}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 bg-white dark:bg-gray-800">
                                        {/* Course Info */}
                                        <div className="space-y-4">
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {course.description}
                                            </p>

                                            {/* Schedule Info */}
                                            <div className="flex flex-wrap gap-3">
                                                <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                                    <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{course.schedule}</span>
                                                </div>
                                                <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                                    <MapPin className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{course.classroom}</span>
                                                </div>
                                            </div>

                                            {/* Expandable Highlights */}
                                            <div>
                                                <button
                                                    onClick={() => setExpandedCourse(expandedCourse === index ? null : index)}
                                                    className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                                >
                                                    <span className="text-sm font-medium text-gray-900 dark:text-white">課程重點</span>
                                                    <motion.div
                                                        animate={{ rotate: expandedCourse === index ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                                                    </motion.div>
                                                </button>

                                                <AnimatePresence>
                                                    {expandedCourse === index && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-3 grid grid-cols-2 gap-2">
                                                                {course.highlights.map((highlight, idx) => (
                                                                    <motion.div
                                                                        key={idx}
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: idx * 0.1 }}
                                                                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                                                                    >
                                                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.color}`}></div>
                                                                        {highlight}
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Course Link Button */}
                                            {course.link && (
                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <Button
                                                        asChild
                                                        className={`w-full bg-gradient-to-r ${course.color} hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0`}
                                                    >
                                                        <a
                                                            href={course.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center justify-center gap-2"
                                                        >
                                                            <span>進入課程網頁</span>
                                                            <ExternalLink className="h-4 w-4" />
                                                        </a>
                                                    </Button>
                                                </motion.div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Card className="relative overflow-hidden border-2 border-blue-200 dark:border-blue-800">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/20 dark:via-gray-800 dark:to-cyan-950/20"></div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>

                            <CardContent className="relative p-8">
                                <div className="flex items-start gap-6">
                                    <motion.div
                                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                    >
                                        <span className="text-3xl">📧</span>
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                            課程諮詢與聯絡
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                            如有課程相關問題，歡迎隨時透過 Email 聯繫。我會盡快回覆您的問題。
                                        </p>
                                        <motion.a
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=icchang@cc.ncue.edu.tw"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>icchang@cc.ncue.edu.tw</span>
                                            <ExternalLink className="h-4 w-4" />
                                        </motion.a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
