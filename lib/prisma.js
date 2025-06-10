// lib/prisma.js
import { PrismaClient } from '@prisma/client';

let prisma;

// ตรวจสอบว่าอยู่ในโหมด production หรือ development
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // ในโหมด development, ใช้ global object เพื่อเก็บ PrismaClient instance
  // เพื่อป้องกันการสร้าง instance ใหม่ทุกครั้งที่มีการ Hot Reload
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;