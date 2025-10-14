import ImagingHeaderBar from "./ImagingHeaderBar";

export default function ImagingLayout({ title, subtitle, links, content }) {
  return (
    <div className="min-h-screen font-body bg-[#f3f6fb] text-gray-800">
      {/* --- Shared Imaging Header Bar (same as Home) --- */}
      <ImagingHeaderBar />

      {/* --- Page Content Section --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        {/* --- Sidebar --- */}
        <aside className="md:col-span-1 bg-white rounded-2xl shadow-md p-6 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">{title}</h2>
          <ul className="space-y-3">
            {links?.map((link, i) => (
              <li
                key={i}
                className="text-gray-700 hover:text-blue-700 transition-all cursor-pointer font-medium"
              >
                » {link}
              </li>
            ))}
          </ul>
        </aside>

        {/* --- Main Content --- */}
        <main className="md:col-span-3 bg-white rounded-2xl shadow-md p-8 border border-blue-100">
          {content}
        </main>
      </div>
    </div>
  );
}
