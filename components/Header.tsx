import React from 'react';

interface Props {
  title: string;
  query: string;
  category: string;
}

const Header = ({ title, query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className="heading-3 self-start text-white-800">
        Поиск по "{query}" в <span className="capitalize">{category}</span>
      </h1>
    );
  }
  if (query) {
    return (
      <h1 className="heading-3 self-start text-white-800">
        Поиск по "{query}"
      </h1>
    );
  }
  if (category) {
    return (
      <h1 className="heading-3 self-start text-white-800">
        <span className="capitalize">{category}</span>
      </h1>
    );
  }
  return (
    <h1 className="heading-3 self-start text-white-800">Ничего не найдено</h1>
  );
};

export default Header;
