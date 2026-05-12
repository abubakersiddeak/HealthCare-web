import PageHeading from "@/components/common/PageHeading";
import { COPYRIGHT_YEAR, SITE_CONFIG, QUICK_STATS } from "@/data/constants";
import Image from "next/image";
import {
  MdHealthAndSafety,
  MdLocalHospital,
  MdMonitorHeart,
  MdHistory,
} from "react-icons/md";

export default function About() {
  return (
    <>
      <PageHeading
        title="Our Journey & Mission"
        description={`Evolving from Al-Shifa to ${SITE_CONFIG.siteName} — better care for your family.`}
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Rebranding / Evolution Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
              <MdHistory className="text-lg" />
              Our Evolution
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              A New Chapter in Healthcare: <br />
              <span className="text-blue-600">
                From Al-Shifa to Talukdar Clinic
              </span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              For years, we served this community faithfully as{" "}
              <strong>Al-Shifa Clinic</strong>. Today, we are proud to announce
              our rebranding to <strong>{SITE_CONFIG.siteName}</strong>.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              This change isn't just about a new name; it’s about an upgraded
              commitment. We’ve expanded our nursing care, modernized our wards,
              and brought in specialized diagnostics to ensure that the legacy
              of trust built under Al-Shifa continues with even higher
              standards.
            </p>
            <div className="border-l-4 border-emerald-500 pl-4 py-2 italic text-gray-600">
              "The same expert doctors, the same caring staff, now with a vision
              for the future."
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 p-8 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
              <MdLocalHospital className="mb-8 text-6xl text-emerald-400" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Enhanced Facilities
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight">
                Modern Nursing Home & Diagnostic Center.
              </h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/5 p-4 border border-white/5 hover:bg-white/10 transition">
                  <MdHealthAndSafety className="mb-2 text-3xl text-emerald-400" />
                  <p className="font-bold">24/7 Patient Monitoring</p>
                </div>
                <div className="rounded-lg bg-white/5 p-4 border border-white/5 hover:bg-white/10 transition">
                  <MdMonitorHeart className="mb-2 text-3xl text-blue-400" />
                  <p className="font-bold">Specialized Diagnostics</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
              <MdHealthAndSafety size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, affordable, and high-quality healthcare
              services to all members of our community, ensuring that the
              transition to {SITE_CONFIG.siteName} brings even better medical
              excellence to our patients.
            </p>
          </div>
          <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6">
              <MdMonitorHeart size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the region&apos;s most trusted medical hub, recognized for
              combining compassionate nursing care with modern diagnostic
              innovation to achieve exceptional patient outcomes.
            </p>
          </div>
        </div>

        {/* Director's Message */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative aspect-square flex items-center justify-center rounded-2xl bg-white shadow-xl overflow-hidden">
                <span className="text-5xl font-black text-blue-600">
                  <Image
                    src={"/tcnh.png"}
                    alt="tcnh logo"
                    height={500}
                    width={500}
                    className="h-full w-full"
                  />
                </span>
                {/* Once you have a photo, replace the span above with an <Image /> */}
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-3xl font-black text-slate-900 mb-6">
                A Message from the Management
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                &quot;Welcoming you to <strong>{SITE_CONFIG.siteName}</strong>{" "}
                is a moment of great pride for us. As we transition from our
                roots at Al-Shifa, we carry forward a legacy of healing while
                embracing a future of modern nursing and diagnostic
                excellence.&quot;
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of caring nurses and experienced doctors are dedicated
                to making your recovery as smooth as possible. We believe in
                safe health services, available for you, always.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
