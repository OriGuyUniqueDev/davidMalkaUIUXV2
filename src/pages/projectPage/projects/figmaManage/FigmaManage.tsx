import { FunctionComponent } from "react";
import PainPointType from "../../../../interfaces/PainPointType";
import ThreeColTextGridType from "../../../../interfaces/ThreeColTextGridType";
import Contact from "../../../home/components/contact/Contact";
import AboutProject from "../../components/AboutProject";
import HeroProject from "../../components/HeroProject";
import ListOneTwoThree from "../../components/ListOneTwoThree";
import ProjectNavigation from "../../components/ProjectsNavigation";
import Dilemas from "./components/dilemas/Dilemas";
import ManagingDesign from "./components/managingDesign/ManagingDesign";
import Presentation from "./components/presentation/Presentation";
import Price from "./components/price/Price";
import PriceUI from "./components/priceUI/PriceUI";
import UI from "./components/ui/UI";

interface FigmaManageProps {}

const FigmaManage: FunctionComponent<FigmaManageProps> = () => {
	const aboutText = "Figma Manage is a handy tool for designers created by Figma, to streamline their work and keep everything organized in one place. No more jumping between different management tools, Figma Manage allows designers to manage their tasks right within Figma, saving time and making the design process a breeze!";
	const cards: ThreeColTextGridType[] = [
		{
			text: "With Figma Manage, designers can keep track of their tasks and stay organized within the Figma platform, saving time and streamlining the design process.",
			title: "The needs",
			icon: { url: "/icons/sad.svg", alt: "sad icon" },
			image: null,
			cardBgColor: null,
		},
		{
			text: "Designers using Figma were facing a challenge of having to switch to another tool to manage their tasks. But now with Figma Manage, they can keep everything organized and streamlined, saving time and making the design process smoother.",
			title: "The Problem",
			icon: { url: "/icons/bug.svg", alt: "bug icon" },
			image: null,
			cardBgColor: null,
		},
		{
			text: "The goal was to create a Figma plugin to make it easy for designers to manage their tasks right within the Figma tool, without having to switch to a different system.",
			title: "The solution",
			icon: { url: "/icons/pill.svg", alt: "pill icon" },
			image: null,
			cardBgColor: null,
		},
	];
	const cards2: ThreeColTextGridType[] = [
		{
			text: "Figma Manage streamlines design process for designers by allowing them to manage tasks within Figma, saving time and effort switching between tools.",
			title: "Designers - ",
			icon: null,
			image: { url: "/images/projects/figmaManage/images/woman.png", alt: "woman icon" },
			cardBgColor: "bg-[#1ABCFE]",
		},
		{
			text: "With Figma Manage, team leaders now have a convenient way to keep track of their designers' tasks, making it easier to plan and manage their work. They can easily monitor progress and adjust plans as needed, all from within Figma.",
			title: "Design Team Leaders -",
			icon: null,
			image: { url: "/images/projects/figmaManage/images/man1.png", alt: "man1 icon" },
			cardBgColor: "bg-[#A259FF]",
		},
		{
			text: "ith Figma Manage, project managers can easily keep track of their design projects and even connect it with other project management tools like JIRA or Monday. They can have a bird's eye view of the progress, and make sure everything is on track.",
			title: "Project Managers - ",
			icon: null,
			image: { url: "/images/projects/figmaManage/images/man2.png", alt: "man2 icon" },
			cardBgColor: "bg-[#FF613F]",
		},
	];
	const oneTwoThreeData: PainPointType[] = [
		{
			text: "The ability to manage the work and the tasks directly from the same tool that designers work with significantly shortens the work time. It does not require a designer to leave focus and always stay in sync",
			title: "Utilization of time",
		},
		{
			text: "The ability for team leaders to simultaneously monitor both the design and the task while the designer is working. In this way, the ability to control, react, give feedback, and manage the tasks contributes a lot",
			title: "Command & Control",
		},
		{
			text: "The ability to synchronize the tasks together with different management tools can contribute in that the project itself that is opened in another tool will also receive the information that the designers give, the ability to involve the rest of the project team in the design tasks, a project manager can fill in gaps created between the design and development",
			title: "Sync with other tools",
		},
	];
	return (
		<div className="">
			<HeroProject resImage={{ url: "/images/projects/figmaManage/images/heroMobile.png", alt: "figmaManage Background" }} imageBG={{ url: "/images/projects/figmaManage/images/heroBG.png", alt: "figmaManage Background" }} image={{ url: "/images/projects/figmaManage/images/heroMockup.png", alt: "figmaManage" }} />
			<AboutProject data={aboutText} />
			<ManagingDesign
				bgColor="bg-projectBlack"
				grayHeader="PROBLEM SOLVE."
				textColor="text-projectWhite"
				title="Managing design
tasks in one place"
				cards={cards}
			/>
			<ManagingDesign bgColor="bg-projectWhite" grayHeader="Personas." textColor="text-projectBlack" title="Target Audience" cards={cards2} />
			<ListOneTwoThree bgColor={"bg-projectBlack"} textColor={"text-projectWhite"} numColor={"text-projectWhite"} title={"Why does it contribute?"} cards={oneTwoThreeData} greyText={"Advantages."} />
			<Dilemas bgColor={"bg-projectWhite"} textColor={"text-projectBlack"} greyText={"CHLLENGES & DILEMAS."} title={"Where it should be palced"} />
			<Price bgColor={"bg-projectBlack"} textColor={"text-projectWhite"} greyText={"pricing page"} title={"How much do you want to pay?"} subTitleText={"Before I started designing, I thought about how I wanted the page to look and what type of wireframes or structure would be clear, responsive, and fit the desired UI. Creating wireframes is a crucial step in the design process. It helps us identify any mistakes or misconceptions before we even start the UI, allowing us to make any necessary changes and create the best end result."} />
			<PriceUI
				bgColor={"bg-[#202020]"}
				textColor={"text-projectWhite"}
				greyText={"pricing page"}
				title={"User interface"}
				image={[
					{ url: "/images/projects/figmaManage/images/price4.png", alt: "price image" },
					{ url: "/images/projects/figmaManage/images/heroMockup.png", alt: "price image" },
				]}
				subTitleText={"I designed a stylish pricing page for our Figma plugin, with a bold black background and clean design to showcase its capabilities through animations and videos. Users can choose monthly or annual subscription options, with a trial option available. The goal is to clearly communicate the benefits of the plugin and make it affordable."}
			/>
			<UI bgColor={"bg-projectWhite"} textColor={"text-projectBlack"} greyText={"USER INTEERFACE"} title={"Style & Components"} image={{ url: "/images/projects/figmaManage/images/ui.png", alt: "ui image" }} subTitleText={"I designed a clean and minimal page for designer users, with a focus on current design trends. The goal is to provide important information in a simple, uncluttered space for easy navigation."} />
			<Presentation imageButton={{ url: "/icons/leftArrowBlack.svg", alt: "left arrow" }} bgColor={"bg-projectLightGray"} textColor={"text-projectBlack"} greyText={""} title={"Presentation"} image={{ url: "/images/projects/figmaManage/images/presentation.png", alt: "presentation image" }} subTitleText={"I understand the key elements of product branding and the design process and am confident in my ability to communicate these ideas effectively. With my attention to detail and love for design, I'm excited to share my expertise and make a positive impact with my presentation."} />
			<Contact />
			<ProjectNavigation previous="paamonim" next="redis" />
		</div>
	);
};

export default FigmaManage;
