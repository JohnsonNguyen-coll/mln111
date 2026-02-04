class ArtisticCalendar {
  constructor() {
    this.currentDate = new Date();
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();

    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.quotes = [
      "Không phải ý thức của con người quyết định tồn tại của họ; trái lại, tồn tại xã hội của họ quyết định ý thức của họ.",
      "Bản chất con người không phải là một cái gì trừu tượng cố hữu của cá nhân riêng biệt. Trong tính hiện thực của nó, bản chất con người là tổng hòa các quan hệ xã hội.",
      "Ý thức chẳng qua chỉ là vật chất được đem chuyển vào trong đầu óc con người và được cải biến đi trong đó.",
      "Mọi thứ chúng ta nghe thấy đều là ý kiến, không phải sự thật. Mọi thứ chúng ta thấy đều là góc nhìn, không phải sự thực khách quan.",
      "Một bước phong trào thực tế còn quan trọng hơn một tá chương trình.",
      "Sự thống nhất và đấu tranh của các mặt đối lập tạo nên nguồn gốc và động lực của phát triển.",
      "Con người là chủ thể của lịch sử, là mục tiêu của sự phát triển.",
      "Chỉ có một điều thiện duy nhất là tri thức, và một điều ác duy nhất là sự thiếu hiểu biết.",
      "Các nhà triết học đã chỉ giải thích thế giới bằng nhiều cách khác nhau, song vấn đề là cải tạo thế giới.",
      "Trí tuệ con người phát triển song song với việc con người học cải biến tự nhiên.",
      "Thất bại không nguy hiểm bằng nỗi sợ hãi thừa nhận thất bại. Người thông minh là người mắc lỗi nhưng biết cách nhanh chóng sửa lỗi.",
      "Lý luận mà không có thực tiễn là lý luận suông, thực tiễn mà không có lý luận là thực tiễn mù quáng.",
    ];

    // Mảng chứa tên các ảnh background
    this.backgroundImages = [
      "january.jpg",
      "z7501574550180_8a17035f176f291369ae86a0bf6176c5.jpg",
      "z7501574609054_feb77de7cf6248fc33326ddd8b9c7754.jpg",
      "z7501574651744_b529a7755ac6d588a01b5b9dc467561b.jpg",
      "z7501574651745_82fa85d1a0f501a9f596f8b3e5f4e7a9.jpg",
      "z7501574651775_8d20439bf5f482e5b4140bd157be77c4.jpg",
      "z7501574651776_d760b492fd792891f1dd82519edaf28d.jpg",
      "z7501574651777_3a312d37da78d62c436b0e64f476498c.jpg",
      "z7501574690537_26e79fae2fdd37fd408ea926c1cde6ea.jpg"
    ];

    this.questions = [
      {
        question: "Triết học là gì?",
        options: [
          "Là khoa học về tự nhiên",
          "Là hệ thống quan điểm lý luận chung nhất về thế giới và vị trí của con người trong thế giới đó",
          "Là khoa học về xã hội loài người",
          "Là khoa học về tư duy",
        ],
        correct: 1,
      },
      {
        question: "Vấn đề cơ bản của triết học là gì?",
        options: [
          "Mối quan hệ giữa con người với tự nhiên",
          "Mối quan hệ giữa lý luận với thực tiễn",
          "Mối quan hệ giữa tư duy và tồn tại, giữa vật chất và ý thức",
          "Mối quan hệ giữa các giai cấp trong xã hội",
        ],
        correct: 2,
      },
      {
        question: "Chủ nghĩa duy vật là trường phái triết học:",
        options: [
          "Coi ý thức là cái có trước, vật chất là cái có sau",
          "Coi vật chất là cái có trước, ý thức là cái có sau",
          "Phủ nhận khả năng nhận thức thế giới",
          "Coi vật chất và ý thức là hai thực thể độc lập",
        ],
        correct: 1,
      },
      {
        question: "Chủ nghĩa duy tâm chủ quan cho rằng:",
        options: [
          "Thế giới là sản phẩm của ý thức khách quan, tinh thần tuyệt đối",
          "Thế giới là sản phẩm của ý thức con người, cảm giác của con người",
          "Vật chất là cái có trước, ý thức là cái có sau",
          "Thế giới tồn tại độc lập với ý thức con người",
        ],
        correct: 1,
      },
      {
        question: "Thuyết bất khả tri là quan điểm:",
        options: [
          "Khẳng định con người có thể nhận thức được thế giới",
          "Phủ nhận hoàn toàn khả năng nhận thức của con người",
          "Cho rằng con người không thể nhận thức được bản chất sự vật",
          "Cả B và C đều đúng",
        ],
        correct: 3,
      },
      {
        question: "Triết học Mác-Lênin ra đời vào thời kỳ nào?",
        options: [
          "Đầu thế kỷ XIX",
          "Giữa thế kỷ XIX",
          "Cuối thế kỷ XIX",
          "Đầu thế kỷ XX",
        ],
        correct: 1,
      },
      {
        question: "Tiền đề kinh tế - xã hội ra đời của triết học Mác là:",
        options: [
          "Sự phát triển của chủ nghĩa tư bản",
          "Cuộc đấu tranh của giai cấp công nhân",
          "Sự phát triển của khoa học tự nhiên",
          "Cả A và B đều đúng",
        ],
        correct: 3,
      },
      {
        question: "Nguồn gốc lý luận trực tiếp của triết học Mác-Lênin là:",
        options: [
          "Triết học cổ điển Đức, kinh tế chính trị học cổ điển Anh, chủ nghĩa xã hội không tưởng Pháp",
          "Triết học Hy Lạp cổ đại",
          "Triết học phương Đông",
          "Triết học thời Phục hưng",
        ],
        correct: 0,
      },
      {
        question:
          "C. Mác và Ph. Ăngghen đã kế thừa yếu tố nào từ triết học Hêghen?",
        options: [
          "Chủ nghĩa duy tâm",
          "Phép biện chứng",
          "Chủ nghĩa duy vật",
          "Thuyết bất khả tri",
        ],
        correct: 1,
      },
      {
        question: "Hạn chế cơ bản của chủ nghĩa duy vật trước Mác là:",
        options: [
          "Mang tính máy móc, siêu hình",
          "Có tính chất duy tâm trong lĩnh vực lịch sử",
          "Chưa thấy vai trò của thực tiễn",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Tính cách mạng của triết học Mác thể hiện ở chỗ:",
        options: [
          "Phục vụ lợi ích của giai cấp công nhân",
          "Hướng đến việc cải tạo thế giới",
          "Phản ánh xu hướng phát triển khách quan của lịch sử",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Tính khoa học của triết học Mác-Lênin được thể hiện ở:",
        options: [
          "Phản ánh đúng đắn quy luật khách quan của tự nhiên, xã hội và tư duy",
          "Được thực tiễn kiểm nghiệm",
          "Không ngừng phát triển",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Đối tượng nghiên cứu của triết học Mác-Lênin là:",
        options: [
          "Các quy luật riêng của từng lĩnh vực cụ thể",
          "Các quy luật chung nhất của tự nhiên, xã hội và tư duy",
          "Chỉ nghiên cứu xã hội loài người",
          "Chỉ nghiên cứu về tự nhiên",
        ],
        correct: 1,
      },
      {
        question: "Chức năng thế giới quan của triết học Mác-Lênin là:",
        options: [
          "Cung cấp hệ thống quan điểm chung về thế giới",
          "Cung cấp phương pháp nhận thức và cải tạo thế giới",
          "Định hướng cho hoạt động thực tiễn",
          "Giải thích các hiện tượng cụ thể",
        ],
        correct: 0,
      },
      {
        question: "Chức năng phương pháp luận của triết học Mác-Lênin là:",
        options: [
          "Cung cấp hệ thống quan điểm về thế giới",
          "Cung cấp phương pháp nhận thức và cải tạo thế giới",
          "Nghiên cứu các quy luật riêng",
          "Chỉ nghiên cứu lý luận",
        ],
        correct: 1,
      },
      {
        question: "Tính đảng trong triết học Mác-Lênin được thể hiện ở:",
        options: [
          "Phục vụ lợi ích của giai cấp công nhân và nhân dân lao động",
          "Bảo vệ quan điểm của giai cấp tư sản",
          "Trung lập về mặt giai cấp",
          "Không có lập trường giai cấp",
        ],
        correct: 0,
      },
      {
        question: "V.I. Lênin sinh năm nào?",
        options: ["1868", "1870", "1872", "1874"],
        correct: 0,
      },
      {
        question:
          "Hoàn cảnh lịch sử nào dẫn đến sự hình thành giai đoạn Lênin trong triết học Mác?",
        options: [
          "Chủ nghĩa tư bản chuyển sang giai đoạn đế quốc",
          "Cuộc cách mạng khoa học cuối thế kỷ XIX",
          "Sự tấn công của các trào lưu duy tâm",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question:
          "Tác phẩm 'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán' của V.I. Lênin viết năm nào?",
        options: ["1905", "1908", "1910", "1914"],
        correct: 1,
      },
      {
        question:
          "Trong tác phẩm nào V.I. Lênin đưa ra định nghĩa kinh điển về vật chất?",
        options: [
          "Bút ký triết học",
          "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán",
          "Nhà nước và cách mạng",
          "Chủ nghĩa đế quốc",
        ],
        correct: 1,
      },
      {
        question:
          "Cuộc khủng hoảng vật lý học cuối thế kỷ XIX đầu thế kỷ XX là:",
        options: [
          "Khủng hoảng về thế giới quan và phương pháp luận",
          "Khủng hoảng về kinh tế",
          "Khủng hoảng về chính trị",
          "Khủng hoảng về văn hóa",
        ],
        correct: 0,
      },
      {
        question:
          "V.I. Lênin cho rằng con đường thoát khỏi khủng hoảng vật lý học là:",
        options: [
          "Từ bỏ chủ nghĩa duy vật",
          "Thay thế chủ nghĩa duy vật siêu hình bằng chủ nghĩa duy vật biện chứng",
          "Quay về với chủ nghĩa duy tâm",
          "Phủ nhận vai trò của khoa học",
        ],
        correct: 1,
      },
      {
        question:
          "Định nghĩa vật chất của V.I. Lênin: 'Vật chất là phạm trù triết học dùng để chỉ...'",
        options: [
          "Các sự vật cụ thể có thể sờ thấy được",
          "Thực tại khách quan tồn tại độc lập với ý thức con người",
          "Các nguyên tử và phân tử",
          "Tất cả những gì có khối lượng",
        ],
        correct: 1,
      },
      {
        question: "'Bút ký triết học' của V.I. Lênin viết trong thời kỳ nào?",
        options: ["1908-1910", "1910-1912", "1914-1916", "1917-1918"],
        correct: 2,
      },
      {
        question:
          "Trong 'Bút ký triết học', V.I. Lênin đã phát triển vấn đề gì?",
        options: [
          "Lý luận về nhà nước",
          "Phép biện chứng duy vật",
          "Kinh tế chính trị",
          "Lịch sử Đảng",
        ],
        correct: 1,
      },
      {
        question:
          "Quan điểm nào thể hiện đúng bản chất của phương pháp biện chứng?",
        options: [
          "Xem xét sự vật trong trạng thái tĩnh, cô lập",
          "Xem xét sự vật trong mối liên hệ, vận động và phát triển",
          "Chỉ xem xét hiện tượng bên ngoài của sự vật",
          "Phủ nhận sự phát triển của sự vật",
        ],
        correct: 1,
      },
      {
        question: "Phương pháp siêu hình có đặc điểm gì?",
        options: [
          "Xem xét sự vật trong mối liên hệ phổ biến",
          "Xem xét sự vật một cách cô lập, tĩnh tại",
          "Thừa nhận sự phát triển của sự vật",
          "Tìm kiếm mâu thuẫn bên trong sự vật",
        ],
        correct: 1,
      },
      {
        question:
          "Nguyên tắc liên hệ phổ biến trong phép biện chứng có ý nghĩa gì?",
        options: [
          "Mọi sự vật đều tồn tại độc lập",
          "Mọi sự vật, hiện tượng đều có mối liên hệ với nhau",
          "Chỉ có một số sự vật có liên hệ với nhau",
          "Sự vật không có liên hệ với môi trường",
        ],
        correct: 1,
      },
      {
        question: "Phát triển là gì?",
        options: [
          "Mọi sự thay đổi của sự vật",
          "Sự vận động theo chu kỳ",
          "Sự vận động theo hướng tiến lên, từ thấp đến cao",
          "Sự vận động đơn giản",
        ],
        correct: 2,
      },
      {
        question:
          "Quan điểm phát triển của phép biện chứng duy vật khác với quan điểm tiến hóa giản đơn ở chỗ:",
        options: [
          "Thừa nhận có bước nhảy vọt",
          "Chỉ thừa nhận sự biến đổi từ từ",
          "Phủ nhận mâu thuẫn",
          "Không thừa nhận sự phát triển",
        ],
        correct: 0,
      },
      {
        question: "Ý nghĩa phương pháp luận của quan điểm phát triển là:",
        options: [
          "Xem xét sự vật trong trạng thái đứng yên",
          "Xem xét sự vật trong quá trình vận động, phát triển",
          "Chỉ xem xét hiện tượng",
          "Phủ nhận sự thay đổi",
        ],
        correct: 1,
      },
      {
        question:
          "Vai trò của triết học Mác-Lênin đối với cách mạng Việt Nam là:",
        options: [
          "Là nền tảng tư tưởng của Đảng",
          "Định hướng cho sự nghiệp cách mạng",
          "Giúp nhận thức đúng thực tiễn Việt Nam",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Hồ Chí Minh kế thừa triết học Mác-Lênin như thế nào?",
        options: [
          "Vận dụng sáng tạo vào điều kiện Việt Nam",
          "Áp dụng máy móc",
          "Chỉ học thuộc lòng",
          "Không cần vận dụng",
        ],
        correct: 0,
      },
      {
        question:
          "Ý nghĩa của việc học tập triết học Mác-Lênin đối với sinh viên là:",
        options: [
          "Hình thành thế giới quan khoa học",
          "Rèn luyện tư duy biện chứng",
          "Nâng cao năng lực nhận thức và hoạt động thực tiễn",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question:
          "Triết học Mác-Lênin có vai trò gì đối với các khoa học cụ thể?",
        options: [
          "Thay thế các khoa học cụ thể",
          "Cung cấp phương pháp luận chung",
          "Không có vai trò gì",
          "Chỉ là tổng hợp các khoa học cụ thể",
        ],
        correct: 1,
      },
      {
        question: "Quan hệ giữa triết học Mác-Lênin và khoa học cụ thể là:",
        options: [
          "Quan hệ thay thế",
          "Quan hệ bao hàm",
          "Quan hệ tác động qua lại biện chứng",
          "Không có quan hệ",
        ],
        correct: 2,
      },
      {
        question:
          "Tính cách mạng của triết học Mác-Lênin không mâu thuẫn với tính khoa học vì:",
        options: [
          "Chúng độc lập với nhau",
          "Tính cách mạng dựa trên nền tảng khoa học",
          "Tính khoa học không quan trọng",
          "Chỉ cần tính cách mạng",
        ],
        correct: 1,
      },
      {
        question:
          "Điểm mới cơ bản của triết học Mác so với triết học trước đó là:",
        options: [
          "Kết hợp chủ nghĩa duy vật với phép biện chứng",
          "Mở rộng chủ nghĩa duy vật vào lĩnh vực lịch sử",
          "Coi thực tiễn là cơ sở của nhận thức",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question:
          "Chủ nghĩa duy vật lịch sử của Mác khác với duy vật trước Mác ở chỗ:",
        options: [
          "Áp dụng quan điểm duy vật vào giải thích lịch sử xã hội",
          "Chỉ nghiên cứu tự nhiên",
          "Phủ nhận vai trò của ý thức",
          "Không thừa nhận quy luật khách quan",
        ],
        correct: 0,
      },
      {
        question: "Tính đảng của triết học Mác-Lênin có nghĩa là:",
        options: [
          "Phục vụ một đảng chính trị cụ thể",
          "Bảo vệ lợi ích của giai cấp công nhân và nhân dân lao động",
          "Không có lập trường",
          "Trung lập về giai cấp",
        ],
        correct: 1,
      },
      {
        question:
          "V.I. Lênin phát triển học thuyết Mác về nhà nước trong tác phẩm nào?",
        options: [
          "Chủ nghĩa đế quốc",
          "Nhà nước và cách mạng",
          "Làm gì?",
          "Bút ký triết học",
        ],
        correct: 1,
      },
      {
        question: "Công lao lớn nhất của V.I. Lênin đối với triết học Mác là:",
        options: [
          "Phát triển toàn diện trong điều kiện lịch sử mới",
          "Bảo vệ trước các cuộc tấn công của chủ nghĩa duy tâm",
          "Vận dụng vào thực tiễn cách mạng",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Ý nghĩa lịch sử của định nghĩa vật chất của V.I. Lênin là:",
        options: [
          "Giải quyết triệt để vấn đề cơ bản của triết học",
          "Bảo vệ chủ nghĩa duy vật trước sự tấn công của chủ nghĩa duy tâm",
          "Khái quát những thành tựu mới của khoa học",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question:
          "Trong 'Bút ký triết học', V.I. Lênin đã phát triển vấn đề gì của phép biện chứng?",
        options: [
          "Học thuyết về mâu thuẫn là hạt nhân của phép biện chứng",
          "Các quy luật cơ bản",
          "Các phạm trù",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Triết học Mác-Lênin không phải là:",
        options: [
          "Hệ thống tri thức khép kín",
          "Học thuyết sống, không ngừng phát triển",
          "Công cụ nhận thức và cải tạo thế giới",
          "Nền tảng lý luận của chủ nghĩa xã hội khoa học",
        ],
        correct: 0,
      },
      {
        question: "Quan điểm nào dưới đây là đúng về triết học Mác-Lênin?",
        options: [
          "Là tổng hợp các khoa học cụ thể",
          "Là khoa học về các quy luật chung nhất",
          "Thay thế các khoa học cụ thể",
          "Là khoa học về mọi lĩnh vực",
        ],
        correct: 1,
      },
      {
        question: "Để học tốt triết học Mác-Lênin cần:",
        options: [
          "Học thuộc lòng các nguyên lý",
          "Kết hợp học lý luận với vận dụng vào thực tiễn",
          "Chỉ cần đọc sách",
          "Không cần thực hành",
        ],
        correct: 1,
      },
      {
        question: "Ý nghĩa của triết học Mác-Lênin trong thời đại ngày nay là:",
        options: [
          "Đã lỗi thời",
          "Vẫn là công cụ nhận thức và cải tạo thế giới",
          "Chỉ có giá trị lịch sử",
          "Không còn phù hợp",
        ],
        correct: 1,
      },
      {
        question: "Vận dụng sáng tạo triết học Mác-Lênin có nghĩa là:",
        options: [
          "Áp dụng máy móc",
          "Kết hợp với điều kiện cụ thể của mỗi nước",
          "Bỏ qua những nguyên lý cơ bản",
          "Thay đổi hoàn toàn nội dung",
        ],
        correct: 1,
      },
      {
        question: "Triết học Mác-Lênin ra đời đánh dấu:",
        options: [
          "Bước ngoặt trong lịch sử triết học",
          "Sự kết thúc của triết học",
          "Không có ý nghĩa gì đặc biệt",
          "Chỉ là một trường phái triết học thông thường",
        ],
        correct: 0,
      },
      {
        question: "Theo V.I. Lênin, vật chất là:",
        options: [
          "Phạm trù triết học chỉ thực tại khách quan",
          "Tổng hợp các nguyên tử",
          "Những gì có khối lượng",
          "Chỉ những gì nhìn thấy được",
        ],
        correct: 0,
      },
      {
        question:
          "Định nghĩa vật chất của V.I. Lênin giải quyết vấn đề cơ bản của triết học bằng cách:",
        options: [
          "Liệt kê các sự vật cụ thể",
          "Đối lập vật chất với ý thức trên phương diện nhận thức luận",
          "Mô tả cấu trúc vật chất",
          "Phân loại các dạng vật chất",
        ],
        correct: 1,
      },
      {
        question: "Tính khách quan của vật chất được thể hiện ở chỗ:",
        options: [
          "Vật chất tồn tại độc lập với ý thức",
          "Vật chất phụ thuộc vào ý thức",
          "Vật chất do ý thức sáng tạo ra",
          "Vật chất và ý thức giống nhau",
        ],
        correct: 0,
      },
      {
        question: "Vận động là:",
        options: [
          "Sự dịch chuyển trong không gian",
          "Mọi sự thay đổi, biến đổi nói chung",
          "Chỉ là sự chuyển động cơ học",
          "Trạng thái đứng yên tương đối",
        ],
        correct: 1,
      },
      {
        question: "Mối quan hệ giữa vật chất và vận động là:",
        options: [
          "Vật chất có thể tồn tại mà không vận động",
          "Vận động là phương thức tồn tại của vật chất",
          "Vận động tồn tại độc lập với vật chất",
          "Không có mối liên hệ",
        ],
        correct: 1,
      },
      {
        question:
          "Các hình thức vận động cơ bản của vật chất theo thứ tự từ thấp đến cao là:",
        options: [
          "Cơ học, hóa học, vật lý, sinh học, xã hội",
          "Cơ học, vật lý, hóa học, sinh học, xã hội",
          "Vật lý, hóa học, cơ học, sinh học, xã hội",
          "Sinh học, hóa học, vật lý, cơ học, xã hội",
        ],
        correct: 1,
      },
      {
        question: "Vận động cơ học là:",
        options: [
          "Sự thay đổi vị trí của vật thể trong không gian",
          "Sự biến đổi năng lượng",
          "Sự chuyển hóa các nguyên tố",
          "Hoạt động của sinh vật",
        ],
        correct: 0,
      },
      {
        question: "Hình thức vận động cao nhất là:",
        options: [
          "Vận động sinh học",
          "Vận động hóa học",
          "Vận động xã hội",
          "Vận động vật lý",
        ],
        correct: 2,
      },
      {
        question: "Không thể quy vận động cao về vận động thấp vì:",
        options: [
          "Vận động cao có quy luật riêng",
          "Chúng hoàn toàn giống nhau",
          "Vận động thấp không tồn tại trong vận động cao",
          "Không có mối liên hệ giữa chúng",
        ],
        correct: 0,
      },
      {
        question: "Không gian là:",
        options: [
          "Hình thức tồn tại của vật chất, biểu hiện sự cùng tồn tại và trật tự sắp xếp",
          "Khoảng trống tuyệt đối",
          "Chỉ là khái niệm chủ quan",
          "Độc lập với vật chất",
        ],
        correct: 0,
      },
      {
        question: "Thời gian là:",
        options: [
          "Hình thức tồn tại của vật chất, biểu hiện sự kế tiếp nhau",
          "Chỉ là cảm giác chủ quan",
          "Độc lập với vật chất vận động",
          "Không liên quan đến vật chất",
        ],
        correct: 0,
      },
      {
        question: "Đặc điểm của không gian là:",
        options: [
          "Một chiều, không thuận nghịch",
          "Ba chiều, thuận nghịch",
          "Bốn chiều, không thuận nghịch",
          "Hai chiều, thuận nghịch",
        ],
        correct: 1,
      },
      {
        question: "Đặc điểm của thời gian là:",
        options: [
          "Một chiều, không thuận nghịch",
          "Ba chiều, thuận nghịch",
          "Hai chiều, không thuận nghịch",
          "Bốn chiều, thuận nghịch",
        ],
        correct: 0,
      },
      {
        question:
          "Mối quan hệ giữa vật chất, vận động, không gian và thời gian là:",
        options: [
          "Hoàn toàn độc lập",
          "Thống nhất không tách rời",
          "Có thể tồn tại riêng biệt",
          "Không có mối liên hệ",
        ],
        correct: 1,
      },
      {
        question: "Ý thức là:",
        options: [
          "Sản phẩm cao nhất của vật chất, chức năng của bộ não",
          "Thực thể độc lập với vật chất",
          "Chỉ là phản xạ sinh học",
          "Không liên quan đến bộ não",
        ],
        correct: 0,
      },
      {
        question: "Nguồn gốc của ý thức là:",
        options: [
          "Do thần linh ban cho",
          "Từ vật chất thông qua quá trình tiến hóa lâu dài",
          "Có sẵn từ đầu",
          "Không thể giải thích được",
        ],
        correct: 1,
      },
      {
        question: "Vai trò quyết định đến sự ra đời của ý thức con người là:",
        options: [
          "Tiến hóa sinh học",
          "Lao động xã hội",
          "Ngôn ngữ",
          "Sự phát triển của bộ não",
        ],
        correct: 1,
      },
      {
        question: "Ngôn ngữ là:",
        options: [
          "Vỏ vật chất của tư duy",
          "Công cụ trao đổi tư tưởng",
          "Hình thức tồn tại trực tiếp của tư duy",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Bản chất xã hội của ý thức được thể hiện ở:",
        options: [
          "Ý thức ra đời trong lao động xã hội",
          "Nội dung ý thức là sự phản ánh đời sống xã hội",
          "Ý thức phát triển cùng với sự phát triển của xã hội",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Ý thức là sản phẩm của:",
        options: [
          "Chỉ bộ não",
          "Chỉ đời sống xã hội",
          "Bộ não và đời sống xã hội",
          "Không phải của bộ não hay xã hội",
        ],
        correct: 2,
      },
      {
        question: "Cấu trúc của ý thức gồm:",
        options: [
          "Chỉ có tri thức",
          "Tri thức, tình cảm và ý chí",
          "Chỉ có tình cảm",
          "Chỉ có ý chí",
        ],
        correct: 1,
      },
      {
        question: "Ý thức cá nhân là:",
        options: [
          "Sự phản ánh đời sống cá nhân",
          "Hoàn toàn độc lập với ý thức xã hội",
          "Không chịu ảnh hưởng của xã hội",
          "Giống hệt ý thức xã hội",
        ],
        correct: 0,
      },
      {
        question: "Ý thức xã hội là:",
        options: [
          "Sự phản ánh tinh thần đời sống xã hội",
          "Tổng hợp ý thức cá nhân",
          "Chỉ là quan điểm của giai cấp thống trị",
          "Không liên quan đến tồn tại xã hội",
        ],
        correct: 0,
      },
      {
        question: "Các hình thức của ý thức xã hội bao gồm:",
        options: [
          "Chính trị, pháp quyền, đạo đức, nghệ thuật, tôn giáo, khoa học, triết học",
          "Chỉ có chính trị và pháp luật",
          "Chỉ có tôn giáo",
          "Chỉ có khoa học",
        ],
        correct: 0,
      },
      {
        question: "Lý luận phản ánh của chủ nghĩa duy vật biện chứng cho rằng:",
        options: [
          "Ý thức là sự phản ánh thế giới khách quan",
          "Ý thức sáng tạo ra thế giới",
          "Ý thức không liên quan đến thế giới khách quan",
          "Thế giới phụ thuộc vào ý thức",
        ],
        correct: 0,
      },
      {
        question: "Sự phản ánh ở con người khác với sinh vật ở chỗ:",
        options: [
          "Có tính tích cực, sáng tạo",
          "Hoàn toàn thụ động",
          "Chỉ là phản xạ cơ học",
          "Không có gì khác biệt",
        ],
        correct: 0,
      },
      {
        question: "Tính tích cực, sáng tạo của ý thức thể hiện ở:",
        options: [
          "Ý thức có thể phản ánh cái chưa có trong hiện thực",
          "Ý thức có thể định hướng hoạt động thực tiễn",
          "Ý thức có thể dự báo tương lai",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Trong mối quan hệ giữa vật chất và ý thức:",
        options: [
          "Vật chất là cái thứ nhất, ý thức là cái thứ hai",
          "Ý thức là cái thứ nhất, vật chất là cái thứ hai",
          "Chúng ngang nhau",
          "Không có cái nào là thứ nhất",
        ],
        correct: 0,
      },
      {
        question: "Vật chất quyết định ý thức được thể hiện ở:",
        options: [
          "Vật chất có trước, ý thức có sau",
          "Nội dung ý thức do vật chất quyết định",
          "Sự thay đổi của vật chất dẫn đến sự thay đổi của ý thức",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Ý thức tác động trở lại vật chất thông qua:",
        options: [
          "Hoạt động thực tiễn của con người",
          "Suy nghĩ đơn thuần",
          "Ước muốn chủ quan",
          "Không thể tác động",
        ],
        correct: 0,
      },
      {
        question:
          "Ý nghĩa phương pháp luận của nguyên lý vật chất quyết định ý thức là:",
        options: [
          "Xuất phát từ thực tế khách quan",
          "Tôn trọng quy luật khách quan",
          "Chống chủ quan, duy ý chí",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question:
          "Quan điểm duy tâm chủ quan về mối quan hệ vật chất - ý thức cho rằng:",
        options: [
          "Vật chất quyết định ý thức",
          "Ý thức con người sáng tạo ra thế giới",
          "Vật chất và ý thức thống nhất",
          "Vật chất là cái có trước",
        ],
        correct: 1,
      },
      {
        question: "Quan điểm duy tâm khách quan cho rằng:",
        options: [
          "Ý thức cá nhân sáng tạo ra thế giới",
          "Tinh thần tuyệt đối, ý niệm sáng tạo ra thế giới",
          "Vật chất quyết định ý thức",
          "Không có gì quyết định cả",
        ],
        correct: 1,
      },
      {
        question: "Quan điểm duy vật máy móc về ý thức:",
        options: [
          "Phủ nhận tính tích cực, sáng tạo của ý thức",
          "Thừa nhận tính tích cực của ý thức",
          "Coi ý thức quyết định vật chất",
          "Đúng về mọi mặt",
        ],
        correct: 0,
      },
      {
        question: "Trong hoạt động thực tiễn, cần:",
        options: [
          "Chỉ dựa vào ý chí chủ quan",
          "Kết hợp tôn trọng quy luật khách quan với phát huy tính năng động chủ quan",
          "Chỉ chờ đợi điều kiện khách quan",
          "Phủ nhận vai trò của ý thức",
        ],
        correct: 1,
      },
      {
        question: "Vai trò của ý thức trong đời sống xã hội hiện nay:",
        options: [
          "Ngày càng giảm đi",
          "Ngày càng tăng lên",
          "Không thay đổi",
          "Không còn vai trò",
        ],
        correct: 1,
      },
      {
        question: "Tại sao phải coi trọng công tác tư tưởng?",
        options: [
          "Vì ý thức có tác động to lớn đến thực tiễn",
          "Vì ý thức quyết định mọi việc",
          "Vì vật chất không quan trọng",
          "Không cần coi trọng",
        ],
        correct: 0,
      },
      {
        question: "Nguyên lý vật chất quyết định ý thức yêu cầu:",
        options: [
          "Xuất phát từ thực tế khách quan trong mọi hoạt động",
          "Chỉ dựa vào suy nghĩ chủ quan",
          "Bỏ qua điều kiện khách quan",
          "Phủ nhận vai trò của ý thức",
        ],
        correct: 0,
      },
      {
        question: "Tính năng động của ý thức được thể hiện qua:",
        options: [
          "Khả năng phản ánh thế giới",
          "Khả năng định hướng và điều khiển hoạt động thực tiễn",
          "Khả năng thay đổi thế giới khách quan",
          "Tất cả các ý trên",
        ],
        correct: 1,
      },
      {
        question: "Bộ não con người là:",
        options: [
          "Cơ quan sinh lý của ý thức",
          "Chính là ý thức",
          "Không liên quan đến ý thức",
          "Sản phẩm của ý thức",
        ],
        correct: 0,
      },
      {
        question:
          "Lao động đóng vai trò quyết định trong sự ra đời của ý thức vì:",
        options: [
          "Tạo ra bộ não phát triển",
          "Hình thành ngôn ngữ",
          "Tạo ra các quan hệ xã hội",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Ý thức phản ánh thế giới khách quan:",
        options: [
          "Một cách thụ động, máy móc",
          "Một cách tích cực, sáng tạo",
          "Hoàn toàn sai lệch",
          "Không thể phản ánh",
        ],
        correct: 1,
      },
      {
        question:
          "Phép biện chứng duy vật về mối quan hệ vật chất - ý thức yêu cầu:",
        options: [
          "Tuyệt đối hóa vai trò của vật chất",
          "Tuyệt đối hóa vai trò của ý thức",
          "Thấy được vai trò quyết định của vật chất và tác động tích cực của ý thức",
          "Phủ nhận cả hai",
        ],
        correct: 2,
      },
      {
        question: "Để phát huy tính tích cực của ý thức, cần:",
        options: [
          "Dựa trên cơ sở tôn trọng quy luật khách quan",
          "Bỏ qua điều kiện khách quan",
          "Chỉ cần ý chí chủ quan",
          "Phủ nhận thực tế",
        ],
        correct: 0,
      },
      {
        question: "Sai lầm của chủ nghĩa duy ý chí là:",
        options: [
          "Tuyệt đối hóa vai trò của ý thức, ý chí chủ quan",
          "Tôn trọng quy luật khách quan",
          "Xuất phát từ thực tế",
          "Kết hợp chủ quan với khách quan",
        ],
        correct: 0,
      },
      {
        question: "Sai lầm của chủ nghĩa duy vật máy móc về ý thức là:",
        options: [
          "Phủ nhận tính tích cực, sáng tạo của ý thức",
          "Thừa nhận vai trò năng động của ý thức",
          "Coi ý thức quyết định vật chất",
          "Thấy đúng bản chất của ý thức",
        ],
        correct: 0,
      },
      {
        question:
          "Trong điều kiện Việt Nam hiện nay, vận dụng nguyên lý vật chất quyết định ý thức cần:",
        options: [
          "Xuất phát từ thực tiễn đổi mới đất nước",
          "Phát huy tính sáng tạo của nhân dân",
          "Tôn trọng quy luật khách quan",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question:
          "Ý nghĩa của việc nghiên cứu mối quan hệ vật chất - ý thức là:",
        options: [
          "Giúp ta có thế giới quan đúng đắn",
          "Hướng dẫn hoạt động thực tiễn",
          "Tránh sai lầm chủ quan, duy ý chí",
          "Tất cả các ý trên",
        ],
        correct: 3,
      },
      {
        question: "Quan điểm 'Tồn tại tức là được tri giác' là của:",
        options: [
          "Chủ nghĩa duy vật",
          "Chủ nghĩa duy tâm chủ quan (Berkeley)",
          "Chủ nghĩa duy tâm khách quan",
          "Thuyết bất khả tri",
        ],
        correct: 1,
      },
    ];

    // Không cần tạo mảng dailyQuestions nữa, sẽ random trực tiếp khi cần

    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
    this.updateDecorations();
  }

  bindEvents() {
    // Thêm vùng click navigation trái/phải
    const calendarCard = document.querySelector('.calendar-card');
    
    calendarCard.addEventListener('click', (e) => {
      const rect = calendarCard.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const cardWidth = rect.width;
      
      // Kiểm tra xem click có phải vào ngày không
      const clickedDay = e.target.closest('.day');
      if (clickedDay) {
        // Nếu click vào ngày thì không xử lý navigation
        return;
      }
      
      // Chia calendar thành 3 vùng: trái (30%), giữa (40%), phải (30%)
      if (clickX < cardWidth * 0.3) {
        // Click vào vùng trái - tháng trước
        this.previousMonth();
      } else if (clickX > cardWidth * 0.7) {
        // Click vào vùng phải - tháng sau
        this.nextMonth();
      }
      // Vùng giữa không làm gì
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.previousMonth();
      if (e.key === "ArrowRight") this.nextMonth();
    });
  }

  previousMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.animateTransition(() => this.render());
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.animateTransition(() => this.render());
  }

  animateTransition(callback) {
    const content = document.querySelector(".calendar-content");
    
    // Preload background image trước khi animation để tránh nháy
    const imageIndex = this.currentMonth % this.backgroundImages.length;
    const backgroundImage = this.backgroundImages[imageIndex];
    const img = new Image();
    img.onload = () => {
      // Thay đổi background ngay khi image đã load
      this.updateDecorations();
      
      content.classList.add("flip-out");

      setTimeout(() => {
        callback();
        content.classList.remove("flip-out");
        content.classList.add("flip-in");

        setTimeout(() => {
          content.classList.remove("flip-in");
        }, 400);
      }, 200);
    };
    img.src = `images/${backgroundImage}`;
  }

  render() {
    this.renderMonth();
    this.renderDays();
    this.renderQuote();
    // Không gọi updateDecorations ở đây nữa vì đã gọi trong animateTransition
  }

  renderMonth() {
    document.getElementById("monthTitle").textContent =
      this.monthNames[this.currentMonth];
  }

  renderDays() {
    const daysGrid = document.getElementById("daysGrid");
    daysGrid.innerHTML = "";

    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const today = new Date();

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayElement = document.createElement("div");
      dayElement.className = "day";
      dayElement.textContent = date.getDate();

      // Check if it's today
      if (date.toDateString() === today.toDateString()) {
        dayElement.classList.add("today");
      }

      // Check if it's in current month
      if (date.getMonth() !== this.currentMonth) {
        dayElement.classList.add("other-month");
      }

      // Add click event
      dayElement.addEventListener("click", (e) => {
        e.preventDefault();
        this.selectDate(date);
      });

      daysGrid.appendChild(dayElement);
    }
  }

  selectDate(date) {
    // Remove previous selection
    document.querySelectorAll(".day.selected").forEach((day) => {
      day.classList.remove("selected");
    });

    // Add selection to clicked date
    const clickedDay = event.target;
    clickedDay.classList.add("selected");

    // Show question popup for this date
    this.showQuestionPopup(date);
  }

  showQuestionPopup(date) {
    const dayOfYear = this.getDayOfYear(date);
    // Random câu hỏi dựa trên ngày trong năm, đảm bảo cố định cho mỗi ngày
    const seed = (dayOfYear * 9301 + 49297) % 233280;
    const questionIndex = Math.floor((seed / 233280) * this.questions.length);
    const question = this.questions[questionIndex];

    // Create popup HTML
    const popupHTML = `
            <div class="question-popup" id="questionPopup">
                <div class="popup-content">
                    <div class="popup-header">
                        <h3>Câu hỏi ngày ${date.getDate()}/${date.getMonth() + 1}</h3>
                        <button class="close-btn" onclick="calendar.closeQuestionPopup()">&times;</button>
                    </div>
                    <div class="question-text">
                        ${question.question}
                    </div>
                    <div class="options">
                        ${question.options
                          .map(
                            (option, index) =>
                              `<button class="option-btn" onclick="calendar.selectAnswer(${index}, ${question.correct})">${String.fromCharCode(65 + index)}. ${option}</button>`,
                          )
                          .join("")}
                    </div>
                    <div class="result" id="result" style="display: none;"></div>
                </div>
            </div>
        `;

    // Add popup to body
    document.body.insertAdjacentHTML("beforeend", popupHTML);

    // Show popup with animation
    setTimeout(() => {
      document.getElementById("questionPopup").classList.add("show");
    }, 10);
  }

  getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  selectAnswer(selectedIndex, correctIndex) {
    const options = document.querySelectorAll(".option-btn");
    const result = document.getElementById("result");

    // Disable all options
    options.forEach((btn) => (btn.disabled = true));

    // Show correct/incorrect
    options[selectedIndex].classList.add(
      selectedIndex === correctIndex ? "correct" : "incorrect",
    );
    if (selectedIndex !== correctIndex) {
      options[correctIndex].classList.add("correct");
    }

    // Show result
    result.style.display = "block";
    result.innerHTML =
      selectedIndex === correctIndex
        ? '<span class="correct-text">Chính xác!</span>'
        : '<span class="incorrect-text">Sai rồi. Đáp án đúng là: ' +
          String.fromCharCode(65 + correctIndex) +
          "</span>";

    // Chỉ tự động đóng sau 2 giây nếu trả lời đúng
    if (selectedIndex === correctIndex) {
      this.autoCloseTimeout = setTimeout(() => {
        this.closeQuestionPopup();
      }, 2000);
    }
    // Nếu trả lời sai thì popup sẽ mở vĩnh viễn cho đến khi user ấn close
  }

  closeQuestionPopup() {
    // Clear timeout nếu có để tránh popup sau bị đóng tự động
    if (this.autoCloseTimeout) {
      clearTimeout(this.autoCloseTimeout);
      this.autoCloseTimeout = null;
    }
    
    const popup = document.getElementById("questionPopup");
    if (popup) {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.remove();
      }, 300);
    }
  }

  renderQuote() {
    const quoteElement = document.getElementById("quote");
    const randomQuote = this.quotes[this.currentMonth];
    quoteElement.textContent = randomQuote;
  }

  updateDecorations() {
    const card = document.querySelector(".calendar-card");

    // Chọn ảnh background dựa trên tháng hiện tại
    const imageIndex = this.currentMonth % this.backgroundImages.length;
    const backgroundImage = this.backgroundImages[imageIndex];
    
    // Chỉ dùng background image với overlay nhẹ, không có gradient cũ
    card.style.backgroundImage = `
      linear-gradient(rgba(248, 245, 240, 0.25), rgba(237, 231, 223, 0.25)),
      url('images/${backgroundImage}')
    `;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
    card.style.backgroundRepeat = 'no-repeat';

    // Animate decorative elements
    this.animateDecorations();
  }

  animateDecorations() {
    const butterfly = document.querySelector(".butterfly");
    const shapes = document.querySelectorAll(".shape");

    // Animate butterfly
    butterfly.style.transform = `rotate(${-15 + this.currentMonth * 2}deg) translateX(${this.currentMonth * 2}px)`;

    // Animate shapes
    shapes.forEach((shape, index) => {
      const rotation = (this.currentMonth * 10 + index * 30) % 360;
      shape.style.transform = `rotate(${rotation}deg)`;
    });
  }
}

// Initialize calendar when DOM is loaded
let calendar;
document.addEventListener("DOMContentLoaded", () => {
  calendar = new ArtisticCalendar();
});
