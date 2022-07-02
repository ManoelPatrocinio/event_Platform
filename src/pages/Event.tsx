import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [menuVisibility, setMenuVisibity] = useState<boolean>(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMenuVisibility={setMenuVisibity} valueMenu={menuVisibility}/>
      <main className="flex flex-1 relative">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar valueMenuVisibility={menuVisibility}/>
      </main>
    </div>
  );
}
