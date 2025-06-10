
import {  isAuthenticated } from '@/lib/auth'; // นำเข้าฟังก์ชัน
import { redirect } from 'next/navigation'; // สำหรับ Server Component redirect

export default async function TimePage() {


  if (!isAuthenticated()) {
 
    redirect('/login'); 
   
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard Page</h1>
      <p className="text-lg text-gray-600">
        ยินดีต้อนรับสู่หน้า Dashboard คุณได้ Login สำเร็จแล้ว!
      </p>
      {/* เพิ่มปุ่ม Logout */}
      <form action="/api/logout" method="POST" className="mt-8">
        <button
          type="submit"
          className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
        >
          Logout
        </button>
      </form>
    </div>
  );
}