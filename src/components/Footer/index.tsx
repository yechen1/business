import { DefaultFooter } from "@ant-design/pro-layout";

import React from 'react';
import styles from './index.less';

const Footer: React.FC = () => (
    // <DefaultFooter className={styles.footer}  copyright='2023 STL中台系统'/>
    <div className={styles.footer}>© 2023 STL中台系统</div>
)

export default Footer;