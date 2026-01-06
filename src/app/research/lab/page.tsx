import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wifi, Award } from "lucide-react";

export default function LabPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        無線與行動網路實驗室
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Wireless and Mobile Networks Laboratory
                    </p>
                </div>

                {/* 實驗室簡介 */}
                <Card className="p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        關於實驗室
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        無線與行動網路實驗室成立於國立彰化師範大學資訊工程學系，專注於無線通訊、行動網路、車載網路與多媒體系統的研究與開發。
                        實驗室致力於解決行動通訊中的關鍵技術問題，包括網路架構設計、協定開發、效能最佳化與實際應用系統實作。
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        多年來，實驗室在國際期刊與會議發表超過百篇論文，並執行多項國科會研究計畫，培育眾多碩博士生投入無線網路領域的研究與產業發展。
                    </p>
                </Card>

                {/* 研究特色 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                                <Wifi className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            理論與實務並重
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            從協定設計到系統實作，結合數學分析與實際開發
                        </p>
                    </Card>

                    <Card className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            跨領域合作
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            與國內外學術機構及產業界密切合作研究
                        </p>
                    </Card>

                    <Card className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            優異研究成果
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            多篇 SCI/EI 期刊論文，研究成果獲國際肯定
                        </p>
                    </Card>
                </div>

                {/* 主要研究主題 */}
                <Card className="p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        主要研究主題
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Badge className="mt-1">1</Badge>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    巢狀行動網路 (NEMO) 架構
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    HCoP-B 快速切換機制、路由最佳化、效能分析
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Badge className="mt-1">2</Badge>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    車載網路 (VANET) 通訊協定
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    路由演算法設計、延遲容忍網路、GPS 導航應用
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Badge className="mt-1">3</Badge>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    多媒體同步與 QoS 保證
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    SMIL 簡報系統、端對端 QoS 架構、資源管理
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Badge className="mt-1">4</Badge>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                    異質性無線網路整合
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    垂直切換、跨層設計、SIP 與 Mobile IP 整合
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* 聯絡資訊 */}
                <Card className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        聯絡資訊
                    </h2>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                        <p>
                            <span className="font-medium">地點：</span>
                            國立彰化師範大學 資訊工程學系
                        </p>
                        <p>
                            <span className="font-medium">指導教授：</span>
                            張英超 教授
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
