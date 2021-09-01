import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...other}: ActiveLinkProps) {
    
    const {asPath} = useRouter();
    
    const className = asPath === other.href ? activeClassName : ''
    
    return(
        <Link {...other}>
            {cloneElement(children, {className})}
        </Link>
    );
}