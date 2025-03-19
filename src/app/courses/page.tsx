// src/app/course_page.tsx
import Link from "next/link";
import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function CoursePage() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
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

        {/* Content */}
        <div className="container mt-10 flex flex-col items-center justify-center gap-12 px-4 py-16 pt-24">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">3DIoT</span> Courses
          </h1>
          <h2 className="text-2xl font-bold tracking-tight sm:text-[3rem]">
            {" "}
            Learn - Build - Innovate
          </h2>

          {/* Dự án khóa học */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="/courses/course1"
            >
              <h3 className="text-2xl font-bold">
                Course 1: Introduction to IoT →
              </h3>
              <div className="text-lg">
                A beginner's guide to understanding IoT technologies and their
                applications.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="/courses/course2"
            >
              <h3 className="text-2xl font-bold">
                Course 2: Building Smart Devices →
              </h3>
              <div className="text-lg">
                Learn how to build and deploy your own IoT devices for smart
                applications.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="/courses/course3"
            >
              <h3 className="text-2xl font-bold">
                Course 3: Data Analytics in IoT →
              </h3>
              <div className="text-lg">
                Explore how to analyze data collected from IoT devices and gain
                insights.
              </div>
            </Link>
          </div>

          {/* Sign-in / Sign-out and Session */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>

          {session?.user && <LatestPost />}
        </div>
      </main>
    </HydrateClient>
  );
}
