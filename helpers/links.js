import { NavLink } from 'components';

export default function links(linksArray, adminNav=false) {
  if (!typeof linksArray === 'object') {
     return "Must provide an array of links.";
  }

  let path = adminNav ? "/admin/" : "/";

  return linksArray.map(item => {
    return (
      <li key={path + item.toLowerCase().split(' ')[0] + "Key"}>
        <NavLink className={item.toLowerCase().split(' ')[0] + "NavLink"} href={path + item.toLowerCase().split(' ')[0]}>
          {item}
        </NavLink>
      </li>
    );
  });
}