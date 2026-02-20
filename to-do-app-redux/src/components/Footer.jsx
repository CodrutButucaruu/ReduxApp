export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p> © {currentYear} Task Manager, all rights reserved.</p>
        </footer>
    );
}
