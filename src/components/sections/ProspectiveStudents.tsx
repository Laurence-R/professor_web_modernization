"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, CheckCircle2, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const openings = [
    {
        icon: GraduationCap,
        title: "碩士生",
        status: "開放招收",
        available: true,
        spots: "2-3 名",
        description: "歡迎對無線網路、行動通訊或物聯網有興趣的同學加入",
    },
    {
        icon: Users,
        title: "博士生",
        status: "開放招收",
        available: true,
        spots: "1 名",
        description: "尋找有研究熱忱、願意深入探索前沿技術的優秀學生",
    },
    {
        icon: Briefcase,
        title: "專題生",
        status: "名額有限",
        available: true,
        spots: "視情況而定",
        description: "大學部同學可先參與專題研究，了解實驗室研究方向",
    },
];

const requirements = [
    "具備程式設計基礎（C/C++, Python 等）",
    "熟悉 Linux 作業系統操作",
    "對網路協定或系統設計有興趣",
    "良好的英文閱讀能力",
    "主動學習、積極溝通",
    "具團隊合作精神",
];

export function ProspectiveStudents() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        招生資訊
                        <span className="block text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-normal mt-2">
                            Prospective Students
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        歡迎有志於網路研究的同學加入我們的實驗室
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Current Openings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        {openings.map((opening, index) => (
                            <Card
                                key={index}
                                className={`text-center ${opening.available
                                    ? "border-2 border-green-300 dark:border-green-700"
                                    : "border-2 border-gray-300 dark:border-gray-700"
                                    }`}
                            >
                                <CardHeader>
                                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                                        <opening.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <CardTitle className="text-xl">{opening.title}</CardTitle>
                                    <CardDescription>
                                        <Badge
                                            variant={opening.available ? "default" : "secondary"}
                                            className="mt-2"
                                        >
                                            {opening.status}
                                        </Badge>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <p className="font-semibold text-blue-600 dark:text-blue-400">
                                            {opening.spots}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {opening.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </motion.div>

                    {/* Requirements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-2">
                            <CardHeader>
                                <CardTitle className="text-2xl">期望能力與特質</CardTitle>
                                <CardDescription className="text-base">
                                    以下條件非必要，但具備這些能力將有助於快速融入研究工作
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {requirements.map((req, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300">{req}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4">有興趣加入嗎？</h3>
                                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                    如果你對我們的研究方向有興趣，歡迎寄送履歷與成績單至我的信箱。<br />
                                    也歡迎先約時間來實驗室參觀，了解我們的研究環境與方向。
                                </p>
                                <Button size="lg" variant="secondary" className="gap-2 cursor-pointer" asChild>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=icchang@cc.ncue.edu.tw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Mail className="h-5 w-5" />
                                        立即聯絡
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
