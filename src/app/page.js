import CardsContainer from "@/components/CardsContainer";
import Header from "@/components/Header";

export default function Home({ searchParams }) {
  return (
    <main>
      <Header />
      <CardsContainer searchParams={searchParams} />
    </main>
  );
}
