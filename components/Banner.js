import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f5f5f7] dark:bg-[#0a1424]">
      <div className="relative isolate px-6 lg:pt-1 pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
          
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 dark:text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing Our Product Launch on ChatGPT.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="lg:text-8xl text-6xl font-bold  text-gray-900 dark:text-white sm:text-6xl">
              The Ultimate Adoption Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
              Dijitzation is a cutting-edge platform designed to help anyone
              streamline and optimize their digital processes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#3742fa] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3742ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
