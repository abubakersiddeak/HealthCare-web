import PageHeading from "@/components/common/PageHeading";
import { COPYRIGHT_YEAR, SITE_CONFIG, QUICK_STATS } from "@/data/constants";
import { MdHealthAndSafety, MdLocalHospital, MdMonitorHeart } from "react-icons/md";

export default function About() {
  return (
    <>
      <PageHeading
        title="About Us"
        description="Learn more about our mission and commitment to healthcare"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 p-8 text-white shadow-lg">
            <div className="rounded-lg border border-white/20 bg-white/15 p-6 backdrop-blur">
              <MdLocalHospital className="mb-8 text-6xl" />
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-50">
                Modern Nursing Home
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight">
                Care spaces designed for calm, safety, and speed.
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/15 p-4">
                  <MdHealthAndSafety className="mb-2 text-3xl" />
                  <p className="font-semibold">Patient-first care</p>
                </div>
                <div className="rounded-lg bg-white/15 p-4">
                  <MdMonitorHeart className="mb-2 text-3xl" />
                  <p className="font-semibold">Modern monitoring</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to {SITE_CONFIG.siteName}
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Founded in{" "}
              {COPYRIGHT_YEAR - QUICK_STATS.yearsInOperation},
              we have been committed to providing the highest quality healthcare
              services to our community. With over{" "}
              {QUICK_STATS.yearsInOperation} years of experience, we have earned
              the trust of thousands of patients.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our state-of-the-art facilities combined with a dedicated team of
              medical professionals ensure that every patient receives
              personalized and compassionate care. We believe that good health
              is fundamental to a happy life.
            </p>
            <p className="text-gray-700 text-lg">
              Whether you need emergency care, routine checkups, or specialized
              treatment, we are here to support your health journey every step
              of the way.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide accessible, affordable, and high-quality healthcare
              services to all members of our community, with a focus on patient
              satisfaction and medical excellence.
            </p>
          </div>
          <div className="bg-emerald-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the most trusted healthcare provider in the region, known
              for innovation, compassion, and exceptional patient outcomes.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                {QUICK_STATS.yearsInOperation}+
              </div>
              <p className="text-blue-100">Years of Service</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {QUICK_STATS.doctorsCount}
              </div>
              <p className="text-blue-100">Expert Doctors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {QUICK_STATS.patientsServed}
              </div>
              <p className="text-blue-100">Patients Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {QUICK_STATS.departments}
              </div>
              <p className="text-blue-100">Departments</p>
            </div>
          </div>
        </div>

        {/* Director's Message */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex min-h-64 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600 shadow-lg">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-3xl font-black text-blue-700 shadow-xl">
                RS
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Director&rsquo;s Message
              </h3>
              <p className="text-gray-700 mb-4">Dear Valued Patients,</p>
              <p className="text-gray-700 mb-4">
                As the Director of {SITE_CONFIG.siteName}, I am proud to lead an
                organization dedicated to transforming healthcare. Our
                commitment to excellence, combined with our team&rsquo;s unwavering
                dedication, ensures that every patient receives world-class
                treatment.
              </p>
              <p className="text-gray-700">
                We continuously invest in modern technology and staff training
                to stay at the forefront of medical science. Your health and
                happiness are our ultimate goals.
              </p>
              <p className="text-gray-700 font-semibold mt-6">
                Dr. Rajesh Sharma
                <br />
                <span className="text-blue-600">
                  Director & Chief Medical Officer
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
