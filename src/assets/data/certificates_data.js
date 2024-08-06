const certificates_data = [
    {
        "name":"JP Morgan Chase Software Engineering Virtual Experience",
        "file_name": "JPMC Virtual Internship.pdf",
        "cat": [
            "Virtual Internship"
        ],
        "issuing_auth": [
            "The Forage",
            "JP Morgan Chase"
        ],
        "date": "2020-05-04",
        "cert_id": "DKNBFdSY4L6QNFWBP",
        "verification_link": "https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_xHXobkaGMrhrFY8S9_completion_certificate.pdf",
        "other_keywords":[]
    },
    {
        "name":"Technical Support Fundamentals",
        "file_name": "Technical Support Fundamentals by Google.pdf",
        "cat": [
            "Online Course"
        ],
        "issuing_auth": [
            "Coursera",
            "Google"
        ],
        "date": "2021-12-31",
        "cert_id": "KD7DWLWUNL35",
        "verification_link": "https://coursera.org/verify/KD7DWLWUNL35",
        "other_keywords":[]
    },
    {
        "name":"HackerRank Problem Solving (Basic)",
        "file_name": "HackerRank Problem Solving (Basic).pdf",
        "cat": [
            "Online Practise"
        ],
        "issuing_auth": [
            "HackerRank"
        ],
        "date": "2020-06-10",
        "cert_id": "AD0CE4699EEB",
        "verification_link": "https://www.hackerrank.com/certificates/ad0ce4699eeb",
        "other_keywords":[]
    },
    {
        "name":"Debugging C Code",
        "file_name": "Debugging C Code.pdf",
        "cat": [
            "Linkedin Learning",
            "College"
        ],
        "issuing_auth": [
            "Linkedin Learning"
        ],
        "date": "2022-02-10",
        "cert_id": "AQ81m1S1ZnbjdhQUs5hJ6tFFEgrm",
        "verification_link": "",
        "other_keywords":[]
    },
    {
        "name":"Learning C",
        "file_name": "Learning C - with exam result.pdf",
        "cat": [
            "Linkedin Learning",
            "College"
        ],
        "issuing_auth": [
            "Linkedin Learning"
        ],
        "date": "2022-02-10",
        "cert_id": "ASapop6sx8h2hFaIbJ9CDYGS4FJd",
        "verification_link": "",
        "other_keywords":[]
    },
    {
        "name":"Learning GitLab",
        "file_name": "Learning GitLab.pdf",
        "cat": [
            "Linkedin Learning",
            "College"
        ],
        "issuing_auth": [
            "Linkedin Learning"
        ],
        "date": "2022-02-03",
        "cert_id": "AVBg0SwHbBXjiK8BOeM9Hl6ZTYYq",
        "verification_link": "",
        "other_keywords":[]
    },
    {
        "name":"Learning Visual Studio Code",
        "file_name": "Learning Visual Studio Code.pdf",
        "cat": [
            "Linkedin Learning",
            "College"
        ],
        "issuing_auth": [
            "Linkedin Learning"
        ],
        "date": "2022-02-09",
        "cert_id": "AWEY_V2Kn0NbEDR3i2qIZOZHzl7Y",
        "verification_link": "",
        "other_keywords":[]
    },
    {
        "name":"Programming Foundations: Version Control with Git",
        "file_name": "Programming Foundations of VCS with Git.pdf",
        "cat": [
            "Linkedin Learning",
            "College"
        ],
        "issuing_auth": [
            "Linkedin Learning"
        ],
        "date": "2022-02-08",
        "cert_id": "ASO9MY_jci0te2lL8NgOJLtpy7k2",
        "verification_link": "",
        "other_keywords":[]
    },
    {
        "name":"Visual Studio Code Productivity Tips",
        "file_name": "Visual Studio Code Productivity Tips.pdf",
        "cat": [
            "Linkedin Learning",
            "College"
        ],
        "issuing_auth": [
            "Linkedin Learning"
        ],
        "date": "2022-02-09",
        "cert_id": "Ad0PZpKnjuBqz2vtPUxFVztviI1h",
        "verification_link": "",
        "other_keywords":[]
    },
    // {
    //     "name":"DATA STRUCTURES-UCS301-2021ODDSEM",
    //     "file_name": "UCS301_Data_Structures_Completion_Certificate.pdf",
    //     "cat": [
    //         "College"
    //     ],
    //     "issuing_auth": [
    //         "Thapar Institute of Engineering and Technology"
    //     ],
    //     "date": "2021-03-01",
    //     "cert_id": "EVd5tlDauk",
    //     "verification_link": "https://lms.thapar.edu/moodle/mod/customcert/verify_certificate.php?contextid=173593&code=EVd5tlDauk&qrcode=1",
    //     "other_keywords":[]
    // },
    // {
    //     "name":"OPERATING SYSTEMS-UCS303-2021ODDSEM",
    //     "file_name": "UCS303_Operating_Systems_Completion_Certificate.pdf",
    //     "cat": [
    //         "College"
    //     ],
    //     "issuing_auth": [
    //         "Thapar Institute of Engineering and Technology"
    //     ],
    //     "date": "2021-03-02",
    //     "cert_id": "lIJnowShmF",
    //     "verification_link": "https://lms.thapar.edu/moodle/mod/customcert/verify_certificate.php?contextid=173613&code=lIJnowShmF&qrcode=1 ",
    //     "other_keywords":[]
    // },
    // {
    //     "name":"PRACTICAL COMPUTING-UCS311-2021ODDSEM",
    //     "file_name": "UCS311_Practical_Computing_Completion_Certificate.pdf",
    //     "cat": [
    //         "College"
    //     ],
    //     "issuing_auth": [
    //         "Thapar Institute of Engineering and Technology"
    //     ],
    //     "date": "2021-03-02",
    //     "cert_id": "fKBydjzUSE",
    //     "verification_link": "https://lms.thapar.edu/moodle/mod/customcert/verify_certificate.php?contextid=173615&code=fKBydjzUSE&qrcode=1",
    //     "other_keywords":[]
    // },
    // {
    //     "name":"DISCRETE MATHEMATICAL STRUCTURES-UCS405-2021ODDSEM",
    //     "file_name": "UCS405_Discrete_Mathematical_Structures_Completion_Certificate.pdf",
    //     "cat": [
    //         "College"
    //     ],
    //     "issuing_auth": [
    //         "Thapar Institute of Engineering and Technology"
    //     ],
    //     "date": "2021-03-02",
    //     "cert_id": "gCnKAnFPMi",
    //     "verification_link": "https://lms.thapar.edu/moodle/mod/customcert/verify_certificate.php?contextid=173599&code=gCnKAnFPMi&qrcode=1",
    //     "other_keywords":[]
    // },
    // {
    //     "name":"ENGINEERING DESIGN PROJECT-I-UTA013-2021ODDSEM",
    //     "file_name": "UTA013_Engineering_Design_Project_I_Completion_Certificate.pdf",
    //     "cat": [
    //         "College"
    //     ],
    //     "issuing_auth": [
    //         "Thapar Institute of Engineering and Technology"
    //     ],
    //     "date": "2021-03-03",
    //     "cert_id": "1xrtg8lQmT",
    //     "verification_link": "https://lms.thapar.edu/moodle/mod/customcert/verify_certificate.php?contextid=174385&code=1xrtg8lQmT&qrcode=1",
    //     "other_keywords":[]
    // },
    {
        "name":"Career Essentials in Generative AI",
        "file_name": "Career Essentials in Generative AI by Microsoft and LinkedIn.pdf",
        "cat": [
            "Linkedin Learning",
            "Generative AI"
        ],
        "issuing_auth": [
            "Microsoft",
            "LinkedIn Learning"
        ],
        "date": "2024-06-17",
        "cert_id": " 2dfa3b0a230fefcc1c470164b1919e4265d98a97477fcd7c5bed0d37505629ee",
        "verification_link": "",
        "other_keywords":[]
    },
    {
        "name":"Accenture Development & Advanced Engineering Job Simulation",
        "file_name": "Accenture North America Coding Development & Advanced Engineering Job Simulation.pdf",
        "cat": [
            "Virtual Internship"
        ],
        "issuing_auth": [
            "The Forage",
            "Accenture"
        ],
        "date": "2024-06-13",
        "cert_id": "ZxiNmHBGWokfHSwzF",
        "verification_link": "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/XvvYRvb2YpfkyA52H_Accenture%20North%20America_xHXobkaGMrhrFY8S9_1718286460486_completion_certificate.pdf",
        "other_keywords":[]
    },
    {
        "name":"OCI Generative AI Certification",
        "file_name": "OCI Generative AI Certification.pdf",
        "cat": [
            "Online Course",
            "Generative AI"
        ],
        "issuing_auth": [
            "Oracle University"
        ],
        "date": "2024-07-23",
        "cert_id": "312795178OCI2024GAIOCP",
        "verification_link": "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4DC655F0F2F4A3C02321B16936FB2203DE29751EDC3B05E53BE2CC4B113B9AD5",
        "other_keywords":[]
    }
];

export default certificates_data;