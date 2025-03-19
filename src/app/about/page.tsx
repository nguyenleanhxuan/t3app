import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
        {/* Header */}
        <header className="fixed left-0 top-0 z-10 w-full bg-gradient-to-r from-[#502172] to-[#7220c5] py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            {/* Logo bên trái */}
            <div>
              <img
                src="/3diotlogo.png" // Thay logo của bạn tại đây
                alt="3DIoTLogo"
                className="h-12" // Điều chỉnh kích thước logo nếu cần
              />
            </div>

            {/* Navigation bên phải */}
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/courses" className="hover:text-gray-300">
                    Khóa Học
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-gray-300">
                    Sản Phẩm
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    Về Chúng Tôi
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Giới thiệu về 3DIoT */}
        <div className="container flex max-w-4xl flex-col items-center rounded-lg p-8 shadow-lg md:flex-row">
          {/* Bên trái - Logo */}
          <div className="mt-10 flex justify-center md:w-1/3">
            <img
              src="/3diotlogo.png"
              alt="3DIoT Logo"
              className="h-32 w-auto"
            />
          </div>

          {/* Bên phải - Giới thiệu */}
          <div className="mt-6 text-center md:mt-0 md:w-2/3 md:pl-8 md:text-left">
            <h1 className="text-3xl font-bold">Chào Mừng Đến Với 3DIoT</h1>
            <p className="mt-4 text-lg text-purple-500">
              🚀 3DIoT hướng tới xây dựng cộng đồng chuyên sâu về lập trình
              nhúng và IoT.
            </p>
            <p className="mt-4 text-lg text-purple-500">
              🔗 Sứ mệnh: Kết nối đam mê, chia sẻ tri thức và đồng hành cùng bạn
              trên hành trình khám phá & làm chủ công nghệ 🌍
            </p>
          </div>
        </div>

        {/* Form đăng ký liên lạc */}
        <div className="container mt-12 max-w-lg rounded-lg p-8 shadow-lg">
          <h2 className="ext-purple-500 text-center text-2xl font-bold">
            Liên hệ với chúng tôi
          </h2>
          <p className="mb-6 text-center text-purple-500">
            Điền thông tin của bạn để nhận được tư vấn từ đội ngũ 3DIoT.
          </p>

          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Nội dung tin nhắn"
              rows={4}
              className="rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Gửi thông tin
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
