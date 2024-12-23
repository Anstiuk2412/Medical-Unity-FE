import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

export const fetchIsLoggedIn = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('jwtToken')?.value;

    let isLoggedIn = false;

    if (token) {
        try {
            const decodedToken: any = jwtDecode(token);
            if (decodedToken.exp > Date.now() / 1000) {
                isLoggedIn = true;
            }
        } catch (error) {
            isLoggedIn = false;
        }
    }

    return isLoggedIn;
};
