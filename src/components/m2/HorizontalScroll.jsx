import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const defaultProducts = [
  {
    id: 1,
    name: "INDUSTRIAL INSPECTION",
    description: "Industrial inspection and data collection for predictive maintenance, Security and surveillance of urban establishments",
    imageUrl: "/robot/m2.1.png"
  },
  {
    id: 2,
    name: "UPTO 5.2 KG PAYLOAD",
    description: "Move items effortlessly and carry payloads on slopes & stairs",
    imageUrl: "/robot/m2.2.png"
  },
  {
    id: 3,
    name: "PRECISE MANIPULATION",
    description: "Industrial inspection and data collection for predictive maintenance, Security and surveillance of urban establishments",
    imageUrl: "/robot/m2.3.png"
  }
]

export default function ProductCarousel({ products = defaultProducts }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Carousel
      className="w-full max-w-5xl mx-auto"
      onSelect={(index) => setCurrentIndex(index)}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <Card className="border-none shadow-none">
              <CardContent className="flex flex-col items-center justify-center p-12">
                <div className="relative w-[28rem] h-[28rem] mb-8">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="text-center max-w-2xl">
                  <h3 className="text-3xl font-semibold mb-4">{product.name}</h3>
                  <p className="text-xl text-muted-foreground">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 lg:-left-20" />
      <CarouselNext className="right-4 lg:-right-20" />
      <div className="flex justify-center mt-8">
        {products.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 mx-2 rounded-full ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </Carousel>
  )
}