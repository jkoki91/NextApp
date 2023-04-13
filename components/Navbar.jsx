import { ActiveLink } from "./ActiveLink";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
  return (
        <nav style={{ marginLeft: '20px', display:'flex', gap: '10px'}}>
            {menuItems.map( (element,i) => <ActiveLink key={i} text={element.text} href={element.href} />)}
        </nav>
    )
}



