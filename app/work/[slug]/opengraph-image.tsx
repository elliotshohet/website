import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";
import { SocialCard } from "../../social-card";

type ImageProps = { params: Promise<{ slug: string }> };

export function generateImageMetadata({ params }: { params: { slug?: string } }) {
  // Metadata routes enumerate image IDs before the dynamic slug is supplied.
  const project = params.slug ? getProject(params.slug) : undefined;
  if (params.slug && !project) return [];

  return [{
    id: "social",
    alt: project
      ? `${project.name} — ${project.title}. Engineering by Elliot Shohet.`
      : "Project engineering by Elliot Shohet.",
    size: { width: 1200, height: 630 },
    contentType: "image/png",
  }];
}

export default async function Image({ params }: ImageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return new ImageResponse(
    <SocialCard
      eyebrow={project.repository ? "PROJECT" : "ENGINEERING CASE STUDY"}
      heading={project.name}
      description={project.title}
      detail={project.tags.slice(0, 3).join(" · ")}
    />,
    { width: 1200, height: 630 },
  );
}
