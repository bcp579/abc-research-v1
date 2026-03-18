import { MapPin, Clock, Briefcase, GraduationCap, Send } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="container mx-auto px-6 py-16 lg:px-20 max-w-5xl">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Current Openings</h1>
        <p className="text-center text-amber-700 font-medium bg-amber-50 py-2 rounded-lg border border-amber-200">
          Both positions are currently <strong>on hold</strong> and will be updated soon.
        </p>
      </section>

      {/* Job Listings */}
      <div className="space-y-12">
        
        {/* Job 1: Biomedical Engineer */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-blue-800">1. Biomedical Engineer – MRI Data</h2>
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded text-gray-500">On Hold</span>
          </div>
          <div className="flex gap-4 mb-6 text-sm text-gray-600">
            <span className="flex items-center gap-1"><MapPin size={16} /> [Remote]</span>
            <span className="flex items-center gap-1"><Clock size={16} /> Part-Time</span>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">About the Role:</h3>
              <p className="text-gray-700 leading-relaxed">
                ABC Research Inc. is seeking a Biomedical Engineer to join our team working on AI-driven MRI analysis and imaging optimization. You will work closely with radiologists, AI researchers, and software engineers to develop solutions that improve image quality, detect positioning errors, and enhance diagnostic accuracy.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">Responsibilities:</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Design and validate MRI data acquisition protocols for shoulder and musculoskeletal imaging.</li>
                <li>Preprocess, annotate, and manage large MRI datasets for training AI models.</li>
                <li>Develop algorithms to detect positioning errors (e.g., scapular alignment, humeral rotation).</li>
                <li>Assist in real-time integration of AI solutions with MRI scanner software.</li>
                <li>Document workflows, generate technical reports, and contribute to research publications.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">Qualifications:</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Bachelor’s or Master’s degree in Biomedical Engineering, Medical Imaging, or related field.</li>
                <li>Hands-on experience with MRI data acquisition, DICOM data handling, and imaging pipelines.</li>
                <li>Experience with quantitative imaging metrics, image registration, or segmentation preferred.</li>
                <li>Strong programming skills in Python and MATLAB; familiarity with machine learning libraries (PyTorch, TensorFlow) a plus.</li>
                <li>Understanding of musculoskeletal anatomy, especially shoulder and rotator cuff imaging.</li>
                <li>Excellent teamwork, communication, and problem-solving skills.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Job 2: Signal Processing Engineer */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-blue-800">2. Signal Processing Engineer</h2>
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded text-gray-500">On Hold</span>
          </div>
          <div className="flex gap-4 mb-6 text-sm text-gray-600">
            <span className="flex items-center gap-1"><MapPin size={16} /> [Toronto or Remote]</span>
            <span className="flex items-center gap-1"><Briefcase size={16} /> Full-Time</span>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">About the Role:</h3>
              <p className="text-gray-700 leading-relaxed">
                ABC Research Inc. is looking for two Signal Processing Engineers to work on biomedical applications, including EEG-based neurorehabilitation, sleep monitoring, and physiological data analysis. You will design and implement algorithms to extract meaningful features from complex biomedical signals and support AI-driven clinical solutions.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">Responsibilities:</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Develop and implement digital signal processing algorithms for EEG, EMG, ECG, and other biomedical signals.</li>
                <li>Perform preprocessing (filtering, artifact removal, normalization) and feature extraction for machine learning models.</li>
                <li>Work with AI teams to optimize real-time signal acquisition pipelines.</li>
                <li>Conduct performance evaluation, validation, and quality control of signal processing algorithms.</li>
                <li>Document methods, maintain code repositories, and contribute to research publications.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">Qualifications:</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                <li>Bachelor’s or Master’s degree in Electrical Engineering, Biomedical Engineering, Signal Processing, or related field.</li>
                <li>Solid understanding of DSP techniques: Fourier transforms, filtering, spectral analysis, wavelets, and feature extraction.</li>
                <li>Proficiency in Python (NumPy, SciPy, MNE, etc.), MATLAB, or C++ for algorithm development.</li>
                <li>Experience with EEG/EMG/ECG data acquisition systems and sensors strongly preferred.</li>
                <li>Familiarity with real-time signal processing and embedded system integration a plus.</li>
                <li>Strong analytical skills, attention to detail, and ability to work in interdisciplinary teams.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Additional Info Sections */}
      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
          <h2 className="text-xl font-bold text-blue-900 flex items-center gap-2 mb-4">
            <GraduationCap /> Internship Opportunities
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are hiring interns for similar roles in biomedical engineering, signal processing, and AI-driven clinical projects. This is a great way to gain hands-on experience with cutting-edge biomedical research and contribute to real-world healthcare solutions.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <Send size={20} /> Don’t see a position that fits?
          </h2>
          <p className="text-gray-700 leading-relaxed italic pb-5">
            We’re always looking for new talent as our team grows. Drop your resume and tell us about your skills-we’re excited to explore opportunities with motivated researchers and engineers.
          </p>
          <a href="mailto:careers@abcresearch.com" className="text-blue-600 font-bold hover:underline ">
            Submit General Application &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}