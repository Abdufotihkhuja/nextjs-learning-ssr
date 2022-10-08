import { useRouter } from "next/router";

export default function ({ user }) {
    const { query } = useRouter();

    return (
        <div>
            <h1>Пользователь с id {query.id}</h1>
            <div>Имя пользователя -{user.name}</div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { params } = context;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await response.json();

    return {
        props: {
            user: data,
        },
    };
}
