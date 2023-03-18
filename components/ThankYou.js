import Link from "next/link";

function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-white bg-gray-100">
      <div className="max-w-lg mx-auto p-6 bg-white dark:bg-[#181818] rounded shadow-md">
        <h1 className="text-3xl font-bold dark:text-white text-center mb-4">
          Thank You for Submitting Your Information!
        </h1>
        <p className="text-lg text-center mb-4">
          Your information has been successfully submitted.
        </p>
        <p className="text-lg text-center mb-8">
          We will get in touch with you shortly.
        </p>
        <Link href="/">
          <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Back to Homepage
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
