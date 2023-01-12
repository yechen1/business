import { DefaultFooter } from "@ant-design/pro-layout";

import React from 'react';
import styles from './index.less';

const Footer: React.FC = () => (
    <DefaultFooter className={styles.footer}  copyright='2023 STL中台系统'/>
)

export default Footer;