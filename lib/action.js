
export async function authenticate(prevState, formData) {
  const user_id = formData.get('user_id'); // เปลี่ยนจาก email เป็น user_id
  const pass = formData.get('pass');       // เปลี่ยนจาก password เป็น pass

  if (!user_id) {
    return { message: 'All fields are required.', success: false };
  }

  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'localhost:3000'}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "user_id": user_id, "pass": pass }), // ส่ง user_id และ pass ไปยัง API
    });

    const result = await res.json(); // รับผลลัพธ์จาก API


    if (result.success) {

      return { success: true, message: result.message, redirect: result.redirect || '/time' }; 
    } else {

      return { success: false, message: result.message || 'Login failed.', redirect: result.redirect }; 
    }
  } catch (error) {
    console.error('Authentication API call failed:', error);
    return { success: false, message: 'An unexpected error occurred during login. Please try again.' };
  }
}