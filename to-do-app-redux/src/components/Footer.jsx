export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer
            style={{
                textAlign: 'center',
                padding: '20px',
                marginTop: '20px',
            }}
        >
            <p> © {currentYear} Task Manager, all rights reserved.</p>
        </footer>
    );
}
