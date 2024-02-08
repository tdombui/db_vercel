import React from "react";
import { SendHorizonal } from "lucide-react";
import { useFormStatus } from "react-dom";
import "./local-css/contact.css";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="mt-5 group flex items-center justify-center gap-1 h-[2rem] w-[6rem] text-xs bg-emerald-600 text-white rounded-md outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-rose-300 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 shadow-md button"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <SendHorizonal className="ml-1 text-xs w-5 h-5 opacity-70 transition-all group-hover:translate-x-1.5" />{" "}
        </>
      )}
    </button>
  );
}
