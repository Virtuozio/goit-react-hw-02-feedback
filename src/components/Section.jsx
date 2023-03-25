export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="adwwd">{title}</h2>
      {children}
    </section>
  );
};
