import Hero from "@/components/Hero";
import { getDictionary } from "@/dictionaries/get-dictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <main>
      <Hero dict={dict} />
    </main>
  );
}
