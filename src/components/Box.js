// components/BoxComponent.js
import styles from '@/styles/BoxComponent.module.css';


const BoxComponent = ({children}) => {
    return (
        <div className={styles.box}>
            {children}
        </div>
    );
};

export default BoxComponent;
