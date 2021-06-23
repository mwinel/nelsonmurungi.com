const Subscribe = () => {
  return (
    <div className="border border-blue-200 rounded p-4 lg:p-8 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-gray-700">
      <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">
        Subscribe to the Newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-300">
        I always send out an email when I create something interesting.
      </p>
      <form className=" my-4 flex flex-col lg:flex-row justify-between">
        <input
          // ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="you@you.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 focus:outline-none block w-full border-gray-300 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="flex items-center justify-center p-2 font-medium bg-green-700 text-gray-100 rounded mt-1 lg:mt-0 lg:w-64 lg:ml-2"
          type="submit"
        >
          Subscribe Now
          {/* {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribe'} */}
        </button>
      </form>
      {/* {form.state === 'error' ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === 'success' ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
        </p>
      )} */}
    </div>
  );
};

export default Subscribe;
