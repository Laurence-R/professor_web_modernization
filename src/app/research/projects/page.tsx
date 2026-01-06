"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Folder, Calendar, DollarSign, CheckCircle, Clock } from "lucide-react";
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
        const totalBudget = mainProjects.reduce((sum, p) => sum + (p.budget || 0), 0);
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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        研究計畫
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        國科會計畫與大專生專題研究
                    </p>
                </div>

                {/* 統計卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    總計畫數
                                </p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {stats.total}
                                </p>
                            </div>
                            <Folder className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    主持計畫
                                </p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {stats.main}
                                </p>
                            </div>
                            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    指導專題
                                </p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {stats.student}
                                </p>
                            </div>
                            <Clock className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                        </div>
                    </Card>

                    <Card className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                    總經費
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {(stats.totalBudget / 1000000).toFixed(1)}M
                                </p>
                            </div>
                            <DollarSign className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                        </div>
                    </Card>
                </div>

                {/* 篩選按鈕 */}
                <Card className="p-6 mb-8">
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

                {/* 計畫時間軸 */}
                <div className="space-y-12">
                    {projectsByYear.map(([year, projects]) => (
                        <div key={year}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-bold text-xl">
                                    {year}
                                </div>
                                <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
                            </div>

                            <div className="space-y-4 ml-20">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card className="p-6 hover:shadow-lg transition-shadow">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <Badge variant={project.type === "主持計畫" ? "default" : "secondary"}>
                                                            {project.type}
                                                        </Badge>
                                                        <Badge variant={project.status === "執行中" ? "default" : "outline"}>
                                                            {project.status}
                                                        </Badge>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
                        </div>
                    ))}
                </div>

                {/* 獲獎紀錄 */}
                <Card className="mt-12 p-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full">
                            <CheckCircle className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                研究成果獲獎
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                <span className="font-bold underline decoration-2 decoration-blue-600">張英超</span>、戴宏達、葉澧漢、張小徽、謝東霖
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-1">
                                「基於交換即時路況之動態節能路徑規劃演算法設計與 Android 平台上的實作」
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                🏆 2012 全國運輸節能科技應用創意競賽 第一名（2012/07/17）
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
