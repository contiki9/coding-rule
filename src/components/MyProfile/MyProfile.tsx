import React, { Component } from 'react';
import styles from './MyProfile.module.scss'
import {Button} from 'antd'

const MyProfile: React.FC = () => {
    return (
      <>
        <div className={styles.profileBox}>
          <div className={styles.profileBoxUserWrap}>
            <div className={styles.userImage}>
              <img src="https://pbs.twimg.com/profile_images/1157360313/01_400x400.jpg" width="64" alt=""/>
            </div>
            <div style={{marginLeft:'16px'}}>
              <div className={styles.userName}>コンチ</div>
              <div className={styles.userAbout}>UIデザイナー</div>
            </div>
            </div>
          <div style={{marginTop:'16px'}}>
            <p className={styles.userDescription}>
            名古屋でフルリモートの会社員で UIデザイナ をしています。<br/>
            プロトタイプからの開発を得意としており、デザインから実装まで一貫した品質での継続的な改善を評価いただいています。
            </p>
          </div> 
          <div style={{marginTop:'16px'}}>
            <Button href="https://cntlog.net/" target="_blank" type="primary"> Web サイト</Button>
          </div> 
        </div>
      </>
    );
}
export default MyProfile;