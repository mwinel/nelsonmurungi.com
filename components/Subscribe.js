import { useState, useRef } from "react";
import useSWR from "swr";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

const Subscribe = () => {
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "loading" });

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "error",
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setForm({
      state: "success",
      message: `Ahoy! You're now on the list.`,
    });
  };

  return (
    <div className="border border-blue-200 rounded p-4 lg:p-8 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-gray-700">
      <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">
        Subscribe to the Newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-300">
        I always send out an email when I create something interesting.
      </p>
      <form
        className=" my-4 flex flex-col lg:flex-row justify-between"
        onSubmit={handleSubscribe}
      >
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="you@you.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 focus:outline-none block w-full border-gray-300 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="flex items-center justify-center p-2 font-medium bg-green-700 text-gray-100 rounded mt-1 lg:mt-0 lg:w-64 lg:ml-2 focus:outline-none"
          type="submit"
        >
          {form.state === "loading" ? <LoadingSpinner /> : "Subscribe Now"}
        </button>
      </form>
      {form.state === "error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === "success" ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200"></p>
      )}
    </div>
  );
};

export default Subscribe;
