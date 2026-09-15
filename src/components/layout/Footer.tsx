import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMain}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/images/logo.jpg"
                  alt="TinyHabit Logo"
                  fill
                  sizes="40px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span>TinyHabit</span>
            </Link>

            <p className={styles.shortDesc}>
              TinyHabit — Thương hiệu tiên phong đồng hành phát triển bản thân từ những thói quen nhỏ dịu dàng. Chuyên cung cấp sổ tay Planner, Journaling và các giải pháp quản lý năng lượng, kiến tạo cuộc sống có chủ đích.
            </p>

            <p className={styles.tagline}>NURTURING HABITS - GROWING DREAMS</p>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Khám phá</h4>
            <ul className={styles.linksNav}>
              <li><Link href="/ve-tinyhabit" className={styles.linkItem}>Về TinyHabit</Link></li>
              <li><Link href="/bo-suu-tap" className={styles.linkItem}>Bộ sưu tập</Link></li>
              <li><Link href="/membership" className={styles.linkItem}>Membership</Link></li>
              <li><Link href="/qua-tang-membership" className={styles.linkItem}>Quà Tặng</Link></li>
              <li><Link href="/blog" className={styles.linkItem}>Blog</Link></li>
              <li><Link href="/lien-he" className={styles.linkItem}>Liên hệ</Link></li>
            </ul>
          </div>

          <div className={styles.socialCol}>
            <h4 className={styles.colTitle}>Kết nối cùng TinyHabit</h4>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/tiny.habitnotebook"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
                title="Instagram TinyHabit"
              >
                <Image
                  src="/images/social/instagram.png"
                  alt="Instagram TinyHabit"
                  width={40}
                  height={40}
                  className={styles.socialIconImg}
                />
              </a>

              <a
                href="https://www.facebook.com/tiny.habitnotebook"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Facebook"
                title="Facebook TinyHabit"
              >
                <Image
                  src="/images/social/facebook.webp"
                  alt="Facebook TinyHabit"
                  width={40}
                  height={40}
                  className={styles.socialIconImg}
                />
              </a>

              <a
                href="https://youtu.be/P_9DkCB1c-Y"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="YouTube"
                title="YouTube TinyHabit"
              >
                <Image
                  src="/images/social/youtube.png"
                  alt="YouTube TinyHabit"
                  width={40}
                  height={40}
                  className={styles.socialIconImg}
                />
              </a>

              <a
                href="https://shopee.vn/tinyhabit"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Shopee"
                title="Shopee TinyHabit"
              >
                <Image
                  src="/images/social/shopee.png"
                  alt="Shopee TinyHabit"
                  width={40}
                  height={40}
                  className={styles.socialIconImg}
                />
              </a>

              <a
                href="tel:0349338608"
                className={styles.phoneIconBtn}
                aria-label="Hotline 0349 338 608"
                title="Hotline: 0349 338 608"
              >
                <span>📞</span>
              </a>
            </div>

            <div className={styles.hotline}>
              Hotline hỗ trợ: <a href="tel:0349338608" className={styles.hotlineLink}>0349 338 608</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>© TinyHabit 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
