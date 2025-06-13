'use client'


import { useActionState, useEffect } from 'react';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { authenticate } from '@/lib/action';
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} >
      {pending ? "Submitting...." : "LOGIN"}
    </button>
  );
};

export default function FormLogin() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const [state, formAction] = useActionState(authenticate, {
    message: null,
    success: false,
  });

  useEffect(() => {
    if (state.success) {
      const redirectTo = searchParams.get('redirect') || '/time';
      router.push(redirectTo);
    }else{
      if(state.redirect)
        redirect(state.redirect)
    }
  }, [state.success,state.redirect, router, searchParams]);

  return (
    <div className="minaform">
      <h2>LOGIN</h2>
      <form action={formAction}>
        <div className="form-menu">
          <label>
            USERNAME
          </label>
          <input
            name="user_id"
            required
            autoComplete="username"
          />
        </div>
        <div className="form-menu">
          <label>PASSWORD</label>
          <input
            id='pass'
            name="pass"
            type="password"
            autoComplete="current-password"
            
          />
        </div>
        <SubmitButton />
        {state.message && ( <p className={`text-center text-md ${state.success ? 'text-green-600' : 'text-red-600'} mt-4`}>
                        {state.message}
                    </p>)}
      </form>
    </div>
  )

}