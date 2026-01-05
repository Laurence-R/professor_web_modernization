"use client";

import { motion } from "framer-motion";
import { Wifi, Smartphone, Shield, Radio, Network, Cloud, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const interests = [
    {
        icon: Wifi,
        title: "Mobile Computing and Wireless Networking",
        description: "行動計算與無線網路",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Car,
        title: "Vehicle Navigation, Carpooling Protocols and Applications",
        description: "車輛導航、共乘協定與應用",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Radio,
        title: "Vehicular Ad Hoc Network",
        description: "車載行動網路",
        color: "from-orange-500 to-red-500",
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function ResearchInterests() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        研究領域
                        <span className="block text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-normal mt-2">
                            Research Interests
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        探索無線網路與行動通訊的前沿技術，致力於提升網路效能與安全性
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {interests.map((interest, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-700">
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${interest.color} flex items-center justify-center`}>
                                            <interest.icon className="h-7 w-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                {interest.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {interest.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
