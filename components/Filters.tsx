'use client';
import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { formUrlQuery } from '@/sanity/utils';
const links = ['all', 'frontend', 'backend', 'fullstack'];

const Filters = () => {
  const [active, setActive] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleFilter = (link: string) => {
    let newUrl = '';
    if (active === link) {
      setActive('');
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
        value: '',
      });
    } else {
      setActive(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };
  return (
    <>
      <ul className="text-white-800 body-text no-scrollbar flex flex-wrap flex-center w-full gap-2 overflow-auto py-12">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => {
              handleFilter(link);
            }}
            className={`${
              active === link ? 'bg-slate-900' : ''
            } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          >
            {link}
          </button>
        ))}
      </ul>
    </>
  );
};

export default Filters;
