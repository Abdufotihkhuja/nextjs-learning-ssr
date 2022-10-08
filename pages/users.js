import Link from "next/link";
import { useEffect, useState } from "react";

const Users = ({ users }) => {
    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map((user) => {
                    return (
                        <Link href={`/users/${user.id}`}>
                            <li key={user.id}>{user.name}</li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();

    return {
        props: {
            users: data,
        },
    };
}
