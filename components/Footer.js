export default function Footer({ stores }) {
    return (
        <footer className="p-4 mt-1 bg-green-400">
        <p className="font-medium">{stores.length} Locations World Wide</p>
        </footer>
    );
}