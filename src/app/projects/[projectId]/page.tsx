import ProjectPageContent from "./content";

export const generateStaticParams = () => [
  { projectId: "sanayi-odasi" },
  { projectId: "eximbank" },
];

export default function ProjectPage() {
  return <ProjectPageContent />;
}
