import { NextPage } from "next";
import { Hero, Services, WhoAreWe, Example, Teams } from "@components/Home";
import { Layout } from "@components/Layout";
import { useLocaleParser } from "@libs/localeParser";

const HomePage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("home")}>
			<Hero />
			<WhoAreWe />
			<Services />
			<Example />
			<Teams />
		</Layout>
	);
};

export default HomePage;
