interface HeadingProps {
  children: string;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-gold text-center sm:text-start text-4xl font-concertOne mb-2">
      {children}
    </h1>
  );
}
