/** Removes legacy citation artifacts from certificate copy. */
function cleanDescription(text) {
  if (!text) return "";
  return text
    .replace(/\[cite:[^\]]*\]/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Full certification gallery (original 29 + missing credentials).
 * `featured: true` items surface in the main certifications view (Step 8).
 */
const certifications = [
  {
    id: "nptel-genai",
    name: "Programming with Generative AI - NPTEL",
    image: "/certifications/Programming with Generative AI - NPTEL.jpg",
    credentialId: "NPTEL25CS137S1058203369",
    verifyUrl:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS137S105820336910540994",
    description: "",
    featured: true,
  },
  {
    id: "python-excelr",
    name: "Foundations of Programming with Python - ExcelR",
    image: "/certifications/Foundations of Programming with Python - ExcelR.jpg",
    credentialId: "125539/EXCELR/EDL/14102025",
    verifyUrl: "",
    description: "",
    featured: false,
  },
  {
    id: "genai-outskill",
    name: "Generative AI Mastermind - Outskill",
    image: "/certifications/Generative AI Mastermind - Outskill.jpg",
    credentialId: "",
    verifyUrl: "",
    description: "",
    featured: false,
  },
  {
    id: "cbit-sudhee-2025",
    name: "CBIT SUDHEE Hackathon 2025 - CBIT",
    image: "/certifications/CBIT SUDHEE Hackathon 2025 - CBIT.jpg",
    credentialId: "",
    verifyUrl: "",
    description: "",
    featured: false,
  },
  {
    id: "cbit-cpp-vac",
    name: "Value Added Course in C++ - CBIT",
    image: "/certifications/Value Added Course in C++ - CBIT.jpg",
    credentialId: "",
    verifyUrl:
      "https://cdc-cbit.github.io/verify25/CPPVACM/?id=jakkojuvikranthCPPVACM0190",
    description: "",
    featured: false,
  },
  {
    id: "oracle-ai-foundations",
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate - Oracle",
    image:
      "/certifications/Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate - Oracle.jpg",
    credentialId: "103430968OCI25AICFA",
    verifyUrl: "",
    description: cleanDescription(
      "Oracle Certified AI Foundations Associate — proficiency in AI concepts within Oracle Cloud Infrastructure.",
    ),
    featured: true,
  },
  {
    id: "ibm-skillsbuild-emerging-tech",
    name: "Explore Emerging Tech - IBM SkillsBuild",
    image: "/certifications/Explore Emerging Tech - IBM SkillsBuild.jpg",
    credentialId: "XTiSEZau",
    verifyUrl: "https://www.credly.com/go/XTiSEZau",
    description: cleanDescription(
      "Foundational knowledge in emerging technologies and their impact on the digital landscape.",
    ),
    featured: false,
  },
  {
    id: "mongodb-associate",
    name: "MongoDB Associate Developer - MongoDB",
    image: "/certifications/MongoDB Associate Developer - MongoDB.jpg",
    credentialId: "YWxB27u2",
    verifyUrl: "https://www.credly.com/go/YWxB27u2",
    description: cleanDescription(
      "MongoDB Associate Developer — building and maintaining applications with MongoDB.",
    ),
    featured: true,
  },
  {
    id: "ai-impact-buildathon-guvi",
    name: "AI Impact Summit Buildathon - GUVI",
    image: "/certifications/AI Impact Summit Buildathon - GUVI.png",
    credentialId: "52667x1y3X7Z18awze",
    verifyUrl: "https://www.guvi.in/share-certificate/52667x1y3X7Z18awze",
    description: "",
    featured: false,
  },
  {
    id: "java-free-gurukul",
    name: "Java Programming - Free Gurukul Education Foundation",
    image:
      "/certifications/Java Programming - Free Gurukul Education Foundation.jpg",
    credentialId: "FG035206",
    verifyUrl: "",
    description: "",
    featured: false,
  },
  {
    id: "java-infosys-springboard",
    name: "Programming using Java - Infosys Springboard",
    image: "TODO:/certifications/Programming using Java - Infosys Springboard.jpg",
    credentialId: "",
    verifyUrl: "",
    description: "Infosys Springboard Java programming certification.",
    featured: true,
  },
  {
    id: "guvi-data-science-7-steps",
    name: "7 Steps to launch your Career in Data Science - GUVI",
    image:
      "/certifications/7 Steps to launch your Career in Data Science - GUVI.png",
    credentialId: "4EBa6g67F13Y4Jz682",
    verifyUrl: "https://www.guvi.in/share-certificate/4EBa6g67F13Y4Jz682",
    description: "",
    featured: false,
  },
  {
    id: "guvi-decode-ds-mindset",
    name: "Decode Data Science - Tools, Skills & Mindset - GUVI",
    image:
      "/certifications/Decode Data Science - Tools, Skills & Mindset - GUVI.png",
    credentialId: "6681a31RIWsS9z18Y7",
    verifyUrl: "https://www.guvi.in/share-certificate/6681a31RIWsS9z18Y7",
    description: "",
    featured: false,
  },
  {
    id: "guvi-master-ds-ml",
    name: "Master Data Science & Machine Learning - GUVI",
    image:
      "/certifications/Master Data Science & Machine Learning - GUVI.png",
    credentialId: "6G903y1441is9e7328",
    verifyUrl: "https://www.guvi.in/share-certificate/6G903y1441is9e7328",
    description: "",
    featured: false,
  },
  {
    id: "guvi-powerbi-tableau",
    name: "Master Dashboard Creation using Power BI & Tableau - GUVI",
    image:
      "/certifications/Master Dashboard Creation using Power BI & Tableau - GUVI.png",
    credentialId: "168176MU30fp97O9YR",
    verifyUrl: "https://www.guvi.in/share-certificate/168176MU30fp97O9YR",
    description: "",
    featured: false,
  },
  {
    id: "guvi-genai-roadmap",
    name: "Master Generative AI – A Roadmap to a Successful Career - GUVI",
    image:
      "/certifications/Master Generative AI – A Roadmap to a Successful Career - GUVI.png",
    credentialId: "d71T067a65y9z64MZJ",
    verifyUrl: "https://www.guvi.in/share-certificate/d71T067a65y9z64MZJ",
    description: "",
    featured: false,
  },
  {
    id: "guvi-devops-roadmap",
    name: "Next Gen Cloud DevOps Roadmap - GUVI",
    image: "/certifications/Next Gen Cloud DevOps Roadmap - GUVI.png",
    credentialId: "31Sv3D70Ag23075w0k",
    verifyUrl: "https://www.guvi.in/share-certificate/J93DTg76f617v75uc1",
    description: "",
    featured: false,
  },
  {
    id: "guvi-dsml-roadmap-2026",
    name: "Data Science & Machine Learning Roadmap for 2026 - GUVI",
    image:
      "/certifications/Data Science & Machine Learning Roadmap for 2026 - GUVI.png",
    credentialId: "79SwfY77U16q489l47",
    verifyUrl: "https://www.guvi.in/share-certificate/79SwfY77U16q489l47",
    description: "",
    featured: false,
  },
  {
    id: "guvi-decode-ds-ml",
    name: "Decode Data Science & Machine Learning - GUVI",
    image:
      "/certifications/Decode Data Science & Machine Learning - GUVI.png",
    credentialId: "VL3T24blg1150x77z9",
    verifyUrl: "https://www.guvi.in/share-certificate/VL3T24blg1150x77z9",
    description: "",
    featured: false,
  },
  {
    id: "guvi-future-proof-ai",
    name: "Future Proof Your Career in the AI Era - GUVI",
    image:
      "/certifications/Future Proof Your Career in the AI Era - GUVI.png",
    credentialId: "78YQy29Z09C357N717",
    verifyUrl: "https://www.guvi.in/share-certificate/78YQy29Z09C357N717",
    description: "",
    featured: false,
  },
  {
    id: "guvi-catia-mechanical",
    name: "Future-Proof Your Mechanical Engineering Career with CATIA - GUVI",
    image:
      "/certifications/Future-Proof Your Mechanical Engineering Career with CATIA - GUVI.png",
    credentialId: "fUH2j800S0L6r4J177",
    verifyUrl: "https://www.guvi.in/share-certificate/fUH2j800S0L6r4J177",
    description: "",
    featured: false,
  },
  {
    id: "guvi-meta-ads",
    name: "Build & Launch a Meta Ads Campaign - GUVI",
    image: "/certifications/Build & Launch a Meta Ads Campaign - GUVI.png",
    credentialId: "YgO5S73E711Q148k94",
    verifyUrl: "https://www.guvi.in/share-certificate/YgO5S73E711Q148k94",
    description: "",
    featured: false,
  },
  {
    id: "guvi-data-to-dashboards",
    name: "Data to Dashboards - PowerBI & Tableau - GUVI",
    image: "/certifications/Data to Dashboards - PowerBI & Tableau - GUVI.png",
    credentialId: "7871I4rXe614y247u1",
    verifyUrl: "https://www.guvi.in/share-certificate/7871I4rXe614y247u1",
    description: "",
    featured: false,
  },
  {
    id: "guvi-full-stack-journey",
    name: "Begin Your Full Stack Journey - GUVI",
    image: "/certifications/Begin Your Full Stack Journey - GUVI.png",
    credentialId: "7G9a77S1AN3s6Wr760",
    verifyUrl: "https://www.guvi.in/share-certificate/7G9a77S1AN3s6Wr760",
    description: "",
    featured: false,
  },
  {
    id: "guvi-analytics-workshop",
    name: "The 90-Minutes Data Analytics Workshop - GUVI",
    image:
      "/certifications/The 90-Minutes Data Analytics Workshop - GUVI.png",
    credentialId: "73nf75aH3K81744207",
    verifyUrl: "https://www.guvi.in/share-certificate/73nf75aH3K81744207",
    description: "",
    featured: false,
  },
  {
    id: "guvi-meta-90min",
    name: "Meta Ads Campaign in Just 90 Minutes - GUVI",
    image: "/certifications/Meta Ads Campaign in Just 90 Minutes - GUVI.png",
    credentialId: "D37ti7041S71BA861h",
    verifyUrl: "https://www.guvi.in/share-certificate/D37ti7041S71BA861h",
    description: "",
    featured: false,
  },
  {
    id: "guvi-360-web-dev",
    name: "Become a 360° Web Developer - GUVI",
    image: "/certifications/Become a 360° Web Developer - GUVI.png",
    credentialId: "9tpoT42471sH5Q7236",
    verifyUrl: "https://www.guvi.in/share-certificate/9tpoT42471sH5Q7236",
    description: "",
    featured: false,
  },
  {
    id: "guvi-digital-payments",
    name: "Designing a Digital Payment System from Scratch - GUVI",
    image:
      "/certifications/Designing a Digital Payment System from Scratch - GUVI.png",
    credentialId: "73Cr0847057wbA71py",
    verifyUrl: "https://www.guvi.in/share-certificate/73Cr0847057wbA71py",
    description: "",
    featured: false,
  },
  {
    id: "guvi-genai-workshop",
    name: "The 90-Minutes Generative AI Workshop - Building Careers in AI & Machine Learning - GUVI",
    image:
      "/certifications/The 90-Minutes Generative AI Workshop - Building Careers in AI & Machine Learning - GUVI.png",
    credentialId: "341UE511ub7v7n7FZ5",
    verifyUrl: "https://www.guvi.in/share-certificate/341UE511ub7v7n7FZ5",
    description: "",
    featured: false,
  },
  {
    id: "guvi-bim-civil",
    name: "From 2D CAD to 3D BIM - The Digital Transformation in Civil Engineering - GUVI",
    image:
      "/certifications/From 2D CAD to 3D BIM - The Digital Transformation in Civil Engineering - GUVI.png",
    credentialId: "9k1H54qX727131315z",
    verifyUrl: "https://www.guvi.in/share-certificate/9k1H54qX727131315z",
    description: "",
    featured: false,
  },
  {
    id: "google-solution-challenge-2026",
    name: "Google Solution Challenge 2026: Build with AI",
    image:
      "TODO:/certifications/Google Solution Challenge 2026 Build with AI.jpg",
    credentialId: "",
    verifyUrl: "",
    description: "Participation credential for Google Solution Challenge 2026.",
    featured: true,
  },
  {
    id: "pega-national-internship",
    name: "Pega National Internship Program",
    image: "TODO:/certifications/Pega National Internship Program.jpg",
    credentialId: "",
    verifyUrl: "",
    description:
      "AICTE NEAT — Pegasystems × SmartBridge low-code workflow automation internship.",
    featured: true,
  },
  {
    id: "servicenow-micro-certification",
    name: "ServiceNow Micro Certification",
    image: "TODO:/certifications/ServiceNow Micro Certification.jpg",
    credentialId: "",
    verifyUrl: "",
    description:
      "Earned during ServiceNow University virtual internship (Administration, Agentic AI, Flows).",
    featured: true,
  },
];

/** Legacy field names for existing Certifications.jsx until Step 8 rebuild. */
export function toLegacyCert(cert) {
  const image =
    cert.image && cert.image.startsWith("TODO:") ? "" : cert.image;
  return {
    name: cert.name,
    location: image,
    cid: cert.credentialId,
    clink: cert.verifyUrl,
    description: cert.description,
    featured: cert.featured,
  };
}

export const legacyCertifications = certifications.map(toLegacyCert);

export const featuredCertifications = certifications.filter(
  (cert) => cert.featured,
);

export default certifications;
