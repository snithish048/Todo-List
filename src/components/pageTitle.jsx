import React from 'react';
import styles from '../styles/pageTitle.module.css';

// function PageTitle({children}) {
//   return (
//     <h1 className={styles.title}>
//       {children}
//     </h1>
//   );
// }

// export default PageTitle;

const PageTitle = ({children}) => {
  return(
    <h1 className={styles.title}>
      {children}
    </h1>
  );
};

export default PageTitle;