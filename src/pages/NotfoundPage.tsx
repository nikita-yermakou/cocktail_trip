import NotFound from "../components/notFound/notFound";

const NotFoundPage: React.FC = () => {
    return(
        <NotFound text='This page does not exist, you can go to' to='/' link='the Homepage'/>
    )
}

export default NotFoundPage;