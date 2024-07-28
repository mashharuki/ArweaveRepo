import { useParams } from "react-router-dom";

/**
 * Article Component
 * @returns
 */
function Article() {
  const { id } = useParams();
  return <div>article {id}</div>;
}

export default Article;
