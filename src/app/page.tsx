import Link from "next/link";
import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
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

        {/*Content*/}
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="mt-10 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">3DIoT</span>
          </h1>
          <h2 className="text-2xl font-bold tracking-tight sm:text-[3rem]">
            {" "}
            Deep - Do - Develop
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {/*Dẫn đến trang courses*/}
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="/courses"
            >
              <h3 className="text-2xl font-bold">Khóa Học về IoT →</h3>
              <div className="text-lg">
                Tìm hiểu các khóa học IoT mới nhất tại 3DIoT và nâng cao kỹ năng
                của bạn.
              </div>
            </Link>

            {/*Dẫn đến trang about*/}
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="/about"
            >
              <h3 className="text-2xl font-bold">Về Chúng Tôi →</h3>
              <div className="text-lg">
                Tìm hiểu về sứ mệnh, tầm nhìn và đội ngũ phát triển của 3DIoT.
              </div>
            </Link>
          </div>

          {session?.user && <LatestPost />}
        </div>
      </main>
    </HydrateClient>
  );
}
