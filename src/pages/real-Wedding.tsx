import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRealWeddingById } from "../services/realwedding.services";
import "../assets/css/realweddings.css";

const base = "https://allhappyevents.jbservices.in/";
const imgUrl = (p?: string) => (p?.startsWith("http") ? p : base + p);

export default function RealWeddingDetails() {
  const { slug } = useParams();

  const { data } = useQuery({
    queryKey: ["real-wedding", slug],
    queryFn: () => getRealWeddingById(slug as string),
    enabled: !!slug,
  });

  if (!data) return null;

  const main =
    data.image || data.cover_image || data?.media?.[0]?.path;

  return (
    <div className="rw-details">
      <div className="rw-breadcrumb">
        <Link to="/">Home</Link> /{" "}
        <Link to="/real-weddings">Real Weddings</Link> /{" "}
        <span>{data.title}</span>
      </div>

      <div className="rw-hero">
        <img src={imgUrl(main)} />
        <div className="rw-hero-text">
          <h1>{data.title}</h1>
          <p>
            {data.location} •{" "}
            {new Date(data.date).toDateString()}
          </p>
        </div>
      </div>

      <div className="rw-story">{data.story}</div>

      <div className="rw-gallery">
        {(data.gallery || data.media || []).map((g: any, i: number) => (
          <img key={i} src={imgUrl(g.path || g)} />
        ))}
      </div>
    </div>
  );
}