export const routes = [{
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
        path: "/home",
        name: "AdminHome",
        component: () => import("./components/admin/home/home.vue")
    },
    {
        path: "/inventory",
        name: "AdminInventory",
        component: () => import("./components/admin/inventory/inventory.vue")
    },
    {
        path: "/report",
        name: "AdminReport",
        component: () => import("./components/admin/report/report.vue")
    },
    {
        path: "/reportGen",
        name: "AdminReportGen",
        component: () => import("./components/admin/reportGen/reportGen.vue")
    },
    {
      path: "/add-member",
      name: "AddMember",
      component: () => import("./components/admin/addMember/add_member.vue")
    }
];
