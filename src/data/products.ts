import { Product, ProductCategoryType } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'journey-90-days',
    slug: 'journey-90-days',
    name: 'JOURNEY - Be/Xanh/Nâu đất [90 Days]',
    category: 'planner',
    categoryName: 'Sổ tay Planner',
    tagline: 'Hành trình 90 ngày định hình thói quen và kiến tạo cuộc sống có chủ đích',
    price: 188000,
    currency: 'VND',
    duration: '90 Days',
    coverColor: 'Be / Xanh / Nâu đất',
    images: [
      '/images/journey-90-days.webp',
      '/archive/scratch/Sreenshot 14.9/journey-90-days.png'
    ],
    shortDescription: 'Mỗi hành trình phát triển đều bắt đầu từ một hạt mầm nhỏ. Cuốn sổ tay thiết kế theo nguyên lý Gentle Discipline, giúp bạn lập kế hoạch 90 ngày thực tế, theo dõi năng lượng và nuôi dưỡng sự thay đổi bền vững.',
    longDescription: 'Mỗi hành trình phát triển đều bắt đầu từ một hạt mầm nhỏ. Khi bạn gieo xuống một thói quen tốt, chăm sóc nó mỗi ngày, nó sẽ lớn lên cùng bạn một cách nhẹ nhàng nhưng bền vững. TinyHabit tin rằng sự thay đổi không cần phải ồn ào. Nó chỉ cần được nuôi dưỡng mỗi ngày, để rồi tự nhiên vươn mình, đón lấy ánh sáng và trở thành phiên bản rực rỡ nhất của chính bạn.',
    specs: {
      dimensions: 'A5 – 14.8 x 21 cm (nhỏ gọn, dễ mang theo)',
      pages: 120,
      paperType: 'Giấy 100gsm – viết mượt, không thấm mực',
      coverMaterial: 'Bìa cứng cáp, thiết kế tối giản, không thấm nước',
      contents: 'Trang Name, Hướng dẫn sử dụng, Trang Overall tháng, 3 tháng planner (gần 100 ngày), Trang ghi chú tự do'
    },
    benefits: [
      'Giúp duy trì thói quen mà không bị burnout',
      'Tập trung vào quản lý năng lượng thay vì chỉ ép buộc thời gian',
      'Đánh giá tiến độ hàng tuần và hàng tháng một cách dịu dàng',
      'Khâu chỉ thủ công – bền đẹp, mở phẳng khi viết',
      'Đóng gói hộp giấy vuông/túi giấy xinh xắn kèm thiệp quà tặng'
    ],
    targetAudience: [
      'Những ai muốn bắt đầu quản lý thời gian làm việc, nghỉ ngơi để trở nên năng suất hơn mỗi ngày',
      'Người yêu thích sự đơn giản, nhẹ nhàng',
      'Người mong muốn lắng nghe bản thân, sắp xếp lại cuộc sống một cách chậm rãi',
      'Bạn không cần phải hoàn hảo. Chỉ cần sống rõ, từng ngày.'
    ],
    features: [
      'Khung theo dõi năng lượng Daily Energy Log',
      'Habit Tracker thiết kế tối giản',
      'Gợi ý câu hỏi tự phản chiếu (Self-reflection prompts)',
      'Giấy dày 100gsm không lem nét bút'
    ],
    seo: {
      title: 'JOURNEY 90 Days - Sổ Tay Planner 90 Ngày | TinyHabit',
      description: 'Sổ tay Planner 90 ngày giúp bạn kiến tạo thói quen bền vững và quản lý năng lượng dịu dàng. Giá 188.000đ tại TinyHabit.',
      ogImage: '/images/journey-90-days.webp'
    }
  },
  {
    id: '30-days-dopamine-detox',
    slug: '30-days-dopamine-detox',
    name: 'Dopamine Detox - Green Forest/Blue [30 Days]',
    category: 'planner',
    categoryName: 'Sổ tay Planner',
    tagline: '30 ngày ngắt kết nối để kết nối sâu sắc hơn với chính mình',
    price: 158000,
    currency: 'VND',
    duration: '30 Days',
    coverColor: 'Green Forest / Blue',
    images: [
      '/images/dopamine-detox-30-days.webp',
      '/archive/scratch/Sreenshot 14.9/30-days-dopamine-detox.png'
    ],
    shortDescription: 'Cuốn sổ thiết kế riêng cho hành trình 30 ngày giảm bớt kích thích mạng xã hội, lấy lại sự tập trung và làm chủ sự chú ý.',
    longDescription: 'Trong một thế giới luôn đòi hỏi sự chú ý của bạn, việc làm chủ thói quen sử dụng công nghệ là chìa khóa để giảm bớt căng thẳng, tăng khả năng phục hồi và tìm thấy sự rõ ràng trong tâm hồn. Sức mạnh tinh thần thực sự không đến từ việc tránh thế giới ảo, mà là học cách ngắt kết nối đúng lúc để kết nối sâu sắc hơn với chính mình.',
    specs: {
      dimensions: 'A5 - 14.8 x 21 cm',
      pages: 120,
      paperType: 'Giấy 100gsm chống thấm nhòe, phù hợp cho nhiều loại bút màu',
      coverMaterial: 'Bìa màu cán màng mờ chống thấm nước',
      contents: 'Dopamine Menu (In màu rực rỡ), Dopamine Factory (Layout hàng ngày & The Rewards), The Mirror Page, 60 trang Dot Grid Pages'
    },
    benefits: [
      'Lấy lại sự tập trung khi học tập và làm việc',
      'Giảm bớt áp lực so sánh trên mạng xã hội',
      'Tạo thói quen làm việc sâu (Deep Work) mỗi ngày',
      'Tối ưu hóa giấc ngủ và giữ tinh thần thư thái'
    ],
    targetAudience: [
      'Người dễ mất tập trung bởi điện thoại và mạng xã hội',
      'Người bị xao nhãng khi làm việc và muốn lấy lại nhịp sống có chủ đích',
      'Ai đang tìm kiếm một khoảng nghỉ lành mạnh cho tâm trí'
    ],
    features: [
      'Nhật ký ghi nhận cám dỗ kỹ thuật số (Digital Distraction Audit)',
      'Thử thách 30 ngày giảm Dopamine tiêu cực',
      'Trang ghi chú cho các khoảnh khắc ngoại tuyến (Offline Moments)'
    ],
    seo: {
      title: 'Dopamine Detox 30 Days - Sổ Tay Tái Lập Tập Trung | TinyHabit',
      description: 'Sổ tay 30 ngày Dopamine Detox giúp giảm xao nhãng kỹ thuật số và lấy lại sự tập trung sâu sắc. Giá 158.000đ tại TinyHabit.',
      ogImage: '/images/dopamine-detox-30-days.webp'
    }
  },
  {
    id: 'inner-power',
    slug: 'inner-power',
    name: 'Inner Power [60 Days]',
    category: 'planner',
    categoryName: 'Sổ tay Planner',
    tagline: '60 ngày đánh thức sức mạnh nội tại và sự kỷ luật tự giác',
    price: 210000,
    currency: 'VND',
    duration: '60 Days',
    coverColor: 'Tím hoa cà / Nâu ấm',
    images: [
      '/images/inner-power-60-days.webp',
      '/archive/scratch/Sreenshot 14.9/inner-power.png'
    ],
    shortDescription: 'Chào bạn! 🌿 Đây là hành trình 60 ngày giúp bạn thực hành chăm sóc bản thân toàn diện và kết nối lại với nguồn năng lượng chân thật của chính mình.',
    longDescription: 'Chào bạn! 🌿 Mình rất vui được giới thiệu với bạn cuốn sổ “Inner Power”. Đây là hành trình 60 ngày giúp bạn thực hành chăm sóc bản thân toàn diện và kết nối lại với nguồn năng lượng chân thật của chính mình - một cách thật dịu dàng và không chút áp lực. Hành trình này giống như việc thong thả nuôi dưỡng bộ rễ vững chắc bên trong để đóa hoa tự tin bung nở vậy.',
    specs: {
      dimensions: 'A5 - 14.8 x 21 cm',
      pages: 120,
      paperType: 'Giấy 100gsm (không lem mực)',
      coverMaterial: 'Thiết kế tối giản, êm dịu với các họa tiết hoa cỏ mềm mại',
      contents: '4 Trụ cột vững chắc (Thân sắc, Trí tuệ, Cảm xúc, Hành động), Nhịp điệu sống tỉnh thức (Menu Chăm Sóc Bản Thân), Trạm dừng chân nhìn lại (Ngày 20, 40, 60)'
    },
    benefits: [
      'Vượt qua tâm lý hoài nghi bản thân và sự trì hoãn',
      'Tăng cường sự tự tin thông qua việc hoàn thành các việc nhỏ',
      'Cung cấp phương pháp theo dõi thói quen trực quan',
      'Tạo động lực tinh thần mỗi ngày'
    ],
    targetAudience: [
      'Người đang muốn tạo bước ngoặt mới trong công việc và cuộc sống',
      'Những ai hay trì hoãn và cần một đòn bẩy dịu dàng để bắt đầu',
      'Người muốn củng cố niềm tin vào năng lực bản thân'
    ],
    features: [
      'Bài tập khám phá giá trị cốt lõi cá nhân',
      'Bảng theo dõi chuỗi thói quen (Streak Tracker)',
      'Câu châm ngôn truyền cảm hứng mỗi tuần'
    ],
    seo: {
      title: 'Inner Power 60 Days - Sổ Tay Kỷ Luật Tự Giác | TinyHabit',
      description: 'Sổ tay 60 ngày Inner Power củng cố sức mạnh nội tại và sự kỷ luật dịu dàng. Giá 210.000đ tại TinyHabit.',
      ogImage: '/images/inner-power-60-days.webp'
    }
  },
  {
    id: 'tinytalk-60-days',
    slug: 'tinytalk-60-days',
    name: 'Nhật ký 60 Days TinyTalk',
    category: 'journaling',
    categoryName: 'Sổ tay viết Nhật Ký',
    tagline: 'Cuộc trò chuyện nhỏ nhẹ nhàng với chính mình mỗi ngày',
    price: 58000,
    currency: 'VND',
    duration: '60 Days',
    coverColor: 'Nâu / Xanh lá / Xanh dương',
    images: [
      '/images/tinytalk-60-days.webp',
      'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80&w=800'
    ],
    shortDescription: 'Sổ tay viết nhật ký theo gợi ý ngắn, giúp bạn giải tỏa cảm xúc, lắng nghe tâm trí và trân trọng những điều bình dị.',
    longDescription: 'TinyTalk 60 Days là cuốn sổ viết nhật ký bỏ túi nhỏ gọn. Mỗi ngày cung cấp 1-2 câu hỏi gợi ý đơn giản nhưng sâu sắc để bạn dành ra 5 phút trò chuyện thân tình với chính mình, xoa dịu những lo âu và nuôi dưỡng sự biết ơn.',
    specs: {
      dimensions: '10.5 x 15 cm (A6 nhỏ gọn)',
      pages: 120,
      paperType: 'Giấy kem chống lóa 90gsm',
      coverMaterial: 'Bìa giấy kraft mỹ thuật retro',
      contents: '60 câu hỏi gợi ý nhật ký (Prompts), trang viết tự do, bài tập biết ơn'
    },
    benefits: [
      'Không gây áp lực viết nhiều hay viết đẹp',
      'Giúp giải tỏa căng thẳng sau một ngày bận rộn',
      'Dễ mang theo bên mình mọi lúc mọi nơi',
      'Xây dựng thói quen viết nhật ký chỉ với 5 phút'
    ],
    targetAudience: [
      'Người mới bắt đầu viết nhật ký và ngại viết trang trắng',
      'Những ai bận rộn nhưng vẫn muốn dành phút giây tĩnh lặng cho bản thân',
      'Người cần công cụ xoa dịu cảm xúc nhẹ nhàng'
    ],
    features: [
      '60 câu gợi ý cảm xúc được biên soạn nhân văn',
      'Kích thước A6 vừa vặn bỏ túi xách',
      'Thiết kế bìa mộc mạc, gần gũi'
    ],
    seo: {
      title: 'TinyTalk 60 Days - Sổ Nhật Ký Gợi Ý Dịu Dàng | TinyHabit',
      description: 'Sổ tay nhật ký TinyTalk 60 ngày với các gợi ý lắng nghe bản thân mỗi ngày. Giá 58.000đ tại TinyHabit.',
      ogImage: '/images/tinytalk-60-days.webp'
    }
  },
  {
    id: '30-days-journaling',
    slug: '30-days-journaling',
    name: 'Nhật ký 30 Days Journaling',
    category: 'journaling',
    categoryName: 'Sổ tay viết Nhật Ký',
    tagline: 'Lắng nghe cảm xúc - Thấu hiểu chính mình trong 30 ngày',
    price: 35000,
    currency: 'VND',
    duration: '30 Days',
    coverColor: 'Trắng kem',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800'
    ],
    shortDescription: 'Cuốn sổ nhật ký 30 ngày cơ bản giúp bạn làm quen với thói quen viết, phản chiếu và giải tỏa tâm trí.',
    longDescription: '30 Days Journaling là bước khởi đầu hoàn hảo cho bất kỳ ai muốn thử sức với việc viết nhật ký. Với cấu trúc đơn giản, không cầu kỳ, cuốn sổ khuyến khích bạn ghi lại những suy nghĩ chân thật nhất mà không sợ bị phán xét.',
    specs: {
      dimensions: '14.8 x 21 cm (A5)',
      pages: 64,
      paperType: 'Giấy kem 80gsm',
      coverMaterial: 'Bìa mềm định lượng 250gsm',
      contents: '30 trang nhật ký ngày, Mood tracker, Reflection trang cuối'
    },
    benefits: [
      'Mức giá tiếp cận dễ dàng cho người bắt đầu',
      'Giúp thành lọc tư duy và quản lý cảm xúc tốt hơn',
      'Thiết kế trang viết thoáng đãng, tự do'
    ],
    targetAudience: [
      'Người chưa từng viết nhật ký và muốn trải nghiệm thử',
      'Học sinh, sinh viên tìm kiếm một cuốn sổ nhẹ nhàng',
      'Ai cần không gian riêng để giải bày tâm tư'
    ],
    seo: {
      title: '30 Days Journaling - Sổ Nhật Ký 30 Ngày Khởi Đầu | TinyHabit',
      description: 'Sổ nhật ký 30 Days Journaling cho người mới bắt đầu lắng nghe bản thân. Giá 35.000đ tại TinyHabit.',
      ogImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    id: 'kit-gieo-mam-thoi-quen-tinyhabit',
    slug: 'kit-gieo-mam-thoi-quen-tinyhabit',
    name: 'Kit Gieo Mầm Thói Quen',
    category: 'bo-tro',
    categoryName: 'Sản phẩm Bổ trợ',
    tagline: 'Bộ công cụ nhỏ trực quan giúp gieo trồng và nuôi dưỡng thói quen mới',
    price: 30000,
    currency: 'VND',
    coverColor: 'Nhiều màu tươi sáng',
    images: [
      '/images/kit-gieo-mam-thoi-quen-cover.jpg'
    ],
    shortDescription: 'Bộ công cụ Gieo Mầm Thói Quen giúp bạn nuôi dưỡng và duy trì các hành động nhỏ tích cực mỗi ngày.',
    longDescription: 'Kit Gieo Mầm Thói Quen chính là công cụ giúp bạn tối ưu hóa phương pháp TinyHabit. Với đầy đủ chậu, viên nén hữu cơ, hạt giống và tài liệu hướng dẫn, bộ sản phẩm biến việc xây dựng kỷ luật cá nhân thành hành trình gieo mầm thú vị.',
    specs: {
      dimensions: 'Bao gồm chậu, viên nén, hạt giống & tài liệu hướng dẫn',
      pages: 1,
      paperType: 'Giấy mỹ thuật & bao bì thân thiện môi trường',
      coverMaterial: 'Hộp giấy kraft cao cấp',
      contents: '1 Chậu, 1 Viên nén hữu cơ, Hạt giống ý nghĩa, Que ghi thói quen & Tài liệu hướng dẫn'
    },
    benefits: [
      'Tối ưu hóa phương pháp TinyHabit khoa học',
      'Hữu hình hóa sự kiên trì qua từng ngày lớn lên của cây',
      'Tạo động lực và cảm giác hoàn thành mỗi ngày'
    ],
    targetAudience: [
      'Người muốn bắt đầu tạo dựng thói quen mới nhỏ dịu dàng',
      'Món quà ý nghĩa dành tặng bản thân và người thân yêu'
    ],
    seo: {
      title: 'Kit Gieo Mầm Thói Quen | TinyHabit',
      description: 'Bộ công cụ Kit Gieo Mầm Thói Quen giúp bạn nuôi dưỡng mục tiêu mỗi ngày. Giá 30.000đ tại TinyHabit.',
      ogImage: '/images/kit-gieo-mam-thoi-quen-cover.jpg'
    }
  },
  {
    id: 'talk-to-yourself-gently-tinyhabit',
    slug: 'talk-to-yourself-gently-tinyhabit',
    name: 'Notebook | Talk To Yourself Gently',
    category: 'bo-tro',
    categoryName: 'Sản phẩm Bổ trợ',
    tagline: 'Sổ tay nhắc nhở bạn luôn dịu dàng với chính mình',
    price: 48000,
    currency: 'VND',
    coverColor: 'Nâu mộc mạc',
    images: [
      '/images/talk-to-yourself-gently-cover.png'
    ],
    shortDescription: 'Cuốn notebook lò xo bỏ túi xinh xắn với thông điệp nhắc nhở sự bao dung và yêu thương bản thân.',
    longDescription: 'Notebook Talk To Yourself Gently là người bạn đồng hành nhỏ nhắn cho mọi ghi chép ngẫu hứng. Bìa sổ in thông điệp ấm áp, nhắc nhở bạn ngừng tự phán xét và luôn dành cho bản thân những lời nói dịu dàng nhất.',
    specs: {
      dimensions: 'A6 (10.5 x 14.8 cm)',
      pages: 100,
      paperType: 'Giấy ruột chấm Dot grid kem 90gsm',
      coverMaterial: 'Bìa bồi cứng gáy lò xo',
      contents: '100 trang dot grid linh hoạt cho ghi chú, vẽ phác thảo hay ghi to-do list'
    },
    benefits: [
      'Lò xo giở mở 360 độ cực kỳ tiện lợi',
      'Ruột Dot Grid đa năng cho cả viết và vẽ',
      'Thông điệp tích cực tiếp thêm năng lượng mỗi khi mở sổ'
    ],
    targetAudience: [
      'Mọi đối tượng cần một cuốn sổ nhỏ ghi chép công việc nhanh',
      'Người thích trang trí sổ tay Bullet Journal'
    ],
    seo: {
      title: 'Notebook Talk To Yourself Gently | TinyHabit',
      description: 'Sổ tay lò xo A6 Talk To Yourself Gently nhắc nhở sự bao dung với bản thân. Giá 48.000đ tại TinyHabit.',
      ogImage: '/images/talk-to-yourself-gently-cover.png'
    }
  },
  {
    id: 'just-me-and-my-mind-tinyhabit',
    slug: 'just-me-and-my-mind-tinyhabit',
    name: 'Notebook | Just Me & My Mind',
    category: 'bo-tro',
    categoryName: 'Sản phẩm Bổ trợ',
    tagline: 'Khoảng không gian riêng tư cho những ý tưởng và suy ngẫm ngẫu hứng',
    price: 48000,
    currency: 'VND',
    coverColor: 'Xanh pastel / Kem',
    images: [
      '/images/just-me-and-my-mind-cover.png'
    ],
    shortDescription: 'Cuốn sổ nhỏ dành cho những khoảnh khắc một mình, nơi bạn tự do bộc lộ suy nghĩ và ý tưởng sáng tạo.',
    longDescription: 'Notebook Just Me & My Mind tôn vinh những giây phút tĩnh lặng cá nhân. Dù là một ý tưởng lóe lên giữa ngày hay những dòng cảm xúc muộn đêm, cuốn sổ này luôn sẵn sàng lắng nghe mà không có bất kỳ rào cản nào.',
    specs: {
      dimensions: 'A6 (10.5 x 14.8 cm)',
      pages: 100,
      paperType: 'Giấy kem kẻ ngang Ruled 90gsm',
      coverMaterial: 'Bìa mỹ thuật ép kim',
      contents: '100 trang kẻ ngang ghi chép mượt mà'
    },
    benefits: [
      'Thiết kế trẻ trung, hiện đại',
      'Giấy viết êm tay, không gây mỏi mắt',
      'Gọn nhẹ dễ dàng mang theo trong túi xách'
    ],
    targetAudience: [
      'Những người trẻ yêu thích viết lách ngẫu hứng',
      'Bất kỳ ai cần một góc riêng ghi lại suy nghĩ mỗi ngày'
    ],
    seo: {
      title: 'Notebook Just Me & My Mind | TinyHabit',
      description: 'Sổ tay A6 Just Me & My Mind cho không gian suy ngẫm cá nhân. Giá 48.000đ tại TinyHabit.',
      ogImage: '/images/just-me-and-my-mind-cover.png'
    }
  }
];

// Data-access Abstraction Functions
export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  const normalized = slug.toLowerCase();
  return PRODUCTS.find((p) => {
    if (p.slug === normalized) return true;
    if (normalized === 'dopamine-detox-30-days' && p.slug === '30-days-dopamine-detox') return true;
    if (normalized === '30-days-dopamine-detox' && p.slug === 'dopamine-detox-30-days') return true;
    if (normalized === 'inner-power-60-days' && p.slug === 'inner-power') return true;
    if (normalized === 'inner-power' && p.slug === 'inner-power-60-days') return true;
    return false;
  });
}

export function getProductsByCategory(category: ProductCategoryType): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.slice(0, 4);
}

export function getRelatedProducts(currentSlug: string, limit: number = 3): Product[] {
  return PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
