// 研究計畫資料

export interface Project {
    id: number;
    name: string;
    role: string;
    startDate: string;
    endDate: string;
    agency: string;
    projectNumber: string;
    budget?: number;
    status: "執行中" | "已結案";
    type: "主持計畫" | "指導專題";
}

export const mainProjects: Project[] = [
    {
        id: 1,
        name: "SocialCode: 車輛網路上一個以信用為基礎，激勵不同自私與興趣程度的車輛節點使用網路編碼於合作式內容分享的協定",
        role: "主持人",
        startDate: "2013/08",
        endDate: "2014/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC102-2221-E-018-017-",
        budget: 577000,
        status: "執行中",
        type: "主持計畫"
    },
    {
        id: 2,
        name: "IG-Ferry: 車輛延遲容忍網路上一個以副本為基礎的高效率路由協定",
        role: "主持人",
        startDate: "2012/08",
        endDate: "2013/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC101-2221-E-018-006-",
        budget: 632000,
        status: "執行中",
        type: "主持計畫"
    },
    {
        id: 3,
        name: "使用歷史與即時交通資訊之高效率車輛網路單點路由",
        role: "主持人",
        startDate: "2011/08",
        endDate: "2012/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC100-2221-E-018-018-",
        budget: 531000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 4,
        name: "反應式 FHCoP-B 快速換手的流程最佳化與效能分析",
        role: "主持人",
        startDate: "2010/08",
        endDate: "2011/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC99-2221-E-018-017-",
        budget: 531000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 5,
        name: "巢狀式行動網路下主動式與反應式 FHCoP-B 快速換手的架構設計與效能分析",
        role: "主持人",
        startDate: "2009/08",
        endDate: "2010/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC98-2221-E-018-010-",
        budget: 612000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 6,
        name: "98年度資通訊課程推廣計畫",
        role: "授課教師",
        startDate: "2009/02",
        endDate: "2010/01",
        agency: "教育部",
        projectNumber: "台顧字第0980061763A號",
        budget: 267425,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 7,
        name: "巢狀式行動網路下整合 SIP、HCoP-B 與第二層快速換手的跨層架構設計",
        role: "主持人",
        startDate: "2008/08",
        endDate: "2009/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC97-2221-E-018-013-",
        budget: 623000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 8,
        name: "96-97年度資通訊課程推廣計畫",
        role: "主持人",
        startDate: "2007/12",
        endDate: "2009/01",
        agency: "教育部",
        projectNumber: "台顧字第0960205468A號",
        budget: 750000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 9,
        name: "巢狀式行動網路下的無縫式換手與多點群播研究",
        role: "主持人",
        startDate: "2007/08",
        endDate: "2008/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC96-2221-E-018-009",
        budget: 623000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 10,
        name: "支援路由最佳化、快速換手與多點傳送之階層式巢狀無線行動網路架構",
        role: "主持人",
        startDate: "2006/08",
        endDate: "2007/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC95-2221-E-018-013",
        budget: 511000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 11,
        name: "通訊科技人才培育先導型計畫特定課程補助",
        role: "主持人",
        startDate: "2006/09",
        endDate: "2006/12",
        agency: "教育部",
        projectNumber: "台顧字第0950130909號",
        budget: 84000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 12,
        name: "第四代異質性無線網路下之階層式多媒體多點傳送同步架構",
        role: "主持人",
        startDate: "2005/08",
        endDate: "2006/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC94-2213-E018-016",
        budget: 536000,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 13,
        name: "異質性無線網路上支援多媒體快速換手的階層式多點傳送 SIP 協定",
        role: "主持人",
        startDate: "2004/08",
        endDate: "2005/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC93-2213-E018-008",
        budget: 617600,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 14,
        name: "異質性無線網路上多媒體服務品質之確保",
        role: "主持人",
        startDate: "2003/08",
        endDate: "2004/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC92-2213-E-018-015",
        budget: 610300,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 15,
        name: "中部科學園區推動計畫：全異質性接取網路之服務與應用",
        role: "分項主持人",
        startDate: "2002/12/01",
        endDate: "2003/12/31",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC 91-2218-E-324-003",
        budget: 3643300,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 16,
        name: "整合多媒體伺服器、代理伺服器與無線行動用戶的即時多媒體 SMIL 預載與排程架構",
        role: "主持人",
        startDate: "2002/08",
        endDate: "2003/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC91-2213-E-324-022",
        budget: 504400,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 17,
        name: "支援 SMIL 多媒體即時同步遠距教學的動態網路調配平台",
        role: "主持人",
        startDate: "2001/08",
        endDate: "2002/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC 90-2213-E-324-019",
        budget: 481600,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 18,
        name: "以 SMIL 為基礎的多媒體即時同步遠距教學伺服器的研發",
        role: "主持人",
        startDate: "2000/08",
        endDate: "2001/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC 89-2218-E-324-003-",
        budget: 414400,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 19,
        name: "遠距教學環境中之多媒體即時同步資料流應用於遠距教學中之全球資訊網多媒體同步技術的研發與實作",
        role: "主持人",
        startDate: "1999/08",
        endDate: "2000/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC 89-2213-E-324-008",
        budget: 414400,
        status: "已結案",
        type: "主持計畫"
    },
    {
        id: 20,
        name: "全球資訊網多媒體同步技術的研發與實作",
        role: "主持人",
        startDate: "1998/08",
        endDate: "1999/07",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC88-2213-E-324-019",
        budget: 333900,
        status: "已結案",
        type: "主持計畫"
    }
];

export const studentProjects: Project[] = [
    {
        id: 101,
        name: "汽車共乘之配對方法",
        role: "指導教授",
        startDate: "102/07/01",
        endDate: "103/02/28",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC102-2815-C-018-011-E",
        status: "執行中",
        type: "指導專題"
    },
    {
        id: 102,
        name: "基於即時路況收集交換動態節能路徑規劃演算法設計與 Android 平台上的實作",
        role: "指導教授",
        startDate: "101/07/01",
        endDate: "102/02/28",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC101-2815-C-018-018-E",
        status: "已結案",
        type: "指導專題"
    },
    {
        id: 103,
        name: "修改 NEPL 程式，實作出 HCoP-B 架構",
        role: "指導教授",
        startDate: "98/07/01",
        endDate: "99/02/28",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC98-2815-C-018-008-E",
        status: "已結案",
        type: "指導專題"
    },
    {
        id: 104,
        name: "使用行動通訊裝置建構校園互動式多媒體資訊系統",
        role: "指導教授",
        startDate: "92/07/01",
        endDate: "93/02/28",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC92-2815-C-324-013-E",
        status: "已結案",
        type: "指導專題"
    },
    {
        id: 105,
        name: "在無線網路 PDA 上之 SMIL 即時學習系統",
        role: "指導教授",
        startDate: "91/07/01",
        endDate: "92/02/28",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC91-2815-C-324-021-E",
        status: "已結案",
        type: "指導專題"
    },
    {
        id: 106,
        name: "PDA SMIL 多媒體無線通訊系統的開發與研究",
        role: "指導教授",
        startDate: "90/07/01",
        endDate: "91/02/28",
        agency: "行政院國家科學委員會",
        projectNumber: "NSC90-2815-C-324-026-E",
        status: "已結案",
        type: "指導專題"
    },
    {
        id: 107,
        name: "「網際網路上」「多媒體」「即時」遠距教學系統之研發",
        role: "指導教授",
        startDate: "87/11/01",
        endDate: "88/06/30",
        agency: "行政院國家科學委員會",
        projectNumber: "",
        status: "已結案",
        type: "指導專題"
    }
];

export const allProjects = [...mainProjects, ...studentProjects];
