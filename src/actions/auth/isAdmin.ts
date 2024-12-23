import api from '@/helpers/axios';
import { cookies } from 'next/headers';

export const isAdmin = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('jwtToken')?.value;
        return await api
            .get('/User/admin-api', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .catch(
                (e: { message: string | undefined }) => new Error(e.message)
            );
    } catch (error) {
        console.error('Failed to register:', error);
    }
};
