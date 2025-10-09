export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="container mx-auto max-w-3xl p-6">
      <h1 className="font-sans text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Project: {slug}
      </h1>
      <p className="font-sans text-gray-600 dark:text-gray-400">
        Detail project akan segera hadir.
      </p>
    </section>
  );
}
