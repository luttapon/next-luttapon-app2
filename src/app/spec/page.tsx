import ProfileCard from '@/components/profileCard';
import Sidebar from '@/components/SidebarIcons';

export default function EduExpPage() {
  return (
    <div className="bg-black min-h-screen text-white p-6 relative">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/4">
          <ProfileCard />
        </div>
        <div className="w-full md:w-2/4">
          <h1 className="text-3xl font-bold mb-6">
            My <span className="text-orange-500">Specializations</span>
          </h1>
          <div className="flex flex-col space-y-4">
            {/* Front-end developer */}
            <div className="bg-neutral-800 rounded-xl p-6 flex items-start space-x-4 border border-transparent hover:border-orange-500 transition-colors duration-300">
              <div className="w-10 h-10 flex items-center justify-center text-orange-500">
                <img src="/icons/icons8-menu.svg" alt="Specializations" width={24} height={24} className="invert" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-orange-400">Front-end developer</h2>
                <p className="text-sm text-neutral-400">Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.</p>
              </div>
            </div>
            {/* UI/UX Designer */}
            <div className="bg-neutral-800 rounded-xl p-6 flex items-start space-x-4 border border-transparent hover:border-orange-500 transition-colors duration-300">
              <div className="w-10 h-10 flex items-center justify-center text-orange-500">
                <img src="/icons/globe.svg" alt="Globe" width={24} height={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-orange-400">UI/UX Designer</h2>
                <p className="text-sm text-neutral-400">UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.</p>
              </div>
            </div>
            {/* Graphic designer */}
            <div className="bg-neutral-800 rounded-xl p-6 flex items-start space-x-4 border border-transparent hover:border-orange-500 transition-colors duration-300">
              <div className="w-10 h-10 flex items-center justify-center text-orange-500">
                <img src="/icons/pencil.svg" alt="Pencil" width={24} height={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-orange-400">Graphic designer</h2>
                <p className="text-sm text-neutral-400">As a graphic designer, I transform ideas into visually striking and impactful designs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* ส่วน Sidebar ที่ถูกแก้ไขขนาด */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 hidden md:block **w-16 h-80**"> {/* เพิ่ม w-16 h-80 */}
        <Sidebar />
      </div>
    </div>
  );
}