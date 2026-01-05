"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const publications = [
    {
        title: "Efficient Resource Allocation for 5G Network Slicing",
        authors: "Your Name, Co-Author 1, Co-Author 2",
        venue: "IEEE Transactions on Mobile Computing",
        year: 2024,
        citations: 156,
        type: "Journal",
        links: {
            pdf: "#",
            doi: "https://doi.org/10.1109/example",
        },
        tags: ["5G", "Network Slicing", "Optimization"],
    },
    {
        title: "Secure and Privacy-Preserving Protocol for IoT Networks",
        authors: "Your Name, Co-Author 3, Co-Author 4",
        venue: "ACM MobiCom 2024",
        year: 2024,
        citations: 89,
        type: "Conference",
        links: {
            pdf: "#",
            doi: "https://doi.org/10.1145/example",
        },
        tags: ["IoT", "Security", "Privacy"],
    },
    {
        title: "Machine Learning-Based Network Traffic Prediction",
        authors: "Your Name, Co-Author 5",
        venue: "IEEE Journal on Selected Areas in Communications",
        year: 2023,
        citations: 234,
        type: "Journal",
        links: {
            pdf: "#",
            doi: "https://doi.org/10.1109/example2",
        },
        tags: ["ML", "Traffic Prediction", "QoS"],
    },
];

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

                <div className="max-w-4xl mx-auto space-y-6">
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
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge variant={pub.type === "Journal" ? "default" : "secondary"}>
                                                    {pub.type}
                                                </Badge>
                                                <Badge variant="outline" className="gap-1">
                                                    <Award className="h-3 w-3" />
                                                    {pub.citations} citations
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-xl mb-2 leading-tight">
                                                {pub.title}
                                            </CardTitle>
                                            <CardDescription className="text-base">
                                                {pub.authors}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <FileText className="h-4 w-4" />
                                            <span className="font-medium">{pub.venue}</span>
                                            <span>•</span>
                                            <span>{pub.year}</span>
                                        </div>

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
                                            <Button size="sm" variant="outline" className="gap-2 cursor-pointer">
                                                <ExternalLink className="h-4 w-4" />
                                                DOI
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
                    <Button variant="outline" size="lg" className="cursor-pointer">
                        查看完整著作列表
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
