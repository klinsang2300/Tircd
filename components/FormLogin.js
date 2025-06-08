'use client'

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} >
      {pending ? "Submitting...." : "LOGIN"}
    </button>
  );
};




export default function Form() {

  return (
    <div className="minaform">
      <h2>LOGIN</h2>
      <form>
        <div className="form-menu">
             <label>
              USERNAME
            </label>
          <input
           
            name="user"
            required
          />
        </div>
        <div className="form-menu">
          <label>PASSWORD</label>
          <input
           
            name="pass"
            type="password"
          />
        </div>

        <SubmitButton />

      </form>
    </div>
  )

}