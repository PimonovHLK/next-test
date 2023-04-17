import Head from "next/head";
import A from "./A";

const MainContainer = ({children, keyword}) => {
    return (
        <>
            <Head>
                <meta keyword={"nextjs" + keyword}/>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text={'Главная'}></A>
                <A href={'/users'} text={'Пользователи'}></A>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {
                    `.navbar {
                        background: orange;
                        padding: 15px;
                        a {
                            text-decoration: none;
                        }
                    }
                    `
                }
            </style>
        </>
    );
};

export default MainContainer;