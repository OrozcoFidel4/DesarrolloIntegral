import { useAuth } from "../hooks/useAuth";
import { Login } from "../pages/common";

export function AdminLayout({ children }) {
    const auth = useAuth();

    if (!auth) return <Login />;

    return (
        <div>
        {children}
        </div>
    );
}
