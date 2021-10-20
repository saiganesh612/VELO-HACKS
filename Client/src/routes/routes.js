import Home from "../Pages/Home/home"
import ExperienceForm from '../Pages/ExperienceForm/ExperienceForm';
import RequestForm from '../Pages/TeamMatesRequestForm/RequestForm';
import TeammatesFeed from '../Pages/TeamMatesFeed/TeammatesFeed';
import Projects from '../Pages/Projects/Projects';
import DetailedProject from '../Pages/DetailedProject/DetailedProject'

const routes = [
    { path: "/", component: <Home /> },
    { path: "/post-your-experience", component: <ExperienceForm /> },
    { path: "/find-your-teammate", component: <RequestForm /> },
    { path: "/team-feed", component: <TeammatesFeed /> },
    { path: "/projects", component: <Projects /> },
    { path: "/projects/:id", component: <DetailedProject /> }
]

export default routes
