import { NextPage } from "next";
import { Hero, About, Pricing } from "@components/Order";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";

const OrderPage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("order")}>
			<Hero />
			<About />
			<Pricing />
		</Layout>
	);
};

export default OrderPage;
