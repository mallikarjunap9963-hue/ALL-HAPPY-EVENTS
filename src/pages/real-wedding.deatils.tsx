import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRealWeddingById } from "../services/realwedding.services";
import "../assets/css/realweddings.css";

const base = "https://allhappyevents.jbservices.in/";
const imgUrl = (p?: string) => (p?.startsWith("http") ? p : base + p);

export default function RealWeddingDetails() {
  const { slug } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["real-wedding", slug],
    queryFn: () => getRealWeddingById(slug as string),
    enabled: !!slug,
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (!data) return <h3>No data found</h3>;

  // ✅ SAFELY EXTRACT REAL OBJECT FROM ANY API SHAPE
  const wedding =
    data.real_wedding ||
    data.data ||
    data;

  console.log("DETAIL API =>", wedding);

  const mainImage =
    wedding.image ||
    wedding.cover_image ||
    wedding?.media?.[0]?.path;

  const gallery =
    wedding.gallery ||
    wedding.images ||
    wedding.media ||
    [];

  return (
    <div className="rw-details">
      <div className="rw-breadcrumb">
        <Link to="/">Home</Link> /{" "}
        <Link to="/real-weddings">Real Weddings</Link> /{" "}
        <span>{wedding.title}</span>
      </div>

      <div className="rw-hero">
        <img src={imgUrl(mainImage)} />
        <div className="rw-hero-text">
          <h1>{wedding.title}</h1>
          <p>
            {wedding.location} •{" "}
            {wedding.date
              ? new Date(wedding.date).toDateString()
              : ""}
          </p>
        </div>
      </div>

      <div
        className="rw-story"
        dangerouslySetInnerHTML={{ __html: wedding.story }}
      />

      <div className="rw-gallery">
        {gallery.map((g: any, i: number) => (
          <img key={i} src={imgUrl(g.path || g)} />
        ))}
      </div>
    </div>
  );
}