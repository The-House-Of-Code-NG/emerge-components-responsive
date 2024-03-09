import Link from 'next/link';

const Breadcrumb = ({ links }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              <a>{link.label}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb