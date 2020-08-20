import React from 'react';
import Link from 'next/link';

const links = [
  { href: 'https://drive.google.com/drive/u/0/folders/1fmRIf1gTuescmvOBDq6PRcW9qIguL3de', label: 'Pricing Pages' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
        </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      ul {
        margin: 0;
        padding: 0;
        overflow:hidden;
        list-style-type: none;
        background-color: #4B88A2;
      }
      li {
        float:left;
      }
      li a {
        display: block;
        color: #FFF9FB;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 2em;
      }
      li a:hover {
        color: #D3D4D9;
      }
    `}</style>
  </nav>
);

export default Nav;
