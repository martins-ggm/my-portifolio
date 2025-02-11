import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { ImInsertTemplate } from 'react-icons/im'
import { gridItems } from '@/data'

export const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>{gridItems.map(
                ({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (<BentoGridItem id={id} key={id} title={title} description={description} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg}>

                </BentoGridItem>))}</BentoGrid>
        </section>
    )
}
