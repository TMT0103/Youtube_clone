
# 📺 YouTube Clone

Một ứng dụng **YouTube Clone** được xây dựng bằng **React**, **Material UI** và **YouTube Data API v3**.

## ✨ Tính năng

* 🏠 Trang chủ hiển thị video theo danh mục (trending videos)
* 🔍 Tìm kiếm video
* 📹 Phát video bằng iframe embed
* 💬 Hiển thị bình luận
* 📊 Hiển thị lượt xem và lượt thích
* 📡 Video liên quan từ cùng kênh
* 📱 Giao diện responsive (mobile & desktop)

---

# 🛠️ Công nghệ sử dụng

* **React** — Framework xây dựng giao diện
* **React Router DOM** — Điều hướng trang (routing)
* **Material UI (MUI)** — Thư viện UI component
* **Axios** — Gửi HTTP request
* **YouTube Data API v3** — Lấy dữ liệu video từ YouTube

---

# 🚀 Hướng dẫn cài đặt

## 1. Clone project

```bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
```

## 2. Cài đặt thư viện

```bash
npm install
```

## 3. Tạo API Key cho YouTube Data API v3

1. Truy cập **Google Cloud Console**
   [https://console.cloud.google.com](https://console.cloud.google.com)
2. Tạo **Project mới**
3. Vào **APIs & Services → Library**
4. Tìm **YouTube Data API v3** → Enable
5. Vào **APIs & Services → Credentials**
6. Chọn **+ Create Credentials → API Key**
7. Sao chép API Key

---

## 4. Cấu hình biến môi trường

Tạo file `.env` trong thư mục gốc của project:

```env
REACT_APP_YOUTUBE_API_KEY=your_api_key_here
```

⚠️ **Không commit file `.env` lên GitHub**
Hãy đảm bảo file này đã nằm trong `.gitignore`.

---

## 5. Chạy ứng dụng

```bash
npm start
```

Ứng dụng sẽ chạy tại:

```
http://localhost:3000
```

# 🔑 Sử dụng API

Project sử dụng **YouTube Data API v3**.

Free tier cho phép **10,000 units/ngày**.

| Endpoint         | Mục đích                        |
| ---------------- | ------------------------------- |
| `videos`         | Lấy thông tin video và thống kê |
| `search`         | Tìm kiếm video                  |
| `channels`       | Lấy thông tin kênh              |
| `commentThreads` | Lấy danh sách bình luận         |


# 📝 Lưu ý

* Một số kênh YouTube có thể **ẩn lượt thích (`likeCount`)**, khi đó giá trị sẽ hiển thị là `0`
* Một số video **không cho phép embed**, nên sẽ không phát được trong iframe
* **API quota được reset mỗi ngày lúc 00:00 theo giờ Pacific**


# 📄 License

MIT License



