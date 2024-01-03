import { useTranslations } from "next-intl";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
	const $t = useTranslations();

	return <div>{$t("homepage")}</div>;
};

export default HomePage;
