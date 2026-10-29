export const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-6 text-3xl font-bold text-primary">About</h2>
      <div className="flex max-w-3xl flex-col gap-4 text-lg text-muted-foreground">
        <p>
          I&apos;m a full-stack software engineer based in Calgary. I like
          owning products end to end, from database schemas and APIs to the last
          details of the UI.
        </p>
        <p>
          Right now I&apos;m an early engineer at{" "}
          <span className="text-foreground">Quickly</span>, where I helped build
          a B2B invoicing and payments platform now used by 600+ businesses. On
          the side I build <span className="text-foreground">iCatholic</span>, a
          mobile app with 1,000+ downloads.
        </p>
        <p>
          I studied Computer Science and Philosophy at the University of
          Calgary. Away from the keyboard you&apos;ll find me training for
          endurance sports or volunteering.
        </p>
      </div>
    </section>
  );
};
