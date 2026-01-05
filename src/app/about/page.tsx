"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Heart, Music, Book, Camera, Mail, MapPin, Phone, Mountain, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const educationHistory = [
    {
        degree: "博士",
        field: "資訊工程研究所",
        school: "國立台灣大學",
        year: "1992/09 - 1997/06",
    },
    {
        degree: "碩士",
        field: "資訊工程研究所",
        school: "國立台灣大學",
        year: "1990/09 - 1992/06",
    },
    {
        degree: "學士",
        field: "資訊科學系",
        school: "國立交通大學",
        year: "1986/09 - 1990/06",
    },
];

const workExperience = [
    {
        position: "教授",
        department: "國立彰化師範大學 資訊工程學系",
        year: "2014/02 - 現在",
    },
    {
        position: "副教授",
        department: "國立彰化師範大學 資訊工程學系",
        year: "2006/08 - 2014/01",
    },
    {
        position: "助理教授",
        department: "國立彰化師範大學 資訊工程學系",
        year: "2003/08 - 2006/07",
    },
    {
        position: "助理教授",
        department: "朝陽科技大學 資訊管理系",
        year: "1997/08 - 2003/07",
    },
];

const interests = [
    { icon: Mountain, title: "登山健行", description: "享受大自然與山林之美" },
    { icon: Camera, title: "攝影", description: "記錄生活中的美好瞬間" },
    { icon: Heart, title: "旅行", description: "探索不同文化與風景" },
    { icon: Palette, title: "籃球", description: "熱愛運動與團隊合作" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                關於我
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                                學經歷、研究興趣與聯絡方式
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                在學術研究的道路上，我致力於無線網路與行動通訊領域的創新與發展。
                                透過教學與研究，期望能培養更多優秀的資訊人才，並為科技進步貢獻一己之力。
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/icc_photo_2.jpg"
                                        alt="張英超教授"
                                        width={600}
                                        height={800}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 space-y-20">
                {/* 學經歷 Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    id="education"
                >
                    <div className="flex items-center gap-3 mb-12">
                        <GraduationCap className="h-8 w-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            學經歷
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* 學歷 Timeline */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-blue-600" />
                                學歷
                            </h3>
                            <div className="space-y-4">
                                {educationHistory.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                        className="relative pl-8 pb-4 border-l-2 border-blue-200 dark:border-blue-800 group cursor-pointer"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-200"></div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {edu.degree}
                                                </h4>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {edu.field}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                                {edu.school}
                                            </p>
                                            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                                                {edu.year}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* 工作經歷 Timeline */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-purple-600" />
                                教學經歷
                            </h3>
                            <div className="space-y-4">
                                {workExperience.map((work, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                        className="relative pl-8 pb-4 border-l-2 border-purple-200 dark:border-purple-800 group cursor-pointer"
                                    >
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600 group-hover:scale-125 transition-transform duration-200"></div>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {work.position}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {work.department}
                                            </p>
                                            <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                                                {work.year}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                <Separator />

                {/* 興趣 Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    id="interests"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Heart className="h-8 w-8 text-red-600" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            個人興趣
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="pt-6">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                            <interest.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                                            {interest.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {interest.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <Separator />

                {/* 聯絡方式 Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    id="contact"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Mail className="h-8 w-8 text-green-600" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            聯絡方式
                        </h2>
                    </div>

                    <Card className="max-w-2xl mx-auto">
                        <CardContent className="pt-6 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        電子郵件
                                    </h3>
                                    <a
                                        href="mailto:icchang@cc.ncue.edu.tw"
                                        className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        icchang@cc.ncue.edu.tw
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        辦公室
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        國立彰化師範大學 寶山校區<br />
                                        工學院大樓 E136
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        實驗室
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        無線與行動網路實驗室<br />
                                        工學院大樓 E114
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        電話
                                    </h3>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            辦公室：04-7232105 ext.8427
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            實驗室：04-7232105 ext.8414
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>
            </div >
        </div >
    );
}
