import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Radio, Car, Zap } from "lucide-react";

export default function ResearchAreasPage() {
    const areas = [
        {
            title: "無線網路與行動通訊",
            icon: Radio,
            description: "研究無線網路協定設計、行動網路架構、切換機制、路由最佳化等技術",
            keywords: ["HCoP-B", "NEMO", "Fast Handoff", "Mobile IP", "SIP"],
            publications: 20
        },
        {
            title: "多媒體系統與 CSCW",
            icon: Network,
            description: "多媒體同步技術、協同工作系統、遠距教學平台、即時串流服務",
            keywords: ["SMIL", "CSCW", "Multimedia Synchronization", "Distance Learning"],
            publications: 15
        },
        {
            title: "車載網路 (VANET)",
            icon: Car,
            description: "車輛通訊協定、路由演算法、延遲容忍網路、智慧交通系統",
            keywords: ["VANET", "DTN", "路由協定", "GPS Navigation", "交通資訊"],
            publications: 8
        },
        {
            title: "服務品質 (QoS) 與網路協定",
            icon: Zap,
            description: "端對端 QoS 保證、IntServ/DiffServ 整合、資源預留、流量控制",
            keywords: ["QoS", "IntServ", "DiffServ", "RSVP", "ATM ABR"],
            publications: 12
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        研究方向
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        專注於無線網路、多媒體系統、車載網路與網路協定的研究與開發
                    </p>
                </div>

                {/* 研究領域卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {areas.map((area, index) => {
                        const IconComponent = area.icon;
                        return (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {area.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            {area.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {area.keywords.map((keyword, i) => (
                                                <Badge key={i} variant="secondary" className="text-xs">
                                                    {keyword}
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-500">
                                            相關論文：約 {area.publications} 篇
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* 研究歷程 */}
                <Card className="mt-12 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        研究歷程
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                早期研究 (1994-2000)
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                專注於多媒體協同工作系統 (CSCW) 與遠距教學平台的開發，建立了桌面型協作系統與基於 Web 的多媒體學習環境。
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                中期發展 (2001-2008)
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                轉向無線網路與行動通訊研究，開發 SMIL 多媒體同步技術、行動多點傳送協定、異質性網路切換機制，提出階層式 SIP 架構。
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                近期研究 (2009-2014)
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                深入巢狀行動網路 (NEMO) 架構設計，提出 HCoP-B 快速切換機制。同時開展車載網路 (VANET) 研究，開發路由演算法與 GPS 導航應用。
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
