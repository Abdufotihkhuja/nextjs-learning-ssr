import A from "./A";

const Layout = ({ children }) => {
    return (
        <>
            <div className="navbar">
                <A href="/" text={"Главная"} />
                <A href="/users" text={"Пользователи"} />
            </div>
            <div>{children}</div>
        </>
    );
};

export default Layout;
