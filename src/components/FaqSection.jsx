import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export const  FaqSection = () => {
    return (
      
     <div className="pb-16 ">
      <div className="text-white  ">
      <p className="text-6xl font-bold text-center mb-8 ">Frequently Asked <span className="text-emerald-500">Questions</span></p>
        <Accordion type="single" collapsible className="h-8">
      <AccordionItem className="h-12 " value="item-1">
        <AccordionTrigger className="text-center text-2xl font-bold "> Can I customize my modular kitchen?</AccordionTrigger>
        <AccordionContent className="text-emerald-500 text-xl font-bold text-center">
        Absolutely! You can personalize every aspect of your modular kitchen, including the layout, materials, colors, finishes, and accessories. Our design experts will work closely with you to create a kitchen that meets your needs and reflects your style.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="h-12" value="item-2">
        <AccordionTrigger className="text-center text-2xl font-bold">What materials are used in modular kitchens?</AccordionTrigger>
        <AccordionContent className="text-emerald-500 text-xl font-bold text-center">
        We use a variety of high-quality materials such as MDF (Medium Density Fiberboard), HDF (High Density Fiberboard), plywood, stainless steel, and laminates. You can choose the materials based on your preferences and budget.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="h-12" value="item-3">
        <AccordionTrigger className="text-center text-2xl font-bold"> Are modular kitchens durable?</AccordionTrigger>
        <AccordionContent className="text-emerald-500 text-xl font-bold text-center">
        Yes, modular kitchens are designed for durability. The materials we use are resistant to heat, moisture, and pests, ensuring your kitchen remains in excellent condition for many years.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="h-12" value="item-4">
        <AccordionTrigger className="text-center text-2xl font-bold"> How do I start the process of getting a modular kitchen?</AccordionTrigger>
        <AccordionContent className="text-emerald-500 text-xl font-bold text-center">
        To get started, you can schedule a consultation with our design team. We will discuss your requirements, take measurements, and provide you with a customized design and quotation. Contact us today to begin creating your dream kitchen!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
                                                                                                                            
     </div>
     </div>
    )
  }
                