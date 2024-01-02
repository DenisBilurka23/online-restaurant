'use client'

import { useState } from "react";
import Container from "../../Container";
import { FilterFood } from "@/app/utils/filters";
import Filters from "../../Filters";
import { useStateValue } from "@/app/context/StateProvider";
import {Title} from "@/app/components/Sections";

const MenuSection = ({title}:{title?:string}) => {

  const [scrollValue, setScrollValue] = useState(0);
  const [{ foodItems }, dispatch] = useStateValue();
  const [filter, setFilter] = useState<string>("all");
    
  return (
    <section className="w-full my-5" id="menu">
      <div className="w-full flex items-center justify-center">
        <Title title={title || "Our Hot Dishes"} center />
      </div>
      <Filters filter={filter} setFilter = {setFilter} />
      <Container
        className="bg-containerbg"
        col
        scrollOffset={scrollValue}
        items={filter === "all" ? foodItems : FilterFood(filter)}
      />
    </section>
  );
};

export default MenuSection;
