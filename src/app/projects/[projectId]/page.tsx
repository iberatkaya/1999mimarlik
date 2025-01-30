import ProjectPageContent from "./content";

export const generateStaticParams = () => [
  { projectId: "sanayi-odasi" },
  { projectId: "kapanca-otel" },
];

export default function ProjectPage() {
  return <ProjectPageContent />;
}
