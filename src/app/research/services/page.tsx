"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    educationCourses,
    reviewServices,
    thesisCommittee,
    projectReview,
    otherServices,
    allServices
} from "@/data/services";
import {
    BookOpen,
    FileCheck,
    Trophy,
    Briefcase,
    GraduationCap,
    Star,
    Award
} from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                        className="inline-block mb-6"
                    >
                        <Award className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                        學術服務
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
                        Academic Services
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        論文審查、教育課程、口試委員與專題評審
                    </p>
                </motion.div>

                {/* Statistics Dashboard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
                >
                    <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-lg hover:shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">總計</CardTitle>
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                                    <Briefcase className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                                    {allServices.length}
                                </div>
                                <p className="text-xs text-muted-foreground">學術服務項目</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, rotate: -1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-lg hover:shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">教育部課程</CardTitle>
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                    {educationCourses.length}
                                </div>
                                <p className="text-xs text-muted-foreground">課程計畫</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="border-2 hover:border-green-300 dark:hover:border-green-700 transition-all shadow-lg hover:shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">論文審查</CardTitle>
                                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                                    <FileCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                                    {reviewServices.length}
                                </div>
                                <p className="text-xs text-muted-foreground">審查服務</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, rotate: -1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="border-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-lg hover:shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">口試委員</CardTitle>
                                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                                    <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                                    {thesisCommittee.length}
                                </div>
                                <p className="text-xs text-muted-foreground">學位口試</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="border-2 hover:border-orange-300 dark:hover:border-orange-700 transition-all shadow-lg hover:shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">專題評審</CardTitle>
                                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                                    <Trophy className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                                    {projectReview.length}
                                </div>
                                <p className="text-xs text-muted-foreground">評審項目</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Education Courses Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <motion.div
                            className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </motion.div>
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">教育部課程計畫</h2>
                            <p className="text-sm text-muted-foreground">Ministry of Education Course Programs</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {educationCourses.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <Card className="border-l-4 border-l-blue-500 hover:shadow-xl transition-all hover:border-blue-400 h-full">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                                            {service.year && (
                                                <Badge variant="outline" className="ml-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border-blue-300">
                                                    {service.year}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {service.organization && (
                                            <p className="text-sm text-muted-foreground mb-2">
                                                <strong>機構：</strong>{service.organization}
                                            </p>
                                        )}
                                        {service.description && (
                                            <p className="text-sm text-muted-foreground">
                                                {service.description}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Review Services Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <motion.div
                            className="p-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-xl"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <FileCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </motion.div>
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">論文審查與評審服務</h2>
                            <p className="text-sm text-muted-foreground">Peer Review Services</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        {reviewServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                                whileHover={{ scale: 1.02, x: 8 }}
                            >
                                <Card className="border-l-4 border-l-green-500 hover:shadow-xl transition-all hover:border-green-400">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg group-hover:text-green-600 transition-colors">{service.title}</CardTitle>
                                            <Badge className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all">
                                                {service.type}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {service.organization && (
                                            <p className="text-sm text-muted-foreground mb-2">
                                                <strong>機構：</strong>{service.organization}
                                            </p>
                                        )}
                                        {service.description && (
                                            <p className="text-sm">
                                                {service.description}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Thesis Committee Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <motion.div
                            className="p-3 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/50 rounded-xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </motion.div>
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">學位口試委員</h2>
                            <p className="text-sm text-muted-foreground">Thesis Defense Committee</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {thesisCommittee.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <Card className="border-l-4 border-l-indigo-500 hover:shadow-xl transition-all hover:border-indigo-400 h-full">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">{service.title}</CardTitle>
                                            <Badge variant="secondary" className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 text-indigo-700 dark:text-indigo-300 border border-indigo-300">
                                                口試委員
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {service.organization && (
                                            <p className="text-sm text-muted-foreground mb-2">
                                                <strong>學校：</strong>{service.organization}
                                            </p>
                                        )}
                                        {service.description && (
                                            <p className="text-sm text-muted-foreground">
                                                {service.description}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Project Review Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <motion.div
                            className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 rounded-xl"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <Trophy className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </motion.div>
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">專題競賽與成果評審</h2>
                            <p className="text-sm text-muted-foreground">Project Competition Review</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectReview.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <Card className="border-l-4 border-l-orange-500 hover:shadow-xl transition-all hover:border-orange-400 h-full">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">{service.title}</CardTitle>
                                            {service.year && (
                                                <Badge variant="outline" className="ml-2 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-700 dark:text-orange-300 border-orange-300">
                                                    {service.year}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {service.organization && (
                                            <p className="text-sm text-muted-foreground mb-2">
                                                <strong>機構：</strong>{service.organization}
                                            </p>
                                        )}
                                        {service.description && (
                                            <p className="text-sm text-muted-foreground">
                                                {service.description}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Other Services Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <motion.div
                            className="p-3 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/50 dark:to-pink-800/50 rounded-xl"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <Star className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                        </motion.div>
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">其他學術服務</h2>
                            <p className="text-sm text-muted-foreground">Other Academic Services</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {otherServices.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                            >
                                <Card className="border-l-4 border-l-pink-500 hover:shadow-xl transition-all hover:border-pink-400 h-full">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg group-hover:text-pink-600 transition-colors">{service.title}</CardTitle>
                                            {service.year && (
                                                <Badge variant="outline" className="ml-2 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 text-pink-700 dark:text-pink-300 border-pink-300">
                                                    {service.year}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {service.organization && (
                                            <p className="text-sm text-muted-foreground mb-2">
                                                <strong>機構：</strong>{service.organization}
                                            </p>
                                        )}
                                        {service.description && (
                                            <p className="text-sm text-muted-foreground">
                                                {service.description}
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}
