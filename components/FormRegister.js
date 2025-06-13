'use client'

import {  useFormStatus } from "react-dom";

export default function FormRegisPage(){
    return(
    <div className="minaform">
      <h2>REGISTER</h2>
      <form >
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

      </form>
    </div>


   )
}
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} >
      {pending ? "Submitting...." : "บันทึก"}
    </button>
  );
};