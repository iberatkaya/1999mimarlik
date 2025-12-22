import ProjectPageContent from "./content";

export const generateStaticParams = () => [
  { projectId: "sanayi-odasi" },
  { projectId: "eximbank" },
  { projectId: "teknopark" },
  { projectId: "savunma" },
];

export default function ProjectPage() {
  return <ProjectPageContent />;
}
