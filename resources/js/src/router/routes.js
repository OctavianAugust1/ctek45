const Login = () => import("@/src/pages/Login.vue");
const Home = () => import("@/src/pages/Home.vue");
const AboutUs = () => import("@/src/pages/AboutUs.vue");
const Articles = () => import("@/src/pages/Articles.vue");
const Article = () => import("@/src/pages/Article.vue");
const Patents = () => import("@/src/pages/Patents.vue");
const Developments = () => import("@/src/pages/Developments.vue");
const Development = () => import("@/src/pages/Development.vue");
const Contacts = () => import("@/src/pages/Contacts.vue");
// const Feedback = () => import("@/src/pages/Feedback.vue");

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/about_us',
        component: AboutUs
    },
    {
        path: '/articles',
        component: Articles
    },
    {
        path: '/article/:id',
        component: Article
    },
    {
        path: '/patents',
        component: Patents
    },
    {
        path: '/developments',
        component: Developments
    },
    {
        path: '/development/:id',
        component: Development
    },
    {
        path: '/contacts',
        component: Contacts
    },
    // {
    //     path: '/feedback',
    //     component: Feedback
    // },
]

export default routes
