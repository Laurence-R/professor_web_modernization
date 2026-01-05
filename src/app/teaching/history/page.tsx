"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, ExternalLink, Search, Filter, ChevronDown, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const courseData = [
    {
        year: "113",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/113-2-nt.html",
            },
            {
                name: "車載通訊技術",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/113-2-vehicle.html",
            },
        ],
    },
    {
        year: "113",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/113-1-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/113-1-IoT.html",
            },
        ],
    },
    {
        year: "112",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/112-1-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/112-1-IoT.html",
            },
        ],
    },
    {
        year: "111",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/111-2-nt.html",
            },
            {
                name: "車載通訊技術",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/111-2-vehicle.html",
            },
        ],
    },
    {
        year: "111",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/111-1-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/111-1-IoT.html",
            },
        ],
    },
    {
        year: "110",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/110-2-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/110-2-IoT.html",
            },
            {
                name: "書報討論",
                code: "資工碩一",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/110-2%20seminar.htm",
            },
        ],
    },
    {
        year: "110",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/110-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/110-1-IoT.html",
            },
            {
                name: "書報討論",
                code: "資工碩一",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/110-1%20seminar.htm",
            },
        ],
    },
    {
        year: "109",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/109-2-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/109-2-IoT.html",
            },
            {
                name: "書報討論",
                code: "資工碩一",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/109-2%20seminar.htm",
            },
        ],
    },
    {
        year: "109",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/109-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/109-1-IoT.html",
            },
            {
                name: "書報討論",
                code: "資工碩一",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/109-1%20seminar.htm",
            },
        ],
    },
    {
        year: "108",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/108-2-nt.html",
            },
            {
                name: "車載網路技術",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/108-2-vehicle.html",
            },
            {
                name: "書報討論",
                code: "資工碩一",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/108-2%20seminar.htm",
            },
        ],
    },
    {
        year: "108",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/108-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/108-1-IoT.html",
            },
            {
                name: "書報討論",
                code: "資工碩一",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/seminar/108-1%20seminar.htm",
            },
        ],
    },
    {
        year: "107",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/107-2-nt.html",
            },
            {
                name: "無線通訊網路",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/wireless/107-2-wireless.html",
            },
        ],
    },
    {
        year: "107",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/107-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/107-1-IoT.html",
            },
        ],
    },
    {
        year: "106",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/105-nt.html",
            },
            {
                name: "計算機概論",
                code: "資工一",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/cs/106-1-cs.html",
            },
        ],
    },
    {
        year: "105",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/105-2-nt.html",
            },
            {
                name: "車載通訊技術",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/105-2-vehicle.html",
            },
        ],
    },
    {
        year: "105",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt1/105-nt.html",
            },
            {
                name: "物聯網",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/IoT/105-1-IoT.html",
            },
        ],
    },
    {
        year: "104",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/nt2/104-2-nt.html",
            },
            {
                name: "車載網路技術",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/vehicle/104-2-vehicle.html",
            },
            {
                name: "進階書報討論",
                code: "資工碩二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/AdvSeminar/104-2-AdvSeminar.html",
            }
        ],
    },
    {
        year: "104",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/103-nt/104-nt.html",
            },
        ],
    },
    {
        year: "103",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/103-2-nt/103-2-nt.html",
            },
        ],
    },
    {
        year: "103",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/103-nt/103-nt.html",
            },
            {
                name: "行動計算",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/103-mobile/103-mobile.html",
            },
        ],
    },
    {
        year: "102",
        semester: "2",
        courses: [
            {
                name: "電腦網路進階",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/102-2-nt/102-2-nt.html",
            },
            {
                name: "車載網路技術",
                code: "資工三、資工碩一",
                type: "選修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/102-2-vehicle/102-2-vehicle.html",
            },
        ],
    },
    {
        year: "102",
        semester: "1",
        courses: [
            {
                name: "電腦網路",
                code: "資工二",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/102-nt/102-1-nt.html",
            },
            {
                name: "無線通訊網路",
                code: "資工三(網路學程必修)、資工碩一",
                type: "必修" as const,
                link: "https://people.csie.ncue.edu.tw/icchang/course/102-wireless/102-wireless.html"
            }
        ],
    },
];

export default function CourseHistoryPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState<"all" | "必修" | "選修">("all");
    const [expandedYear, setExpandedYear] = useState<string | null>(null);

    const filteredData = courseData
        .map(item => ({
            ...item,
            courses: item.courses.filter(course => {
                const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesFilter = filterType === "all" || course.type === filterType;
                return matchesSearch && matchesFilter;
            })
        }))
        .filter(item => item.courses.length > 0);

    const totalCourses = courseData.reduce((acc, item) => acc + item.courses.length, 0);
    const years = [...new Set(courseData.map(item => item.year))].length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50/30 to-gray-50 dark:from-gray-900 dark:via-indigo-950/20 dark:to-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800 py-20">
                <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-white/5 bg-[size:20px_20px]"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl -ml-48 -mt-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 dark:bg-pink-500/10 rounded-full blur-3xl -mr-48 -mb-48"></div>

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
                                    <Calendar className="h-12 w-12 text-white" />
                                </div>
                            </div>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                            歷年課程
                        </h1>
                        <p className="text-xl text-white/90 mb-6">
                            102 學年度 至今的教學紀錄
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <motion.div
                                className="px-5 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 dark:border-white/20"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="text-white text-sm font-medium">{years} 個學年</span>
                            </motion.div>
                            <motion.div
                                className="px-5 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 dark:border-white/20"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span className="text-white text-sm font-medium">累計 {totalCourses} 門課程</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Search & Filter */}
            <div className="container mx-auto px-4 -mt-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-white dark:border-gray-700">
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input
                                        placeholder="搜尋課程名稱..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10 h-12 text-base border-2 focus:border-indigo-400 dark:focus:border-indigo-600"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    {(["all", "必修", "選修"] as const).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setFilterType(type)}
                                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${filterType === type
                                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                                }`}
                                        >
                                            {type === "all" ? "全部" : type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            {/* Timeline */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 transform md:-translate-x-1/2"></div>

                        {filteredData.map((item, index) => (
                            <motion.div
                                key={`${item.year}-${item.semester}`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="relative mb-12"
                            >
                                <div className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                                        <motion.div
                                            className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-4 border-white dark:border-gray-900 shadow-lg"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-12 pl-20" : "md:pl-12 pl-20"}`}>
                                        <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-600 overflow-hidden">
                                            {/* Semester Header */}
                                            <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-700 dark:via-purple-700 dark:to-pink-700 p-5">
                                                <div className="absolute inset-0 bg-grid-white/10 bg-[size:10px_10px]"></div>
                                                <div className="relative flex items-center justify-between">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white drop-shadow">
                                                            {item.year} 學年度
                                                        </h3>
                                                        <p className="text-white/90 text-sm mt-1">
                                                            第 {item.semester} 學期 • {item.courses.length} 門課程
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={() => setExpandedYear(expandedYear === `${item.year}-${item.semester}` ? null : `${item.year}-${item.semester}`)}
                                                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                                    >
                                                        <motion.div
                                                            animate={{ rotate: expandedYear === `${item.year}-${item.semester}` ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <ChevronDown className="h-5 w-5 text-white" />
                                                        </motion.div>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Courses List */}
                                            <AnimatePresence>
                                                {(expandedYear === `${item.year}-${item.semester}` || expandedYear === null) && (
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        animate={{ height: "auto" }}
                                                        exit={{ height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <CardContent className="p-6 bg-white dark:bg-gray-800">
                                                            <div className="space-y-3">
                                                                {item.courses.map((course, courseIndex) => (
                                                                    <motion.a
                                                                        key={courseIndex}
                                                                        href={course.link}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="group/item flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-700/50 dark:to-transparent hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 border-2 border-transparent hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
                                                                        whileHover={{ x: 8, scale: 1.02 }}
                                                                        initial={{ opacity: 0, x: -20 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: courseIndex * 0.1 }}
                                                                    >
                                                                        <div className="flex items-center gap-4 flex-1">
                                                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:shadow-lg transition-shadow">
                                                                                <GraduationCap className="h-5 w-5 text-white" />
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <h4 className="font-semibold text-lg text-gray-900 dark:text-white group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors truncate">
                                                                                    {course.name}
                                                                                </h4>
                                                                                <div className="flex items-center gap-2 mt-1 flex-wrap">
                                                                                    <Badge variant="outline" className="text-xs bg-white dark:bg-gray-800">
                                                                                        {course.code}
                                                                                    </Badge>
                                                                                    <Badge
                                                                                        className={
                                                                                            course.type === "必修"
                                                                                                ? "text-xs bg-red-500 hover:bg-red-600 text-white border-0"
                                                                                                : "text-xs bg-blue-500 hover:bg-blue-600 text-white border-0"
                                                                                        }
                                                                                    >
                                                                                        {course.type}
                                                                                    </Badge>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors flex-shrink-0 ml-2" />
                                                                    </motion.a>
                                                                ))}
                                                            </div>
                                                        </CardContent>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </Card>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
