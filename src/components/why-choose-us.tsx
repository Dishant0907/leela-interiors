import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export function WhyChooseUs() {
    return (
        <>
            <div className="flex justify-center mx-3   ">

                <h2 className="text-6xl  mx-1 font-bold text-white text-center mb-[4rem]" >why </h2>
                <h2 className="text-6xl   mx-1 text-emerald-500 font-bold text-center mb-[4rem]" >choose</h2>
                <h2 className="text-6xl  mx-1 font-bold text-white text-center mb-[4rem]" > us </h2>



            </div>



            <BentoGrid className="my-[2rem]   md:w-[80rem] mb-[8rem] mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>

        </>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Custom Kitchen Design",
        description: "Tailored kitchen designs to suit your specific requirements, preferences, and space constraints.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "3D Visualization",
        description: "High-quality 3D renderings of proposed kitchen designs for detailed visualization before installation.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Premium Materials",
        description: "Usage of high-quality materials and finishes in modular kitchen components, ensuring durability and aesthetics.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Smart Kitchen Solutions",
        description: "Integration of smart technology and innovative solutions for enhanced convenience, efficiency, and functionality.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Professional Installation",
        description: "Expert installation services carried out by skilled technicians for seamless assembly and setup.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "After-Sales Support",
        description: "Comprehensive after-sales support including warranty services, maintenance tips, and assistance with any concerns.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Eco-Friendly Options",
        description: "Offering eco-friendly modular kitchen options with sustainable materials and energy-efficient appliances.",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Consultation and Design Advice",
        description: "Expert consultation and design advice throughout the entire process, from concept development to implementation.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    }
];

