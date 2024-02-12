type Props = { params: { slug: string[] } };

export default function DetailAbout2Pages(props: Props) {
  return (
    <div>
      <h1>Hahahaha</h1>
      {props.params.slug.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
}
