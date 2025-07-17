"use client";

import React from "react";
import { useState } from "react";
import Navbar, { defaultNavLinks } from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "../../react-medium-image-zoom.css";
import { useParams } from "next/navigation";

export default function ProjectPageContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const params = useParams<{ projectId: string }>();

  const getProjectType = () => {
    if (params.projectId === "sanayi-odasi") {
      return { id: "sanayi-odasi", imageCount: 8 };
    } else if (params.projectId === "eximbank") {
      return { id: "eximbank", imageCount: 5 };
    } else if (params.projectId === "teknopark") {
      return { id: "teknopark", imageCount: 5 };
    }

    return null;
  };

  // Define projects with their metadata
  const projects = [
    {
      id: "sanayi-odasi",
      title: "Kocaeli Sanayi Odası B Blok",
      description:
        "Since 2023, the project, which has been controlled and implemented by 1999, has a total area of 7200 m2, including 1200 m2 session area.\nThe control and implementation of the architectural and mechanical works, and the control of the electrical works were carried out by us.\nIn the building has a curtain aluminum glass facade system, and the basement floor is considered as a parking lot, while the ground floor is considered as an expo area. The intermediate floors have an office design, and a restaurant is planned on the roof floor.\nThe architectural project belongs to Olbia Architecture and the implementation was done by Segay.",
    },
    {
      id: "eximbank",
      title: "Eximbank Kocaeli İrtibat Ofisi",
      description:
        "Eximbank Kocaeli İrtibat Ofisi is an office project located in Kocaeli Chamber of Industry A Block. The interior architecture, electrical lines, and data lines' project revisions and implementation were worked on by us. This office consists of a work area of ​​approximately 30 m2 area for 2 personnel, a meeting area, and special sections belonging to the bank.",
    },
    {
      id: "teknopark",
      title: "Kocaeli Model Fabrika AŞ",
      description:
        "The construction and electrical implementation of the project located on the Kocaeli University Technopark campus in Başiskele were carried out by the Kocaeli Chamber of Industry, while the supervision of the construction, electrical, and landscaping works, as well as the layout planning, were undertaken by 1999.",
      //"Başiskele’de Kocaeli Üniversitesi Teknopark kampüsünde yer alan projenin inşaat ve elektrik uygulaması Segay tarafından yapılırken yerleşim planlaması tarafımızca yapılmıştır.",
    },
  ];

  // Sort projects to put the current one at the top
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.id === params.projectId) return -1;
    if (b.id === params.projectId) return 1;
    return 0;
  });

  const getProjectImages = () => {
    const projectType = getProjectType();
    if (!projectType) return [];

    return Array.from({ length: projectType.imageCount }, (_, index) => {
      switch (projectType.id) {
        case "sanayi-odasi":
          return `/p1${index + 1}.webp`;
        case "eximbank":
          return `/p2${index + 1}.webp`;
        case "teknopark":
          return `/p3${index + 1}.webp`;
        default:
          return "";
      }
    });
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Mobile Navbar */}
      <Navbar
        navLinks={defaultNavLinks}
        title="1999"
        onMenuToggle={setIsMenuOpen}
      />

      <div
        className={`flex-1 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-y-40" : "transform translate-y-0"
        }`}
      >
        <div className="hidden md:block w-72 fixed h-full bg-black p-8 z-50">
          <h1 className="text-white text-3xl tracking-tight mb-3 flex items-center">
            <span className="font-serif">1999</span>
          </h1>
          <p className="text-gray-400 text-sm tracking-wide mb-8">
            Project • Construction • Consultancy
          </p>
          <nav className="flex flex-col gap-4">
            {defaultNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors tracking-wide flex items-center"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:ml-48 min-h-screen bg-zinc-900 text-white p-6 pt-24 md:pt-12 md:pl-0 md:pr-0">
          <div className="md:ml-48 md:mr-0">
            <div className="px-6 pt-6 md:pt-12 md:px-12 md:pr-0">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-4">
                {/* Left Column - Project Links */}
                <div>
                  <h1 className="text-3xl font-bold tracking-tight mb-8">
                    Works
                  </h1>
                  <div className="grid gap-6"></div>

                  {sortedProjects.map((project) => (
                    <div
                      key={project.id}
                      className="text-white transition-colors cursor-pointer mb-4"
                    >
                      <Link
                        href={`/projects/${project.id}`}
                        className="text-lg"
                      >
                        {project.title}
                      </Link>

                      {params.projectId === project.id &&
                        project.description && (
                          <p className="text-md text-gray-400 mt-2">
                            {project.description.split("\n").map((text, i) => (
                              <React.Fragment key={i}>
                                {text}
                                {i !==
                                  project.description.split("\n").length -
                                    1 && <br />}
                              </React.Fragment>
                            ))}
                          </p>
                        )}
                    </div>
                  ))}
                </div>

                {/* Right Column - Scrollable Images */}
                <div
                  className={`md:h-[85vh] md:overflow-y-auto no-scrollbar w-full`}
                >
                  <div className="grid gap-4 max-w-full md:pr-4">
                    {getProjectImages().map((i, index) => (
                      <Zoom key={index}>
                        <div className="bg-zinc-800 rounded-lg aspect-video -mx-2 md:mx-0">
                          <div className="w-full h-full flex items-center justify-center text-gray-500 relative">
                            <Image
                              src={i}
                              alt={`Project Image ${index + 1}`}
                              width={600}
                              height={338}
                              className="w-full h-full object-cover rounded-lg"
                              sizes="(max-width: 768px) 100vw, 66vw"
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      </Zoom>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
