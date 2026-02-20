export default function Header({children}) {
    return (
        <div
            style={{
                textAlign: 'center',
                padding: '20px',
                marginTop: '20px',
            }}
        >
            <h1>Task Manager</h1>
            <h2>
                Manage your tasks efficiently.
                {children}
            </h2>
        </div>
    );
}
