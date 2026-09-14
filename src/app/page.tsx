import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getFeaturedProducts } from '@/data/products';
import styles from '@/styles/pages/home.module.css';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="container">
      {/* SECTION 1: HERO BANNER */}
      <section className={styles.hero}>
        <span className={styles.heroTagline}>NURTURING HABITS - GROWING DREAMS</span>
        <h1 className={styles.heroTitle}>
          Tạo nên thay đổi có ý nghĩa từ những thói quen nhỏ nhất
        </h1>
        <p className={styles.heroSubtitle}>
          TinyHabit là thương hiệu đồng hành phát triển bản thân, cung cấp các bộ Planner, Journaling và công cụ nuôi dưỡng thói quen dịu dàng, bền vững.
        </p>
        <div className={styles.heroCtas}>
          <Button href="/bo-suu-tap" variant="primary" size="lg">
            Khám phá Bộ sưu tập
          </Button>
          <Button href="/ve-tinyhabit" variant="outline" size="lg">
            Về Triết lý TinyHabit
          </Button>
        </div>
      </section>

      {/* SECTION 2: CUSTOMER PROBLEM & INSIGHT */}
      <section className={styles.section}>
        <div className={styles.problemCard}>
          <p className={styles.problemQuote}>
            &ldquo;Tôi từng mua rất nhiều Planner vì muốn thay đổi bản thân, nhưng rồi lại bỏ cuộc vì áp lực hoàn hảo...&rdquo;
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: '1.6' }}>
            Bạn không thiếu kỷ luật. Vấn đề là hầu hết hệ thống quản lý đều quá khắc nghiệt. TinyHabit được tạo ra để giúp bạn gạt bỏ cảm giác có lỗi và tiến bộ từ những hành động nhỏ có thể lặp lại mỗi ngày.
          </p>
        </div>
      </section>

      {/* SECTION 3: BRAND PHILOSOPHY PILLARS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-brand)' }}>TRIẾT LÝ CỐT LÕI</span>
          <h2 className={styles.sectionTitle}>Ba Trụ Cột Nurturing Habits</h2>
          <p className={styles.sectionDesc}>Hệ thống giúp bạn duy trì nhịp sống kỷ luật nhưng luôn bình yên</p>
        </div>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🌱</span>
            <h3 className={styles.pillarTitle}>1. Gentle Discipline</h3>
            <p className={styles.pillarDesc}>
              Kỷ luật dịu dàng. Ưu tiên sự đều đặn và bền vững hơn là những nỗ lực cực đoan gây kiệt sức.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>⚡</span>
            <h3 className={styles.pillarTitle}>2. Energy over Time</h3>
            <p className={styles.pillarDesc}>
              Quản lý năng lượng thay vì chỉ ép buộc thời gian. Lắng nghe nhịp sinh hoạt và khả năng tập trung sâu.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <span className={styles.pillarIcon}>🌿</span>
            <h3 className={styles.pillarTitle}>3. Intentional Living</h3>
            <p className={styles.pillarDesc}>
              Sống có chủ đích. Chủ động lựa chọn điều quan trọng thay vì sống theo quán tính hay mạng xã hội.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: COLLECTION PREVIEW */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Khám phá Bộ Sưu Tập</h2>
            <p className={styles.sectionDesc}>Lựa chọn công cụ phù hợp với chặng đường bạn đang đi</p>
          </div>

          <div className={styles.collectionGrid}>
            <Link href="/bo-suu-tap#planner" className={styles.colCard}>
              <span style={{ fontSize: '2rem' }}>📖</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Sổ tay Planner</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                JOURNEY 90 Days, Dopamine Detox 30 Days, Inner Power 60 Days.
              </p>
              <span style={{ color: 'var(--color-brand)', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto' }}>
                Xem danh mục →
              </span>
            </Link>

            <Link href="/bo-suu-tap#journaling" className={styles.colCard}>
              <span style={{ fontSize: '2rem' }}>✍️</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Sổ tay Nhật Ký</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                TinyTalk 60 Days, 30 Days Journaling lắng nghe cảm xúc bản thân.
              </p>
              <span style={{ color: 'var(--color-brand)', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto' }}>
                Xem danh mục →
              </span>
            </Link>

            <Link href="/bo-suu-tap#bo-tro" className={styles.colCard}>
              <span style={{ fontSize: '2rem' }}>🎨</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Sản phẩm Bổ Trợ</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
                Kit Gieo Mầm Thói Quen, Notebook Talk To Yourself Gently & Just Me & My Mind.
              </p>
              <span style={{ color: 'var(--color-brand)', fontWeight: 600, fontSize: '0.9rem', marginTop: 'auto' }}>
                Xem danh mục →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PRODUCTS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Sản Phẩm Nổi Bật</h2>
          <p className={styles.sectionDesc}>Những người bạn đồng hành được yêu thích nhất tại TinyHabit</p>
        </div>

        <ProductGrid products={featuredProducts} columns={4} />

        <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
          <Button href="/bo-suu-tap" variant="outline" size="md">
            Xem tất cả 8 sản phẩm
          </Button>
        </div>
      </section>

      {/* SECTION 6: HOW TINYHABIT WORKS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Cách TinyHabit Đồng Hành Với Bạn</h2>
          <p className={styles.sectionDesc}>4 bước nhỏ hướng tới sự phát triển dài lâu</p>
        </div>

        <div className={styles.howGrid}>
          <div className={styles.howStep}>
            <span className={styles.stepNum}>01</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Lựa chọn hành trình</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>
              Chọn cuốn Planner hoặc Journaling 30, 60 hay 90 ngày đúng với nhu cầu hiện tại.
            </p>
          </div>

          <div className={styles.howStep}>
            <span className={styles.stepNum}>02</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Hành động nhỏ mỗi ngày</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>
              Dành 5-10 phút sáng/tối để ghi nhận năng lượng và làm các nhiệm vụ khả thi.
            </p>
          </div>

          <div className={styles.howStep}>
            <span className={styles.stepNum}>03</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Nhìn lại & Phản chiếu</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>
              Đánh giá tiến trình hàng tuần một cách dịu dàng, không phán xét bản thân.
            </p>
          </div>

          <div className={styles.howStep}>
            <span className={styles.stepNum}>04</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Nuôi dưỡng thói quen</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>
              Biến từng bước tiến nhỏ thành sự tự tin và nhịp sống chủ động lâu dài.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: ABOUT TINYHABIT PREVIEW */}
      <section className={styles.sectionAlt}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span style={{ fontSize: '2.5rem', marginBottom: '12px', display: 'block' }}>🌱</span>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Về TinyHabit</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: '1.7', marginBottom: '24px' }}>
            TinyHabit không ra đời để bán những cuốn sổ tay thông thường. Chúng mình bắt đầu từ trăn trở: Làm sao để người trẻ có thể kiên trì thay đổi bản thân mà không rơi vào cái bẫy kiệt sức hay cảm giác tội lỗi?
          </p>
          <Button href="/ve-tinyhabit" variant="primary">
            Đọc câu chuyện thương hiệu
          </Button>
        </div>
      </section>

      {/* SECTION 8: MEMBERSHIP SHOWCASE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-accent)' }}>HỆ SINH THÁI ĐỒNG HÀNH</span>
          <h2 className={styles.sectionTitle}>TinyHabit Membership</h2>
          <p className={styles.sectionDesc}>Gói đồng hành trọn năm cho hành trình phát triển bền vững</p>
        </div>

        <div className={styles.problemCard} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
            Dành cho ai muốn cam kết dài lâu với bản thân
          </h3>
          <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
            Membership bao gồm 4 cuốn Planner cho 4 quý, quyền tham gia các buổi Workshop chuyên đề, buổi gặp mặt Tiny Meeting và sự hỗ trợ liên tục từ cộng đồng.
          </p>
          <div style={{ marginTop: '8px' }}>
            <Button href="/membership" variant="secondary">
              Tìm hiểu quyền lợi Membership →
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9: SOCIAL PROOF / TESTIMONIALS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Cảm Nhận Từ Cộng Đồng</h2>
          <p className={styles.sectionDesc}>Những chia sẻ chân thật từ những người đang dùng TinyHabit mỗi ngày</p>
        </div>

        <div className={styles.testimonialGrid}>
          <div className={styles.testCard}>
            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--color-text)' }}>
              &ldquo;Nhờ JOURNEY 90 Days mà mình không còn đặt những mục tiêu quá sức rồi bỏ dở nữa. Cảm giác mỗi ngày hoàn thành một việc nhỏ rất dễ chịu.&rdquo;
            </p>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
              — Minh Anh, Sinh viên Hà Nội
            </span>
          </div>

          <div className={styles.testCard}>
            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--color-text)' }}>
              &ldquo;Cuốn Dopamine Detox giúp mình nhận ra mình đã tốn bao nhiêu thời gian lướt TikTok vô thức. Giờ mình lấy lại được sự tập trung khi làm việc.&rdquo;
            </p>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
              — Hoàng Nam, Content Creator
            </span>
          </div>

          <div className={styles.testCard}>
            <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--color-text)' }}>
              &ldquo;Giấy sổ rất dày, viết êm tay. Thích nhất là những câu hỏi nhắc nhở dịu dàng trong sổ TinyTalk mỗi tối.&rdquo;
            </p>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-brand-dark)' }}>
              — Thanh Thảo, Nhân viên Văn phòng
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL INSTAGRAM CTA */}
      <section className={styles.finalCtaBox}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800 }}>
          Sẵn sàng bắt đầu hành trình dịu dàng cùng TinyHabit?
        </h2>
        <p style={{ maxWidth: '600px', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          Nhắn tin cho TinyHabit qua Instagram để được team tư vấn lựa chọn sản phẩm phù hợp nhất với chặng đường hiện tại của bạn.
        </p>
        <Button
          href="https://www.instagram.com/tiny.habitnotebook"
          external
          variant="accent"
          size="lg"
        >
          Nhắn TinyHabit qua Instagram
        </Button>
      </section>
    </div>
  );
}
