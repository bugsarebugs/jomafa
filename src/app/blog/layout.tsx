import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | Blog| JOMAFA`,
    default: `Diaries`,
  },
  description: "This Diary is about Exploring the World",
  openGraph: {
    locale: "en",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="px-4 p-10 flex overflow-x-hidden flex-col justify-center items-center self-center align-middle">{children}</main>;
  
}
