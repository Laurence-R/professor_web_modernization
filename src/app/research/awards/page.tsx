"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Users, Sparkles, Medal, Star, Crown, Gift, Target, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { personalAwards, studentAwards, bestPaperAwards, allAwards } from "@/data/awards";

export default function AwardsPage() {
    return (
        <div className="min-h-screen py-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Floating Award Icons Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10 dark:opacity-5">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10"
                >
                    <Trophy className="h-24 w-24 text-yellow-500" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-20"
                >
                    <Medal className="h-32 w-32 text-orange-500" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 left-1/4"
                >
                    <Star className="h-28 w-28 text-amber-500" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute bottom-40 right-1/3"
                >
                    <Award className="h-36 w-36 text-yellow-600" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -18, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute top-1/2 right-10"
                >
                    <Crown className="h-20 w-20 text-amber-600" />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                        className="inline-block mb-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <Trophy className="h-20 w-20 text-amber-600 dark:text-amber-400 relative z-10" />
                        </div>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
                        榮譽與獎項
                        <span className="block text-2xl md:text-3xl bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-500 bg-clip-text text-transparent font-normal mt-2">
                            Honors & Awards
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto flex items-center justify-center gap-2">
                        <Sparkles className="h-5 w-5 text-amber-500" />
                        學術研究與教學卓越的肯定
                        <Sparkles className="h-5 w-5 text-amber-500" />
                    </p>
                </motion.div>

                {/* Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="relative overflow-hidden border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full"></div>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                                        <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    總獎項數
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                    {allAwards.length}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Total Awards</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="relative overflow-hidden border-2 border-green-200 dark:border-green-800 shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-full"></div>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                                        <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    個人獎項
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                                    {personalAwards.length}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Personal Honors</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="relative overflow-hidden border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-bl-full"></div>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                                        <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    指導學生獎項
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                                    {studentAwards.length}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Student Awards</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="relative overflow-hidden border-2 border-orange-200 dark:border-orange-800 shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full"></div>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                    <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                                        <Trophy className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    最佳論文獎
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                                    {bestPaperAwards.length}
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Best Paper Awards</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Personal Awards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                            <Award className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                個人獎項
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Personal Honors</p>
                        </div>
                        <div className="flex-1"></div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Medal className="h-8 w-8 text-green-500 opacity-30" />
                        </motion.div>
                    </div>
                    <Separator className="mb-6 bg-gradient-to-r from-transparent via-green-300 to-transparent h-0.5" />
                    <div className="space-y-4">
                        {personalAwards.map((award, index) => (
                            <motion.div
                                key={award.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.05 * index }}
                                whileHover={{ x: 8, scale: 1.02 }}
                            >
                                <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1 flex items-start gap-3">
                                                <div className="mt-1">
                                                    <Star className="h-5 w-5 text-green-600 dark:text-green-400" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                        {award.title}
                                                    </CardTitle>
                                                    <CardDescription>
                                                        {award.organization}
                                                        {award.description && ` • ${award.description}`}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="shrink-0 border-green-300 dark:border-green-700">
                                                {award.year}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Student Awards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl shadow-lg">
                            <Users className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                指導學生獎項
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Student Achievements</p>
                        </div>
                        <div className="flex-1"></div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Target className="h-8 w-8 text-purple-500 opacity-30" />
                        </motion.div>
                    </div>
                    <Separator className="mb-6 bg-gradient-to-r from-transparent via-purple-300 to-transparent h-0.5" />
                    <div className="space-y-4">
                        {studentAwards.map((award, index) => (
                            <motion.div
                                key={award.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.05 * index }}
                                whileHover={{ x: 8, scale: 1.02 }}
                            >
                                <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1 flex items-start gap-3">
                                                <div className="mt-1">
                                                    <Gift className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                        {award.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-sm">
                                                        {award.organization}
                                                    </CardDescription>
                                                    {award.description && (
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                            {award.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="shrink-0 border-purple-300 dark:border-purple-700">
                                                {award.year}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Best Paper Awards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-lg relative">
                            <Trophy className="h-8 w-8 text-white relative z-10" />
                            <motion.div
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-orange-400 rounded-xl opacity-30"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                最佳論文獎
                            </h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Best Paper Awards</p>
                        </div>
                        <div className="flex-1"></div>
                        <motion.div
                            animate={{ rotate: [0, 20, 0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Zap className="h-8 w-8 text-orange-500 opacity-30" />
                        </motion.div>
                    </div>
                    <Separator className="mb-6 bg-gradient-to-r from-transparent via-orange-300 to-transparent h-0.5" />
                    <div className="space-y-4">
                        {bestPaperAwards.map((award, index) => (
                            <motion.div
                                key={award.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.05 * index }}
                                whileHover={{ x: 8, scale: 1.02 }}
                            >
                                <Card className="hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-500 group relative overflow-hidden bg-gradient-to-r from-orange-50/50 to-white dark:from-orange-900/10 dark:to-gray-800">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Trophy className="h-24 w-24 text-orange-500 transform rotate-12" />
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1 flex items-start gap-3">
                                                <div className="mt-1 relative">
                                                    <div className="absolute inset-0 bg-orange-400 rounded-full blur-md opacity-50"></div>
                                                    <Crown className="h-6 w-6 text-orange-600 dark:text-orange-400 relative z-10" />
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-bold">
                                                        {award.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-sm font-medium">
                                                        {award.organization}
                                                    </CardDescription>
                                                    {award.description && (
                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                                            {award.description}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <Badge className="shrink-0 bg-gradient-to-r from-orange-600 to-amber-600 text-white border-0 shadow-md">
                                                    {award.year}
                                                </Badge>
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                                >
                                                    <Medal className="h-5 w-5 text-orange-500" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
