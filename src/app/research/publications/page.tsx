"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp, FileText, Award, BookOpen, Globe, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { allPublications, type Publication } from "@/data/publications";

export default function PublicationsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState<"all" | "journal" | "international-conference" | "local-conference" | "thesis">("all");
    const [selectedYear, setSelectedYear] = useState<string>("all");
    const [selectedIndex, setSelectedIndex] = useState<string>("all");
    const [expandedId, setExpandedId] = useState<number | null>(null);

    // 提取年份範圍
    const years = useMemo(() => {
        const yearSet = new Set(allPublications.map(p => p.year));
        return Array.from(yearSet).sort((a, b) => b - a);
    }, []);

    // 提取索引類型
    const indexTypes = useMemo(() => {
        const indexSet = new Set<string>();
        allPublications.forEach(p => {
            p.indexes?.forEach(idx => indexSet.add(idx));
        });
        return Array.from(indexSet).sort();
    }, []);

    // 篩選論文
    const filteredPublications = useMemo(() => {
        return allPublications.filter(pub => {
            // 搜尋篩選
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch =
                pub.title.toLowerCase().includes(searchLower) ||
                pub.authors.toLowerCase().includes(searchLower) ||
                pub.venue.toLowerCase().includes(searchLower);

            // 論文類型篩選
            const matchesType = selectedType === "all" || pub.type === selectedType;

            // 年份篩選
            const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;

            // 索引篩選
            const matchesIndex = selectedIndex === "all" || pub.indexes?.includes(selectedIndex);

            return matchesSearch && matchesType && matchesYear && matchesIndex;
        });
    }, [searchTerm, selectedType, selectedYear, selectedIndex]);

    // 統計數據
    const stats = useMemo(() => {
        const journalCount = allPublications.filter(p => p.type === "journal").length;
        const intlConfCount = allPublications.filter(p => p.type === "international-conference").length;
        const localConfCount = allPublications.filter(p => p.type === "local-conference").length;
        const thesisCount = allPublications.filter(p => p.type === "thesis").length;
        const sciCount = allPublications.filter(p =>
            p.indexes?.some(idx => idx === "SCI" || idx === "SCIE")
        ).length;
        const eiCount = allPublications.filter(p =>
            p.indexes?.includes("EI")
        ).length;

        return {
            total: allPublications.length,
            journal: journalCount,
            intlConf: intlConfCount,
            localConf: localConfCount,
            thesis: thesisCount,
            sci: sciCount,
            ei: eiCount,
            years: `${Math.min(...years)} - ${Math.max(...years)}`
        };
    }, [years]);

    // 高亮顯示張英超
    const highlightAuthor = (authors: string) => {
        const parts = authors.split(/(Ing-Chau Chang|張英超|I\.C Chang)/gi);
        return parts.map((part, index) => {
            if (part.match(/(Ing-Chau Chang|張英超|I\.C Chang)/i)) {
                return (
                    <span key={index} className="font-bold underline decoration-2 decoration-blue-600 dark:decoration-blue-400">
                        {part}
                    </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
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
                        <BookOpen className="h-16 w-16 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        論文著作
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
                        Publications
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        期刊論文、國際會議論文與國內會議論文集
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 max-w-2xl mx-auto"
                    >
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                                💡 <span className="font-medium">完整資料查詢：</span>
                                本頁面僅展示教授完成之論文。如需查看完整論文內容，請前往
                                <a
                                    href="https://ieeexplore.ieee.org/author/37640555800"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-1"
                                >
                                    IEEE Xplore
                                </a>
                                、
                                <a
                                    href="https://scholar.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium mx-1"
                                >
                                    Google Scholar
                                </a>
                                或其他學術資料庫查詢。
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 統計卡片 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
                >
                    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-4 text-center border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-lg hover:shadow-xl">
                            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                總論文數
                            </p>
                            <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                                {stats.total}
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-4 text-center border-2 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-lg hover:shadow-xl">
                            <Award className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                期刊論文
                            </p>
                            <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                                {stats.journal}
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-4 text-center border-2 hover:border-green-300 dark:hover:border-green-700 transition-all shadow-lg hover:shadow-xl">
                            <Globe className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                國際會議
                            </p>
                            <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                                {stats.intlConf}
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-4 text-center border-2 hover:border-purple-300 dark:hover:border-purple-700 transition-all shadow-lg hover:shadow-xl">
                            <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                國內會議
                            </p>
                            <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                                {stats.localConf}
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-4 text-center border-2 hover:border-orange-300 dark:hover:border-orange-700 transition-all shadow-lg hover:shadow-xl">
                            <Award className="h-5 w-5 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                SCI/SCIE
                            </p>
                            <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                                {stats.sci}
                            </p>
                        </Card>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="p-4 text-center border-2 hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-lg hover:shadow-xl">
                            <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                研究年限
                            </p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                                {stats.years}
                            </p>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* 搜尋與篩選 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card className="p-6 mb-8 border-2 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                        <div className="space-y-4">
                            {/* 搜尋框 */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="搜尋標題、作者或期刊名稱..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>

                            {/* 篩選按鈕 */}
                            <div className="flex flex-wrap gap-3">
                                {/* 論文類型篩選 */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">類型:</span>
                                    <select
                                        value={selectedType}
                                        onChange={(e) => setSelectedType(e.target.value as any)}
                                        className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
                                    >
                                        <option value="all">全部類型</option>
                                        <option value="journal">期刊論文</option>
                                        <option value="international-conference">國際會議</option>
                                        <option value="local-conference">國內會議</option>
                                        <option value="thesis">學位論文</option>
                                    </select>
                                </div>

                                {/* 年份篩選 */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">年份:</span>
                                    <select
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
                                    >
                                        <option value="all">全部</option>
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* 索引篩選 */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">索引:</span>
                                    <select
                                        value={selectedIndex}
                                        onChange={(e) => setSelectedIndex(e.target.value)}
                                        className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
                                    >
                                        <option value="all">全部</option>
                                        {indexTypes.map(idx => (
                                            <option key={idx} value={idx}>{idx}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* 重置按鈕 */}
                                {(searchTerm || selectedType !== "all" || selectedYear !== "all" || selectedIndex !== "all") && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedType("all");
                                            setSelectedYear("all");
                                            setSelectedIndex("all");
                                        }}
                                    >
                                        重置篩選
                                    </Button>
                                )}
                            </div>

                            {/* 結果數量 */}
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                顯示 {filteredPublications.length} / {stats.total} 篇論文
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* 論文列表 */}
                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filteredPublications.map((pub, index) => (
                            <motion.div
                                key={pub.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, delay: index * 0.02 }}
                            >
                                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        {/* 論文標題與年份 */}
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                                        [{pub.id}]
                                                    </span>
                                                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                                        {pub.year}
                                                    </span>
                                                    {pub.indexes && pub.indexes.map(idx => (
                                                        <Badge key={idx} variant="secondary" className="text-xs">
                                                            {idx}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                    {pub.title}
                                                </h3>
                                            </div>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                                            >
                                                {expandedId === pub.id ? (
                                                    <ChevronUp className="h-5 w-5" />
                                                ) : (
                                                    <ChevronDown className="h-5 w-5" />
                                                )}
                                            </Button>
                                        </div>

                                        {/* 作者 */}
                                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                            {highlightAuthor(pub.authors)}
                                        </p>

                                        {/* 期刊/會議資訊 */}
                                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                            {pub.venue}
                                            {pub.volume && `, Vol.${pub.volume}`}
                                            {pub.issue && `, No.${pub.issue}`}
                                            {pub.pages && `, pp.${pub.pages}`}
                                            {pub.publisher && `, ${pub.publisher}`}
                                        </p>

                                        {/* 展開的詳細資訊 */}
                                        <AnimatePresence>
                                            {expandedId === pub.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                                                >
                                                    <div className="space-y-2 text-sm">
                                                        {pub.impactFactor && (
                                                            <div className="flex gap-2">
                                                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                                                    Impact Factor:
                                                                </span>
                                                                <span className="text-gray-600 dark:text-gray-400">
                                                                    {pub.impactFactor}
                                                                </span>
                                                            </div>
                                                        )}
                                                        {pub.rank && (
                                                            <div className="flex gap-2">
                                                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                                                    Rank:
                                                                </span>
                                                                <span className="text-gray-600 dark:text-gray-400">
                                                                    {pub.rank}
                                                                </span>
                                                            </div>
                                                        )}
                                                        {pub.nscProject && (
                                                            <div className="flex gap-2">
                                                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                                                    國科會計畫:
                                                                </span>
                                                                <span className="text-gray-600 dark:text-gray-400">
                                                                    {pub.nscProject}
                                                                </span>
                                                            </div>
                                                        )}
                                                        {pub.doi && (
                                                            <div className="flex gap-2">
                                                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                                                    DOI:
                                                                </span>
                                                                <a
                                                                    href={pub.doi}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                                >
                                                                    {pub.doi}
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* 無結果提示 */}
                {
                    filteredPublications.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400">
                                沒有找到符合條件的論文
                            </p>
                        </div>
                    )
                }
            </div >
        </div >
    );
}
