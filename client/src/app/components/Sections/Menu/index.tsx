'use client'

import { useState } from "react";
import Container from "../../Container";
import Filters from "../../Filters";
import { Title } from "..";

const MenuSection = ({title}:{title?:string}) => {

  const [scrollValue, setScrollValue] = useState(0);
  const foodItems = []
  const [filter, setFilter] = useState<string>("all");
    
  return (
    <section className="w-full my-5" id="menu">
      <div className="w-full flex items-center justify-center">
        <Title title={title || "Our Menu"} center />
      </div>
      <Filters filter={filter} setFilter={setFilter} />
      <Container
        className="bg-containerbg"
        col
        scrollOffset={scrollValue}
        items={foodItems}
      />
    </section>
  );
};

export default MenuSection;
