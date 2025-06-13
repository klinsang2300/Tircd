import { SESSION_COOKIE_NAME } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"; // *** เปลี่ยน NextRequest เป็น NextResponse ***

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


export async function POST(request) {
    try {
        const { user_id, pass } = await request.json();

        if (!user_id) {
            return NextResponse.json(
                { success: false, message: 'User ID and password are required.' },
                { status: 400 }
            );
        }

        // 1. ค้นหาผู้ใช้ด้วย user_id เท่านั้น
        const user = await prisma.tUSER.findUnique({
            where: {
                user_id: user_id, // *** ใช้ user_id เท่านั้นในการค้นหา unique ***
            },
        });

        // 2. ตรวจสอบว่าพบผู้ใช้หรือไม่ และรหัสผ่านถูกต้องหรือไม่
        if (user && user.pass === pass) { // *** เปรียบเทียบรหัสผ่านด้วยตนเอง ***
            const sessionToken = `session_${user.T_C_ID}_${Date.now()}`;
            cookies().set(SESSION_COOKIE_NAME, sessionToken, { // cookies() ไม่ต้อง await
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // 1 สัปดาห์
                path: '/',
                sameSite: 'Lax',
            });
            return NextResponse.json({ success: true, message: 'Login successful' });
        } else {

            const existingUserByTCID = await prisma.tUSER.findUnique({ 
                where: {
                    T_C_ID: parseInt(user_id) || undefined, 
                },
            });

            if (existingUserByTCID) {
                return NextResponse.json(
                    { success: false, redirect: '/register', message: 'User ID found in T_C_ID. Please register.' },
                    { status: 401 } // Unauthorized
                );
            } else {
                return NextResponse.json(
                    { success: false, message: 'Invalid credentials.' },
                    { status: 401 } // Unauthorized
                );
            }
        }
    } catch (error) {
        console.error('Login API error:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error.' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); // ปิด connection ของ Prisma หลังจากใช้งาน
    }
}