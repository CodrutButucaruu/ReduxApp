export default function Header({children}) {
    return (
        <div>
            <h1>Task Manager</h1>
            <h2>
                Manage your tasks efficiently.
                {children}
            </h2>
        </div>
    );
}
