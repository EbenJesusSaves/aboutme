import Image from "next/image";
import styles from "./page.module.css";
import RootLayout from "./layout";
import { LandingPage } from "@/components/main/LandingPage";

export default function Home() {
  return (
    <>
      <main style={{ margin: 0, padding: 0 }}>
        <LandingPage />
      </main>
    </>
  );
}
