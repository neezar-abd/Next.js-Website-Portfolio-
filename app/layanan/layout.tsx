import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Probolinggo | Neezar Abd - Web Developer",
  description:
    "Jasa pembuatan website profesional untuk UMKM, bisnis, sekolah, dan personal branding di Probolinggo. Harga terjangkau mulai Rp 1 juta. Free domain & hosting 1 tahun. Pelayanan lokal, kualitas profesional.",
  keywords: [
    "jasa website probolinggo",
    "web developer probolinggo",
    "pembuatan website probolinggo",
    "jasa pembuatan website murah probolinggo",
    "website umkm probolinggo",
    "toko online probolinggo",
    "company profile probolinggo",
    "freelance web developer probolinggo",
    "jasa website murah jawa timur",
    "web developer jawa timur",
  ],
  authors: [{ name: "Neezar Abdurrahman", url: "https://neezar.tech" }],
  openGraph: {
    title: "Jasa Pembuatan Website Probolinggo | Neezar Abd",
    description:
      "Web Developer Probolinggo - Jasa pembuatan website untuk UMKM, bisnis, dan personal. Harga mulai Rp 1 juta. Free domain & hosting.",
    type: "website",
    locale: "id_ID",
    siteName: "Neezar Abd - Web Developer Probolinggo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Pembuatan Website Probolinggo | Neezar Abd",
    description:
      "Web Developer Probolinggo - Jasa pembuatan website profesional untuk UMKM dan bisnis lokal. Harga terjangkau, kualitas terjamin.",
  },
  alternates: {
    canonical: "https://neezar.tech/layanan",
  },
};

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
