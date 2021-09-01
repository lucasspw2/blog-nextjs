import styles from './styles.module.scss';
import {ActiveLink} from '../ActiveLink';

export function Header(){
         
    return(
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/logo.svg" alt="DevNews" />
                
                <nav>
                   <ActiveLink activeClassName={styles.active} href="/">
                    <a>Home</a>
                    </ActiveLink>
                    
                    <ActiveLink activeClassName={styles.active} href="/posts">
                    <a>Posts</a>
                    </ActiveLink>
                </nav>
            </div>
            
        </header>

    )
}