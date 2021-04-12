export const routes = [
    {
        path: "/home",
        name: "Home",
        component: () => import("./components/home/home.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./components/about/about.vue")
    },
    {
        path: "/issue",
        name: "Issue",
        component: () => import("./components/issue/issue.vue")
    },
    {
        path: "/issue-report",
        name: "IssueReport",
        component: () => import("./components/issueReport/issueReport.vue")
    },
    {
        path: "/admin/home",
        name: "AdminHome",
        component: () => import("./components/admin/home/home.vue")
    },
    {
        path: "/admin/inventory",
        name: "AdminInventory",
        component: () => import("./components/admin/inventory/inventory.vue")
    },
    {
        path: "/admin/report",
        name: "AdminReport",
        component: () => import("./components/admin/report/report.vue")
    },
    {
        path: "/admin/reportGen",
        name: "AdminReportGen",
        component: () => import("./components/admin/reportGen/reportGen.vue")
    }
];
