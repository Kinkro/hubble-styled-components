import { StyledCard } from "./styles/Card.styled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h1>{title}</h1>

        <p>{body}</p>
      </div>
      <div>
        <img src={require(`../images/${image}`)} alt="" />
      </div>
    </StyledCard>
  );
}
