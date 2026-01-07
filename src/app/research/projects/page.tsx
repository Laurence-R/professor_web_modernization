"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Folder, Calendar, DollarSign, CheckCircle, Clock, Briefcase, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mainProjects, studentProjects } from "@/data/projects";

export default function ProjectsPage() {
    const [selectedType, setSelectedType] = useState<"all" | "主持計畫" | "指導專題">("all");

    const allProjects = [...mainProjects, ...studentProjects];

    const filteredProjects = useMemo(() => {
        if (selectedType === "all") return allProjects;
        return allProjects.filter(p => p.type === selectedType);
    }, [selectedType, allProjects]);

    // 統計資料
    const stats = useMemo(() => {
        const totalBudget = mainProjects.reduce((sum: number, p: any) => sum + (p.budget || 0), 0);
        const ongoing = allProjects.filter(p => p.status === "執行中").length;
        const completed = allProjects.filter(p => p.status === "已結案").length;

        return {
            total: allProjects.length,
            main: mainProjects.length,
            student: studentProjects.length,
            totalBudget,
            ongoing,
            completed
        };
    }, [allProjects]);

    // 按年份分組
    const projectsByYear = useMemo(() => {
        const grouped: { [year: string]: typeof allProjects } = {};

        filteredProjects.forEach(project => {
            const year = project.startDate.split("/")[0];
            if (!grouped[year]) {
                grouped[year] = [];
            }
            grouped[year].push(project);
        });

        return Object.entries(grouped).sort((a, b) => Number(b[0]) - Number(a[0]));
    }, [filteredProjects]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
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
                        <Briefcase className="h-16 w-16 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                        研究計畫
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
                        Research Projects
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        國科會計畫與大專生專題研究
                    </p>
                </motion.div>

                {/* 統計卡片 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-6 border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-lg hover:shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                        總計畫數
                                    </p>
                                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                        {stats.total}
                                    </p>
                                </div>
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                                    <Folder className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, rotate: -1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-6 border-2 hover:border-green-300 dark:hover:border-green-700 transition-all shadow-lg hover:shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                        主持計畫
                                    </p>
                                    <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                                        {stats.main}
                                    </p>
                                </div>
                                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-xl">
                                    <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-6 border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-lg hover:shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                        指導專題
                                    </p>
                                    <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                                        {stats.student}
                                    </p>
                                </div>
                                <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
                                    <Target className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, rotate: -1 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-6 border-2 hover:border-orange-300 dark:hover:border-orange-700 transition-all shadow-lg hover:shadow-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                        總經費
                                    </p>
                                    <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                                        {(stats.totalBudget / 1000000).toFixed(1)}M
                                    </p>
                                </div>
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
                                    <DollarSign className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* 篩選按鈕 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card className="p-6 mb-12 border-2 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                        <div className="flex flex-wrap gap-3">
                            <Button
                                variant={selectedType === "all" ? "default" : "outline"}
                                onClick={() => setSelectedType("all")}
                            >
                                全部計畫 ({stats.total})
                            </Button>
                            <Button
                                variant={selectedType === "主持計畫" ? "default" : "outline"}
                                onClick={() => setSelectedType("主持計畫")}
                            >
                                主持計畫 ({stats.main})
                            </Button>
                            <Button
                                variant={selectedType === "指導專題" ? "default" : "outline"}
                                onClick={() => setSelectedType("指導專題")}
                            >
                                指導專題 ({stats.student})
                            </Button>
                        </div>
                    </Card>
                </motion.div>

                {/* 計畫時間軸 */}
                <div className="space-y-12">
                    {projectsByYear.map(([year, projects]) => (
                        <motion.div
                            key={year}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 text-white font-bold text-xl shadow-lg"
                                >
                                    {year}
                                </motion.div>
                                <div className="flex-1 h-1 bg-gradient-to-r from-green-600 via-emerald-400 to-transparent"></div>
                            </div>

                            <div className="space-y-4 ml-24">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ x: 8, scale: 1.02 }}
                                    >
                                        <Card className="p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-l-green-500 group">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <Badge
                                                            variant={project.type === "主持計畫" ? "default" : "secondary"}
                                                            className={project.type === "主持計畫" ? "bg-gradient-to-r from-green-600 to-emerald-600" : ""}
                                                        >
                                                            {project.type}
                                                        </Badge>
                                                        <Badge
                                                            variant={project.status === "執行中" ? "default" : "outline"}
                                                            className={project.status === "執行中" ? "bg-orange-600 animate-pulse" : ""}
                                                        >
                                                            {project.status}
                                                        </Badge>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                        {project.name}
                                                    </h3>
                                                </div>
                                            </div>

                                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>
                                                        {project.startDate} 至 {project.endDate}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Folder className="h-4 w-4" />
                                                    <span>{project.agency}</span>
                                                </div>
                                                {project.projectNumber && (
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium">計畫編號:</span>
                                                        <span className="font-mono text-xs">
                                                            {project.projectNumber}
                                                        </span>
                                                    </div>
                                                )}
                                                {project.budget && (
                                                    <div className="flex items-center gap-2">
                                                        <DollarSign className="h-4 w-4" />
                                                        <span>
                                                            經費: NT$ {project.budget.toLocaleString()}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
