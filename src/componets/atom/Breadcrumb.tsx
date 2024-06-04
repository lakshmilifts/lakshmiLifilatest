'use client'
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  title: string;
  parent?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, parent }) => {

  return (
    <div className="breadcrumb-area pt-20 pb-20 bg-gray-100 bg-cover bg-center relative" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }} data-black-overlay="6">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner pt-10 text-center">
              <h2 className="text-4xl font-bold text-white">{title}</h2>
              <ul className="flex justify-center mt-4 space-x-4 text-white">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                {parent && (
                  <li className="breadcrumb-item">
                    {parent}
                  </li>
                )}
                <li className="breadcrumb-item active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
