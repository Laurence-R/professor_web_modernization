"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Users,
    Wifi,
    Award,
    BookOpen,
    Target,
    Lightbulb,
    GraduationCap,
    Briefcase,
    MapPin,
    Mail,
    Globe,
    Cpu,
    Network,
    Zap
} from "lucide-react";

export default function LabPage() {
    const features = [
        {
            icon: Lightbulb,
            title: "創新研究導向",
            description: "追求前沿技術突破，發表高影響力國際論文",
            color: "from-yellow-500 to-orange-500"
        },
        {
            icon: Users,
            title: "團隊協作文化",
            description: "鼓勵跨域合作，培養獨立研究與團隊精神",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Target,
            title: "理論實務並重",
            description: "從協定設計到系統實作，完整研發流程",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Award,
            title: "卓越研究成果",
            description: "IEEE TVT、JMIR、Computers 等頂尖期刊論文",
            color: "from-purple-500 to-pink-500"
        }
    ];

    const researchTopics = [
        {
            icon: Cpu,
            title: "深度學習與人工智慧",
            items: [
                "深度強化學習 (DRL) 應用於資源分配",
                "自注意力機制 (Self-Attention) 多任務學習",
                "元強化學習 (Meta-RL) 策略設計",
                "電腦視覺與影像識別應用"
            ],
            color: "text-orange-600 dark:text-orange-400"
        },
        {
            icon: Network,
            title: "車聯網與智慧交通",
            items: [
                "VANET 路由協定與通訊架構",
                "V2V/V2I 車輛通訊技術",
                "GPS 導航系統與共乘協定",
                "交通資訊散佈與延遲容忍網路"
            ],
            color: "text-blue-600 dark:text-blue-400"
        },
        {
            icon: Wifi,
            title: "行動網路與無線通訊",
            items: [
                "巢狀行動網路 (NEMO) 架構",
                "HCoP-B 快速切換機制",
                "Mobile IP 與異質網路整合",
                "垂直切換與跨層設計"
            ],
            color: "text-purple-600 dark:text-purple-400"
        },
        {
            icon: Zap,
            title: "雲端與邊緣計算",
            items: [
                "任務卸載 (Task Offloading) 策略",
                "邊緣計算資源分配最佳化",
                "多準則決策系統設計",
                "分散式計算環境管理"
            ],
            color: "text-green-600 dark:text-green-400"
        }
    ];

    const achievements = [
        {
            number: "182",
            label: "學術論文",
            description: "期刊與會議論文"
        },
        {
            number: "51",
            label: "期刊論文",
            description: "SCI/SCOPUS 收錄"
        },
        {
            number: "43",
            label: "研究計畫",
            description: "NSTC/NSC 計畫"
        },
        {
            number: "43",
            label: "榮譽獎項",
            description: "個人與指導學生"
        }
    ];

    const labInfo = {
        location: "國立彰化師範大學 寶山校區 工學院大樓 E114",
        director: "張英超 教授",
        email: "icchang@cc.ncue.edu.tw",
        focus: "車聯網、人工智慧、行動計算、無線網路"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
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
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <Wifi className="h-20 w-20 text-blue-600 dark:text-blue-400 relative z-10" />
                        </div>
                    </motion.div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        無線與行動網路實驗室
                    </h1>
                    <p className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
                        Wireless and Mobile Networks Laboratory
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        探索無線通訊與智慧網路的創新技術，培育新世代網路工程人才
                    </p>
                </motion.div>

                {/* 實驗室簡介 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-16"
                >
                    <Card className="p-8 border-2 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur">
                        <div className="flex items-center gap-3 mb-6">
                            <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                關於實驗室
                            </h2>
                        </div>
                        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p className="text-lg">
                                無線與行動網路實驗室成立於<strong className="text-blue-600 dark:text-blue-400">國立彰化師範大學資訊工程學系</strong>，
                                由<strong className="text-blue-600 dark:text-blue-400">張英超教授</strong>主持，專注於前沿網路技術的研究與創新應用開發。
                            </p>
                            <p>
                                實驗室研究範疇涵蓋<strong>車聯網 (Vehicular Networks)</strong>、<strong>人工智慧 (AI/Deep Learning)</strong>、
                                <strong>行動計算 (Mobile Computing)</strong>、<strong>邊緣計算 (Edge Computing)</strong>、
                                <strong>無線網路 (Wireless Networks)</strong> 等多個領域，致力於解決下世代網路通訊的關鍵技術挑戰。
                            </p>
                            <p>
                                超過 <strong className="text-blue-600 dark:text-blue-400">30 年</strong> 的研究經驗，
                                實驗室已發表 <strong className="text-blue-600 dark:text-blue-400">182 篇</strong> 學術論文，
                                執行 <strong className="text-blue-600 dark:text-blue-400">43 項</strong> 國科會/科技部研究計畫，
                                培育眾多碩博士研究生，多位畢業生已在學術界與產業界擔任重要職位。
                            </p>
                        </div>
                    </Card>
                </motion.div>

                {/* 研究特色 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        實驗室特色
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                >
                                    <Card className="h-full text-center p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-700">
                                        <div className="flex justify-center mb-4">
                                            <div className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg`}>
                                                <IconComponent className="h-8 w-8 text-white" />
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* 主要研究主題 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        主要研究主題
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {researchTopics.map((topic, index) => {
                            const IconComponent = topic.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                >
                                    <Card className="h-full p-6 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg ${topic.color}`}>
                                                <IconComponent className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {topic.title}
                                            </h3>
                                        </div>
                                        <Separator className="mb-4" />
                                        <ul className="space-y-2">
                                            {topic.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <Badge variant="outline" className="shrink-0 h-5 w-5 p-0 flex items-center justify-center">
                                                        {i + 1}
                                                    </Badge>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* 研究成果統計 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        研究成果
                    </h2>
                    <Card className="p-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white shadow-2xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="text-center"
                                >
                                    <div className="text-5xl font-bold mb-2">{achievement.number}</div>
                                    <div className="text-lg font-semibold mb-1">{achievement.label}</div>
                                    <div className="text-sm opacity-80">{achievement.description}</div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* 代表性研究成果 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                        代表性研究成果
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-3 mb-3">
                                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                                        HCoP-B 快速切換機制
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        發表於 IEEE Transactions on Vehicular Technology (IF=7.1, Q1)
                                    </p>
                                    <Badge className="bg-blue-600">高引用論文</Badge>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-3 mb-3">
                                <Cpu className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                                        深度強化學習任務卸載
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        車聯網多準則決策與資源最佳化研究
                                    </p>
                                    <Badge className="bg-green-600">最新研究</Badge>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-3 mb-3">
                                <Network className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                                        車載網路路由協定
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        VANET、DTN、GPS 導航與交通資訊系統
                                    </p>
                                    <Badge className="bg-purple-600">應用導向</Badge>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-3 mb-3">
                                <Zap className="h-6 w-6 text-orange-600 dark:text-orange-400 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                                        邊緣計算最佳化
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        自注意力機制元強化學習多任務卸載策略
                                    </p>
                                    <Badge className="bg-orange-600">執行中計畫</Badge>
                                </div>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* 聯絡資訊 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <Card className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border-2">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                聯絡資訊
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white mb-1">實驗室位置</p>
                                        <p className="text-gray-600 dark:text-gray-400">{labInfo.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white mb-1">指導教授</p>
                                        <p className="text-gray-600 dark:text-gray-400">{labInfo.director}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white mb-1">聯絡信箱</p>
                                        <a
                                            href={`mailto:${labInfo.email}`}
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            {labInfo.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white mb-1">研究領域</p>
                                        <p className="text-gray-600 dark:text-gray-400">{labInfo.focus}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator className="my-6" />

                        <div className="text-center">
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                歡迎對無線網路、人工智慧、車聯網等領域有興趣的學生加入我們的研究團隊
                            </p>
                            <div className="flex justify-center gap-4">
                                <Badge variant="outline" className="text-blue-600 border-blue-600">碩士班招生</Badge>
                                <Badge variant="outline" className="text-green-600 border-green-600">專題生歡迎</Badge>
                                <Badge variant="outline" className="text-purple-600 border-purple-600">研究助理</Badge>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
