import {PrismaClient} from '@prisma/client';
import { env } from '$env/dynamic/private';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function handle({ event, resolve }) {
    const path = event.url.pathname;
    const cookie = event.cookies.get('token');
    if (['/', '/api/login','menu',].includes(path)) {
        return await resolve(event);
    } else {
        if (cookie) {
            try {
                const decoded = jwt.verify(cookie, 'signeshemmewli45367t78gik');
                event.request.user = decoded;
                return await resolve(event);
            } catch (e) {
                return new Response('Unauthorized: ' + e, { status: 401 });
            }
        }
    }
    return new Response('Unauthorized', { status: 401 });
}
