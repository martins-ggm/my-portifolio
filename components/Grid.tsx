import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg, descriptionClassName }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        // remove icon prop
                        // remove original classname condition
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                        descriptionCLassName={descriptionClassName}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;