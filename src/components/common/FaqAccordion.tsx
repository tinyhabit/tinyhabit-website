'use client';

import React, { useState } from 'react';
import styles from './FaqAccordion.module.css';

export interface FaqItemData {
  id: number;
  question: string;
  answer: string;
  bullets?: string[];
}

export const FAQ_ITEMS: FaqItemData[] = [
  {
    id: 1,
    question: '1/ Mình từng mua rất nhiều sổ Planner nhưng thường bỏ dở sau vài tuần, TinyHabit có giúp mình thay đổi được không?',
    answer: 'Hoàn toàn có thể. TinyHabit được xây dựng dựa trên số liệu thực tế rằng 69.6% người dùng Planner bỏ cuộc vì layout quá phức tạp và áp lực phải hoàn hảo. Thay vì chỉ bán một cuốn sổ, chúng mình cung cấp hệ thống đồng hành giúp bạn đi từ những thói quen nhỏ nhất, giảm bớt áp lực và sự tội lỗi để bạn duy trì sự nhất quán một cách nhẹ nhàng.'
  },
  {
    id: 2,
    question: '2/ Mình là người hay trì hoãn và dễ mất tập trung, liệu sản phẩm này có quá khó để sử dụng?',
    answer: 'Không hề. TinyHabit được thiết kế dành riêng cho những bạn "bệnh nền" trì hoãn nhiều. Hệ thống hỗ trợ đi kèm sẽ giúp bạn bẻ nhỏ mục tiêu và thực hành các thay đổi "tí hon" (như review tối, todo list đơn giản), giúp cuộc sống gọn gàng và khoa học hơn mà không gây choáng ngợp.'
  },
  {
    id: 3,
    question: '3/ Thẻ Membership 528.000 VNĐ cụ thể bao gồm những quyền lợi gì?',
    answer: 'Sự đồng hành nhất quán, TinyHabit sẽ đồng hành và hỗ trợ bạn trong suốt quá trình phát triển bản thân:',
    bullets: [
      'Nhận tổng 04 quyển sổ Planner theo các BST mới nhất trong năm.',
      'Tham gia miễn phí các buổi Workshop Online/Offline để kết nối cộng đồng phát triển bản thân (Yoga, Thiền, Vẽ tranh, Cắm hoa,...)',
      'Trọn bộ 100 tài liệu Phát triển bản thân X2 (Habit, Energy, Time, Focus, Meditation...).',
      'Trải nghiệm trọn vẹn các sản phẩm QUÀ TẶNG bổ trợ sức khỏe thể chất và tinh thần, nâng cao hiệu suất cá nhân.',
      'Voucher giảm 20% cho tất cả các đơn hàng khi mua tại TinyHabit (không giới hạn)',
      'Miễn phí vận chuyển cho toàn bộ các lần nhận sổ.'
    ]
  },
  {
    id: 4,
    question: '4/ Nếu mình bận rộn và không dùng hết 4 cuốn sổ trong 1 năm thì sao?',
    answer: 'Bạn có thể hoàn toàn yên tâm với chính sách Bảo lưu trọn đời. Số lượng sổ trong thẻ Membership của bạn sẽ không bao giờ hết hạn. Nếu năm nay bạn chỉ dùng hết 2 cuốn, 2 cuốn còn lại sẽ vẫn được bảo lưu để bạn nhận vào bất kỳ lúc nào bạn sẵn sàng tiếp tục hành trình.'
  },
  {
    id: 5,
    question: '5/ Workshop diễn ra như thế nào và mình có bắt buộc phải tham gia không?',
    answer: 'Đây là buổi kết nối hỗ trợ bạn thiết lập lộ trình sử dụng sổ hiệu quả nhất. Workshop không bắt buộc nhưng là đặc quyền giúp bạn giải tỏa các rào cản tâm lý khi mới bắt đầu. Nếu không thể tham gia trực tiếp, bạn vẫn có thể tiếp cận các tài liệu và nhóm hỗ trợ trực tuyến (Small group sessions) để không bị bỏ lại phía sau.'
  },
  {
    id: 6,
    question: '6/ Mình có được chọn mẫu sổ mới cho mỗi lần nhận không?',
    answer: 'Có. Mỗi quý TinyHabit sẽ ra mắt các bộ sưu tập (BST) mới với màu sắc và chủ đề khác nhau để làm mới cảm hứng cho bạn. Thành viên Membership sẽ luôn là những người đầu tiên được chọn mẫu và trải nghiệm các thiết kế mới nhất này.'
  }
];

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>Góc giải đáp<br />của bạn (FAQs)</h2>
          <p className={styles.faqDesc}>
            TinyHabit mong những phần giải đáp này sẽ giúp bạn có thêm thông tin về chúng mình và chương trình đặc biệt dành cho thành viên (Membership)
          </p>
        </div>

        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
              >
                <button
                  className={styles.faqQuestionButton}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faqQuestionText}>{item.question}</span>
                  <span className={styles.faqToggleIcon}>
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                <div className={styles.faqAnswer}>
                  <div className={styles.faqAnswerText}>
                    <p>{item.answer}</p>
                    {item.bullets && item.bullets.length > 0 && (
                      <ul style={{ marginTop: '10px', paddingLeft: '20px', listStyleType: 'disc' }}>
                        {item.bullets.map((b, idx) => (
                          <li key={idx} style={{ marginBottom: '6px' }}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
