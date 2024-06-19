"use client";

import { useRouter } from "next/navigation";


export default function NotFound() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <span className="bg-gray-500-to-b from-gray-900 to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-purple-600">
        404
      </span>
      <h2 className="font-heading my-2 text-2xl font-bold">
        Something&apos;s missing
      </h2>
      <p>
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className="mt-8 flex justify-center gap-2 sm:text-base text-sm ">
        <button onClick={() => router.back()} className="bg-black text-white py-2 px-6 rounded-[20px]">
          Go back
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-black text-white  py-2 px-6 rounded-[20px]"
        >
          Get Help
        </button>
      </div>
    </div>
  );
}
