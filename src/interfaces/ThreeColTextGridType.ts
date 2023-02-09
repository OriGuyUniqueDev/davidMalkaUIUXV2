import ImageType from "./ImageType";

export default interface ThreeColTextGridType {
	image?: ImageType | null;
	icon?: ImageType | null;
	title: string;
	text: string;
	cardBgColor?: string | null;
}
