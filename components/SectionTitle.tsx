export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="max-w-md mx-auto text-center py-10">
      <div className="flex items-center justify-center">
        <hr />
        <h2 className="text-xs uppercase font-semibold text-gray-500 tracking-widest font-pj">
          {title}
        </h2>
        <hr />
      </div>
    </div>
  );
}
