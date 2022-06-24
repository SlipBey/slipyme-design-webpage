import { NextPage } from "next";
import { Hero, About, Pricing } from "@components/Order";
import { Layout } from "@components/Layout";

const OrderPage: NextPage = () => {
	return (
		<Layout title="Sipariş">
			<Hero />
			<About />
			<Pricing />
		</Layout>
	);
};

export default OrderPage;
