// 論文著作資料

export interface Publication {
    id: number;
    authors: string;
    year: number;
    title: string;
    venue: string; // 期刊名稱或會議名稱
    pages?: string;
    volume?: string;
    issue?: string;
    publisher?: string;
    doi?: string;
    indexes?: string[]; // SCI, SCIE, EI, etc.
    nscProject?: string; // 國科會計畫編號
    impactFactor?: string;
    rank?: string;
    type: 'journal' | 'international-conference' | 'local-conference' | 'thesis';
}

// 期刊論文 (36篇)
export const journalPublications: Publication[] = [
    {
        id: 1,
        authors: "T.M. Chen, C.C. Yang, W.H. Tseng, I.C Chang, J.H. Huang, C.C. Lin, M.S. Lee, N.J. Fong and S. Kaw",
        year: 1994,
        title: "Design and Implementation of a Desktop Computer Supported Cooperative Work Systems",
        venue: "IEEE Trans. On Consumer Electronics",
        volume: "40",
        issue: "4",
        pages: "827-835",
        indexes: ["SCI", "EI"],
        type: "journal"
    },
    {
        id: 2,
        authors: "Ing-Chau Chang, Jau-Hsiung Huang and Wei-Hsin Tseng",
        year: 1996,
        title: "Design and Implementation of a Multimedia CSCW Platform",
        venue: "International Journal of Multimedia Tools and Applications",
        volume: "2",
        issue: "2",
        pages: "85-109",
        indexes: ["SCI Expanded", "EI"],
        type: "journal"
    },
    {
        id: 3,
        authors: "Kuang-Chih Lee, Keh-Ning Chang, Shiuh-Sheng Yu, Ing-Chau Chang, Chee-Wen Shia, Wen-Chin Chen and Jau-Hsiung Huang",
        year: 1997,
        title: "Design and Implementation of Important Applications in a Java-Based Multimedia Digital Classroom",
        venue: "IEEE Trans. On Consumer Electronics",
        volume: "43",
        issue: "3",
        pages: "264-269",
        indexes: ["SCI", "EI"],
        type: "journal"
    },
    {
        id: 4,
        authors: "Ing-Chau Chang, Bo-Shen Liou, Jau-Hsiung Huang, Shiuh-Sheng Yu and Chee-Wen Shiah",
        year: 1999,
        title: "A Multimedia World Wide Web Based Conference Minute System for Group Collaboration",
        venue: "International Journal of Multimedia Tools and Applications",
        volume: "9",
        issue: "3",
        pages: "199-226",
        indexes: ["SCI Expanded", "EI"],
        type: "journal"
    },
    {
        id: 5,
        authors: "Ing-Chau Chang and Ming-Hung Huang",
        year: 2002,
        title: "The Adaptive Feedback Scheduling Framework for Streaming VBR Videos with Wireless ATM ABR Service",
        venue: "LNCS 2532",
        pages: "920-927",
        publisher: "Springer",
        indexes: ["SCIE", "EI"],
        nscProject: "NSC91-2213-E-324-022",
        type: "journal"
    },
    {
        id: 6,
        authors: "Ing-Chau Chang and Ming-Hung Huang",
        year: 2003,
        title: "A QoS-Guaranteed Prefetching Protocol for Streaming VBR Videos to Resource-Limited Mobile Clients Over Wireless ATM Networks",
        venue: "The Journal of Chaoyang University of Technology",
        pages: "39-53",
        nscProject: "NSC91-2213-E-324-022",
        type: "journal"
    },
    {
        id: 7,
        authors: "Ing-Chau Chang and Yi-Ting Mai",
        year: 2004,
        title: "On Design of the Hierarchical Multicast SIP for Multimedia Fast Handoff on 3G Wireless Networks",
        venue: "Journal of Internet Technology",
        volume: "5",
        issue: "1",
        pages: "1-8",
        indexes: ["EI"],
        nscProject: "NSC93-2213-E018-008",
        type: "journal"
    },
    {
        id: 8,
        authors: "Ing-Chau Chang and Kuo-Shun Huang",
        year: 2004,
        title: "Synchronized Mobile Multicast Support for Real-Time Multimedia Services",
        venue: "IEICE Trans. on Communications: Special Issue on Networking Technologies for Mobile Internet Systems",
        volume: "E87-B",
        issue: "9",
        pages: "2585-2595",
        indexes: ["SCI", "EI"],
        nscProject: "NSC 91-2218-E-324-003",
        type: "journal"
    },
    {
        id: 9,
        authors: "Ing-Chau Chang and Sheng-Wen Hsieh",
        year: 2005,
        title: "ATF: An Adaptive Three-Layer Framework for Inter-Stream Synchronization of SMIL Multimedia Presentations",
        venue: "Journal of Systems and Software: Special Issue on Adaptive Multimedia Computing",
        publisher: "Elsevier",
        volume: "75",
        issue: "3",
        pages: "283-303",
        indexes: ["SCI", "EI"],
        nscProject: "NSC 90-2213-E-324-019",
        type: "journal"
    },
    {
        id: 10,
        authors: "Ing-Chau Chang and Chih-Sung Hsieh",
        year: 2006,
        title: "Hierarchical Synchronized Multimedia Multicast for Mobile Hosts in Heterogeneous Wireless Networks",
        venue: "LNCS 3961",
        pages: "112-121",
        publisher: "Springer",
        indexes: ["SCIE", "EI"],
        nscProject: "NSC94-2213-E018-016",
        type: "journal"
    },
    {
        id: 11,
        authors: "Ing-Chau Chang and Yi-Ting Mai",
        year: 2006,
        title: "Mobile Multimedia Supports with Hierarchical Multicast SIP Framework on Heterogeneous Wireless Networks",
        venue: "Computers and Electrical Engineering Journal: Special Issue on Advances and Performance Evaluation of Wireless Networks and Systems",
        publisher: "Elsevier",
        volume: "32",
        issue: "1-3",
        pages: "78-101",
        indexes: ["SCIE"],
        nscProject: "NSC93-2213-E018-008",
        type: "journal"
    },
    {
        id: 12,
        authors: "Ing-Chau Chang, Ching-Hsiang Wang and Lin-Huang Chang",
        year: 2006,
        title: "An Area-Based Vertical Motion Estimation on Heterogeneous Wireless Networks",
        venue: "LNCS 4138",
        pages: "187-198",
        publisher: "Springer",
        indexes: ["SCIE", "EI"],
        nscProject: "NSC92-2213-E-018-015",
        type: "journal"
    },
    {
        id: 13,
        authors: "Lin-huang Chang, Jui-jen Lo, Chih-Yu Hsu and Ing-Chau Chang",
        year: 2006,
        title: "Integrated Multi-layer Registration Combining SIP with Mobile IP Schemes",
        venue: "LNCS 4138",
        pages: "228-239",
        publisher: "Springer",
        indexes: ["SCIE", "EI"],
        nscProject: "NSC93-2213-E018-008",
        type: "journal"
    },
    {
        id: 14,
        authors: "張英超, 周家豪",
        year: 2007,
        title: "HCoP-B行動網路架構",
        venue: "Communications of IICM",
        volume: "10",
        issue: "1",
        pages: "65-88",
        nscProject: "NSC95-2221-E018-013",
        type: "journal"
    },
    {
        id: 15,
        authors: "Ing-Chau Chang, Chia-Hao Chou and Lin-Huang Chang",
        year: 2007,
        title: "A Hierarchical Care-of Prefix with BUT Scheme for Nested Mobile Networks",
        venue: "LNCS 4742",
        pages: "844-855",
        publisher: "Springer",
        indexes: ["EI"],
        nscProject: "NSC95-2221-E-018-013",
        type: "journal"
    },
    {
        id: 16,
        authors: "Lin-huang Chang, Huan-Jie Lin and Ing-Chau Chang",
        year: 2007,
        title: "Dynamic Handover Mechanism Using Mobile SCTP in Contention Based Wireless Network",
        venue: "LNCS 4742",
        pages: "821-831",
        publisher: "Springer",
        indexes: ["EI"],
        type: "journal"
    },
    {
        id: 17,
        authors: "Ing-Chau Chang and Shi-Feng Chen",
        year: 2007,
        title: "An End-to-End QoS Adaptation Architecture for the Integrated IntServ and DiffServ Networks",
        venue: "LNCS 4809",
        pages: "365-376",
        publisher: "Springer",
        indexes: ["EI"],
        type: "journal"
    },
    {
        id: 18,
        authors: "Junn-Yen Hu, Chen-Fu Chou, Min-Shi Sha, Ing-Chau Chang and Chung-Yi Lai",
        year: 2007,
        title: "On the Design of Micro-mobility for Mobile Network",
        venue: "LNCS 4809",
        pages: "401-412",
        publisher: "Springer",
        indexes: ["EI"],
        nscProject: "NSC95-2622-E-002-018",
        type: "journal"
    },
    {
        id: 19,
        authors: "Ing-Chau Chang, Chia-Hao Chou",
        year: 2008,
        title: "Seamless Handoff Support for Real-Time Multimedia Applications in Nested Mobile Networks",
        venue: "LNCS 5353",
        publisher: "Springer",
        pages: "198-207",
        indexes: ["EI"],
        nscProject: "NSC96-2221-E-018-009",
        type: "journal"
    },
    {
        id: 20,
        authors: "Ing-Chau Chang and Chia-Hao Chou",
        year: 2009,
        title: "HCoP-B: A Hierarchical Care-of Prefix with BUT Scheme for Nested Mobile Networks",
        venue: "IEEE Trans. on Vehicular Technology",
        volume: "58",
        issue: "6",
        pages: "2942-2965",
        indexes: ["SCI"],
        nscProject: "NSC96-2221-E-018-009",
        impactFactor: "2.063",
        rank: "11/77 (Telecommunications)",
        type: "journal"
    },
    {
        id: 21,
        authors: "Ing-Chau Chang, Chih-Sung Hsieh and Ching-Hsiang Chu",
        year: 2010,
        title: "HSMM: Hierarchical Synchronized Multimedia Multicast for Heterogeneous Mobile Networks",
        venue: "Tamkang Journal of Science and Engineering",
        volume: "13",
        issue: "1",
        pages: "39-51",
        indexes: ["EI"],
        type: "journal"
    },
    {
        id: 22,
        authors: "Ing-Chau Chang, Chia-Hao Chou and Lin-Huang Chang",
        year: 2011,
        title: "On Design of a Route-Optimized and Seamless HCoP-B Scheme for Nested Mobile Networks",
        venue: "International Journal of High Performance Computing and Networking (IJHPCN)",
        publisher: "Inderscience",
        volume: "7",
        issue: "1",
        pages: "53-62",
        indexes: ["EI"],
        nscProject: "NSC96-2221-E-018-009",
        type: "journal"
    },
    {
        id: 23,
        authors: "Ing-Chau Chang and Ciou-Song Lu",
        year: 2011,
        title: "Statistical Performance Analysis of the Predictive Fast and Seamless Handoff Scheme for the Nested Mobile Network",
        venue: "Pakistan Journal of Statistics",
        volume: "27",
        issue: "5",
        pages: "591-612",
        indexes: ["SCIE"],
        nscProject: "NSC98-2221-E-018-010-",
        impactFactor: "0.252",
        rank: "115/117 (Statistics & Probability)",
        type: "journal"
    },
    {
        id: 24,
        authors: "Jin-Jia Chang, Yi-Hua Li, Wanjiun Liao, and Ing-Chau Chang",
        year: 2012,
        title: "Intersection-Based Routing for Urban Vehicular Communications with Traffic-Light Considerations",
        venue: "IEEE Wireless Communications Magazine",
        volume: "19",
        issue: "1",
        pages: "82-88",
        indexes: ["SCI"],
        impactFactor: "3.740",
        rank: "2/77 (Telecommunications)",
        type: "journal"
    },
    {
        id: 25,
        authors: "Ing-Chau Chang, Ciou-Song Lu",
        year: 2012,
        title: "The Predictive FHCoP-B Fast Handoff Scheme and its Performance Analysis for Nested Network Mobility",
        venue: "JDCTA: International Journal of Digital Content Technology and its Applications",
        volume: "6",
        issue: "7",
        pages: "261-274",
        indexes: ["EI"],
        nscProject: "NSC98-2221-E-018-010-",
        type: "journal"
    },
    {
        id: 26,
        authors: "Yi-Ju Lin, Ing-Chau Chang, Hung-Wen Yang, and Chou-Chen Yang",
        year: 2012,
        title: "Secure Digital Content Distributing System on P2P Networks",
        venue: "Journal of Electronic Science and Technology (JEST)",
        volume: "10",
        issue: "3",
        pages: "263-268",
        indexes: ["EI"],
        type: "journal"
    },
    {
        id: 27,
        authors: "Ing-Chau Chang, Ciou-Song Lu and Sheng-Chih Wang",
        year: 2013,
        title: "Performance Analysis of Reactive FHCoP-B in Nested Mobile Networks",
        venue: "Applied Mechanics and Materials, Vols. 284-287: Innovation for Applied Science and Technology",
        pages: "2850-2854",
        publisher: "Trans Tech Publications",
        indexes: ["EI"],
        nscProject: "NSC99-2221-E-018-017-",
        type: "journal"
    },
    {
        id: 28,
        authors: "Ing-Chau Chang, Yang-Yu Chang and Sheng-Chih Wang",
        year: 2013,
        title: "On Design and Performance Evaluation of an Integrated SIP and HCoP-B Architecture for Nested Network Mobility",
        venue: "Computer Standards & Interfaces",
        publisher: "Elsevier",
        volume: "35",
        issue: "1",
        pages: "87-106",
        indexes: ["SCIE"],
        nscProject: "NSC97-2221-E-018-013",
        impactFactor: "0.978",
        rank: "55/105 (COMPUTER SCIENCE, SOFTWARE ENGINEERING)",
        type: "journal"
    },
    {
        id: 29,
        authors: "Ing-Chau Chang and Yi-Ting Mai",
        year: 2013,
        title: "The End-to-End QoS Guarantee Framework for Interworking WiMAX PMP and Mesh Networks with Internet",
        venue: "Computers and Electrical Engineering Journal",
        publisher: "Elsevier",
        volume: "39",
        pages: "1905-1934",
        indexes: ["SCIE"],
        doi: "http://dx.doi.org/10.1016/j.compeleceng.2013.05.007",
        impactFactor: "0.928",
        rank: "141/242 (ENGINEERING, ELECTRICAL & ELECTRONIC)",
        type: "journal"
    },
    {
        id: 30,
        authors: "Chin-Ling Chen, Ing-Chau Chang, Chun-Hsin Chang, and Yuan-Fen Wang",
        year: 2013,
        title: "A Secure Ambulance Communication Protocol for VANET",
        venue: "Wireless Personal Communications",
        publisher: "Springer",
        volume: "73",
        pages: "1187-1213",
        indexes: ["SCIE"],
        doi: "DOI 10.1007/s11277-013-1273-y",
        impactFactor: "0.428",
        rank: "65/77 (Telecommunications)",
        type: "journal"
    },
    {
        id: 31,
        authors: "Ing-Chau Chang, Hung-Ta Tai, Feng-Han Yeh, Dung-Lin Hsieh, and Siao-Hui Chang",
        year: 2013,
        title: "A VANET-based A* Route Planning Algorithm for Travelling Time- and Energy-Efficient GPS Navigation App",
        venue: "International Journal of Distributed Sensor Networks",
        publisher: "Hindawi Publishing Corporation",
        indexes: ["SCIE"],
        doi: "http://dx.doi.org/10.1155/2013/794521",
        impactFactor: "0.727",
        rank: "46/77 (Telecommunications)",
        type: "journal"
    },
    {
        id: 32,
        authors: "Jenq-Shiou Leu, Hsiao-Chuan Yueh and Ing-Chau Chang",
        year: 2014,
        title: "A Virtual Grouping Based Fault-Tolerant Scheme for Autonomous Networks",
        venue: "Engineering Applications of Artificial Intelligence (EAAI)",
        publisher: "Elsevier",
        volume: "27",
        issue: "1",
        pages: "199-210",
        indexes: ["SCI"],
        doi: "http://dx.doi.org/10.1016/j.engappai.2013.09.012",
        impactFactor: "1.625",
        rank: "15/90 (ENGINEERING, MULTIDISCIPLINARY)",
        type: "journal"
    },
    {
        id: 33,
        authors: "Chin-Ling Chen, Kai-Wen Cheng, Young-Long Chen, Ing-Chau Chang and Cheng-Chi Lee",
        year: 2014,
        title: "An Improvement on the Self-Verification Authentication Mechanism for a Mobile Satellite Communication System",
        venue: "Applied Mathematics & Information Sciences (AMIS)",
        volume: "8",
        issue: "1L",
        pages: "97-106",
        indexes: ["SCI"],
        impactFactor: "0.731",
        rank: "128/247 (MATHEMATICS, APPLIED)",
        type: "journal"
    },
    {
        id: 34,
        authors: "Chin-Ling Chen, Kai-Wen Cheng, Chih-Cheng Chen and Ing-Chau Chang",
        year: 2014,
        title: "Enhancing an AAA Scheme using ID-based Tickets with Anonymity in Future Mobile Communication",
        venue: "Applied Mathematics & Information Sciences (AMIS)",
        volume: "8",
        issue: "1L",
        pages: "107-116",
        indexes: ["SCI"],
        impactFactor: "0.731",
        rank: "128/247 Q3 (MATHEMATICS, APPLIED)",
        type: "journal"
    },
    {
        id: 35,
        authors: "Ing-Chau Chang, Ciou-Song Lu and Sheng-Chih Wang",
        year: 2014,
        title: "Mathematical Performance Analysis for HCoP-B Reactive Fast Handover Mechanisms for the Nested Mobile Networks",
        venue: "Engineering Computations",
        publisher: "Emerald",
        volume: "31",
        issue: "2",
        indexes: ["SCIE"],
        nscProject: "NSC98-2221-E-018-010-, NSC99-2221-E-018-017-",
        impactFactor: "1.214",
        rank: "24/90 (ENGINEERING, MULTIDISCIPLINARY)",
        type: "journal"
    },
    {
        id: 36,
        authors: "Ing-Chau Chang, Chien-Hsun Li and Cheng-Fu Chou",
        year: 2013,
        title: "Efficient Packet Replication Control for a Geographical Routing Protocol in Sparse Vehicular Delay Tolerant Networks",
        venue: "International Journal of Communication Systems",
        publisher: "Wiley",
        indexes: ["SCIE"],
        impactFactor: "0.712",
        rank: "48/78 (Telecommunications)",
        type: "journal"
    }
];

// 國際會議論文 (24篇)
export const internationalConferences: Publication[] = [
    {
        id: 101,
        authors: "Jau-Hsiung Huang and Ing-Chau Chang",
        year: 1993,
        title: "A Real-Time Scheduling Policy for Multimedia Applications on Broadcast Networks",
        venue: "Proc. of Singapore International Conference on Networks and International Conference on Information Engineering",
        pages: "49-52",
        indexes: ["EI"],
        type: "international-conference"
    },
    {
        id: 102,
        authors: "Ing-Chau Chang, Bo-Shen Lieu and Jau-Hsiung Huang",
        year: 1996,
        title: "A Hypermedia Project Minute Recording and Processing Systems in the CSCW Environment",
        venue: "Proc. of The 10th International Conference on Information Networking (ICOIN-10)",
        pages: "221-230",
        type: "international-conference"
    },
    {
        id: 103,
        authors: "Ing-Chau Chang, Li-Li Chen, Ji-Jing Shen, Ke-Chau Hsu, Jau-Hsiung Huang",
        year: 1997,
        title: "Design and Implementation of a Multimedia WWW-Based Note-Taking System for Distance Learning",
        venue: "Proc. of 1997 IEEE International Conference on Consumer Electronics (ICCE '97)",
        pages: "10-11",
        indexes: ["EI"],
        type: "international-conference"
    },
    {
        id: 104,
        authors: "Ing-Chau Chang, Mei-Fong Lin and Shou-Hwei Lo",
        year: 2000,
        title: "Design and Implementation of a Low Cost Multimedia Distance Learning System",
        venue: "Proc. of JCIS'2000",
        volume: "2",
        pages: "545-548",
        type: "international-conference"
    },
    {
        id: 105,
        authors: "Ing-Chau Chang, Ja-Kwan Jiang, Yu-Ping Liou, Chan-Ju Chen, Ing-Jer Huang and Li-Hsin Shu",
        year: 2000,
        title: "Prototyping of A Two-Mode Web-based Multimedia Distance Learning System",
        venue: "Proc. of the 2nd International Workshop on Software Engineering and Multimedia Applications (SEMA 2000)",
        volume: "2",
        pages: "121-125",
        type: "international-conference"
    },
    {
        id: 106,
        authors: "Ing-Chau Chang and Sheng-Wen Hsieh",
        year: 2000,
        title: "A Fair and Efficient SOM-based Feedback Congestion Control in ATM Networks",
        venue: "Proc. of the 2000 International Computer Symposium (ICS2000), Workshop on Computer Networks, Internet, and Multimedia",
        pages: "1-6",
        type: "international-conference"
    },
    {
        id: 107,
        authors: "Ing-Chau Chang",
        year: 2001,
        title: "A SMIL-based Real-Time Interactive Sharing System for Distance Learning",
        venue: "Poster Proceeding of The Tenth International World Wide Web Conference (WWW10)",
        pages: "96-97",
        type: "international-conference"
    },
    {
        id: 108,
        authors: "Ing-Chau Chang and Sheng-Wen Hsieh",
        year: 2002,
        title: "A Fair and Efficient SOM-based Feedback Congestion Control Scheme for ATM ABR Services",
        venue: "The 6th World Multi-Conference on SYSTEMICS, CYBERNETICS AND INFORMATICS (SCI 2002)",
        volume: "X",
        pages: "88-93",
        type: "international-conference"
    },
    {
        id: 109,
        authors: "Ing-Chau Chang and Sheng-Wen Hsieh",
        year: 2002,
        title: "An Adaptive QoS Guarantee Framework for SMIL Multimedia Presentations with ATM ABR Service",
        venue: "IEEE Globecom 2002",
        volume: "2",
        pages: "1784-1788",
        indexes: ["EI"],
        type: "international-conference"
    },
    {
        id: 110,
        authors: "Ing-Chau Chang and Ching-Hsiang Wang",
        year: 2002,
        title: "A Soft Resource Reservation Scheme for Layered Video During Handoff on The 3G Wireless Networks",
        venue: "2002 International Computer Symposium (ICS2002)",
        type: "international-conference"
    },
    {
        id: 111,
        authors: "Ing-Chau Chang and Kuo-Shun Huang",
        year: 2003,
        title: "Synchronized Multimedia Multicast on Mobile IP Networks",
        venue: "IEEE ICC 2003",
        volume: "2",
        pages: "799-803",
        indexes: ["EI"],
        type: "international-conference"
    },
    {
        id: 112,
        authors: "Ing-Chau Chang and Yi-Ting Mai",
        year: 2004,
        title: "HMSIP: Hierarchical Multicast SIP Protocol for Streaming Multimedia in Wireless Networks",
        venue: "2004 IEEE International Conference on Networking, Sensing and Control (ICNCS)",
        pages: "361-366",
        indexes: ["EI"],
        type: "international-conference"
    },
    {
        id: 113,
        authors: "Ing-Chau Chang, Kuo-Shun Huang and Cheng-Ying Yang",
        year: 2004,
        title: "Synchronized Real-Time Multimedia Multicast For Mobile Users",
        venue: "World Wireless Congress",
        pages: "739-745",
        indexes: ["EI"],
        type: "international-conference"
    },
    {
        id: 114,
        authors: "Ing-Chau Chang, Yang-Yu Chang",
        year: 2008,
        title: "Integrated SIP and HCOP-B Architecture for Nested Network Mobility",
        venue: "The International Conference on Mobile Technology, Applications and Systems (ACM Mobility 2008)",
        nscProject: "NSC97-2221-E-018-013",
        type: "international-conference"
    },
    {
        id: 115,
        authors: "Sung-Han Lin, Junn-Yen, Hu, Cheng-Fu Chou, Ing-Chau Chang, Chien-Chun Hung",
        year: 2009,
        title: "A Novel Social Cluster-based P2P Framework for Integrating VANETS with the Internet",
        venue: "IEEE Wireless Communication and Networking Conference (WCNC)",
        type: "international-conference"
    },
    {
        id: 116,
        authors: "Ing-Chau Chang and Ciou-Song Lu",
        year: 2009,
        title: "Design and Analysis of the FHCOP-B Scheme for Fast Handoff Support in the Nested Mobile Network",
        venue: "IEEE International Conference on New Trends in Information and Service Sciences (NISS2009)",
        pages: "653-658",
        nscProject: "NSC98-2221-E-018-010-",
        type: "international-conference"
    },
    {
        id: 117,
        authors: "Yi-Ting Mai and Ing-Chau Chang",
        year: 2010,
        title: "The CBQ+RED Scheme for End-to-End QoS Adaptation in the Integrated IntServ and DiffServ Networks",
        venue: "7th IEEE VTS Asia Pacific Wireless Communications Symposium",
        type: "international-conference"
    },
    {
        id: 118,
        authors: "Ing-Chau Chang and Ciou-Song Lu",
        year: 2010,
        title: "Reactive Fast Handover Mechanisms in the Nested Mobile Networks",
        venue: "The 6th International Wireless Communications and Mobile Computing Conference (ACM IWCMC 2010)",
        nscProject: "NSC99-2221-E-018-017-",
        type: "international-conference"
    },
    {
        id: 119,
        authors: "Ing-Chau Chang, and Yang-Yu Chang",
        year: 2011,
        title: "Performance Analysis for Schemes Supporting SIP in the Nested Mobile Network",
        venue: "2011 IEEE International Conference on High Performance Computing and Communications (HPCC 2011)",
        pages: "940-945",
        nscProject: "NSC97-2221-E-018-013",
        type: "international-conference"
    },
    {
        id: 120,
        authors: "Ing-Chau Chang and Ciou-Song Lu",
        year: 2011,
        title: "The Predictive FHCOP-B Scheme for Fast and Seamless Handoff in the Nested Mobile Network",
        venue: "The 5th International Conference on New Trends in Information Science and Service Science (NISS 2011)",
        pages: "215-221",
        nscProject: "NSC98-2221-E-018-010-",
        type: "international-conference"
    },
    {
        id: 121,
        authors: "Ing-Chau Chang, Yuan-Fen Wang and Cheng-Fu Chou",
        year: 2011,
        title: "Efficient VANET Unicast Routing using Historical and Real-Time Traffic Information",
        venue: "17th IEEE International Conference on Parallel and Distributed Systems (ICPADS 2011)",
        nscProject: "NSC100-2221-E-018-018-",
        type: "international-conference"
    },
    {
        id: 122,
        authors: "Ing-Chau Chang, Chien-Hsun Li, Cheng-Fu Chou",
        year: 2012,
        title: "The IG-Ferry Protocol to Support Efficient Controlled Replication in Vehicular Delay Tolerant Network",
        venue: "the 9th IEEE International Conference on Ubiquitous Intelligence and Computing (IEEE UIC 2012)",
        nscProject: "NSC101-2221-E-018-006-",
        type: "international-conference"
    },
    {
        id: 123,
        authors: "Hsiung-Hung Liu, Cheng-Fu Chou, Ing-Chau Chang",
        year: 2013,
        title: "Preference-aware Object Retrieval in Opportunistic Mobile Social Networks",
        venue: "IEEE Wireless Communications and Networking Conference (WCNC)",
        pages: "4434-4438",
        type: "international-conference"
    },
    {
        id: 124,
        authors: "Ing-Chau Chang, Hung-Ta Tai, Dung-Lin Hsieh, Feng-Han Yeh, Siao-Hui Chang",
        year: 2013,
        title: "Design and Implementation of the Travelling Time- and Energy-Efficient Android GPS Navigation App with the VANET-based A* Route Planning Algorithm",
        venue: "The 2013 International Symposium on Biometrics and Security Technologies (ISBAST'13)",
        type: "international-conference"
    }
];

// 本地會議論文 (52篇)
export const localConferences: Publication[] = [
    {
        id: 201,
        authors: "Jau-Hsiung Huang and Ing-Chau Chang",
        year: 1993,
        title: "A Real-Time Scheduling Policy on Broadcast Networks",
        venue: "Proc. of 1993 Workshops on Computer Applications",
        pages: "185-198",
        type: "local-conference"
    },
    {
        id: 202,
        authors: "I.C. Chang, W.H. Tseng, Y.M. Huang, T.J. Yang, H.M. Shiu, Y. Cheng, W.R. Deng, C.W. Lee and J.H. Huang",
        year: 1994,
        title: "The Design and Implementation of a CSCW System",
        venue: "Proc. of 1994 HD-Media Technology and Applications Workshop",
        pages: "OA2-36-OA2-41",
        type: "local-conference"
    },
    {
        id: 203,
        authors: "Ing-Chau Chang, Jau-Hsiung Huang and Wei-Hsin Tseng",
        year: 1995,
        title: "The Design and Implementation of a Multimedia CSCW System for Office Environments",
        venue: "Proc. of RAMS",
        pages: "245-249",
        type: "local-conference"
    },
    {
        id: 204,
        authors: "張英超，張月英，曾瓊慧，彭瑟靜，王柔茜，羅淑慧，林美芳",
        year: 1999,
        title: "Design and Implementation of a Multimedia Real-Time Interactive Distance Learning System on the Internet",
        venue: "Proc. of the 4th Multimedia Technology and Applications Symposium",
        pages: "349-356",
        type: "local-conference"
    },
    {
        id: 205,
        authors: "張英超，江佳桂，劉育革，陳香君，黃英哲，徐立興",
        year: 1999,
        title: "Design and Implementation of A Web-based SMIL Multimedia Streaming Presentation System",
        venue: "Proc. of 1999 Workshop on Consumer Electronics (WCE'99)",
        pages: "169-174",
        type: "local-conference"
    },
    {
        id: 206,
        authors: "張英超，李麗華，謝盛文",
        year: 2000,
        title: "在ATM上透過SOM建構一個公平又有效的流量控制機制",
        venue: "第五屆電腦與通訊研討會",
        pages: "1A-13-1A-18",
        type: "local-conference"
    },
    {
        id: 207,
        authors: "張英超，謝盛文",
        year: 2001,
        title: "透過ABR服務動態確保 SMIL多媒體簡報品質的架構與實作",
        venue: "Proc. of Workshop on the 21st Century Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 208,
        authors: "張英超，黃明鴻",
        year: 2001,
        title: "在ATMABR下支援SMIL文件的即時多媒體動態預先下載演算法",
        venue: "Proceeding of TANET 2001",
        volume: "2",
        pages: "152-157",
        type: "local-conference"
    },
    {
        id: 209,
        authors: "張英超，黃明鴻",
        year: 2001,
        title: "A Dynamic QoS-guarantee Prefetching Protocol for Real-time Multimedia SMIL Presentation with ATM ABR Service",
        venue: "Proceeding of National Computer Symposium 2001",
        pages: "D155-162",
        type: "local-conference"
    },
    {
        id: 210,
        authors: "張英超，廖惠真，鄭安舜，章紹偉，鄭佳雯，徐明正",
        year: 2002,
        title: "Java-based SMIL多媒體即時互動播放系統的設計與實作",
        venue: "2002 Conference of Electronic Commerce and Digital Life",
        type: "local-conference"
    },
    {
        id: 211,
        authors: "張英超，黃明鴻",
        year: 2002,
        title: "An Adaptive Prefetching and Scheduling Framework for SMIL QoS Guarantee with Wireless ATM ABR Service",
        venue: "2002 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 212,
        authors: "張英超，王慶祥",
        year: 2002,
        title: "An Adaptive Resource Reservation Scheme for Layered Video During Handoff on The 3G Wireless Network",
        venue: "2002 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 213,
        authors: "張英超，黃國順",
        year: 2002,
        title: "Multimedia Multicast Support for Mobile IP on Heterogeneous Network",
        venue: "2002 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 214,
        authors: "張英超，廖永能，林文慶，李伯訓，饒明宣，郭世弘",
        year: 2002,
        title: "Java-based SMIL多媒體即時同步遠距教學系統的設計與實作",
        venue: "TANET 2002",
        pages: "253-258",
        type: "local-conference"
    },
    {
        id: 215,
        authors: "張英超，麥毅廷",
        year: 2002,
        title: "結合階層式行動SIP與IP Multicast技術於3G無線網路上的多媒體Handoff架構",
        venue: "TANET 2002",
        pages: "956-961",
        type: "local-conference"
    },
    {
        id: 216,
        authors: "張英超，黃國順",
        year: 2002,
        title: "在Mobile IP下支援同步多媒體多點傳送",
        venue: "TANET 2002",
        pages: "962-967",
        type: "local-conference"
    },
    {
        id: 217,
        authors: "張英超，麥毅廷",
        year: 2003,
        title: "Hierarchical Multicast SIP for Multimedia Fast Handoff and QoS Support",
        venue: "2003 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 218,
        authors: "張英超，王慶祥",
        year: 2003,
        title: "A Dynamic Resource Allocation for Vertical Handoff on Heterogeneous Wireless Networks",
        venue: "2003 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 219,
        authors: "張英超，黃國順",
        year: 2003,
        title: "Multimedia Multicast support for Mobile IP",
        venue: "2003 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 220,
        authors: "張英超，麥毅廷",
        year: 2003,
        title: "階層式多點傳播SIP結合QoS於3G無線多媒體上的Fast Handoff",
        venue: "TANET 2003",
        pages: "573-579",
        type: "local-conference"
    },
    {
        id: 221,
        authors: "張英超，陳一鳴，王慶祥",
        year: 2004,
        title: "異質性無線網路上以區域為基礎的垂直行動預測",
        venue: "The 10-th Mobile Computing Workshop, Mobile Computing 2004",
        pages: "47-55",
        type: "local-conference"
    },
    {
        id: 222,
        authors: "張英超，陳世菜",
        year: 2004,
        title: "利用Context Transfer Protocol與COPS-SLS確保行動用戶換手時動態調整的端點間服務品質",
        venue: "The 10-th Mobile Computing Workshop, Mobile Computing 2004",
        pages: "139-147",
        type: "local-conference"
    },
    {
        id: 223,
        authors: "Ing-Chau Chang, Yi-Ting Mai and Lin-Huang Chang",
        year: 2004,
        title: "Hierarchical Multicast SIP for Multimedia and QoS Supports in Wireless Networks",
        venue: "The 10-th Mobile Computing Workshop, Mobile Computing 2004",
        pages: "123-131",
        type: "local-conference"
    },
    {
        id: 224,
        authors: "張英超，陳世",
        year: 2004,
        title: "利用RSVP協定整合端點之間動態調整使用者服務品質的保證與運作",
        venue: "2004 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 225,
        authors: "張英超，麥毅廷",
        year: 2004,
        title: "HMSIP for Multicast Multimedia service and End-to-End QoS Support",
        venue: "2004 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 226,
        authors: "張英超，麥毅廷",
        year: 2004,
        title: "HMSIP整合QoS於3G無線多媒體上的Fast Handoff",
        venue: "TANET 2004",
        pages: "501-506",
        type: "local-conference"
    },
    {
        id: 227,
        authors: "張英超，謝志松",
        year: 2004,
        title: "以JMF建構無線即時校園互動式多媒體廣播與社群系統",
        venue: "The 10-th Conference on Information Management and Implementation",
        pages: "297-310",
        type: "local-conference"
    },
    {
        id: 228,
        authors: "張英超，謝志松",
        year: 2005,
        title: "異質性網路下之階層式多媒體同步多點群播",
        venue: "The 11-th Mobile Computing Workshop, Mobile Computing 2005",
        pages: "485-494",
        type: "local-conference"
    },
    {
        id: 229,
        authors: "張英超，李萬琳，曾毓玲，黃信棠，楊東芬，潘靜美",
        year: 2005,
        title: "整合GPS定位導航、即時多媒體影音、社群交友之行動通訊系統",
        venue: "2005 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 230,
        authors: "張英超，王慶祥，連晨宇",
        year: 2005,
        title: "以行動區域為基礎的垂直換手預測",
        venue: "TANET 2005",
        type: "local-conference"
    },
    {
        id: 231,
        authors: "張英超，周家豪",
        year: 2006,
        title: "巢狀行動網路下之階層式Care-of Prefix架構",
        venue: "The 12-th Mobile Computing Workshop, Mobile Computing 2006",
        pages: "112-118",
        type: "local-conference"
    },
    {
        id: 232,
        authors: "張英超，陳世棻",
        year: 2006,
        title: "有線與無線網路整合環境內兩端點間之動態調整使用者服務品質需求的架構",
        venue: "The 12-th Mobile Computing Workshop, Mobile Computing 2006",
        pages: "152-161",
        type: "local-conference"
    },
    {
        id: 233,
        authors: "張英超，連晨宇，簡雅軒，黃安慶，林彥亨，楊素菀，劉建宏",
        year: 2006,
        title: "A P2P Location-Aware Surveillance System for Mobile Users",
        venue: "2006 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 234,
        authors: "張英超，周家豪",
        year: 2006,
        title: "巢狀行動網路下之階層式Care-of Prefix with BUT架構",
        venue: "2006全國電信研討會",
        type: "local-conference"
    },
    {
        id: 235,
        authors: "張英超，周家豪",
        year: 2007,
        title: "巢狀行動網路下之階層式Care-of Prefix with BUT架構之無縫換手處理機制的設計",
        venue: "The 13-th Mobile Computing Workshop, Mobile Computing 2007",
        pages: "187-196",
        type: "local-conference"
    },
    {
        id: 236,
        authors: "張英超，呂秋松",
        year: 2008,
        title: "巢狀式行動網路之快速換手機制",
        venue: "2008 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 237,
        authors: "張英超，張洋瑜",
        year: 2008,
        title: "巢狀行動網路下結合SIP與HCoP-B架構",
        venue: "2008 Symposium on Digital Life and Internet Technologies",
        type: "local-conference"
    },
    {
        id: 238,
        authors: "張英超，謝志松",
        year: 2008,
        title: "異質性無線網路下支援多媒體應用之階層式同步多點群播",
        venue: "The Fourth Workshop on Wireless Ad Hoc and Sensor Networks (WASN 2008)",
        type: "local-conference"
    },
    {
        id: 239,
        authors: "Ing-Chau Chang, Chih-Sung Hsieh and Ching-Hsiang Chu",
        year: 2009,
        title: "HSMM: Hierarchical Synchronized Multimedia Multicast for Heterogeneous Mobile Networks",
        venue: "臺灣網際網路研討會暨全球IPv6高峰會議 (TANET 2009)",
        type: "local-conference"
    },
    {
        id: 240,
        authors: "張英超，陳建豪",
        year: 2009,
        title: "Ubuntu作業系統下NEMO Platform for Linux(NEPL)的流程效能分析",
        venue: "臺灣網際網路研討會暨全球IPv6高峰會議 (TANET 2009)",
        type: "local-conference"
    },
    {
        id: 241,
        authors: "麥毅廷，張英超",
        year: 2009,
        title: "動態調整使用者服務品質需求於異質性網路架構",
        venue: "2009 National Computer Symposium (NCS 2009)",
        type: "local-conference"
    },
    {
        id: 242,
        authors: "張英超，呂秋松",
        year: 2009,
        title: "巢狀式行動網路下之反應式快速換手機制",
        venue: "2009 National Computer Symposium (NCS 2009)",
        type: "local-conference"
    },
    {
        id: 243,
        authors: "張英超，李原嘉，王元芬",
        year: 2009,
        title: "應用於高效率車輛單點路由協定的交通統計路口圖設計",
        venue: "2009 National Computer Symposium (NCS 2009)",
        type: "local-conference"
    },
    {
        id: 244,
        authors: "張英超，張洋瑜",
        year: 2010,
        title: "應用於巢狀式行動網路之SIP+HCOP-B架構與效能分析",
        venue: "臺灣網際網路研討會(TANET2010)",
        type: "local-conference"
    },
    {
        id: 245,
        authors: "張英超，洪堯倫，魏經軒，陳維祥，翁珮瑜",
        year: 2011,
        title: "巢狀行動網路下之階層式 Care-of Prefix with BUT 架構之實作",
        venue: "IETAC 2011資訊教育與科技應用研討",
        type: "local-conference"
    },
    {
        id: 246,
        authors: "張英超，王元芬",
        year: 2011,
        title: "使用歷史與即時市區交通資訊之高效率車輛網路單點路由",
        venue: "2011AIT資訊科技國際研討會",
        type: "local-conference"
    },
    {
        id: 247,
        authors: "張英超，李建勳",
        year: 2011,
        title: "The IG-ferry Protocol to Support Efficient Controlled Replication in Urban VANET",
        venue: "2011全國計算機會議(NCS2011)",
        type: "local-conference"
    },
    {
        id: 248,
        authors: "張英超，戴宏達，葉澧漢，謝東霖，張小徽",
        year: 2012,
        title: "基於交換即時路況之動態節能路徑規劃演算法設計與Android平台上的實作",
        venue: "2012第七屆智慧生活科技研討會",
        type: "local-conference"
    },
    {
        id: 249,
        authors: "張英超，李建勳",
        year: 2012,
        title: "支援鬧區車輛網路中有效率封包複製控制的IG-Ferry路由協定",
        venue: "The 17th Mobile Computing Workshop",
        type: "local-conference"
    },
    {
        id: 250,
        authors: "羅文成，張英超",
        year: 2013,
        title: "以信用激勵不同自私與興趣程度之車輛節點使用網路編碼於合作式內容分享",
        venue: "2013 ISC 第七屆智慧型系統工程應用研討會",
        type: "local-conference"
    },
    {
        id: 251,
        authors: "洪民翰，張英超",
        year: 2013,
        title: "車輛容忍延遲網路下高效率控制封包複製的軌跡路由協定",
        venue: "The 18th Mobile Computing Workshop",
        type: "local-conference"
    },
    {
        id: 252,
        authors: "張英超，羅文成",
        year: 2013,
        title: "以信用激勵網路編碼使用於合作式內容分享",
        venue: "NCS 2013 全國計算機會議",
        type: "local-conference"
    }
];

// 專書及專書論文
export const theses: Publication[] = [
    {
        id: 301,
        authors: "張英超",
        year: 1997,
        title: "多媒體群體合作平台之設計與應用",
        venue: "臺灣大學資訊工程所博士論文",
        type: "thesis"
    },
    {
        id: 302,
        authors: "張英超",
        year: 1992,
        title: "多媒體廣播式網路上之即時排程設計",
        venue: "臺灣大學資訊工程所碩士論文",
        type: "thesis"
    }
];

export const allPublications = [
    ...journalPublications,
    ...internationalConferences,
    ...localConferences,
    ...theses
];
