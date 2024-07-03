import { NextPage } from "next";
import { Hero } from "@/components/Order";
import { Layout } from "@/components/Layout";
import { useLocaleParser } from "@/libs/localeParser";

const OrderPage: NextPage = () => {
  const parser = useLocaleParser();

  return (
    <Layout title={parser.get("order")}>
      <Hero />
      {/* <About />
			<Pricing /> */}
      <h1 className="text-center mb-24 text-6xl font-extrabold">
        BU SAYFA ŞUANDA YAPIM AŞAMASINDADIR!
      </h1>
    </Layout>
  );
};

export default OrderPage;
