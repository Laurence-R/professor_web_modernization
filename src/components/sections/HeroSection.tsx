"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, BookOpen, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left side - Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                                    教授 Professor
                                </p>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                            >
                                張英超
                                <span className="block text-blue-600 dark:text-blue-400 mt-2">
                                    Ing-Chau Chang
                                </span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-3"
                        >
                            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                                國立彰化師範大學 資訊工程學系
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed border-l-4 border-blue-600 pl-4"
                        >
                            致力於智慧車聯網技術與創新應用之研究與發展。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Button size="lg" className="gap-2 cursor-pointer" asChild>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=icchang@cc.ncue.edu.tw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail className="h-4 w-4" />
                                    Email 聯絡
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2 cursor-pointer" asChild>
                                <a
                                    href="https://ieeexplore.ieee.org/author/37640555800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <Image
                                        src="/IEEE_logo.svg"
                                        alt="IEEE"
                                        width={30}
                                        height={30}
                                        className="h-8 w-8"
                                    />
                                    IEEE Xplore
                                </a>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600 dark:text-gray-400"
                        >
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>icchang@cc.ncue.edu.tw</span>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <MapPin className="h-4 w-4" />
                                <span>研究室：寶山校區 工學院大樓 E136</span>

                            </div>
                            <div className="flex items-center gap-2 ">
                                <MapPin className="h-4 w-4" />
                                <span>實驗室：無線與行動網路實驗室 E114</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative max-w-md mx-auto" style={{ aspectRatio: '600/800' }}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-full">
                                <Image
                                    src="/images/icc_photo.jpg"
                                    alt="張英超教授"
                                    fill
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Statistics Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                >
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">論文著作</CardTitle>
                            <BookOpen className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">182</div>
                            <p className="text-xs text-muted-foreground">學術出版品</p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">研究計畫</CardTitle>
                            <Briefcase className="h-4 w-4 text-green-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">43</div>
                            <p className="text-xs text-muted-foreground">主持與參與計畫</p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">榮譽與獎項</CardTitle>
                            <Award className="h-4 w-4 text-purple-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">43</div>
                            <p className="text-xs text-muted-foreground">個人與指導學生獲獎</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
