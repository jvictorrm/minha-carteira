import React,
{
    createContext,
    useContext,
    useState
}
    from 'react';

interface IAuthContext {
    isLoggedIn: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() =>
        !!localStorage.getItem('@minha-carteira:isLoggedIn')
    );

    const signIn = (email: string, password: string) => {
        if (email === 'teste@teste.com' && password === '123teste') {
            localStorage.setItem('@minha-carteira:isLoggedIn', 'true');
            setIsLoggedIn(true);
            return;
        }

        alert('Usúario e/ou senha inválidos!')
    }

    const signOut = () => {
        localStorage.removeItem('@minha-carteira:isLoggedIn');
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };