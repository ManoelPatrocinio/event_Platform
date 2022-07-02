import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import classNames from "classnames";

type PropSidebar ={
  valueMenuVisibility: boolean
}

export function Sidebar({valueMenuVisibility}:PropSidebar) {
  const { data } = useGetLessonsQuery();

  return (
    <aside className={ classNames(
      "md:block md:w-[348px] bg-gray-700 p-6 border-l border-gray-600",
      {
        "block absolute right-0 min-h-screen h-full w-[96%] z-10":valueMenuVisibility,
        "hidden":!valueMenuVisibility,

      }
    )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
