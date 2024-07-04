import Navbar from "../components/navbar/Navbar";
import TemplateCard from "../components/navbar/TemplateCard";
import { themes } from "../themes/themes";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-4 w-full h-full items-center justify-center overflow-auto px-12 py-12">
        <h1 className="font-bold text-2xl">Select a Template</h1>
        <div className="">
          <div className="flex gap-4 flex-wrap items-center justify-center max-w-7xl">
            {themes.map((theme, index) => (
              <TemplateCard
                key={index}
                id={theme.id}
                name={theme.name}
                description={theme.description}
                thumbnail={theme.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
