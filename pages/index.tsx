import { NextPage } from "next";
import { Hero, Services, WhoAreWe, Example, Teams } from "@components/Home";
import { Layout } from "@components/Layout";

const HomePage: NextPage = () => {
	return (
		<Layout title="Anasayfa">
			<Hero />
			<WhoAreWe />
			<Services />
			<Example />
			<Teams />
		</Layout>
	);
};

export default HomePage;
