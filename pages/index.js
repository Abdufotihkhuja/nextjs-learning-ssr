import Head from "next/head";
import Link from "next/link";
import A from "../components/A";
import Layout from "../components/Layout";

const Index = () => {
    return (
        <>
            <Head>
                <meta keywords={"users"}></meta>
                <title>Главная страница</title>
            </Head>
            <Layout>
                <h1>Главная страница</h1>
                <style jsx>
                    {`
                        .navbar {
                            background: orange;
                            padding: 15px;
                        }
                    `}
                </style>
            </Layout>
        </>
    );
};

export default Index;
