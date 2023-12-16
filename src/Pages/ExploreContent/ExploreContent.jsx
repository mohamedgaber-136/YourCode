import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SideBarContent } from "../../Components/SideBarContent/SideBarContent";

export const ExploreContent = () => {
  let { content, section } = useParams();

  let dataSplite = [
    {
      id: "Html5",
      content: [
        {
          title: "Tutorial",
          list: ["Intro", "Tutorial", "Tutorial", "Tutorial", "Tutorial"],
        },
        {
          title: "Details",
          list: ["Details", "Details", "Details", "Details", "Details"],
        },
        {
          title: "Advanced",
          list: ["Advanced", "Advanced", "Advanced", "Advanced", "Advanced"],
        },
        {
          title: "Examples",
          list: ["Examples", "Examples", "Examples", "Examples", "Examples"],
        },
        {
          title: "Reference",
          list: [
            "Reference",
            "Reference",
            "Reference",
            "Reference",
            "Reference",
          ],
        },
      ],
    },
    {
      id: "CSS3",
      content: [
        {
          title: "Tutorial",
          list: ["Intro", "Tutorial", "Tutorial", "Tutorial", "Tutorial"],
        },
        {
          title: "Details",
          list: ["Details", "Details", "Details", "Details", "Details"],
        },
        {
          title: "Advanced",
          list: ["Advanced", "Advanced", "Advanced", "Advanced", "Advanced"],
        },
        {
          title: "Examples",
          list: ["Examples", "Examples", "Examples", "Examples", "Examples"],
        },
        {
          title: "Reference",
          list: [
            "Reference",
            "Reference",
            "Reference",
            "Reference",
            "Reference",
          ],
        },
      ],
    },
    {
      id: "BS5",
      content: [
        { title: "Tutorial", list: ["Intro"] },
        {
          title: "Details",
          list: [],
        },
        {
          title: "Advanced",
          list: [],
        },
        {
          title: "Examples",
          list: [],
        },
        {
          title: "Reference",
          list: [],
        },
      ],
    },
    {
      id: "JQUERY",
      content: [
        { title: "Tutorial", list: ["Intro"] },
        {
          title: "Details",
          list: [],
        },
        {
          title: "Advanced",
          list: [],
        },
        {
          title: "Examples",
          list: [],
        },
        {
          title: "Reference",
          list: [],
        },
      ],
    },
    {
      id: "JavaScript",
      content: [
        { title: "Tutorial", list: ["Intro"] },
        {
          title: "Details",
          list: [],
        },
        {
          title: "Advanced",
          list: [],
        },
        {
          title: "Examples",
          list: [],
        },
        {
          title: "Reference",
          list: [],
        },
      ],
    },
    {
      id: "EcmaScript6",
      content: [
        { title: "Tutorial", list: ["Intro"] },
        {
          title: "Details",
          list: [],
        },
        {
          title: "Advanced",
          list: [],
        },
        {
          title: "Examples",
          list: [],
        },
        {
          title: "Reference",
          list: [],
        },
      ],
    },
    {
      id: "ReactJs",
      content: [
        { title: "Tutorial", list: ["Intro"] },
        {
          title: "Details",
          list: [],
        },
        {
          title: "Advanced",
          list: [],
        },
        {
          title: "Examples",
          list: [],
        },
        {
          title: "Reference",
          list: [],
        },
      ],
    },
    {
      id: "OOP",
      content: [
        { title: "Tutorial", list: ["Intro"] },
        {
          title: "Details",
          list: [],
        },
        {
          title: "Advanced",
          list: [],
        },
        {
          title: "Examples",
          list: [],
        },
        {
          title: "Reference",
          list: [],
        },
      ],
    },
    {
      id: "Dart",
      content: [
        { title: "Tutorial", list: ["Intro"] },
        {
          title: "Details",
          list: [],
        },
        {
          title: "Advanced",
          list: [],
        },
        {
          title: "Examples",
          list: [],
        },
        {
          title: "Reference",
          list: [],
        },
      ],
    },
    {
      id: "Flutter",
      content: [
        { title: "Tutorial", list: ["Intro"] },
        {
          title: "Details",
          list: [],
        },
        {
          title: "Advanced",
          list: [],
        },
        {
          title: "Examples",
          list: [],
        },
        {
          title: "Reference",
          list: [],
        },
      ],
    },
  ];

  const found = dataSplite.find((item) => item.id == content);

  const navigator = useNavigate();
  useEffect(() => {
    console.log(found, "found");
    navigator(`/Explore/${content}/${found.content[0].list[0]}`);
  }, [content]);

  return (
    <>
      <div  style={{ height: "99px" }} />
      <div className="vh-100 d-flex align-items-start justify-content-start">
        <SideBarContent content={content} list={found.content} />
        <div className="p-4 m-2 bg-light rounded-2 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
          <h2>{content}</h2>
          <h3>{section}</h3>
          <p>
            Enim ea labore aliquip deserunt labore ut esse magna ullamco qui ex
            voluptate aliquip est. Adipisicing et eiusmod aliqua cupidatat
            ullamco labore est fugiat irure. Enim nostrud non tempor
            reprehenderit ad. Mollit eiusmod cillum ex nisi eu ex ex mollit.
            Consequat nisi aliqua ullamco ad Lorem labore nostrud cupidatat anim
            id nostrud esse. Ea est laborum est est amet mollit incididunt.
          </p>
        </div>
      </div>
    </>
  );
};
