import React from 'react';

interface Props {
  query: string;
  category: string;
}

const Header = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className="heading-3 self-start text-white-800">
        Поиск по &quot;query&quot; в{' '}
        <span className="capitalize">{category}</span>
      </h1>
    );
  }
  if (query) {
    return (
      <h1 className="heading-3 self-start text-white-800">
        Поиск по &quot;{query}&quot;
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
