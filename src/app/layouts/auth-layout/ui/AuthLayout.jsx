export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-[var(--background-base)] flex justify-center">
            <div className="max-w-[600px] w-full bg-grid min-h-screen flex items-center justify-center px-4">
                {children}
            </div>
        </div>
    );
}
