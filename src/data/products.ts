import { Product, ProductCategoryType } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'journey-90-days',
    slug: 'journey-90-days',
    name: 'JOURNEY - 90 Days',
    category: 'planner',
    categoryName: 'Sổ tay Planner',
    tagline: 'Hành trình 90 ngày định hình thói quen và kiến tạo cuộc sống có chủ đích',
    price: 188000,
    currency: 'VND',
    duration: '90 Days',
    coverColor: 'Be / Xanh / Nâu đất',
    images: [
      '/images/journey-90-days.webp',
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800'
    ],
    shortDescription: 'Cuốn sổ tay thiết kế theo nguyên lý Gentle Discipline, giúp bạn lập kế hoạch 90 ngày thực tế, theo dõi năng lượng và xây dựng nhịp sống cân bằng.',
    longDescription: 'Sổ tay Planner JOURNEY 90 Days không chỉ là một công cụ ghi chép công việc, mà là hệ thống quản lý năng lượng và thói quen cá nhân. Dựa trên triết lý Gentle Discipline, cuốn sổ giúp bạn chia nhỏ mục tiêu lớn thành các hành động khả thi mỗi ngày, loại bỏ áp lực hoàn hảo và duy trì sự đều đặn bền vững.',
    specs: {
      dimensions: '14.8 x 21 cm (A5)',
      pages: 180,
      paperType: 'Giấy Fort Kem 100gsm chống lóa, không thấm mực',
      coverMaterial: 'Bìa cứng bọc vải canvas cao cấp',
      contents: '90 trang ngày, 12 trang tuần, 3 trang tháng, Habit tracker, Energy log & Quarterly reflection'
    },
    benefits: [
      'Giúp duy trì thói quen mà không bị burnout',
      'Tập trung vào quản lý năng lượng thay vì chỉ ép buộc thời gian',
      'Đánh giá tiến độ hàng tuần và hàng tháng một cách dịu dàng',
      'Bìa thiết kế tối giản, chất liệu giấy cao cấp dễ viết'
    ],
    targetAudience: [
      'Người muốn bắt đầu lập kế hoạch dài hạn nhưng thường bỏ cuộc giữa chừng',
      'Sinh viên và người đi làm muốn cân bằng giữa năng suất và sự bình yên',
      'Những ai tìm kiếm phương pháp kỷ luật nhẹ nhàng (Gentle Discipline)'
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
    id: 'dopamine-detox-30-days',
    slug: 'dopamine-detox-30-days',
    name: 'Dopamine Detox - 30 Days',
    category: 'planner',
    categoryName: 'Sổ tay Planner',
    tagline: '30 ngày ngắt kết nối để kết nối sâu sắc hơn với chính mình',
    price: 158000,
    currency: 'VND',
    duration: '30 Days',
    coverColor: 'Green Forest / Blue',
    images: [
      '/images/dopamine-detox-30-days.webp',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800'
    ],
    shortDescription: 'Cuốn sổ thiết kế riêng cho hành trình 30 ngày giảm bớt kích thích mạng xã hội, lấy lại sự tập trung và làm chủ sự chú ý.',
    longDescription: 'Dopamine Detox 30 Days là cuốn sổ tay chuyên biệt giúp bạn chủ động nhận diện các thói quen gây phân tâm (mạng xã hội, thông báo điện thoại, mua sắm ngẫu hứng) và tái lập sự tập trung sâu sắc. Với lộ trình 30 ngày dịu dàng, bạn sẽ lấy lại sự bình yên trong tâm trí.',
    specs: {
      dimensions: '13 x 19 cm',
      pages: 100,
      paperType: 'Giấy kem Nhật Bản 100gsm',
      coverMaterial: 'Bìa mỹ thuật cao cấp dập nổi',
      contents: 'Lộ trình Detox 30 ngày, Digital Distraction Log, Daily Focus Planner, Weekly Reflection'
    },
    benefits: [
      'Lấy lại sự tập trung khi học tập và làm việc',
      'Giảm bớt áp lực so sánh trên mạng xã hội',
      'Tạo thói quen làm việc sâu (Deep Work) mỗi ngày',
      'Giúp giấc ngủ và tinh thần thư thái hơn'
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
    id: 'inner-power-60-days',
    slug: 'inner-power-60-days',
    name: 'Inner Power - 60 Days',
    category: 'planner',
    categoryName: 'Sổ tay Planner',
    tagline: '60 ngày đánh thức sức mạnh nội tại và sự kỷ luật tự giác',
    price: 210000,
    currency: 'VND',
    duration: '60 Days',
    coverColor: 'Tím hoa cà / Nâu ấm',
    images: [
      '/images/inner-power-60-days.webp',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800'
    ],
    shortDescription: 'Cuốn sổ tay giúp bạn xây dựng sức mạnh tinh thần, vượt qua sự trì hoãn và tin tưởng vào khả năng tiến bộ của bản thân.',
    longDescription: 'Inner Power 60 Days được thiết kế dành cho những ai muốn xây dựng sự kỷ luật nội tại kiên cường mà không phải dùng đến sự ép buộc khắc nghiệt. Thông qua khung hành động 60 ngày, bạn được hướng dẫn cách chuyển hóa nỗi sợ thành hành động nhỏ và ghi nhận sự tiến bộ cá nhân.',
    specs: {
      dimensions: '14.8 x 21 cm (A5)',
      pages: 140,
      paperType: 'Giấy Fort Kem 100gsm',
      coverMaterial: 'Bìa bọc vải mềm có dây đánh dấu trang',
      contents: 'Mindset Audit, 60 Days Power Tracker, Self-belief Prompts, Action Plan'
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
    id: 'kit-gieo-mam-thoi-quen',
    slug: 'kit-gieo-mam-thoi-quen',
    name: 'Kit Gieo Mầm Thói Quen',
    category: 'bo-tro',
    categoryName: 'Sản phẩm Bổ trợ',
    tagline: 'Bộ công cụ nhỏ trực quan giúp gieo trồng và nuôi dưỡng thói quen mới',
    price: 30000,
    currency: 'VND',
    coverColor: 'Nhiều màu tươi sáng',
    images: [
      'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800'
    ],
    shortDescription: 'Bộ sticker & tracker theo dõi thói quen sinh động, mang lại niềm vui nho nhỏ mỗi khi bạn hoàn thành mục tiêu.',
    longDescription: 'Kit Gieo Mầm Thói Quen kết hợp các thẻ Habit Tracker trực quan cùng bộ nhãn dán đáng yêu, giúp việc gạch tên công việc mỗi ngày trở nên vui vẻ và hào hứng. Công cụ này biến việc duy trì kỷ luật thành một trò chơi gieo mầm thú vị.',
    specs: {
      dimensions: 'Bao gồm thẻ 10x15cm và sheet sticker A6',
      pages: 12,
      paperType: 'Giấy couche dày & sticker waterproof',
      coverMaterial: 'Túi đựng kraft thân thiện môi trường',
      contents: '12 thẻ Habit Tracker tháng + 3 sheet sticker minh họa'
    },
    benefits: [
      'Tạo động lực thị giác mạnh mẽ khi thấy chuỗi thói quen lớn dần',
      'Phù hợp kẹp vào mọi loại sổ tay hoặc dán lên góc làm việc',
      'Quà tặng kèm dễ thương cho bạn bè và bản thân'
    ],
    targetAudience: [
      'Những ai yêu thích sự sáng tạo và ghi chép nhiều màu sắc',
      'Người cần sự nhắc nhở trực quan ngay trên bàn học/làm việc'
    ],
    seo: {
      title: 'Kit Gieo Mầm Thói Quen - Bộ Tracker Trực Quan | TinyHabit',
      description: 'Bộ công cụ Kit Gieo Mầm Thói Quen giúp bạn theo dõi mục tiêu mỗi ngày thật vui vẻ. Giá 30.000đ tại TinyHabit.',
      ogImage: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    id: 'talk-to-yourself-gently',
    slug: 'talk-to-yourself-gently',
    name: 'Notebook | Talk To Yourself Gently',
    category: 'bo-tro',
    categoryName: 'Sản phẩm Bổ trợ',
    tagline: 'Sổ tay nhắc nhở bạn luôn dịu dàng với chính mình',
    price: 48000,
    currency: 'VND',
    coverColor: 'Nâu mộc mạc',
    images: [
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800'
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
      ogImage: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800'
    }
  },
  {
    id: 'just-me-and-my-mind',
    slug: 'just-me-and-my-mind',
    name: 'Notebook | Just Me & My Mind',
    category: 'bo-tro',
    categoryName: 'Sản phẩm Bổ trợ',
    tagline: 'Khoảng không gian riêng tư cho những ý tưởng và suy ngẫm ngẫu hứng',
    price: 48000,
    currency: 'VND',
    coverColor: 'Xanh pastel / Kem',
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800'
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
      ogImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800'
    }
  }
];

// Data-access Abstraction Functions
export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
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
