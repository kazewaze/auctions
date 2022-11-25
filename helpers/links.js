import Link from 'next/link'

export default function links(linksArray, adminNav=false) {
  if (!typeof linksArray === 'object') {
     return "Must provide an array of links.";
  }

  let path = adminNav ? "/admin/" : "/";

  return linksArray.map(item => {
    return (
      <li key={item + "Key"}>
        <Link href={path + item.toLowerCase().split(' ')[0]}>
          {item}
        </Link>
      </li>
    );
  });
}