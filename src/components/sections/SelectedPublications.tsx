"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Award } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const publications = [
    {
        title: "HCoP-B: A Hierarchical Care-of Prefix with BUT Scheme for Nested Mobile Networks",
        authors: "Ing-Chau Chang and Chia-Hao Chou",
        venue: "IEEE Trans. on Vehicular Technology",
        volume: "58",
        issue: "6",
        pages: "2942-2965",
        year: 2009,
        impactFactor: "7.1",
        rank: "41/368, Q1 (Telecommunications)",
        type: "Journal",
        indexes: ["SCI"],
        nscProject: "NSC96-2221-E-018-009",
        links: {
            pdf: "#",
            doi: "#",
        },
        tags: ["NEMO", "Nested Mobile Networks", "Handoff", "Telecommunications"],
    },
];

// 高亮作者名稱
const highlightAuthor = (authors: string) => {
    const parts = authors.split(/(Ing-Chau Chang|張英超)/gi);
    return parts.map((part, index) => {
        if (part.match(/(Ing-Chau Chang|張英超)/i)) {
            return (
                <span key={index} className="font-bold underline decoration-2 decoration-blue-600 dark:decoration-blue-400">
                    {part}
                </span>
            );
        }
        return <span key={index}>{part}</span>;
    });
};

export function SelectedPublications() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        代表性著作
                        <span className="block text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-normal mt-2">
                            Selected Publications
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        精選高影響力研究論文與學術貢獻
                    </p>
                </motion.div>

                <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <Badge variant="default">
                                            期刊論文
                                        </Badge>
                                        {pub.indexes?.map((idx, i) => (
                                            <Badge key={i} variant="outline" className="gap-1">
                                                <Award className="h-3 w-3" />
                                                {idx}
                                            </Badge>
                                        ))}
                                        {pub.impactFactor && (
                                            <Badge variant="destructive" className="gap-1">
                                                IF: {pub.impactFactor}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-xl mb-2 leading-tight">
                                        {pub.title}
                                    </CardTitle>
                                    <CardDescription className="text-base">
                                        {highlightAuthor(pub.authors)}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <FileText className="h-4 w-4" />
                                            <span className="font-medium">{pub.venue}</span>
                                            {pub.volume && (
                                                <>
                                                    <span>•</span>
                                                    <span>Vol.{pub.volume}, No.{pub.issue}</span>
                                                </>
                                            )}
                                            {pub.pages && (
                                                <>
                                                    <span>•</span>
                                                    <span>pp.{pub.pages}</span>
                                                </>
                                            )}
                                            <span>•</span>
                                            <span>{pub.year}</span>
                                        </div>

                                        {pub.rank && (
                                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                                <span className="font-medium">Rank:</span> {pub.rank}
                                            </div>
                                        )}

                                        {pub.nscProject && (
                                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                                <span className="font-medium">國科會計畫:</span> {pub.nscProject}
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-2">
                                            {pub.tags.map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex gap-2">
                                            <Button size="sm" variant="default" className="gap-2 cursor-pointer">
                                                <FileText className="h-4 w-4" />
                                                PDF
                                            </Button>
                                            <Button size="sm" variant="outline" className="gap-2 cursor-pointer" asChild>
                                                <a
                                                    href="https://ieeexplore.ieee.org/document/4711130"
                                                    target="_blank"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    DOI
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link href="/research/publications">
                        <Button variant="outline" size="lg" className="cursor-pointer">
                            查看完整著作列表
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
